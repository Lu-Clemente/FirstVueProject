import { reactive } from "vue";

export const store = reactive({
  menuActive: false,
  toggleMenu() {
    this.menuActive = !this.menuActive;
  },
  closeMenu() {
    this.menuActive = false;
  },
  openMenu() {
    this.menuActive = true;
  },
});
