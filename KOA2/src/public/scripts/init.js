require('../stylesheets/index.css');
import xtag from 'x-tag';
import thumb from './index';
import add from './add';

const thumbIns = new thumb;
const data = new Map();
data.set('num', 0);
xtag.register('x-foo', {
  content: `
  <div class="hand" id="thumb">
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger thumb"></div>
    <div class="arm"></div>
  </div>
  <span class="hide" id="animation">+1</span>
  `,
  events: {
    click(e) {
      if (e.target.id == "thumb") {
        if (data.get('num') < 10) {
          //如果点击数量小于10 直接去掉滤镜
          xtag.query(document.body, '#thumb')[0].style.webkitFilter = 'grayscale(0)';
          xtag.query(document.body, '#animation')[0].className += " num";
          data.set('num', add(data.get('num')));
          setTimeout(() => {
            xtag.query(document.body, '#animation')[0].className = "hide";
          }, 1000);
        } else {
          //如果点击数量大于10 加灰
          xtag.query(document.body, '#thumb')[0].style.webkitFilter = 'grayscale(1)';
          data.set('num', 0);
        }
        thumbIns.sendAction(data.get('num'));
      }
    }
  }
})
