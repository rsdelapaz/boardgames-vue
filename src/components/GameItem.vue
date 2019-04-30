<template>
  <div style="margin: 20px; ">
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 600px; padding: 20px;"
      bg-variant="dark"
    >
      <b-row no-gutters>
        <b-col fluid class="text-center">
          <b-img thumbnail fluid :src="game.thumbnail" class="rounded-0" img-left></b-img>
        </b-col>
        <b-col md="8" class="text-left">
          <b-card
            header-bg-variant="info"
            header-text-variant="white"
            :header="game.name"
            class="text-center"
          >
            <b-card-text>Year: <strong><i>{{ game.yearPublished }}</i></strong><br /> Rank: <strong><i>{{ game.averageRating }}</i></strong></b-card-text>
            <b-card-text class="small text-muted"><router-link             
            :to="{ name: 'game', params: { id } }"            
            >Ver más...</router-link></b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    game: Object
  },
  computed:{
    id(){
      return this.game ? this.game.gameId : 'not_found';
    }
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
