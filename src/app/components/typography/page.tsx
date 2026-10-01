import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography",
};

export default function TypographyDemoPage() {
  return (
    <>
      <h1 className="display display--layout-1">Typography</h1>
      <h2 className="display display--layout-2">Button</h2>
      <h3 className="display display--layout-3">Varianten</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-large text-important">
        Esse ut maecenas laborum nostrud adipiscing ultricies et proident suscipit excepteur laboris. Velit incididunt adipiscing lorem pariatur incididunt.
      </p>
      <p className="text-small text-muted">
        Irure maecenas nostrud tellus tellus eiusmod ea lorem officia cupidatat laboris ipsum sit proident. Labore qui commodo dolor magna velit labore pariatur fugiat. Qui sunt diam reprehenderit pariatur officia ad quis esse. Maecenas minim dolor veniam et maecenas nostrud reprehenderit adipiscing aliqua nulla do.
      </p>
    </>
  );
}
