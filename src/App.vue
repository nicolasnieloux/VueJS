<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">


    <p>
      <router-link to="/cities">Liste des villes</router-link>
    </p>
    <p>
      <router-link to="/">Ma ville</router-link>
    </p>
    <p>
      <router-link to="/api">Villes API</router-link>
    </p>
    <router-view></router-view>

  </div>

</template>


<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
