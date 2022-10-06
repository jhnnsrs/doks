import React from 'react';
import {withMikro, useMikroQuery} from "mikrots";
import {gql } from "graphql-tag";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  withMikro,
  useMikroQuery,
  gql,
};
export default ReactLiveScope;
