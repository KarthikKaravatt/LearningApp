import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
	component: Login,
});

//TODO:Replace with a form
//TODO:Some sort of authentication
function Login() {
	return (
		<div className=" flex w-screen h-screen items-center justify-center">
			<div className="grid grid-cols-1 gird-rows-4 w-sm h-1/6">
				<label className=" text-sm" htmlFor="email">
					Email:
				</label>
				<input
					className="border border-gray-500 p-1 rounded-sm bg-gray-100"
					type="email"
					id="email"
					placeholder="example@school.com"
				/>

				<label className=" text-sm" htmlFor="email">
					Password:
				</label>
				<input
					type="password"
					className="border border-gray-500 p-1 rounded-sm bg-gray-100"
					id="password"
				/>
				<Link
					className="border-1 my-4 bg-black text-white text-center rounded p-1 justify-center"
					to="/profile"
				>
					<button type="submit">Login</button>
				</Link>
			</div>
		</div>
	);
}
