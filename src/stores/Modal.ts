import { defineStore } from "pinia";
import { ref } from "vue";

export const modal = defineStore("modal",()=>{
  const todoStatus = ref(false);
  const delStatus = ref(false);

  const todoToggle = ()=>{
    todoStatus.value = !todoStatus.value;
  }

  const delToggle = ()=>{
    delStatus.value = !delStatus.value;
  }

  return {todoStatus, delStatus, todoToggle, delToggle}
})
