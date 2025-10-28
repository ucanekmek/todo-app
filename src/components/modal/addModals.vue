<template>
    <UiModal title="Todo Ekle" @close="modals.toggle" v-show="modals.status" >
      <div class="mt-2 flex flex-col gap-2" >
        <textarea class="w-full rounded-2xl outline-none p-2 min-h-16 max-h-110 transition-all duration-150 bg-[rgb(35,35,35)]" v-model="txt"></textarea>
        <div class="flex gap-2 justify-end " >
          <UiButton variant="contune" @click="save"  >Kaydet</UiButton>
          <UiButton variant="normal" @click="modals.toggle()" >İptal</UiButton>
        </div>
      </div>
    </UiModal>
</template>

<script setup lang="ts">
import { modal } from '@/stores/modal';
import UiModal from '../ui/UiModal.vue';
import UiButton from '../ui/UiButton.vue';
import { ref } from 'vue';
import { localDB } from '@/stores/localDB';

const modals = modal();
const local = localDB();
const txt = ref("");
const date = new Date();

const save = ()=>{
  const dates = `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,"0")} ${String(date.getDate()).padStart(2,"0")}.${String(date.getMonth() + 1).padStart(2,'0')}.${date.getFullYear()}`;

  local.add(txt.value,dates);

  txt.value = "";
}
</script>
