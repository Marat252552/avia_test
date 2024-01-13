export interface FlightElement {
  uid: string;
  caption: string;
}

export interface Carrier {
  uid: string;
  caption: string;
  airlineCode: string;
}

interface Segment {
  classOfServiceCode: string;
  classOfService: FlightElement;
  departureAirport: FlightElement;
  departureCity: FlightElement;
  departureDate: string;
  aircarft: FlightElement;
  travelDuration: number;
  arrivalAirport: FlightElement;
  arrivalCity: FlightElement;
  arrivalDate: string;
  flightNumber: string;
  stops: number;
  airline: FlightElement;
}

export interface Flight {
  flightToken: string;
  hasExtendedFare: boolean;
  flight: {
    carrier: Carrier;
    price: {
      total: {
        amount: string;
        currency: string;
        currencyCode: string;
      };
    };
    legs: {
      duration: number;
      segments: Segment[];
    }[];
  };
}

export default Flight;
