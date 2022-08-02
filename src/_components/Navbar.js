import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
function Navbar(props) {
	const [active,setActive] = React.useState(false); 
	const [Xsize, setXSize] = React.useState(window.innerWidth);
	const links = props.links.map((item, id) => {
		return (
			<button className=" p-2 text-slate-200 text-left" key={id}>
				{/* {item.path} */}
				<Link onClick={()=>toggleMenu()} to={`${item.path}`} className="block z-50 font-inter-normal">{item.title}</Link>
			</button>
		);
	});
	React.useEffect(() => {
		const handleResize = () => {
				setXSize(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		// Clean up!
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	function toggleMenu(){
		setActive(old=>!old);
	}


	return (
		<div className="bg-cyan-900 absolute top-0 left-0 w-full flex flex-col sm:flex-row text-slate-200 px-4 py-3">
			<h3 className="font-inter-bold text-2xl mr-auto flex sm:block justify-between w-full">
				Games 0o0
				<button className={`p-2  transition-all ${Xsize > 640&&'hidden'}`} onClick={toggleMenu}>
					{active&&<XIcon className="w-6" />}
					{!active&&<MenuIcon className="w-6" />}
				</button>
			</h3>
			<nav className={`flex flex-col sm:flex-row transition-all ${(Xsize<640&&!active)&&'hidden'}`}>{links}</nav>
		</div>
	);
}

export default Navbar;
