<template>
  <v-container class="grey lighten-5 my-6">
      <v-row>
          <v-col
        md="8" class="px-6 py-4">
            <h4>Add a Solution, which you think may be useful for other developers</h4>
            <div style="width:70%; height:40px" class="my-6">
              <v-text-field
                placeholder="Add Question"
                outlined
                dense
                clearable
                v-model="questionValue"
              ></v-text-field>
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
                <p class="text-center">No such category found, search again</p>
              </template>
              </v-autocomplete>
            </div>
            <div style="width:70%; height:150px;" class="mb-4">
              <v-textarea
                outlined
                no-resize
                clearable
                rows="6"
                class="answerBox hide-scrollbar"
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
import axios from 'axios'
export default {
  data(){
    return{
      questionValue:'',
      categorySelected:-1,
      answerCode:'',
      categoryList:[],
      questionArray:[]
    }
  },
  methods:{
    parseCode(code){
      code = code.replaceAll('<','&#x3C;')
      code = code.replaceAll('>','&#x3E;')
      return code
    },
    async saveQuestion(){
      if (this.questionValue.trim().length && this.categorySelected && this.answerCode.trim().length) {
        this.answerCode = this.parseCode(this.answerCode)
        await axios.post(`https://snippet-solution-backend.herokuapp.com/snippet`,{question:this.questionValue, answers:this.answerCode, categoryId:this.categorySelected})
        this.answerCode = ''
        this.categorySelected = -1
        this.questionValue = ''
      }
    }
  },
  mounted() {
    this.categoryList = JSON.parse(localStorage.getItem('categories'))
    this.categoryList.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
    // if(localStorage.getItem('questionAnswer')){
    //   this.questionArray = JSON.parse(localStorage.getItem('questionAnswer'))
    // }
  },
}
</script>
<style scoped>
.answerBox {
  font-size: 10px !important;
  line-height: 1.2;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

.hide-scrollbar {
   -ms-overflow-style: none;  /* IE and Edge */
   scrollbar-width: none;  /* Firefox */
}
</style>