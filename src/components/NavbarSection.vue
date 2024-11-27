<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { useRoute, RouterLink } from 'vue-router';

  const route = useRoute();
  const currentRoute = ref();
  const mobileMenuOpen = ref(false)

  const handleNavigation = (href) => {
      if (href.startsWith('#')) {
        // Handle anchor scrolling
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth',
          });
        }
      } else {
        window.location.href = href;
      }
  };

  const getCurrentRoute = () => {
    if(route.hash){
      currentRoute.value = route.hash;
      history.replaceState(null, null, " ");
    }else{
      currentRoute.value = route.fullPath;
    }

  }

  watch(
    () => route,
    (newHash) => {
      console.log('Hash changed:', newHash.hash);
      currentRoute.value = newHash.hash;
      console.log(currentRoute.value)
      history.replaceState(null, null, " ");
    }
  );

  onMounted(() => {
    getCurrentRoute()
  })
</script>
<template>
  <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
        <!-- <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div> -->
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-7 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur px-8 py-2.5 rounded-full">

          <RouterLink
            to="/"
            class="text-sm/6 font-semibold text-gray-900 group relative">
            Home
            <span
            :class="`${(currentRoute == '/') ? 'visible' : 'invisible' } group-hover:visible absolute inset-x-0 -bottom-[12px] h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 w-full`"></span>
          </RouterLink>
          <a
            href="/#about"
            class="text-sm/6 font-semibold text-gray-900 group relative">
            About
            <span
            :class="`${(currentRoute == '#about') ? 'visible' : 'invisible' } group-hover:visible absolute inset-x-0 -bottom-[12px] h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 w-full`"></span>
          </a>
          <a
            href="/#projects"
            class="text-sm/6 font-semibold text-gray-900 group relative">
            Projects
            <span
            :class="`${(currentRoute == '#projects') ? 'visible' : 'invisible' } group-hover:visible absolute inset-x-0 -bottom-[12px] h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 w-full`"></span>
          </a>
          <a
            href="/blogs"
            class="text-sm/6 font-semibold text-gray-900 group relative">
            Blogs
            <span
            :class="`${(currentRoute == 'blogs') ? 'visible' : 'invisible' }group-hover:visible absolute inset-x-0 -bottom-[12px] h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 w-full`"></span>
          </a>
          <a
            href="/#contact"
            class="text-sm/6 font-semibold text-gray-900 group relative">
            Contact Me
            <span
            :class="`${(currentRoute == '#contact') ? 'visible' : 'invisible' }group-hover:visible absolute inset-x-0 -bottom-[12px] h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 w-full`"></span>
          </a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6 shadow-md">
                <a
                @click.prevent="handleNavigation(item.href)"
                 v-for="item in navigation"
                 :key="item.name"
                 :href="item.href"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
</template>
