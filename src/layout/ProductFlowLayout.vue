<template>
  <div class="bg-neutral-50">
    <NavBar />
    <div class="px-10 min-h-screen bg-neutral-50">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/General/NavBar.vue'
// import { RouterView } from 'vue-router'
</script>

<style scoped></style>
