import React from 'react'
import { Header } from '../../components/Header'
import AvatarOption from '../../components/profiles/AvatarOption'
import Settings from '../../components/profiles/Settings'

import {
  Card,
  Input,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const AccountPage = () => {
  return (
    <>
        <Header />
        <div className='container mx-auto'>
          <AvatarOption title={"Edit Profile"} />

          {/* settingOption + Form */}
          <div className='grid lg:grid-cols-3 place-items-center lg:place-items-start m-16'>

            {/* setting */}
            <div className='lg:col-span-1'>
              <Settings />
            </div>
            
            {/* form */}
            <div className='lg:col-span-2 place-self-center mt-10 lg:mt-0'>
              <Card color="transparent" shadow={false}>
                <form className="mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-2xl">
                      Name
                    </Typography>
                    <Input
                      placeholder="Username"
                      className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      value={"Son Chhay"}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-xl">
                      Location
                    </Typography>
                    <Input
                      size="xl"
                      placeholder="Link URL"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      value={"Phnom Penh"}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-xl">
                      Bio
                    </Typography>
                    <Textarea size="lg" label="Brief description for your profile" value={"Hello Kon PAPA"} />

                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-xl">
                      Personal Website
                    </Typography>
                    <Input
                      type="text"
                      size="lg"
                      placeholder="Link URL"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      value={"www.chhay.com.kh"}
                    />
                  </div>
                  <div className='w-full flex justify-end '>
                    <button className="mt-6 w-32 h-10 font-medium text-white rounded-full hover:bg-indigo-600 bg-[#1400FF] duration-200">
                      Save Profile
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div> 
    </>
  )
}

export default AccountPage