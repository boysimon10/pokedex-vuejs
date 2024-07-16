<template>
  <div class="flex justify-center items-center py-52 overflow-hidden relative">
    <button @click="prevSlide" class="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">‹</button>
    <div class="flex space-x-4 transition-transform duration-300" :style="{ transform: `translateX(calc(50% - ${currentIndex * (100 / filteredCards.length)}%))` }">
      <div
        v-for="(card, index) in filteredCards"
        :key="index"
        class="relative cursor-pointer transition-transform duration-500 ease-in-out transform"
        :class="getCardClass(index)"
        @click="setActiveCard(index)"
      >
        <div class="bg-gradient-to-r from-yellow-500 to-amber-300 shadow-custom-yellow rounded-3xl p-4 w-72 h-52 relative">
          <img :src="card.image" alt="Dexter" class="h-72 mx-auto absolute -top-36 left-1/2 transform -translate-x-1/2">
          <div class="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
            <h2 class="text-white text-3xl font-bold">{{ card.name }}</h2>
            <p class="text-white">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <button @click="nextSlide" class="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">›</button>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  props: {
    searchTerm: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentIndex: 3,
      allCards: [],
      randomCards: [],
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
          description: pokemon.description || 'No description available'
        }));
        this.randomCards = this.getRandomCards();
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    },
    getRandomCards() {
      const shuffled = [...this.allCards].sort(() => 0.5 - Math.random());
      return shuffled
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
    getCardClass(index) {
      if (index === this.currentIndex) return 'active-card scale-110 z-20';
      if (index === this.currentIndex - 1 || (this.currentIndex === 0 && index === this.filteredCards.length - 1)) return 'scale-75 z-10';
      if (index === this.currentIndex + 1 || (this.currentIndex === this.filteredCards.length - 1 && index === 0)) return 'scale-75 z-10';
      return 'scale-50 z-0';
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

.scale-50 {
  transform: scale(0.5);
}

.active-card {
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out;
}
</style>
