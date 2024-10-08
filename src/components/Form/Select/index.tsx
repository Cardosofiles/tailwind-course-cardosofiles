"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode;
  placeholder: string;
}
export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className="flex h-11 w-full items-center justify-between gap-2
     rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 focus:border-violet-400 outline-none focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-600 dark:focus-within:ring-violet-500/10 dark:data-[placeholder]:text-zinc-400"
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          sideOffset={8}
          position="popper"
          className="z-10 shadow-sm rounded-lg overflow-hidden border border-zinc-200 bg-white w-[--radix-select-trigger-width] animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
