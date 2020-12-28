import { AppCoordinates } from './coordinates.model';
import { AppDate } from './date.model';

export interface Measurement{
    city: string;
    country: string;
    location: string;
    parameter: string;
    unit: string;
    value: number;
    coordinates: AppCoordinates;
    date: AppDate;
}