<template>
<div class="grey lighten-5">
    <v-breadcrumbs
      :items="breadCrumbsitems"
      divider="/"
    ></v-breadcrumbs>

    <div class="mx-6">
        <div><h2 class="pb-">{{questionName}}</h2></div>
        <div style="width:90%; height:auto;">
<pre>
    <code v-highlight class="sql" v-html="answer" style="padding: 1% 5%;">
    </code>
</pre>
        </div>
        <div class="my-6"><p>Similar Questions :</p></div>
        <related-quesitons :categoryName="categoryName"></related-quesitons>
    </div>
    </div>
  <!-- <p>{{$route.params.question}}</p> -->
</template>

<script>
export default {
    data(){
        return{
            categoryName:'',
            questionName:'',
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
    created(){
        this.categoryName = this.$route.params.categories
        this.breadCrumbsitems[1].text = this.categoryName
        this.breadCrumbsitems[1].href = '/'+this.categoryName

        this.questionName = this.$route.params.question
        this.breadCrumbsitems[2].text = this.questionName
        this.breadCrumbsitems[2].href = '/'+this.questionName

        
    },
    mounted() {
        if(localStorage.getItem('questionAnswer')){
            this.answer = JSON.parse(localStorage.getItem('questionAnswer'))
        }
    },

}
</script>
