<template>
  <v-container class="grey lighten-5 my-6">
     <p> Browse By Categories : </p>
    <v-row
    >
      <v-col
        v-for="category in categoriesList"
        :key="category.id"
        xs="6"
        md="2"
        sm="3"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          link
          :to="category.path"
        >
            <v-card-title>
                {{category.name}}
            </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VIcons from '../components/VIcons.vue'
import axios from 'axios'
export default {
  components: { VIcons },
    data (){
        return{
           latestCategoryList: [],
            categoriesList :[]
        }
    },
    async mounted() {
      this.latestCategoryList = await axios.get(`${process.env.API_BASE_URL}/category/list`)
      this.latestCategoryList.data.forEach(element => {
        let obj = {
          id:element._id,
          name:element.category,
          path:'/'+element.category
        }
        this.categoriesList.push(obj)
      });
      localStorage.setItem('categories',JSON.stringify(this.categoriesList))
    },
}
</script>