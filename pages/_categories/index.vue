<template>
    <div class="grey lighten-5">
    <v-breadcrumbs
      :items="breadCrumbsitems"
      divider="/"
    ></v-breadcrumbs>

    <div class="mx-6">
        <div><h2 class="pb-5">{{categoryName}} answers</h2></div>
        <related-quesitons :categoryName="categoryName"></related-quesitons>
    </div>
    </div>
    <!-- <p>
       <v-icon color="purple darken-2" > mdi-home </v-icon> >> {{$route.params.categories}}</p> -->
</template>

<script>
import QuestionAndInfo from '../../components/QuestionAndInfo.vue'
import RelatedQuesitons from '../../components/RelatedQuesitons.vue'
export default {
  components: { QuestionAndInfo },
    data(){
RelatedQuesitons
        return{
            categoryName:'',
            breadCrumbsitems: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
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
    }

}
</script>
