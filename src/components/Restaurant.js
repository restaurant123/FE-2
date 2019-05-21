import React from 'react';
import {connect} from 'react-redux'
import {getRestaurantAction} from '../actions/restaurantAction'
import { withRouter } from 'react-router-dom';



class Restaurant extends React.Component {

    componentDidMount() {
        let id = parseInt(this.props.match.params.id, 10);
        this.props.getRestaurantAction(id)
    }

    render() {

        return (
            
            <div className='single-restaurant'>
                {!this.props.restaurant && 
                <p>Fetching this restaurant data...</p>}

                {this.props.restaurant &&
                <img src={this.props.restaurant.image_url} alt="restaurant"/>}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    restaurant: state.restaurant.restaurant
    }
)

export default withRouter(connect(mapStateToProps, {getRestaurantAction})(Restaurant));