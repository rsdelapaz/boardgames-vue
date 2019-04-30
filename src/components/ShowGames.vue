<template>
  <div class="fluid">
    <b-card-group deck v-if="isVisibleGames">
      <GameItemComponent v-for="game in filterGames" :key="game.gameId" v-bind:game="game"></GameItemComponent>
    </b-card-group>
    <div v-if="filterGames.length == 0" class="mgtop30">
      No se encuentran registros para el filtro
      <i>{{ filter }}</i>.
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import BggApiService from "../services/bgg-api.service";
import { GameItem } from "../entities";
import { CollectionItem } from "../entities/collection-item";
import GameItemComponent from "./GameItem";

export default {
  data() {
    return {
      bggApiService: new BggApiService(),
      games: [],
      filterGames: [],
      filter: ""
    };
  },
  components: {
    GameItemComponent
  },
  computed: {
    isVisibleGames() {
      return this.filter != null && this.filter.length > 2;
    }
  },
  mounted() {
    const self = this;

    this.bggApiService.getCollection("soliem").then(games => {
      self.games = [...games];
      self.filterGames = [...games];
    });

    eventBus.$on("searchGames", filter => {
      self.filter = filter;
      self.filterGames = filter
        ? self.games.filter(
            game => game.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
          )
        : self.games;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
