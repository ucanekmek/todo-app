import { defineStore } from "pinia";
import { ref } from "vue";
import { localDB } from "./localDB";

export const modal = defineStore("modal", ()=>{
  const status = ref(false);
  const delStatus = ref(false);
  const allDelStatus = ref(false);
  const editStatus = ref(false);
  const local = localDB();

  const toggle = () => status.value = !status.value;

  const turnOnDelToggle = (id:number)=> {
    local.getID(id);
    delStatus.value = true;
  }

  const turnOffDelToggle = ()=>{
    delStatus.value = false;
  }

  const allDelToggle = () => allDelStatus.value = !allDelStatus.value

  const editToggle = (id?: number) => {
    local.textEditID(id);
    editStatus.value = !editStatus.value
  }



  return { status, delStatus, allDelStatus, editStatus, toggle, turnOnDelToggle, turnOffDelToggle, allDelToggle, editToggle }
})
