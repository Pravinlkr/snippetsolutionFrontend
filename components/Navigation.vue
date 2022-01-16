<template>
<div>
  <v-app-bar
      class="navPadding"
      color="white"
      elevation="1"
      height="60"
      light
      app
    >
      <v-toolbar-title class="d-none d-sm-flex">Snippet Solution</v-toolbar-title>
      <v-toolbar-title class="d-flex d-sm-none">SS</v-toolbar-title>
      <v-spacer />
      <div class="searchContainer">
      <v-autocomplete 
        outlined 
        dense 
        clearable 
        rounded 
        v-model="userQuestion"
        :items="suggestedQuestions"
        :search-input.sync="search"
        :loading="isLoading"
        item-text="question"
        placeholder="Start typing to search" 
        prepend-inner-icon="mdi-magnify" 
        class="autocompleteClass"
        return-object
        hide-no-data
        >
        </v-autocomplete>
      </div>
      <v-spacer />
    <v-btn
      class="ma-2 d-none d-md-flex"
      outlined
      color="indigo"
      @click="openLoginModal()"
    >
      View Site As A Member
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
       
          <v-icon v-bind="attrs" class="d-flex d-md-none"
          v-on="on"> mdi-dots-vertical </v-icon>
        
      </template>
      <v-list>
        <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="openLoginModal()"
    >
      View Site As A Member
    </v-btn>
      </v-list>
    </v-menu>
    </v-app-bar>
    <Login ref="LoginModal" />
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Navigation',
    data(){
        return{
          isLoading: false,
          userQuestion: '',
          search: null,
          suggestedQuestions: [],
          categoryList: [],
          selectedCategory: '',
          selectedCategoryId: ''
        }
    },
    watch: {
      userQuestion (val) {
        if(!val){ return }
        if (val.question && val.categoryId && val.answers.length) {
          this.categoryList.forEach(element => {
            if (element.id == val.categoryId) {
              const url = element.path+'/'+val.question.trim().replaceAll(' ','-')
              this.$router.push(url)
            }
          })
        }
      },
      search (val) {
        if (!val) {
          return
        }
        this.isLoading = true
        setTimeout(
         this.fetchQuestion(val)
        , 1000)
        this.isLoading = false
      }
    },
    methods:{
      openLoginModal (){
        this.$refs.LoginModal.openModal()
      },
      async fetchQuestion (val) {
        this.suggestedQuestions = []
         const response = await axios.get(`https://snippet-solution-backend.herokuapp.com/snippet?search=${val}`)
          this.suggestedQuestions = response.data
        
      }
    }, 
    mounted() {
      this.categoryList = JSON.parse(localStorage.getItem('categories'))
    },
}
</script>

<style scoped>
  .searchContainer {
    width:50%;
    height: 40px;
  } 
  .navPadding{
      padding: 0px 30px;
  }
  .autocompleteClass{
    min-height: 35px !important;
    font-size: 13px;
  } 
  @media (max-width: 1023px) {
    .navPadding {
      padding: 0px 5px;
    }
  }
  @media (max-width: 600px) {
    .navPadding {
      padding: 0px 0px;
    }
    .searchContainer {
      width: 70%;
      height: 40px;
    }
  }
</style>
