<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :effect="'fade'"
    :loop="true"
    :zoom="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="h-screen w-full m-auto"
  >
    <swiper-slide>
      <div class="swiper-container w-full h-full overflow-hidden">
        <Card data-aos="fade-down-left" class="absolute w-4 bottom-0 mb-6 shadow-none" style="background: transparent">
            <template #content>
                <h3 class="m-0 text-6xl">Welcome To <span class="text-primary">Buni Boards</span></h3>
                <p class="p-0 text-3xl"> A collective of 7 free surfers from around the word</p>
            </template>
        </Card>
        <div class="swiper-img-container w-full h-full overflow-hidden" id="slide-one">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-container w-full h-full overflow-hidden">
        <div class="swiper-img-container w-full h-full overflow-hidden" id="slide-three">
          <Card data-aos="fade-up-left" class="absolute w-4 mt-8 mr-8 right-0 shadow-none" style="background: transparent">
              <template #content>
                  <h3 class="m-0 text-6xl">Welcome To <span class="text-primary">Buni Boards</span></h3>
                  <p class="p-0 text-3xl"> A collective of 7 free surfers from around the word</p>
              </template>
          </Card>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-container w-full h-full overflow-hidden">
        <div class="swiper-img-container w-full h-full overflow-hidden" id="slide-two">
          <Card data-aos="fade-down-left" class="absolute w-4 bottom-0 right-0 mb-6 shadow-none" style="background: transparent">
              <template #content>
                  <h3 class="m-0 text-6xl">Welcome To <span class="text-primary">Buni Boards</span></h3>
                  <p class="p-0 text-3xl"> A collective of 7 free surfers from around the word</p>
              </template>
          </Card>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  
  <div class="h-screen relative bg-dark">
<div class="grid grid-nogutter absolute text-800 z-4 bottom-0 mb-8 w-full">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-8xl font-bold mb-1">We are</span>
            <div class="text-6xl text-8xl text-primary font-bold mb-3">Buni Boards.</div>
            <p class="mt-0 mb-4 text-3xl text-700 line-height-3">A Collective of 7 free surfers looking to progress the art of shaping in a sustainable fashion.</p>
            
            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        </section>
    </div>
    <div class="col-10 md:col-6 overflow-hidden" >
      <kinesis-container>
        <kinesis-element 
        :strength="40" 
        type="depth">
        <img data-aos="fade-right" src="@/assets/images/rabbitlogo.svg" alt="Image" class="md:ml-auto block md:h-full w-30rem mr-8">
        </kinesis-element>
      </kinesis-container>
    </div>
</div>
<div class="bg-dark h-screen top-0">
  <svg class="wave-top z-3" width="100" viewBox="0 0 1200 250">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#8dd0ff"/>
  </svg>
</div>
  </div>

    <div class="grid bg-dark" style="min-height: 50vh; overflow: hidden; width: 100%; margin: auto">
        <div data-aos="fade-down-right" id="item-one" class="col picture-grid-item bg-dark" style="width: 100%; overflow:">
          <router-link to="/repairs">
            <Button label="Repairs" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white"/>
          </router-link>
        </div>
        <div id="item-two" data-aos="fade-up-left" class="col picture-grid-item bg-dark" style="">
          <Button label="Eco-Products" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
        </div>
    </div>
    <div class="grid bg-dark" style="min-height: 50vh; overflow: hidden; width: 100%; margin: auto">
        <div id="item-three" data-aos="fade-down-right" class="col picture-grid-item bg-dark" style="">
          <Button label="Meet the Team" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
        </div>
        <div id="item-four" data-aos="fade-up-left" class="col picture-grid-item bg-dark" style="">
          <Button label="Custom Boards" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
        </div>
    </div>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center" style="min-height: 100vh;">
    <div class="mb-3 font-bold text-2xl">
        <span class="text-900 text-5xl">Buni Boards, </span>
        <span class="text-primary text-5xl">Gang Shit</span>
    </div>
    <div class="text-700 text-3xl mb-6 ">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid flex-column align-items-center">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-heart text-4xl text-primary"></i>
            </span>
            <div class="text-900 mb-3 text-3xl">Boards Built With Love</div>
            <span class="text-700 text-2xl line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shopping-cart text-4xl text-primary"></i>
            </span>
            <div class="text-900 mb-3 text-3xl">Convinient Shopping Experience</div>
            <span class="text-700 text-2xl line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-primary"></i>
            </span>
            <div class="text-900 mb-3 text-3xl">We Care about the Earth</div>
            <span class="text-700 text-2xl line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-sync text-4xl text-primary"></i>
            </span>
            <div class="text-900 mb-3 text-3xl">Sustainability</div>
            <span class="text-700 text-2xl line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
    </div>
</div>
</template>

<script>
  // import Swiper core and required modules
import { Zoom, Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import { waves } from '@/components/animate'

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import "swiper/css/effect-fade";

import { onMounted } from 'vue'
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      onMounted(() => {
        waves()
      })
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Zoom, Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y] ,
      };
    },
  };
</script>

<style scoped>
*{
  font-family: 'Bebas Neue';
}
.swiper-img-container{
  background-position: center;
  background-size: contain;
  background-color: black;
}

#slide-one{
  background-image: url(@/assets/images/fredAndPark.jpg);
}

#slide-two{
  background-image: url(@/assets/images/black-white-team.png);
}

#slide-three{
  background-image: url(@/assets/images/beckSurfing.png);
}

h1 {
  position: relative;
  z-index: 10
}

a {
  color: #FFE37B;
  text-decoration: none;
}

.wave-top {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}

.picture-grid-item{
  background-size: cover; /* or contain depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
  text-align:center;
  margin:auto;
  padding:0;
  width: 100%;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

#item-one {
  background-image: url("@/assets/images/shop-pic.png");
}

#item-two {
  background-image: url("@/assets/images/beck-rippin.png");
}
#item-three {
  background-image: url("@/assets/images/daTeam.png");
}
#item-four {
  background-image: url("@/assets/images/glassin.png");
}
</style>
