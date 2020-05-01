import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop.data';
import CollectionPreview from '../collection-preview/Collection-preview';

class Shop extends Component {
    state ={collections:SHOP_DATA}   
    render() {      
        return (
            this.state.collections.map((collections)=>{
               return <CollectionPreview key={collections.id} {...collections} />
           })
        );
    }
}

export default Shop;