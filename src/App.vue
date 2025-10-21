<script setup lang="ts">
import DelModal from './component/Modal/DelModal.vue';
import TodoModal from './component/Modal/TodoModal.vue';
import { addTodo } from './stores/addTodo';
import { modal } from './stores/Modal';
import { SpeedInsights } from "@vercel/speed-insights/vue"

const modals = modal();
const todo = addTodo();
</script>

<template>
  <div class="min-h-screen flex flex-col">
  <main class="flex-grow">
      <AppHead />
      <TodoModal v-show="modals.todoStatus" />
      <DelModal v-show="modals.delStatus" />
      <router-view />
  </main>

  <footer class="bg-[rgb(40,40,40)] text-white text-center p-4 flex flex-wrap gap-2 justify-center sm:justify-between">
    <div class="gap-1 bg-white text-black rounded-2xl hidden sm:flex" >
      <img src="https://cdn.discordapp.com/avatars/685595486560059489/a_6a0ed6e07fe0a0b33217d95259be8900.gif?size=512" alt="İnternet Bağlantını Kontrol Et" class="w-6 h-6 rounded-3xl"  >
      <h1>ucanekmek Tarafından Kodlanmıştır.</h1>
    </div>

    <h1 class="flex gap-1 bg-white text-black rounded-2xl pr-2 pl-2 font-semibold" >Toplamda {{ todo.storage.length }} Adet Todonuz Var</h1>
  </footer>
</div>

  <SpeedInsights/>
</template>
