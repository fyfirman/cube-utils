import { useState } from "react";
import { convertQueryToSingeLine } from "../utils/parser";

const QueryToLink = () => {
  const [baseURL, setBaseURL] = useState("");
  const [singleLineQUery, setSingleLineQuery] = useState("");
  const [error, setError] = useState("");

  const link = `${
    !!baseURL ? baseURL : "http://localhost:4000"
  }/#/build?query=${singleLineQUery}`;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError("");
    let json;
    try {
      json = JSON.parse(e.target.value);
    } catch (error) {
      setError("Invalid JSON");
    }

    if (!json.query) {
      setError("Invalid query");
      return;
    }

    setSingleLineQuery(convertQueryToSingeLine(json.query));
  };

  return (
    <div className="flex justify-center mt-4 gap-3 h-[30vh] w-full p-2">
      <div className="flex flex-col flex-1">
        <label htmlFor="base-url">Base Url</label>
        <input
          id="base-url"
          className=" border-zinc-400 border p-2"
          onChange={(e) => setBaseURL(e.target.value)}
          placeholder="http://localhost:4000/"
        />
        <label htmlFor="query">Query</label>
        <textarea
          id="query"
          className=" border-zinc-400 border h-full p-2"
          onChange={handleChange}
        />
        <span className="text-red-500">{error}</span>
      </div>

      <div className="flex flex-col flex-1">
        <label htmlFor="link">Single Line Query</label>
        <textarea
          id="link"
          className=" border-zinc-100 border bg-zinc-100 h-full p-2"
          disabled
          value={singleLineQUery}
        />
        <div className="flex gap-2 pt-2 justify-between">
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-zinc-200 text-white rounded cursor-not-allowed"
              disabled
            >
              Copy Single Line Query
            </button>
            <button
              className="px-4 py-2 bg-zinc-200 text-white rounded cursor-not-allowed"
              disabled
            >
              Copy Link
            </button>
          </div>
          <a href={link} className="px-4 py-2 bg-purple-500 text-white rounded">
            Open Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default QueryToLink;
