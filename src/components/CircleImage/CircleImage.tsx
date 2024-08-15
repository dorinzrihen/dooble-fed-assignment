import { TCircleImage } from './CircleImage.types';

const CircleImage = ({ src, size = 50, alt }: TCircleImage) => {
  return (
    <img
      style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%' }}
      src={src}
      alt={alt}
    />
  );
};

export default CircleImage;
