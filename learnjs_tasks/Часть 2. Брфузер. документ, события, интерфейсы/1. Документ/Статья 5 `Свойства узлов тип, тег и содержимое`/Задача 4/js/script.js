'use strict';

alert(document.constructor.name);

alert(HTMLDocument.prototype.constructor.name);
alert(HTMLDocument.prototype.__proto__.constructor.name);
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name);