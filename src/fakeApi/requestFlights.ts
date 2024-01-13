import Flight from "../types/flight";

export interface FiltersQuery {
  minimum_price: number;
  maximum_price: number;
  price_sort: "increase" | "decrease";
  limit: number;
  transfer: boolean;
  carriers_uids: string[];
}

const requestFlights = ({
  price_sort,
  transfer,
  minimum_price,
  maximum_price,
  carriers_uids,
  limit,
}: FiltersQuery): Promise<Flight[]> => {
  return new Promise((resolve) => {
    (async () => {
      const response = await fetch("./../assets/flights.json");
      const flights: Flight[] = (await response.json()).result.flights;

      const result = flights
        .sort((first: Flight, second: Flight) => {
          const firstAmount = +first.flight.price.total.amount;
          const secondAmount = +second.flight.price.total.amount;
          if (price_sort === "increase") return firstAmount - secondAmount;
          return secondAmount - firstAmount;
        })
        .filter((flight) => {
          if (transfer) return flight;
          return flight.flight.legs[0].segments.length === 1;
        })
        .filter((flight) => {
          const price = +flight.flight.price.total.amount;
          return price > minimum_price && price < maximum_price;
        })
        .filter((flight) => {
          if (carriers_uids.length === 0) return flight;
          return carriers_uids.find((uid) => uid === flight.flight.carrier.uid);
        });
      resolve(result.slice(0, limit));
    })();
  });
};

export default requestFlights;
