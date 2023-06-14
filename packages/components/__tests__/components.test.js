"use strict";

import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import { Button } from "@couriourc/components";

describe("CompA Test", async () => {
  it("should be mounted", () => {
    const Comp = mount(Button);
    console.log(Comp.classes());
  });
});
