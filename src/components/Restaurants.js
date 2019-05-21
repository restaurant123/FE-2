import React from 'react'
import {getRestaurantsAction} from '../actions/restaurantsAction';
import {connect} from 'react-redux';

class Restaurants extends React.Component {

    componentDidMount() {
        this.props.getRestaurantsAction();
    }



    render () {
        return (
            <div className='restaurants' >
                {this.props.restaurants.map( restaurant => 
                    <img src={restaurant.image_url} alt="restaurant" key={restaurant.id}/>)}
                
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
        restaurants: state.restaurants.restaurants
    }
)



export default connect(mapStateToProps, {getRestaurantsAction})(Restaurants);