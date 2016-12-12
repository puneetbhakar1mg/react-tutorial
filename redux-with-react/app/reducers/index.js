import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';


const initialState = {
  categories: ['Ayurveda', 'Homeopathy', 'Allopathy'],
  products: {
    100: {
      name: 'Dant Kanti',
      brand: 'Patanjali',
      price: 234.50,
      currency: 'INR',
      description: 'Patanjali Dant kanti is used to protect the teeth. It contains Akarkara, Babul, Neem, Timbaru, Turmeric, Cloves, Pudin, Pippali, Peelu and maju phal'
    }
  }
};

const sampleApp = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORY': {
      return state;
    }
    case 'FETCH_PRODUCT': {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  sampleApp,
  routing
});
