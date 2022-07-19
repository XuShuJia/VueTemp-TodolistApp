import "normalize.css";
import "./styles/reset.less";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// 禁止safari双指缩放页面
window.addEventListener("gesturestart", (e) => {
  e.preventDefault();
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.setAttribute("data-theme", "dark");
} else {
  document.body.setAttribute("data-theme", "light");
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  });
