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
    updatedAt: Date,
  },
  data() {
    return {
      // name: 'Ma ville', // nom de la ville
      // weather: 'Peu nuageux', // descriptif météo
      // temperature: 20.55, // température en °C
      // updatedAt: new Date() // date de dernière mise à jour
    }
  }

}
</script>

<style scoped>

</style>