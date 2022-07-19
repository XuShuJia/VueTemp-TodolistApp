<template>
  <div
    data-button="true"
    :class="classnames"
    @click="$emit('click', $event)"
    @touchstart="handleTouchstart"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { BeautifulButtonProps } from "./interface";
import useClassNames from "./hooks/useClassNames";
const props = defineProps(BeautifulButtonProps);
const classnames = useClassNames(props);
const handleTouchstart = () => {
  // safari css:active 兼容
  return undefined;
};
</script>

<script lang="ts">
// 禁用容易让人产生困惑的属性“透传”
export default {
  name: "BeautifulButton",
  inheritAttrs: false,
};
</script>
