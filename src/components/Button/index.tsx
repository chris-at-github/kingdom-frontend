import { Button as ClientButton, type ButtonProps } from "./Button";
import { Group } from "./Group";

export type { ButtonProps } from "./Button";
export type { GroupProps } from "./Group";

// No "use client": server components cannot access properties of a client
// reference, so Group is attached to a server-safe wrapper instead.
function ButtonRoot(props: ButtonProps) {
  return <ClientButton {...props} />;
}

export const Button = Object.assign(ButtonRoot, { Group });
