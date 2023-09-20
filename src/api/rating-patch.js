import axios from 'axios';
import Notiflix from 'notiflix';

export async function patchRating(recipeId, num) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = `/recipes/${recipeId}/rating`;

  const updateData = {
    rating: num,
  };

  // const options = {
  //   method: 'PATCH',
  //   body: JSON.stringify(updateData),
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  // };

  const response = await axios
    .patch(`${BASE_URL}${END_POINT}`, updateData)
    .then(res => {
      if (res.status !== 200) {
        console.error(`Request failed with status ${response.status}`);
      }
      return res.data;
    })
    .catch(error => {
      Notiflix.Notify.failure(`${error}`, {
        width: '300px',
        distance: '40px',
        cssAnimationStyle: 'from-top',
        borderRadius: '15px',
        fontFamily: 'Inter',
        fontSize: '14px',
        failure: {
          textColor: '#fff',
          notiflixIconColor: '#000',
        },
      });
    });
}
