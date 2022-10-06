import BrowserOnly from "@docusaurus/BrowserOnly";
import CancelablePromise from "cancelable-promise";
import { Fakts, useFakts } from "fakts";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoFakts: React.FC<PublicHomeProps> = (props) => {
  const { load } = useFakts();
  const [future, setFuture] = useState<CancelablePromise<Fakts> | null>(null);

  return (
    <div className="flex flex-col">
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <BrowserOnly>
          {() => (
            <Formik<ConfigValues>
              initialValues={{
                host: `${window.location.hostname}:8000`,
              }}
              onSubmit={({ host }, { setSubmitting }) => {
                setSubmitting(true);
                setFuture(
                  load({
                    endpoint: {
                      name: "Localhost",
                      base_url: `http://${host}/f/`,
                    },
                    clientId: "Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu",
                    clientSecret:
                      "bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos",
                  })
                    .then(() => {
                      setFuture(null);
                      setSubmitting(false);
                    })
                    .catch((e) => {
                      alert({ message: e.message, subtitle: e.stack });
                    })
                    .finally(() => {
                      setFuture(null);
                      setSubmitting(false);
                    }, true)
                );
              }}
            >
              {(formikProps) => (
                <Form>
                  <div className="flex flex-row">
                    <div className="text-left overflow-hidden ">
                      <Field type="input" name="host" placeholder="your host" />
                    </div>
                    <div className="ml-2">
                      {future ? (
                        <button
                          onClick={() => future.cancel()}
                          className="w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10"
                        >
                          {" "}
                          Cancel{" "}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className=" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
                        >
                          {" "}
                          Use
                        </button>
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </BrowserOnly>
      </div>
    </div>
  );
};
