<template>
    <!-- <div>姓名：{{ name }}</div> -->
    <!-- <div>年龄：{{ age }}</div> -->
    <hr>
    <p>{{ a }}</p>
    <p>{{ b }}</p>
</template>
<script lang="ts">
export default {
    name: 'Person',
    data(){
       return {
           a:100,
           b:this.age
       }
    },
    setup(){
        // setup可以和data methods这些组合使用
        // data methods 可以读取到setup中的数据
        let name = 'zangsan' // vue3中开始弱化this
        let age = 18

        function testAdd() {
            name = 'lisi'
        }
        return {name,age,testAdd}

        // setup也可以直接返回一个渲染函数
        // return()=>'haha'
    }
}

</script>
<style scoped>

</style>
