import { Col, Row } from "react-bootstrap";
import { capitalize } from "../../utils/utils";

interface PlaceOpeningHoursProps {
    openingHours: Map<string, string[]> | undefined;
}

const PlaceOpeningHours: React.FC<PlaceOpeningHoursProps> = ({ openingHours }) => {
    
    const transformMapToObjectArray = (providedMap: Map<string, string[]>) => {
        const transformed: {key: string, value: string[]}[] = [];

        for (const [key, value] of Object.entries(providedMap)) { 
            transformed.push({ key, value });
        }

        return transformed;
    }

    return (
        <Col style={{ padding: '10px', backgroundColor: '#fff' }} md={{ span: 6, offset: 1 }}>
            <h3>Opening hours</h3>
            <hr />
            {
                transformMapToObjectArray(openingHours || new Map())
                    .map(item => (
                        <Row>
                            <Col><h4>{capitalize(item.key)}</h4></Col>
                            <Col>
                                { item.key.length === 0 
                                    ? 'Closed' 
                                    : item.value.map(hour => (
                                            <Row>
                                                <Col>
                                                    <h4>{hour}</h4>
                                                </Col>
                                            </Row>
                                        ))
                                }
                            </Col>
                        </Row>
                    ))
            }
        </Col>
    );

}

export default PlaceOpeningHours;
