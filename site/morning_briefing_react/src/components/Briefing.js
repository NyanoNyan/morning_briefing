import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

const Briefing = () => {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
    const [stockSymbol, setStockSymbol] = useState("");
    const [weatherData, setWeatherData] = useState({});
    
    useEffect(() => {
        fetchStock();
        // getWeather();
        testtest();
    }, [])
    
    const fetchStock = () => {
        setStockSymbol('FB');
        const signal = AbortController.signal;
        const API_KEY = 'HGJWFG4N8AQ66ICD';
        // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let API_Call = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo";
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
    
        fetch(API_Call, { signal: signal })
          .then(
            function(response) {
              return response.json();
            }
          )
          .then(
            function(data) {
              console.log(data);
    
              for (var key in data['Time Series (Daily)']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
              }
    
              // console.log(stockChartXValuesFunction);
              setStockChartXValues(stockChartXValuesFunction);
              setStockChartYValues(stockChartYValuesFunction);
            }
          )
    }

    // async function getWeather(location = "London", tempUnit = "metric") {
    //     const apiID = "83155afc4a2fce2bd5ab6c3577570049";
    //     const errorDiv = document.querySelector(".error");
    
    //     try {
    //         // eslint-disable-next-line prefer-const
    //         let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiID}&units=${tempUnit}`;
    //         const response = await fetch(url, { mode: "cors" });
    
    //         const weatherData = await response.json();
    //         console.log(weatherData)
    //         // addData1.addWeather(weatherData.main.temp, weatherData.weather[0].description,
    //         //     weatherData.sys.country, weatherData.name, weatherData.weather[0].icon,
    //         //     weatherData.dt, weatherData.timezone);
            
    //         // Testing
    //         // console.log(weatherData);
    //     } catch {
    //         console.log("Yikes")
    //     }
    // }

    async function testtest() {
        console.log("I'm in test");
        try {
            const url = "http://127.0.0.1:5000/data/weather?postcode=DN147BJ";
            const response = await fetch(url, {method:"POST", mode: "no-cors" });
            const data = await response.json();

            console.log(response);
            console.log(data)
        } catch {
            console.log("hello");
        }
    }

    return (
        <div>
            {/* <h3>Daily briefing</h3> */}
            <div className="stock-items">
                <h4>Stock Briefing</h4>
                <button>
                    <div className="stock-values">
                        <p>This is Weather data items</p>
                        <Plot
                        data={[
                            {
                            x: stockChartXValues,
                            y: stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                            }
                        ]}
                        layout={{width: 580, height: 340, title: `Daily Price Open ${stockSymbol}`}}
                />
                    </div>
                </button>
            </div>

            <div className="weather-items">
                <h4>Weather</h4>
                <button>
                    <div className="weather-values">
                        <p>This is Stock data items</p>
                    </div>
                </button>
            </div>

            <div className="covid-details">
                <h4>Covid</h4>
                <button>
                    <div className="covid-values">
                        <p>This is Covid data items</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Briefing;
