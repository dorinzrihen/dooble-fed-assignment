import { TCircleImageProps } from './CircleImage.types';
import './CircleImage.css'

const CircleImage = ({ src, size = 50, alt }: TCircleImageProps) => {
  return (
    <img
      className='circleImage'
      style={{ width: `${size}px`, height: `${size}px`}}
      src={src}
      alt={alt}
    />
  );
};

export default CircleImage;
