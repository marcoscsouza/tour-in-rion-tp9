<template>
  <div>
    <h1>Onde comer</h1>

    <CardView 
    v-for="d in $store.state.restaurantes"
    :key="d.id"
    :dados="d"
    />
  </div>
</template>

<script>
import CardView from "../components/CardView.vue";

export default {
  components:{CardView},
}
</script>

<style scoped>
h1{
  margin: 1em;
  font-variant: small-caps;
}
</style>