import React, {Fragment} from 'react'
import {getRestaurantsAction} from '../actions/restaurantsAction';
import {deleteAction} from '../actions/restaurantsAction';
// import {localDeleteAction} from '../actions/localDeleteAction'

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {Button} from 'reactstrap'




class Restaurants extends React.Component {

    componentDidMount() {
        this.props.getRestaurantsAction();
    }

    handleClickImage = (id) => {
        this.props.history.push(`/restaurants/${id}`)
    }

    handleClickDelete = (id) => {
        this.props.deleteAction(id)
    }



    render () {
        return (
            <div className='restaurants' >
                {this.props.restaurants.map( restaurant => 
                <Fragment key={restaurant.id}>
                    <div className="restaurant"  onClick={()=>this.handleClickImage(restaurant.id)} >
                        <p>{restaurant.name}</p>
                        <img src={restaurant.image_url} alt="restaurant" /> 
                        
                    </div>
                    <Button color='danger' onClick={()=>this.handleClickDelete(restaurant.id)}>Delete</Button>
                </Fragment>
                )}
                
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
        restaurants: state.restaurants.restaurants
    }
)



export default withRouter(connect(mapStateToProps, {getRestaurantsAction, deleteAction})(Restaurants));