<script setup>
    import { ref, onMounted, watch } from 'vue'
    //import PurchaseGroup from '../components/PurchaseGroup.vue'

    const days = ref(7)
    watch(days, getSums)

    const sums = ref([])
    onMounted(() => getSums())

    async function getSums() {
        if(!days.value) return
        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'

        const res  = await fetch(prod + '/sum?by-cat=true&days=' + days.value)
        sums.value = await res.json()
    }

    const total  = ref(0)
    const sorted = ref([])

    watch(sums, newSums => {
        sorted.value = newSums.sort((a, b) => {
            if(a > b) return  1
            if(b > a) return -1
            return 0
        })

        total.value = newSums.reduce((total, item) => {
            return total + item.sum
        }, 0)
    })
</script>


<template>
    <div class='view'>
        <h3>Sum by Category</h3>
        <input v-model='days' type='number' min=0 />
        <p>Last {{ days }} days</p>
        <p>{{ total.toFixed(2) }} Total</p>

        <div v-if='sorted && sorted.length > 0'>
            <div v-for='item in sorted'>
                {{ item.sum }} {{ item.category ? item.category : 'None' }}
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>