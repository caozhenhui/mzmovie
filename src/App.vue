<template>
    <div id="app">
    	<app-header></app-header>
        <keep-alive exclude="Films">
    	    <router-view></router-view>
        </keep-alive>
    </div>  
</template>

<script>
    //引入跟组件
	import AppHeader from './components/commons/Header/Header'
    export default {
        name: 'App',
        components: {
       		AppHeader
        }
    }
</script>

<style>

</style>
