

<template>
  <div style="margin: 20px; ">
    <div v-if="!!game">
      <b-card no-body class="overflow-hidden container">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="game.image" fluid></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="game.name" bg-variant="light">
              <b-card-text class="text-justify">{{ game.description }}</b-card-text>
              <b-card-text class="text-center">
                <div class="container">
                  <b-badge pill variant="info">
                    <font-awesome-icon icon="star"/>
                    &nbsp;{{game.averageRating}}
                  </b-badge>&nbsp;
                  <b-badge pill variant="info">
                    <font-awesome-icon icon="users"/>
                    &nbsp;{{game.minPlayers}} - {{game.maxPlayers}}
                  </b-badge>&nbsp;
                   <b-badge pill variant="info">
                  <font-awesome-icon icon="calendar-alt"/>
                  &nbsp;{{game.yearPublished}}
                   </b-badge>&nbsp;
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div v-else>Lo siento. Nada por aquí</div>
    <div class="container mgtop30">
      <b-button @click="goBack">Volver</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: Object
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>