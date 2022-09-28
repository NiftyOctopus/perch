<script setup>
    import { ref, onMounted } from 'vue'
    import PurchaseGroup from '../components/PurchaseGroup.vue'

    const recent = ref([])
    onMounted(() => getPurchases())

    async function getPurchases() {
        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'

        const res    = await fetch(prod + '/purchases/recent')
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