import { useEffect } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
	let width = 0;

	useEffect(() => {
		gsap.set('.project-preview', { width: width });

		const tl = gsap.timeline();

		const handleMouseOver = () => {
			tl.to('.project-preview', {
				duration: 1,
				width: '400px',
				ease: 'power4.out',
			});
		};

		const handleMouseOut = () => {
			tl.to('.project-preview', {
				duration: 0.5,
				width: 0,
				ease: 'power4.out',
			});
		};

		const cbox = document.querySelectorAll('.project-item');

		for (let i = 0; i < cbox.length; i++) {
			cbox[i].addEventListener('mouseover', handleMouseOver);
		}

		for (let i = 0; i < cbox.length; i++) {
			cbox[i].addEventListener('mouseout', handleMouseOut);
		}

		return () => {
			for (let i = 0; i < cbox.length; i++) {
				cbox[i].removeEventListener('mouseover', handleMouseOver);
			}

			for (let i = 0; i < cbox.length; i++) {
				cbox[i].removeEventListener('mouseout', handleMouseOut);
			}
		};
	}, [width]);

	const handleNavigationLinkHover = (imageUrl) => {
		const projectPreview = document.querySelector('.project-preview');
		projectPreview.style.backgroundImage = `url(${imageUrl})`;
	};

	return (
		<div className='projects h-screen pt-16 px-12' id='projects'>
			<div className='project mt-12'>
				<h4 className='project-heading relative inline-block text-4xl font-clash font-bold text-black uppercase'>
					Interesting Projects{' '}
					<span className='block absolute -bottom-1 left-0 h-1 w-24 bg-black transition-width duration-900'></span>
				</h4>

				<section className='project-section mt-8 h-auto flex'>
					<ul className='project-list list-none mt-0 w-2/4'>
						<li
							className='project-item block my-12 mx-0 select-none'
							onMouseOver={() =>
								handleNavigationLinkHover(
									'https://images.unsplash.com/photo-1591785923391-1f2d344b12b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
								)
							}
						>
							<a
								href='l'
								className='project-link text-8xl font-clash font-bold text-black uppercase no-underline'
							>
								<span
									data-text='shop daisy'
									className='relative block'
								>
									shop daisy
								</span>
							</a>
						</li>
						<li
							className='project-item block my-12 mx-0 select-none'
							onMouseOver={() =>
								handleNavigationLinkHover(
									'https://images.unsplash.com/photo-1591785923391-1f2d344b12b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
								)
							}
						>
							<a
								href='l'
								className='project-link text-8xl font-clash font-bold text-black uppercase no-underline'
							>
								<span
									data-text='shop daisy'
									className='relative block'
								>
									shop daisy
								</span>
							</a>
						</li>
					</ul>

					<div className='project-wrapper w-2/4 h-auto bg-indigo-600'>
						{/* <div className='project-preview fixed w-0 bg-pink-700 bg-cover bg-no-repeat bg-top overflow-hidden'></div> */}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Projects;
