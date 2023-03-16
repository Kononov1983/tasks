'use strict';

describe("debounce", function() {
  before(function() {
    this.clock = sinon.useFakeTimers();
  });

  after(function() {
    this.clock.restore();
  });

  it("вызывает функцию один раз в 'ms' мс", function() {
    let log = '';

    function f(a) {
      log += a;
    }

    f = debounce(f, 1000);

    f(1);
    f(2);

    setTimeout(() => f(3), 100);
    setTimeout(() => f(4), 1100); 
    setTimeout(() => f(5), 1500);

    this.clock.tick(5000);
    assert.equal(log, "14");
  });

  it("сохраняет контекст вызова", function() {
    let obj = {
      f() {
        assert.equal(this, obj);
      }
    };

    obj.f = debounce(obj.f, 1000);
    obj.f("test");
  });

});