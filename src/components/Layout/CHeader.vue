<template>
<div class=" bg-white py-5">
   <div class="container flex items-center justify-between">
    <div class=" flex items-center justify-start">
     <CHeaderLogo/>
     <CNav/>
    </div>
    <div>
        <Cbasket/>
    </div>
   </div>
</div>
</template>
<script setup lang="ts">
    import CHeaderLogo from '../Header/CHeaderLogo.vue'
    import CNav from '../Header/CNav.vue'
    import Cbasket from '../Common/Cbasket.vue';
</script>