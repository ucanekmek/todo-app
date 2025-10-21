<script setup lang="ts">
import DelModal from './component/Modal/DelModal.vue';
import TodoModal from './component/Modal/TodoModal.vue';
import { modal } from './stores/Modal';

const modals = modal();
</script>

<template>
  <AppHead />
  <TodoModal v-show="modals.todoStatus" />
  <DelModal v-show="modals.delStatus" />
  <router-view />
</template>
