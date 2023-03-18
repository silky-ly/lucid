import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap-trial/all';
import './style.css';

export const WhoAmI = () => {
	gsap.registerPlugin(ScrollTrigger, SplitText);

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

			// Setting up the animation
			quote.anim = gsap.from(quote.split.chars, {
				scrollTrigger: {
					trigger: quote,
					toggleActions: 'restart pause resume reverse',
					start: 'top 75%',
				},
				duration: 0.6,
				ease: 'circ.out',
				y: 80,
				stagger: 0.02,
			});
		});
	};

	useEffect(() => {
		ScrollTrigger.addEventListener('refresh', setupSplits);
		setupSplits();
	}, []);

	return (
		<>
			<section className='one'>
				<h3 className='quote font-clash font-bold text-6xl capitalize'>
					SOFTWARE ENGINEER who finds fulfilment in building scalable
					and optimized web apps. SOFTWARE ENGINEER who finds
					fulfilment in building scalable and optimized web apps.
				</h3>
			</section>
		</>
	);
};



