import { Container } from "../shared/container";
import Carousel from "../components/carousel";
import NewArrivals from "../components/newArrivals";

export default function Home(props) {
  // const {isMobile,winSize} = props;
  return (
    <>
      <Container color="none">
        <Carousel {...props}/>
        <NewArrivals {...props} />
      </Container>
    </>
  )
}
