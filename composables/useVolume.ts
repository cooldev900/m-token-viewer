import { useUseBackenURL } from "./useBackenURL";

const query = `
query MyQuery {
  volumeChanges {
    id
    volume
  }
}
`

export const useVolumes = () => {
  const apiUrl = useUseBackenURL();

  return useQuery({
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
}
