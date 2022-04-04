/** @jsx h */
import { h, PageProps } from "../client_deps.ts";
import Home from "./index.tsx";
import modules from "../data/modules.json" assert { type: "json" };

export const handler = {
  GET(req: { headers: { get: (arg0: string) => string } }, props: PageProps) {
    const module = modules.filter((m: { name: any }) =>
      m.name === props.params.module
    );
    if (module.length !== 0) {
      if (req.headers.get("User-Agent")?.slice(0, 4) === "Deno") {
        return fetch(module[0].url);
      } else {
        return Response.redirect("https://doc.deno.land/" + module[0].url);
      }
    }
  },
};

export default function ModulePage(props: PageProps) {
  return (
    <div>
      <h1>{props.params.module} not found</h1>
      <Home />
    </div>
  );
}
