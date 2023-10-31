<template>
   <div class=" flex justify-center">
    
    <div class="bg-white w-[80px] flex">
        <button class="bg-blue-400 py-2 px-4" v-on:click="decrementClick">-</button>
        <input type="text"  class="w-[50px] outline-none text-center"
         v-model="counter"
         @input="handleInput"
        
         >
         <p v-if="isInputDelete">1</p>
        <button class="bg-blue-400 py-2 px-4" v-on:click="incrementClick">+</button>
    </div>
   </div>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'

let counter = ref(1)
let value = ref('')
const min = ref(1)
const max = ref(10)
const diableButton = ref(false)

const incrementClick=()=>{
   if(counter.value >= max.value){
     diableButton.value = true
   }else{
    counter.value++
   }
}

const decrementClick=()=>{
    if(counter.value<=min.value){
        diableButton.value = true
    }else{
        counter.value--
    }
}


const handleInput=(event)=>{
    const input = event.target.value
    const numericInput = input.replace(/\D/g, '');
    counter.value = numericInput;
    if(counter.value == 0) {
        return counter.value = 1
    }else if(counter.value > 12){
        return 12
    }
}

</script>