import type { AvatarProps } from '../../types';

import * as Styled from './styles';
import { Image } from '../images';
export function Avatar({ src, srcSet, sizes, alt }: AvatarProps) {
  return (
    <Styled.AvatarWrapper>
      <Image src={src} srcSet={srcSet} sizes={sizes} alt={alt} />
    </Styled.AvatarWrapper>
  );
}
