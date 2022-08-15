import React, { Component } from "react";

class Description extends Component{
    constructor(props){
        super(props.this)
    }
    render(){
        return(
            <>
               
                <h3>Make beatiful memories at {this.props.place}. Creat your dream vaction.</h3>

                <br/>
                <p><h4>Contact us on {this.props.contact} </h4></p>
                <p>
                 <span><h1>OR</h1></span>
                </p>

                <p><h4>Visit us on {this.props.website} </h4></p>
          
            </>
        )
    }
}

export default Description;