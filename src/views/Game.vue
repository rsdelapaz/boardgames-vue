<template>
  <div>
    <GameDetailComponent v-bind:game="game"></GameDetailComponent>
  </div>
</template>
<script>

import BggApiService from "../services/bgg-api.service";
import GameDetailComponent from "../components/GameDetail";

export default {  
  props: {
    id: String
  },
  data() {
    return {
      bggApiService: new BggApiService(),
      game: {}
    };
  },
  components: {
    GameDetailComponent
  },
  mounted() {
    
    this.bggApiService.getGame(this.id).then(game => {      
      this.game = game;
    });    
  }
};

</script>
