<template>
  <div class="hello">
    <h3>{{ name }}</h3>
    <p>{{ weather }}</p>
    <p>{{ temperature }}</p>
    <p>{{ updatedAt }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: "CityTest",
  props: {
    msg: String,
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: String,
  },
  data() {
    return {
      // name: 'Chambéry', // nom de la ville
      // weather: 'Beau', // descriptif météo
      // temperature: 22, // température en °C
      // updatedAt: new Date() // date de dernière mise à jour
    }
  }

}
</script>

<style scoped>

</style>