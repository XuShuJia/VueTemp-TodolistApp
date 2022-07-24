// TodoEditPanel
import { nanoid } from "nanoid";
import type { ITodoItem } from "@/interface";
import { defineComponent, reactive } from "vue";
import BeautifulPanel, { createPanel } from "./BeautifulPanel";
import BeautifulInput from "./BeautifulInput";

interface ITodoEditPanelProps {
  addNew?: boolean;
  todoItem?: ITodoItem;
  onOk: (todoItem: ITodoItem) => void;
}

const TodoEditPanelCommand = createPanel<ITodoEditPanelProps>(
  ({ panelProps, command, payload }) => {
    return defineComponent({
      setup() {
        const todoitem = reactive<ITodoItem>(
          payload.todoItem || {
            id: nanoid(),
            title: "新待办事项",
            message: "",
            deadline: "",
            complete: false,
          }
        );
        return () => {
          return (
            <BeautifulPanel
              {...panelProps}
              onClose={() => {
                command.doClose();
              }}
            >
              <BeautifulInput size="default" v-model:value={todoitem.title} />
              <BeautifulInput size="large" v-model:value={todoitem.title} />
              <BeautifulInput size="small" v-model:value={todoitem.title} />
            </BeautifulPanel>
          );
        };
      },
    });
  }
);

export default TodoEditPanelCommand;
