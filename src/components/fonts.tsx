import localFont from "next/font/local";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const nanumSquareNeo = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareNeoTTF-aLt.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-bRg.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-cBd.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-dEb.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-eHv.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

const FontLayout = (props: Props) => {
  return <div className={nanumSquareNeo.className}>{props.children}</div>;
};

export default FontLayout;
