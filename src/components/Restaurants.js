import React from 'react'
import {getRestaurantsAction} from '../actions/restaurantsAction';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';



class Restaurants extends React.Component {

    componentDidMount() {
        this.props.getRestaurantsAction();
    }

    handleClickImage = (id) => {
        this.props.history.push(`/restaurants/${id}`)
    }



    render () {
        return (
            <div className='restaurants' >
                {this.props.restaurants.map( restaurant => 
                    <div className="restaurant" key={restaurant.id} onClick={()=>this.handleClickImage(restaurant.id)} >
                        <img src={restaurant.image_url} alt="restaurant" /> 
                    </div>
                )}
                
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
        restaurants: state.restaurants.restaurants
    }
)



export default withRouter(connect(mapStateToProps, {getRestaurantsAction})(Restaurants));