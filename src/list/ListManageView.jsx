import Button from 'react-bootstrap/Button';

const ListManageView = ({ onClickPost, onClickGet, onClickPut, onClickDelete }) => {
  return (
    <>
      <Button
        variant="secondary"
        onClick={onClickPost}
      >
        테스트 포스트
      </Button>
      <Button
        variant="secondary"
        onClick={onClickGet}
      >
        테스트 겟
      </Button>
      <Button
        variant="secondary"
        onClick={onClickPut}
      >
        테스트 풋
      </Button>
      <Button
        variant="secondary"
        onClick={onClickDelete}
      >
        테스트 딜리트
      </Button>
    </>
  );
}

export default ListManageView;
