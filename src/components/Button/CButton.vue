<template>
    <div class='rounded-lg inline-flex items-center' :class="btnStyle">
        <slot name="prefix"></slot>
        <button>{{ title }}</button>
        <slot name="suffix"></slot>
    </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
        variant?: 'primary' | 'outline' | 'secondary' | 'default'
        title: String
    }>()
    const btnStyle = computed(()=>{
        switch(props.variant){
            case 'primary' : 
            return 'primary'
            case 'outline' : 
            return 'outline'
            case 'secondary' :
            return 'secondary'
            default:
             return 'default'
        }
    })

</script>
<style scoped>
.btnStyle{
        padding-right: 4px;
        outline: none;
        border: transparent;
        margin-left: 10px;
}
.primary{
        background-color: #E54545;
        padding: 12px 28px 12px 32px; 
    }
    .primary:hover,
    .primary:focus{
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: white;
    }
    .primary:hover{
        transition: .3s ease-in-out;
        background-color: #c93e3e;
        transform: translateY(-1px);
    }
    .primary:active{
        background-color: #bd3232;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: white;
        transform: translateY(0);
    }
</style>