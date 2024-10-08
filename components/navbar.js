import Image from "next/image";
import { Container } from "../shared/container";
import { Text } from "../shared/text";
import lunarreLogo from "../assets/lunarre-logo.png";
import Link from "next/link";
import { useState } from "react";
import hamburger from '../assets/hamburger.svg'
import {Divide as Hamburger} from 'hamburger-react'

//TODO: change as soon as pages of each links created
const NAV_CONTENT = [
    {content:"SHOP",url:"/menu"},
    {content:"PROMO",url:"/soon"},
    {content:"NEWS",url:"/soon"},
    {content:lunarreLogo },
    {content:"LOCATIONS",url:"https://goo.gl/maps/icsHcd4fPMDo7EuN7"},
    {content:"LEARN",url:"/soon"},
    {content:"ABOUT US",url:"/soon"}
]

const MobileNavbar = (props) => {
    const { active,toggle } = props
    return (
        <>
        <Container type="flex" padding="0.5em" justify="space-between">
            <Container type='image' height='50px' width='30%'>
                <Link href='/'><a><Image src={lunarreLogo} objectFit='contain' layout="fill"/></a></Link>
            </Container>
            <Container position="fixed" top="1rem" right="2rem" zIndex="999">
                <Hamburger {...props} color="black" toggled={active} toggle={toggle} />
            </Container>
        </Container>
        <Container {...props} transition="transform 250ms ease-out" transform={active?"translateX(0)":"translateX(100%)"} color="#FFFEF3BE"  
        zIndex="100" inset="0 0 0 30%" padding="min(30vh,10rem) 2rem" position="fixed"
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

const Navbar = (props) => {
    const [navbarState,setNavbarState] = useState(false)
    const {isMobile} = props;
    return (
        isMobile?
        <MobileNavbar active={navbarState} toggle={setNavbarState}/>
            :
        <DesktopNav/>
    )
}
export default Navbar

