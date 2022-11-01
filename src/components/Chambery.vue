<template>
  <!--  <div class="maVille">-->
  <!--    <h3>{{ name }}</h3>-->
  <!--    <p>{{ weather }}</p>-->
  <!--    <p>{{ temperature }}</p>-->
  <!--    <p>{{ updatedAt }}</p>-->
  <!--    <hr>-->
  <!--  </div>-->
  <div>
    <City
        v-bind:name="name"
        v-bind:weather="weather"
        v-bind:temperature="temperature"
        v-bind:updated-at="updatedAt.toLocaleString()">

    </City>

  </div>

</template>

<script>
import City from "@/components/City";

export default {
  name: "ChamberyMaVille",
  components: {
    City,
  },
  props: {},
  data() {
    return {
      name: 'Chambery', // nom de la ville
      weather: 'Beau', // descriptif météo
      temperature: 22, // température en °C
      updatedAt: new Date() // date de dernière mise à jour
    }
  }

}
</script>

<style scoped>

</style>