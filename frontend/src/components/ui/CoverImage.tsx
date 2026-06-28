import Image from 'next/image';

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/** Parent must be `position: relative` with explicit width/height or aspect-ratio. */
export function CoverImage({
  src,
  alt,
  className = '',
  imageClassName = 'object-cover',
  priority = false,
  sizes = '100vw',
}: CoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={[imageClassName, className].filter(Boolean).join(' ')}
    />
  );
}
