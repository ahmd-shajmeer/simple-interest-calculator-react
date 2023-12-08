import { TextField, Button, Stack } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [validPrinciple, setValidPrinciple] = useState(true);
  const [validRate, setValidRate] = useState(true);
  const [validYear, setValidYear] = useState(true);

  const handleCalculate = (e) =>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Fill the inputs completely!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidYear(true)
  }

  const validateUserInputs = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setValidPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(true);
      } else {
        setYear(value);
        setValidYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setValidPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(false);
      } else {
        setYear(value);
        setValidYear(false);
      }
    }
  };
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center bg-dark"
    >
      <div style={{ width: "600px" }} className="bg-light p-4 rounded">
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div
          style={{ width: "100%", height: "150px" }}
          className="d-flex justify-content-center align-items-center bg-warning mt-3 text-light shadow rounded flex-column"
        >
          <h1>₹ {interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>
        </div>
        <form className="mt-3" onSubmit={handleCalculate}>
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic-principle"
              label="₹ Principle Amount"
              variant="outlined"
              name="principle"
              value={principle || ""}
              onChange={(e) => validateUserInputs(e)}
            />
          </div>
          {!validPrinciple && (
            <div className="mb-3 text-danger fw-bolder">
              Invalid Principle Amount
            </div>
          )}
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic-rate"
              label="Rate of Interest (%)"
              variant="outlined"
              name="rate"
              value={rate || ""}
              onChange={(e) => validateUserInputs(e)}
            />
          </div>
          {!validRate && (
            <div className="mb-3 text-danger fw-bolder">Invalid Rate</div>
          )}
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic-time"
              label="Time Period (Yr)"
              variant="outlined"
              name="year"
              value={year || ""}
              onChange={(e) => validateUserInputs(e)}
            />
          </div>
          {!validYear && (
            <div className="mb-3 text-danger fw-bolder">Invalid Year</div>
          )}
          <div>
            <Stack spacing={2} direction={"row"}>
              <Button
                type="submit"
                style={{ height: "70px", width: "50%" }}
                className="bg-dark"
                variant="contained"
                disabled={validPrinciple&&validRate&&validYear?false:true}
              >
                CALCULATE
              </Button>
              <Button
                style={{ height: "70px", width: "50%" }}
                className="text-dark"
                variant="outlined"
                onClick={handleReset}
              >
                RESET
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
