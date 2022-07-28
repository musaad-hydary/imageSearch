import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
          'Client-ID GxyXL7qj5ru-gce6zaerRlMOgD2TGSdDeaNgrWVgG_o',
      },

});