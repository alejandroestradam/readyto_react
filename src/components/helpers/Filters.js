
export function filterPrice(indexValue, res, result){
    switch (indexValue) {
        case 0:
            result = res.data.properties.filter((e)=>{
                return parseInt(e.price["$numberDecimal"]) < 100;
            })
            break;
        case 1: 
            result = res.data.properties.filter((e)=>{
                return parseInt(e.price["$numberDecimal"]) < 500 && parseInt(e.price["$numberDecimal"]) > 100;
            })
            break;
        case 2: 
            result = res.data.properties.filter((e)=>{
                return parseInt(e.price["$numberDecimal"]) < 1000 && parseInt(e.price["$numberDecimal"]) > 500;
            })
            break;
        case 3: 
            result = res.data.properties.filter((e)=>{
                return parseInt(e.price["$numberDecimal"]) > 1000;
            })
            break;
        default:
            result = res.data.properties;
            break;
    }
    return result;
}

export function filterProperty(indexValue, res, result){
    switch (indexValue) {
        case 0:
            result = res.data.properties.filter((e)=>{
                return e.property_type === 'House';
            })
            break;
        case 1: 
            result = res.data.properties.filter((e)=>{
                return e.property_type === 'Apartment';
            })
            break;
        case 2: 
            result = res.data.properties.filter((e)=>{
                return e.property_type === 'Loft';
            })
            break;
        case 3: 
            result = res.data.properties.filter((e)=>{
                return e.property_type === 'Unique Stay';
            })
            break;
        default:
            result = res.data.properties;
            break;
    }
    return result;
}

export function filterRooms(indexValue, res, result){
    switch (indexValue) {
        case 0:
            result = res.data.properties.filter((e)=>{
                return e.bedrooms === 1;
            })
            break;
        case 1: 
            result = res.data.properties.filter((e)=>{
                return e.bedrooms === 2;
            })
            break;
        case 2: 
            result = res.data.properties.filter((e)=>{
                return e.bedrooms === 3;
            })
            break;
        case 3: 
            result = res.data.properties.filter((e)=>{
                return e.bedrooms > 3;
            })
            break;
        default:
            result = res.data.properties;
            break;
    }
    return result;
}

export function filterBathrooms(indexValue, res, result){
    switch (indexValue) {
        case 0:
            result = res.data.properties.filter((e)=>{
                return parseInt(e.bathrooms["$numberDecimal"]) === 1;
            })
            break;
        case 1: 
            result = res.data.properties.filter((e)=>{
                return parseInt(e.bathrooms["$numberDecimal"]) === 2;
            })
            break;
        case 2: 
            result = res.data.properties.filter((e)=>{
                return parseInt(e.bathrooms["$numberDecimal"]) === 3;
            })
            break;
        case 3: 
            result = res.data.properties.filter((e)=>{
                return parseInt(e.bathrooms["$numberDecimal"]) > 3;
            })
            break;
        default:
            result = res.data.properties;
            break;
    }
    return result;
}