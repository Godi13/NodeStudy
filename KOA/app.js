var koa = require('koa');
var app = koa();
var router = require('koa-router')();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(function * (next) {
    var start = new Date;
    console.log('顺序1');
    yield next;
    var ms = new Date - start;
    console.log('顺序5');
    console.log('%s %s - %s', this.method, this.url, ms);
});
app.use(function * pageNotFound(next) {
    console.log('顺序2');
    yield next;
    console.log('顺序4');
    if (404 != this.status) return;

    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
    this.status = 404;

    switch (this.accepts('html', 'json')) {
        case 'html':
            this.type = 'html';
            this.body = '<p>Page Not Found</p>';
            break;
        case 'json':
            this.body = {
                message: 'Page Not Found'
            };
            break;
        default:
            this.type = 'text';
            this.body = 'Page Not Found';
    }
});
// response
router.get('/', function * (next) {
    console.log('顺序3');
    this.body = 'Hello World!';
});

app.listen(3000);