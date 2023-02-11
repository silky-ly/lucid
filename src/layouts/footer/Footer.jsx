import React from 'react';

const Footer = () => {
	return (
		<footer className='footer w-full px-12 py-4 flex justify-between items-center border-t-0.5 border-solid border-black'>
			<div className='footer-social w-2/4 flex justify-between'>
				<a
					href='https://www.linkedin.com/faith-amiekhame'
                    target='_blank'
					className='font-clash font-bold text-3xl capitalize cursor-pointer'
				>
					ln
				</a>

				<a
					href='https://www.github.com/silky-ly'
                    target='_blank'
					className='font-clash font-bold text-3xl capitalize cursor-pointer'
				>
					gb
				</a>

				<a
					href='https://www.twitter.com/sultry_o'
                    target='_blank'
					className='font-clash font-bold text-3xl capitalize cursor-pointer'
				>
					tw
				</a>

				<a
					href='mailto: faithamiekhame@gmail.com'
                    target='_blank'
					className='font-clash font-bold text-3xl cursor-pointer'
				>
					<span className='footer_span'>
						faithamiekhame@gmail.com
					</span>
				</a>
			</div>

			<div className='footer-copyright text-xs text-right tracking-wide'>
				<p>&copy; 2023. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
