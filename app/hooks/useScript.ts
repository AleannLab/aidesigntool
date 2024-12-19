import { useEffect } from "react";

export const useScript = () => {
  useEffect(() => {
    function injectScripts(src: string) {
      const script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    injectScripts("/js/webflow.js");

    setTimeout(() => {
      window.scrollBy({
        top: 1,
        behavior: "smooth",
      });
    }, 1000);
  }, []);
};
