<template>
  <div>
    <div class="lg:h-65 bg-center" style="background:url('images/bg.png') no-repeat;  background-size: cover;">
      <Header/>
        <transition :css="false" @enter="enter" @leave="leave" appear>
          <slot/>
        </transition>
      <Footer/>
    </div>
  </div>
</template>

<script>
import {TimelineMax,TweenMax,Power4} from 'gsap'
  export default{
    methods:{
      enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})
			
			tl.set(el, {
				x: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%'
			})
			
			tl.to(el, 0.5, {
				x: 0,
				ease: Power4.easeOut
			});
			
			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut
			});
		},
		leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1
			}, {
				autoAlpha: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
		}	
    }
  }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
