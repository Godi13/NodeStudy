import $ from 'jquery';
import add from './add';
import axios from 'axios';
//声明父类
class praiseButton {
  constructor(num, element) {
    //初始化构造 最初点击数为0
    this.num = num;
    //注册子类点击按钮
    this.element = element;
    this.timer = null;
  }
  sendAction() {
    axios.get('/getdata?num=' + this.num)
    .then(function(response) {
      console.log(response.data.msg);
    })
    .catch(function(error) {
      console.log('http error');
    });
  }
}
//创建并继承大拇指子类 并真正传入要要实现的页面元素
class thumb extends praiseButton {
  constructor(num, element) {
    super(num, element)
  }
}
//输出thumb模块
export default { thumb };
//声明变量 构造类 执行点击动作
// let f = new thumb(0, $('#thumb'));
// f.clickAction();
