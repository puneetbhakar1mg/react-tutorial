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

export default {
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

