
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDownRight, ArrowUpRight, RotateCcw } from "lucide-react";

interface TransactionItem {
  type: "buy" | "sell" | "swap";
  asset: string;
  amount: string;
  value: string;
  time: string;
}

const RecentActivity = () => {
  const transactions: TransactionItem[] = [
    { type: "buy", asset: "Bitcoin", amount: "0.25 BTC", value: "$15,870", time: "2 minutes ago" },
    { type: "sell", asset: "Ethereum", amount: "2.5 ETH", value: "$8,554", time: "15 minutes ago" },
    { type: "swap", asset: "SOL to ADA", amount: "32 SOL", value: "$4,572", time: "1 hour ago" },
    { type: "buy", asset: "Ripple", amount: "1,500 XRP", value: "$930", time: "3 hours ago" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="flex items-center gap-3 py-2 border-b last:border-0">
              <div className={`p-2 rounded-full ${
                tx.type === "buy" ? "bg-green-100" : 
                tx.type === "sell" ? "bg-red-100" : "bg-blue-100"
              }`}>
                {tx.type === "buy" ? (
                  <ArrowDownRight className={`h-5 w-5 text-green-500`} />
                ) : tx.type === "sell" ? (
                  <ArrowUpRight className={`h-5 w-5 text-red-500`} />
                ) : (
                  <RotateCcw className={`h-5 w-5 text-blue-500`} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">
                    {tx.type === "buy" ? "Bought " : 
                     tx.type === "sell" ? "Sold " : "Swapped "}
                    {tx.asset}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{tx.amount}</p>
                <p className="text-xs text-muted-foreground">{tx.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
