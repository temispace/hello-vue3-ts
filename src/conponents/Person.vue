<template>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
</template>
<script lang="ts">
export default {
    name: 'Person',
    setup(){
        let name = 'zangsan'
        let age = 18
        return {name,age};

        function testAdd() {
            console.log('testAdd')
        }
    }
}

</script>
<style scoped>

</style>
