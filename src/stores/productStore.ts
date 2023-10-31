import {defineStore, createPinia} from 'pinia'

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        count: 0,
        total: 50,
     }),
    actions:{
        increment() {
            this.count++
            
        },
        decrement(){
            
        }
    },
    getters:{
        totalValue(){
            this.total -= this.count
        }
    }
})