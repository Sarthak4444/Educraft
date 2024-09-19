import { Text } from "..";
import React from "react";

export default function MegaMenu1() {
  return (
    <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
      <div className="w-full rounded-lg bg-[#FFFFFF] p-5 shadow-[0_0_13px_5px_#00000029]">
        <div className="flex gap-[30px]">
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="text-[18px] font-bold text-[#860668] sm:text-[15px]">
              Title 1
            </Text>

            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 1
                </Text>
              </a>

              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 2
                </Text>
              </a>

              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 3
                </Text>
              </a>

              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 4
                </Text>
              </a>

              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 5
                </Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="text-[18px] font-bold text-[#000000] sm:text-[15px]">
              Title 2
            </Text>

            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 1
                </Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="text-[18px] font-bold text-[#000000] sm:text-[15px]">
              Title 3
            </Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 1
                </Text>
              </a>
              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 2
                </Text>
              </a>
              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 3
                </Text>
              </a>
              <a href="#" className="text-[16px] sm:text-[13px]">
                <Text className="text-[#656d76]">
                  Menu 4
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
