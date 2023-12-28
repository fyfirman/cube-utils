import { useState } from "react";

const LinkToQuery = () => {
  const [query, setQuery] = useState("");

  const handleLinkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const link = e.target.value;
    const rawQuery = link.split("?query=")[1];

    if (!rawQuery) {
      return;
    }

    const query = rawQuery.replaceAll("%22", '"');

    const json = {
      query: JSON.parse(query),
    };


    setQuery(JSON.stringify(json));
  };

  return (
    <div className="flex justify-center mt-4 gap-3 h-[30vh] w-full p-2">
      <div className="flex flex-col flex-1">
        <label htmlFor="link-2">Link</label>
        <textarea
          id="link-2"
          className=" border-zinc-400 border h-full p-2"
          onChange={handleLinkChange}
        />
      </div>

      <div className="flex flex-col flex-1">
        <label htmlFor="query-2">Query</label>
        <textarea
          id="query-2"
          className=" border-zinc-100 border bg-zinc-100 h-full p-2"
          disabled
          value={query}
        />
      </div>
    </div>
  );
};

export default LinkToQuery;
