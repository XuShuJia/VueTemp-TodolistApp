// TodoEditPanel
import { defineComponent } from "vue";
import BeautifulPanel, { createPanel } from "./BeautifulPanel";

const TodoEditPanelCommand = createPanel(() => {
  return defineComponent({
    setup() {
      return () => {
        return <BeautifulPanel></BeautifulPanel>;
      };
    },
  });
});

const TodoEditPanel = defineComponent({
  setup() {
    return () => {
      return <div>TodoEditPanel</div>;
    };
  },
});

export default TodoEditPanel;
