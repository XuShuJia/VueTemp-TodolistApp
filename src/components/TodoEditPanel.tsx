// TodoEditPanel
import { defineComponent } from "vue";
import BeautifulPanel, { createPanel } from "./BeautifulPanel";

interface ITodoEditPanelProps {
  todoItem: {
    id: string;
  };
}

const TodoEditPanelCommand = createPanel<ITodoEditPanelProps>(
  ({ panelProps, command, payload }) => {
    return defineComponent({
      setup() {
        return () => {
          return (
            <BeautifulPanel
              {...panelProps}
              onClose={() => {
                command.doClose();
              }}
            >
              {payload.todoItem.id}
            </BeautifulPanel>
          );
        };
      },
    });
  }
);

export default TodoEditPanelCommand;
