<script setup>
    import { ref, onMounted } from 'vue'
    import PurchaseGroup from '../components/PurchaseGroup.vue'
    import Select        from '../components/Select.vue'

    const cats = ['Restaurants', 'Streaming', 'Trains']
    const category = ref()

    function selectCategory(cat) {
        category.value = cat
    }

    const unassigned = ref([])
    onMounted(() => getPurchases())

    async function getPurchases() {
        const res    = await fetch('http://192.168.1.182:81/purchases/unassigned')
        unassigned.value = await res.json()
    }
</script>


<template>
    <h1>Assign Purchases</h1>
    <Select :options='cats' @select='selectCategory' :selected='category' />

    <div id='results'>
        <PurchaseGroup
            v-for='group in unassigned'
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