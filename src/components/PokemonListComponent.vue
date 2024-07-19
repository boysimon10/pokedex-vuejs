<template>
  <div v-if="filteredCards && filteredCards.length" class="flex justify-center items-center py-52 overflow-hidden relative">
    <button @click="prevSlide" class="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">‹</button>
    <div class="flex space-x-4 transition-transform duration-300" :style="{ transform: `translateX(calc(50% - ${(currentIndex * 100) / filteredCards.length}% - ${(100 / filteredCards.length) / 2}%))` }">
      <PokemonComponent
        v-for="(card, index) in filteredCards"
        :key="index"
        :card="card"
        :index="index"
        :currentIndex="currentIndex"
        @setActiveCard="setActiveCard"
        @navigate="goToPokemonDetail"
        :class="{ 'scale-110': currentIndex === index, 'scale-75': currentIndex !== index }"
      />
    </div>
    <button @click="nextSlide" class="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">›</button>
  </div>
  <div v-else class="flex justify-center items-center">
    <LoadingComponent />
  </div>
</template>

<script>
import axios from 'axios';
import PokemonComponent from './PokemonComponent.vue';
import LoadingComponent from './LoadingComponent.vue';

export default {
  components: {
    PokemonComponent,
    LoadingComponent
  },
  props: {
    searchTerm: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentIndex: 15,
      allCards: [],
      randomCards: []
    };
  },
  computed: {
    filteredCards() {
      if (this.searchTerm) {
        return this.allCards.filter(card => card.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      return this.randomCards;
    }
  },
  methods: {
    async fetchPokemonData() {
      try {
        const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon');
        this.allCards = response.data.map(pokemon => ({
          name: pokemon.name.fr,
          image: pokemon.sprites.regular,
          description: pokemon.category || 'No description available'
        }));
        this.randomCards = this.getRandomCards();
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    },
    getRandomCards() {
      const shuffled = [...this.allCards].sort(() => 0.5 - Math.random());
      return shuffled;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.filteredCards.length - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex < this.filteredCards.length - 1) ? this.currentIndex + 1 : 0;
    },
    setActiveCard(index) {
      this.currentIndex = index;
    },
    goToPokemonDetail(name) {
      this.$router.push({ name: 'PokemonDetail', params: { name } });
    }
  },
  watch: {
    searchTerm() {
      this.currentIndex = 0;
    }
  },
  mounted() {
    this.fetchPokemonData();
  }
};
</script>

<style scoped>
.bg-gradient-to-r {
  background: linear-gradient(to right, #FBBF24, #FDBA74);
}

.shadow-custom-yellow {
  box-shadow: 0 4px 6px rgba(251, 191, 36, 0.1), 0 2px 4px rgba(251, 191, 36, 0.06);
}

.scale-110 {
  transform: scale(1.1);
}

.scale-75 {
  transform: scale(0.75);
}

.active-card {
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out;
}
</style>
