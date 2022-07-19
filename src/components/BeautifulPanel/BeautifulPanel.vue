<template>
  <div v-if="state.render" :class="containerClassNames">
    <div :class="styles.panel">
      <div :class="styles['panel-header']"></div>
      <div :class="styles['panel-content']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from "./style.module.less";
import { reactive, watchEffect, nextTick, computed } from "vue";
import { PanelProps } from "./interface";

const props = defineProps(PanelProps);
const emit = defineEmits<{
  (e: "ok"): void;
  (e: "cancel"): void;
  (e: "open"): void;
  (e: "close"): void;
}>();
const state = reactive({
  render: false,
  show: false,
});
const containerClassNames = computed(() => {
  const classnames = [styles["panel-container"]];
  if (state.show) classnames.push(styles["panel-show"]);
  return classnames;
});
const handleOpenPanel = () => {
  state.render = true;
  nextTick(() => {
    setTimeout(() => {
      state.show = true;
    }, 0);
    setTimeout(() => {
      emit("open");
    }, 300);
  });
};
const handleClosePanel = () => {
  state.show = false;
  nextTick(() => {
    setTimeout(() => {
      state.render = false;
      emit("close");
    }, 300);
  });
};
watchEffect(() => {
  if (props.commandMode) {
    handleOpenPanel();
  } else {
    if (props.visible && !state.render && !state.show) {
      handleOpenPanel();
    }
    if (!props.visible && state.render && state.show) {
      handleClosePanel();
    }
  }
});
</script>

<script lang="ts">
export default {
  name: "BeautifulPanel",
  inheritAttrs: false,
};
</script>
