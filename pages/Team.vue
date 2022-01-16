<template>
  <div class="text-center">
      <h2 class="my-4">Our Team</h2>
      <p class="paragraphText">We will share our team information shortly, Thank You. </p>
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