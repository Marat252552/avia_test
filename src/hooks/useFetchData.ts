import * as React from "react";

export type UseFetchDataResult<T> = [T, boolean, string];

/* Usage example:
 *
 * const [items, isFetching, error] = useFetchData(fetchFn, [], fetchFnParam1, fetchFnParam2);
 *         ^         ^         ^                      ^      ^           ^             ^
 *         |         |         |                      |      |           |             |
 *   fetched items   |         |            Fetch function   |           |             |
 *           fetching status   |                        Default value    |             |
 *                  Error instance or undefined                         params for fetchFn
 *
 * useFetchData hook calls fetch function and updates component local state (with useState) on updating `fetchFn` or `params`
 *
 * Do NOT set fetchFnParam as new object with {}:
 *     const [items, isFetching, error] = useFetchData(fn, [], { param1: 1, param2: 2 }}); - it creates infinity loop of calling fetchFn.
 *     use useState, useRef, UseMemo to save link to object and update it when it nessesary.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useFetchData<T, P = never>(
  fetchFn: (...params: P[]) => Promise<T>,
  defaultValue: T,
  ...params: Parameters<typeof fetchFn>
): UseFetchDataResult<T>;
export function useFetchData<T, P, R>(
  fetchFn: (...params: [P, R]) => Promise<T>,
  defaultValue: T,
  ...params: Parameters<typeof fetchFn>
): UseFetchDataResult<T>;
export function useFetchData<T, P, R, Q>(
  fetchFn: (...params: [P, R, Q]) => Promise<T>,
  defaultValue: T,
  ...params: Parameters<typeof fetchFn>
): UseFetchDataResult<T>;
export function useFetchData<T>(
  fetchFn: (...params: never[]) => Promise<T>,
  defaultValue: T,
  ...params: Parameters<typeof fetchFn>
): UseFetchDataResult<T> {
  const [data, setData] = React.useState<T>(defaultValue);
  const [isFetching, setFetching] = React.useState<boolean>(true);
  const [errorMessage, setErrorMessage] = React.useState<string>();

  React.useEffect(() => {
    let isDestroyed = false;
    const fetchData = async () => {
      setFetching(true);
      try {
        const fetchedData = await fetchFn(...params);
        if (!isDestroyed) {
          setData(fetchedData);
          setFetching(false);
          setErrorMessage(undefined);
        }
      } catch (error) {
        if (!isDestroyed) {
          setData(defaultValue);
          setFetching(false);
        }
      }
    };

    fetchData();

    return () => {
      isDestroyed = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...params]);

  return [data, isFetching, errorMessage || ""];
}

export default useFetchData;
