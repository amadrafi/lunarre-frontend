import { Container } from "../../shared/container";
import { Text } from "../../shared/text";
import { motion } from 'framer-motion';
import Navbar from "../../components/navbar";
import Image from 'next/image';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { render } from "react-dom";

// Guide to print Menu
// 1. each li is set in a function called MenuItem but it must be a child of ul
// 2. there are two props, 1: itemName, 2:link
// 3. itemName describes the name of the drink
// 4. link is supposed to be a link for the pop up page

export default function Menu(props) {
  // function to render the menu from heroku
  function renderMenu() {
    let categories = {
      COFFEE: {
        "id":"1",
        "category": "coffee", 
        "items":[]
      },
      "NON COFFEE": {
        "id":"2",
        "category": "nonCoffee",
        "items":[] 
      },
      MOCKTAIL: {
        "id":"3",
        "category": "mocktail",
        "items":[] 
      },
      TEA: {
        "id":"4",
        "category": "tea",
        "items":[] 
      }
    }
    const data = props.items

    // mapping heroku to const categories 
    Object.keys(data).map((index) => {
      if (data[index].category === "Coffee") {
        categories.COFFEE.items.push(data[index])
      } else if (data[index].category === "Non Coffee") {
        categories["NON COFFEE"].items.push(data[index])
      } else if (data[index].category === "Tea") {
        categories.TEA.items.push(data[index])
      } else {
        categories.MOCKTAIL.items.push(data[index])
      }
    })
    
    return categories
  }

  function MenuItem(props) {
    var page = "menu/" + props.link
    return (
      <li>
        <motion.div style={{opacity: 0.4}} whileHover={{opacity: 1}}>
          <Text family='Helvetica neue' size='1em' spacing='2px' weight='400' margin='0 0 1.2em 0' >
            <Link href={page}>
              <a>{props.itemName}</a>
            </Link>
          </Text>
        </motion.div>
      </li>
    )
  }
  
  return (
    <>
      <Container type='grid' column='2fr 3fr 3fr 3fr 3fr' margin='8vw 10vw'>
        <Container type='flex' align='center'>
          <Text family='Antic didone' size='3vw'>Shop All</Text>
        </Container>
        {Object.keys(renderMenu())?.map((key) => {
          return (
            <Container key={key} align='center' type='inline' padding='0 0 0 6em'>
              <Text family='Helvetica neue' size='1em' spacing='4px' weight='500' margin='0 0 2em 0'>{key}</Text>
              <ul>
                {renderMenu()[key].items.map((menuDetails) => {
                  return(
                    <MenuItem key={key} itemName={menuDetails.name} link={menuDetails.id} />
                  )
                })}
              </ul>
            </Container>
          )})
        }
      </Container>
      
      <Container>
        <Tabs selectedTabClassName="selectedTab">
          <TabList>
            <Container type='grid' column='1fr 1fr 1fr 1fr 1fr' justify='center' width='100vw' padding='0 5vw'>
              {Object.keys(renderMenu()).map((key) => {
                return (
                  <Tab key={key} style={{cursor: 'pointer'}} className='unselectedTab' whileHover={{opacity: 1}}>
                    <Text color='black' family='Helvetica neue' weight='400' spacing='4px' size='1.4em' align='center'>{key}</Text>
                  </Tab>
                );
              })}
            </Container>
          </TabList>

            {Object.keys(renderMenu()).map((key) => {
              return (
                <TabPanel key={key}>
                  <Container padding='0 10vw' type='grid' column='1fr 1fr 1fr'>
                    {renderMenu()[key].items.map((menuDetails) => {
                      return (
                        <Container height='30em' margin='2em' key={menuDetails.id}>
                          <Container type='image' color='#9D8B5E' height='100%'>
                            <Link href={"menu/" + menuDetails.id}>
                              <a className="menu-container">
                                <Image src={menuDetails.main_pic} objectFit="cover" layout="fill" alt="arrow-button.svg"/>
                                <div className='overlay-menu'>
                                  <Container justify='center' padding='60% 5% 0 5%'>
                                    <Text color='black' family='Helvetica neue' weight='400' margin='0 0 1em 0' align='center' size='1.2em' transform='uppercase' spacing='4px'>
                                      {menuDetails.name}
                                    </Text>
                                    <Text color='black' family='Helvetica neue' weight='500' margin='0 0 1em 0' align='center' size='1.5em' transform='uppercase' spacing='4px'>
                                      {menuDetails.price}K
                                    </Text>
                                  </Container>
                                </div>
                              </a>
                            </Link>
                          </Container>
                        </Container>
                      );
                    })}
                  </Container>
                </TabPanel>
              );
            })}
        </Tabs>
      </Container>

      <Container width='100vw' height='50vh'>

      </Container>
    </>
  )
  
  
}

export async function getStaticProps() {
  const res = await fetch('https://lunarrebackend.herokuapp.com/v1/menu/')
  const items = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      items,
    },
  }
}