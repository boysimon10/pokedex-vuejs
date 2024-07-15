<template>
    <div class="bg-white">
      <header class="mx-auto lg:w-1/2 md:max-w-full">
        <div class="flex items-center justify-between px-5 py-8">
          <div class="flex items-center">
            <img :src="logo" alt="Logo" class="h-10 mr-3" />
            <span class="text-xl font-bold hidden md:inline">Pokedex</span>
          </div>
          <SearchComponent @search="onSearch" />
          <div class="flex items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  import SearchComponent from './SearchComponent.vue';
  
  export default {
    data() {
      return {
        logo: require('@/assets/logo.png')
      };
    },
    name: 'NavbarComponent',
    components: {
      SearchComponent
    },
    methods: {
      onSearch(searchTerm) {
        this.$emit('search', searchTerm);
      }
    }
  }
  </script>
  