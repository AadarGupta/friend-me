// Interface of contact data needed from api call
export interface RawContact {
  cell: string;
  dob: {
    date: string;
    age: string;
  };
  email: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
