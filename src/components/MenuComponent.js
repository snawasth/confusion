import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
            
        }
        
    }
    
    
    
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }



    renderDish(dish){
        if (dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <DishDetail selectedDish={this.state.selectedDish}/>
               </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    
    renderComments(){

        const comm = this.props.dishes.id.comments.map((comments) => {
        
            if (comm != null){
                return(
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul key={comments.id} className="list-unstyled">
                        <li>{comments.comment}</li>
                        </ul>
                </div>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        });
    }



    render() {

       

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                          
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                              </CardImgOverlay>
                        </Card>
                    </div>
            );

        });

       
        

        return ( 
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                        <div className="row">
                            {this.renderDish(this.state.selectedDish)}
                            {comm}
                        </div>
                </div>

        );

    }

}

export default Menu;