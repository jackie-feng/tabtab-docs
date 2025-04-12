import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - TabTab",
    };
  },
  head: () => (
    <>
      <link rel="icon" href="/icon.svg" />
      <meta
        name="description"
        content="TabTab 是一个管理浏览器标签页的插件。它可以帮助您管理多个标签页，并提供多种功能，如标签页分组、标签页搜索、标签页管理等。"
      />
    </>
  ),
  logo: <b>TabTab</b>,
  logoLink: "https://tabtab.xyz",
  project: {
    link: "https://github.com/jackie-feng/tabtab-docs",
  },
  chat: {
    link: "https://discord.com/invite/NukB4YWdTt",
  },
  docsRepositoryBase: "https://github.com/jackie-feng/tabtab-docs",
  footer: {
    text: "TabTab Docs",
  },
};

export default config;
