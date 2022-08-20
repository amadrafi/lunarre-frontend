import Image from "next/image";
import { Container } from "../shared/container";
import { Text } from "../shared/text";
import { Button } from "../shared/button"
import lunarreLogo from "../assets/lunarre-logo.png";
import Link from "next/link";
import useWindowSize from "../shared/windowSizeFunction"
import { useEffect, useState } from "react";
import hamburger from '../assets/hamburger.svg'
import {Divide as Hamburger} from 'hamburger-react'

const NAV_CONTENT = [
    {content:"SHOP",url:"/"},
    {content:"PROMO",url:"/"},
    {content:"NEWS",url:"/"},
    {content:lunarreLogo },
    {content:"LOCATIONS",url:"/"},
    {content:"LEARN",url:"/"},
    {content:"ABOUT US",url:"/"}
]

const MobileNavbar = (props) => {
    const {active} = props
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Container type="flex" padding="0.5em">
            <Container type='image' height='50px' width='100%'>
                <Link href='/'><a><Image src={lunarreLogo} objectFit='contain' layout="fill"/></a></Link>
            </Container>
            <Container zIndex="999">
                <Hamburger {...props} color="black" toggled={isOpen} toggle={setOpen} />
            </Container>
        </Container>
        {/* <Button {...props} color="white" zIndex="999" 
        position="absolute" padding="1rem" width="1rem" right="1rem" radius="0" 
        >
        </Button> */}
        <Container {...props} transition="transform 250ms ease-out" transform={isOpen?"translateX(0)":"translateX(100%)"} color="#FFFEF3BE"  
        zIndex="100" inset="0 0 0 30%" padding="min(30vh,10rem) 2rem" position={isOpen?"absolute":"fixed"}
        backdrop_filter="blur(1rem)"
        >
            {NAV_CONTENT.map(
                ({content,url})=>{
                    if(url){
                        return(
                            <Text family="Helvetica neue" size='1.5em'>
                                <Link href={url} ><a>{content}</a></Link>
                            </Text>
                        )
                    }
                }
            )}
        </Container>
        </>
    )
}

const DesktopNav = ()=>{
    return(
        <Container type='grid' row='1fr' column={"1fr 1fr 1fr 3fr 1fr 1fr 1fr"} height='80px' padding='20px 2vw 20px 2vw'>
                {NAV_CONTENT.map(
                    ({content,url})=>{
                        if(url){
                            return(
                                <Container type='flex' align='center' justify='center'>
                                    <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href={url} ><a>{content}</a></Link></Text>
                                </Container>
                            )
                        }
                        else{
                            return(
                                <Container type='flex' align='center' justify='center'>
                                    <Container type='image' height='100%' width='100%'>
                                        <Link href='/'><a><Image src={content} objectFit='contain' layout="fill"/></a></Link>
                                    </Container>
                                </Container>
                            )
                        }
                    }
                )}
            </Container>
    )
}

const Navbar = () => {
    const {width } = useWindowSize()
    const [navbarState,setNavbarState] = useState(false)
    const isMobile = width<857
    return (
        isMobile?
        <MobileNavbar active={navbarState} onClick={(e)=>{
            setNavbarState(!navbarState);
        }
        }/>
            :
        <DesktopNav/>
    )
}
export default Navbar

