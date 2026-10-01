import styles from "./layout.module.css";

export default function ComponentsLayout({ children }: LayoutProps<"/components">) {
  return <main className={`page__main ${styles.styleguide}`}>{children}</main>;
}
