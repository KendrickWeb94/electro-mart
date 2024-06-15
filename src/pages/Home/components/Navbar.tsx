import { ModeToggle } from "@/components/themes/modetoggle"


const Navbar = () => {
  return (
    <div className="w-full mx-auto bg-slate-100 dark:bg-zinc-950 top-0 fixed z-30 p-2 ">
      <div className="w-full mx-auto max-w-[95%] flex items-center justify-between">
        <div className="mode-toggle">
            <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
