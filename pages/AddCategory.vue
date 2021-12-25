<template>
  <div class="mx-auto my-5 text-center">
    <h1 class="">Add New Category</h1>
    <v-card
    class="mx-auto px-4 py-4 my-3"
    max-width="344"
    outlined
  >
    <v-form
    ref="form"
  >
    <v-text-field
      v-model="categoryName"
      label="Category Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="parentName"
      label="Parent Name"
      required
    ></v-text-field>
    <v-card-actions> 
    <v-btn
      color="success"
      @click="addCategoryToDb()"
    >
      Add Category
    </v-btn>
    </v-card-actions>
  </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            categoryName:'',
            parentName:''
        }
    }, 
    methods:{
        async addCategoryToDb () {
            if(this.categoryName.trim().length && this.parentName.trim().length) {
                await axios.post(`${process.env.API_BASE_URL}/category/`,{category:this.categoryName, parent:this.parentName})
                this.categoryName = ''
                this.parentName = ''
            }
        }
    }

}
</script>

<style>

</style>