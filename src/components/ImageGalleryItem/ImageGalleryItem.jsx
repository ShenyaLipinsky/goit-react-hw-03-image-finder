import propTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryImgStyled,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    modalHidden: true,
  };

  static propTypes = {
    webImg: propTypes.string.isRequired,
    largeImg: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  };

  toggleModal = () => {
    this.setState(({ modalHidden }) => {
      return { modalHidden: !modalHidden };
    });
  };

  render() {
    const { webImg, largeImg } = this.props;

    return (
      <>
        <ImageGalleryItemStyled onClick={this.toggleModal}>
          <ImageGalleryImgStyled src={webImg} alt="image" />
        </ImageGalleryItemStyled>
        {!this.state.modalHidden && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
ImageGalleryItemStyled.propTypes = {
  onClick: propTypes.func.isRequired,
};
ImageGalleryImgStyled.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
};
