import { type ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
  return <p className="text-ui2-size sm:text-sm lg:text-lg">{children}</p>
}
