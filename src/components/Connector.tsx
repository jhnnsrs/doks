import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  Fakts,
  FaktsGuard,
  useFakts,
  introspectBeacon,
  buildFaktsRetrieveGrant,
} from "@jhnnsrs/fakts";
import { HerreGuard, useHerre } from "@jhnnsrs/herre";
import { MikroGuard } from "mikrots";
import { CancelablePromise } from "cancelable-promise";
import { Menu, Popover, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { VscDebugDisconnect, VscClose, VscAccount } from "react-icons/vsc";
import { NoFakts } from "../fallbacks/NoFakts";

export const NoFaktsFallback = () => {
  const { fakts, load, setFakts } = useFakts();
  const { login } = useHerre();

  const d = useDocusaurusContext();
  const [future, setFuture] = useState<Promise<Fakts> | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  console.log(fakts);

  const retrieveWellKnown = async (host: string) => {
    let endpoint = await introspectBeacon({ url: host });

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
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-transparent w-full justify-center rounded-md text-white px-4 py-1 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <VscDebugDisconnect color="#ffffff" size={"2em"} />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="flex flex-col w-full ">
              <div>
                {fakts && fakts.lok ? (
                  <>
                    <div className="px-2 py-2 flex flex-row gap-2 ">
                      <button
                        className={`"flex-grow text-center cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Connected to {fakts.self.name}
                      </button>
                      <button
                        onClick={() => setFakts(null)}
                        className={`"flex-initial text-center cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex items-center rounded-md  text-sm`}
                      >
                        <VscClose />
                      </button>
                    </div>
                    <div className="mt-2 font-light text-gray-900 text-center text-sm my-auto border-t-1 border-t border-gray-800 px-2 py-2 ">
                      <button
                        onClick={() => {
                          let redirectUri =
                            window.location.origin +
                            d.siteConfig.baseUrl +
                            "callback";
                          console.log(redirectUri);

                          login(
                            {
                              clientId: fakts.lok.client_id,
                              clientSecret: fakts.lok.client_secret,
                              scopes: fakts.lok.scopes,
                              redirectUri,
                            },
                            {
                              base_url: fakts.lok.base_url,
                              tokenUrl: fakts.lok.base_url + "/token/",
                              userInfoEndpoint:
                                fakts.lok.base_url + "/userinfo/",
                              authUrl: fakts.lok.base_url + "/authorize/",
                            }
                          );
                        }}
                        className="flex-grow text-center cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm "
                      >
                        Login
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="px-2 py-2">
                      <button
                        className={`"cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          retrieveWellKnown(
                            "https://lok-sibarita.iins.u-bordeaux.fr"
                          );
                        }}
                      >
                        Connect to our Demo Server
                      </button>
                    </div>
                    <div className="mt-2 font-light text-gray-900 text-center text-sm my-auto border-t-1 border-t border-gray-800">
                      {" "}
                      Connect to your own Server
                    </div>
                    <div className="flex flex-row gap-1 m-2">
                      <input
                        type="input"
                        name="host"
                        placeholder="Server URL"
                        ref={ref}
                        className={`group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm ring-0`}
                      />
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
                            className="h-full flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
                          >
                            {" "}
                            Use
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const NoHerre = () => {
  const { fakts, setFakts } = useFakts();
  const [future, setFuture] = useState<CancelablePromise<Fakts> | null>(null);

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-transparent w-full justify-center rounded-md text-white px-4 py-1 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <VscDebugDisconnect color="#ffffff" size={"2em"} />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="px-2 py-2">
              <div className="text-gray-900">Hello at {fakts?.self?.name}</div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const ShowMe = () => {
  const { fakts, load, setFakts } = useFakts();
  const { user, logout } = useHerre();

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-primary-300  w-full justify-center rounded-md text-white px-4 py-2 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          @{user.preferred_username}
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="flex flex-col w-full ">
              {fakts && fakts.lok && (
                <>
                  <div className="px-2 py-2 w-full ">
                    <button
                      onClick={() => {
                        logout();
                        setFakts(null);
                      }}
                      className={`"w-full cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 border-1 border-primary-300 border border-shadow-primary-300  rounded-md  text-sm`}
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const Connector = (props) => {
  return (
    <HerreGuard fallback={<NoFaktsFallback />}>
      <ShowMe />
    </HerreGuard>
  );
};
