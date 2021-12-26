import { isMobile } from 'react-device-detect';

const ListMainView = ({ navbarContainer, listManageContainer, listTableContainer, login }) => {
  return (
    login &&
    <>
      {navbarContainer}
      <div style={{
        margin: isMobile ? '10px' : '20px'
      }}>
        {listManageContainer}
        {listTableContainer}
      </div>
    </>
  );
};

export default ListMainView;
