import Head from "next/head";
import { Container } from "../shared/container";
import { Text } from "../shared/text"
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Lunarre by Walking Drums</title>
      </Head>
      <Navbar/>
      <Container color="none">
        <Text type="h1">Hello World</Text>
      </Container>
    </>
  )
}
