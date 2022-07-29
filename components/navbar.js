import Image from "next/image";
import { Container } from "../shared/container";
import { Text } from "../shared/text";
import lunarreLogo from "../assets/lunarre-logo.png";
import Link from "next/link";

const Navbar = () => {
    return (
    <Container type='grid' row='1fr' column='1fr 1fr 1fr 4fr 1fr 1fr 1fr' height='80px' padding='20px 2vw 20px 2vw'>
        <Container type='flex' align='center' justify='center'>
            <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href='/menu' ><a>SHOP</a></Link></Text>
        </Container>
        <Container type='flex' align='center' justify='center'>
            <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href='/' ><a>PROMO</a></Link></Text>
        </Container>
        <Container type='flex' align='center' justify='center'>
            <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href='/' ><a>NEWS</a></Link></Text>
        </Container>
        <Container type='flex' align='center' justify='center'>
            <Container type='image' height='80%' width='100%'>
                <Link href='/'><a><Image src={lunarreLogo} objectFit='contain' layout="fill"/></a></Link>
            </Container>
        </Container>
        <Container type='flex' align='center' justify='center'>
            <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href='/' ><a>LOCATIONS</a></Link></Text>
        </Container>
        <Container type='flex' align='center' justify='center'>
            <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href='/' ><a>LEARN</a></Link></Text>
        </Container>
        <Container type='flex' align='center' justify='center'>
            <Text family="Helvetica neue" size='0.75em' spacing='4px'><Link href='/' ><a>ABOUT US</a></Link></Text>
        </Container>
    </Container>
    )
}

export default Navbar