import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const UserApis = {
  getUsers: () => {
    return axios({
      url: `${baseUrl}/users`,
      method: 'get',
    });
  },
};
export default UserApis;

