<script setup lang="ts">
import TodoModal from './component/Modal/TodoModal.vue';
import { modal } from './stores/Modal';

const modals = modal();
</script>

<template>
  <AppHead />
  <TodoModal v-show="modals.status" />
  <router-view />
</template>
