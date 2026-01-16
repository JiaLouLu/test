<template>
  <h1>测试1</h1>
  <MyButton class="my-button" type="primary" @click="console.log('按钮点击')">
    button1
  </MyButton>
  <MyButton class="my-button" type="warning" @click="console.log('按钮点击')"
    >button2</MyButton
  >
  <MyButton
    class="my-button"
    type="warning"
    size="small"
    @click="console.log('按钮点击')"
    >button2</MyButton
  >
  <MyButton
    class="my-button"
    type="warning"
    size="medium"
    @click="console.log('按钮点击')"
    >button2</MyButton
  >
  <MyButton
    class="my-button"
    type="warning"
    size="large"
    @click="console.log('按钮点击')"
    >button2</MyButton
  >
</template>

<script setup></script>

<style scoped>
.my-button {
}
</style>
