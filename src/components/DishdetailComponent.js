import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        
    }

    render(){

        var dishdet = this.props.selectedDish;
        
     return(
    <Card>
    <CardImg width="100%" src={dishdet.image} alt={dishdet.name} />
    <CardBody>
    <CardTitle>{dishdet.name}</CardTitle>
    <CardText>{dishdet.description}</CardText>
        </CardBody>
        </Card>

     )};
    
}

export default DishDetail;