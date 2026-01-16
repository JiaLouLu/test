<template>
  <button class="my-button" :class="[`my-button-${type}`, `my-button-${size}`]">
    <slot></slot>
  </button>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'small',
  },
});
</script>
<style scoped>
.my-button {
  border: none;
  cursor: pointer;
  color: white;

  border-radius: 5px;
}
.my-button-small {
  font-size: 14px;
}
.my-button-medium {
  font-size: 20px;
}
.my-button-large {
  font-size: 30px;
}
.my-button-primary {
  background-color: #1989fa;
}
.my-button-warning {
  background-color: #ee0a24;
}
</style>
