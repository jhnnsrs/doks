import BrowserOnly from "@docusaurus/BrowserOnly";
import { buildFaktsRetrieveGrant, Fakts, useFakts } from "@jhnnsrs/fakts";
import React, { useState } from "react";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoFakts: React.FC<PublicHomeProps> = (props) => {
  const { fakts, load } = useFakts();
  const [future, setFuture] = useState<Promise<Fakts> | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const ref = React.useRef<HTMLInputElement>(null);

  console.log(fakts);

  const retrieveWellKnown = async (host: string) => {
    if (!host.endsWith("/")) {
      host = host + "/";
    }
    if (!host.startsWith("http://") && !host.startsWith("https://")) {
      host = "http://" + host;
    }

    console.log(host);

    const response = await fetch(`${host}.well-known/fakts`);

    const endpoint = await response.json();

    console.log(endpoint);
    console.log(window.location.host + "/callback");

    let x = await load(
      buildFaktsRetrieveGrant(
        endpoint,
        "latest",
        "github.io.jhnnsrs.doks",
        "http://" + window.location.host + "/callback"
      )
    );

    console.log(x);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<<<<<<< HEAD
        {edit ? (
          <BrowserOnly>
            {() => (
              <div className="flex flex-row">
                <div className="text-left overflow-hidden ">
                  <input
                    type="input"
                    name="host"
                    placeholder="your host"
                    ref={ref}
                  />
                </div>
                <div className="ml-2">
                  {future ? (
                    <button className="w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10">
                      {" "}
                      Cancel{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        retrieveWellKnown(ref.current?.value || "");
                      }}
                      type="submit"
                      className=" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
                    >
                      {" "}
                      Use
                    </button>
                  )}
                </div>
              </div>
            )}
          </BrowserOnly>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
          >
            c
          </button>
        )}
=======
        <BrowserOnly>
          {() => (
            <Formik<ConfigValues>
              initialValues={{
                host: `https://lok-sibarita.iins.u-bordeaux.fr/f/`,
              }}
              onSubmit={({ host }, { setSubmitting }) => {
                setSubmitting(true);
                setFuture(
                  load({
                    endpoint: {
                      name: "Localhost",
                      base_url: host,
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
>>>>>>> fd37607fdea954ae8fc46e64701a57fe077db559
      </div>
    </div>
  );
};
