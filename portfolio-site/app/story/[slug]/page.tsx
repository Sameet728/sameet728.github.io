import { notFound } from "next/navigation";
import { stories } from "@/lib/data/stories";
import StoryPageTemplate from "@/components/ui/StoryPageTemplate";

// Generate static pages at build time
export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for each story page
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const story = stories.find((s) => s.slug === resolvedParams.slug);
  
  if (!story) return { title: "Story Not Found" };

  return {
    title: `${story.title} | Sameet's Journey`,
    description: story.overview.substring(0, 160) + "...",
  };
}

export default async function StoryPage({ params }: Props) {
  const resolvedParams = await params;
  const story = stories.find((s) => s.slug === resolvedParams.slug);

  if (!story) {
    notFound();
  }

  return <StoryPageTemplate key={story.slug} story={story} />;
}
