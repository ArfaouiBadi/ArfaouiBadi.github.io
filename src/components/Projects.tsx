import { projects } from "@/constants";
import CardWork from "./CardWork";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  longDescription?: string[];
  images: string[] | undefined;
  technologies: string[];
  comingSoon: boolean;
  github: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add a delay to allow the fade-out animation to finish
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentImageIndex(0);
    }, 300);
  };

  const nextImage = () => {
    const images = selectedProject?.images;
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    const images = selectedProject?.images;
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">
          Featured Projects
        </h1>
        <p
          className="text-zinc-400 text-lg max-w-3xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Here are some of the projects I'm proud to have worked on. Each one
          represents a unique challenge and a learning opportunity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project, index: number) => (
          <CardWork
            key={index}
            onClick={() => handleCardClick(project)}
            images={project.images}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            comingSoon={project.comingSoon}
          />
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative bg-zinc-900 text-white rounded-2xl shadow-2xl max-w-4xl w-full m-4 animate-scaleIn max-h-[90vh] overflow-y-auto modal-scroll"
            style={{ boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-zinc-500 hover:text-accent transition-transform duration-200 hover:rotate-90 z-10"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="text-3xl font-extrabold mb-2 text-accent drop-shadow">
                  {selectedProject.title}
                </h2>

                {/* Long Description */}
                {selectedProject.longDescription && (
                  <div className="mb-6">
                    {selectedProject.longDescription.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-3 text-zinc-400 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Short Description as fallback */}
                {!selectedProject.longDescription && (
                  <p className="mb-6 text-zinc-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-zinc-200 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="py-1 px-3 text-sm rounded-full bg-zinc-800 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg shadow hover:bg-accent/90 transition font-semibold"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.343-3.361-1.343-.453-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.606.069-.606 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.35-1.083.635-1.33-2.22-.253-4.555-1.113-4.555-4.942 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.024A9.548 9.548 0 0112 6.835c.85.009 1.7.114 2.492.336 1.909-1.293 2.748-1.024 2.748-1.024.546 1.375.203 2.392.1 2.645.64.698 1.028 1.591 1.028 2.682 0 3.838-2.338 4.686-4.564 4.935.359.308.675.92.675 1.855 0 1.336-.012 2.415-.012 2.741 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>

              {/* Image Carousel */}
              <div className="bg-zinc-800 rounded-r-2xl overflow-hidden relative aspect-square">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-full object-contain carousel-image"
                    />

                    {/* Carousel Navigation */}
                    {selectedProject.images.length > 1 && (
                      <>
                        {/* Previous Button */}
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                          aria-label="Previous image"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        {/* Next Button */}
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                          aria-label="Next image"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                index === currentImageIndex
                                  ? "bg-white"
                                  : "bg-white/50 hover:bg-white/75"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>

                        {/* Image Counter */}
                        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                          {currentImageIndex + 1} /{" "}
                          {selectedProject.images.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-500">
                    <span>No images available</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
