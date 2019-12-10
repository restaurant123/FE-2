import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class UpdateForm extends React.Component {

    render() {
        return(
            <>
            <p> Restaurant Name </p>
            <Form>
                <FormGroup>
                    <Label for='street'>Street Address</Label>
                    <Input type='textarea' name='street' id='street' />
                </FormGroup>
                <FormGroup>
                    <Label for='city'>City</Label>
                    <Input type='text' name='city' id='city' />
                </FormGroup>
                <FormGroup>
                    <Label for='state'>State</Label>
                    <Input type='text' name='state' id='state' />
                </FormGroup>
                <FormGroup>
                    <Label for='zipcode'>Zipcode</Label>
                    <Input type='text' name='zipCode' id='zipCde' />
                </FormGroup>
                <FormGroup>
                    <Label for='description'>Description</Label>
                    <Input type='text' name='description' id='description' />
                </FormGroup>
                <FormGroup>
                    <Label for='summary'>Summary</Label>
                    <Input type='text' name='summary' id='summary' />
                </FormGroup>
                <FormGroup>
                    <Label for='takeout'>Takeout</Label>
                    <Input type='text' name='takeout' id='takeout' />
                </FormGroup>
                <FormGroup>
                    <Label for='delivery'>Delivery</Label>
                    <Input type='text' name='delivery' id='delivery' />
                </FormGroup>
                <FormGroup>
                    <Label for='opening_time'>Opening Time</Label>
                    <Input type='text' name='opening_time' id='opening_time' />
                </FormGroup>
                <FormGroup>
                    <Label for='closing_time'>Delivery</Label>
                    <Input type='text' name='closing_time' id='closing_time' />
                </FormGroup>
                <FormGroup>
                    <Label for='openingDay'>Delivery</Label>
                    <Input type='text' name='delivery' id='openingDay' />
                </FormGroup>
                <FormGroup>
                    <Label for='closing_day'>Delivery</Label>
                    <Input type='text' name='closing_day' id='closing_day' />
                </FormGroup>
            </Form>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants.restaurants,
    }
}

export default connect(mapStateToProps)(UpdateForm);