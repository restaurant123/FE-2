import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class UpdateForm extends React.Component {

    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        description: '',
        summary: '',
        takeout: '',
        delivery: '',
        openHour: '',
        closeHour: '',
        openDay: '',
        closeDay: '',
        visited: '',
    };
    
    componentDidMount() {
        
         this.setState({
                name: this.props.restaurant.name,
                address: this.props.restaurant.address,
                city: this.props.restaurant.city,
                state: this.props.restaurant.state,
                zipcode: this.props.restaurant.zipcode,
                summary: this.props.restaurant.summary,
                description: this.props.restaurant.description,
                delivery: this.props.restaurant.delivery,
                takeout: this.props.restaurant.takeout,
                openHour: this.props.restaurant.openHour,
                closeHour: this.props.restaurant.closeHour,
                openDay: this.props.restaurant.openDay,
                closeDay: this.props.restaurant.closeDay,
                visited: this.props.restaurant.visited,
         })
    };

    render() {
        return(
            <div className="update">

                <p> Please edit the relevant fields </p>

                <Form>
                    <FormGroup>
                        <Label for='street'>Street Address</Label>
                        <Input type='textarea' name='street' id='street' value={this.state.address} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='text' name='city' id='city' value={this.state.city} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='state'>State</Label>
                        <Input type='text' name='state' id='state' value={this.state.state} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='zipcode'>Zipcode</Label>
                        <Input type='text' name='zipCode' id='zipCde' value={this.state.zipcode} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='text' name='description' id='description' value={this.state.description} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='summary'>Summary</Label>
                        <Input type='text' name='summary' id='summary' value={this.state.summary} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='takeout'>Takeout</Label>
                        <Input type='text' name='takeout' id='takeout' value={this.state.takeout} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='delivery'>Delivery</Label>
                        <Input type='text' name='delivery' id='delivery' value={this.state.delivery} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='openHour'>Opening Time</Label>
                        <Input type='text' name='openHour' id='openHour' value={this.state.openHour} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='closeHour'>Closing Time</Label>
                        <Input type='text' name='closeHour' id='closeHour' value={this.state.closeHour} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='openDay'>Opening Day</Label>
                        <Input type='text' name='openDay' id='openDay' value={this.state.openDay} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='closeday'>Closing Day</Label>
                        <Input type='text' name='closeday' id='closeday' value={this.state.closeDay} />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants.restaurant,
    }
}

export default withRouter(connect(mapStateToProps)(UpdateForm));