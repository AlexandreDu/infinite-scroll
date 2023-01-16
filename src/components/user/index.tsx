import type { UserProps } from '../../types';

import * as Styled from './styles';
import { Avatar } from '../avatar';

export function User({ images, name }: UserProps) {
  const srcSet = `${images.small} 32w, ${images.medium} 64w, ${images.large} 128w`;
  const sizes = `48px`;
  return (
    <Styled.User>
      <Avatar src={images.small} srcSet={srcSet} sizes={sizes} alt={name} />
      <Styled.UserTitle>{name}</Styled.UserTitle>
    </Styled.User>
  );
}
