/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Layout from '../components/Layout'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
export default function CarouselPage() {
	return (
		<Layout>
			<Carousel
				showArrows={true}
				// onChange={onChange}
				// onClickItem={onClickItem}
				// onClickThumb={onClickThumb}
			>
				<div>
					<img src='/1.jpg' />
					<p className='legend'>Legend 1</p>
				</div>
				<div>
					<img src='/1.jpg' />
					<p className='legend'>Legend 2</p>
				</div>
				<div>
					<img src='/1.jpg' />
					<p className='legend'>Legend 3</p>
				</div>
				<div>
					<img src='/1.jpg' />
					<p className='legend'>Legend 4</p>
				</div>
				<div>
					<img src='/1.jpg' />
					<p className='legend'>Legend 5</p>
				</div>
				<div>
					<img src='/1.jpg' />
					<p className='legend'>Legend 6</p>
				</div>
			</Carousel>
		</Layout>
	)
}
