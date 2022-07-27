const CelsiusInput = document.querySelector('#celsius > input');
const FahrenheitInput = document.querySelector('#fahrenheit > input');
const KelvinInput = document.querySelector('#kelvin > input');

const roundToTwoDecPlace = (num) => {
  return num.toFixed(2);
};


const CelsiusToFaAndKe = () => {
  const CelsiusTemp = parseFloat(CelsiusInput.value);
  const FahrenheitTemp = (CelsiusTemp * 1.8) + 32;
  const KelvinTemp = CelsiusTemp + 273.15;

  FahrenheitInput.value = roundToTwoDecPlace(FahrenheitTemp);
  KelvinInput.value = roundToTwoDecPlace(KelvinTemp);
};


const FahrenheitToCeAndKe = () => {
  const FahrenheitTemp = parseFloat(FahrenheitInput.value);
  const CelsiusTemp = (FahrenheitTemp - 32) * (5 / 9);
  const KelvinTemp = (FahrenheitTemp + 459.67) * (5 / 9);

  CelsiusInput.value = roundToTwoDecPlace(CelsiusTemp);
  KelvinInput.value = roundToTwoDecPlace(KelvinTemp);
};

const KelvinToCeAndFa = () => {
  const KelvinTemp = parseFloat(KelvinInput.value);
  const CelsiusTemp = KelvinTemp - 273;
  const FahrenheitTemp =  1.8 * (KelvinTemp - 273) + 32;

  CelsiusInput.value = roundToTwoDecPlace(CelsiusTemp);
  FahrenheitInput.value = roundToTwoDecPlace(FahrenheitTemp);
};


const main = () => {
  CelsiusInput.addEventListener('input', CelsiusToFaAndKe);
  FahrenheitInput.addEventListener('input', FahrenheitToCeAndKe);
  KelvinInput.addEventListener('input', KelvinToCeAndFa);
};

main();