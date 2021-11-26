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
      <v-toolbar-title>Snippet Solution</v-toolbar-title>
      <v-spacer />
      <div style="width:50%; height:40px">
      <v-autocomplete outlined dense clearable rounded placeholder="Start typing to search" prepend-inner-icon="mdi-magnify" class="autocompleteClass"></v-autocomplete>
      </div>
      <v-spacer />
      <!-- <v-btn
      class="ma-2"
      outlined
      color="blue"
    >
      Sign Up
    </v-btn> -->
    <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="openLoginModal()"
    >
      View Site As A Member
    </v-btn>
    </v-app-bar>
    <Login ref="LoginModal" />
    </div>
</template>

<script>
export default {
    name:'Navigation',
    data(){
        return{
        }
    },
    methods:{
      openLoginModal(){
        this.$refs.LoginModal.openModal()
      }
    }
}
</script>

<style scoped>
    
    .navPadding{
        padding: 0px 30px;
    }
    .autocompleteClass{
      min-height: 35px !important;
      font-size: 13px;
    }
   
</style>