<template>
<UiModal title="Tüm Todoları Sil" @close="modals.allDelToggle" v-show="modals.allDelStatus" >
      <h1 class="p-2" >Tüm Todolar Silinmek Üzere Bundan Eminmisiniz? Unutma Bu İşlemin Bir Daha Geri Dönüşü Yok.</h1>
      <div class="flex gap-2 justify-end" >
        <UiButton variant="delete" @click="local.deleteAll" >Hepsini Sil</UiButton>
        <UiButton variant="normal" @click="modals.allDelToggle" >İptal</UiButton>
      </div>
    </UiModal>
</template>

<script setup lang="ts">
import { modal } from '@/stores/modal';
import UiButton from '../ui/UiButton.vue';
import UiModal from '../ui/UiModal.vue';
import { localDB } from '@/stores/localDB';

const modals = modal();
const local = localDB();
</script>
