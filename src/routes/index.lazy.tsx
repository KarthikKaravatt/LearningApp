import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<h1>Learning App</h1>
			<Link to="/login" className="active]:font-bold">
				Login
			</Link>
		</div>
	);
}
