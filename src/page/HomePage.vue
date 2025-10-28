<template>
  <div>
    <AddModals/>
    <AllDeleteModals/>

    <div class="m-2 p-3 bg-[rgb(20,20,20)] rounded-2xl flex flex-col gap-1.5" v-for="db in local.storage" :key="db.id" >
      <h1 class="font-semibold whitespace-break-spaces" >{{ db.txt }}</h1>
      <h1 class="bg-[rgb(40,40,40)] pl-2 pr-2 w-63 rounded-2xl select-none" >{{ db.time }} Tarihinde Yazıldı</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddModals from '@/components/modal/addModals.vue';
import AllDeleteModals from '@/components/modal/allDeleteModals.vue';
import { localDB } from '@/stores/localDB';

const local = localDB();
</script>
