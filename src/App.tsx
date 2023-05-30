import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";

export async function dynamicActivate(locale: string) {
  const { messages } = await import(
    // @ts-ignore
    `./file.js!=!@lingui/loader!./locales/en/messages.po`
  );

  console.log("messages", messages);

  i18n.load(locale, messages);
  i18n.activate(locale);
}

function App() {
  useEffect(() => {
    setTimeout(() => {
      dynamicActivate("en");
    }, 0);
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>
          <Trans>Message Inbox</Trans>
        </h1>
      </div>
    </I18nProvider>
  );
}

export default App;
