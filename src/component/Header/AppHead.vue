<script setup lang="ts">
import { addTodo } from '@/stores/addTodo';
import { darkmode } from '@/stores/darkmode';
import { modal } from '@/stores/Modal';
import { RiDeleteBin2Fill, RiMoonFill, RiStickyNoteAddFill, RiSunFill } from '@remixicon/vue';

const mode = darkmode();
const modals = modal();
const todo = addTodo();

</script>

<template>
  <div class="flex justify-between items-center bg-black text-white p-3" >
    <h1 class="font-semibold" >Todo App</h1>

    <div class="flex gap-2" >
      <button class="bg-red-500 text-black rounded-2xl p-2 font-semibold flex gap-1 cursor-pointer disabled:cursor-not-allowed disabled:bg-red-900" @click="modals.delToggle" :disabled="todo.storage.length === 0" > <RiDeleteBin2Fill/> <h1 class="hidden sm:flex"  >Hepsini Sil</h1></button>
      <button class="bg-white text-black p-2 rounded-2xl cursor-pointer flex font-semibold items-center gap-1" @click="modals.todoToggle" > <RiStickyNoteAddFill/> <h1 class="hidden sm:flex" >Kaydet</h1></button>
      <button class="bg-gray-500 text-black p-2 rounded-2xl cursor-not-allowed" @click="mode.toggle()" disabled >
        <RiMoonFill :class="mode.status ? 'flex':'hidden'" />
        <RiSunFill :class="mode.status ? 'hidden':'flex'" />
      </button>
    </div>
  </div>
</template>
