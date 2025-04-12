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
