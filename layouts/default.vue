<template>
  <div class="max-w-screen-xl mx-auto">
		<transition 
      name="page"
    >
    	<Nuxt />
		</transition>
  </div>
</template>

<script>
import {TimelineMax,TweenMax,Power4} from 'gsap'
  export default{
    methods:{
    //   enter(el, done) {
    //     TweenMax.fromTo(el, 1, {
    //       autoAlpha: 0,
    //       scale: 1.5 },
    //     {
    //       autoAlpha: 1,
    //       scale: 1,
    //       transformOrigin: '100% 0%',
    //       ease: Power4.easeOut,
    //       onComplete: done });

    //   },
    //   leave(el, done) {
    //   TweenMax.fromTo(el, 1, {
    //     autoAlpha: 1,
    //     scale: 1 },
    //   {
    //     autoAlpha: 0,
    //     scale: 0.8,
    //     ease: Power4.easeOut,
    //     onComplete: done });

    // }
    }
  }
</script>
<style>
.page-enter-active, .page-leave-active {
  transition: opacity 2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
