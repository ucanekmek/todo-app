<template>
  <UiModal title="Todo Sil" @close="modals.turnOffDelToggle" v-show="modals.delStatus">
    <div class="p-2">
      <h1>Todo Silenecektir Eminmisin?</h1>
    </div>
    <div class="flex gap-1.5 justify-end" >
      <UiButton variant="delete" @click="local.delTodo" >Todoyu Sil</UiButton>
      <UiButton variant="normal" @click="modals.turnOffDelToggle" >İptal</UiButton>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import { modal } from '@/stores/modal';
import UiModal from '../ui/UiModal.vue';
import UiButton from '../ui/UiButton.vue';
import { localDB } from '@/stores/localDB';

const modals = modal();
const local = localDB();


</script>
