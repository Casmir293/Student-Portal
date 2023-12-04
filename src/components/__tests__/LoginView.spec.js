import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import login from "@/views/LoginView.vue";
import { createVuetify } from "vuetify";

const vuetify = createVuetify();

global.ResizeObserver = require("resize-observer-polyfill");

test("displays message", () => {
  const wrapper = mount(login, {
    global: {
      plugins: [vuetify],
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Welcome to student portal");
});
