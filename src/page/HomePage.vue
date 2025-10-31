<template>
  <div>
    <AddModals/>
    <DeleteModals/>
    <AllDeleteModals/>
    <TextEditingModals/>

    <div class="w-full h-[80vh]  text-4xl flex justify-center items-center text-white flex-col" v-if="local.storage.length === 0" >
      <DotLottieVue class="w-70 h-70 sm:w-100 sm:h-100 lg:w-120 lg:h-120" autoplay loop src="https://lottie.host/2edb537a-0017-406b-8fa7-4afdd0acf74b/RyMzJXfOBn.lottie" />
      <h1 class="text-2xl font-semibold select-none" >Burası Boş Galiba</h1>
    </div>

    <div class="m-2 p-3 bg-[rgb(20,20,20)] rounded-2xl flex flex-col gap-1.5 break-all" v-for="db in local.storage" :key="db.id" v-else >
      <h1 class="font-semibold whitespace-break-spaces" >{{ db.txt }}</h1>
      <div class="flex justify-between items-center" >
        <h1 class="bg-[rgb(40,40,40)] pl-2 pr-2 sm:w-51 rounded-2xl select-none truncate w-37 " >{{ db.time }}'de Yazıldı</h1>
        <div class="flex gap-2" >
          <UiButton :variant="db.completed ? 'contune':'normal'" @click="local.completedToggle(db.id)"  > <RiCheckboxCircleLine v-if="!db.completed" /> <RiCheckboxCircleFill v-if="db.completed"/> </UiButton>
          <UiButton variant="normal" @click="modals.editToggle(db.id)" > <RiPencilFill/> </UiButton>
          <UiButton variant="delete" @click="modals.turnOnDelToggle(db.id)" > <RiDeleteBinFill/> </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddModals from '@/components/modal/addModals.vue';
import AllDeleteModals from '@/components/modal/allDeleteModals.vue';
import DeleteModals from '@/components/modal/deleteModals.vue';
import TextEditingModals from '@/components/modal/textEditingModals.vue';
import UiButton from '@/components/ui/UiButton.vue';
import { localDB } from '@/stores/localDB';
import { modal } from '@/stores/modal';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { RiCheckboxCircleFill, RiCheckboxCircleLine, RiDeleteBinFill, RiPencilFill } from '@remixicon/vue';

const local = localDB();
const modals = modal();
</script>
