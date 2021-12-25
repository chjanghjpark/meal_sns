import { useEffect, useState, useCallback } from 'react';
import Table from 'react-bootstrap/Table'
import NavbarCommon from "../navbar/NavbarCommon";
import Button from 'react-bootstrap/Button';
import { IsLogin } from '../utils/LoginUtils';
import { ReturnToMainPage } from '../utils/CommonUtils';

const ListMain = () => {
  const [isLogin, SetIsLogin] = useState(false);
  useEffect(() => {
    if (!IsLogin()) {
      alert('로그인이 필요한 서비스입니다.');
      ReturnToMainPage();
      return;
    }
    SetIsLogin(true);
  }, []);

  const onClickTest = useCallback(async () => {
    let accessToken = localStorage.getItem("share-meal-access-token");
    let postResponse;
    try {
      postResponse = await fetch(`http://127.0.0.1:8000/eval/`, {
        method: 'POST',
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'store': '마쯔리', 'star': '5' }) // body data type must match "Content-Type" header
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

    console.log(post);
  }, []);

  const onClickTestGet = useCallback(async () => {
    let accessToken = localStorage.getItem("share-meal-access-token");
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

    console.log(postResponse);
    let post;
    try {
      post = await postResponse.json();
    } catch (err) {
      alert('fail to read json');
      return;
    }

    console.log(post.eval);
  }, []);

  const onClickTestPut = useCallback(async () => {
    let accessToken = localStorage.getItem("share-meal-access-token");
    let postResponse;
    try {
      postResponse = await fetch(`http://127.0.0.1:8000/eval/`, {
        method: 'PUT',
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'store': '마쯔리', 'star': '4' }) // body data type must match "Content-Type" header
      });
    } catch (err) {
      alert('fail to connet server');
      console.log(err)
      return;
    }

    console.log(postResponse);
    let post;
    try {
      post = await postResponse.json();
    } catch (err) {
      alert('fail to read json');
      return;
    }

    console.log(post.eval);
  }, []);

  const onClickTestDelete = useCallback(async () => {
    let accessToken = localStorage.getItem("share-meal-access-token");
    let postResponse;
    try {
      postResponse = await fetch(`http://127.0.0.1:8000/eval/`, {
        method: 'DELETE',
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'store': '마쯔리', 'star': '4' }) // body data type must match "Content-Type" header
      });
    } catch (err) {
      alert('fail to connet server');
      console.log(err)
      return;
    }

    console.log(postResponse);
    let post;
    try {
      post = await postResponse.json();
    } catch (err) {
      alert('fail to read json');
      return;
    }

    console.log(post.eval);
  }, []);

  return (
    isLogin &&
    <>
      <NavbarCommon />
      <Button
        variant="secondary"
        onClick={onClickTest}
      >
        테스트 포스트
      </Button>
      <Button
        variant="secondary"
        onClick={onClickTestGet}
      >
        테스트 겟
      </Button>
      <Button
        variant="secondary"
        onClick={onClickTestPut}
      >
        테스트 풋
      </Button>
      <Button
        variant="secondary"
        onClick={onClickTestDelete}
      >
        테스트 딜리트
      </Button>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ListMain;
