// BeautifulButton useClassNames
import { computed } from "vue";
import type { IBeautifulButtonType } from "../interface";
import styles from "../style.module.less";

export default (props: IBeautifulButtonType) => {
  return computed(() => {
    const classlist = [styles.button, styles[`button-${props.size}`]];

    if (props.round) classlist.push(styles["button-round"]);
    if (props.primary) classlist.push(styles["button-primary"]);
    if (props.danger) classlist.push(styles["button-danger"]);
    if (props.disabled) classlist.push(styles["button-disabled"]);

    return classlist;
  });
};
