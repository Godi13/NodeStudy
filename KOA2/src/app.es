/*
 *@Description Test
 *@Author mqzq9388@gmail.com
 *@Date 2016-11-11
 */
'use strict';
import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import CONFIG from './conf/config';
import co from 'co';
import convert from 'koa-convert'; //koa1 转换器
import serve from 'koa-static';
import controllers from './controllers/controllerInit';
import "babel-core/register";
import "babel-polyfill";

const app = new Koa();
app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory', //disable, set to false
    ext: 'html',
    writeBody: false
}));

controllers.getAllrouters(app, router); //初始化controllers
app.use(convert(serve(CONFIG.get('staticDir'))));

//监听端口🐂😊
app.listen(CONFIG.get('port'));
console.log('listening on port %s', CONFIG.get('port'));

// export default app;
// 测试 service
module.exports = app;
