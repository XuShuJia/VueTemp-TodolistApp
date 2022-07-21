<template>
  <div :class="$style.container">
    <header-bar></header-bar>
    <todo-list>
      <todo-item></todo-item>
      <todo-item></todo-item>
      <todo-item></todo-item>
      <todo-item></todo-item>
      <todo-item></todo-item>
      <todo-item></todo-item>
    </todo-list>
    <footer-bar>
      <beautiful-button round primary size="large" @click="handleAddNewTodo">
        <plus-outlined />
        新待办事项
      </beautiful-button>
    </footer-bar>
  </div>
</template>

<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import HeaderBar from "./components/HeaderBar.vue";
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";
import FooterBar from "./components/FooterBar.vue";
import BeautifulButton from "./components/BeautifulButton";
import TodoEditPanel from "./components/TodoEditPanel";

const handleAddNewTodo = () => {
  TodoEditPanel({
    todoItem: {
      id: "",
    },
  });
};
</script>

<style lang="less" module>
:root,
body[data-theme="light"] {
  --backgroundColor: #edf9ff;
}
body[data-theme="dark"] {
  --backgroundColor: #000000;
}
.container {
  width: 100%;
  height: 100%;
  background: var(--backgroundColor);
  overflow: hidden;
  transition: all 0.3s ease;
}
</style>
