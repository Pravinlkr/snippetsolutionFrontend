<template>
<div class="grey lighten-5">
    <v-breadcrumbs
      :items="breadCrumbsitems"
      divider="/"
    ></v-breadcrumbs>

    <div class="mx-6">
        <div><h2>{{questionName}}</h2></div>
        <div class="snippetContainer">
<pre>
    <code v-highlight :class="parentCategory" v-html="answer" style="padding: 2% 5%; line-height:1.5;">
    </code>
</pre>
        </div>
        <div class="my-6"><p>Similar Questions :</p></div>
        <related-quesitons></related-quesitons>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            categoryList: [],
            categoryName:'',
            categoryId:null,
            parentCategory:'',
            questionName:'',
            questionArray:[],
            questionAndAnswer: [],
            answer:'',
            breadCrumbsitems: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                },
                {
                  text:'',
                  disabled:false,
                  href:''
                },
                {
                text: '',
                disabled: true,
                href: '',
                }
            ]
        }
    },
    methods:{
        parseQuestion(url){
            let question = url.trim()
            question = question.replaceAll('-',' ')
            return question
        },
        async fetchCategory () {
            this.categoryName = this.$route.params.categories
            this.breadCrumbsitems[1].text = this.categoryName
            this.breadCrumbsitems[1].href = '/'+this.categoryName

            let quest = this.$route.params.question
            this.breadCrumbsitems[2].href = '/'+quest
            this.questionName = this.parseQuestion(quest)
            this.breadCrumbsitems[2].text = this.questionName
            
            if(localStorage.getItem('categories')) {
                this.categoryList = JSON.parse(localStorage.getItem('categories'))
                this.categoryList.forEach(element =>{
                    if(element.name == this.categoryName){
                        this.parentCategory = element.parent
                        this.categoryId = element.id
                    }
                })
            } else {
                this.categoryList = []
                this.latestCategoryList = await axios.get(`https://snippet-solution-backend.herokuapp.com/category/list`)
                this.latestCategoryList.data.forEach(element => {
                    if(element.category == this.categoryName){
                        this.parentCategory = element.parent
                        this.categoryId = element._id
                    }
                    let obj = {
                    id:element._id,
                    name:element.category,
                    parent: element.parent,
                    path:'/'+element.category
                    }
                    this.categoryList.push(obj)
            });
            localStorage.setItem('categories',JSON.stringify(this.categoryList))
            }
        },
        async fetchQuestion(){
            this.loading = true
            this.questionArray = await axios.get(`https://snippet-solution-backend.herokuapp.com/category/${this.categoryId}`)
            this.questionArray.data.forEach(element => {
                if(element.categoryId == this.categoryId) {
                    const obj = { 
                        question: element.question,
                        answer: element.answers[0]
                    }
                    this.questionAndAnswer.push(obj)
                }
            })
            this.questionAndAnswer.forEach(element =>{
            if(element.question == this.questionName){
                this.answer = element.answer
            }
        })
            this.loading = false
        }
    },
    // created(){
    //     this.categoryName = this.$route.params.categories
    //     this.breadCrumbsitems[1].text = this.categoryName
    //     this.breadCrumbsitems[1].href = '/'+this.categoryName

    //     let quest = this.$route.params.question
    //     this.breadCrumbsitems[2].href = '/'+quest
    //     this.questionName = this.parseQuestion(quest)
    //     this.breadCrumbsitems[2].text = this.questionName
    // },
    async mounted() {
        await this.fetchCategory()
        this.fetchQuestion()
    },

}
</script>

<style scoped>
.snippetContainer{
  width:90%; 
  height:auto; 
  font-size:16px;
}
 @media (max-width: 600px) {
     .snippetContainer {
         width: 100%;
         font-size: 13px;
     }
 }
</style>