type GalleryImageProps = {
  href: string;
  src: string;
  alt: string;
};

export default function GalleryImage({ href, src, alt }: GalleryImageProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt={alt}
        className="h-40 w-full rounded-lg object-cover shadow transition-transform duration-200 hover:scale-105"
      />
    </a>
  );
}
