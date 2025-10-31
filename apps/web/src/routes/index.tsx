import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="flex h-full min-h-screen items-center justify-center relative px-4 py-8">
			<div className="text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
					mnasrullah.com
				</h1>
			</div>

			<Link
				to="/ask-me-anything"
				className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-primary text-primary-foreground p-3 sm:p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200 z-10"
				aria-label="Ask me anything"
			>
				<MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
			</Link>
		</div>
	);
}
