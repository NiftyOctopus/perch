<script setup>
    import { ref, onMounted } from 'vue'
    import PurchaseGroup from '../components/PurchaseGroup.vue'

    const recent = ref([])
    onMounted(() => getPurchases())

    async function getPurchases() {
        const res    = await fetch('http://192.168.1.182:81/purchases/recent')
        recent.value = await res.json()
    }
</script>


<template>
    <h1>Recent Purchases</h1>

    <div id='results'>
        <PurchaseGroup
            v-for='group in recent'
            :key='group.date'
            :group='group'
        />
    </div>
</template>


<style scoped>
    #results {
        display: flex;
        flex-direction: column;
        align-items:    center;
        gap: 1em;
    }
</style>