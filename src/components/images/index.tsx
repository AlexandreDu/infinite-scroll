import type { ImageProps } from '../../types';

import * as Styled from './styles';

export function Image({ src, srcSet, sizes, alt, ...otherProps }: ImageProps) {
  return (
    <Styled.ImageWrapper>
      <Styled.Image
        {...otherProps}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
      />
    </Styled.ImageWrapper>
  );
}
