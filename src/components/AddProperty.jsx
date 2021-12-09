import React from 'react';
import '../css/addproperty.css';
const AddProperty = () => {
    return (
        <section class="register flex-center">
        <h1>Registra una nueva propiedad</h1>
        <form action="" method="POST" class="flex-center">
        <div class="field">
            <p>Title</p>
            <input type="text" name="name"/>
        </div>
        <div class="field">
          <p>Property Type</p>
          <input type="text" name="property_type"/>
      </div>
      <div class="field">
          <p>Room Type</p>
          <input type="text" name="room_type"/>
      </div>
      <div class="field">
          <p>Bedrooms</p>
          <input type="number" name="bedrooms"/>
      </div>
      <div class="field">
          <p>Beds</p>
          <input type="number" name="beds"/>
      </div>
      <div class="field">
          <p>Bathrooms</p>
          <input type="number" name="bathrooms"/>
      </div>
      <div class="field">
          <p>Price per night</p>
          <input type="number" name="price"/>
      </div>
      <div class="field">
          <p>Image URL</p>
          <input type="text" name="images.picture_url"/>
      </div>
        <button class="btn">Save Property</button>
      </form>
        <div class="terms flex-center">
            <p>By creating a property, you agree to our Terms and
                 Terms and Privacy Policy
            </p>
        </div>
        <div class="readyto flex-center">
           <p>All rights reserved</p>
            <p>ReadyTo.com 2021</p>
        </div>
    </section>
    )
}

export default AddProperty;
