<template>
  <div class="text-center">
      <h2 class="my-4">Contact Us</h2>
      <p class="paragraphText">
          Please mail us at <b>snippetsolution@gmail.com</b>
      </p>
      <p class="paragraphText">For any query, complain or to advertise with us. </p>
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