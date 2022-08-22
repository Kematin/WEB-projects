import requests

API_KEY = "51151312dabd6e3616cc89c070b7994f"

def get_weather(lat: str, lon: str):
    API_CALL = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric'
    response = requests.get(API_CALL).json()
    weather = response.get('weather')[0]['description']
    t = response.get('main')['temp']
    return t, weather

def get_geocoding(city: str):
    API_CALL = f'http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={API_KEY}'
    response = requests.get(API_CALL).json()
    data = response[-1]
    return data['lat'], data['lon']

def return_data(city: str):
    lat, lon = get_geocoding(city)
    t, weather = get_weather(lat, lon)
    return t, weather

if __name__ == '__main__':
    city1 = 'London'
    city2 = 'Сургут'
    t, weather = return_data(city2)
    print(t, weather, city2)
