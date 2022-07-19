<template>
  <div :class="$style.todoitem">TodoItem</div>
</template>

<script lang="ts" setup></script>

<style lang="less" module>
:root,
body[data-theme="light"] {
  --todoItemBackground: #ffffff;
}
body[data-theme="dark"] {
  --todoItemBackground: #181819;
}
.todoitem {
  width: 100%;
  height: 120px;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  background: var(--todoItemBackground);
  overflow: hidden;
  transition: all 0.3s ease;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
