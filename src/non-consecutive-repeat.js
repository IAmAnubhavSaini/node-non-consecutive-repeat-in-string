"use strict";
function nonConsecutiveRepeat(input) {
    return Array.prototype.filter.call(input, function (c, i, a) { return a[i + 1] !== c; }).join('');
}
module.exports = { nonConsecutiveRepeat: nonConsecutiveRepeat };
