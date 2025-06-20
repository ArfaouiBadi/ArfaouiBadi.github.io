interface CardWorkProps {
  images?: string[];
  title: string;
  description: string;
  technologies: string[];
  comingSoon: boolean;
  onClick: () => void;
}

const CardWork: React.FC<CardWorkProps> = ({
  images,
  title,
  description,
  technologies,
  comingSoon,
  onClick,
}) => {
  const hasImages = images && images.length > 0;

  return (
    <div
      onClick={onClick}
      className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
    >
      <div
        className="relative h-56 bg-cover bg-center"
        style={{ backgroundImage: hasImages ? `url(${images[0]})` : "none" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          {hasImages && images[0] ? (
            <img
              src={images[0]}
              alt={title}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-500">No Image</span>
            </div>
          )}
        </div>
        {comingSoon && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            SOON
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-zinc-200 mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 h-10">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="py-1 px-3 text-xs rounded-full bg-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardWork;
