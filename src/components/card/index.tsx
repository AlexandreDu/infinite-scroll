import type { CardProps } from '../../types';
import { forwardRef } from 'react';
import * as Styled from './styles';
import { User } from '../user';
import { Image } from '../images';
import { useTheme } from 'styled-components';
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { userImages, username, description, images },
  ref
) {
  const theme = useTheme();
  const imageSrc = images.small;
  const imageSrcSet = `${images.thumb} 200w, ${images.small} 400w, ${images.regular} 1080w`;
  const imageSizes = `(min-width: ${theme.breakpoints.lg}) 30vw, (min-width: ${theme.breakpoints.sm}) 40vw, 100vw`;
  return (
    <Styled.Card ref={ref}>
      <User images={userImages} name={username} />
      <Image
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={imageSizes}
        alt={description}
      />
    </Styled.Card>
  );
});
