import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Send, User, MessageSquare, ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/ask-me-anything")({
	component: AskMeAnything,
});

function AskMeAnything() {
	const [question, setQuestion] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const maxCharacters = 300;
	const characterCount = question.length;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (question.trim().length < 3) {
			toast.error("Question must be at least 3 characters long");
			return;
		}

		setIsSubmitting(true);

		try {
			// Simulate API call - replace with actual submission logic
			await new Promise(resolve => setTimeout(resolve, 1000));

			setIsSubmitted(true);
			toast.success("Your question has been sent anonymously!");
			setQuestion("");

			// Reset submitted state after 3 seconds
			setTimeout(() => setIsSubmitted(false), 3000);
		} catch (error) {
			toast.error("Failed to send question. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.length <= maxCharacters) {
			setQuestion(e.target.value);
		}
	};

	if (isSubmitted) {
		return (
			<div className="flex h-full min-h-screen items-center justify-center p-4 sm:p-6 relative">
				{/* Back button */}
				<Link
					to="/"
					className="absolute top-6 left-6 sm:top-8 sm:left-8 text-foreground hover:text-foreground/80 transition-colors"
					aria-label="Back to home"
				>
					<ArrowLeft className="w-6 h-6" />
				</Link>

				<Card className="w-full max-w-sm sm:max-w-md">
					<CardContent className="pt-6 sm:pt-8">
						<div className="text-center">
							<div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
								<Send className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
							</div>
							<h2 className="text-xl sm:text-2xl font-bold mb-2">Question Sent!</h2>
							<p className="text-muted-foreground text-sm sm:text-base">Your anonymous question has been delivered successfully.</p>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="flex h-full min-h-screen items-center justify-center p-4 sm:p-6 relative">
			{/* Back button */}
			<Link
				to="/"
				className="absolute top-6 left-6 sm:top-8 sm:left-8 text-foreground hover:text-foreground/80 transition-colors"
				aria-label="Back to home"
			>
				<ArrowLeft className="w-6 h-6" />
			</Link>

			<Card className="w-full max-w-sm sm:max-w-md">
				<CardHeader className="text-center pb-4 sm:pb-6">
					<div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
						<User className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
					</div>
					<CardTitle className="text-xl sm:text-2xl font-bold">Ask Me Anything</CardTitle>
					<CardDescription className="mt-2 text-sm sm:text-base">
						Send anonymous questions to me
					</CardDescription>
				</CardHeader>

				<CardContent className="pt-0">
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="relative">
							<Textarea
								placeholder="What would you like to know?"
								value={question}
								onChange={handleQuestionChange}
								className="resize-none border-input focus:border-ring focus:ring-ring min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
								disabled={isSubmitting}
							/>
							<div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
								{characterCount}/{maxCharacters}
							</div>
						</div>

						<div className="flex items-center justify-center text-xs text-muted-foreground">
							<MessageSquare className="w-3 h-3 mr-1" />
							Questions are completely anonymous
						</div>

						<Button
							type="submit"
							className="w-full bg-background text-foreground font-semibold py-3 text-sm sm:text-base hover:bg-background/90 transition-colors border border-border"
							disabled={isSubmitting || question.trim().length < 3 || question.trim().length > maxCharacters}
						>
							{isSubmitting ? (
								<div className="flex items-center">
									<div className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin mr-2" />
									Sending...
								</div>
							) : (
								<div className="flex items-center">
									<Send className="w-4 h-4 mr-2" />
									Send Question
								</div>
							)}
						</Button>
					</form>

					<div className="mt-6 pt-4 border-t border-border">
						<p className="text-center text-xs text-muted-foreground">
							Be respectful and thoughtful with your questions
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}