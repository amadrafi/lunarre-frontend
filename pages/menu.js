import { Container } from "../shared/container";
import { Text } from "../shared/text";
import { motion } from 'framer-motion';
import Navbar from "../components/navbar";
import Link from "next/link";


function MenuItem(props) {
  return (
    <li>
      <motion.div style={{opacity: 0.4}} whileHover={{opacity: 1}}>
        <Text family='Helvetica neue' size='1em' spacing='2px' weight='400' margin='0 0 1.2em 0' >
          <Link href={props.link}>
            <a>{props.itemName}</a>
          </Link>
        </Text>
      </motion.div>
    </li>
  )
}

// Guide to print Menu
// 1. each li is set in a function called MenuItem but it must be a child of ul
// 2. there are two props, 1: itemName, 2:link
// 3. itemName describes the name of the drink
// 4. link is supposed to be a link for the pop up page

export default function Menu() {
    return (
      <>
        <Navbar />

        <Container type='grid' column='2fr 4fr 3fr 3fr' margin='8vw 10vw'>
          <Container type='flex' align='center'>
            <Text family='Antic didone' size='3vw'>Shop All</Text>
          </Container>
          <Container align='center' type='inline' padding='0 0 0 6em'>
            <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>COFFEE</Text>
            <ul>
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
            <ul>
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
            <ul>
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

        <Container>

        </Container>
      </>
    )
  }