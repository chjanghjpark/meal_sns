export const SearchLocation = async (searchKeyword) => {
    let postResponse;
    try {
      postResponse = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchKeyword}`, {
        method: 'POST',
        headers: {
          'Authorization': 'KakaoAK 84c5ac72fd225ac37b53929946ca6a6a',
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

    return post;
  }