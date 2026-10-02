import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Ruler } from "@/components/Ruler/Ruler";
import { CounterDemo } from "./_helpers/CounterDemo";
import styles from "../prototype.module.css";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentsPage() {
  return (
    <>
      <h1 className="display display--layout-1">Components</h1>

      <Ruler />

      <section className={styles.prototype__section}>
        <h1 className="display display--layout-2">Typography</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h3 className="display display--layout-3">Labore qui commodo</h3>
        <p className="text-large text-important">
          Esse ut maecenas laborum nostrud adipiscing ultricies et proident suscipit excepteur laboris. Velit incididunt adipiscing lorem pariatur incididunt.
        </p>
        <p className="text-small text-muted">
          Irure maecenas nostrud tellus tellus eiusmod ea lorem officia cupidatat laboris ipsum sit proident. Labore qui commodo dolor magna velit labore pariatur fugiat. Qui sunt diam reprehenderit pariatur officia ad quis esse. Maecenas minim dolor veniam et maecenas nostrud reprehenderit adipiscing aliqua nulla do.
        </p>
      </section>

      <Ruler />

      <section className={styles.prototype__section}>
        <h2>Button</h2>

        <h3>Default</h3>
        <Button>Default</Button>

        <h3>Disabled</h3>
        <Button disabled>Disabled</Button>

        <h3>Counter</h3>
        <CounterDemo />
      </section>
    </>
  );
}
