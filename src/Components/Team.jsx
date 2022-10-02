import { useEffect } from "react";
import Header from "./Header";

export default function Team() {
  useEffect(() => {
    document.title = "Our Team | MIC";
  }, []);

  return (
    <div>
      <Header />
      <div className="p-2">
        <div className="pl-12">
          <div className="text-5xl font-bold">Our Team</div>
          <p className="text-xl font-medium w-1/2">
            The strength of the MIC team is each individual member and the
            strength of each member makes up our Innovative team.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-6">
          <p className="text-3xl">Faculty Co-ordinator</p>
          <div className="border-2 border-black shadow p-3 rounded-lg hover:scale-105 transition duration-300 mt-6">
            <p>Dr. Anusha Kannan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
