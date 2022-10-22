<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to='/'>Home</RouterLink>
            <RouterLink to='/sum/by-cat'>By Cat</RouterLink>
            <RouterLink to='/recent'>Recent</RouterLink>
            <RouterLink to='/assign'>Assign</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
    
</style>
