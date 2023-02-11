import React from 'react';

const Navbar = () => {
	return (
		<nav className='nav w-full py-2.5 px-12 flex justify-between items-center transition duration-500 '>
			<div className='nav-logo w-2/5'>
				<a
					href=''
					className='text-black font-clash text-3xl font-medium capitalize no-underline'
				>
					tortuga
				</a>
			</div>

			<div className='nav-links sidebar w-2/5'>
				<div className='navlinks flex justify-around items-center'>
					<a
						href=''
						className='navlink block relative w-20 m-auto text-black text-center uppercase text-xs no-underline tracking-wider cursor-pointer'
					>
						about
					</a>

					<a
						href=''
						className='navlink block relative w-20 m-auto text-black text-center uppercase text-xs no-underline tracking-wider cursor-pointer'
					>
						projects
					</a>
				</div>
			</div>

			<div className='nav-contact'>
				<a
					href=''
					className='navlink block relative w-20 m-auto text-black text-center uppercase text-xs no-underline tracking-wider cursor-pointer'
				>
					contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
