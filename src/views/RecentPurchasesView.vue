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
    <div class='view'>
        <h3>Recent Purchases</h3>

        <div id='results'>
            <PurchaseGroup
                v-for='group in recent'
                :key='group.date'
                :group='group'
            />
        </div>
    </div>
</template>


<style scoped>
    #results {
        display: flex;
        flex-direction: column;
        align-items:    center;
        gap: 1em;
        padding: 1em 0;
    }
</style>