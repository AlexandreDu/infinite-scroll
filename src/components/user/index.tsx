import type { UserProps } from '../../types';

import * as Styled from './styles';
import { useTheme } from 'styled-components';
import { Avatar } from '../avatar';

export function User({ images, name }: UserProps) {
  const theme = useTheme();

  const srcSet = `${images.small} 32w, ${images.medium} 64w, ${images.large} 128w`;
  const sizes = `(min-width: ${theme.breakpoints.lg}) 128vw, (min-width: ${theme.breakpoints.sm}) 64vw, 32vw`;
  return (
    <Styled.User>
      <Avatar src={images.small} srcSet={srcSet} sizes={sizes} alt={name} />
      <span>{name}</span>
    </Styled.User>
  );
}
