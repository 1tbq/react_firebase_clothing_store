// import * as React from 'react';
// import './Collection-item.styles.scss';
// import CustomButton from '../../components/custom-button/custom-button.component';
// import { addItem } from '../../redux/cart/cart.actions';
// import { connect } from 'react-redux';
// const CollectionItem = ({ item, addItem }) => {
//     const { name, price, imageUrl } = item;
//     return (
//         <div className="collection-item">
//             <div className="image"
//                 style={{
//                     backgroundImage: `url(${imageUrl})`
//                 }}
//             ></div>
//             <div className="collection-footer">
//                 <span className="name">{name}</span>
//                 <span className="price">{price}</span>
//             </div>
//             <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
//         </div>
//     );
// };

// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// });
// export default connect(null, mapDispatchToProps)(CollectionItem);


// import * as React from 'react';
// import './Collection-item.styles.scss';
// import CustomButton from '../../components/custom-button/custom-button.component';
// import { addItem } from '../../redux/cart/cart.actions';
// import { connect } from 'react-redux';
// const CollectionItem = ({ item, dispatch }) => {
//     const { name, price, imageUrl } = item;
//     return (
//         <div className="collection-item">
//             <div className="image"
//                 style={{
//                     backgroundImage: `url(${imageUrl})`
//                 }}
//             ></div>
//             <div className="collection-footer">
//                 <span className="name">{name}</span>
//                 <span className="price">{price}</span>
//             </div>
//             <CustomButton onClick={() => dispatch(addItem(item))} inverted>Add to Cart</CustomButton>
//         </div>
//     );
// };

// export default connect()(CollectionItem);

import * as React from 'react';
import './Collection-item.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = {
    addItem
}
export default connect(null, mapDispatchToProps)(CollectionItem);