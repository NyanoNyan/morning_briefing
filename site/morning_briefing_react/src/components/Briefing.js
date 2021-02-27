const Briefing = () => {
    return (
        <div>
            {/* <h3>Daily briefing</h3> */}
            <div className="stock-items">
                <h4>Stock Briefing</h4>
                <button>
                    <div className="stock-values">
                        <p>This is Weather data items</p>
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