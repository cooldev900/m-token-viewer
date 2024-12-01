import { useUseBackenURL } from "./useBackenURL";

const query = `
query FetchHoldersQuery {
  holders(where: { id_not: "0x0000000000000000000000000000000000000000" }) {
    id
    balance
  }
}
`

export const useHolders = () => {
  const apiUrl = useUseBackenURL();

  const { data, isLoading, error, refetch }  =useQuery({
    queryKey: [new Date().getTime()],
    queryFn: async () => {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch holders data.')
      }
      return response.json();
    }
  })

  return { data, isLoading, error, refetch };
}
