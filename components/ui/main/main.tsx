import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
  <main className="py-5 px-2.5 sm:px-5 mx-auto max-w-screen-xl">
    {children}
  </main>
);
