// https://unsplash.com/documentation#search-photos - API
// https://www.npmjs.com/package/tui-pagination - Бібліотека "tui-pagination"

//https://www.pexels.com/api/documentation/?language=javascript#photos-search Your API key: mQN4R1XO3bcrmQhykwmGHSr478Gc8Df3HWvO2WCvSBZX4tzrXTjuwn2u
import axios from 'axios';
import pexels from 'pexels';

class Pexels {
  #BASE_URL = 'https://www.pexels.com/api/v1';
  #API_KYE = 'mQN4R1XO3bcrmQhykwmGHSr478Gc8Df3HWvO2WCvSBZX4tzrXTjuwn2u';
  #query = '';
  getPopularPhotos(page) {
    return axios.get(`${this.#BASE_URL}/search`, {
      params: {
        query: random,
        page,
        per_page: this.per_page,
        client: this.#API_KYE,
      },
    });
  }
}
getPopularPhotos(1).then().catch();
