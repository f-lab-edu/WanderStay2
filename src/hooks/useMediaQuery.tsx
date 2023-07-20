import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const mobile = useMediaQuery({ query: "(max-width: 760px)" });

  useEffect(() => setIsMobile(mobile), [mobile]);

  return isMobile;
};
