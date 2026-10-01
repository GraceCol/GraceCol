type GalleryImageProps = {
  src: string;
  alt: string;
};

export default function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt={alt}
        className="h-40 w-full rounded-lg object-cover shadow transition-transform duration-200 hover:scale-105"
      />
    </a>
  );
}
