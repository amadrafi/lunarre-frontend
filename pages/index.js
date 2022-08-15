import { Container } from "../shared/container";
import Carousel from "../components/carousel";
import NewArrivals from "../components/newArrivals";

export default function Home() {
  return (
    <>
      <Container color="none">
        <Carousel />
        <NewArrivals />
      </Container>
    </>
  )
}
