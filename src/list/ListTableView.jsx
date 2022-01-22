import Table from 'react-bootstrap/Table'
import { isMobile } from 'react-device-detect';
import { BiMapPin, BiHomeAlt } from 'react-icons/bi';
import { WiStars } from 'react-icons/wi';
import { FcList, FcComments, FcOvertime, FcAddressBook } from 'react-icons/fc';

const ListTableView = ({ loading, error, response }) => {
  if (!response) {
    return null;
  }

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>데이터 로드 실패...</div>;
  }

  return (
    <>
      <Table responsive="sm">
        {isMobile ?
          <>
            <thead>
              <tr>
                <th><FcList size="20" />분류</th>
                <th><BiHomeAlt size="20" color="red" />상호명</th>
                <th><BiMapPin size="20" color="purple" />지역</th>
                <th><WiStars size="20" color="orange" />별점</th>
              </tr>
            </thead>
            <tbody>
              {response.map((data) => {
                return (
                  <tr>
                    <td>(음식점)</td>
                    <td>{data.fields.store.place_name}</td>
                    <td>(지역)</td>
                    <td>{data.fields.star}</td>
                  </tr>
                );
              })}
            </tbody>
          </>
          :
          <>
            <thead>
              <tr>
                <th><FcList size="24" />분류</th>
                <th><BiHomeAlt size="24" color="red" />상호명</th>
                <th><BiMapPin size="24" color="purple" />지역</th>
                <th><WiStars size="24" color="orange" />별점</th>
                <th><FcComments size="24" />한줄평</th>
                <th><FcOvertime size="24" />평가시간</th>
                <th><FcAddressBook size="24" />주소</th>
              </tr>
            </thead>
            <tbody>
              {response.map((data) => {
                return (
                  <tr>
                    <td>{data.fields.store.category_group_name}</td>
                    <td>{data.fields.store.place_name}</td>
                    <td>(지역)</td>
                    <td>{data.fields.star}</td>
                    <td>(한줄평)</td>
                    <td>(평가시간)</td>
                    <td>(주소)</td>
                  </tr>
                );
              })}
            </tbody>
          </>
        }
      </Table>
    </>
  );
}

export default ListTableView;
