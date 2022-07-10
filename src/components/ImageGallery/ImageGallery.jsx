import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';

export const ImageGallery = ({ data, toggle }) => {
  // console.log(data);
  return (
    <ImageGalleryBox>
      {data.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webImg={webformatURL}
            largeImg={largeImageURL}
            toggle={toggle}
          />
        );
      })}
    </ImageGalleryBox>
  );
};
