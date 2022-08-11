import React from 'react';
import { Text } from '../shared/text';
import { Container } from '../shared/container';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const GridMenu = () => {

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
		return categories
	}

	return (
		<Tabs>
			<TabList>
				<Container type='grid' column='1fr 1fr 1fr 1fr 1fr' justify='center' padding='0 5vw'>
					{Object.keys(renderMenu()).map((key) => {
						return (
							<Tab key={key}>
								<Text color='black' family='Helvetica neue' weight='400' spacing='4px' size='1em' align='center'>{key}</Text>
							</Tab>
						);
					})}
				</Container>
			</TabList>
			
			<Container padding='0 10vw' height='100vh'>
				<TabPanel>
					<Text type='h3'>Any content 1</Text>
				</TabPanel>
				<TabPanel>
					<Text type='h3'>Any content 2</Text>
				</TabPanel>
				<TabPanel>
					<Text type='h3'>Any content 3</Text>
				</TabPanel>
				<TabPanel>
					<Text type='h3'>Any content 4</Text>
				</TabPanel>
			</Container>
		</Tabs>

	);
}

export default GridMenu