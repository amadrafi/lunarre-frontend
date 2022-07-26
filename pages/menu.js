import { Container } from "../shared/container";
import { Text } from "../shared/text";
import Navbar from "./components/navbar";
import Link from "next/link";


export default function Menu() {
    return (
      <>
        <Navbar />
        <Container type='grid' column='2fr 4fr 3fr 3fr' margin='10vh 10vw 0 10vw'>
          <Container type='flex' align='center'>
            <Text family='Antic didone' size='3vw'>Shop All</Text>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 6em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>COFFEE</Text>
            <ul style={{opacity: 0.5}}>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
                  <Link href=''>
                    <a>Salted Caramel Machiato</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
                  <Link href=''>
                    <a>Milky Way</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
                  <Link href=''>
                    <a>Creme Brulle</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
                  <Link href=''>
                    <a>Americano</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
                  <Link href=''>
                    <a>Cold Brew</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
                  <Link href=''>
                    <a>Oat Latte</a>
                  </Link>
                </Text>
              </li>
            </ul>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 2em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>NON COFFEE</Text>
            <ul style={{opacity: 0.5}}>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Hot/Ice Lychee Tea</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Ice Tea</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Matcha Latte</a>
                  </Link>
                </Text>
              </li>
            </ul>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 3em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>MOCKTAILS</Text>
            <ul style={{opacity: 0.5}}>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Berry Berry</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Virgin Mojito</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Peach Yakult</a>
                  </Link>
                </Text>
              </li>
              <li>
                <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>
                  <Link href=''>
                    <a>Blood Moon</a>
                  </Link>
                </Text>
              </li>
            </ul>
          </Container>
        </Container>
      </>
    )
  }