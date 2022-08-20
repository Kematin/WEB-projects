from django.forms import Form, FloatField, ChoiceField, NumberInput

currency_suffics = (('usd', 'USD $'), ('eur', 'EUR €'), ('rub', 'RUB ₽'), 
                ('gbp', 'GBP £'), ('kzt', 'KZT ₸'), ('cny', 'CNY ¥'),
                ('jpy', 'JPY ¥'))
class MainCurrencyForm(Form):
    input_value = FloatField(min_value=0.01, label='',
            widget=NumberInput(attrs={'placeholder': '0,01'}))
    select_1 = ChoiceField(choices=(currency_suffics), label='')
    select_2 = ChoiceField(choices=(currency_suffics), label='')

