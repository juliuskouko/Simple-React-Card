import React, { Component } from "react";
import Title from "./Title";
import Image from "./Image";
import Description from "./Description";
import './myStyles.css';


class SimpleCard extends Component{
    render(){
        return(
            // <>
            //     <Title name="Lux"/>
            //     <Description place="Lux" contact="0000 000 000" website="www.restore.org"/>
            //     <Image src={require("./flower.jpg")} alt="flower" />

            // </>
            <div className='container'>
                
                <Image src={require("./house-4.jpeg")} alt="a flower" className="image"/>
                
                <div className='info'>
                    <Title name="LUX"/>
                    <Description place="Lux" contact="000 0000 000" website="www.lux.org"/>
                </div>

                    
            </div>
        )
    }
}

export default SimpleCard;