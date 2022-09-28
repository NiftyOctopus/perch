<script setup>
    import Purchase from './Purchase.vue'
    const props = defineProps({ group:Object })
    const emit  = defineEmits(['select'])
</script>

<template>
    <div class='date'>{{ group.date }}</div>

    <Purchase
        v-for='purchase in group.purchases'
        :key='purchase.id'
        :purchase='purchase'
        @click="emit('select', { ...purchase })"
    />
</template>