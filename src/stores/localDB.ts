import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { modal } from "./modal";
import type { userAddTodo } from "@/interface/todoFace";

export const localDB = defineStore("localDB", ()=>{
  const storage = ref<userAddTodo[]>([]);
  const delID = ref<number>();
  const editText = ref("");
  const selectTodo = ref({});
  const modals = modal();

  onMounted(()=>{
    storage.value = JSON.parse(localStorage.getItem("Todo") || "[]");
  })

  const add = (text:string,date:string)=>{
    const data:userAddTodo = {
      id: Date.now(),
      txt: text,
      completed: false,
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
    modals.allDelToggle();
  }

  const delTodo = ()=>{
    storage.value = storage.value.filter(data => data.id !== delID.value);
    localStorage.setItem("Todo", JSON.stringify(storage.value));
    modals.turnOffDelToggle();
  }

  const getID = (id:number)=>{
    delID.value = id;
  }

  const completedToggle = (id:number) =>{
    const todo = storage.value.find(t => t.id === id);
    if(todo) todo.completed = !todo.completed
    localStorage.setItem("Todo", JSON.stringify(storage.value));
  }

  const textEditID = (id:number) =>{
    const todo = storage.value.find(t => t.id === id)
    selectTodo.value = todo
    editText.value = todo?.txt
  }

  const saveEditTodo = (text:string) =>{
    storage.value.find(t => t.id === selectTodo.value)
    selectTodo.value.txt = text
    localStorage.setItem("Todo", JSON.stringify(storage.value));
    modals.editToggle()
  }

  return {storage, saveEditTodo , editText ,add, deleteAll, delTodo, getID, textEditID, completedToggle}
})
