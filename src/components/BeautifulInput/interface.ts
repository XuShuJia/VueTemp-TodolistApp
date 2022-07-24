import type { PropType, ExtractPropTypes } from "vue";

export const BeautifulInputProps = {
  type: {
    type: String,
    default: "text",
  },
  size: {
    type: String as PropType<"default" | "large" | "small">,
    default: "default",
  },
};

export type IBeautifulInputProps = Readonly<
  ExtractPropTypes<typeof BeautifulInputProps>
>;
