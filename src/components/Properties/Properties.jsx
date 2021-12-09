import React from 'react';
import '../../css/properties.css';
import GeneralFilter from './GeneralFilter';
import PropertiesGrid from './PropertiesGrid';
import { filterText, optionsText } from '../helpers/constants';
import axios from 'axios';
import { filterPrice, filterProperty, filterRooms, filterBathrooms } from '../helpers/Filters';

const Properties = () => {
    const [post, setPost] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      React.useEffect(() => {
        const results = post.filter(property =>
            property.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        console.log(results);
        if(!results){
            return;
        } else{
            setPost(results);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchTerm]);

    const handleOption = (indexValue, filterType) =>{
        axios.get("./json/properties.json")
        .then(res=>{
            let result;
            switch (filterType) {
                case "propertyPrice":
                    setPost(filterPrice(indexValue, res, result));
                    break;
                case "propertyType":
                    setPost(filterProperty(indexValue, res, result));
                    break;
                case "propertyRooms":
                    setPost(filterRooms(indexValue, res, result));
                    break;
                case "propertyBaths":
                    setPost(filterBathrooms(indexValue, res, result));
                    break;
                default: 
                    setPost(res.data.properties);
                    break;
            }
        }).catch(err =>{
            console.log(err);
        })
    }

    return (
    <div>
        <div className="properties-section">
        <section id="search" class="flex-center">
                <input class="input"  type="text" placeholder="Search Properties" value={searchTerm} onChange={handleChange}/>
        </section>
        <section className="filters">
            <GeneralFilter text={filterText.price} options={optionsText.price} handleOption = {handleOption} filterType="propertyPrice"/>
            <GeneralFilter text={filterText.propertyType} options={optionsText.propertyType} handleOption = {handleOption} filterType="propertyType"/>
            <GeneralFilter text={filterText.rooms} options={optionsText.rooms} handleOption = {handleOption} filterType="propertyRooms"/>
            <GeneralFilter text={filterText.bathrooms} options={optionsText.bathrooms} handleOption = {handleOption} filterType="propertyBaths"/>
        </section>
        <PropertiesGrid handleOption={handleOption} post={post}/>
        </div>
    </div>
    )
}

export default Properties;
