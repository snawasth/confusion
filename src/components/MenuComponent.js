import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name:'NodeJs',
                    image: 'assets/images/nodejs.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'Lorem ipsum dolor sit amet, eu autem alterum platonem vel, liber utamur malorum sea cu.'                        },
                 {
                    id: 1,
                    name:'Jquery',
                    image: 'assets/images/jquery.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Lorem ipsum dolor sit amet, eu autem alterum platonem vel, liber utamur malorum sea cu.'                        },
                 {
                    id: 2,
                    name:'ReactJs',
                    image: 'assets/images/reactjs.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'Lorem ipsum dolor sit amet, eu autem alterum platonem vel, liber utamur malorum sea cu.'                        },
                 {
                    id: 3,
                    name:'MongoDb',
                    image: 'assets/images/mongodb.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'Lorem ipsum dolor sit amet, eu autem alterum platonem vel, liber utamur malorum sea cu.'                        
                }
            ]
        }
    }
    
    render() {

        const menu = this.state.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                                </Media>
                        </Media>
                    </div>
            );

        });

        return ( 
                <div className="container">
                    <div className="row">
                        <Media list>{menu}</Media>
                        </div>
                        </div>

        );

    }

}

export default Menu;