import { useUseBackenURL } from "./useBackenURL";

const createGraphqlQuery = (address: string) => `
query GetBalanceHistory {
  holder(id: "${address}") {
    id
    balance
    balanceChanges {
      timestamp
      id
      balance
    }
  }
}
`

export const useUseBalanceHistory = (address: string) => {
  const query = createGraphqlQuery(address);
  const apiUrl = useUseBackenURL();

  return useQuery({
    queryKey: [address, new Date().getTime()],
    queryFn: async () => {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch balance history data.')
      }
      return response.json();
    }
  })
}
