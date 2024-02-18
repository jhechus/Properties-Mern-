"use client";

import { Button } from "antd";
import React from "react";

function BuySubcription({ plan }: { plan: any }) {
  return (
    <div>
      <Button block disabled={plan.price === 0}>
        Buy now
      </Button>
    </div>
  );
}

export default BuySubcription;
