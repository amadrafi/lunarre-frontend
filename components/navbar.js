import Image from "next/image";
import { Container } from "../shared/container";
import { Text } from "../shared/text";
import lunarreLogo from "../assets/lunarre-logo.png";
import Link from "next/link";
import useWindowSize from "../shared/windowSizeFunction"


const NAV_CONTENT = [
    {content:"SHOP",url:"/"},
    {content:"PROMO",url:"/"},
    {content:"NEWS",url:"/"},
    {content:lunarreLogo },
    {content:"LOCATIONS",url:"/"},
    {content:"LEARN",url:"/"},
    {content:"ABOUT US",url:"/"}
]

const MobileNavbar = () => {
    return (
        <>
        <Container className="nav_inactive" margin="0 0 2em 1em">
            <Text family="Helvetica neue" size='1.5em'>asdsadsad</Text>
        </Container>
        </>
    )
}

const Navbar = () => {
    const {width , height} = useWindowSize()
    const isMobile = width<800
    return (
        isMobile?
        MobileNavbar()
            :<Container type='grid' row='1fr' column={"1fr 1fr 1fr".concat(isMobile?"":' 4fr').concat(' 1fr 1fr 1fr')} height='80px' padding='20px 2vw 20px 2vw'>
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
                                isMobile?"":
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
export default Navbar

