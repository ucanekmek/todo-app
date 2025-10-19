import type { userAddTodo } from "@/interface/faces";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const addTodo = defineStore("addTodo", ()=>{
  const storage = ref<userAddTodo[]>([]);

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
  }

  return {storage , add}
})
