import Head from "next/head"
import Image from "next/image"
import { SettingsProvider } from "../context/SettingsContext"
import Controls from "../components/Controls"

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

      <main>
        <h1>Animated CSS Gradient Background Generator</h1>
        <SettingsProvider>
          <Controls />
        </SettingsProvider>
      </main>

      <footer>
        <p>
          Created by <a href="http://johnpolacek.com">John Polacek</a>
        </p>
        <p>
          Based on <a href="https://codepen.io/P1N2O/pen/pyBNzX">a CodePen</a>{" "}
          by Manuel Pinto
        </p>
      </footer>
    </>
  )
}
