<template>
  <div>
    <SearchGames />
    <ShowGames />
  </div>
</template>

<script>
import SearchGames from "@/components/SearchGames.vue"; // @ is an alias to /src
import ShowGames from "@/components/ShowGames.vue"; // @ is an alias to /src

export default {
  name: 'home',
  components: {
 SearchGames,
    ShowGames
  },
};

</script>
