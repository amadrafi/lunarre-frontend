import React, { useEffect, useState } from 'react'
import { Container } from '../shared/container'
import Image from 'next/image'
import firstPic from '../assets/firstPic.png'
import secondPic from '../assets/secondPic.png'
import FadeIn from 'react-fade-in';
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
                        <Text align="center" color="white" family="Helvetica neue" size='2em' spacing='4px'>Achieve your goals in our cozy <br />environment</Text>
                        <Button spacing="4px" family="Helvetica neue" width="12em">DIRECTIONS</Button>
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
                        <Text align="center" color="white" family="Helvetica neue" size='2em' spacing='4px'>A cup of coffee shared with a friend is <br /> happiness tasted and time well spent</Text>
                        <Button spacing="4px" family="Helvetica neue" width="12em">MENU</Button>
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