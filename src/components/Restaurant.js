import React from 'react';
import { connect } from 'react-redux';
import { incrementVisits, decrementVisits } from '../actions/restaurantsAction';
import { getRestaurantAction } from '../actions/restaurantAction';
import { withRouter } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';




class Restaurant extends React.Component {



    componentDidMount() {
        let id = parseInt(this.props.match.params.id, 10);
        //this.props.getRestaurantAction(id)
    }

    handleClickMinus = (id) => {
        if ((this.props.restaurants.find(restaurant =>
            restaurant.id === this.props.restaurant.id)).visited <= 0)
            return;
        else
            this.props.decrementVisits(id);
    }

    handleClickPlus = (id) => {
        console.log('id of the restaurant visited:', id)
        this.props.incrementVisits(id);
    }

    render() {

        return (

            <div className='single-restaurant'>
                {!this.props.restaurant &&
                    <p>Fetching this restaurant data...</p>}

                {this.props.restaurant && (
                    <Container>
                        <Row>
                            <Col xs='6' >
                                <div className="restaurant-img">
                                    <img src={this.props.restaurant.image_url} alt="restaurant" />
                                </div>
                            </Col>
                            <Col xs='6'>
                                <Row>
                                    <Col className='name'>
                                        <h2>{this.props.restaurant.name}</h2>
                                    </Col>
                                    <Col className='address'>
                                        <p>{this.props.restaurant.address}</p>
                                        <p>{this.props.restaurant.city}</p>
                                        <p>{this.props.restaurant.state}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='description'>
                                            {this.props.restaurant.description}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p>
                                            takeout: {this.props.restaurant.takeout}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p>
                                            delivery: {this.props.restaurant.delivery}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p>
                                            opens at: {this.props.restaurant.openHour} AM
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p>
                                            closes at: {this.props.restaurant.closeHour} PM
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p>
                                            from Mon-Sat
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='visit'>
                                        <span>visited:</span>
                                        <div>
                                            {(this.props.restaurants.find(restaurant =>
                                                restaurant.id === this.props.restaurant.id)).visited}
                                        </div>
                                        <button onClick={() => this.handleClickPlus(this.props.restaurant.id)}>+</button>
                                        <button onClick={() => this.handleClickMinus(this.props.restaurant.id)}>-</button>
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


const mapStateToProps = (state) => {

    console.log(state.restaurants);
    return {
        restaurants: state.restaurants.restaurants,
        restaurant: state.restaurant.restaurant,
        visited: state.restaurant.visited
    }
}


export default withRouter(connect(mapStateToProps, { getRestaurantAction, incrementVisits, decrementVisits })(Restaurant));