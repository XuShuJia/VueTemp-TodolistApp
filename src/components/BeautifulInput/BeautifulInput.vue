<template>
  <input
    :class="[styles.input, styles[`input-${props.size}`]]"
    :type="props.type"
  />
</template>

<script lang="ts" setup>
import styles from "./style.module.less";
import { BeautifulInputProps } from "./interface";
const props = defineProps(BeautifulInputProps);
</script>
