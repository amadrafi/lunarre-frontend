import { Container } from "../shared/container";
import { Text } from "../shared/text";
import Navbar from "./components/navbar";


export default function Menu() {
    return (
      <>
        <Navbar />
        <Container type='grid' column='2fr 4fr 3fr 3fr' margin='10vh 10vw 0 10vw'>
          <Container type='flex' align='center'>
            <Text family='Antic didone' size='3vw'>Shop All</Text>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 5em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>COFFEE</Text>
            <ul style={{opacity: 0.5}}>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Salted Caramel Machiato</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Milky Way</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Creme Brulle</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Americano</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Cold Brew</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Oat Latte</Text></li>
            </ul>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 2em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>NON COFFEE</Text>
            <ul style={{opacity: 0.5}}>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Hot/Ice Lychee Tea</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Ice Tea</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Matcha Latte</Text></li>
            </ul>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 3em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>MOCKTAILS</Text>
            <ul style={{opacity: 0.5}}>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Berry Berry</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Virgin Mojito</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Peach Yakult</Text></li>
              <li><Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0'>Blood Moon</Text></li>
            </ul>
          </Container>
        </Container>
      </>
    )
  }