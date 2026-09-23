import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { CounterDemo } from "./CounterDemo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Button",
};

export default function ButtonDemoPage() {
  return (
    <main className={styles.demo}>
      <h1>Button</h1>

      <section className={styles.section}>
        <h2>Default</h2>
        <Button>Default</Button>
      </section>

      <section className={styles.section}>
        <h2>Disabled</h2>
        <Button disabled>Disabled</Button>
      </section>

      <section className={styles.section}>
        <h2>Counter</h2>
        <CounterDemo />
      </section>
    </main>
  );
}
