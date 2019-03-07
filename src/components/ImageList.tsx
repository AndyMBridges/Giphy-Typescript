import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { IImage } from '../reducers/imageReducer';

// Create the containers interface
interface IProps {
  images: IImage[];
}

class ImageList extends React.Component<IProps> {
  public render() {

    const { images } = this.props;

    console.log('images ', images);

    return (
      <div className="name-container">
        {images &&
          images.map((image, i) => {
            return (
              <span key={i} className="title">
                <p>{image.title}</p>
                <img src={image.images.original.url} alt={image.title} />
              </span>
            );
          })}
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    images: store.imageState.images,
  };
};

export default connect(mapStateToProps)(ImageList);