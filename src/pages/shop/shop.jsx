import React from 'react'
import CollectionsOverview from "../../components/collections-overview/collections"
import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component"

const Shop = ({match}) => {
        return (
            <div className="shop-page">
               <Route exact path={`${match.path}`} component={CollectionsOverview}/>
               <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
            )
        }

export default Shop