'use client'

// @ts-ignore
import {OCConnect} from "@opencampus/ocid-connect-js";

const opts = {
  redirectUri: 'http://localhost:3000/oc-redirect',
};

export default function OCProvider({children}: {
  children: React.ReactNode
}) {
  return <OCConnect opts={opts} sandboxMode={true}>{ children }</OCConnect>
}