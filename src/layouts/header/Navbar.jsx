const Navbar = () => {
	return (
		<nav className='nav w-full py-2.5 px-12 flex justify-between items-center transition duration-500 border border-solid relative'>
			<div className='nav-logo w-2/5'>
				<a
					href=''
					className='text-black font-clash text-3xl font-medium capitalize no-underline'
				>
					tortuga
				</a>
			</div>

			{/* <div className='navlinks flex flex-col justify-center sidebar w-1/12 absolute top-24 right-96 text-start bg-sky-400'>
				<a
					href=''
					className='navlink block w-20 relative bg-purple-800 mb-4 text-black uppercase text-xs no-underline tracking-wider cursor-pointer'
				>
					about
				</a>

				<a
					href=''
					className='navlink block w-20 relative bg-purple-800 mb-4 text-black uppercase text-xs no-underline tracking-wider cursor-pointer'
				>
					projects
				</a>

				<a
					href=''
					className='navlink block w-20 relative bg-purple-800 mb-4 text-black uppercase text-xs no-underline tracking-wider cursor-pointer'
				>
					contact
				</a>
			</div> */}
		</nav>
	);
};

export default Navbar;
