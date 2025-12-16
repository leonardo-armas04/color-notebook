<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>Hello world!</h1>
  <p>This is a colorful notebook</p>
  <RouterLink to="/notes">
    <button>
      My notes
      <i class="fa-regular fa-note-sticky"></i>
    </button>
  </RouterLink>
</template>