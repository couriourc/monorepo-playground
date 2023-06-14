"use strict";

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../lib";
describe("CompA Test", async () => {
  it("should be mounted", () => {
    const ButtonWrapper = mount(Button, {
      props: {
        primary: true,
      },
    });
    console.log(ButtonWrapper.attributes());
    expect(ButtonWrapper.attributes()).toHaveProperty("class");
    expect(ButtonWrapper.attributes()["class"]).toContain("primary");
    expect(ButtonWrapper.isVisible()).toBe(true);
  });
});
