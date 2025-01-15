import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import AntdResolver from "unplugin-auto-import-antd";
import Components from "unplugin-react-components/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Components({ dts: true }),
    AutoImport({
      imports: [
        "react",
        {
          "react-router": [
            "createBrowserRouter",
            "Route",
            "Routes",
            "RouterProvider",
            "Link",
            "useNavigate",
            "useParams",
            "useLocation",
            "useMatch",
            "Outlet",
            "Navigate",
            "BrowserRouter",
          ],
        },
        {
          "framer-motion": ["motion"],
        },
      ],
      dirs: [
        // Path ke custom hooks
        path.resolve(__dirname, "src/constans/"),
        path.resolve(__dirname, "src/pages/"),
        path.resolve(__dirname, "src/routes/"),
      ],
      resolvers: [AntdResolver()],
      eslintrc: {
        enabled: true,
      },
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      dts: true,
    }),
  ],
});
