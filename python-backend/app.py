from flask import Flask, request
import json
import datetime

# Create the application instance
app = Flask(__name__)


# Converter for json.dumps
def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

# Create a URL route in our application for "/"
@app.route('/')
def index():
    """
    This function just responds to the browser URL
    localhost:5000/
    """
    return "Hello World"

# Other URL routes
@app.route('/login', methods=['POST'])
def login():
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@app.route('/data/weather', methods=['POST'])
def data_weather():
    postcode = request.args.get('postcode')

    # Example data:
    utc_dt_aware = datetime.datetime.now(datetime.timezone.utc)
    example_weather = [
        {
            'datetime': 1586487424, 'temperature': 27.35, 'feels_like': 24.21, 'humidity': 65, 'wind_speed': 65,
            'weather': {'id': 800, 'main': 'Clear', 'description': 'clear sky'}
        },
        {
            'datetime': 1586497424, 'temperature': 15.41, 'feels_like': 4.27, 'humidity': 78, 'wind_speed': 93,
            'weather': {'id': 800, 'main': 'Clear', 'description': 'clear sky'}
        },
    ]

    return json.dumps(example_weather, default=myconverter), 200, {'ContentType': 'application/json'}


@app.route('/data/stocks', methods=['POST'])
def data_stocks():
    symbol = request.args.get('symbol')

    example_stocks = [
        {'date': '2021-02-26', 'openingPrice': 126.67},
        {'date': '2021-02-25', 'openingPrice': 123.12}
    ]

    return json.dumps(example_stocks), 200, {'ContentType': 'application/json'}


# If we're running in stand alone mode, run the application
if __name__ == '__main__':
    app.run(debug=True)
