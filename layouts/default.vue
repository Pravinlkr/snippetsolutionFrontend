<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <browse-by-category></browse-by-category>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
