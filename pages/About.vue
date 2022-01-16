<template>
  <div class="text-center">
      <h2 class="my-4">About Us</h2>
      <p class="paragraphText">Snippet solution is a tool for software developers, where one can save coding notes 
          that can help him/her and many more developers like them facing the same problem.
      </p>
      <h2 class="my-4">Our Mission</h2>
      <p class="paragraphText">Being a working professional developer, I felt it many times that there will be many problems 
          you face while working, that will take hours of search, debugs and help from other 
          colleges but still no exact solution as per your need. That's why our mission is to create a community of developers, 
          who save every problem in notes that make them search google, So that many other developers like us 
          who may face the same problem in future can benefit from your experience.</p>
  </div>
</template>

<script>
export default {
  layout: 'info',
}
</script>

<style>
.paragraphText{
    width:70%;
    margin: 1px auto;
    line-height: 1.5;
}
@media (max-width: 600px) {
    .paragraphText {
        width: 90%;
    }
}
</style>