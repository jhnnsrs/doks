import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  LiveContext,
} from "react-live";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";
import { AllGuarded } from "@site/src/fallbacks/guarded";
import {
  ChartRegistry,
  KraphQLProvider,
  MultiComposed,
  SmartRegistry,
  useKraphQL,
} from "@jhnnsrs/kraphql";
import { useMikro, useMikroQuery } from "mikrots";
import gql from "graphql-tag";
import { EntryTree } from "@site/src/components/Hello";
import { MikroIQL } from "@site/src/components/iql/MikroIQL";

const KraphQLRender = (props) => {
  const { setActiveQueryData } = useKraphQL();
  const { client } = useMikro();

  useEffect(() => {
    if (props.code) {
      console.log("props.code", props.code);
      try {
        client
          .query({
            query: gql(props.code),
          })
          .then((res) => {
            setActiveQueryData(res.data);
          });
      } catch (e) {
        console.error(e);
      }
    }
  }, [props.code]);

  return <EntryTree />;
};

function KraphQLResultWithHeader(props) {
  const [chartRegistry, setChartRegistry] = useState();
  const [smartRegistry, setSmartRegistry] = useState();

  useEffect(() => {
    let x = new ChartRegistry();
    x.registerChart({
      name: "test",
      match: (group) => {
        if (!group.data) {
          return;
        }

        return {
          priority: 1,
          Component: MultiComposed,
        };
      },
    });

    setChartRegistry(x);
    let s = new SmartRegistry({
      name: "fallback",
      object: "fallback",
      Component: (props) => <div>{JSON.stringify(props.value)}</div>,
    });

    s.registerSmart({
      name: "Omero",
      object: "Omero",
      Component: (props) => (
        <div className="bg-slate-900 p-3 rounded rounded-md">
          This is the Omero file {JSON.stringify(props.value)}
        </div>
      ),
    });
    setSmartRegistry(s);
  }, []);

  return (
    <>
      <div className="p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md">
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Result
        </Translate>
      </div>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div>
        <BrowserOnly fallback={<div>Hallo</div>}>
          {() => (
            <AllGuarded>
              {smartRegistry && chartRegistry && (
                <KraphQLProvider
                  chartRegistry={chartRegistry}
                  smartRegistry={smartRegistry}
                  palette={{
                    graphColor: "#ffffff",
                    dataColors: [
                      "rgb(var(--color-primary-100))",
                      "rgb(var(--color-primary-200))",
                      "rgb(var(--color-primary-300))",
                    ],
                  }}
                >
                  <KraphQLRender code={props.code} />
                </KraphQLProvider>
              )}
            </AllGuarded>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}

export const KraphQLPlayground: React.FC<{
  code: string;
  playgroundPosition: string;
}> = ({ code, playgroundPosition }) => {
  const [activeCode, setActiveCode] = useState(code);

  return (
    <div className="border-slate-300 border border-1 p-1 ">
      {playgroundPosition === "top" ? (
        <>
          <MikroIQL query={activeCode} onEditQuery={setActiveCode} />
          <KraphQLResultWithHeader code={activeCode} />
        </>
      ) : (
        <>
          <MikroIQL query={activeCode} onEditQuery={setActiveCode} />
          <KraphQLResultWithHeader code={activeCode} />
        </>
      )}
    </div>
  );
};
