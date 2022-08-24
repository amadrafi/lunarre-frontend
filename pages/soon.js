import Link from 'next/link'
import { Text } from "../shared/text";
import { Container } from "../shared/container";

const soon = () => {
    return (
        <>
             <Text weight="bold" family="Helvetica neue" color="black" 
                 align="center" size="2.1rem">
                    Coming Soon!!!
            </Text>
            <Container type="flex" color="#fffde4" align="center" justify="center" 
            width="50%" height="3rem" margin="0 25% 0 25%" 
            boxShadow="5px 5px 8px #888888;" radius="10px">
                <Link href="/">
                <a>
                    <Text align="center" size="1.5rem" >
                        Go back Home
                    </Text>
                </a>
                </Link>
            </Container>
        </>
    );
}

export default soon;