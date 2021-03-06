import Head from "next/head"
import Image from "next/image"
import { SettingsProvider } from "../context/SettingsContext"
import AnimatedBackground from "../components/AnimatedBackground"
import Controls from "../components/Controls"
import Output from "../components/Output"

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Gradient Background Generator</title>
        <meta
          name="description"
          content="A tool for creating animated background gradients in pure CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SettingsProvider>
        <AnimatedBackground>
          <main style={{ textAlign: "center", padding: "32px 32px 0" }}>
            <h1 style={{ fontWeight: 200, padding: "16px", fontSize: "3em" }}>
              Animated Gradient Background Generator
            </h1>
            <Controls />
            <Output />
          </main>
          <footer style={{ textAlign: "center", padding: "0 32px 64px" }}>
            <p>
              Created by Chicago web developer{" "}
              <a href="http://johnpolacek.com">John Polacek</a>
            </p>
            <p>
              Based on a{" "}
              <a href="https://codepen.io/P1N2O/pen/pyBNzX">CodePen</a> by
              Manuel Pinto
            </p>
            <p>
              Open sourced on{" "}
              <a href="https://github.com/johnpolacek/animated-gradient-background-generator">
                Github
              </a>
            </p>
          </footer>
        </AnimatedBackground>
      </SettingsProvider>
    </>
  )
}
