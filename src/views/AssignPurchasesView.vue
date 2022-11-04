<script setup>
    import { ref, onMounted } from 'vue'
    import PurchaseGroup from '../components/PurchaseGroup.vue'
    import Select        from '../components/Select.vue'

    const cats = [
        'Bessie', 'Books', 'Cosmetics', 'Fun', 'Gaming', 'Gas', 
        'Gifts', 'Groceries', 'Household', 'Medical', 'Other', 
        'Restaurants', 'Rides', 'Selfcare', 'Streaming', 'Trains', 'Work'
    ]
    const category = ref()

    function selectCategory(cat) {
        category.value = cat
    }

    const people = ['Shared', 'Bryan', 'Reyn']
    const owner = ref('Shared')

    function selectOwner(person) {
        owner.value = person
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
        if(!owner.value) return
        if(!category.value && !purchase.category) return

        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'
        
        const options = {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: category.value,
                owner:    owner.value
            })
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
    <div class='view'>
        <h3>Assign Purchases</h3>
        <Select :options='cats' @select='selectCategory' :selected='category' />
        <Select :options='people' @select='selectOwner' :selected='owner' />

        <div id='results'>
            <PurchaseGroup
                v-for='group in purchases'
                :key='group.date'
                :group='group'
                @select='assignPurchase'
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