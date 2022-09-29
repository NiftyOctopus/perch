<script setup>
    const props = defineProps({ options:Array, selected:String })
    const emit  = defineEmits(['select'])

    function handleSelect(option) {
        emit('select', option)
    }
</script>

<template>
    <div class='select'>
        <div
            v-for='option in options'
            :key='option'
            :option='option'
            @click='handleSelect(option)'
            :class="option === selected ? 'selected' : ''">

            <div class='option'>{{ option }}</div>
        </div>
    </div>
</template>

<style scoped>
    .select {
        display: flex;
        justify-content: center;
        gap: 0.5em;
    }

    .selected {
        background-color: lightblue;
    }

    .option {
        border: 1px solid gray;
    }
</style>
