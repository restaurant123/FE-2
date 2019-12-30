import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {updateRestaurantAction} from "../actions/restaurantsAction";

class UpdateForm extends React.Component {
        
    state = {
        id: this.props.restaurant.id,
        image_url: this.props.restaurant.image_url,
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

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("in handleSubmit")
        this.props.updateRestaurantAction(this.state);
        this.props.history.push("/restaurants/restaurant");
    }

    handleClickPlus = (event) => {
        event.preventDefault();
        this.setState((prevState) => {return{visited: prevState.visited + 1}});
    }

    handleClickMinus = (event) => {
        event.preventDefault();
        if(this.state.visited === 0)
            return;
        else
            this.setState( (prevState) => {
                return {visited: prevState.visited - 1};
            });
    }


    render() {

        console.log(this.props);
        return(
            <div className="update">

                <p> Please edit the relevant fields </p>

                <p>{this.state.name}</p>

                <Form>
                    <FormGroup>
                        <Label for='street'>Street Address</Label>
                        <Input type='text' name='street' id='street' value={this.state.address} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='text' name='city' id='city' value={this.state.city} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='state'>State</Label>
                        <Input type='select' name='state' id='state' value={this.state.state} onChange={this.handleInputChange} >
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
                        <Input type='number' name='zipCode' id='zipCode' pattern="[0-9]{5}" value={this.state.zipCode} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='textarea' name='description' id='description' value={this.state.description} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='summary'>Summary</Label>
                        <Input type='text' name='summary' id='summary' value={this.state.summary} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend> Takeout</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='takeout' value='yes' checked={this.state.takeout === 'yes'} onChange={this.handleInputChange} /> {' '}
                                    Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='takeout' value='no' checked={this.state.takeout === 'no'} onChange={this.handleInputChange}/> {' '}
                                    No
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend>Delivery</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='delivery' value='yes' checked={this.state.delivery === 'yes'} onChange={this.handleInputChange}/> {' '}
                                    Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='radio' name='delivery' value='no' checked={this.state.delivery === 'no'} onChange={this.handleInputChange}/> {' '}
                                    No
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <span>visited: {this.state.visited}</span>
                        <button onClick={this.handleClickPlus}>+</button>
                        <button onClick={this.handleClickMinus}>-</button>
                    </FormGroup>

                    <FormGroup>
                        <Label for='openHour'>Opening Time</Label>
                        <Input type='select' name='openHour' id='openHour' value={this.state.openHour} onChange={this.handleInputChange} >
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
                        <Input type='select' name='closeHour' id='closeHour' value={this.state.closeHour} onChange={this.handleInputChange} >
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
                        <Input type='select' name='openDay' id='openDay' value={this.state.openDay} onChange={this.handleInputChange} >
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
                        <Input type='select' name='closeday' id='closeday' value={this.state.closeDay} onChange={this.handleInputChange} >
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </Input>
                    </FormGroup>

                    <Button onClick={this.handleSubmit}>Submit</Button>
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

export default withRouter(connect(mapStateToProps, {updateRestaurantAction})(UpdateForm));