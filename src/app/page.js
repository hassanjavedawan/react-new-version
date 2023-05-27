/** @format */
'use client'
import Herosection from "@/app/components/Herosection";
import Loading from "./loading";
import { Suspense, useEffect } from "react";

const Page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  // const [splash, setSplash] = useState(true);
  // useEffect(() => {
  //   // Simulate loading process
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  // }, []);
  return (
    <>
      {/* <Suspense fallback={<Loading />}>
        <Herosection />
      </Suspense> */}
    </>
  );
};

export default Page;
