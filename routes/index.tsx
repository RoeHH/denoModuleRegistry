/** @jsx h */
import { h } from "../client_deps.ts";
import modules from "../data/modules.json" assert { type: "json" };

export default function Home() {
  return (
    <div>
      <h1>Deno Modules</h1>
      {modules.map((module) => <Module module={module} />)}
    </div>
  );
}

interface ModuleProps {
  module: {
    name: string;
    url: string;
  };
}

function Module(props: ModuleProps) {
  const { module } = props;
  const docUrl = "/x/" + module.name;
  return (
    <div>
      <h2>{module.name}</h2>
      <p>
        <a href={module.url}>src</a>
        <br/>
        <a href={docUrl}>doc</a>
      </p>
    </div>
  );
}
