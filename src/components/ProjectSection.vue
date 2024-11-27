<script setup>
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../firebase.js";
  import { onMounted, ref, defineProps } from "vue";

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

  const projectData = ref([]);

  const getProjects = async () => {
    try {
      const projectsRef = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsRef);

      const projectObj = querySnapshot.docs.map((doc) => ({
        name: doc.data().project_name,
        description: doc.data().project_description,
        img: doc.data().project_img,
        link: doc.data().project_link,
        page: doc.data().project_page,
      }));
      projectData.value = projectObj;

    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  onMounted(() => {
    getProjects();
  })
</script>
<template>
  <div class="py-24" id="projects">
    <div class="">
      <h2 class="mt-10 text-pretty text-4xl font-semibold tracking-tight text-zinc-800">
        {{ props.title }}
      </h2>
      <p class="mt-4 mb-10 text-pretty text-zinc-600">
        {{ props.subTitle }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" v-if="projectData">
        <article
        v-for="(project, index) in projectData" :key="index"
        class="hover:bg-zinc-50 rounded-lg p-6 group">
          <a :href="project.link" target="_blank" v-bind="project">
            <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-zinc-200">
              <img alt="" width="64" height="64" class="h-8 w-8 p-1 object-cover" :src="`https://kier-portfolio.s3.ap-southeast-1.amazonaws.com/${project.img}`" />
            </div>
            <h4 class="text-base mt-6 mb-3">
              <span class="relative z-10 font-semibold text-zinc-900 text-md capitalize">{{ project.name }}</span>
            </h4>

            <p class="text-sm text-zinc-600 leading-6">
              {{ project.description }}
            </p>
            <div class="mt-6 flex text-zinc-400 items-center gap-1 group-hover:text-[#06B6D4]">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
              <span class="text-sm font-semibold">
                {{ project.page }}
              </span>
            </div>
          </a>
        </article>
      </div>
    </div>
  </div>

</template>
