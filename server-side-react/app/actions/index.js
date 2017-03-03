import axios from 'axios';
import APIEndpoint from '../APIEndpoints';

const modifyProduct = (desc, id) => ({
  type: 'MODIFY_PRODUCT',
  desc,
  id
});

const getSpecialitySuccess = (data) => ({
  type: 'SPECIALITY_SUCCESS',
  data
});

const asynccc = () => {
  const p = Promise;
  return p.resolve();
}

export default {
  getAllSpecialities() {
    return (dispatch) => {
      return axios.get('https://stagapi.1mgdoctors.com/api/specialities', {
        headers:{Accept: 'application/1mgdoctors.v2', Authorization: 'Token token="f77f883849e5bb2099849a055a6b608c0486a564598e048834291ec7e6fe"'}
      }).then((response) => {
        dispatch(getSpecialitySuccess(response.data));
      });
    }
  },
  getDummySpeciality() {
    // return (dispatch) => {
    //   return Promise.resolve().then(() => {
    //     dispatch(getSpecialitySuccess({specialities: [
    //       {name: "Ayurvedic Doctor"},
    //       {name: "Child Specialist"},
    //       {name: "Dentist"},
    //       {name: "Skin Specialist"},
    //       {name: "Diabetes Specialist"},
    //       {name: "Dietitian"},
    //       {name: "ENT Specialist"},
    //       {name: "Eye Specialist"},
    //       {name: "General Physician"}
    //       ]}))
    //   })
    // }
    return (dispatch) => {
      const promise = (new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve({specialities: [
            {name: "Ayurvedic Doctor"},
            {name: "Child Specialist"},
            {name: "Dentist"},
            {name: "Skin Specialist"},
            {name: "Diabetes Specialist"},
            {name: "Dietitian"},
            {name: "ENT Specialist"},
            {name: "Eye Specialist"},
            {name: "General Physician"}
          ]});
        }, 100)
      })).then((data) => {
        dispatch(getSpecialitySuccess(data))
      });
      
      return promise;
    }
  },
  modifyProduct
};

