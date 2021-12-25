export const GetTokenAPI = async (snsAccessToken, platform) => {
  let postResponse;
  try {
    postResponse = await fetch(`http://127.0.0.1:8000/login/`, {
      method: 'POST',
      headers: {
        'Authorization': snsAccessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'login_site': platform }) // body data type must match "Content-Type" header
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

  return {
    accessToken: post.access_token,
    refreshToken: post.refresh_token
  };
}

export const RefreshAccessTokenAPI = async (refreshToken) => {
  // To Do...
  alert("Need to update Refresh API");
  return false;
}