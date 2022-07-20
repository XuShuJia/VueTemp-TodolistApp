// createPanel
import type { DefineComponent } from "vue";

export default (content: () => DefineComponent) => {
  return () => {
    const open = () => {};
    const close = () => {};
    return {
      open,
      close,
    };
  };
};
