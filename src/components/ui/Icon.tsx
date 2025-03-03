type IconProps = {
    src: string;
    alt?: string;
    className?: string;
  };
  
  const Icon: React.FC<IconProps> = ({ src, alt = "icon", className = "size-5" }) => {
    return <img src={src} alt={alt} className={className} />;
  };


export default Icon;