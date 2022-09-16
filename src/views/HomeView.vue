<template>
 <div class="">
    <HomeBanner/>
    <HomeCard/>
 </div>


</template>

<script>
import HomeBanner from '@/components/home/HomeBanner.vue';
import HomeCard from "@/components/home/HomeCard.vue";

export default {
  name: 'HomeView',
  components: {
    HomeBanner, HomeCard
  }
}
</script>

<style scoped>

</style>
