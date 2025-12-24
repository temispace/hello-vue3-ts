<template>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
</template>
<script lang="ts">
export default {
    name: 'Person',
    setup(){
        let name = 'zangsan' // vue3中开始弱化this
        let age = 18

        function testAdd() {
            name = 'lisi'
        }
        // return {testAdd}

        // setup也可以直接返回一个渲染函数
        return()=>'haha'
    }
}

</script>
<style scoped>

</style>
