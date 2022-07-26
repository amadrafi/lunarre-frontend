import { Container } from "../shared/container";
import { Text } from "../shared/text";
import Navbar from "./components/navbar";
import Link from "next/link";

// use this to print menu an use itemName and link as props
function MenuItem(props) {
  return (
    <li>
      <Text family='Helvetica neue' size='1em' spacing='2px' weight='500' margin='0 0 1.2em 0' >
        <Link href={props.link}>
          <a>{props.itemName}</a>
        </Link>
      </Text>
    </li>
  )
}


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
              <MenuItem
                itemName='Salted Caramel Machiato'
                link='' />
              <MenuItem
                itemName='Milky Way'
                link='' />
              <MenuItem
                itemName='Creme Brulle'
                link='' />
              <MenuItem
                itemName='Americano'
                link='' />
              <MenuItem 
                itemName='Cold Brew'
                link='' />
              <MenuItem 
                itemName='Oat Latte'
                link='' />
            </ul>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 2em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>NON COFFEE</Text>
            <ul style={{opacity: 0.5}}>
              <MenuItem 
                itemName='Lychee Tea'
                link='' />
              <MenuItem
                itemName='Ice Tea'
                link='' />
              <MenuItem
                itemName='Matcha Latte'
                link='' />
            </ul>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 3em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>MOCKTAILS</Text>
            <ul style={{opacity: 0.5}}>
              <MenuItem
                itemName='Berry Berry'
                link='' />
              <MenuItem
                itemName='Virgin Mojito'
                link='' />
              <MenuItem
                itemName='Peach Yakult'
                link='' />
              <MenuItem
                itemName='Blood Moon'
                link='' />
            </ul>
          </Container>
        </Container>
      </>
    )
  }