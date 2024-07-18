<template>
        <div class="pokeball-container u-swing">
            <img src="@/assets/logo.png" alt="Pokeball" class="pokeball">
        </div>
</template>
  
  <script>
  export default {
    name: 'SwingPokeball'
  }
  </script>
  
  <style scoped>
  @keyframes swing {
    20% { transform: rotate(15deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(5deg); }
    80% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }
  
  .u-swing {
    animation: swing 3000ms infinite;
  }
  
  
  .pokeball-container {
    display: flex;
    padding-top: 250px;
  }
  
  .pokeball {
    width: 50px;
    height: 50px;
  }
  </style>
  