'use strict';

seajs.use(['./script/index-o'], function(index) {
    var _index = index;

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var f = new _index.thumb(0, $('#thumb'));
    f.clickAction();
});