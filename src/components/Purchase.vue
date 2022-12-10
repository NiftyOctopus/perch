<script setup>
    const props = defineProps({ purchase:Object })
</script>

<template>
    <div class='purchase'>
        <div class='amount'>{{ purchase.amount }}</div>

        <div class='details'>
            <div class='desc'>{{ purchase.desc }}</div>
            <div class='category'>
                <span>{{ purchase.category }} </span>
                <span v-if="purchase.owner && purchase.owner !== 'Shared'">
                    @{{ purchase.owner }}
                </span>
                
                <template v-if='purchase.items'>
                    <div v-for='item in purchase.items' :key='item'>
                        {{ item.substring(0, 70) }}...
                    </div>
                </template>
            </div>
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
        flex-basis: 4em;
        text-align: right;
    }

    .category {
        font-size: 0.8em;
    }
</style>