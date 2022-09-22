<script setup>
    import { ref, onMounted } from 'vue'

    const recent = ref([])
    onMounted(() => getPurchases())

    async function getPurchases() {
        const res    = await fetch('http://192.168.1.182/boh/purchases/recent')
        recent.value = await res.json()
    }
</script>


<template>
    <h1>Recent Purchases</h1>

    <div id='results'>
        <div v-for='group in recent' :key='group.date' class='group'>
            <div class='date'>{{ group.date }}</div>

            <div v-for='purchase in group.purchases' :key='purchase.id' class='purchase'>
                <span>{{ purchase.amount }}</span>
                <span>{{ purchase.desc }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #results {
        display: flex;
        flex-direction: column;
        align-items:    center;
        gap: 1em;
    }

    .group {
        
    }

    .date {
        border-bottom: 1px solid gray;
    }
</style>