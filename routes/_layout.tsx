import { FreshContext } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

const Layout = async (req: Request, ctx: FreshContext) => {
  const Component = ctx.Component;
  const route = ctx.route;
  // last after /
  const page = route.split("/").pop();
  // if page is empty, it means we are at the root
  const selected = page === "" ? "List" : "Add";
  return (
    <body>
      <Header selected={selected} />
      <Component />
    </body>
  );
};

export default Layout;
