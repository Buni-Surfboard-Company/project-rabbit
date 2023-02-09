<template>
<div class="story-container bg-dark max-w-screen overflow-hidden">
  <div class="story-header surface-section px-4 py-8 md:px-6 lg:px-8 h-30rem">
      <div class="text-700 text-center">
          <div class="text-900 font-bold sm:text-5xl lg:text-8xl mb-3">A Buni Stori</div>
          <div class="text-700 font-bold sm:text-xl lg:text-5xl mb-5">By Parker Conrad</div>
      </div>
  </div>
    <div class="flex flex-column lg:flex-row grid-nogutter surface-section text-800 justify-content-center align-items-center h-auto">
        <div data-aos="fade-right" class="pb-3 col-12 md:col-3 overflow-hidden">
            <img src="@/assets/images/rock.jpeg" class="border-circle w-100 md:ml-auto block md:h-full" alt="" style="">
        </div>
        <div data-aos="fade-right" class="col-12 md:col-6 p-6 text-center md:text-left">
            <section>
                <div class="block sm:text-2xl md:text-3xl  lg:text-5xl text-primary font-bold mb-1 text-center">The Ballad of Buni begins Summer of 2020 in Cannon Beach, Oregon</div>
                <p class="mt-0 mb-4 md:text-lg lg:text-2xl text-700 line-height-3 text-center">
Having spent much of the summer already surfing all day and spending a kook and a half on new boards, Mason Crawford and I decided we would shape a surfboard. There was hesitation at first. Where would we shape at? Aren't blanks expensive? Isn't shaping a one-way ticket to becoming the derelict hippie outcast that our friends and family warned us about? 
                </p>
            </section>
        </div>
        <div data-aos="fade-right" class="h-25rem col-10 md:col-3 lg:col-3 overflow-hidden flex-order-0 pt-4 pr-3">
            <GoogleMap
            :api-key="key"
            :styles="theme"
            style="width: 100%; height: 300px"
            :center="center"
            :zoom="8"
            :mapTypeControl=false
            :streetViewControl=false
            >
                <Marker :options="{ position: center }" />
            </GoogleMap>
         </div>
    </div>
    <div class="bg-dark flex flex-column lg:flex-row grid-nogutter text-800 justify-content-center md:align-items-center">
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <div class="block sm:text-3xl lg:text-5xl text-primary font-bold mb-3">We said To Hell With All of It.</div>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3">
That summer, we got to work. Mason found an 8'4" blank and glass, and we got every tool we thought we would need. Next was the bay. Conjuring up all the scrap 2x4s, plastic sheeting, and friends just crazy enough to help, we made our first shaping bay. The first rabbit hole. A hojunk configuration of garbage in my parent's backyard. Nonetheless, the first home of our surfboard company. 
                </p>
            </section>
        </div>
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 overflow-hidden">
            <img src="@/assets/images/early-dayz.png" alt="Image" class="bg-dark w-100 md:ml-auto block h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
    <div class= "flex flex-column lg:flex-row grid-nogutter surface-section text-800 justify-content-center align-items-center">
        <div data-aos="fade-right"  class="col-4 lg:col-2 overflow-hidden mt-3">
        <kinesis-container>
            <kinesis-element 
            :strength="40" 
            type="depth">
            <img src="@/assets/images/bunilogo-blue.svg" alt="Image" class="w-100 md:ml-auto block h-full">
            </kinesis-element>
        </kinesis-container>
        </div>
        <div  data-aos="fade-right" class="col-12 md:col-6 p-6 text-center md:text-left">
            <section>
                <span class="block sm:text-3xl lg:text-5xl text-primary font-bold mb-1 text-center">The Birth of The Brand</span>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3 text-center">
However, we still lacked a name and logo. Then came the 23-year-old hairy yet artistic man from San Francisco – Mr. Aaron Bernhard. Aaron believed he could draw, so we let him. The result is an homage to the semi-famous Cannon Beach Bunnies and a middle finger to traditional spelling conventions. Mason and Aaron came up with the brand. Buni Boards.                </p>
            </section>
        </div>
        <div data-aos="fade-right"  class="col-4 lg:col-2 overflow-hidden mb-5">
        <kinesis-container>
            <kinesis-element 
            :strength="40" 
            type="depth">
            <img src="@/assets/images/rabbitlogo.svg" alt="Image" class="w-100 md:ml-auto block h-full">
            </kinesis-element>
        </kinesis-container>
        </div>
    </div>
    <div class="flex flex-column lg:flex-row grid-nogutter text-800 justify-content-center md:align-items-center">
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 p-6 text-center md:text-left flex align-items-center flex-order-1">
            <section>
                <div class="sm:text-3xl lg:text-5xl text-primary font-bold mb-3 text-right">The First Buni</div>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3 text-right">
It took 7 people to make that first board. It was entirely hand-shaped by surforms and sandpaper. The only power tool we used was a 30-year-old router to free-route the fin boxes. Due to Oregon's weather and my parents' desire to not have a 12' x 6' piece of trash in their front yard, we moved Buni operations and glassed the board in Mason's grandparents' gardening shed. You can call it a piece of shit or question why it doesn't have a leash plug, but we had made our first surfboard. The look of the Blue B-U-N-I on the white foam canvas is one that I will never forget. 
                </p>
            </section>
        </div>
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 overflow-hidden flex-order-0">
            <img src="@/assets/images/mason-glassin.png" alt="Image" class="w-100 md:ml-auto block md:h-full" style="clip-path: polygon(0% 0, 100% 0%, 92% 100%, 0 100%)">
        </div>
    </div>
    <div class="bg-dark flex flex-column lg:flex-row grid-nogutter text-800 justify-content-center align-items-center">
        <div data-aos="fade-right" class="col-12 md:col-6 p-6 text-center md:text-left">
            <section>
                <span class="block sm:text-3xl lg:text-5xl text-primary font-bold mb-1 text-center">Buni Downtime</span>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3 text-center">
After that first year, Buni went into a bit of a lull. I got another board under my belt and would do some repairs when I was home from college, but definitely not shaping as much as I would like to. Instead, I spent the school year being a Buni Evangelist, preaching the word of surfing and talking way too much about the two and a half surfboards I had made. Even school projects were Buni, Alihan Baysal and I spent a term on the prototype of this very website. Still, we were lacking the members of the company that make us so damn great. 
</p>
            </section>
        </div>
    </div>
    <div class="bg-dark flex flex-column lg:flex-row grid-nogutter text-800 justify-content-center align-items-center">
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <div class="block sm:text-3xl lg:text-5xl text-primary font-bold mb-3">A Man With A Green Plan</div>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3">
Apparently, some people thought what Mason and I were doing was pretty cool. I had met Frederick Boulton, an east coast surfer from New York, freshman year and one of the best humans I know. He brought a refreshing perspective on a surfboard company that emphasized environmental sustainability. We spent the spring of 2021 closely following Ry Harris Shapes and their cutting-edge zero waste methodologies. Frederick would spend the school year and summer doodling board designs on his mechanical engineering homework and getting his toes wet as much as possible. 
</p>
            </section>
        </div>
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 overflow-hidden">
            <img src="@/assets/images/fancy.png" alt="Image" class="w-100 md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
    <div class="flex flex-column lg:flex-row grid-nogutter surface-section text-800 justify-content-center md:align-items-center">
        <div data-aos="fade-right" class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center lg:flex-order-1 md:flex-order-1 sm:flex-order-0">
            <section>
                <div class="sm:text-3xl lg:text-5xl text-primary font-bold mb-3 text-right">The Embodiment of Cody Maverick</div>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3 text-right">
Then I met Beck Tankersely while looking for surfing buddies on the internet. A land-locked Texan turned Oregon Coast surf/skate rat who doesn't even understand the definition of fear but only understands froth. Whether in the water or in the bay, the man is pure stoke. Beck would come and visit me that next summer in Cannon Beach to shape his first board in the bay of Master Seaside Shaper, Tom Scott. 
                </p>
            </section>
        </div>
        <div data-aos="fade-right" class="col-12 md:col-6 overflow-hidden flex-order-0">
            <img src="@/assets/images/beck-in-toms.png" alt="Image" class="w-100 md:ml-auto block md:h-full" style="clip-path: polygon(0% 0, 100% 0%, 92% 100%, 0 100%)">
        </div>
    </div>
    <div class="bg-dark flex flex-column lg:flex-row grid-nogutter text-800 justify-content-center md:align-items-center">
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <div class="block sm:text-3xl lg:text-5xl text-primary font-bold mb-3">Another New Perspective from Texas</div>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3">
Through preaching the Buni Word back to his best friend Garner Evans in Amarillo, Beck soon found out that Garner wasn't the biggest fan of Texas either. Garner, a calming soul and hopeless romantic, immediately challenged any conventions of board design with his magnum opus: The Blood Buni. Ya gotta love it! He graduated college, packed his bags, and got his ass up to the Pacific Northwest.             
                </p>
            </section>
        </div>
        <div data-aos="fade-left" class="bg-dark col-12 md:col-6 overflow-hidden">
            <img src="@/assets/images/Garner.png" alt="Image" class="w-100 md:ml-auto block h-auto" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
    <div class="flex flex-column lg:flex-row grid-nogutter surface-section text-800 justify-content-center md:align-items-center">
        <div data-aos="fade-right" class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center lg:flex-order-1">
            <section>
                <div class="sm:text-3xl lg:text-5xl text-primary font-bold mb-3 text-right">Home Sweet Corvallis</div>
                <p class="mt-0 mb-4 sm:text-xl lg:text-2xl text-700 line-height-3 text-right">
Once Fall of 2021 came around, we knew it was time for Buni to finally materialize. We had no business shaping surfboards in Corvallis, Oregon, but we did not care. The whole team was yearning to mow some foam and help others fall in love with the art that has changed each of our lives. We got the word out, wrote Facebook and Craigslist Posts, and spent days hanging up posters around town. After months of searching, we found our current home. A 400-square-foot art studio in the heart of downtown Corvallis. How quaint.
                </p>
            </section>
        </div>
        <div data-aos="fade-right" class="overflow-hidden lg:flex-order-0">
            <img src="@/assets/images/daShop.webp" alt="Image" class="w-100 md:ml-auto block md:h-full" style="clip-path: polygon(0% 0, 100% 0%, 92% 100%, 0 100%)">
        </div>
    </div>
    <div class="flex flex-column lg:flex-row grid-nogutter surface-section text-800 justify-content-center md:align-items-center">
        <div class="col-12 md:col-6 p-6 text-center md:text-left">
            <section>
                <div class="block sm:text-2xl md:text-3xl  lg:text-5xl text-primary font-bold mb-1 text-center">So Here We Are</div>
                <p class="mt-0 mb-4 md:text-lg lg:text-2xl text-700 line-height-3 text-center">
At the end of the day, we are seven shitheads that want to have some fun, share the stoke, and maybe even make the world just a little bit better of a place. Thank you to every person we have met throughout our journey so far. Without you all, there would be no Buni. Thank you for taking a risk. Thank you for the support. Thank you for believing in us. We are excited about what is to come. So from all of us at Buni, quit reading this sappy ass origin story and go get some damn waves!
                </p>
                <p class="sm:text-2xl md:text-3xl text-primary font-bold mb-1 text-center">- Parker Conrad</p>
            </section>
        </div>
        <div class="h-25rem col-10 md:col-3 lg:col-3 overflow-hidden flex-order-0 pt-4 pr-3" style="align-self: center">
            <GoogleMap
            :api-key="key"
            :styles="theme"
            style="width: 100%; height: 300px"
            :center="corvalisCords"
            :zoom="11"
            :mapTypeControl=false
            :streetViewControl=false
            >
                <Marker :options="{ position: corvalisCords }" />
            </GoogleMap>
         </div>
    </div>
</div>
</template>

<script>
import mowingFoam from "@/assets/images/mowing-foam.jpg"
import { GoogleMap, Marker } from 'vue3-google-map'
export default {
  components: { GoogleMap, Marker },
    setup(){
        const center = { lat: 45.88434478245395, lng: -123.96863322891855}
        const key = process.env.VUE_APP_MAP_KEY
        const theme = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
                        ]
        const disableDefaultUI = true
        const corvalisCords = { lat: 44.56143783336773, lng: -123.26145489617988}
        return{
            mowingFoam,
            center,
            key, 
            theme, 
            disableDefaultUI, 
            corvalisCords
        }
    }
}
</script>

<style scoped>
.story-container{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.story-header{
    background-image: url("@/assets/images/walking-into-water.JPG");
    background-position: center;
    background-size: cover;
    background-color: black;
}
</style>