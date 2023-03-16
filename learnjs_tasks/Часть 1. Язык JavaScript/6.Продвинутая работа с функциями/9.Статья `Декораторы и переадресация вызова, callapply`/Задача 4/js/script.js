'use strict';

describe("throttle(f, 1000)", function() {
  let f1000;
  let log = "";

  function f(a) {
    log += a;
  }

  before(function() {
    f1000 = throttle(f, 1000);
    this.clock = sinon.useFakeTimers();
  });

  it("1-й вызов происходит немедленно", function() {
    f1000(1);
    assert.equal(log, "1");
  });

  it("далее вызовы игнорируются до истечения 1000 мс от последнего вызова", function() {
    f1000(2);
    f1000(3);

    assert.equal(log, "1");

    this.clock.tick(1000);
    assert.equal(log, "13"); 
  });

  it("3-й вызов ждет 1000 мс от 2-го", function() {
    this.clock.tick(100);
    f1000(4);
    this.clock.tick(100);
    f1000(5);
    this.clock.tick(700);
    f1000(6);

    this.clock.tick(100);

    assert.equal(log, "136");
  });

  after(function() {
    this.clock.restore();
  });

});