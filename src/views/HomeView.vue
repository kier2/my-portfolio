<script setup>
import HomeBannerSection from '@/components/HomeBannerSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ToolsSection from '@/components/ToolsSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { ref, onMounted } from 'vue';

const homeSectionInfo = ref([]);
const aboutSectionInfo = ref([]);
const projectSectionInfo = ref([]);

const getSectionInfo = async () => {
  try {
    const sectionsRef = collection(db, 'sections');
    const q = query(sectionsRef);
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const sectionData = doc.data();
        if (sectionData.section_name === 'home-banner') {
          homeSectionInfo.value = sectionData;
        } else if (sectionData.section_name === 'about') {
          aboutSectionInfo.value = sectionData;
        } else if (sectionData.section_name === 'project') {
          projectSectionInfo.value = sectionData;
        }
      });
    } else {
      console.log('No matching sections found!');
    }
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
}

onMounted(() => {
   getSectionInfo();
})
</script>
<template>
  <main class="bg-white">
    <HomeBannerSection
    :title="homeSectionInfo.section_title" :sub-title="homeSectionInfo.section_description"
    />
    <ToolsSection />
    <AboutSection :title="aboutSectionInfo.section_title" :sub-title="aboutSectionInfo.section_description" />
    <ProjectSection :title="projectSectionInfo.section_title" :sub-title="projectSectionInfo.section_description" />
  </main>
</template>
