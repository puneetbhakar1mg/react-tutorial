import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import objectAssign from 'object-assign';


const initialState = {
  productList: {
    100: {
      name: 'Dant Kanti',
      brand: 'Patanjali',
      price: 234.50,
      currency: 'INR',
      description: 'Patanjali Dant kanti is used to protect the teeth. It contains Akarkara, Babul, Neem, Timbaru, Turmeric, Cloves, Pudin, Pippali, Peelu and maju phal'
    },
    101: {
      name: '3M 9004V PARTICULATE RESPIRATOR MASK ',
      brand: '3M India Limited',
      price: 400.00,
      currency: 'INR',
      description: '3M 9004V is a dust mask composed of three layers of filters. The outermost layer filters out the largest dust particles, the innermost layer preserves the respirator’s shape and the middle layer is composed of electrostatic filter media.'
    },
    102: {
      name: '6M 9004V PARTICULATE RESPIRATOR MASK ',
      brand: '6M India Limited',
      price: 6400.00,
      currency: 'INR',
      description: '6M 9004V is a dust mask composed of three layers of filters. The outermost layer filters out the largest dust particles, the innermost layer preserves the respirator’s shape and the middle layer is composed of electrostatic filter media.'
    }
  },
  specialityList: []
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case 'MODIFY_PRODUCT': {
      const { desc, id } = action;
      const productList = objectAssign({}, state.productList);
      const product = productList[id];
      product.description = desc;

      return objectAssign({}, state, { productList });
    };
    case 'SPECIALITY_SUCCESS': {
      return objectAssign({}, state, {
        specialityList: action.data.specialities
      })
    }
    default:
      return state;
  }
};

export default combineReducers({
  sample,
  routing
});
