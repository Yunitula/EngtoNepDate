# engtonepdateconvert

A javascript package to convert nepali date BS (Bikram Sambat) to AD and vice-versa. Also include a feature to calculate age in nepali date.

## Installation

```bash
npm install nepalidateconvert
```
## Usage

```jsx
const { adToBs, bsToAd, calculateAge } = require('nepalidateconvert');
try {
	const bsDate = adToBs('2078-03-05');
	console.log(bsDate);
	const myAge = calculateAge('2070-10-10');
	console.log(myAge);
} catch (e) {
	console.log(e.message);
}
```

## Available Methods

<pre>
adToBs('YYYY-MM-DD') - convert AD to BS date
bsToAd('YYYY-MM-DD') - convert BS to AD date
calculateAge('YYYY-MM-DD') - calculate age from BS date.
</pre>

## dateFormat

Format the date to provide various output based on format string

<pre>
YYYY - 4 digit of year (2078)
MM   - month number with 0 padding - (01-12)
DD   - Day of Month with zero padding (01-32)
</pre>

## Date Range

> Date convert will works between these Date Range:

Date Range for English Date : 1921 AD to 2040 AD

Date Range for Nepali Date : 1978 BS to 2099 BS

## License
MIT 
# EngtoNepDate
Nepali-English Date Converter (Till 2082 B.S.) Convert dates between Nepali (Bikram Sambat) and English (Gregorian) calendars accurately up to 2082 B.S. Supports both directions: Nepali to English and English to Nepali.
