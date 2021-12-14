import React from 'react';
import '../../css/property.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from "react-router-dom";

const Property = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(new Date());
    const [reserveValues, setreserveValues] = React.useState({});
    let history = useHistory();

    function closeModal() {
        setIsOpen(false);
      }

    const reserve = () =>{
        setIsOpen(true);
    }
    const onChange = (value) =>{
        setValue(value);
        setreserveValues(props.selectedProperty);
        alert(props.selectedProperty.name + ' reserved on ' + value[0] + '--' + value[1]);
        history.push('/');
        console.log(reserveValues);
    }

    return (
        <div>
        <h1>{props.selectedProperty.name}</h1>
        <div className="content">
            <img src={props.selectedProperty.images.picture_url} alt="" className='image'/>
            <div className="text">
                <div className='subtitle'>
                    <div className="star">
                        <img src="https://img.icons8.com/ultraviolet/40/000000/filled-star--v1.png" alt="star"/>    
                        <p>{props.selectedProperty.calification}</p>
                    </div>
                    <p>Reviews: {props.selectedProperty.number_of_reviews}</p>
                </div>
                <div className='beds'>
                    <p>Bedrooms: {props.selectedProperty.bedrooms}</p>
                    <p>Beds: {props.selectedProperty.beds}</p>
                    <p>Bahtrooms: {props.selectedProperty.bathrooms.$numberDecimal}</p>
                </div>
                <p className='description'>{props.selectedProperty.description}</p>
                <p className='price'>$ {props.selectedProperty.price.$numberDecimal}</p>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal-calendar"
                    overlayClassName="Overlay"
                >
                       <Calendar
                            onChange={onChange}
                            value={value}
                            selectRange={true}
                            className='Calendar'
                        />
                </Modal>
                {props.isLoggedIn.status
                ? 
                <button className='reserve-btn' onClick={reserve}>Reserve</button>
                :
                <p className='warning'>You must log in to reserve this property</p>}
            </div>
        </div>
        </div>
    )
}

export default Property;
