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
        <title>Animated CSS Gradient Background Generator</title>
        <meta
          name="description"
          content="A tool for creating animated background gradients in pure CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SettingsProvider>
        <AnimatedBackground>
          <main style={{ textAlign: "center", padding: "64px" }}>
            <h1>Animated CSS Gradient Background Generator</h1>
            <Controls />
            <Output />
          </main>
          <footer>
            <p>
              Created by <a href="http://johnpolacek.com">John Polacek</a>
            </p>
            <p>
              Based on{" "}
              <a href="https://codepen.io/P1N2O/pen/pyBNzX">a CodePen</a> by
              Manuel Pinto
            </p>
          </footer>
        </AnimatedBackground>
      </SettingsProvider>
    </>
  )
}
