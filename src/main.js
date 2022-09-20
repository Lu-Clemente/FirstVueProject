import { createApp } from "vue";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCircleNotch,
  faDoorOpen,
  faTerminal,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFolderOpen,
  faAddressCard,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

import "./assets/main.css";

import router from "@/routes/router";

library.add(
  faCircleNotch,
  faDoorOpen,
  faFolderOpen,
  faAddressCard,
  faPaperPlane,
  faBars,
  faTerminal,
  faXmark
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
