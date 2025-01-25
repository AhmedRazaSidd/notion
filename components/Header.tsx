"use client";
import {
  SignedOut,
  SignedIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import React from "react";
const Header = () => {
  const user = useUser();
  console.log(user);

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1>
          {user?.user?.firstName}
          {`'s`} Space
        </h1>
      )}
      {/* Breadcrumbs */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
