// createPanel
import { createApp, type App } from "vue";
import type {
  ICommandModePanelContent,
  ICommandModePanelContentProps,
  IPanelActionCommand,
} from "./interface";

export default <P>(PanelContent: ICommandModePanelContent<P>) => {
  return (payload = {} as unknown as P) => {
    const container = document.createElement("div");
    let instance: App | undefined;
    let command: IPanelActionCommand | undefined;
    document.body.appendChild(container);
    const open = () => {
      const props: ICommandModePanelContentProps<P> = {
        panelProps: {
          __commandMode: true,
          __commandModeExportActionCommand(panelActionCommand) {
            command = panelActionCommand;
          },
        },
        command: {
          doClose() {
            close();
          },
        },
        payload,
      };
      instance = createApp(PanelContent(props));
      instance.mount(container);
    };
    const close = () => {
      if (command) {
        command.doClose();
        setTimeout(() => {
          if (instance) {
            instance.unmount();
            document.body.removeChild(container);
          }
        }, 300);
      } else {
        if (instance) {
          instance.unmount();
          document.body.removeChild(container);
        }
      }
    };
    open();
    return {
      open,
      close,
    };
  };
};
