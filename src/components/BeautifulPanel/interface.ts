import type { DefineComponent, ExtractPropTypes, PropType, VNode } from "vue";

export const PanelProps = {
  title: { type: String as PropType<string | VNode>, default: "" },
  visible: { type: Boolean, default: false },
  cancelButtonText: { type: String, default: "取消" },
  cancelButtonClose: { type: Boolean, default: true },
  okButtonText: { type: String, default: "确定" },
  okButtonClose: { type: Boolean, default: true },
  __commandMode: { type: Boolean, default: false },
  __commandModeExportActionCommand: {
    type: Function as PropType<
      (panelActionCommand: IPanelActionCommand) => void
    >,
    default: undefined,
  },
};

export type IBeautifulPanelProps = Readonly<
  ExtractPropTypes<typeof PanelProps>
>;

export interface IPanelActionCommand {
  doClose: () => void;
}

export interface ICommandModePanelContent<P> {
  (props: ICommandModePanelContentProps<P>): DefineComponent;
}

export interface ICommandModePanelContentProps<P> {
  panelProps: {
    __commandMode: true;
    __commandModeExportActionCommand: (
      panelActionCommand: IPanelActionCommand
    ) => void;
  };
  command: {
    doClose: () => void;
  };
  payload: P;
}
