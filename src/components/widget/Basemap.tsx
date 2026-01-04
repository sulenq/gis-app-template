"use client";

import { CContainer } from "@/components/ui/c-container";
import { Img } from "@/components/ui/img";
import { IMAGES_PATH } from "@/constants/paths";

export const Basemap = () => {
  return (
    <CContainer flex={1} h={"50%"} overflow={"auto"}>
      <Img src={`${IMAGES_PATH}/dummyMap.jpeg`} fluid flex={1} />
    </CContainer>
  );
};
