<template>
<div>
    <question-and-info></question-and-info>
    <v-row>
      <v-col sm="6" cols="12" class="colStyle">
          <h1 class="my-6">Why Snippet Solution ?</h1>
          <div class="divStyle">
          <p class="paragraph">Thousands of developer struggle to find best optimized solution even on google. 
              That's where Snippet Solution helps them with snippet of answer to their problem.</p>
          <p class="paragraph">If you also ever struggle to find answer to your problem and hardly get any exact solution then please do become a member and help other developers. </p>
          </div>
      </v-col>
      <v-col sm="6" cols="12" order="first" order-sm="last">
          <img src="@/assets/images/lading-first-image.jpg" class="imgStyle">
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" cols="12">
          <img src="@/assets/images/landing-header.png" class="imgStyle">
      </v-col>
      <v-col sm="6" cols="12" class="colStyle">
          <h1 class="my-6">Develop Faster</h1>
          <div class="divStyle">
          <p class="paragraph">With Snippet Solution, A snippet for all your programming queries</p>
          <p class="paragraph">We belive that programming is not about what you know, It's about what you can figure out. So search your query above and figure out the solution.</p>
          </div>
      </v-col>
    </v-row>
</div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
 .paragraph {
     line-height: 1.5;
 }
 .colStyle {
     padding: 5% 10%;
 }
 .divStyle {
     margin-top: 10%;
 }
 .imgStyle {
     width:70%;
     margin: 4% 15%;
 }
 @media (max-width: 1200px) {
     .imgStyle {
         margin: 10% 15%;
     }
     .colStyle {
         padding: 2% 10%;
     }
 }
 @media (max-width: 600px) {
     .imgStyle {
         width: 90%;
         margin: 1% 5%;
     }
     .colStyle {
         text-align: center;
        padding: 2% 10%;
     }
     .divStyle {
         margin-top: 1%;
     }
 }
</style>
