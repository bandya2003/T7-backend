import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import {
   useContract, 
   useContractRead, 
   useContractWrite,
   Web3Button 
  } from "@thirdweb-dev/react";

  const contractAddress = "0x919d5aAeb2fD6A026Dfd5820D3F7acDA4D527194";

  const Home: NextPage = () => {
  // 1. Connected to smart contract, via contract address.
  const {contract} = useContract("contractAddress");

  const { data: greeting, isLoading } = useContractRead(contract, "greet");

  // 2. Connected our wallet, swapped it to our chain cell , called a function pn our SC.
const { mutate: setGreeting } = useContractWrite(contract,"setGreeting");

  return (
    <main className={styles.main}>
      <h1> Hello world! </h1>
      <p>
        {isLoading ? "Loading..." : greeting}
      </p>
      <Web3Button
      contractAddress={contractAddress}
      action={() =>
        setGreeting({
          args: ["Hello Polygon!"],
        })
}
>
         Set greeting 
       </Web3Button>
    </main>
  );   
};

export default Home;
