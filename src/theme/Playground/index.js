import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {LiveProvider, LiveEditor, LiveError, LivePreview, LiveContext} from 'react-live';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {usePrismTheme} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { AllGuarded } from '@site/src/fallbacks/guarded';
import { ChartRegistry, KraphQLProvider, MultiComposed, SmartRegistry, useKraphQL } from '@jhnnsrs/kraphql';
import { useMikro, useMikroQuery } from 'mikrots';
import gql from 'graphql-tag';
import { EntryTree } from '@site/src/components/Hello';
import { MikroIQL } from '@site/src/components/iql/MikroIQL';
import { KraphQLPlayground } from '@site/src/components/iql/Playground';
function Header({children}) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return <div>Loading...</div>;
}
function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks">
          Result
        </Translate>
      </Header>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <AllGuarded>
              <LivePreview />
              <LiveError />
            </AllGuarded>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}









function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}
function EditorWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks">
          Live Editor
        </Translate>
      </Header>
      <ThemedLiveEditor />
    </>
  );
}
export default function Playground({children, transformCode, ...props}) {
  const {
    siteConfig: {themeConfig},
  } = useDocusaurusContext();
  const {
    liveCodeBlock: {playgroundPosition},
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;

  if (props.className?.includes('language-')) {
    const language = props.className.replace('language-', '');

    if (language === 'jsx') {
      return (
        <div className={styles.playgroundContainer}>

          {/* @ts-expect-error: type incompatibility with refs */}
          <LiveProvider
            code={children.replace(/\n$/, '')}
            noInline={noInline}
            transformCode={transformCode ?? ((code) => `${code};`)}
            theme={prismTheme}
            {...props}>
            {playgroundPosition === 'top' ? (
              <>
                <ResultWithHeader />
                <EditorWithHeader />
              </>
            ) : (
              <>
                <EditorWithHeader />
                <ResultWithHeader />
              </>
            )}
          </LiveProvider>
        </div>
      );
            }
            else {
              return  <BrowserOnly fallback={<LivePreviewLoader />}>
              {() => <KraphQLPlayground code={children.replace(/\n$/, '')} playgroundPosition={playgroundPosition}/>}
              </BrowserOnly>
            }
          }
}
