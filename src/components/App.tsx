import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [jobItems, setJobItems] = useState([]);
  const [searchText, setSearchText] = useState("");
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
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItems} />
      <Footer />
    </>
  );
}

export default App;
