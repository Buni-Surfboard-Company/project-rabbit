<template>

  <Menubar class="bg-dark sticky w-auto z-5 top-0 text-2xl" style="border-radius: 0; font-family: 'Bebas Neue'" :model="navItems">
    <template #start>
      <router-link to="/">
      <img alt="logo" src="@/assets/images/bunilogo.svg" height="50" class="mr-2">
      </router-link>
    </template>
    <template #end>
      <div class="flex mr-8 pr-3 w-full justify-content-evenly">
      <a class="text-primary flex-order-1" v-tooltip.bottom="'(503) 739-2739'"><font-awesome-icon :icon="['fas', 'phone']" size="xl"/></a>
      <a class="text-primary flex-order-2" v-tooltip.bottom="'@buniboards'" target="_blank" href="https://www.instagram.com/buniboards/"><font-awesome-icon :icon="['fab', 'instagram']" size="xl"/></a>
      <a class="text-primary flex-order-1" v-tooltip.bottom="'buniboards@gmail.com'" href="mailto:buniboards@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl"/></a>
      </div>
    </template>
  </Menubar>

<div id="page-container" class="bg-dark">
  <div id="content-wrap">
    <router-view/>
  </div>
<footer class="bg-dark bottom-0">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="@/assets/images/bunilogo.svg" alt="" width="180" class="mb-3">
          <p class="font-italic text-muted">Some shit about our mission statement. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-3 text-2xl text-primary">Our Story</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Contact Us</a></li>
            <li class="mb-2"><a href="/ourstory" class="text-muted">Our Story</a></li>
            <li class="mb-2"><a href="/sustainability" class="text-muted">Buni and Sustainability</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-3 text-2xl text-primary">Services</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Custom Boards</a></li>
            <li class="mb-2"><a href="/repairs" class="text-muted">Repairs</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Events</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-3 text-2xl text-primary">Our Products</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Surfboards</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Shirts</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Waste Products</a></li>
          </ul>
        </div>
      </div>
        <div class="row-py4">
          <h6 class="text-uppercase font-weight-bold mb-3 text-2xl text-primary">Newsletter</h6>
          <p class="text-muted mb-4">Sign Up Fuckers.</p>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="pi pi-send text-primary"></i></button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- Copyrights -->
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span>Copyright © Buni Surfboard Company LLC 2022, All Right Reserved</span>
                    </div>
                    <!-- End Col -->
                    <div class="col-md-6">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#">Returns</a>
                                </li>
                                <li>
                                    <a href="/terms-and-conditions">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="/privacy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End col -->
                </div>
                <!-- End Row -->
            </div>
            <!-- End Copyright Container -->
        </div>
  </footer>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const navItems = ref([
      {
        label: 'Surfboards'
      },
      {
        label: 'Eco-Products'
      },
      {
        label: 'Services',
        items: [
          {
            label: 'Custom Boards'
          },
          {
            label: 'Repairs',
            url: '/repairs'
          },
          {
            label: 'Events'
          }
        ]
      },
      {
        label: 'Our Story',
        url: '/ourstory'
      },
      {
        label: 'Meet The Team',
        url: '/team'
      },
      {
        label: 'Buni & Sustainability',
        url: '/sustainability'
      }
    ])

    return {
      navItems
    }
  },
}
</script>

<style>
#app {
  font-family: 'Bebas Neue', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  /* padding-bottom: 1rem;    Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}

#footer ul {
    list-style: none;
}
#footer>ul>li {
    float: left;
    width: 120px;
}
#footer ul li ul li:first-child {
    font-weight: bold;
}

#footer ul li a {
  color: #7a91a7;
}
.copyright {
  padding: 28px 0;
  margin-top: 55px;
  background-color: #202020; }
  .copyright span,
  .copyright a {
    color: #878787;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear; }
  .copyright a:hover {
    color:#007bff; }

.copyright-menu ul {
  text-align: right;
  margin: 0; }

.copyright-menu li {
  display: inline-block;
  padding-left: 20px; }
</style>
