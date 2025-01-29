import { useEffect, useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, setJobItems] = useState([]);

  const fetchData = async (searchText: string) => {
    const response = await fetch(
      `https://bytegrad.com/corse-assets/projects/rmtdev/api/data?search=${searchText}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setJobItems(data.jobItems);
  };

  useEffect(() => {
    if (!searchText) return;
    fetchData(searchText);
  }, [searchText]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
