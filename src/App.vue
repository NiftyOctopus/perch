<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to='/'>Home</RouterLink>
            <RouterLink to='/about'>About</RouterLink>
            <RouterLink to='/recent'>Recent Purchases</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
    
</style>
