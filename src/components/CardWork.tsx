interface CardWorkProps {
  images: string[];
  title: string;
  description: string;
  isHovered: boolean;
  comingSoon: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CardWork: React.FC<CardWorkProps> = ({ images, title, description, isHovered,comingSoon, onMouseEnter, onMouseLeave }) => {
    return (
    <div className={`col-span-2 md:col-span-1 cardWork ${isHovered ? 'hovered' : ''} ${comingSoon ? 'hoveredComingSoon' : ''}`}>
      <div className="bgWork" style={{ backgroundImage: `url(${images[0]})` }}>
        
      <img 
        src={images[1]} 
        alt={title} 
        className="imageWork"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {(comingSoon) && <div className={`comingSoon`}>Coming Soon !</div>} 
      </div>
      <div className="descWork">{description}</div>
      <div className="titleWork">{title}</div>
    </div>
    
  );
};

export default CardWork;