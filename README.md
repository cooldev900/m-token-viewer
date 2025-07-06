# M-Token Viewer

M-Token Viewer is a web application designed to showcase information about the M-Token on Ethereum networks (Mainnet and Sepolia). This project utilizes Viem, Wagmi, and Reowned Kit for wallet interaction and a Subgraph for querying token-related data like holders, balances, volume, and balance history.

## Features
1. **Wallet Integration**:
   - Set up the project using **Viem**, **Wagmi**, and **Reowned Kit** for seamless wallet connections and blockchain interactions.

2. **Subgraph Deployment**:
   - **Mainnet Subgraph**: [Mainnet Playground](https://subgraph.satsuma-prod.com/cooldev900--377934/m-token-subgraph/playground)
   - **Sepolia Subgraph**: [Sepolia Playground](https://subgraph.satsuma-prod.com/cooldev900--377934/m-token-subgraph-sepolia/playground)
   - Fetch token data such as holders, balances, volume, and balance history.

3. **Data Display**:
   - Developed reusable components to display data from the Subgraph.
   - Integrated charts and tables to visualize token metrics like balance history and volume trends.

4. **Token Balance**:
   - Display the current M-Token balance for a connected wallet using the `useBalance` hook from Wagmi.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/m-token-viewer.git
   cd m-token-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root of your project and add the following:
   ```env
   VITE_APP_PROJECT_ID=your-project-id
   VITE_APP_SUBGRAPH_MAINNET=
   VITE_APP_SUBGRAPH_SEPOLIA=
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

### Wallet Integration
- Connect your wallet to interact with the M-Token on Mainnet or Sepolia.
- Supported networks are configured with Reowned Kit.

### View Token Data
- Switch between Mainnet and Sepolia using the network selector.
- View token holders, balances, and trading volumes fetched from the deployed Subgraphs.

### Token Balance
- Displays the connected wallet's current M-Token balance using Wagmi's `useBalance` hook.

---

## Project Structure
- **Subgraph**:
  - Queries are handled through the Subgraph for efficient blockchain data retrieval.
  - Separate subgraphs are deployed for Mainnet and Sepolia.

- **Frontend**:
  - Built with Vue 3 and Tailwind CSS for a responsive UI.
  - Utilizes ApexCharts for data visualization.

- **Blockchain Interaction**:
  - Uses Viem for direct blockchain queries.
  - Wagmi hooks (`useBalance`, `useAccount`) handle wallet connection and token balance retrieval.

---

---

## Contributing
Feel free to submit issues or pull requests for enhancements or bug fixes.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
- [Wagmi](https://wagmi.sh/)
- [Reowned Kit](https://reown.com/)
- [Satsuma Subgraphs](https://satsuma.xyz/)
