<template>
    <NavbarComponent />
    <div v-if="pokemon" class="pokemon-detail">
      <h1>{{ pokemon.name }}</h1>
      <img :src="pokemon.image" alt="Image of {{ pokemon.name }}" />
      <p>{{ pokemon.description }}</p>
    </div>
    <div v-else>
      <LoadingComponent />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import LoadingComponent from '../components/LoadingComponent.vue';
  import NavbarComponent from '@/components/NavbarComponent.vue';
  
  export default {
    components: {
      NavbarComponent,
      LoadingComponent
    },
    data() {
      return {
        pokemon: null
      };
    },
    async created() {
      const name = this.$route.params.name;
      try {
        const response = await axios.get(`https://tyradex.vercel.app/api/v1/pokemon/${name}`);
        this.pokemon = {
          name: response.data.name.fr,
          image: response.data.sprites.regular,
          description: response.data.category || 'No description available'
        };
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .pokemon-detail {
    text-align: center;
    margin: 2rem;
  }
  .pokemon-detail img {
    width: 200px;
    height: 200px;
  }
  </style>
  