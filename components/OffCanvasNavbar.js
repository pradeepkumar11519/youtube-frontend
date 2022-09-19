import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import Context from "../context/context";

export default function OffCanvasNavbar() {
	const router = useRouter();
	const { openoffcanvas } = useContext(Context);
	return (
		<div className="transition-all fade-in-out md:hidden  z-[10]">
			<div
				id="offcanvas"
				className="bg-black absolute overflow-scroll  w-[200px] left-[-200px] z-[10] h-screen transition-all fade-in-out"
			>
				<div className="">
					<div className="m-3 justify-end flex">
						<AiFillCloseSquare
							onClick={openoffcanvas}
							className="invert bg-opacity-50 w-6 h-6"
						/>
					</div>
					<div>
						<ul>
							<hr />
							<hr />
							<hr />



							<li className="   my-5">
								<Link href="/">
									<a
										className={`${
											router.pathname === "/" ? "text-rose-500" : ""
										} flex justify-center text-xl transition-all fade-in-out  w-full h-full p-1 text-white`}
									>
										HOME
									</a>
								</Link>
							</li>



							<hr />
							<hr />
							<hr />



							<li className="   my-5">
								<Link href="/JoinUs">
									<a
										className={`${
											router.pathname === "/JoinUs" ? "text-rose-500" : ""
										} flex justify-center text-xl  transition-all fade-in-out  w-full h-full p-1 text-white`}
									>
										JOIN US
									</a>
								</Link>
							</li>



							<hr />
							<hr />
							<hr />



							<li className="my-5 text-xl ">
								<Link href="/Videos">
									<a
										className={`text-white ${
											router.pathname === "/Videos" ? "text-rose-500" : ""
										} flex justify-center`}
									>
										VIDEOS
									</a>
								</Link>
							</li>



							<hr />
							<hr />
							<hr />



							<li className="my-5 text-xl ">
								<Link href="/Shop">
									<a
										className={`text-white ${
											router.pathname === "/Shop" ? "text-rose-500" : ""
										} flex justify-center`}
									>
										SHOP
									</a>
								</Link>
							</li>



							<hr />
							<hr />
							<hr />



							<li className="my-5 text-xl ">
								<Link href="/ChatRoom">
									<a
										className={`text-white ${
											router.pathname === "/ChatRoom" ? "text-rose-500" : ""
										} flex justify-center`}
									>
										CHATROOM
									</a>
								</Link>
							</li>



							<hr />
							<hr />
							<hr />



							<li className="my-5">
								<Link href="#">
									<a className="text-xl flex justify-center transition-all fade-in-out  w-full h-full p-1 text-white">
										LOGOUT
									</a>
								</Link>
							</li>



						</ul>



					</div>



					
				</div>




			</div>


			<style jsx>{``}</style>
		</div>
	);
}
