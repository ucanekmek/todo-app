<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500/30" >
    <div class="bg-[rgb(30,30,30)] p-3 rounded-2xl w-75 sm:w-150 md:w-250 ease-in-out transition-all duration-300" >
      <div class="flex justify-between items-center" >
        <h1 class="font-semibold bg-[rgb(35,35,35)] p-2 rounded-2xl select-none" >{{ title || "Todo App" }}</h1>
        <UIbutton variant="close" @click="toggle" > <RiCloseFill/> </UIbutton>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RiCloseFill } from '@remixicon/vue';
import UIbutton from './UiButton.vue';

const emit = defineEmits(['close']);

defineProps<{
  title?: string,
}>()

const toggle = ()=>{
  emit('close');
}
</script>
