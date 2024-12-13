import { Link, useLocation } from "react-router";
import { NAV_ITEMS } from "./constans/constant";
import AppRouter from "./routes/router";

export default function App() {
  const location = useLocation();

  const Navbar = () => {
    return (
      <div className="nav-container w-fit">
        {NAV_ITEMS.map((item, index) => (
          <Link to={`/${item}`} key={index}>
            <button
              className={`${
                location.pathname === `/${item}`
                  ? "text-white"
                  : "text-c-purple-300"
              } hover:text-[18px] hover:duration-200 hover:ease-in-out`}
            >
              {item}
            </button>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <main className="bg-black text-white px-[clamp(42px,10.687vw,200px)]">
      <header className="hidden pt-[clamp(20px,5.089vw,30px)] md:grid md:place-items-center">
        <Navbar />
      </header>
      <AppRouter />
      <footer className="fixed top-[85%] left-1/2 -translate-x-1/2 md:hidden">
        <Navbar />
      </footer>
    </main>
  );
}
