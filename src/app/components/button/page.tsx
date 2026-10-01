import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { CounterDemo } from "./CounterDemo";

export const metadata: Metadata = {
  title: "Button",
};

export default function ButtonDemoPage() {
  return (
    <>
      <h1>Button</h1>

      <section>
        <h2>Default</h2>
        <Button>Default</Button>
      </section>

      <section>
        <h2>Disabled</h2>
        <Button disabled>Disabled</Button>
      </section>

      <section>
        <h2>Counter</h2>
        <CounterDemo />
      </section>
    </>
  );
}
