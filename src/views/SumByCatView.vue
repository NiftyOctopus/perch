<script setup>
    import { ref, onMounted, watch } from 'vue'
    //import PurchaseGroup from '../components/PurchaseGroup.vue'

    const days = ref(7)
    watch(days, getSums)

    const sums = ref([])
    onMounted(() => getSums())

    async function getSums() {
        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'

        const res  = await fetch(prod + '/sum?by-cat=true&days=' + days.value)
        sums.value = await res.json()
    }
</script>


<template>
    <div class='view'>
        <h3>Sum by Category</h3>
        <input v-model='days' type='number' min=0 />
        <p>Last {{ days }} days</p>

        <div v-if='sums && sums.length > 0'>
            <div v-for='item in sums'>
                {{ item.sum }} {{ item.category ? item.category : 'None' }}
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>