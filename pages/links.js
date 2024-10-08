import { Container } from "../shared/container";
import { Text } from "../shared/text";
import lunarreLogo from "../assets/lunarre-logo-2.svg";
import Link from "next/link"
import Image from "next/image";

const Linktree = (props) => {
    const data = [
        {val:"Location" , href : "https://goo.gl/maps/icsHcd4fPMDo7EuN7"},
        //mungkin perlu diubah
        {val:"Menu" , href : "/menu"},
        {val:"Instagram" , href : "https://www.instagram.com/lunarre.jkt/"},
        {val:"Tiktok" , href : "http://www.tiktok.com/@lunarre.jkt"}
    ]
    const { isMobile } = props
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
                                <Container key={val} padding="0 1rem 0 1rem" radius="15px" margin={"0 0 0.5rem ".concat( isMobile?"5%":"15%")} width={isMobile?"90%":"70%"} color="#2A5947" >
                                    <Link href={href}>
                                        <a target={val==="Menu"?"":"_blank"}>
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