<script setup>
const props = defineProps({
    item:Object
})

const emit = defineEmits(['triggered'])
</script>


<template>
    <li @click="emit('triggered', item.name)">{{ item.name }}</li>
</template>


<style scoped>
    li {
        display: inline-block;
        margin:  0.2em;
        border:  1px dashed slateblue;
    }
</style>