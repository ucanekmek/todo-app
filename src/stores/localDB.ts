import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { modal } from "./modal";
import type { userAddTodo } from "@/interface/todoFace";

export const localDB = defineStore("localDB", ()=>{
  const storage = ref<userAddTodo[]>([]);
  const modals = modal()

  onMounted(()=>{
    storage.value = JSON.parse(localStorage.getItem("Todo") || "[]");
  })

  const add = (text:string,date:string)=>{
    const data:userAddTodo = {
      id: Date.now(),
      txt: text,
      time: date,
    }

    storage.value = JSON.parse(localStorage.getItem("Todo") || "[]");
    storage.value.push(data);

    localStorage.setItem("Todo", JSON.stringify(storage.value));

    modals.toggle();
  }

  const deleteAll = () =>{
    localStorage.removeItem("Todo");
    storage.value = JSON.parse(localStorage.getItem("Todo") || "[]");
    modals.delToggle();
  }

  return {storage, add, deleteAll}
})
