import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageTemplate from "@/components/ui/ProjectPageTemplate";
import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Sameet Pisal`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageTemplate key={project.slug} project={project} />;
}
