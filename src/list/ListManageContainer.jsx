import { useCallback } from 'react';
import { EvalPostAPI, EvalGetAPI } from '../utils/api/EvalAPI';
import { GetAccessToken } from '../utils/TokenUtils';
import ListManageView from './ListManageView';

const ListManageContainer = () => {
  const onClickPost = useCallback(async () => {
    const accessToken = GetAccessToken();
    if (!accessToken)
      return;

    const storeData = {
      store: '마쯔리',
      star: 5
    };

    await EvalPostAPI(accessToken, storeData);
  }, []);

  const onClickGet = useCallback(async () => {
    const accessToken = GetAccessToken();
    if (!accessToken)
      return;

    const data = await EvalGetAPI(accessToken);
    console.log(data);
  }, []);

  const onClickPut = useCallback(async () => {
  }, []);

  const onClickDelete = useCallback(async () => {
  }, []);

  return <ListManageView
    onClickPost={onClickPost}
    onClickGet={onClickGet}
    onClickPut={onClickPut}
    onClickDelete={onClickDelete}
  />;
}

export default ListManageContainer;
