<template>
  <img :src="iconPath" :alt="name" :height="size">
</template>

<script>
export default {
    name:'VIcons',
    props:{
        'name':String,
        'size':Number
    },
    data(){
        return{
            iconPath:''
        }
    },
    created(){
        this.iconPath = require(`../assets/icons/${this.name}.svg`)
    }

}
</script>

<style>

</style>