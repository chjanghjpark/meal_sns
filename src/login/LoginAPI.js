export const LoginAPI = async (accessToken, platform) => {
  let postResponse;
  try {
    postResponse = await fetch(`http://127.0.0.1:8000/${platform}/`, {
      method: 'POST',
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

  localStorage.setItem('share-meal-token', post.jwt);
  window.location.replace("./");
}