const Contact = () => {
	return (
		<div className='contact h-screen relative' id='contact'>
			<p className='absolute top-16 left-12 h-1/5 w-1/6 font-clash'>
				<span className='mb-4 block uppercase text-xs font-semibold underline decoration-2 underline-offset-8'>
					contact
				</span>
				<div className='contact-social w-2/4 h-4/5 flex flex-col justify-between'>
					<a
						href='https://www.linkedin.com/faith-amiekhame'
						target='_blank'
						className='font-clash font-bold text-2xl capitalize cursor-pointer'
					>
						linkedIn
					</a>

					<a
						href='https://www.github.com/silky-ly'
						target='_blank'
						className='font-clash font-bold text-2xl capitalize cursor-pointer'
					>
						Github
					</a>

					<a
						href='https://www.twitter.com/daisy_sultry'
						target='_blank'
						className='font-clash font-bold text-2xl capitalize cursor-pointer'
					>
						Twitter
					</a>
				</div>
			</p>

			<div
				className='absolute h-2/4 border-l-0.5 border-solid border-black'
				style={{
					left: '33%',
					top: '0',
				}}
			></div>

			<div
				className='absolute h-2/4 border-l-0.5 border-solid border-black'
				style={{
					left: '66%',
					bottom: '0',
				}}
			></div>

			<div
				className='absolute border-b-0.5 border-solid border-black'
				style={{ width: '100vw', top: '50%' }}
			></div>
		</div>
	);
};

export default Contact;
