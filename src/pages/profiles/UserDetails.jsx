import React, { useState } from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import AvatarOption from "../../components/profiles/AvatarOption";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { auth } from "../../firebase";

const UserDetails = () => {
  const currentUser = auth.currentUser;
  const [activeTab, setActiveTab] = React.useState("posts");
  const [username, setUsername] = useState(currentUser.displayName);
  const data = [
    {
      label: "Posts",
      value: "posts",
      imgs: [
        {
          id: 1,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
        {
          id: 2,
          url: "https://img.freepik.com/premium-photo/mountain-lake-background_853558-46799.jpg",
        },
        {
          id: 3,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
        {
          id: 4,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
        {
          id: 5,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
        {
          id: 6,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
      ],
    },
    {
      label: "Drafts",
      value: "drafts",
      imgs: [
        {
          id: 1,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyS3CjmmR51QAWfotOaUvfZ4qtMdyexekPBTxOop0OWP9Yg1H-9q8i1qzzkRrD6B4CYQ&usqp=CAU",
        },
        {
          id: 2,
          url: "https://img.freepik.com/premium-photo/mountain-lake-background_853558-46799.jpg",
        },
        {
          id: 3,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
      ],
    },
    {
      label: "Likes",
      value: "likes",
      imgs: [
        {
          id: 1,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
        {
          id: 2,
          url: "https://img.freepik.com/premium-photo/mountain-lake-background_853558-46799.jpg",
        },
        {
          id: 3,
          url: "https://img.freepik.com/premium-photo/lake-landscape_967069-28.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <div className="w-full flex justify-center">
          <AvatarOption
            name={username}
            title={"My Profile Photo"}
            quote={"Set up your weGrow present and hiring needs"}
          />
        </div>
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none w-[90%] border-b flex justify-center mx-auto border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`w-[300px] text-lg ${
                  activeTab === value ? "text-gray-900" : ""
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="h-auto min-h-screen">
            {data.map(({ value, imgs }) => (
              <TabPanel
                key={value}
                value={value}
                className="w-[80%] mx-auto gap-y-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 min-w-screen-sm"
              >
                {imgs.map((img) => (
                  <div
                    key={img.id}
                    className="w-full mx-auto px-1 group overflow-hidden"
                  >
                    <img
                      className="w-[100%] h-[300px] transition-all duration-300 ease-in-out transform hover:scale-110"
                      src={img.url}
                      alt=""
                    />
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UserDetails;
