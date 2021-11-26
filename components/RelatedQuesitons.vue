<template>
  <div>
    <v-row>
        <v-col sm="6" md="4" v-for="x in 50" :key="x"><nuxt-link :to="questionPath">{{question}}</nuxt-link></v-col>
    </v-row>
</div>
</template>

<script>
export default {
    props:{
        'categoryName':String
    },
    data(){
        return{
            question: 'How to compare two array of object in javascript',
            questionPath:'',
        }
    },
    created(){
        this.questionPath = '/'+this.categoryName+'/How to compare two array of object in javascript'
    }

}
</script>

<style>

</style>