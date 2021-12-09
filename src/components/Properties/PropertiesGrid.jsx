import React from 'react';
import '../../css/properties.css'

const PropertiesGrid = (props) => {
    const {post} = props;
    const {handleOption} = props;

    React.useEffect(() =>{
        handleOption();
    }, []);

    return (
        <section class="properties flex-center">
            <h1>Descubre los más de 300 alojamientos</h1>
            <div class="grid-properties" id="grid-properties">
                {post.map((obj,index) => {
                    return (<figure class="card">
                                <img src={post[index].images.picture_url} alt=""/>
                                <div class="text">
                                    <h1>{post[index].name}</h1>
                                    <div class="info">
                                        <p>{post[index].property_type}</p>
                                        <p>{post[index].room_type}</p>
                                    </div>
                                    <div class="info">
                                        <p>Bredrooms: {post[index].bedrooms}</p>
                                        <p>Beds: {post[index].beds}</p>
                                    </div>
                                    <div class="info">
                                        <p>Bathrooms: {post[index].bathrooms.$numberDecimal}</p>
                                        <p>{post[index].price.$numberDecimal} / night</p>
                                    </div>
                                </div>
                            </figure> )
                })}
            </div>
        </section>
    )
}

export default PropertiesGrid
