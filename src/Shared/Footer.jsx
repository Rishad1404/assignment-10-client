import logo from '../../public/Logo.png'
const Footer = () => {
	return (
		<footer className="p-10 bg-base-200 text-base-content my-10">
			<div className='footer container mx-auto'>
				<aside>
					<img className='w-auto h-20' src={logo} alt="" />
					<p className='font-semibold'>Lumina Art & Craft store<br />Providing reliable tech since 1992</p>
				</aside>
				<nav>
					<h6 className="text-xl font-bold">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<h6 className="text-xl font-bold">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<h6 className="text-xl font-bold">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</div>
			<div className="py-6 text-sm font-medium text-center">© Lumina Art & Craft. All rights reserved.</div>
		</footer>

	);
};

export default Footer;