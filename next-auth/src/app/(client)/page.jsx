// "use client";
import { Tooltip } from "@nextui-org/tooltip";
import Sidebar from "./_components/Sidebar";
import ContactInformationSession from "./_components/ContactInformation";
import { Divider } from "@nextui-org/react";
import MyProjectsSession from "./_components/MyProjects";
import MyFavoriteSession from "./_components/MyFavorite";

export default async function HomePage() {
  return (
    <div className="pt-20 py-10">
      <div className="container mx-auto p-5 rounded shadow-around dark:shadow-white">
        <Tooltip
          showArrow={true}
          content={
            "Started exposure to the first programming language at the age of 18, constantly trying and learning to improve myself."
          }
          color="success"
        >
          <h1 className="text-center font-bold text-2xl">Portfolio</h1>
        </Tooltip>

        <div className="grid grid-cols-12 space-x-5">
          <Sidebar />
          <div className="col-span-9">
            <ContactInformationSession />
            <Divider />
            <MyProjectsSession />
            <Divider />
            <MyFavoriteSession />
          </div>
        </div>

        <div className="text-center">
          © 2023 Nguyen Xuan Phong. All rights reserved.
        </div>
      </div>
    </div>
  );
}
