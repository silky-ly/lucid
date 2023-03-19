import { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap-trial/all';

const Role = () => {
	gsap.registerPlugin(ScrollTrigger, SplitText);

	useEffect(() => {
		const quotes = document.querySelectorAll('.quote');

		const setupSplits = () => {
			quotes.forEach((quote) => {
				if (quote.anim) {
					quote.anim.progress(1).kill();
					quote.split.revert();
				}

				quote.split = new SplitText(quote, {
					type: 'lines,words,chars',
					linesClass: 'split-line',
				});

				quote.anim = gsap.from(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						toggleActions: 'restart pause resume reverse',
						start: 'top 80%',
					},
					duration: 0.8,
					ease: 'power4.out',
					y: 90,
					stagger: 0.01,
				});
			});
		};

		ScrollTrigger.addEventListener('refresh', setupSplits);
		setupSplits();
	}, []);

	return (
		<>
			<section className='one h-5/6 my-auto w-full p-16'>
				<h3 className='quote font-clash font-bold text-6xl capitalize leading-normal text-start text-slate-700 overflow-hidden'>
					SOFTWARE ENGINEER who finds fulfilment in building scalable
					and optimized web apps. SOFTWARE ENGINEER who finds
					fulfilment in building scalable and optimized web apps.
				</h3>
			</section>
		</>
	);
};

export default Role;
