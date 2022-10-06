import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CancelablePromise from "cancelable-promise";
import { Fakts, useFakts } from "fakts";
import { Field, Form, Formik } from "formik";
import { useHerre } from "herre";
import React, { useState } from "react";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoHerre: React.FC<PublicHomeProps> = (props) => {
  const { login } = useHerre();
  const d = useDocusaurusContext();
  const { fakts, setFakts } = useFakts();
  const [future, setFuture] = useState<CancelablePromise<Fakts> | null>(null);

  return (
    <div className="flex flex-col">
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <BrowserOnly>
          {() => (
            <>
              <button
                onClick={() =>
                  login(
                    {
                      clientId: fakts.herre.client_id,
                      clientSecret: fakts.herre.client_secret,
                      scopes: fakts.herre.scopes,
                      redirectUri:
                        window.location.origin +
                        d.siteConfig.baseUrl +
                        "callback",
                    },
                    {
                      base_url: fakts.herre.base_url,
                      tokenUrl: fakts.herre.base_url + "/token/",
                      userInfoEndpoint: fakts.herre.base_url + "/userinfo/",
                      authUrl: fakts.herre.base_url + "/authorize/",
                    }
                  )
                }
                className="w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
              >
                Login with {fakts.herre.base_url}
              </button>
              <button onClick={() => setFakts(null)}>Disconnect</button>
            </>
          )}
        </BrowserOnly>
      </div>
    </div>
  );
};
