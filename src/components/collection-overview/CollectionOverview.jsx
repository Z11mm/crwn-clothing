import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopPageCollections } from "../../redux/shop/shoppage.selectors";

import CollectionPreview from "../preview-collection/CollectionPreview";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopPageCollections
});

export default connect(mapStateToProps)(CollectionOverview);