import React from 'react';
import '../../css/properties.css';
import Modal from 'react-modal';
import Property from './Property';


const PropertiesGrid = (props) => {
    const {post} = props;
    const {handleOption} = props;
    const [selectedProperty, setselectedProperty] = React.useState({});
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function closeModal() {
        setIsOpen(false);
      }

    React.useEffect(() =>{
        handleOption();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const selectProperty = (obj) =>{
        if(obj){
            setselectedProperty(obj);
        }
        setIsOpen(true);
        
    }
    

    React.useEffect(() =>{
        props.parentCallback(selectedProperty);
    }, [props, selectedProperty]);

    return (
        <section class="properties flex-center">
            <h1>Descubre los más de 300 alojamientos</h1>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <Property selectedProperty={selectedProperty} isLoggedIn={props.isLoggedIn}/>
            </Modal>
            <div class="grid-properties" id="grid-properties">
                {post.map((obj,index) => {
                    return (
                        <li key={obj.id} className='item'>
                            <figure class="card">
                                <button  className="property-image" onClick={() => selectProperty(obj)}>
                                    <img src={post[index].images.picture_url} alt=""/>
                                </button>
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
                            </figure> 
                        </li>
                        )
                })}
            </div>
        </section>
    )
}

export default PropertiesGrid
