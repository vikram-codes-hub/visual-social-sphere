
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PopularHashtags = () => {
  const cryptos = [
    "#Bitcoin", "#Ethereum", "#Solana", "#Cardano", 
    "#Ripple", "#Dogecoin", "#Polkadot", "#Avalanche", "#Chainlink", "#Uniswap"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {cryptos.map((crypto, index) => (
            <div key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              {crypto}
              <span className="ml-1 text-xs text-[#eb63ff]">
                {Math.floor(Math.random() * 1000)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularHashtags;
