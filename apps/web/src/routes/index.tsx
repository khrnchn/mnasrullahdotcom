import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="flex h-full items-center justify-center">
			<h1 className="text-6xl font-bold tracking-tight text-foreground">
				mnasrullah.com
			</h1>
		</div>
	);
}
