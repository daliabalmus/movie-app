import { useEffect, useState } from "react";

const ReachBottom = () => {
  const [reachBottom, setReachBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;

      if (windowBottom >= docHeight - 100) {
        setReachBottom(true);
      } else {
        setReachBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return reachBottom;
};
export default ReachBottom;
