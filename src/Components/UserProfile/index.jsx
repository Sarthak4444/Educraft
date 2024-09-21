import { Heading, Img } from "..";
import React from "react";

export default function UserProfile({
  userSubject = "Maths - Introduction",
  userTime = "1:57",
  ...props
}) {
  return (
    <div
      {...props}
      className={` ${props.className} flex items-center gap-3 p-2.5 flex-1 cursor-pointer rounded-lg bg-[#FfffFf] hover:shadow-[0_50px_50px_0_#00000019]`}
    >
      <Img
        src="https://dhws-production.s3.ap-south-1.amazonaws.com/66e9325c132e0c00237c680a/66e932f647ed1f001be8a9f9/66e932f647ed1f001be8aa02/appSource/images/img_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240921%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240921T140414Z&X-Amz-Expires=25200&X-Amz-Signature=fe119026d4b5094a6210bc8db3d739a76eef0c5a3b3ff60cbba8141ee9480366&X-Amz-SignedHeaders=host"
        alt="Profile Image"
        className="h-[50px] w-[80px] rounded-md object-cover"
      />
      <div className="flex flex-1 flex-col items-start justify-center gap-1">
        <Heading
          size="headingxs"
          as="h6"
          className="text-[18px] font-semibold text-[#000000]"
        >
          {userSubject}
        </Heading>
        <Heading
          size="textxs"
          as="p"
          className="text-[14px] font-medium text-[#ff6652]"
        >
          {userTime}
        </Heading>
      </div>
    </div>
  );
}
