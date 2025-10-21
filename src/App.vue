<script setup lang="ts">
import DelModal from './component/Modal/DelModal.vue';
import TodoModal from './component/Modal/TodoModal.vue';
import { modal } from './stores/Modal';
import { SpeedInsights } from "@vercel/speed-insights/vue"


const modals = modal();
</script>

<template>
  <AppHead />
  <TodoModal v-show="modals.todoStatus" />
  <DelModal v-show="modals.delStatus" />
  <router-view />
  <SpeedInsights/>
</template>
