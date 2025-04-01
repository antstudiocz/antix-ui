import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("Button Snapshots", () => {
  it("matches snapshot for solid variant", () => {
    const { container } = render(<Button variant="solid">Solid Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for outlined variant", () => {
    const { container } = render(
      <Button variant="outlined">Outlined Button</Button>
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for text variant", () => {
    const { container } = render(<Button variant="text">Text Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for different sizes", () => {
    const { container: smallContainer } = render(
      <Button size="sm">Small Button</Button>
    );
    expect(smallContainer).toMatchSnapshot();

    const { container: mediumContainer } = render(
      <Button size="md">Medium Button</Button>
    );
    expect(mediumContainer).toMatchSnapshot();

    const { container: largeContainer } = render(
      <Button size="lg">Large Button</Button>
    );
    expect(largeContainer).toMatchSnapshot();
  });

  it("matches snapshot for disabled state", () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for button with icon", () => {
    const { container } = render(
      <Button icon={<span>🔍</span>} iconPosition="left">
        With Icon
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for button with right icon", () => {
    const { container } = render(
      <Button icon={<span>🔍</span>} iconPosition="right">
        With Right Icon
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for button with additional text", () => {
    const { container } = render(
      <Button additionalText="Additional Info">Button with Text</Button>
    );
    expect(container).toMatchSnapshot();
  });
});
