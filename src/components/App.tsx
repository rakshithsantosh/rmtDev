import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [jobItems, setJobItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async (searchText: string) => {
    console.log(`/api/data?search`);
    const response = await fetch(`/api/remote-jobs?search=${searchText}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    console.log(response);
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
