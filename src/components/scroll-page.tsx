import { MoveUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollPage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          role="button"
          aria-label="Scroll to top"
          className="fixed bottom-6 sm:right-4 w-14 h-14 shadow-md rounded-full flex items-center justify-center z-[99] max-sm:bottom-28 max-sm:left-4 max-sm:w-12 max-sm:h-12 border-2 bg-light  text-dark transition-all duration-500 ease-in-out"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <MoveUp size={20} className="" />
        </button>
      )}
    </>
  );
}
