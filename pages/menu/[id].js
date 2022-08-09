import Image from "next/image"
import { Container } from "../../shared/container"
import { Text } from "../../shared/text"

export const getStaticPaths = async () => {
  const res = await fetch('https://lunarrebackend.herokuapp.com/v1/menu/')
  const data = await res.json()

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch('https://lunarrebackend.herokuapp.com/v1/menu/' + id)
  const data = await res.json()

  return {
    props: {
      item: data
    }
  }
}

const Details = ({ item }) => {
  console.log(item)
  return (
    <Container type="flex" padding="3.5em">
      <Container type="image">
        <Image src={item[0].main_pic} objectFit="contain" layout="fill"/>
      </Container>
      <Text>{item[0].name}</Text>
    </Container>
  )
}

export default Details;