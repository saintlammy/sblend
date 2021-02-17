<template>
  <div>
    <div class="px-4 sm:px-8 mt-8 md:mt-10 md:px-10 lg:px-14 xl:px-16 relative">
      <div class="flex items-center justify-between">
        <div class="w-1/2 xl:border-b border-sgraydarker pb-2">
          <div class="flex flex-wrap items-center justify-between">
            <div class="w-1/2">
              <nuxt-link to="/"><img src="/images/web_logo.svg" class="w-32 hidden sm:block" alt=""></nuxt-link>
              <nuxt-link to="/"><img src="/images/mobile_logo.svg" class="w-8 sm:hidden" alt=""></nuxt-link>
            </div>
            <div class="w-1/2 inline-flex justify-end">
              <div class="hidden xl:block">
                <ul class="flex items-center text-lg header">
                  <li class="hover:font-semibold ease-in transition-all duration-400 text-sblack">
                    <nuxt-link title="Works" to="/works">Works</nuxt-link>
                  </li>
                  <li class="hover:font-semibold ease-in transition-all duration-400 text-sblack ml-12">
                    <nuxt-link to="/studio" title="Studio">Studio</nuxt-link>
                  </li>
                  <li class="hover:font-semibold ease-in transition-all duration-400 text-sblack ml-12">
                    <nuxt-link to="/contact" title="Contact">Contact</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex items-center justify-end">
          <div class="xl:hidden sm:-mt-2">
            <svg @click="open = !open" width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="34" y2="1" stroke="black" stroke-width="2"/>
            <line x1="17" y1="9" x2="34" y2="9" stroke="black" stroke-width="2"/>
            <line x1="6" y1="17" x2="34" y2="17" stroke="black" stroke-width="2"/>
            </svg>
          </div>
          <div class="hidden xl:block">
            <div class="flex items-center">
              <a href="" title="Let's Talk" class="hover:font-semibold text-lg transition-all duration-400 text-sblack">Let's Talk</a>
              <div class="ml-2">
                <img src="/images/talk.svg" class="w-8" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav_toggle h-screen w-full top-0 left-0 fixed z-50 bg-white" v-show="open">
        <div class="h-screen flex flex-col justify-center relative">
          <button @click.prevent="openMenu" class="absolute outline-none focus:outline-none top-0 right-0 pr-8 pt-8">
            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul class="mx-auto">
            <nuxt-link to="/"><li class="text-2xl lg:text-3xl text-center">Home</li></nuxt-link>
            <nuxt-link to="/works"><li class="text-2xl lg:text-3xl mt-6 text-center">Works</li></nuxt-link>
            <nuxt-link to="/studio"><li class="text-2xl lg:text-3xl mt-6 text-center">Studio</li></nuxt-link>
            <nuxt-link to="/contact"><li class="text-2xl lg:text-3xl mt-6 text-center">Contact</li></nuxt-link>
          </ul>
          <div class="mx-auto mt-6 w-1/4">
            <button class="bg-sblue text-white py-3 text-xl lg:text-2xl w-full rounded-lg outline-none focus:outline-none">Lets Talk</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, TimelineMax,Tweenmax,Power4,Expo,Linear,Elastic } from "gsap/dist/gsap";
  export default {
    data(){
      return{
        open:false
      }
    },
    methods:{
      openMenu(){
        this.open = !this.open
      }
    },
    mounted(){
      let tl = gsap.timeline({paused: true})
      
      if(this.open == true ){
        tl.to(".nav_toggle", 2, {
          top:"0%",
          ease:Expo.easeInOut,
          delay:-2
        })

        tl.staggerFrom(".nav_toggle ul li", 2, {x:-200,opacity:0, ease:Expo.easeInOut}, 0.3)
        tl.reverse()
      }
    }
  }
</script>

<style>
li a {
    display:inline-block;
    text-align:center;
}
.header a::before {
  display: block;
  content: attr(title);
  font-weight: 700;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>