import { RawContact } from './rawContact';

// Interface of data needed from api call
export interface RawData {
  results: Array<RawContact>;
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
}
