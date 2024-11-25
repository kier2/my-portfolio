<script setup>
  import NavbarView from './components/NavbarSection.vue';
  import FooterView from './components/FooterSection.vue';
</script>

<template>
  <main class="bg-zinc-50">
    <div class="mx-auto max-w-7xl shadow bg-white px-8">
      <div class="max-w-5xl mx-auto">
        <NavbarView />
        <RouterView />
        <FooterView />
      </div>
    </div>
  </main>
</template>


