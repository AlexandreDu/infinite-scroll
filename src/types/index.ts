export type ThemeProviderProps = React.PropsWithChildren;

type UserImages = {
  small: string;
  medium: string;
  large: string;
};

type Images = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
};

export type Picture = {
  id: string;
  description: string;
  urls: Images;
  user: {
    name: string;
    profile_image: UserImages;
  };
};

export type ImageProps = {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
};

export type CardProps = {
  userImages: UserImages;
  username: string;
  description: string;
  images: Images;
};

export type UserProps = {
  images: UserImages;
  name: string;
};

export type AvatarProps = {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
};

export type ImagesGalleryProps = {
  list: Picture[];
  hasMore: boolean;
};

export type Pictures = Picture[];
