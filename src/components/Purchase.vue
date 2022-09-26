<script setup>
    const props = defineProps({ purchase:Object })
</script>

<template>
    <div>
        <span>{{ purchase.amount }}</span>
        <span>{{ purchase.desc }}</span>
    </div>
</template>

<style scoped>
    div {
        border: 1px dashed gray;
    }
</style>