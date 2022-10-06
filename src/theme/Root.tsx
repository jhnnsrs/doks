import React from "react";
import { FaktsProvider } from "fakts";
import { HerreProvider } from "herre";
import { MikroProvider } from "mikrots";
import { MikroAutoConfigure } from "../components/bridges/MikroAutocConfigure";
// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <FaktsProvider>
      <HerreProvider>
        <MikroProvider>
          <MikroAutoConfigure />
          {children}
        </MikroProvider>
      </HerreProvider>
    </FaktsProvider>
  );
}
