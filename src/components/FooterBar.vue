<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" module>
:root,
body[data-theme="light"] {
  --addNewBtnBackground: rgba(255, 255, 255, 0.1);
  --addNewBtnBackgroundActive: #0191ff;
}
body[data-theme="dark"] {
  --addNewBtnBackground: rgba(0, 0, 0, 0.1);
  --addNewBtnBackgroundActive: #0191ff;
}
.container {
  position: absolute;
  z-index: 2;
  left: 50%;
  right: 50%;
  bottom: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  & > div[data-button="true"] {
    background: var(--addNewBtnBackground);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    &:active {
      background: var(--addNewBtnBackgroundActive);
    }
  }
}
</style>
