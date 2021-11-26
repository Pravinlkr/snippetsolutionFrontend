<template>
<div>
    <question-and-info></question-and-info>
    <v-row>
      <v-col md="6" xs="12" class="pt-12" style="padding:5% 10%">
          <h1 class="my-6">Why Snippet Solution ?</h1>
          <div style="margin-top:10%;">
          <p style="line-height:1.5">Thousands of developer struggle to find best optimized solution even on google. 
              That's where Snippet Solution helps them with snippet of answer to their problem.</p>
          <p style="line-height:1.5">If you also ever struggle to find answer to your problem and hardly get any exact solution then please do become a member and help other developers. </p>
          </div>
      </v-col>
      <v-col md="6" xs="12">
          <img src="@/assets/images/lading-first-image.jpg" style="width:70%; margin:4% 5%;">
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" xs="12">
          <img src="@/assets/images/landing-header.png" style="width:70%; margin:4% 15%;">
      </v-col>
      <v-col md="6" xs="12" class="pt-12">
          <h1 class="my-6">Develop Faster</h1>
          <div style="margin-top:10%; margin-right:22%">
          <p>With Snippet Solution, A snippet for all your programming queries</p>
          <p style="line-height:1.5">We belive that programming is not about what you know, It's about what you can figure out. So search your query above and figure out the solution.</p>
          </div>
      </v-col>
    </v-row>
</div>
</template>

<script>
import BrowseByCategory from '../components/BrowseByCategory.vue'
export default {
  components: { BrowseByCategory },
    data (){
        return{
            initCategoryList : [
                {id:1, name:'javascript'},
                {id:2, name:'css'},
                {id:3, name:'python'},
                {id:4, name:'php'},
                {id:5, name:'java'},
                {id:6, name:'html'},
                {id:7, name:'sql'},
                {id:8, name:'c'},
                {id:9, name:'c++'},
                {id:10, name:'scss'}
                ]
        }    
    },

    mounted() {
        localStorage.setItem('categories',JSON.stringify(this.initCategoryList))
    },
}
</script>
