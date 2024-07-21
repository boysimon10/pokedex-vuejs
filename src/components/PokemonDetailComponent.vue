<template>
  <div class="max-w-sm mx-auto overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-60 w-full object-cover md:w-48 " src="https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/319/regular.png" alt="Pokémon Image">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">#150</div>
        <h1 class="block mt-1 text-lg leading-tight font-medium text-black">Mega Mewtwo X</h1>
        <p class="mt-2 text-gray-500">Genetic Pokémon</p>
        <div class="mt-4 flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <span class="block text-center text-gray-700 font-bold">2.3m</span>
            <span class="block text-center text-gray-500 text-sm">Height</span>
          </div>
          <div class="ml-4 flex-shrink-0 h-10 w-10">
            <span class="block text-center text-gray-700 font-bold">127kg</span>
            <span class="block text-center text-gray-500 text-sm">Weight</span>
          </div>
        </div>
        <div class="mt-4">
          <p class="font-semibold">Types</p>
          <div class="flex space-x-2">
            <span class="px-2 py-1 bg-red-200 text-red-800 rounded-full">Fighting</span>
            <span class="px-2 py-1 bg-red-200 text-red-800 rounded-full">Psychic</span>
          </div>
        </div>
        <div class="mt-4">
          <p class="font-semibold">Abilities</p>
          <p>Steadfast</p>
        </div>
        <div class="mt-4">
          <p class="font-semibold">Stats</p>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <span class="w-1/3 capitalize">Speed</span>
              <span class="w-12 text-right">99</span>
              <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div style="width: 99%" class="bg-red-600 h-2.5 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="w-1/3 capitalize">Special Defense</span>
              <span class="w-12 text-right">100</span>
              <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div style="width: 76.9%" class="bg-red-600 h-2.5 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="w-1/3 capitalize">Special Attack</span>
              <span class="w-12 text-right">54</span>
              <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div style="width: 54%" class="bg-red-600 h-2.5 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="w-1/3 capitalize">Defense</span>
              <span class="w-12 text-right">100</span>
              <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div style="width: 76.9%" class="bg-red-600 h-2.5 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="w-1/3 capitalize">Attack</span>
              <span class="w-12 text-right">90</span>
              <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div style="width: 90.2%" class="bg-red-600 h-2.5 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="w-1/3 capitalize">HP</span>
              <span class="w-12 text-right">106</span>
              <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div style="width: 81.5%" class="bg-red-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  
};
</script>