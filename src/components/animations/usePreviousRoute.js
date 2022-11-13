import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const usePreviousRoute = () => {
  const { asPath } = useRouter();

  const ref = useRef(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return ref.current;
};