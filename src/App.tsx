import LinkToQuery from "./components/LinkToQuery";
import QueryToLink from "./components/QueryToLink";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <p className="mt-6 tracking-wide font-bold">Convert query to link</p>
      <QueryToLink />
      <LinkToQuery />
    </div>
  );
};

export default App;
