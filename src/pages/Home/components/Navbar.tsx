import { ModeToggle } from "@/components/themes/modetoggle";
import { Plug } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full mx-auto bg-slate-100 dark:bg-zinc-950 top-0 fixed z-30 p-2 ">
      <div className="w-full mx-auto max-w-[95%] flex items-center justify-between">
        <div className="logo flex items-center gap-3 text-slate-800 dark:text-slate-300">
          <Plug />
          <h3 className="text-slate-800 text-xl inter font-semibold plus dark:text-slate-300">
            Electro <span className="text-yellow-700">Mart</span>
          </h3>
        </div>
        <div className="mode-toggle">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
