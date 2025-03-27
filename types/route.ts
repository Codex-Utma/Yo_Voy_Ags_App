import { FeatureCollection } from 'geojson';

export interface RouteType {
    way: FeatureCollection,
    name: string,
    from: string,
    to: string,
    frequency: string,
    schedule: string,
    color: string,
}
