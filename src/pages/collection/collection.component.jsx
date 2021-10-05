import React from 'react'

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItems from '../../components/collection-item/collection-item.component'

import './collection.style.scss'


const CollectionPage = ({collection}) =>{
    const {items , title} = collection
    console.log("match",collection)
    return(
    <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className="items">
            {
                items.map(item => <CollectionItems key={item.id}  item={item} />)
            }
        </div>
    </div>
)};

const mapStateToProps = (state , ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)