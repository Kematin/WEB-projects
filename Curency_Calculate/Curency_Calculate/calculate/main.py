import requests

def convert(currency_1: str, currency_2: str, value: int) -> int:
    url = 'https://api.exchangerate.host/latest'
    response = requests.get(url).json()
    currencies = response.get('rates')

    total = round((currencies[currency_2] / currencies[currency_1]) * value, 2)
    return total


if __name__ == '__main__':
    c_1 = 'EUR'
    c_2 = 'RUB'
    value = 2
    answer = convert(c_1, c_2, value)
    print(answer)
