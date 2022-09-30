import React from "react";
import { FaktsProvider } from "fakts";
// Default implementation, that you can customize
export default function Root({ children }) {
  console.log("ROot Called");
  return (
    <FaktsProvider
      clientId="PsdU71PlUYeC4hP4aDf8pTdm2Hv9xYKdrxCFI5RO"
      clientSecret="8jXSNhrH7fllN8cGjxg7y2Jl1INb22wlDSmUBepb9aRDGV3al5pfNzswS85MPEvpN5vnfrPkrIERQ6kcMHLiISr4HcYirivdtrnyMjFMlzKGvlCrwfkNJmtQgCLZmH4X"
    >
      {children}
    </FaktsProvider>
  );
}
