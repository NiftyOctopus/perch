<script setup>
    import Purchase from './Purchase.vue'
    const props = defineProps({ group:Object })
</script>

<template>
    <div class='date'>{{ group.date }}</div>

    <Purchase
        v-for='purchase in group.purchases'
        :key='purchase.id'
        :purchase='purchase'
    />
</template>