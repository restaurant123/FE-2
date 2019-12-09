import React from 'react';
import { connect } from 'react-redux';
import { incrementVisits, decrementVisits } from '../actions/restaurantsAction';
import { withRouter, Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'reactstrap';




class Restaurant extends React.Component {

    state = {
        id: null,
        restaurant: null
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id, 10);
        const restaurant = this.props.restaurants.find(restaurant => restaurant.id === id);
        this.setState({id: id, restaurant: restaurant});
        
    }

    handleClickMinus = (event) => {
        event.preventDefault();
        // this.props.decrementVisits(this.state.id);
        this.setState({...this.state, restaurant:{...this.state.restaurant, visited: Math.max(0, this.state.restaurant.visited-1)}})
    }

    handleClickPlus = (event) => {
        event.preventDefault();
        this.setState({...this.state, restaurant: {...this.state.restaurant, visited: this.state.restaurant.visited+1}})
        // this.props.incrementVisits(this.state.id);
    }

    render() {

        console.log('state: ', this.state)

        return (

            <div className='single-restaurant'>
                {!this.state.restaurant &&
                    <p>Fetching this restaurant data...</p>}

                {this.state.restaurant && (
                    <Container>
                        <Row>
                            <Col xs='6' >
                                <div className="restaurant-img">
                                    <img src={this.state.restaurant.image_url} alt="restaurant" />
                                </div>
                            </Col>
                            <Col xs='6'>
                                <Row>
                                    <Col className='name'>
                                        <h2>{this.state.restaurant.name}</h2>
                                    </Col>
                                    <Col className='address'>
                                        <p>{this.state.restaurant.address}</p>
                                        <p>{this.state.restaurant.city}</p>
                                        <p>{this.state.restaurant.state}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <p className='summary'>{this.state.restaurant.summary}</p>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='description'>
                                            {this.state.restaurant.description}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>takeout:</span> {this.state.restaurant.takeout}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>delivery:</span> {this.state.restaurant.delivery}
                                        </p>
                                        <br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>opens at:</span> {this.state.restaurant.openHour} AM
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            <span>closes at:</span> {this.state.restaurant.closeHour} PM
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <p className='details'>
                                            {'from ' + this.state.restaurant.openDay.slice(0,3) + '-' + this.state.restaurant.closeDay.slice(0,3)}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='visit'>
                                        <span>visited:</span>
                                        <div className='number'>
                                            {this.state.restaurant.visited}
                                        </div>
                                        <button onClick={this.handleClickPlus}>+</button>
                                        <button onClick={this.handleClickMinus}>-</button>
                                    </Col>
                                </Row>
                                <Link to='/restaurants'><Button className='back'>Back</Button></Link>
                                
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
    }
}


export default withRouter(connect(mapStateToProps, { incrementVisits, decrementVisits })(Restaurant));