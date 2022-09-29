<script setup>
    import { ref, onMounted } from 'vue'
    import PurchaseGroup from '../components/PurchaseGroup.vue'
    import Select        from '../components/Select.vue'

    const cats = ['Gaming', 'Gas', 'Groceries', 'Restaurants', 'Rides', 'Streaming', 'Trains']
    const category = ref()

    function selectCategory(cat) {
        category.value = cat
    }

    const purchases = ref([])
    onMounted(() => getPurchases())

    async function getPurchases() {
        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'

        const res = await fetch(prod + '/purchases/unassigned')
        purchases.value = await res.json()
    }

    async function assignPurchase(purchase) {
        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'
        
        const options = {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category: category.value })
        }

        const res = await fetch(prod + '/purchases/' + purchase.id + '/assign', options)
        
        const {success} = await res.json()
        if(success) removePurchase(purchase)
    }

    function removePurchase(p) {
        const updated = purchases.value.map((group) => {
            if(group.date === p.date) return removePurchaseFrom(group, p)
            return {...group}
        })

        purchases.value = updated
    }

    function removePurchaseFrom(group, purchase) {
        const updated = group.purchases.filter((p) => p.id !== purchase.id)
        
        return {
            date: group.date,
            purchases: [...updated]
        }
    }
</script>


<template>
    <h1>Assign Purchases</h1>
    <Select :options='cats' @select='selectCategory' :selected='category' />

    <div id='results'>
        <PurchaseGroup
            v-for='group in purchases'
            :key='group.date'
            :group='group'
            @select='assignPurchase'
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