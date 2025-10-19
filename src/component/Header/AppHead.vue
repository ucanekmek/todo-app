<script setup lang="ts">
import { darkmode } from '@/stores/darkmode';
import { modal } from '@/stores/Modal';
import { RiMoonFill, RiStickyNoteAddFill, RiSunFill } from '@remixicon/vue';

const mode = darkmode();
const modals = modal();

</script>

<template>
  <div class="flex justify-between items-center bg-black text-white p-3" >
    <h1 class="font-semibold" >Todo App</h1>

    <div class="flex gap-2" >
      <button class="bg-white text-black p-2 rounded-2xl cursor-pointer flex font-semibold items-center" @click="modals.toggle" > <RiStickyNoteAddFill/> Kaydet</button>
      <button class="bg-gray-500 text-black p-2 rounded-2xl cursor-not-allowed" @click="mode.toggle()" disabled >
        <RiMoonFill :class="mode.status ? 'flex':'hidden'" />
        <RiSunFill :class="mode.status ? 'hidden':'flex'" />
      </button>
    </div>
  </div>
</template>
