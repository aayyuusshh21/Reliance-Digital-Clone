import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
    render() {  
        return (  
            <div>  
                <Carousel>  
                    <Carousel.Item style={{'height':"300px"}}>  
                    <img style={{'height':"300px"}}  
                    className="d-block w-100"  
                    src="https://www.reliancedigital.in/medias/Motorola-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w2NjE5MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUwLzk5MTgzMzYxNzIwNjIuanBnfDIzMzY2Y2ZjMTcyNWY4ZWUyZjIxNDk2YjZiNjdlYmY4YzE5MjM4ZTNlODAyZmNiOGI0ZGQ3NjhjYmQ5MmM5MjE" alt=""/>
                        
                    </Carousel.Item>  
                    <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px"}}  
                            className="d-block w-100"  
                            src="https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI" alt="" />
                    </Carousel.Item>  
                    <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px"}}  
                        className="d-block w-100"  
                        src="https://www.reliancedigital.in/medias/Laptops-Carousel-Banner-09-11-2022-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjU0NXxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDQ2Lzk5MTkwODgzOTQyNzAuanBnfDE3OWVkMmI2OWI3NzA5MTIyNWNhNjdkNTI4OTU5NmNkN2UzMDM2ZWEwNWZlNzQxNzhmODEwMmIxNTA1NmY2ZTg" alt="" />
                    </Carousel.Item>  
                </Carousel>  
            </div>  
        )  
    }  
}  
export default BootstrapCarousel 