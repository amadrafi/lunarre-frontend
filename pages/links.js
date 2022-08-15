import { Container } from "../shared/container";
import { Text } from "../shared/text";
import lunarreLogo from "../assets/lunarre-logo-2.svg";
import Navbar from "../components/navbar";
import Link from "next/link"
import Image from "next/image";
import useWindowSize from "../shared/windowSizeFunction"

const Linktree = () => {
    const data = [
        {val:"Location" , href : "https://goo.gl/maps/icsHcd4fPMDo7EuN7"},
        //mungkin perlu diubah
        {val:"Menu" , href : "https://drive.google.com/file/d/1_9qy6uE1CsWJHEmZKOzRwgeBSJJKB3wS/view?usp=sharing"},
        {val:"Instagram" , href : "https://www.instagram.com/lunarre.jkt/"},
        {val:"Tiktok" , href : "http://www.tiktok.com/@lunarre.jkt"}
    ]
    const window= useWindowSize();
    const isMobile = window.width<857;
    //styling masih kurrrrrs
    return (
        <div>
            <Container color="#FFFEF3;" >
                {isMobile?<Container type="image" height="100px">
                    <Link href='/'><a><Image src={lunarreLogo} objectFit='contain' layout="fill"/></a></Link>
                </Container>:null}
                <Container type="flex" align-items="center" direction="column">
                    {
                       data.map(
                        ({val,href})=>{
                            return (
                                <Container key={val} padding="0 1rem 0 1rem" radius="32.04px" margin={"0 0 0.5rem ".concat( isMobile?"5%":"25%")} width={isMobile?"90%":"50%"} color="#2A5947" >
                                    <Link href={href}>
                                        <a>
                                            <Text family="Helvetica neue" color="#FFFEF3" weight="bold" align="center" size="2.1rem">{val}</Text>
                                        </a>
                                    </Link>
                                </Container>
                            )
                        }
                       ) 
                    }
                </Container>
            </Container>
        </div>
    );
}

export default Linktree;