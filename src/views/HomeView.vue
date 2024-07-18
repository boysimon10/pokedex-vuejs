<template>
  <div class="home">
    <NavbarComponent @search="onSearch" />
    <PokemonListComponent :searchTerm="searchTerm" />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonListComponent from '@/components/PokemonListComponent.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      searchTerm: ''
    };
  },
  components: {
    NavbarComponent,
    PokemonListComponent,
  },
  methods: {
    onSearch(searchTerm) {
      this.searchTerm = searchTerm;
    }
  }
}
</script>
