<script setup>
import { ref, reactive, computed, watch, onMounted, onUpdated } from 'vue'
import ReferenceChild from './ReferenceChild.vue'

// Reactive state
// Use reactive for objects and ref for everything else
const reactiveStateObject = reactive({ value: 'Initial' })
const count = ref(0)

function increase() {
    count.value++
}

function decrease() {
    count.value--
}

const filterOn = ref(false)

const list = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2', filter: true },
    { id: 3, name: 'Item 3' }
])

// Values computed from other reactive state values
const filteredList = computed(() => {
    return list.value.filter((item) => {
        return item.filter || !filterOn.value
    })
})

// Trigger side effects when reactive state changes
watch(count, (newCount) => {
    console.log(newCount)
    // Fetch data from api
})

onMounted(() => {
    console.log('Mounted')
})

onUpdated(() => {
    console.log('Updated')
})

function log(msg) {
    console.log(msg)
}

</script>


<template>
<div class='wrapper'>
    <h1>{{ count }}</h1>

    <p v-if='count > 0'>Positive</p>
    <p v-else-if='count < 0'>Negative</p>
    <p v-else>Zero</p>

    <button v-on:click='increase'>Increase</button>
    <button @click='decrease'>Decrease</button>

    <input type='checkbox' v-model='filterOn'>

    <ul>
        <ReferenceChild
            v-for='item in filteredList'
            :key='item.id'
            :item='item'
            @triggered='log' />
    </ul>
</div>
</template>


<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items:    center;
    }

    button {
        width:  7em;
        margin: 0.2em;
    }

    input {
        margin:  1em;
        padding: 0;
    }

    ul {
        margin:  0;
        padding: 0;
        list-style: none;
    }
</style>