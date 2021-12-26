import { EvalGetAPI } from '../utils/api/EvalAPI';
import { GetAccessToken } from '../utils/TokenUtils';
import usePromise from '../utils/usePromise';
import ListTableView from './ListTableView';

const ListTableContainer = () => {
  const [loading, response, error] = usePromise(() => {
    const accessToken = GetAccessToken();
    if (!accessToken)
      return;

    return EvalGetAPI(accessToken);
  }, []);

  return <ListTableView loading={loading} error={error} response={response} />;
}

export default ListTableContainer;
