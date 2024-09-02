"use client";

import { Logo } from "./Logo";

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from "lucide-react";

import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UserdSpaceWidget } from "./UsedSpaceWidget";

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 top-0 right-0 z-20 flex flex-col gap-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 data-[state=open]:h-screen  data-[state=open]:bottom-0 p-4 lg:right-auto lg:data-[state=closed]:bottom-0 lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem href="/" title="Home" icon={Home} />
          <NavItem href="/routes/dashboard" title="Dashboard" icon={BarChart} />
          <NavItem
            href="/routes/projects"
            title="Projects"
            icon={SquareStack}
          />
          <NavItem href="/routes/tasks" title="Tasks" icon={CheckSquare} />
          <NavItem href="/routes/reporting" title="Reporting" icon={Flag} />
          <NavItem href="/routes/user" title="User" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem
              href="/routes/support"
              title="Support"
              icon={LifeBuoy}
              otherIcon={false}
            />
            <NavItem
              href="/routes/settings"
              title="Settings"
              icon={Cog}
              otherIcon={false}
            />
          </nav>

          <UserdSpaceWidget />

          <div className="border-t-2 bg-zinc-200 dark:border-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
