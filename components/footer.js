import { Container } from '../shared/container';
import { Text } from '../shared/text';

export default function Footer(){
    return (
        <>
        <Container type='block' justify="center" padding='1.5em'>
            <Container opacity='0.6'>
                <Text align='center' size='0.8em' color='black'>Copyright &copy; Lunarre by Walking Drums 2022. All rights reserved</Text>
            </Container>
        </Container>
        </>
    );
}