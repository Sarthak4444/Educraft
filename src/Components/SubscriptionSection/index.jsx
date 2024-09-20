import { Img, Button, Input, Heading } from "..";
import React from "react";

export default function SubscriptionSection() {
  return (
    <div className="container-xs bg-[#f7f7f7] w-screen flex justify-center px-5 mt-10">
      <div className="flex w-full items-center rounded-[20px] bg-[#170600] p-5 flex-col md:flex-row md:p-16">
        <div className="md:flex w-1/4 flex-col items-start gap-7 hidden">
          <Img
            src="https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Primary Image"
            className="h-[60px] w-[60px] rounded-[30px] object-cover"
          />
          <Img
            src="https://images.pexels.com/photos/2157086/pexels-photo-2157086.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Secondary Image"
            className="mr-14 h-[60px] w-[60px] self-end rounded-[30px] object-cover md:mr-0"
          />
          <Img
            src="https://images.pexels.com/photos/2169427/pexels-photo-2169427.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Tertiary Image"
            className="ml-[30px] h-[60px] w-[60px] rounded-[30px] object-cover md:ml-0"
          />
        </div>
        <div className="flex md:w-2/4 flex-col gap-10 px-14 w-full md:px-5">
          <div className="flex flex-col items-center justify-center gap-[26px]">
            <Heading
          
              as="h2"
              className="text-center font-['Poppins'] text-[35px] font-extrabold leading-[55px] text-[#ffffff] sm:text-[45px]"
            >
              <>
                Subscribe To Get Update
                <br />
                Every New Course
              </>
            </Heading>
            <Heading
              as="h3"
              className="text-[16px] font-normal text-[#ffffffb2] "
            >
              26k+ students daily learn with Educraft. Subscribe for new
              courses.
            </Heading>
          </div>
          <div className="flex justify-center flex-col md:flex-row">
            <Input
              shape="round"
              type="email"
              name="Email Input"
              placeholder="Enter your email"
              className="flex-grow md:!rounded-bl-[10px] md:!rounded-tl-[10px] md:!rounded-tr-[0] md:!rounded-br-[0] !rounded-[10px] font-medium"
            />
            <Button
              size="xl"
              className="min-w-[138px] rounded-br-[10px] rounded-tr-[10px] md:mt-0 mt-4 px-[30px] md:!rounded-tl-[0] md:!rounded-bl-[0] !rounded-[10px] font-medium sm:px-5"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="md:flex w-1/4 flex-col items-end gap-7 hidden">
          <Img
            src="https://images.pexels.com/photos/1998306/pexels-photo-1998306.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Quaternary Image"
            className="mr-[30px] h-[60px] w-[60px] rounded-[30px] object-cover md:mr-0"
          />
          <Img
            src="https://images.pexels.com/photos/5497002/pexels-photo-5497002.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Quinary Image"
            className="ml-14 h-[60px] w-[60px] self-start rounded-[30px] object-cover md:ml-0"
          />
          <Img
            src="https://images.pexels.com/photos/5179478/pexels-photo-5179478.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Senary Image"
            className="h-[60px] w-[60px] rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
