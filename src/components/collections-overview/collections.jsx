import React from 'react'
import "./collections.styles.scss"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import CollectionPreview from "../preview/preview"
import {selectCollections} from "../../redux/shop/shop.selectors"

const CollectionsOverview = ({collections}) => (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)