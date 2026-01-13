<template>
    <div class="container-fluid wraper">
        <h1 class="title">
            Vue3 组件间通信
        </h1>
        <hr>
        <div class="row">
             <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <RouterLink to="/props" active-class="active" class="list-group-item">1.props</RouterLink>
                <RouterLink to="/custom" active-class="active" class="list-group-item">2.自定义事件</RouterLink>
             </div>  
             <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
                 <div class="panel-body">
                    <RouterView></RouterView>
                 </div>   
             </div> 
        </div>
    </div>
</template>
<script lang="ts" setup  name="App">
    import { RouterLink,RouterView } from 'vue-router';
</script>
<style>
   .wraper .title {
		padding: 20px;
		text-align: center;
		min-width: 610px;
	}
	.wraper .small{
		font-size: 15px;
	}
	.wraper .list-group-item {
		min-width: 230px;
        font-size: 20px;
	}
</style>
