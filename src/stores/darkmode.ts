import { defineStore } from "pinia";
import { ref } from "vue";

export const darkmode = defineStore("darkmode", ()=>{
  const status = ref(true);

  // const turnOn = ()=>{
  //   status.value = true;
  // }

  // const turnOff = ()=>{
  //   status.value = false;
  // }

  const toggle = () =>{
    status.value = !status.value
  }

  return {status, toggle}
})
