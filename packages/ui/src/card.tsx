import { type ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <p className="text-ui-size">{children}</p>;
}
