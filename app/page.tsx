"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [btcPrice, setBtcPrice] = useState("");
  const onClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/btc").then((res) => res.json());
      setBtcPrice(res.data.priceUsd);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-24 p-24">
      <p>Get BitCoin price in real time!</p>
      {loading ? <p>loading</p> : <button onClick={onClick} className="border px-4 py-2 ">Get price</button>}
      {!!btcPrice && <p>{btcPrice}</p>}
    </main>
  );
}
