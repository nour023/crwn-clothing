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
                    imageUrl:"images/hats.jpg",
                    id:1
                },
                {
                    title:"jackets",
                    imageUrl:"images/jakets.jpg",
                    id:2
                },
                {
                    title:"sneakers",
                    imageUrl:"images/sneakers.jpg",
                    id:3
                },
                {
                    title:"womens",
                    imageUrl:"images/women.jpg",
                    id:4
                },
                {
                    title:"mens",
                    imageUrl:"images/men.jpg",
                    id:5
                },
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title , imageUrl ,id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }
}
export default Directory;