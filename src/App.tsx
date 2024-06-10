import { ReactNode } from "react";
import { ThemeProvider } from "@/components/themes/themeprovider";
import { ModeToggle } from "./components/themes/modetoggle";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" w-full relative dark:bg-slate-950">
        <div className="">
          <ModeToggle />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default App;
