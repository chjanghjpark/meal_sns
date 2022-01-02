import InputGroup from 'react-bootstrap/InputGroup'
import { useCallback } from 'react';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const MapInputView = ({onSearchLocation}) => {
    const onKeyPress = useCallback((event) => {
        if(event.charCode==13) {
            onSearchLocation();
        }
    }, []);
    return (
        <div className="div_location">
            <InputGroup className="mb-3">
                <FormControl
                    className="input_location"
                    placeholder="장소를 검색하세요"
                    aria-label="장소를 검색하세요"
                    aria-describedby="basic-addon2" 
                    onKeyPress={onKeyPress}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={onSearchLocation}>
                    검색
                </Button>
            </InputGroup>
        </div>
    );
}
  
export default MapInputView;