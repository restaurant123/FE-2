import React from 'react';
import { connect } from 'react-redux';
import { incrementVisits, decrementVisits } from '../actions/restaurantsAction';
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';




class Restaurant extends React.Component {

    state={
        inSingleRestaurantView: false 
    }

    handleClickMinus = (event) => {
        event.preventDefault();

        if (this.props.restaurant.visited === 0)
            return;
        else
            this.props.decrementVisits(this.props.restaurant.id);
    }

    handleClickPlus = (event) => {
        event.preventDefault();
        this.props.incrementVisits(this.props.restaurant.id);
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
                                        <p className='details'>
                                            <span>takeout:</span> {this.props.restaurant.takeout}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>delivery:</span> {this.props.restaurant.delivery}
                                        </p>
                                        <br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>opens at:</span> {this.props.restaurant.openHour} AM
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>closes at:</span> {this.props.restaurant.closeHour} PM
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            from Mon-Sat
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='visit'>
                                        <span>visited:</span>
                                        <div className='number'>
                                            {this.props.restaurant.visited}
                                        </div>
                                        <button onClick={this.handleClickPlus}>+</button>
                                        <button onClick={this.handleClickMinus}>-</button>
                                    </Col>
                                </Row>
                                <Link to='/restaurants'><Button className='button'>Back</Button></Link>
                                <Link to='/restaurants/restaurant/updateForm'><Button className='button'>Update</Button></Link>
                                
                            </Col>
                        </Row>
                    </Container>

                )}


            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        restaurants: state.restaurants.restaurants,
        restaurant: state.restaurants.restaurant,
        visited: state.restaurants.restaurant.visited
    }
}


export default withRouter(connect(mapStateToProps, {incrementVisits, decrementVisits })(Restaurant));