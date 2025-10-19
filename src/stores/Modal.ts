import { defineStore } from "pinia";
import { ref } from "vue";

export const modal = defineStore("modal",()=>{
  const status = ref(false);

  const toggle = ()=>{
    status.value = !status.value;
  }

  return {status, toggle}
})
