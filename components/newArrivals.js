import React from 'react'
import { Container } from '../shared/container'
import { Button } from '../shared/button'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '../shared/text'
import NewArrivals1 from '../assets/newArrivals1.png'
import NewArrivals2 from '../assets/newArrivals2.png'

const NewArrivals = () => {
  return (
    <Container type="flex" height="100vh" width="90%">
        <Container padding="0 2em 0 2em" type="flex" direction="column" flex="1" justify="center" align="center">
            <Text color="#444444" size="1.2em" family="Helvetica neue" spacing='4px'>NEW ARRIVALS</Text>
            <Text family="Antic didone" size="3em" weight="bold" margin="0.5em 0 0.5em 0" spacing="1px">&quot; Freshest of the Fresh &quot;</Text>
            <Text margin="0 0 1em 0" color="#444444" align="center" size="1.2em" family="Helvetica neue" weight='400'>Featuring the freshest in our beautiful range of seasonal <br /> coffees sourced throughout the year.</Text>
            <Button background="#2A5947" width="30%"><Link href='/menu'><a><Text size='0.8em' align='center' spacing='4px' color="#FFFEF3">SHOP NOW</Text></a></Link></Button>
        </Container>
        <Container type="flex" flex="1" padding="0 2em 0 2em">
            <Container type="image" margin="0 1em 0 0">
                <Image src={NewArrivals1} layout="fill" objectFit="contain" />
            </Container>
            <Container type="image">
                <Image src={NewArrivals2} layout="fill" objectFit="contain" />
            </Container>           
        </Container>
    </Container>
  )
}

export default NewArrivals