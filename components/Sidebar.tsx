import React from "react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* List... */}

      {/* Shared with me */}
      {/* List... */}
    </>
  );

  return (
    <div className="p-2 md:-5 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
