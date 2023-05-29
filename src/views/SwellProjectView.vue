<template>
    <ScrollTop />
    <div class="story-container bg-dark max-w-screen overflow-hidden">
    <div class="story-header surface-section px-4 py-8 md:px-6 lg:px-8 h-50rem">
        <div class="text-700 text-center pt-5" style="">
            <div class="text-primary font-bold sm:text-5xl md: text-5xl lg:text-8xl mb-3" style="background: rgba(33, 37, 41, 0.4);">The Swell Project</div>
            <div class="text-primary font-bold sm:text-xl lg:text-4xl mb-3" style="background: rgba(33, 37, 41, 0.4);">
                The Fight To Surf Beyond Circumstance.
            </div>
        </div>
    </div>
    <div class="button-container" >
        <div v-if="!isMobile">
            <a href="#what">
                <Button label="What This Is" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
            </a>
            <a href="#oregon">
                <Button label="The Oregon Initiative" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white" />
            </a>
            <a href="#cuba">
                <Button label="The Cuba Initiative" class="p-button-lg p-button-outlined p-button-primary hover:bg-primary text-primary hover:text-white"/>
            </a>
        </div>
    <a target="_blank" href="https://www.gofundme.com/f/support-underprivileged-surfers">
        <Button label="Support Now"/>
    </a>

  </div>
    </div>

    <div class="story-container bg-dark max-w-screen overflow-hidden">
        <div class="info-header surface-section px-2 py-1 md:px-6 lg:px-8 h-50rem" id="what">
        <div class="text-700 text-left pt-5" style="">
            <div class="text-primary font-bold sm:text-3xl md: text-4xl lg:text-7xl mb-3" style="background: rgba(33, 37, 41, 0.5);">What This Is</div>
            <p class="text-primary font-bold text-xs sm:text-lg md:text-lg lg:text-xl mb-3" style="background: rgba(33, 37, 41, 0.8);">
                Being a surfer is understanding that you are in the lucky few who have the opportunity to pursue a deeper connection with the ocean. Whether it be the bone-chilling fear of a black wave face showing its teeth, the exhaustive disappointment of an unsuccessful paddle, or the indescribable “stoke” of that elusive ride, surfing is a microcosm of the emotional peaks and valleys we traverse throughout our lives. 
                <br/>
                <br/>
                Whether you see the ocean as a grand coliseum, religious temple, or therapist's office, riding waves is a special experience that a select few have access to, and at Buni Surfboard Co. we believe in doing everything in our power to break down the boundaries that restrict access to our planet's greatest teacher.
                <br/>
                <br/>
                <u>Our objective is to create an ongoing initiative within our company to grant surfboards, lessons, equipment, and outreach to individuals and communities that have previously had their access to surfing restricted.</u> We believe that being a small shaping company gives us the rare opportunity to direct our time away from profit-seeking endeavors and focus largely on expanding and diversifying the surf community through the granting of high-end surfboards and materials to people who otherwise would not have access
            </p>
        </div>
    </div>
    </div>
    <div v-if="isMobile">
        <div class="story-container bg-dark max-w-screen overflow-hidden">
            <div class="info-header surface-section px-2 py-8 md:px-6 lg:px-8 h-50rem" id="yenia">

            </div>
        </div>
    </div>
    <div class="story-container bg-dark max-w-screen overflow-hidden">
        <div class="info-header surface-section px-2 py-2 md:px-6 lg:px-8 h-50rem" id="oregon">
        <div class="text-700 text-left pt-5" style="">
            <div class="text-primary font-bold sm:text-3xl md: text-4xl lg:text-7xl mb-3" style="background: rgba(33, 37, 41, 0.5);">The Oregon Initiative</div>
            <p class="text-primary font-bold text-xs sm:text-md md:text-lg lg:text-xl mb-3" style="background: rgba(33, 37, 41, 0.9);">
                COMING SOON...
            </p>
        </div>
    </div>
    </div>

    <div v-if="isMobile">
        <div class="story-container bg-dark max-w-screen overflow-hidden">
            <div class="info-header surface-section px-2 py-8 md:px-6 lg:px-8 h-50rem" id="frank">

            </div>
        </div>
    </div>

    <div class="story-container bg-dark max-w-screen overflow-hidden">
        <div class="info-header surface-section px-2 py-2 md:px-6 lg:px-8 h-50rem" id="cuba">
        <div class="text-700 text-left pt-5" style="">
            <div class="text-primary font-bold sm:text-3xl md: text-4xl lg:text-7xl mb-3" style="background: rgba(33, 37, 41, 0.5);">The Cuba Initiative</div>
            <p class="text-primary font-bold text-xs sm:text-md md:text-lg lg:text-xl mb-3" style="background: rgba(33, 37, 41, 0.9);">
                Despite being an island nation,
                Cuba has had little to no surf
                culture for generations but through
                the hard work of a few Cuban
                surfers, that is finally beginning to
                change. The complications they
                face are truly too many to name,
                but one predominant issue is their
                accessibility to surfboards, due to
                trade embargoes and government
                interests. As a small group of
                surfers leads the charge in growing
                the sport throughout the island,
                there is a glaring issue of access to
                boards for the people of the island.
                <br/>
                <br/>
                We at Buni understand that we are
                among the lucky few who have the
                opportunity to pursue a deeper
                connection with the ocean. With
                this comes a firm belief that
                citizens of every nation deserve the
                accessibility that we enjoy to the
                boards that allow us to chase
                waves to our hearts content.
                <br/>
                <br/>
                <u>Our mission is to build 30
                surfboards that lend
                themselves to all levels of
                surfing, and then to bring
                them to Cuba as gifts for
                the burgeoning surf
                organizations that currently exist </u>
                We at Buni
                as well as the surfers of
                Cuba thank you, and hope
                that there are nothing but
                good waves on your
                horizons.
            </p>
        </div>
    </div>
    </div>
    <div v-if="isMobile">
        <div class="story-container bg-dark max-w-screen overflow-hidden">
            <div class="info-header surface-section px-2 py-8 md:px-6 lg:px-8 h-50rem" id="kiddos">

            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
    setup() {
    const isMobile = ref(false);

    const checkMobile = () => {
      isMobile.value = window.matchMedia("(max-width: 768px)").matches;
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", checkMobile);
    });

    return {
      isMobile
    };
  }
}
</script>

<style>
.story-container{
  font-family: 'Open Sans', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  display: inline-block;
  width: 100%;
}

.story-header{
    background-image: url("@/assets/images/Marco_Bava_Stormy.jpg");
    background-position: center;
    background-size: cover;
    background-color: black;
    height: 75vh;
}

.info-header{
    background-position: center;
    background-size: cover;
    background-color: black;
    height: 80vh;
}

#what{
    background-image: url("@/assets/images/Marco_Bava_Dive.jpg");

}

#oregon{
    background-image: url("@/assets/images/board-demo.jpg");
}

#cuba{
    background-image: url("@/assets/images/Marco_Bava_Loaded.jpg");

}

#yenia{
    background-image: url("@/assets/images/Yenia_Surfboard.gif");
}
#frank{
    background-image: url("@/assets/images/frank_surfing.gif");
}
#kiddos{
    background-image: url("@/assets/images/kids_surfing.gif");
}


.button-container {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background: rgba(33, 37, 41, 0.7);
}

.button-container Button {
  margin: 10px 40px 10px 10px;
  width: 250px; /* Set the desired width */
  height: 50px; /* Set the desired height */
  overflow: hidden;
  white-space: nowrap;
}

@media (max-width: 1200px) {
  .button-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>