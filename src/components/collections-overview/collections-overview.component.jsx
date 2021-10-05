import React from 'react'

import './collections-overview.style.scss'
import CollectionPreview from '../preview-collection/preview-collection.component'

import { connect } from 'react-redux'

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({collections}) =>(
    <div className="collections-overview">
         {
            collections.map(({id , ...otherCollectionsProps} )=> (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
