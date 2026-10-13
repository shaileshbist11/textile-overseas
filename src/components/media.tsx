import Image from "next/image";
import { blurDataURL } from "@/lib/images";

type MediaProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  overlay?: boolean;
};

export function Media({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes,
  priority,
  objectPosition,
  overlay = false,
}: MediaProps) {
  return (
    <div className={`relative overflow-hidden bg-ink-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        className={`object-cover ${imgClassName}`}
        style={objectPosition ? { objectPosition } : undefined}
      />
      {overlay ? (
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/5"
        />
      ) : null}
    </div>
  );
}
