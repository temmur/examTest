<template>
   <div class="container">
    <form action="" class=" w-[150px] overflow-hidden">
        <input type="file"
         @change="handleFileUpload"
        class="file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 
file:rounded-full file:font-semibold file:text-violet-700 file:bg-violet-50
hover:file:bg-amber-100 hover:file:cursor-pointer"
        />
    </form>
   <div class="my-4">
    <button @click="uploadPhoto" :disabled="!selectedFile" :class="!selectedFile ? 'bg-gray-400 py-2 px-4 rounded-md' : 'bg-red-400 text-white py-2 px-4 rounded-md'">Upload</button>
    <button  @click="deleteImg()" class="rounded-md bg-blue-400 py-2 px-4 ml-4">delete image</button>
   </div>
    <img :src="uploadedPhoto" class="my-5" />
    
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const selectedFile = ref(null);
const uploadedPhoto = ref(null);
 

    const handleFileUpload = event => {
     const file = event.target.files[0];
      selectedFile.value = file;
      
    };

    const uploadPhoto = () => {
      if (selectedFile.value) {
        uploadedPhoto.value = URL.createObjectURL(selectedFile.value);
        selectedFile.value = null;
      }
    };

    const props = defineProps<{
    img?: String
}>()

const deleteImg =()=>{
    uploadedPhoto.value = null
}
// const url = computed(()=>{
//     if(props.img.includes('webp'))
// })
onMounted(()=>{
    uploadedPhoto.value = props.img
})

</script>