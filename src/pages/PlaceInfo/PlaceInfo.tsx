import { useEffect, useState } from "react";
import { getPlaceById } from "../../services/PlaceService";
import { Container, Row } from "react-bootstrap";
import Place from "../../models/Place";
import PlaceOverview from "../../components/PlaceOverview/PlaceOverview";
import PlaceOpeningHours from "../../components/PlaceOpeningHours/PlaceOpeningHours";
import { useParams } from "react-router-dom";

function PlaceInfo() {
    const [place, setPlace] = useState<Place | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { placeId } = useParams();

    useEffect(() => {
        getPlaceById(placeId || "")
            .then(response => setPlace(response.data || null))
            .catch(error => setErrorMessage(error.data))
    }, [placeId]);

    return (
        <Container>
            { errorMessage && errorMessage?.length > 0 ? <h1>{errorMessage}</h1> :
                <Row>
                    <PlaceOverview place={place} />
                <PlaceOpeningHours openingHours={place?.openingHours} />
            </Row>
            }
        </Container>
    );
}

export default PlaceInfo;
