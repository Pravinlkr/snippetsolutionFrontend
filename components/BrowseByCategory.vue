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
      <!-- <nuxt-link :to="category.path"> -->
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
      <!-- </nuxt-link> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VIcons from '../components/VIcons.vue'
export default {
  components: { VIcons },
    data (){
        return{
            categoriesList :[ 
                {id:1, name:'JavaScript', path:'/javascript'}, 
                {id:2, name:'ReactJs', path:'/react-js'}, 
                {id:3, name:'VueJs', path:'/vue-js'},
                {id:4, name:'AngularJs', path:'/angular-js'},
                {id:5, name:'NodeJs', path:'/node-js'}, 
                {id:6, name:'PHP', path:'/php'},
                {id:7, name:'Python', path:'/python'},
                {id:8, name:'CSS', path:'/css'},
                {id:9, name:'Tailwind', path:'/tailwind'},
                {id:10, name:'Redux', path:'/redux'},
                {id:11, name:'Vuex', path:'/vuex'}, 
                {id:12, name:'C', path:'/c'},
                {id:13, name:'C++', path:'/c++'},
                {id:14, name:'Java', path:'/java'},
                {id:15, name:'Oops', path:'/oops'},
                {id:16, name:'SQL', path:'/sql'}
                ]
        }
    }
}
</script>