export const LoginAPI = async (accessToken, platform) => {
  let postResponse;
  try {
    postResponse = await fetch(`http://127.0.0.1:8000/login/`, {
      method: 'POST',
      headers: {
        'Authorization': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'login_site': platform}) // body data type must match "Content-Type" header
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

  localStorage.setItem('share-meal-access_token', post.access_token);
  localStorage.setItem('share-meal-refresh_token', post.refresh_token);
  window.location.replace("./");
}
