/**
 * Created by 周宗仁 on 2017/8/31.
 */
import {
  trigger, // 动画封装触发，外部的触发器
  state, // 转场状态控制
  style, // 用来书写基本的样式
  transition, // 用来实现css3的 transition
  animate, // 用来实现css3的animations
  keyframes, // 用来实现css3 keyframes的
} from '@angular/animations';
let time=new Date()
let hourDeg=`rotate(${(time.getHours()+time.getMinutes()/60+time.getSeconds()/3600)/12*360}deg)`
let minuteDeg=`rotate(${(time.getMinutes()+time.getSeconds()/60)/60*360}deg)`
let secondDeg=`rotate(${time.getSeconds()/60*360}deg)`
export const hourHand = trigger('hourHand', [
  state('hour', style({ transform: hourDeg })), // 默认时针角度
  transition('void => hour', [ // 进场动画
    animate('43200s',
      style({ transform: hourDeg }), // 旋转360至该角度
    )
  ]),
]);
export const minuteHand = trigger('minuteHand', [
  state('minute', style({ transform: minuteDeg })), // 默认分针角度
  transition('void => minute', [ // 进场动画
    animate('3600s',
      style({ transform: minuteDeg }), // 旋转360至该角度
    )
  ]),
]);
export const secondHand = trigger('secondHand', [
  state('second', style({ transform: secondDeg })), // 默认秒针角度
  transition('* => *', [ // 进场动画
    animate('60s',
      style({ transform: secondDeg }), // 旋转360至该角度
    )
  ]),
]);
