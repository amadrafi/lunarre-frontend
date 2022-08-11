import Image from "next/image"
import { Container } from "../../shared/container"
import { Text } from "../../shared/text"
import backArrow from "../../assets/long_left.svg"
import Link from "next/link"

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
  return (
    <Container type="flex" padding="3.5em" align="center">
      <Container type="image">
        <Image width={380} height={580} src={item[0].main_pic} alt="menu-item.jpeg" priority/>
      </Container>
      <Container type="flex" direction="column" margin="0 0 0 5em">
        <Link href="/menu">
          <a>
            <Container type="flex">
              <Container type="image" height="24px" width="24px" margin="0 0.5em 0 0">
                <Image src={backArrow} objectFit="contain" layout="fill" alt="default_coffee.jpeg" />
              </Container>
              <Text weight="bold" size="1.2rem" margin="0 0 0 0">Back To Menu</Text>
            </Container>
          </a>
        </Link>
        <Text spacing="4px" margin="2.2em 0 0 0" weight="bold" opacity="0.3" size="1.4rem" transform="uppercase">{item[0].category}</Text>
        <Text spacing="4px" weight="bold" margin="1em 0 0 0" size="1.4rem">{item[0].name}</Text>
        <Container margin="1.5em 0 1.5em 0" color="#2A5947" height="4px" width="50%"></Container>
        <Text size="1rem">{item[0].description}</Text>
        <Text spacing="4px" size="1.4rem" weight="bold" margin="1em 0 0 0">Rp{item[0].price}.000</Text>

      </Container>
    </Container>
  )
}

export default Details;