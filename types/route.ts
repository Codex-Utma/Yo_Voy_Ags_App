import { FeatureCollection } from 'geojson';

export interface BusLocationType {
    id: number,
    name: string,
    location: {
        latitude: number,
        longitude: number,
    }
}

export interface RouteType {
    way: FeatureCollection,
    name: string,
    from: string,
    to: string,
    frequency: string,
    schedule: string,
    color: string,
    buses: BusLocationType[],
}
