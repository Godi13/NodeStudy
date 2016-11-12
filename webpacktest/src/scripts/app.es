require('../stylesheets/index.less');
const str = "test es6";
import $ from 'jquery';

function app() {
    console.log(str);
    console.log($);
    $('#js-test').click(function(event) {
        alert('我是jquery');
    });
}
app();
