export default interface Place {
    placeName: string;
    placeAddress: string;
    openingHours: Map<string, string[]>;
}