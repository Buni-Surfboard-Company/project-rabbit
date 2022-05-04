<template>
<div class="story-container bg-dark max-w-screen overflow-hidden">
  <div class="story-header surface-section px-4 py-8 md:px-6 lg:px-8 h-30rem">
      <div class="text-700 text-center pt-8">
          <div class="text-primary font-bold sm:text-5xl lg:text-8xl mb-3" style="background: rgba(33, 37, 41, 0.8);">Buni & Sustainability</div>
      </div>
  </div>
  <div class="story pt-8 p-8">
      <p class="text-900 sm:text-2xl lg:text-3xl line-height-3 text-left m-auto ">
Here at Buni there are two things that mean the most to us, shitty waves and good times. However we are also extremely 
conscious that without a happy-healthy planet neither will last very long, hence our full fledged commitment to sustainability.
 Buni sets itself apart from the household names with a number of eco-friendly practices.
      </p>
  </div>

  <div data-aos="fade-left" class="flex flex-column lg:flex-row text-primary w-screen align-items-center justify-content-around text-8xl" style="gap: 10px">
        <div class="col-4 lg:col-2 overflow-hidden">
            <img src="@/assets/images/rabbitlogo.svg" alt="Image" class="w-100 md:ml-auto block h-full">
        </div>
      <font-awesome-icon :icon="['fas', 'plus']" size="xl"/> <font-awesome-icon :icon="['fas', 'recycle']" size="xl"/> <font-awesome-icon :icon="['fas', 'equals']" size="xl"/> 
      <font-awesome-icon :icon="['fa', 'face-laugh-beam']" size="xl"/>  <font-awesome-icon :icon="['fas', 'earth-americas']" size="xl"/> 
  </div>

  <div class="story p-8">
    <p class="text-900 sm:text-2xl lg:text-3xl line-height-3 text-left m-auto">
Starting from the ground up our foam 
 blanks are the Oregon made Great Pacific Foam EPS. Made from recyclable foam, our foam waste goes directly to a local recycling
  plant specializing in the re-use of EPS foams. Continuing on, the fiberglass offcuts are stored specially for use in future 
  projects and board repairs.
    </p>
  </div>

    <div data-aos="fade-right" class="flex flex-row text-primary w-screen align-items-center justify-content-evenly text-8xl">
        <div class="col-4 lg:col-2 overflow-hidden mb-5">
            <img src="@/assets/images/great-pacific-logo.svg" alt="Image" class="w-100 md:ml-auto block h-full">
        </div>
        <div class="col-4 lg:col-2 overflow-hidden mb-5">
            <img src="@/assets/images/EPS_Foam_Recycles.svg" alt="Image" class="w-100 md:ml-auto block h-full">
        </div>
    </div>

  <div class="story p-8">
    <p class="text-900 sm:text-2xl lg:text-3xl line-height-3 text-left m-auto">
On top of this, we use ECOBOARD certified Bio-Resin which avoids the harvest of fossil fuels due 
  to its plant based composition.
    </p>
  </div>

    <div data-aos="fade-left" class="flex flex-column text-primary w-screen align-items-center justify-content-evenly text-8xl">
        <div class="col-4 lg:col-2 overflow-hidden mb-5">
            <img src="@/assets/images/eco-board-level-one.svg" alt="Image" class="w-100 md:ml-auto block h-full">
        </div>
        <div class="col-10 lg:col-8 overflow-hidden mb-5">
            <img src="@/assets/images/ecoboard.png" alt="Image" class="w-100 md:ml-auto block h-full" style="background: rgba(141, 208, 255, 1)">
        </div>
    </div>

  <div class="story p-8">
    <p class="text-900 sm:text-2xl lg:text-3xl line-height-3 text-left m-auto">
Finally, any resin that does not make it onto a board becomes useful for the construction of 
  our unique line of shot glasses, coasters, and dildos.
    </p>
  </div>

    <div data-aos="fade-right" class="flex flex-column text-primary w-screen align-items-center justify-content-evenly text-8xl">
        <div class="col-7 lg:col-5 overflow-hidden mb-5">
            <img src="@/assets/images/products.jpg" alt="Image" class="w-100 md:ml-auto block h-full">
        </div>
    </div>

  <div class="story p-8">
    <p class="text-900 sm:text-2xl lg:text-3xl line-height-3 text-left m-auto">
Eventually we want to address the small percentage of waste that we 
  cannot currently repurpose, but for the time being we’ll make sure to keep our local beaches clean and our waters free of 
  Israeli extremists. 
    </p>
  </div>

  <div class="story p-8">
    <p class="text-900 sm:text-2xl lg:text-3xl line-height-3 text-left m-auto">

    </p>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.story-container{
  font-family: 'Open Sans', Tahoma, Geneva, Verdana, sans-serif;
}

.story-header{
    background-image: url("@/assets/images/garners-board-drying-color.png");
    background-position: center;
    background-size: cover;
    background-color: black;
}
</style>