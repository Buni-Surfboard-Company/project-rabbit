<template>
<router-link class="no-underline" to="/contact">
  <Button label="Contact Us" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
</router-link>
<div class="repair-pdf" style="margin: auto; width: 75%; min-height: 75vh; margin-top: 25px;">
  <div class="pt-5" style="margin: auto; width: 75%; min-height: 100%;">

</div>
</div>
</template>

<script>

export default {
  components: {
  },
    // components: {
    //     ContactForm
    // }
    data(){
      return{
  }
    }

}
</script>

<style>
.repair-pdf{
    background-image: url("@/assets/images/repair-page.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.content-wrap{
  min-height: 100vh;
}
</style>