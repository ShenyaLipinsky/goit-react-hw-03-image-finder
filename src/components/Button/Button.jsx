import propTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';
export const Button = ({ onClick, loading }) => {
  return (
    <>
      {!loading && (
        <LoadMoreBtn
          onClick={() => {
            onClick();
          }}
        >
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
