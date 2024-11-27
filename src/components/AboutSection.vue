<script setup>
  import { collection, query, getDocs } from "firebase/firestore";
  import { db } from "../firebase.js";
  import { onMounted, ref, defineProps } from "vue";

  const infos = ref([]);
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

  const getAboutInfo = async () => {
    try {
      const infoRef = collection(db, "about");
      const q = query(infoRef);
      const querySnapshot = await getDocs(q);

      const infoObj = querySnapshot.docs.map((doc) => ({
        about_description: doc.data().about_description,
        about_heading: doc.data().about_heading,
      }));

      infos.value = infoObj;
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };
  onMounted(() => {
    getAboutInfo();
  });
</script>

<template>
  <div class="mx-auto mt-2 max-w-7xl px-6 sm:mt-20 lg:px-10 py-10" id="about">
    <div class="mx-auto flex max-w-2xl flex-col justify-between gap-20 lg:mx-0 lg:max-w-none lg:flex-row">
      <div class="w-full lg:max-w-lg lg:flex-auto">
        <div v-if="infos[0]">
          <h2 class="text-pretty text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl">
            {{ props.title }}
          </h2>
          <p class="mt-6 text-zinc-600 space-y-7 leading-7">
            {{ props.subTitle }}
          </p>
        </div>

      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <img
        src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80" alt=""
        class="aspect-square rotate-3 rounded-2xl bg-gray-50 grayscale"
        width="600" height="400" />

        <div class="flex flex-col gap-4 mt-12">
          <a href="https://www.behance.net/kierenquimosquimos" target="_blank" class="text-gray-600 hover:text-[#06B6D4] flex gap-4">
            <svg class="size-6" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M472,0H40C17.9,0,0,17.9,0,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V40C512,17.9,494.1,0,472,0z M482,472 c0,5.5-4.5,10-10,10H40c-5.5,0-10-4.5-10-10V40c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V472z"></path> <path d="M373.6,235.8c-5.3-7.9-12-13.7-20.2-17.3c-8.1-3.7-17.3-5.5-27.6-5.4c-17.1,0-31,5.4-41.8,16.2 c-10.7,10.8-16.1,26.3-16.1,46.6c0,21.6,6,37.2,17.9,46.8c11.9,9.6,25.6,14.4,41.2,14.4c18.9,0,33.5-5.7,44-17.1 c6.7-7.2,10.5-14.3,11.3-21.2h-31.2c-1.8,3.5-3.9,6.2-6.3,8.1c-4.4,3.6-10.1,5.4-17,5.4c-6.6,0-12.2-1.5-16.9-4.4 c-7.7-4.7-11.7-13-12.2-24.7h85.2c0.2-10.1-0.2-17.8-1-23.2C381.5,250.8,378.4,242.7,373.6,235.8z M299.5,263 c1.2-7.6,3.9-13.6,8.2-18.1c4.3-4.4,10.4-6.7,18.2-6.7c7.2,0,13.3,2.1,18.2,6.3c4.8,4.2,7.5,10.4,8.1,18.5H299.5z"></path> <rect x="291.6" y="182.3" width="67.8" height="19.7"></rect> <path d="M233.3,248.3c5.3-2.7,9.4-5.7,12.1-9c4.9-5.9,7.3-13.7,7.3-23.3c0-9.4-2.4-17.5-7.2-24.2c-8.1-11-21.8-16.6-41-16.9H128 v158.3h71.2c8.1,0,15.5-0.7,22.4-2.1c6.9-1.5,12.9-4.1,17.9-8c4.5-3.3,8.2-7.5,11.2-12.4c4.8-7.4,7.1-15.8,7.1-25.2 c0-9.1-2.1-16.8-6.2-23.2C247.5,255.9,241.4,251.3,233.3,248.3z M159.5,202.4h34.4c7.6,0,13.8,0.9,18.7,2.5 c5.7,2.4,8.5,7.2,8.5,14.6c0,6.6-2.1,11.3-6.4,13.9c-4.3,2.6-9.8,3.9-16.7,3.9h-38.5V202.4z M214,302.8c-3.8,1.9-9.1,2.8-16,2.8 h-38.5v-42.2h39c6.8,0.1,12,1,15.8,2.7c6.8,3.1,10.1,8.8,10.1,17C224.4,292.8,221,299.3,214,302.8z"></path> </g> </g></svg>
            <span class="font-semibold text-[.9rem]">Follow on Behance</span>
          </a>
          <a href="https://github.com/kier2" target="_blank" class="text-gray-600 hover:text-[#06B6D4] flex gap-4">
            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            <span class="font-semibold text-[.9rem]">Follow on GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kieren-quimosquimos/" target="_blank" class="text-gray-600 hover:text-[#06B6D4] flex gap-4">
            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M11.4521492,9.45214919 C11.935252,9.15825757 12.4822556,9 13,9 L14,9 C15.3939534,9 17,10.1471761 17,12 L17,16 L15,16 L15,12 C15,11.4242524 14.4060466,11 14,11 L13,11 C12.5939534,11 12,11.4242524 12,12 L12,16 L10,16 L10,9 L11,9 L11.4521492,9.45214919 Z M8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 C8.55228475,6 9,6.44771525 9,7 C9,7.55228475 8.55228475,8 8,8 Z M9,16 L7,16 L7,9 L9,9 L9,16 Z"></path> </g></svg>
            <span class="font-semibold text-[.9rem]">Follow on LinkedIn</span>
          </a>

          <a href="mailto:kierenquimosquimos@gmail.com"
              class="text-gray-600 hover:text-[#06B6D4] gap-4 border-t border-zinc-100 mt-6 pt-10 flex">
            <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
            <span class="font-semibold text-[.9rem]">kierenquimosquimos@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
