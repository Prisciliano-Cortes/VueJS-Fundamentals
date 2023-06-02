<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Counter :start="10" /> -->
    <Indecision />
</template>

<script>
    //import Counter from './components/Counter'
    import Indecision from './components/Indecision.vue';

    export default {
        name: 'App',
        components: {
            //Counter
            Indecision
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
