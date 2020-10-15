import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XLAPUvV54jcF4m5rQTTQtHx0Ue2Y5mDDIeX79240iqCg0EVrTYaNUMp5w6Ec6CT0HEj5jYWp6DqS0D5w_z7QGLdoR_Jp7f2qc3zLaseAQ2l0NCkzabuXRYUUjFh7X3Yx'
    }
});