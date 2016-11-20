import axios from 'axios';

//声明父类
class praiseButton {
  sendAction(num) {
    axios.get('/getdata?num=' + num)
    .then(function(response) {
      console.log(response.data.msg);
    })
    .catch(function(error) {
      console.log('http error');
    });
  }
}
//创建并继承大拇指子类 并真正传入要要实现的页面元素
class thumb extends praiseButton {}
//输出thumb模块
export default thumb;
