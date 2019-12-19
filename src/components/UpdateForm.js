import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class UpdateForm extends React.Component {
        
    state = {
        name: this.props.restaurant.name,
        address: this.props.restaurant.address,
        city: this.props.restaurant.city,
        state: this.props.restaurant.state,
        zipCode: this.props.restaurant.zipCode,
        description: this.props.restaurant.description,
        summary: this.props.restaurant.summary,
        takeout: this.props.restaurant.takeout,
        delivery: this.props.restaurant.delivery,
        openHour: this.props.restaurant.openHour,
        closeHour: this.props.restaurant.closeHour,
        openDay: this.props.restaurant.openDay,
        closeDay: this.props.restaurant.closeDay,
        visited: this.props.restaurant.visited,
    };


    render() {

        console.log(this.state);
        return(
            <div className="update">

                <p> Please edit the relevant fields </p>

                <Form>
                    <FormGroup>
                        <Label for='street'>Street Address</Label>
                        <Input type='text' name='street' id='street' value={this.state.address} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='text' name='city' id='city' value={this.state.city} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='state'>State</Label>
                        <Input type='select' name='state' id='state' value={this.state.state} >
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="District Of Columbia">District Of Columbia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Islan">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='zipCode'>Zipcode</Label>
                        <Input type='number' name='zipCode' id='zipCode' pattern="[0-9]{5}" value={this.state.zipCode} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='textarea' name='description' id='description' value={this.state.description} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='summary'>Summary</Label>
                        <Input type='text' name='summary' id='summary' value={this.state.summary} />
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend> Takeout</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='takeout_yes' id='takeout_yes' defaultChecked={this.state.takeout === 'yes'} /> {' '}
                                    Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='takeout_no' id='takeout_no' defaultChecked={this.state.takeout === 'no'}/> {' '}
                                    No
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend>Delivery</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='delivery_yes' id='delivery_yes' defaultChecked={this.state.delivery === 'yes'}/> {' '}
                                    Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='delivery_no' id='delivery_no' defaultChecked={this.state.delivery === 'no'}/> {' '}
                                    No
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <Label for='openHour'>Opening Time</Label>
                        <Input type='select' name='openHour' id='openHour' value={this.state.openHour} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='closeHour'>Closing Time</Label>
                        <Input type='select' name='closeHour' id='closeHour' value={this.state.closeHour} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='openDay'>Opening Day</Label>
                        <Input type='select' name='openDay' id='openDay' value={this.state.openDay} >
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='closeday'>Closing Day</Label>
                        <Input type='select' name='closeday' id='closeday' value={this.state.closeDay} >
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </Input>
                    </FormGroup>
                </Form>
            </div>
           
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurants.restaurant,
    }
}

export default withRouter(connect(mapStateToProps)(UpdateForm));