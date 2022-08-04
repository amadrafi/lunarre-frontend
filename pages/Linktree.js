import { Container } from "../shared/container";
import { Text } from "../shared/text";
import { motion } from 'framer-motion';
import lunarreLogo from "../assets/lunarre-logo.png";
import Navbar from "./components/navbar";
import Link from "next/link"
import Image from "next/image";


const Linktree = () => {
    const data = [
        {val:"Location" , href : "https://goo.gl/maps/icsHcd4fPMDo7EuN7"},
        //mungkin perlu diubah
        {val:"Menu" , href : "https://drive.google.com/file/d/1_9qy6uE1CsWJHEmZKOzRwgeBSJJKB3wS/view?usp=sharing"},
        {val:"Instagram" , href : "https://www.instagram.com/lunarre.jkt/"},
        {val:"Tiktok" , href : "http://www.tiktok.com/@lunarre.jkt"}
    ]
    //styling masih kurrrrrs
    return (
        <div>
            <Navbar/>
            <Container color="#FFFEF3;" >
                <Container type="image">
                    <Link href='/'><a><Image src={lunarreLogo} objectFit='contain' layout="fill"/></a></Link>
                </Container>
                <Container type="flex" align-items="center" direction="column">
                    {
                       data.map(
                        ({val,href})=>{
                            return (
                                <Container id={val} padding="0 1rem 0 1rem" radius="32.04px" margin="0 0 0.5rem 25%" width="50%" color="#2A5947" >
                                    <Link href={href}>
                                        <a>
                                            <Text color="#FFFEF3" weight="bold" align="center" size="2.1rem">{val}</Text>
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