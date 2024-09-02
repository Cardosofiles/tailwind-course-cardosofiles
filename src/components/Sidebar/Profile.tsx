import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/cardosofiles.png"
        alt="Image Profile"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          João Batista
        </span>
        <a
          href="mailto:cardosofiles@outlook.com"
          className="truncate text-sm text-zinc-500 dark:text-zinc-400"
        >
          cardosofiles@outlook.com
        </a>
      </div>
      <Button type="button" variant="ghost" className="ml-auto">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
}
