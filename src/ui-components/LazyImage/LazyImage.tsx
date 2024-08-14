import { Effect, LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export type LazyImageProps = {
  alt: string;
  height: string;
  src: string;
  width: string;
  caption?: string;
  effect?: Effect;
};

export const LazyImage = ({
  caption,
  effect = "blur",
  ...rest
}: LazyImageProps) => {
  return (
    <div>
      <LazyLoadImage effect={effect} {...rest} />
      {caption ? <span>{caption}</span> : null}
    </div>
  );
};
