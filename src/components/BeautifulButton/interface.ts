import type { ExtractPropTypes, PropType } from "vue";

export const BeautifulButtonProps = {
  size: {
    type: String as PropType<"default" | "large" | "small">,
    default: "default",
  },
  round: { type: Boolean, default: false },
  primary: { type: Boolean, default: false },
  danger: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
};

export type IBeautifulButtonType = Readonly<
  ExtractPropTypes<typeof BeautifulButtonProps>
>;
