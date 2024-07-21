<template>
  <NavbarComponent />
  <div v-if="pokemon" class="max-w-lg mx-auto overflow-hidden md:max-w-2xl">
    <router-link to="/">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6 hover:text-red-500 duration-75">
          <path fill-rule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clip-rule="evenodd" />
        </svg>
      </div>
    </router-link>
    <div class="md:flex justify-center">
      <div class="md:flex-shrink-0">
        <img v-if="pokemon.sprites && pokemon.sprites.regular" class="h-60 w-full object-cover md:w-48" :src="pokemon.sprites.regular" alt="Pokémon Image">
        <p v-else class="text-center text-gray-500">Oups! La page que vous recherchez n'existe pas</p>
      </div>
      <div class="p-8">
        <div v-if="pokemon.pokedex_id" class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">#{{ pokemon.pokedex_id }}</div>
        <h1 v-if="pokemon.name && pokemon.name.fr" class="block mt-1 text-lg leading-tight font-medium text-black">{{ pokemon.name.fr }}</h1>
        <p v-if="pokemon.category" class="mt-2 text-gray-500">{{ pokemon.category }}</p>
        <div class="mt-4 flex items-center">
          <div v-if="pokemon.height" class="flex-shrink-0 h-10 w-auto">
            <span class="block text-center text-gray-700 font-bold">{{ pokemon.height }}</span>
            <span class="block text-center text-gray-500 text-sm">Height</span>
          </div>
          <div v-if="pokemon.weight" class="ml-4 flex-shrink-0 h-10 w-auto">
            <span class="block text-center text-gray-700 font-bold">{{ pokemon.weight }}</span>
            <span class="block text-center text-gray-500 text-sm">Weight</span>
          </div>
        </div>
        <div class="mt-4" v-if="pokemon.types">
          <p class="font-semibold">Types</p>
          <div class="flex space-x-2">
            <img v-for="type in pokemon.types" :key="type.name" :src="type.image" :alt="type.name" class="my-2 w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center">
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
