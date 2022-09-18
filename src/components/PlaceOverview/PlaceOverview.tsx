import { Col } from "react-bootstrap";
import Place from "../../models/Place";

interface PlaceOverviewProps {
    place: Place | null;
}

const PlaceOverview: React.FC<PlaceOverviewProps> = ({ place }) => {
    return (
        <Col style={{ padding: '10px', backgroundColor: '#fff' }} md={5}>
            <h1>{place?.placeName}</h1>
            <h2>{place?.placeAddress}</h2>
        </Col>
    );
}

export default PlaceOverview;
