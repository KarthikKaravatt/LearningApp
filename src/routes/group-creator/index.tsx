import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/group-creator/")({
	component: GroupCreator,
});

function GroupCreator() {
	return <div>Hello "/group-creator/"!</div>;
}
