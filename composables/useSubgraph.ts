import { useUseBackenURL } from "./useBackenURL";

const query = `
  query GetMTokenData {
    token(id: "1") {
      id
      volume
    }
    holders(where: { id_not: "0x0000000000000000000000000000000000000000" }) {
      id
      balance
    }
  }
`

export const useSubgraph = () => {
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
    },
    staleTime: 0,
  })

  return { data, isLoading, error, refetch };
}
