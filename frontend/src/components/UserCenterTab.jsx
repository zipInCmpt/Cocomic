import React from 'react';
import PropTypes from 'prop-types';

export class UserCenterTab extends React.Component {
  constructor(props) {
    super(props);
    this.onClickToCollection = this.onClickToCollection.bind(this);
    this.onClickToFavorate = this.onClickToFavorate.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserCenterBooks();
  }

  onClickToFavorate(e) {
    e.preventDefault();
    this.props.toFavorates();
    this.props.fetchUserCenterBooks();
  }

  onClickToCollection(e) {
    e.preventDefault();
    this.props.toCollections();
    this.props.fetchUserCenterBooks();
  }

  render() {
    let collectionBtn;
    let favorateBtn;
    if (this.props.isCollection) {
      collectionBtn = <a className="active user-center-tab-text" onClick={this.onClickToCollection}>My Collection</a>;
      favorateBtn = <a className="user-center-tab-text" onClick={this.onClickToFavorate}>Bookmark</a>;
    } else {
      collectionBtn = <a className="user-center-tab-text" onClick={this.onClickToCollection}>My Collection</a>;
      favorateBtn = <a className="active user-center-tab-text" onClick={this.onClickToFavorate}>Bookmark</a>;
    }
    return (
      <div className="container">
        <h2 className="page-title">Hello, {this.props.userName}!</h2>
        <div className="navbar-fixed">
          <nav className="user-center-nav nav-extended z-depth-0">
            <div id="user_center_tab" className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab user-center-tab-li right-border-black">{collectionBtn}</li>
                <li className="tab user-center-tab-li">{favorateBtn}</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
UserCenterTab.propTypes = {
  userName: PropTypes.string.isRequired,
  isCollection: PropTypes.bool.isRequired,
  fetchUserCenterBooks: PropTypes.func.isRequired,
  toFavorates: PropTypes.func.isRequired,
  toCollections: PropTypes.func.isRequired,
};
