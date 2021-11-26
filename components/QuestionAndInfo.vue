<template>
  <v-container class="grey lighten-5 my-6">
      <v-row>
          <v-col
        md="8" class="px-6 py-4">
            <h4>Add a Solution, which you think might be useful for other developers</h4>
            <div style="width:70%; height:40px" class="my-6">
            <v-autocomplete 
              outlined 
              dense 
              clearable 
              v-model="questionValue"
              placeholder="Question ..." 
              class="autocompleteClass">
              <template slot="no-data">
                <div></div>
              </template>
            </v-autocomplete>
            </div>
            <div style="width:70%; height:40px" class="my-6">
            <v-autocomplete 
              outlined 
              dense 
              clearable 
              v-model="categorySelected"
              :items="categoryList"
              item-text="name"
              item-value="id"
              placeholder="Please choose best suitable category" 
              class="autocompleteClass">
              <template slot="no-data">
                <p class="text-center">No such category found, Please choose another one</p>
              </template>
              </v-autocomplete>
            </div>
            <div style="width:70%; height:150px;" class="mb-4">
              <v-textarea
                outlined
                no-resize
                clearable
                rows="6"
                class="answerBox"
                label="Enter Your Code Here"
                v-model="answerCode"
              ></v-textarea>
            </div>
            <v-btn
            class="ma-2"
            outlined
            color="blue"
            @click="saveQuestion()"
            >
             Add Question
            </v-btn>
        </v-col>
          <v-col
        md="4">
        <div style="background-color:white; width:100%; padding:2% 5%; margin-top:10%;">
            <h4 class="text-center py-2">Current Stats</h4>
            <hr>
            <div class="d-flex justify-space-between py-3">
               <div><span><v-btn fab dark x-small color="cyan" class="mr-2"><v-icon dark> mdi-account-group </v-icon></v-btn><b> Total Contributors</b></span></div>
               <h3 class="mt-1">2</h3>
            </div>
            <div class="d-flex justify-space-between py-3">
               <div><span><v-btn fab dark x-small color="warning" class="mr-2"><v-icon dark> mdi-clipboard </v-icon></v-btn><b> Total Questions</b></span></div>
               <h3 class="mt-1">22</h3>
            </div>
            <div class="d-flex justify-space-between py-3">
               <div><span><v-btn fab dark x-small color="success" class="mr-2"><v-icon dark> mdi-clipboard-edit </v-icon></v-btn><b> Total Solutions</b></span></div>
               <h3 class="mt-1">37</h3>
            </div>
        </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      questionValue:'',
      categorySelected:-1,
      answerCode:'',
      categoryList:[]
    }
  },
  methods:{
    saveQuestion(){
      console.log('91 ',this.questionValue)
      console.log('92 ',this.categorySelected)
      console.log('93 ',this.answerCode)
      // localStorage.setItem('questionAnswer',JSON.stringify(this.answerCode))
      this.answerCode = ''
    }
  },
  mounted() {
    this.categoryList = JSON.parse(localStorage.getItem('categories'))
  },
}
</script>
<style scoped>
.answerBox {
  font-size: 10px !important;
  line-height: 1.2;
}
</style>