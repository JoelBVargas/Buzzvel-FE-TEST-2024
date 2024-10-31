import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./header";
import { Section01 } from "./section-01";
import { Section02 } from "./section-02";
import { Section03 } from "./section-03";
import { Section04 } from "./section-04";
import { Section05 } from "./section-05";
import { Section06 } from "./section-06";
import { Footer } from "./footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Section01 />
    <Section02 />
    <Section03 />
    <Section04 />
    <Section05 />
    <Section06 />
    <Footer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
