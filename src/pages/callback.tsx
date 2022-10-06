import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useLocation, useHistory } from "@docusaurus/router";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useHerre } from "herre";

export const CallbackInner: React.FC<{}> = (props) => {
  const { setCode, token } = useHerre();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    let code = urlParams.get("code");
    console.log(code);
    if (code) {
      setCode(code);
    }
  }, []);

  return <>{token ? "Signed in" : "Signing in....."}</>;
};

export default function Callback(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is just a callback"
    >
      <BrowserOnly>{() => <CallbackInner />}</BrowserOnly>
    </Layout>
  );
}
