import React from 'react';
import {withMikro, useMikroQuery} from "mikrots";
import { BioImage } from '@site/src/components/Bioimage';
import {gql } from "graphql-tag";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  withMikro,
  useMikroQuery,
  BioImage,
  gql,
};
export default ReactLiveScope;
