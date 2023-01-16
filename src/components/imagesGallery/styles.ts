import styled from 'styled-components';
import { Card as StyledCard } from '../card/styles';
import { ImageWrapper as StyledImageWrapper } from '../images/styles';
import { Image as StyledImage } from '../images/styles';
export const ImagesGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1%;
  ${StyledCard} ${StyledImageWrapper} {
    display: flex;
    flex-grow: 1;
  }
  ${StyledCard} ${StyledImage} {
    flex-grow: 1;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${StyledCard} {
      flex-basis: 49.5%;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${StyledCard} {
      flex-basis: 32.5%;
    }
  }
`;
