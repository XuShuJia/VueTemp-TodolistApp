import type { ExtractPropTypes, PropType, VNode } from "vue";

export const PanelProps = {
  title: { type: String as PropType<string | VNode>, default: "" },
  visible: { type: Boolean, default: false },
  commandMode: { type: Boolean, default: false },
};

export type IBeautifulPanelProps = Readonly<
  ExtractPropTypes<typeof PanelProps>
>;
