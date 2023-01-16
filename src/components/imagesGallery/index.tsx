import type { ImagesGalleryProps } from '../../types';

import { forwardRef } from 'react';
import * as Styled from './styles';
import { Card } from '../card';

export const ImagesGallery = forwardRef<HTMLDivElement, ImagesGalleryProps>(
  function ImagesGallery({ list, hasMore }, ref) {
    return (
      <>
        <Styled.ImagesGallery>
          {list.map(({ description, urls, id, user }, index) => {
            let refProp = {};

            if (index === list.length - 1 && hasMore) refProp = { ref: ref };
            return (
              <Card
                {...refProp}
                key={id}
                description={description}
                images={urls}
                userImages={user.profile_image}
                username={user.name}
              />
            );
          })}
        </Styled.ImagesGallery>
      </>
    );
  }
);
