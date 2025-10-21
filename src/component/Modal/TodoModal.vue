<script setup lang="ts" >
import { addTodo } from '@/stores/addTodo';
import { modal } from '@/stores/Modal';
import { RiCloseFill, RiSave2Fill } from '@remixicon/vue';
import { ref } from 'vue';

const text = ref("");
const modals = modal();
const todo = addTodo();
const date = new Date();

const save = () =>{
  todo.add(text.value,`${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);

  modals.todoToggle();
  text.value = "";
}
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center h-screen bg-gray-500/40">
    <div class="bg-[rgb(30,30,30)] text-white p-3 rounded-2xl w-90 sm:w-150 md:w-180 transition-all delay-150">

      <div class="flex justify-between" >
        <h1 class="font-semibold bg-black rounded-2xl pl-2 pr-2" >Todo Ekle</h1>
        <button class="cursor-pointer hover:bg-[rgb(50,50,50)] transition-all delay-50 rounded-2xl" @click="modals.todoToggle" > <RiCloseFill/> </button>
      </div>

      <div class="mt-2 " >
        <textarea class="w-full rounded-2xl min-h-10 max-h-100 p-2 border-black border-2 outline-none" v-model="text"></textarea>
        <button class="flex bg-black text-white rounded-2xl w-full p-3 cursor-pointer justify-center gap-1 font-semibold" @click="save" > <RiSave2Fill/> Kaydet</button>
      </div>
    </div>
  </div>
</template>
