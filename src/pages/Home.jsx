import Layout from '../layouts/Layout';
import Contact from './Contact';
import Projects from './Projects';
import Role from './Role';

const Home = () => {
	return (
		<Layout>
			<div className='home h-screen relative' id='home'>
				<div className='home-page'>
					<section className='w-screen h-screen relative'>
						<p className='absolute top-36 left-56 h-16 w-2/5 font-clash'>
							<span className='block uppercase text-xs font-semibold underline decoration-2 underline-offset-8 mb-4'>
								bio
							</span>
							<q className='text-xs truncate'>
								A versatile Front-End Engineer who enjoys
								building mininalistic and optimized web
								applications.
							</q>
						</p>

						<div
							className='absolute h-screen border-l-0.5 border-solid border-black'
							style={{
								left: '66%',
								top: '0',
							}}
						></div>

						<div
							className='absolute border-b-0.5 border-solid border-black'
							style={{ width: '66vw', top: '50%' }}
						></div>

						<div
							className='absolute top-16 right-16 home-image w-1/4 h-3/4 bg-purple-700'
							id='content'
						>
							<img
								className='h-full object-cover'
								src='https://images.unsplash.com/photo-1504802318913-d3f9a487448c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
							/>
						</div>

						<div className='absolute bottom-16 right-12'>
							<a
								href='#projects'
								className='align-middle text-black text-xs font-semibold tracking-widest uppercase no-underline cursor-pointer'
							>
								get in touch{' '}
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
										fill-rule='evenodd'
										d='M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z'
										clip-rule='evenodd'
									/>
								</svg>
							</a>
						</div>
					</section>
				</div>
			</div>

			<Role />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default Home;
