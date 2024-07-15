<template>
  <div class="home">
    <NavbarComponent @search="onSearch" />
    <PokemonComponent :search-term="searchTerm" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonComponent from '@/components/PokemonComponent.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      searchTerm: ''
    };
  },
  components: {
    NavbarComponent,
    PokemonComponent
  },
  methods: {
    onSearch(searchTerm) {
      this.searchTerm = searchTerm;
    }
  }
}
</script>
