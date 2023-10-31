<template>
  <main>
    <CHeader/>
    <div class="bg-gray-500 py-10">
     <CCounter/>
    <div>
      <CFileUploader img="https://people-travels.com/storage/images/GvYDZUFkCUUWlNt8eBwINYzOom6ORdAXGuQcN3Jn.webp"/>
    </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import CHeader from '@/components/Layout/CHeader.vue';
import CButton from '../components/Button/CButton.vue'
import CCounter from '../components/Button/CCounter.vue'
import CFileUploader from '@/components/CFileUploader.vue';
</script>