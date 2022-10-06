import { FaktsGuard } from "fakts";
import { HerreGuard } from "herre";
import { MikroGuard } from "mikrots";
import { NoFakts } from "./NoFakts";
import { NoHerre } from "./NoHerre";
import { NoMikro } from "./NoMikro";
import React, { ReactNode } from "react";

export const AllGuarded = ({ children }: { children: React.ReactNode }) => {
  return (
    <FaktsGuard fallback={<NoFakts />}>
      <HerreGuard fallback={<NoHerre />}>
        <MikroGuard fallback={<NoMikro />}>{children}</MikroGuard>
      </HerreGuard>
    </FaktsGuard>
  );
};
