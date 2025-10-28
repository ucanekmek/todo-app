import { defineStore } from "pinia";
import { ref } from "vue";

export const modal = defineStore("modal", ()=>{
  const status = ref(false);
  const delStatus = ref(false);

  const toggle = () => status.value = !status.value;

  const delToggle = () => delStatus.value = !delStatus.value

  return { status, delStatus, toggle, delToggle }
})
