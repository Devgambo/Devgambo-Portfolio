'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Github, Globe, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { getProjectById } from '@/data/projects';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  const params = useParams();
  const [project, setProject] = useState<ReturnType<typeof getProjectById>>(undefined);

  useEffect(() => {
    if (params?.id) {
      const foundProject = getProjectById(params.id as string);
      setProject(foundProject);
    }
  }, [params]);

  if (project === undefined) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-pink-500/30 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60 font-audiowide">Loading...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-audiowide text-white mb-4">Project Not Found</h1>
          <Link
            href="/#projects"
            className="text-pink-400 hover:text-pink-300 font-audiowide"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <div className="relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-audiowide"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>

          {/* Project Image */}
          <div className="mb-8 relative overflow-hidden rounded-2xl">
            <Image
              src={project.imageSrc}
              alt={`${project.title} Preview`}
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover bg-gray-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h1>
                <div className="flex items-center gap-4 text-white/60 text-sm font-audiowide">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-pink-500/60" />
                    <span>{project.year}</span>
                  </div>
                  <div className="font-audiowide inline-block px-3 py-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 hover:border-pink-500/50 rounded-lg text-white hover:text-pink-400 transition-all duration-300 font-audiowide text-sm"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                {project.liveUrl && project.liveUrl !== project.githubUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg text-white transition-all duration-300 font-audiowide text-sm"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="mb-8 backdrop-blur-md rounded-xl border border-white/20 p-6 md:p-8 bg-black/20">
            <h2 className="text-xl font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About This Project
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg font-audiowide">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="backdrop-blur-md rounded-xl border border-white/20 p-6 md:p-8 bg-black/20">
            <h2 className="text-xl font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-black/40 text-white backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-pink-500/50 transition-colors hover:bg-black/50 font-audiowide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

