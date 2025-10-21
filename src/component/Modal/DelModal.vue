<script setup lang="ts">
import { addTodo } from '@/stores/addTodo';
import { modal } from '@/stores/Modal';
import { RiCloseFill } from '@remixicon/vue';

const modals = modal()
const todo = addTodo();

</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500/40">
    <div class="bg-[rgb(30,30,30)] text-white p-3 rounded-2xl w-90 sm:w-150 md:w-180 transition-all delay-150 flex flex-col gap-2">

      <div class="flex justify-between" >
        <h1 class="bg-red-500 rounded-2xl pl-2 pr-2 font-semibold" >Hepsini Sil</h1>
        <button class="cursor-pointer hover:bg-[rgb(50,50,50)] transition-all delay-50 rounded-2xl" @click="modals.delToggle" ><RiCloseFill/></button>
      </div>

      <h1 class="pt-2 pb-2 font-semibold" >Tüm Todolar Silinecek Bundan Eminmisin. Unutma Bunun Geri Dönüşü Yok.</h1>

      <div class="flex justify-end " >
        <button class="bg-red-500 p-2 rounded-2xl cursor-pointer" @click="todo.deleteAll" >Hepsini Sil</button>
      </div>
    </div>
  </div>
</template>
