<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: false
  }
})
</script>
<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl pt-32">
        <div class="text-center">
          <h1 class="text-7xl font-semibold tracking-tight text-zinc-800 leading-[1.1]">{{ props.title }}</h1>
          <p class="mt-8 text-pretty text-base text-zinc-600">{{ props.subTitle }}</p>
          <div class="mt-10 flex items-center justify-center gap-x-6 flex-col">
            <div class="mb-6">
              <a href="#" class="rounded-md px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 flex items-center">
                My Projects
                <svg class="size-6 ml-3 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z"></path> </g></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
