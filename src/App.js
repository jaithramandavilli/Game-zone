import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    );
    setData(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="container-fluid mt-2">
        <div className="row">
          {
            data.map((res) => {
              if (!res.title) {
                return null;
              }
              return (
                <div className="col-md-4">
                  <div className="card shadow p-3 mb-4 bg-gradient rounded p-3 mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="ms-2 c-details">
                          <h6 className="mb-0 genre">{res.genre}</h6>

                          {res.editors_choice === "Y" && (
                            <h6 className="edchoice">
                              Editors Choice
                            </h6>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="heading">
                        <h4>{res.title}</h4>

                        <h5>{res.platform}</h5>
                      </h3>
                      <div className="mt-5">

                        <div className="mt-3">
                          <span className="text1">
                            Rating:{" "}
                            <span className="text2">{res.score} of 10</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
          
        </div>
      </div>
    
  );
}

export default App;