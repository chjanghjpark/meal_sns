import Table from 'react-bootstrap/Table'
import { isMobile } from 'react-device-detect';
import { BiMapPin, BiHomeAlt } from 'react-icons/bi';
import { WiStars } from 'react-icons/wi';
import { FcList, FcComments, FcOvertime, FcAddressBook } from 'react-icons/fc';

const ListTableView = ({ loading, error, response }) => {
  console.log(WiStars);
  return (
    loading ?
      <div>로딩중...</div>
      :
      error ?
        <div>데이터 로드 실패...</div>
        :
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
                  {/* {response.map((data) => {
                  return (
                    <>
                      <td>(음식점)</td>
                      <td>{data.store}</td>
                      <td>(지역)</td>
                      <td>{data.star}</td>
                    </>
                  );
                })} */}
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
                  {/* {response.map((data) => {
                return (
                  <>
                    <td>(음식점)</td>
                    <td>{data.store}</td>
                    <td>(지역)</td>
                    <td>{data.star}</td>
                    <td>(한줄평)</td>
                    <td>(평가시간)</td>
                    <td>(주소)</td>
                  </>
                );
              })} */}
                </tbody>
              </>
            }
          </Table>
        </>
  );
}

export default ListTableView;
