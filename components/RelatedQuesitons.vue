<template>
  <div>
      <div class="loading" v-if="loading">
          <v-progress-circular
            indeterminate
            color="amber"
          ></v-progress-circular>
      </div>
    <v-row v-else>
        <v-col v-if="!filteredQuestions.length">No question available, <nuxt-link to="/">Please add one</nuxt-link>. </v-col>
        <v-col sm="6" md="4" v-for="x in filteredQuestions" :key="x.question" v-else><nuxt-link :to="x.questionUrl">{{x.question}}</nuxt-link></v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'
export default {
    props:{
        'categoryName':String
    },
    data(){
        return{
            loading:true,
            categoryId:null,
            categoryList:[],
            questionArray:[],
            filteredQuestions:[],
            questionPath:'',
        }
    },
    methods:{
        generateUrl(question){
            let url = question.trim()
            url = '/'+this.categoryName+'/'+url.replaceAll(' ','-')
            return url
        },
        async fetchQuestion(){
            this.loading = true
            this.questionArray = await axios.get(`https://snippet-solution-backend.herokuapp.com/category/${this.categoryId}`)
            this.questionArray.data.forEach(element => {
                if(element.categoryId == this.categoryId) {
                    const obj = { 
                        question: element.question,
                        questionUrl: this.generateUrl(element.question)
                    }
                    this.filteredQuestions.push(obj)
                }
            })
            this.loading = false
        }
    },
    mounted() {
    this.categoryList = JSON.parse(localStorage.getItem('categories'))
    this.categoryList.forEach(element =>{
        if(element.name == this.categoryName){
            this.categoryId = element.id
        }
    })
    this.fetchQuestion()
  }

}
</script>

<style>
a{
    text-decoration: none;
}
.loading{
    margin:2% auto;
    width:100%;
    text-align: center;
}
</style>