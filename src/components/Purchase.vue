<script setup>
    const props = defineProps({ purchase:Object })
</script>

<template>
    <div class='purchase'>
        <div class='amount'>{{ purchase.amount }}</div>

        <div class='details'>
            <div class='desc'>{{ purchase.desc }}</div>
            <div class='category'>{{ purchase.category }}</div>
            
        </div>
    </div>
</template>

<style scoped>
    .purchase {
        padding: 0.2em;
        border: 1px solid lightblue;
        display: flex;
        gap: 0.5em;
    }

    .details {
        display: flex;
        flex-direction: column;
        text-align: left;
    }



    .amount {
        flex-basis: 5em;
        text-align: right;
    }

    .category {
        font-size: 0.75em;
    }
</style>