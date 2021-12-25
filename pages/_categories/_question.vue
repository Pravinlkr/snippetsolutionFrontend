<template>
<div class="grey lighten-5">
    <v-breadcrumbs
      :items="breadCrumbsitems"
      divider="/"
    ></v-breadcrumbs>

    <div class="mx-6">
        <div><h2 class="pb-">{{questionName}}</h2></div>
        <div style="width:90%; height:auto; font-size:16px;">
<pre>
    <code v-highlight :class="parentCategory" v-html="answer" style="padding: 2% 5%; line-height:1.5;">
    </code>
</pre>
        </div>
        <div class="my-6"><p>Similar Questions :</p></div>
        <related-quesitons :categoryName="categoryName"></related-quesitons>
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
        async fetchQuestion(){
            this.loading = true
            this.questionArray = await axios.get(`${process.env.API_BASE_URL}/category/${this.categoryId}`)
            this.questionArray.data.forEach(element => {
                if(element.categoryId == this.categoryId) {
                    const obj = { 
                        question: element.question,
                        answer: element.answers[0]
                    }
                    this.questionAndAnswer.push(obj)
                }
            })
            console.log('73 ',this.questionAndAnswer)
            this.questionAndAnswer.forEach(element =>{
            if(element.question == this.questionName){
                this.answer = element.answer
            }
        })
            this.loading = false
        }
    },
    created(){
        this.categoryName = this.$route.params.categories
        this.breadCrumbsitems[1].text = this.categoryName
        this.breadCrumbsitems[1].href = '/'+this.categoryName

        let quest = this.$route.params.question
        this.breadCrumbsitems[2].href = '/'+quest
        this.questionName = this.parseQuestion(quest)
        this.breadCrumbsitems[2].text = this.questionName
    },
    mounted() {
        this.categoryList = JSON.parse(localStorage.getItem('categories'))
        this.categoryList.forEach(element =>{
            if(element.name == this.categoryName){
                this.parentCategory = element.parent
                this.categoryId = element.id
            }
        })
        this.fetchQuestion()
    },

}
</script>
