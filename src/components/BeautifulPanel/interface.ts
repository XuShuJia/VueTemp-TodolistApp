import type { ExtractPropTypes, PropType, VNode } from "vue";

export const PanelProps = {
  title: { type: String as PropType<string | VNode>, default: "" },
  visible: { type: Boolean, default: false },
  cancelButtonText: { type: String, default: "取消" },
  cancelButtonClose: { type: Boolean, default: true },
  okButtonText: { type: String, default: "确定" },
  okButtonClose: { type: Boolean, default: true },
  commandMode: { type: Boolean, default: false },
};

export type IBeautifulPanelProps = Readonly<
  ExtractPropTypes<typeof PanelProps>
>;
