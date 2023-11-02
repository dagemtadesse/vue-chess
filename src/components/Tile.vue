<template>
  <div class="w-full h-full" :class="{ 'bg-chessWhite': props.isEven }"></div>
</template>
<script setup lang="ts">
const props = defineProps<{ isEven: boolean }>();
</script>
