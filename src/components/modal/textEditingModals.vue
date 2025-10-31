<template>
  <UiModal title="Todo'yu Düzenle" @close="modals.editToggle" v-show="modals.editStatus">
    <div class="mt-2 flex flex-col gap-2">
      <textarea class="w-full rounded-2xl outline-none p-2 min-h-16 max-h-110 transition-all duration-150 bg-[rgb(35,35,35)]" v-model="local.editText"></textarea>
      <div class="flex justify-end gap-2" >
        <UiButton variant="contune" @click="local.saveEditTodo(local.editText)" >Kaydet</UiButton>
        <UiButton variant="normal" @click="modals.editToggle" >İptal</UiButton>
      </div>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import { modal } from '@/stores/modal';
import UiButton from '../ui/UiButton.vue';
import UiModal from '../ui/UiModal.vue';
import { localDB } from '@/stores/localDB';

const local = localDB();
const modals = modal();
</script>
