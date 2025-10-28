<template>
  <button class="font-semibold rounded-2xl cursor-pointer p-2 flex gap-1 disabled:cursor-not-allowed select-none duration-150"
  :class="{
    'bg-white text-black disabled:bg-gray-500 ': variant === 'normal',
    'bg-red-600 text-black disabled:bg-red-900': variant === 'delete',
    'bg-green-500 text-black disabled:bg-green-900': variant === 'contune',
    'bg-transparent hover:bg-[rgb(45,45,45)]': variant === 'close',
  }" >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>
