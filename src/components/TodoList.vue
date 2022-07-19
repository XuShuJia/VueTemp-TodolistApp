<template>
  <div :class="$style.todolist">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" module>
.todolist {
  width: 100%;
  height: 100%;
  padding: 60px 15px 15px 15px;
  padding-bottom: 100px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
