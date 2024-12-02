const createGraphqlQuery = (address: string) => `query GetBalanceHistory {
  holder(id: "${address}") {
    id
    balance
    balanceChanges(orderBy:timestamp) {
      timestamp
      id
      balance
    }
  }
}`;

export const fetchBalanceHistory = async (address: string) => {
  const apiUrl = useUseBackenURL();
  const query = createGraphqlQuery(address);
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch balance history data.");
  }
  return response.json();
};
