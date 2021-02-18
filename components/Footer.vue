<template>
  <div>
    <div class="md:h-65 flex flex-col justify-between bg-sgraydark py-8">
      <div class="px-4 md:px-0">
        <div class="max-w-lg mx-auto">
          <div class="w-64 text-darkcolor">
            <p class="text-5xl font-semibold">Let's talk about you</p>
          </div>
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="w-full md:w-1/22">
              <button class="bg-white mt-3 hover:bg-gray-300 hover:border-gray-300 transition ease-in duration-300 text-sm flex outline-none focus:outline-none items-center w-full justify-between px-4 py-3 rounded">
                <span class="hover:underline">Contact us</span>
                <svg class="w-6 h-6" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#0488E0"/>
                  <path d="M8.51625 7.41024V4.88574H7.44525V7.41024H4.92075V8.41749H7.44525V11.0057H8.51625V8.41749H11.0407V7.41024H8.51625Z" fill="#fff"/>
                </svg>
              </button>
            </div>
            <div class="md:px-5 text-darkcolor font-light text-lg mt-3">
              or
            </div>
            <div class="w-full md:w-1/22">
              <button class="border mt-3 hover:border-gray-600 transition ease-in duration-300 text-sm flex outline-none focus:outline-none items-center w-full justify-between px-4 py-3 rounded">
                <span class="text-white max-w-xs hover:underline">Start a conversation</span>
                <svg class="w-6 h-6" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ececec"/>
                  <path d="M8.51625 7.41024V4.88574H7.44525V7.41024H4.92075V8.41749H7.44525V11.0057H8.51625V8.41749H11.0407V7.41024H8.51625Z" fill="#4F4F4F"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 sm:px-8 mt-10 md:px-10 lg:px-14 xl:px-16">
        <div class="border-b border-darkcolor pb-8">
          <div class="md:max-w-xl flex flex-col md:flex-row items-center md:mx-auto md:justify-between text-darkcolor">
            <div class="w-full text-base md:w-1/2">
              sblend.co is a creative and digital
              studio that creates digital products
              and brands, we aim to surprise
            </div>
            <div class="w-full md:w-1/22 mt-10 text-base md:mt-0 flex md:justify-end">
              <div>
                <p>Contact</p>
                <p class="underline hover:no-underline">hello@sblend.co</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex lg:items-center justify-between text-darkcolor">
          <div class="pt-4">
            <p class="text-sm underline hover:no-underline">&copy; 2020 sblend.co</p>
          </div>
          <div class="pt-4">
            <ul class="flex flex-col lg:flex-row text-sm items-right">
              <li>Connect:</li>
              <li class="lg:ml-6 mt-4 md:mt-0 underline hover:no-underline">Facebook</li>
              <li class="lg:ml-6 underline hover:no-underline">Linkedin</li>
              <li class="lg:ml-6 underline hover:no-underline">Instagram</li>
              <li class="lg:ml-6 underline hover:no-underline">Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>