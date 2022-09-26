<script setup>
    const props = defineProps({ options:Array, selected:String })
    const emit  = defineEmits(['select'])

    function handleSelect(option) {
        emit('select', option)
    }
</script>

<template>
    <div
        v-for='option in options'
        :key='option'
        :option='option'
        @click='handleSelect(option)'
        :class="option === selected ? 'selected' : ''">

        <span>{{ option }}</span>
    </div>
</template>

<style scoped>
    .selected {
        border: 1px dashed red;
    }
</style>
