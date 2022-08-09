import React, { useEffect, useState } from 'react'
import { Container } from '../shared/container'
import Image from 'next/image'
import firstPic from '../assets/firstPic.png'
import secondPic from '../assets/secondPic.png'
import FadeIn from 'react-fade-in';
import Link from 'next/link';
import { Text } from '../shared/text'
import { Button } from '../shared/button'

const Carousel = () => {
    function firstSlide() {
        return (
            <div>
                <FadeIn>
                    <Container height="calc(100vh - 160px)" width="100%">
                        <Container type='image'>
                            <Image src={firstPic} objectFit="cover" layout="fill" />
                        </Container>
                    </Container>
                </FadeIn>
                <Container type="flex" direction="column" justify="flex-end" align="center" position="absolute" zIndex="1" top="80px" height="calc(100vh - 160px)" width="100vw">
                    <Container margin="0 0 6em 0" type="flex" align="center" direction="column">
                        <Text align="center" color="white" family="Helvetica neue" size='2em' spacing='1px'>Achieve your goals in our cozy <br />environment</Text>
                        <Button spacing="4px" family="Helvetica neue" width="12em">
                            <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/place/Lunarre+by+Walking+Drums+Senopati/@-6.2371115,106.8082156,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f1e7194ec3cd:0xd2355c15fc46be00!8m2!3d-6.2371168!4d106.8104043?shorturl=1'>DIRECTIONS</a>
                        </Button>
                    </Container>
                </Container>
            </div>
        )
    }

    function secondSlide() {
        return (
            <div>
                <FadeIn>
                    <Container height="calc(100vh - 160px)" width="100%">
                        <Container type='image'>
                            <Image src={secondPic} objectFit="cover" layout="fill" />
                        </Container>
                    </Container>
                </FadeIn>
                <Container type="flex" direction="column" justify="flex-end" align="center" position="absolute" zIndex="1" top="80px" height="calc(100vh - 160px)" width="100vw">
                    <Container margin="0 0 6em 0" type="flex" align="center" direction="column">
                        <Text align="center" color="white" family="Helvetica neue" size='2em' spacing='1px'>A cup of coffee shared with a friend is <br /> happiness tasted and time well spent</Text>
                        <Button spacing="4px" family="Helvetica neue" width="12em">
                            <Link href='/menu'>
                               <a>
                                    MENU
                                </a>
                            </Link>
                        </Button>
                    </Container>
                </Container>
            </div>
        )
    }
    const divSlider = {
        'first': firstSlide,
        'second': secondSlide 
    }

    let [selectedSlides, setSlides] = useState('first')

    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedSlides === 'first'){
                setSlides('second');
            }
            else {
                setSlides('first');
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [selectedSlides])
    return (
        <div>
            {selectedSlides == "first" ? <divSlider.first /> : <divSlider.second />}
        </div>
    )
}

export default Carousel