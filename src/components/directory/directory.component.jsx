import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[
                {
                    title:"hats",
                    imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",
                    id:1,
                    linkUrl:"hats"
                },
                {
                    title:"jackets",
                    imageUrl:"images/jakets.jpg",
                    id:2,
                    linkUrl:"jackets"
                },
                {
                    title:"sneakers",
                    imageUrl:"images/sneakers.jpg",
                    id:3,
                    linkUrl:"sneakers"
                },
                {
                    title:"womens",
                    imageUrl:"images/women.jpg",
                    id:4,
                    linkUrl:"womens"
                },
                {
                    title:"mens",
                    imageUrl:"images/men.jpg",
                    id:5,
                    linkUrl:"mens"
                },
            ],
            
        }
    }
    
    render(){
       
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id , ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default Directory;