<script setup>
  import { collection, query, getDocs } from "firebase/firestore";
  import { db } from "../firebase.js";
  import { onMounted, ref } from "vue";

  const skills = ref([]);

  const getSkills = async () => {
    const skillsObj = []
    try {
      const skillsRef = collection(db, "skills");
      const q = query(skillsRef);
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const skill = {
          img: doc.data().skill_img,
          name: doc.data().skill_name,
        }
        skillsObj.push(skill);
      });
      skills.value = skillsObj;
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };
  onMounted(() => {
    getSkills();
  });
</script>

<template>
  <div class="bg-white py-16">
    <div class="mx-auto max-w-7xl flex justify-center">
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-8 lg:mx-0 lg:max-w-5xl lg:grid-cols-9">
        <img
        v-for="(skill, index) in skills" :key="index"
        class="col-span-2 max-h-16 w-full object-contain lg:col-span-1 hover:scale-125 transition ease-in cursor-pointer"
        :src="`https://kier-portfolio.s3.ap-southeast-1.amazonaws.com/${skill.img}`"
        :alt="`${skill.name} logo`"
        width="150" height="50" />
      </div>
    </div>
  </div>
</template>
