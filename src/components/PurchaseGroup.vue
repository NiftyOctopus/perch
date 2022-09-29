<script setup>
    import Purchase from './Purchase.vue'
    const props = defineProps({ group:Object })
    const emit  = defineEmits(['select'])
</script>

<template>
    <div class='group'>
        <div class='date'>{{ group.date }}</div>

        <Purchase
            v-for='purchase in group.purchases'
            :key='purchase.id'
            :purchase='purchase'
            @click="emit('select', { ...purchase })"
        />
    </div>
</template>

<style scoped>
    .group {
        width: 25em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>