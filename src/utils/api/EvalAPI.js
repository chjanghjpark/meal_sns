export const EvalPostAPI = async (accessToken, storeData) => {
  let postResponse;
  try {
    postResponse = await fetch(`http://127.0.0.1:8000/eval/`, {
      method: 'POST',
      headers: {
        'Authorization': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(storeData) // body data type must match "Content-Type" header
    });
  } catch (err) {
    alert('fail to connet server');
    console.log(err)
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
    postResponse = await fetch(`http://127.0.0.1:8000/eval/`, {
      method: 'GET',
      headers: {
        'Authorization': accessToken
      }
    });
  } catch (err) {
    alert('fail to connet server');
    console.log(err)
    return;
  }

  let post;
  try {
    post = await postResponse.json();
  } catch (err) {
    alert('fail to read json');
    return;
  }

  return post.eval;
}