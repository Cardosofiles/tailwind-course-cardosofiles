import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  href: string;
  title?: string;
  icon: ElementType;
  otherIcon?: boolean;
}

export function NavItem({
  href,
  title,
  icon: Icon,
  otherIcon = true,
}: NavItemProps) {
  return (
    <a
      href={href}
      className="flex group items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      {otherIcon && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
      )}
    </a>
  );
}
