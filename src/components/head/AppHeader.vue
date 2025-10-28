<template>
  <div class="flex justify-between items-center bg-black p-3 m-2 rounded-2xl" >
    <h1 class="font-semibold" >Todo App</h1>

    <div class="flex gap-1.5 items-center" >
      <UiButton variant="delete" :disabled="local.storage.length === 0" @click="modals.delToggle" > <RiDeleteBinFill/> <h1 class="hidden sm:flex" >Hepsini Sil</h1></UiButton>
      <UiButton variant="normal" @click="modals.toggle()" > <RiStickyNoteAddFill/> <h1 class="hidden sm:flex" >Todo Ekle</h1></UiButton>
      <UiButton variant="normal" disabled > <RiMoonFill/> </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RiDeleteBinFill, RiMoonFill, RiStickyNoteAddFill } from '@remixicon/vue';
import UiButton from '../ui/UiButton.vue';
import { modal } from '@/stores/modal';
import { localDB } from '@/stores/localDB';

const modals = modal();
const local = localDB();

</script>
