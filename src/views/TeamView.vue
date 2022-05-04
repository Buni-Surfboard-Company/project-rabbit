<template>
  <h1 class="text-primary">Who We Are</h1>
  <div class="flex flex-wrap justify-content-around text-left" style="gap:20px">
        <Card style="width: 25em">
            <template #header>
                <div id="parker" class="picture-grid-item h-30rem" style=""></div>
            </template>
            <template #title>
                Parker Conrad
            </template>
            <template #subtitle>
                Co-Founder / Board Builder
            </template>
            <template #content>
                <p>
                    <a class="no-underline hover:underline text-primary flex-order-1" href="mailto:parker@buniboards.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl"/> parker@buniboards.com</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
        <Card style="width: 25em">
            <template #header>
                <div id="mason" class="picture-grid-item h-30rem" style="">

                </div>
            </template>
            <template #title>
                Mason Crawford
            </template>
            <template #subtitle>
                Co-Founder / Board Builder
            </template>
            <template #content>
                <p>
                    <a class="no-underline hover:underline text-primary flex-order-1" href="mailto:mason@buniboards.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl"/> mason@buniboards.com</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
        <Card style="width: 25em">
            <template #header>
                <div id="frederick" class="picture-grid-item h-30rem" style=""></div>
            </template>
            <template #title>
                Frederick Boulton
            </template>
            <template #subtitle>
                Co-Founder / Board Builder / Janitor
            </template>
            <template #content>
                <p>
                    <a class="no-underline hover:underline text-primary flex-order-1" href="mailto:frederick@buniboards.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl"/> frederick@buniboards.com</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
        <Card style="width: 25em">
            <template #header>
                <div id="beck" class="picture-grid-item h-30rem" style=""></div>
            </template>
            <template #title>
                Beck Tankersely
            </template>
            <template #subtitle>
                Board Builder / Frother
            </template>
            <template #content>
                <p>
                    <a class="no-underline hover:underline text-primary flex-order-1" href="mailto:beck@buniboards.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl"/> beck@buniboards.com</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
        <Card style="width: 25em">
            <template #header>
                <div id="garner" class="picture-grid-item h-30rem" style=""></div>
            </template>
            <template #title>
                Garner Evans
            </template>
            <template #subtitle>
                Board Builder
            </template>
            <template #content>
                <p>
                    <a class="no-underline hover:underline text-primary flex-order-1" href="mailto:garner@buniboards.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl"/> garner@buniboards.com</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
        <Card style="width: 25em">
            <template #header>
                <div id="aaron" class="picture-grid-item h-30rem" style=""></div>
            </template>
            <template #title>
                Aaron Bernhard
            </template>
            <template #subtitle>
                Chief Design Officer
            </template>
            <template #content>
                <p>
Aaron started surfing on the oregon coast at 12 and immediately fell in love with it. He took whatever chance he could to paddle out, and got lucky enough to finish his last two years of high school in Southern California, where he would surf every day after school. He now lives in San Francisco where the water is a lot colder but the waves are just as good. He’s currently finishing his degree in architecture and enjoys combining his love for surfing and design.
                </p>
            </template>
        </Card>
        <Card style="width: 25em">
            <template #header>
                <div id="alihan" class="picture-grid-item h-30rem" style=""></div>
            </template>
            <template #title>
                Alihan Baysal
            </template>
            <template #subtitle>
                Consultant
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </Card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

a:hover {
    text-decoration: underline !important;
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

#parker{
    background-image: url("@/assets/images/mowing-foam.jpg");
}
#mason{
    background-image: url("@/assets/images/mowing-foam.jpg");
}
#frederick{
    background-image: url("@/assets/images/mowing-foam.jpg");
}
#beck{
    background-image: url("@/assets/images/mowing-foam.jpg");
}
#garner{
    background-image: url("@/assets/images/mowing-foam.jpg");
}
#aaron{
    background-image: url("@/assets/images/aaron2.png");
}
#alihan{
    background-image: url("@/assets/images/mowing-foam.jpg");
}

</style>