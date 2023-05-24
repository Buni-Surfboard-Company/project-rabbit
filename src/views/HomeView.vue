<template>
  <ScrollTop />
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :effect="'fade'"
    :loop="true"
    :zoom="true"
    :autoplay="{
      delay: 4000,
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
                <h3 class="m-0 text-4xl lg:text-6xl">Welcome To <span class="text-primary">Buni Boards</span></h3>
                <p class="p-0 text-xl lg:text-3xl"> A collective of 7 free surfers from around the word providing ecofriendly, handshaped surfboards</p>
                <router-link to="/ourstory">
                <Button label="Find Out More"> </Button>
                </router-link>
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
                <div style="background: rgba(33, 37, 41, 0.5);">
                  <h3 class="m-0 text-4xl lg:text-6xl">Come Make the World A Little Cleaner</h3>
                  <p class="p-0 text-xl lg:text-3xl">Learn about our mission to one day become a zero-waste company</p>
                </div>
                <router-link to="/sustainability">
                <Button label="Learn More"> </Button>
                </router-link>
              </template>
          </Card>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-container w-full h-full overflow-hidden">
        <div class="swiper-img-container w-full h-full overflow-hidden" id="slide-four">
          <Card data-aos="fade-down-left" class="absolute w-4 bottom-0 right-0 mb-6 shadow-none" style="background: transparent">
              <template #content>
                <div style="background: rgba(33, 37, 41, 0.5);">
                  <h3 class="m-0 text-4xl lg:text-6xl">We're in the paper!</h3>
                  <p class="p-0 text-xl lg:text-3xl">Checkout a recent piece on us and our vision.</p>
                </div>
                  <a target="_blank" href="https://www.gazettetimes.com/news/local/corvallis-surfers-put-a-green-spin-on-their-surfboard-biz/article_337db484-bf9e-11ed-baac-7399f4fea34d.html">
                    <Button label="Read article"> </Button>
                  </a>
              </template>
          </Card>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>
      <div class="swiper-container w-full h-full overflow-hidden">
        <div class="swiper-img-container w-full h-full overflow-hidden" id="slide-two">
          <Card data-aos="fade-down-left" class="absolute w-4 bottom-0 right-0 mb-6 shadow-none" style="background: transparent">
              <template #content>
                  <h3 class="m-0 text-4xl lg:text-6xl">Looking to Get A Custom Stick</h3>
                  <p class="p-0 text-xl lg:text-3xl">Get in contact with us!</p>
                <router-link to="/surfboards">
                <Button label="Get Me a Board!"> </Button>
                </router-link>
              </template>
          </Card>
        </div>
      </div>
    </swiper-slide> -->
  </swiper>
  
  <div class="h-screen relative">
<div class="absolute flex flex-column pt-0 lg:pt-8 lg:flex-row grid-nogutter surface-section text-800 justify-content-center align-items-center" style="padding-top:15vh">
    <div class="z-4 col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block pt-3 text-5xl lg:text-8xl font-bold mb-1">We are</span>
            <div class="text-6xl text-5xl lg:text-8xl  text-primary font-bold mb-3">Buni Boards.</div>
            <p class="mt-0 mb-4 text-3xl text-700 line-height-3">7 Misfits that just want to make the best, most eco-friendly shred stick the world has ever seen. And catch some waves while doing it</p>
            
            <router-link to="/surfboards">
              <Button label="Browse Surfboards" type="button" class="mr-3 p-button-raised"></Button>
            </router-link>
            <a href="https://shop.buniboards.com/">
              <Button label="Browse Our Products" type="button" class="p-button-outlined"></Button>
            </a>
        </section>
    </div>
    <div class="col-10 md:col-6 overflow-hidden z-4" >
      <kinesis-container>
        <kinesis-element 
        :strength="40" 
        type="depth">
        <img data-aos="fade-right" src="@/assets/images/rabbitlogo-white.svg" alt="Image" class="w-100 md:ml-auto block h-full">
        </kinesis-element>
      </kinesis-container>
    </div>
</div>
<div class="top-0">
  <svg class="wave-top z-3" width="100" viewBox="0 0 1200 250">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#8dd0ff"/>
  </svg>
</div>
  </div>

    <div class="grid" style="min-height: 50vh; overflow: hidden; width: 100%; margin: auto">
        <div data-aos="fade-down-right" id="item-one" class="col picture-grid-item" style="width: 100%; overflow:">
          <router-link to="/repairs">
            <Button label="Repairs" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white"/>
          </router-link>
        </div>
        <div id="item-two" data-aos="fade-up-left" class="col picture-grid-item" style="">
          <a href="https://shop.buniboards.com/">
          <Button label="Eco-Products" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
          </a>
        </div>
    </div>
    <div class="grid bg-dark" style="min-height: 50vh; overflow: hidden; width: 100%; margin: auto">
        <div id="item-three" data-aos="fade-down-right" class="col picture-grid-item" style="">
          <router-link to="/team">
          <Button label="Meet the Team" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
        </router-link>
        </div>
        <div id="item-four" data-aos="fade-up-left" class="col picture-grid-item" style="">
          <router-link to="/surfboards">
          <Button label="Custom Boards" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
        </router-link>
        </div>
    </div>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center" style="min-height: 100vh;">
    <div class="mb-3 font-bold text-2xl">
        <span class="text-900 text-5xl">Buni Boards, </span>
        <span class="text-primary text-5xl">A New Way To Rip</span>
    </div>
    <div class="text-700 text-3xl mb-6 ">See What We are all about.</div>
    <div class="grid flex-column align-items-center">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 mb-3 inline-block surface-card " style="border-radius: 10px">
                <font-awesome-icon :icon="['fa', 'heart']" class="text-primary h-2rem"/> 
            </span>
            <div class="text-900 mb-3 text-3xl">Boards Built With Love</div>
            <span class="text-700 text-2xl line-height-3">Every Single Board, From Start to finish, is handmade by one of our excellent board builders</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <font-awesome-icon :icon="['fas', 'earth-americas']" class="text-primary h-2rem"/> 
            </span>
            <div class="text-900 mb-3 text-3xl">Made With The Earth In Mind</div>
            <span class="text-700 text-2xl line-height-3">Whether it is our econcious t-shirts or our bio-resin, we strive to shape the best boards and not make the world any worse than it already is. Maybe even a little better!</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
              <font-awesome-icon :icon="['fas', 'recycle']" class="text-primary h-2rem"/> 
            </span>
            <div class="text-900 mb-3 text-3xl">An Emphasis on Sustainability</div>
            <span class="text-700 text-2xl line-height-3">With Shot Glasses, Coasters, and more made from surfboard production waste, we believe nothing is truly "trash". 
              It is all treasure to us! anything to keep waste out of landfills.
            </span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <font-awesome-icon :icon="['fa', 'location-dot']" class="text-primary h-2rem"/> 
            </span>
            <div class="text-900 mb-3 text-3xl">From Surfers around the world</div>
            <span class="text-700 text-2xl line-height-3">With Members from the bay area, europe, and everywhere in between. We bring a wide array of perspectives to the industry.</span>
        </div>
    </div>
    <h1 class="text-900 z-2"> Follow us on Instagram! @buniboards </h1>

  <div data-behold-id="ohwXVzbDY9hQ5p7fht4p"></div>
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
      const onSwiper = () => {
      };
      const onSlideChange = () => {
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
  background-image: url(@/assets/images/fredAndPark.webp);
}

#slide-two{
  background-image: url(@/assets/images/black-white-team.webp);
}

#slide-three{
  background-image: url(@/assets/images/beckSurfing.webp);
}
#slide-four{
  background-image: url(@/assets/images/team-campus.jpeg);
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
  background-image: url("@/assets/images/daShop.webp");
}

#item-two {
  background-image: url("@/assets/images/beck-rippin.webp");
}
#item-three {
  background-image: url("@/assets/images/daTeam.webp");
}
#item-four {
  background-image: url("@/assets/images/glassin.webp");
}
</style>
