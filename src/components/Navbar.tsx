import { useLocation } from "react-router";
import { A, Div } from "../utils/motionSyntax";
const NAV_ITEMS = ["Dam", "Experience", "Projects"];

export default function Navbar() {
  const location = useLocation();

  return (
    <Div
      className="flex gap-c-10 bg-[#211F23] py-c-6 px-c-8 rounded-full drop-shadow-2xl w-fit relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {NAV_ITEMS.map((item) => {
        const hash = `#${item.toLowerCase()}`;
        return (
          <A
            href={`/#${item.toLowerCase()}`}
            key={item}
            className={`relative font-semibold text-c-5 transition-all duration-300 ${
              location.hash === hash
                ? "text-white"
                : "text-c-purple-300 hover:text-purple-400"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {item}
            {location.hash === hash && (
              <Div className="absolute -bottom-c-2 left-0 right-0 h-c-1 bg-purple-400 rounded-full" />
            )}
          </A>
        );
      })}
    </Div>
  );
}
