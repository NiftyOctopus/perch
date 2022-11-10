<script setup>
    import { ref, onMounted, watch } from 'vue'
    import Select from '../components/Select.vue'

    const times = ['1w', '2w', '1m', '3m']
    const time  = ref('1w')

    function selectTime(t) { time.value = t }
    watch(time, getSums)

    const sums = ref([])
    onMounted(() => getSums())

    async function getSums() {
        if(!time.value) return
        const dev  = 'http://127.0.0.1:5000'
        const prod = 'http://192.168.1.182:81'

        const res  = await fetch(prod + '/sum?by-cat=true&time=' + time.value)
        sums.value = await res.json()
    }

    const total  = ref(0)
    const sorted = ref([])

    watch(sums, newSums => {
        sorted.value = newSums.map(group => sortSums(group))
    })

    function sortSums(group) {
        const sorted = group.data.sort((a, b) => {
            if(a > b) return  1
            if(b > a) return -1
            return 0
        })

        const total = group.data.reduce((total, item) => {
            return total + item.sum
        }, 0)

        return { owner: group.owner, total, data: sorted }
    }
</script>


<template>
    <div class='view'>
        <h3>Sum by Category</h3>
        <Select :options='times' @select='selectTime' :selected='time' />

        <div v-if='sorted && sorted.length > 0'>
            <div v-for='group in sorted' style='border: 1px dashed lightgray; margin-bottom: 1em;'>
                <div><strong>{{ group.owner }}</strong></div>
                <div><strong>{{ group.total.toFixed(2) }}</strong></div>

                <div v-for='item in group.data'>
                    {{ item.sum }} {{ item.category ? item.category : 'None' }}
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>