import {animate,stagger} from "animejs";
export function startNowPlaying(el,{cycleMs=3200}={}) {
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return {pause(){},resume(){}};
 const animation=animate(el.querySelectorAll('.playing-bars i'),{scaleY:[.25,1,.45,.8,.25],duration:cycleMs,delay:stagger(120),loop:true});
 return {pause:()=>animation.pause(),resume:()=>animation.resume()};
}