<template>
  <div :class="$style.container">
    <div :class="$style.title">待办事项</div>
    <div :class="$style.buttons">
      <beautiful-button round size="default" @click="handleDarkMode">
        Dark
      </beautiful-button>
      <beautiful-button round size="default" @click="handleLightMode">
        Light
      </beautiful-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BeautifulButton from "./BeautifulButton";
const handleDarkMode = () => {
  document.body.setAttribute("data-theme", "dark");
};
const handleLightMode = () => {
  document.body.setAttribute("data-theme", "light");
};
</script>

<style lang="less" module>
.container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 26px;
  font-weight: bold;
  color: var(--color);
  transition: all 0.3s ease;
}
.buttons {
  & > div[data-button="true"] {
    margin-left: 10px;
  }
}
</style>
