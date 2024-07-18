<template>
  <div
    class="relative cursor-pointer transition-transform duration-500 ease-in-out transform"
    :class="getCardClass(index)"
    @click="setActiveCard(index)"
  >
    <div class="bg-gradient-to-r from-rose-400 to-red-500 shadow-custom-yellow rounded-3xl p-4 w-72 h-52 relative">
      <img :src="card.image" alt="Dexter" class="h-72 mx-auto absolute -top-36 left-1/2 transform -translate-x-1/2">
      <div class="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
        <h2 class="text-white text-3xl font-bold">{{ card.name }}</h2>
        <p class="text-white">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    index: Number,
    currentIndex: Number
  },
  methods: {
    setActiveCard(index) {
      this.$emit('setActiveCard', index);
    },
    getCardClass(index) {
      if (!this.$parent.filteredCards) return ''; // Add this line to handle the case where filteredCards is undefined
      if (index === this.currentIndex) return 'active-card scale-110 z-20';
      if (index === this.currentIndex - 1 || (this.currentIndex === 0 && index === this.$parent.filteredCards.length - 1)) return 'scale-75 z-10';
      if (index === this.currentIndex + 1 || (this.currentIndex === this.$parent.filteredCards.length - 1 && index === 0)) return 'scale-75 z-10';
      return 'scale-50 z-0';
    }
  }
};
</script>

<style scoped>



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
