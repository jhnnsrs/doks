import { FaktsGuard, useFakts } from "fakts";
import React from "react";
import { NoFakts } from "../fallbacks/NoFakts";

export const HelloInside = () => {
  const { changeFakts } = useFakts();

  return (
    <div>
      <button onClick={() => changeFakts(null)}>und ciao</button>
    </div>
  );
};

export const Hello = () => {
  return (
    <FaktsGuard fallback={<NoFakts />}>
      <HelloInside />
    </FaktsGuard>
  );
};
