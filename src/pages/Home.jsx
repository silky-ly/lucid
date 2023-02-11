import React from 'react';
import Layout from '../layouts/Layout';
import Projects from './Projects';

const Home = () => {
	return (
		<Layout>
			<div className='home h-screen' id='home'>
				{/* <div className='home-overlay'></div> */}

				<div className='home-page'>
					<section className='w-screen h-screen relative'>
						<p className='absolute top-48 left-56 h-16 w-2/5 font-clash text-3xl font-semibold truncate'>
							<q>A versatile Front-End Engineer.</q>
						</p>

						<div
							className='absolute h-screen border-l-0.5 border-solid border-black'
							style={{
								left: '65%',
								top: '0',
							}}
						></div>

						<div
							className='absolute border-b-0.5 border-solid border-black'
							style={{ width: '65vw', top: '50%' }}
						></div>

						<div className='absolute bottom-12 right-12'>
							<a
								href=''
								className='align-middle text-black text-sm font-semibold tracking-widest uppercase no-underline cursor-pointer'
							>
								view projects{' '}
								<svg
									className='inline align-middle'
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 24 24'
								>
									<path
										className='inline'
										fill='currentColor'
										d='M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z'
									/>
								</svg>
							</a>
						</div>
					</section>
				</div>
			</div>

			<Projects />
		</Layout>
	);
};

export default Home;
