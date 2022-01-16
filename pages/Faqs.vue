<template>
  <div class="text-center">
      <h2 class="my-4">Frequently Asked Questions</h2>

      <h3 class="text-primary my-4">Is snippet solution free ?</h3>
      <p class="paragraphText">Snippet solution is and will always be free to the developer community around the world. </p>

      <h3 class="text-primary my-4">How can we add questions ( save notes) to Snippet Solutioin ?</h3>
      <p class="paragraphText">Go to home page, you will find add question form there at top, enter your question, choose 
          best suitable category, enter your answer and submit. </p>

      <h3 class="text-primary my-4">How much time it takes to add questions ( save notes) to Snippet Solutioin ?</h3>
      <p class="paragraphText">From most of our member feedback, it only takes 10-15 seconds to add a solution. </p>
  </div>
</template>

<script>
export default {
  layout: 'info',
}
</script>

<style scoped>
.paragraphText{
  width:70%;
  margin: 1px auto;
  line-height: 1.5;
  margin-bottom: 4%;
}
@media (max-width: 600px) {
  .paragraphText {
    width: 90%;
  }
}
</style>