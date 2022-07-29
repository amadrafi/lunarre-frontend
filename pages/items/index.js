import { Container } from "../../shared/container";
import { Text } from "../../shared/text"

export const getStaticProps = async () => {
    
    const res = await fetch('https://lunarrebackend.herokuapp.com/v1/menu/');
    const data = await res.json();

    return{
        props: {item: data}
    }
}

const Item = ({item}) => {
    return(
        <>
            <h1>{item.map(item =>  (
                <div key={item.id}>
                    <Text type='h1' color='black'>{item.name}</Text>
                </div>
            ))}</h1>
        </>
    );
}

export default Item