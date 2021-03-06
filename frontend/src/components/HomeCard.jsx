import React from 'react';
import PropTypes from 'prop-types';

import ImageLoader from 'containers/ImageLoader';

export class HomeCard extends React.Component {
  render() {
    return (
      <a href={this.props.pageUrl}>
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image card-image-fix">
              <div className="card-image-cropper">
                <ImageLoader img_url={this.props.img_url} alt="comic-cover" />
              </div>
            </div>
            <div className="card-content">
              <span className="card-title">{this.props.title}</span>
              <p className="card-description">{this.props.description}</p>
              <p className="author-like">{this.props.author} | {this.props.likes} likes</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

HomeCard.propTypes = {
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  pageUrl: PropTypes.string.isRequired,
};
