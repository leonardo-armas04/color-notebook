<script setup lang="ts">
import type { RouterView } from 'vue-router';
import Layout from './components/Layout.vue';
</script>

<template>
  <Layout>
    <main>
      <RouterView></RouterView>
    </main>
  </Layout>
</template>

<style scoped></style>
