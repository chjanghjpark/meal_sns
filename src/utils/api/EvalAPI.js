// import dotenv from "dotenv";
// dotenv.config();

export const EvalPostAPI = async (accessToken, storeData) => {
  storeData.star= 5;
  storeData.content= "content";
  storeData.invited_date= "2022-01-01";
  storeData.open_close= true;
  storeData.area= "area"; // address_name 첫번째 단어????????????????????????
  storeData.district= "district"; // address_name 첫번째 단어????????????????????????
  let postResponse;
  try {
    postResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/eval/`, {
      method: 'POST',
      headers: {
        'Authorization': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(storeData) // body data type must match "Content-Type" header
    });
  } catch (err) {
    alert('fail to connet server');
    return;
  }

  try {
    await postResponse.json();
  } catch (err) {
    alert('fail to read json');
    return;
  }
}

export const EvalGetAPI = async (accessToken) => {
  let postResponse;
  try {
    postResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/eval/`, {
      method: 'GET',
      headers: {
        'Authorization': accessToken
      }
    });
  } catch (err) {
    alert('fail to connet server');
    return;
  }

  let post;
  try {
    post = await postResponse.json();
  } catch (err) {
    alert('fail to read json');
    return;
  }

  let stores;
  try {
    stores = JSON.parse(post.eval);
  } catch (err) {
    alert('fail to read json');
    return;
  }

  return stores;
}