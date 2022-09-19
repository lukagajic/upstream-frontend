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
            {
                place?.currentlyOpen ?
                    <h2 style={{ color: "#0F0" }}>Open</h2> :
                    <h2 style={{ color: "#F00" }}>Closed</h2>
            }
        </Col>
    );
}

export default PlaceOverview;
