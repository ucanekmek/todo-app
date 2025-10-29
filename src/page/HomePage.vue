<template>
  <div>
    <AddModals/>
    <DeleteModals/>
    <AllDeleteModals/>

    <div class="w-full h-[80vh]  text-4xl flex justify-center items-center text-white flex-col" v-if="local.storage.length === 0" >
      <DotLottieVue class="w-80 h-80 sm:w-120 sm:h-120 lg:w-140 lg:h-140" autoplay loop src="https://lottie.host/4c44f647-ee16-4615-883e-ad3c2fccc24d/6wl6KptIHJ.lottie" />
      <h1 class="text-2xl font-semibold" >Burası Boş Galiba</h1>
    </div>

    <div class="m-2 p-3 bg-[rgb(20,20,20)] rounded-2xl flex flex-col gap-1.5" v-for="db in local.storage" :key="db.id" v-else >
      <h1 class="font-semibold whitespace-break-spaces" >{{ db.txt }}</h1>
      <div class="flex justify-between items-center" >
        <h1 class="bg-[rgb(40,40,40)] pl-2 pr-2 w-51 rounded-2xl select-none" >{{ db.time }}'de Yazıldı</h1>
        <UiButton variant="delete" @click="modals.turnOnDelToggle(db.id)" > <RiDeleteBinFill/> </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddModals from '@/components/modal/addModals.vue';
import AllDeleteModals from '@/components/modal/allDeleteModals.vue';
import DeleteModals from '@/components/modal/deleteModals.vue';
import UiButton from '@/components/ui/UiButton.vue';
import { localDB } from '@/stores/localDB';
import { modal } from '@/stores/modal';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { RiDeleteBinFill } from '@remixicon/vue';

const local = localDB();
const modals = modal();
</script>
