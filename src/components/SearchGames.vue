<template>
  <div class="container mgtop30">
    <div class="text-left">
      <div class>
        <h3>Mi colección</h3>
      </div>
      <div role="group">
        <b-form-input
          id="input-live"
          :state="nameState"
          v-model="title"          
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Título del juego"
          trim
        ></b-form-input>

        <!-- This will only be shown if the preceding input has an invalid state -->
        <b-form-invalid-feedback id="input-live-feedback">Introduce al menos 3 caracteres</b-form-invalid-feedback>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  computed: {
      nameState() {
        return this.title.length > 2;
      }
    },
  watch: {
    title() {      
      this.searchGames();
    }
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    searchGames() {
      eventBus.$emit("searchGames", this.title);
    }
  }
};
</script>
