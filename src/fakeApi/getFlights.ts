import Flight from "../types/flight";

interface FiltersQuery {
  // minimum_price: number;
  // maximum_price: number;
  price_sort: "increase" | "decrease";
  offset: number;
  limit: number;
  // time_sort: "increase" | "decrease";
  // transfer: boolean;
}

const getFlights = ({
  price_sort,
  offset,
  limit,
}: FiltersQuery): Promise<Flight[]> => {
  console.log(offset, limit);
  return new Promise((resolve) => {
    (async () => {
      const response = await fetch("./../assets/flights.json");
      const { flights } = (await response.json()).result;

      let result;

      if (price_sort === "increase")
        result = flights.sort((first: Flight, second: Flight) => {
          return (
            +first.flight.price.total.amount - +second.flight.price.total.amount
          );
        });
      if (price_sort === "decrease")
        result = flights.sort((first: Flight, second: Flight) => {
          return (
            +second.flight.price.total.amount - +first.flight.price.total.amount
          );
        });
      resolve(result.slice(0, limit));
    })();
  });
};

export default getFlights;
