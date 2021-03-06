import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectCollection } from "../../../redux/shop/shoppage.selectors";

import CollectionItem from "../../collection-item/CollectionItem";

import "./collection.styles.scss";

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  const products = Object.keys(items).map(key => items[key]);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {products.map(item => (
          <Link to={{ pathname: `${match.url}/${item.id}` }} key={item.id}>
            <CollectionItem key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
