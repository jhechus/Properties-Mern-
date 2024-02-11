import Filters from "@/components/filters";
import Loader from "@/components/loader";
import { Suspense } from "react";
import Properties from "./user/properties/page";
import PropertiesData from "./_components/properties-data";

export default async function Home() {
  return (
    <div>
      <Filters />
      <Suspense fallback={<Loader />}>
        <PropertiesData />
      </Suspense>
    </div>
  );
}
