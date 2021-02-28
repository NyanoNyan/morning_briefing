
import requests

import json



cov_lat = 52.4068 # Google me!
cov_lng = 1.5197 # Google me!
ldn_lat = 51.5074 # Google me!
ldn_lng = 0.1278 # Google me!

apikey = "43bd69ce129c6dc4a142b0caf2934966"

def get_weather(lat,lon,part,APIkey,):
    
    url = f"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=daily,minutely,alerts&units=metric&&appid={APIkey}"
    #print(url)
    
    response = requests.get(url)
    y = (response.json())
    x =  json.dumps(y)   
    return json.loads(x)
    


time = 'daily,minutely,alerts'
ldn_lat = 51.5074 # Google me!
ldn_lng = 0.1278 # Google me!






data = get_weather(ldn_lat,ldn_lng,time,apikey)

datetime = data['current']['dt']

temp = data['current']['temp']

feels_like = data['current']['feels_like']

humidity = data['current']['humidity']

wind_speed = data['current']['wind_speed']

weather_id = data['current']['weather'][0]['id']

main = data['current']['weather'][0]['main']

description = data['current']['weather'][0]['description']

dict = {
        "datetime": datetime,
        "temp": temp,
        "feels_like" : feels_like,
        "humidity" : humidity,
        "wind_speed" : wind_speed,
        "weather":{"weather_id" : weather_id,
                  "main" : main,
                  "description" : description}
        }
list = [dict]

for i in range (0,48):
    dict = {
        "datetime": data['hourly'][i]['dt'],
        "temp": data['hourly'][i]['temp'],
        "feels_like": data['hourly'][i]['feels_like'],
        "humidity": data['hourly'][i]['humidity'],
        "wind_speed": data['hourly'][i]['wind_speed'],
       "weather":{"weather_id" : data['hourly'][i]['weather'][0]['id'],
       "main" : data['hourly'][i]['weather'][0]['main'],
       "description" : data['hourly'][i]['weather'][0]['description']}
        
        }
    list.append(dict)    
  
print(list)
