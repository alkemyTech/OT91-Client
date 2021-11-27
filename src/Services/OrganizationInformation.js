import axios from 'axios';
import { AlertError } from '../Components/common/alerts/Alerts';

export const getOrganizationInformation = () => {
    try {
      const {data} = axios.get(`http://ongapi.alkemy.org/api/organization`);
      return data;
    } catch ({response}) {
      AlertError(response.status,response.data.message);
      return {success:false};
    }
};

export const getByIOrganizationInformation = () => {
    try {
    } catch ({response}) {
      AlertError(response.status,response.data.message);
      return {success:false};
    };
};

export const updateOrganizationInformation  = () => {
    try {

    } catch ({response}) {
      AlertError(response.status,response.data.message);
      return {success:false};
    };
};

export const createOrganizationInformation  = () => {
    try {

    } catch ({response}) {
      AlertError(response.status,response.data.message);
      return {success:false};
    };
};

export const deleteOrganizationInformation  = () => {
    try {

    } catch ({response}) {
      AlertError(response.status,response.data.message);
      return {success:false};
    };
};
