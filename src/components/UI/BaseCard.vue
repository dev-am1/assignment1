<template>
<span>
    <img :src="require('../../assets/img/top.png')" class="w-10 rounded-r-2xl mx-auto -mb-14">
    </span>
  <div class="flex flex-col p-20">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>