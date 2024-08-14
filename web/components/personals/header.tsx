'use client'

import Link from "next/link";

// @ts-ignore
import {LoginButton, useOCAuth} from '@opencampus/ocid-connect-js'
import {useEffect, useState} from "react";

export function Header() {
  const [ authenticated, setAuthenticated]  = useState<boolean>(false)
  const { authState, ocAuth } = useOCAuth();

  useEffect(() => {
    console.log(authState);
    setAuthenticated(authState.isAuthenticated);
    if (authState.isAuthenticated) console.log(ocAuth?.getAuthInfo());
  }, []);

  return (
    <header className="bg-foreground/10">
      <nav className="container flex justify-between p-3 mx-auto border-b">
        <Link
          href={"/"}
          className="flex items-center justify-center px-6 text-lg font-semibold bg-background rounded-md hover:bg-background/50 transition-all duration-300"
        >
          Ascendix
        </Link>
        { !authenticated && <LoginButton/> }
        { authenticated && <span>{ ocAuth.getAuthInfo()?.edu_username }</span>}
      </nav>
    </header>
  );
}
