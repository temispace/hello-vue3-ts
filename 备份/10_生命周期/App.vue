<template>
    <Person v-if="isShow"/>
</template>
<script lang="ts" setup  name="App">
    import Person from './conponents/Person.vue';
    import {ref} from 'vue'
    let isShow = ref(true)
</script>
<style>
    button{
        margin: 0 5px;
    }
</style>
