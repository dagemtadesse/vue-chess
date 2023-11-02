<script setup lang="ts">
import Tile from "./components/Tile.vue";
</script>

<template>
  <div class="w-[100vw] h-[100vh] grid place-items-center p-6">
    <main
      class="w-full h-full max-w-[100vmin] max-h-[100vmin] bg-chessBlack grid grid-cols-8 grid-rows-[repeat(8,minmax(0,1fr))] rounded-md overflow-hidden shadow-md"
    >
      <template v-for="row in 8">
        <Tile
          v-for="col in 8"
          :isEven="col % 2 == (row % 2 == 0 ? 0 : 1)"
          :key="`${col}x${row}`"
        />
      </template>
    </main>
  </div>
</template>
