<script setup lang="ts">
import { addTodo } from '@/stores/addTodo';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'


const todo = addTodo();
</script>

<template>
  <div v-if="todo.storage.length === 0" class="w-full h-[80vh]  text-4xl flex justify-center items-center text-white flex-col" >
    <DotLottieVue  style="height: 390px; width: 390px"  :loop="false" autoplay src="https://lottie.host/f34ecb99-0044-499e-be22-bcaa85809ea9/wkmXT1I5N1.lottie" />
    <h1 class="select-none" >Burası Boş Galiba</h1>
  </div>

  <div class="flex flex-col gap-2 m-2" v-else>
    <div v-for="data in todo.storage" :key="data.id" class="w-full bg-gray-500 rounded-2xl p-3 font-semibold break-words flex flex-col gap-1" >
      <h1 class="select-none" >{{ data.txt }}</h1>
      <p class="select-none w-64 pr-2 pl-2 rounded-2xl bg-white" >{{ data.time }} Tarihinde Yazıldı</p>
    </div>

  </div>
</template>
