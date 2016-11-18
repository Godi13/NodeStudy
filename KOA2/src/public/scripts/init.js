require('../stylesheets/index.less');
import thumb from './index';

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
          this.element.css('-webkit-filter', 'grayscale(0)');
          xtag.query(document.body, 'ul li').addClass('num');
          this.num = add(this.num);
          setTimeout(function() {
            $('#animation').removeClass('num');
          }, 1000);
        } else {
          //如果点击数量大于10 加灰
          this.element.css('-webkit-filter', 'grayscale(1)');
          this.num = 0;
        }
        thumbapp.sendAction(data.get('num'));
      }
    }
  }
})
