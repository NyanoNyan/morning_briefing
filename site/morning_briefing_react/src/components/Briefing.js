import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';
import "../style/Briefing.css"

const Briefing = () => {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
    const [currentStock, setCurrentStock] = useState([]);
    const [stockSymbol, setStockSymbol] = useState("");
    const [weatherData, setWeatherData] = useState({});
    
    useEffect(() => {
        fetchStock();
        // fetchStock2();
        // getWeather();
        // testtest();
        fetch("/data/weather", {method:"POST"})
            .then(response => response.json())
            .then((jsonData) => {
            // jsonData is parsed json object received from url
            setWeatherData(jsonData);
        })
        .catch((error) => {
        // handle your errors here
            console.error(error)
        })
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
              setCurrentStock(Object.values(data['Time Series (Daily)'])[0])  ;
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

    console.log(weatherData);
    console.log(currentStock);

    const weatherErrorCheck = (weatherData) => {
        if (weatherData === {} || weatherData === undefined) {
            return (
                <div>
                    <p>Sunny</p>
                    <p>11°C</p>
                    <p>Wind Speed: 22</p>
                    <p>Humidity: 66</p>
                </div>
            )
        } else {
            return (
                <div>
                <p>{weatherData[1].weather.description}</p>
                <p>{weatherData[1].temperature} °C</p>
                <p>Wind Speed: {weatherData[1].wind_speed}</p>
                <p>Humidity: {weatherData[1].humidity}</p> 
            </div>
            )
        }
    }

    return (
        
        <div className="main-container" >
            {/* <h3>Daily briefing</h3> */}
            <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet" />
            <div className="stock-items">
                <h4>Stock Briefing</h4>
                <button className="stock-button">
                    <div className="stock-values">
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
                        layout={{width: 580, height: 320, title: `Daily Price Open ${stockSymbol}`}}
                    />
                    </div>
                    <div className="text-data-stock">
                        <p>Key Statistics</p>
                        <div className="float-left">
                            <p>Open: {currentStock["1. open"]}</p>
                            <p>High: {currentStock["2. high"]}</p>
                        </div>
                        <div className="float-right">
                            <p>Low: {currentStock["3. low"]}</p>
                            <p>Volume: {currentStock["5. volume"]}</p>
                        </div>
                        <div className="middle">
                            <p>Close: {currentStock["4. close"]}</p>
                        </div>

                    </div>
                </button>
            </div>

            <div className="weather-items">
                <h4 className="weather-heading">Weather</h4>
                <button className="weather-button">
                    <div className="weather-values">
                        <img src="/img/clear_sky.png" />
                        {weatherErrorCheck()}
                    </div>
                </button>
            </div>

            <div className="covid-details">
                <h4>Covid</h4>
                <button className="covid-button">
                    <div className="covid-values">
                        <p>This is Covid data items, coming soon</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Briefing;
