<template>
  <div class="home">
      <NavbarComponent/>
      <PokemonComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonComponent from '@/components/PokemonComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    PokemonComponent
  }
}
</script>
