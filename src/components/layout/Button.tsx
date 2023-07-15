import React from "react";

export const DownloadButton = ({ children }) => {
  return (
    <a
      href={"https://github.com/jhnnsrs/konstruktor/releases"}
      target="_blank"
      className="bg-primary-300 rounded px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white "
    >
      {children}
    </a>
  );
};
