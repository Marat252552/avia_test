import Flight, { Carrier } from "../types/flight";

const requestCarriers = async (): Promise<Carrier[]> => {
  return new Promise((resolve) => {
    (async () => {
      const response = await fetch("./../assets/flights.json");
      const flights: Flight[] = (await response.json()).result.flights;

      const carriers = flights.map((flight) => flight.flight.carrier);

      const noDuplicates: Carrier[] = [];
      for (const carrier of carriers) {
        if (!noDuplicates.find((item) => item.uid === carrier.uid))
          noDuplicates.push(carrier);
      }

      resolve(noDuplicates);
    })();
  });
};

export default requestCarriers;
