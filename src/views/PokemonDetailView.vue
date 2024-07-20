<template>
    <NavbarComponent />
    <div v-if="pokemon" class="pokemon-detail container mx-auto text-center py-8">
      <h1 class="text-4xl font-bold mb-4">{{ pokemon.name.fr }}</h1>
      <img :src="pokemon.sprites.regular" :alt="'Image of ' + pokemon.name.fr" class="mx-auto mb-4" />
      <p class="text-xl mb-4">{{ pokemon.category }}</p>
      <div class="flex justify-center space-x-4 mb-4">
        <img v-for="type in pokemon.types" :key="type.name" :src="type.image" :alt="type.name" class="w-8 h-8" />
      </div>
      <div class="grid grid-cols-2 gap-4 max-w-md mx-auto mb-4">
        <div class="flex justify-between bg-gray-200 p-2 rounded">
          <span>HP</span>
          <span>{{ pokemon.stats.hp }}</span>
        </div>
        <div class="flex justify-between bg-gray-200 p-2 rounded">
          <span>Attack</span>
          <span>{{ pokemon.stats.atk }}</span>
        </div>
        <div class="flex justify-between bg-gray-200 p-2 rounded">
          <span>Defense</span>
          <span>{{ pokemon.stats.def }}</span>
        </div>
        <div class="flex justify-between bg-gray-200 p-2 rounded">
          <span>Sp. Atk</span>
          <span>{{ pokemon.stats.spe_atk }}</span>
        </div>
        <div class="flex justify-between bg-gray-200 p-2 rounded">
          <span>Sp. Def</span>
          <span>{{ pokemon.stats.spe_def }}</span>
        </div>
        <div class="flex justify-between bg-gray-200 p-2 rounded">
          <span>Speed</span>
          <span>{{ pokemon.stats.vit }}</span>
        </div>
      </div>
      <p class="text-lg mb-4">Height: {{ pokemon.height }}</p>
      <p class="text-lg mb-4">Weight: {{ pokemon.weight }}</p>
      <p class="text-lg mb-4">Catch Rate: {{ pokemon.catch_rate }}</p>
      <p class="text-lg mb-4">Base Experience: {{ pokemon.level_100 }}</p>
      <p class="text-lg">{{ pokemon.description }}</p>
    </div>
    <div v-else class="flex justify-center items-center h-screen">
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
      const pokedex_id = this.$route.params.pokedex_id;
      try {
        const response = await axios.get(`https://tyradex.vercel.app/api/v1/pokemon/${pokedex_id}`);
        this.pokemon = response.data;
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    }
  };
  </script>