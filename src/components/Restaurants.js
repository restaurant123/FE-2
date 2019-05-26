import React from 'react'
import {getRestaurantsAction, deleteAction} from '../actions/restaurantsAction';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {Button, Container, Row, Col} from 'reactstrap'




class Restaurants extends React.Component {

    

    componentDidMount() {
    }

    handleClickImage = (id) => {
        if(this.props.loggedIn) {
            this.props.history.push(`/restaurants/${id}`);
        }
        else {
            window.alert('you need to be logged to select restaurant');
        }
    }

    handleClickDelete = (id) => {
        if(this.props.loggedIn)
            this.props.deleteAction(id);
        else {
            window.alert('you need to be logged In to delete');
        }
        
    }



    render () {
        return (
            <div className='restaurants' >
                {this.props.restaurants.map( restaurant => 
                <Container key={restaurant.id}>
                    <Row className='restaurant'>
                        <Col xs='6' >
                            <div className="restaurant-img" 
                                onClick={()=>this.handleClickImage(restaurant.id)}>
                                <img src={restaurant.image_url} alt="restaurant" />
                            </div>
                        </Col>
                        <Col xs='6'>
                            <Row>
                                <Col className='name' onClick={()=>this.handleClickImage(restaurant.id)}>
                                    <h2>{restaurant.name}</h2>
                                </Col>
                                <Col className='address'>
                                    <p>{restaurant.address}</p>
                                    <p>{restaurant.city}</p>
                                    <p>{restaurant.state}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <p className='description'>
                                        {restaurant.description}
                                    </p>
                                </Col>
                            </Row>
                            <Row className='last-row'>
                                <Col xs='6'>
                                    <span>{`visited: ${restaurant.visited}`}</span>
                                </Col>
                                <Col xs='6'>
                                    <Button color='danger' onClick={()=>
                                        this.handleClickDelete(restaurant.id)}>
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                        
                    
                </Container>
                )}
                
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
        restaurants: state.restaurants.restaurants,
        loggedIn: state.login.loggedIn
    }
)



export default withRouter(connect(mapStateToProps, {getRestaurantsAction, deleteAction})(Restaurants));