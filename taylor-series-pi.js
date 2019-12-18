// Taylor Series of arctan(x)
const taylorSeries = n => {
  const exp = (2 * n) + 1;
  return (Math.pow(-1,n))*((Math.pow(1,exp))/(2*n+1));
}

// Calculate estimate of PI using Taylor Series
const estimatePi = numOfIterations => {
  let result = 0;
  
  for (let i = 0; i < numOfIterations; i++) {
    result += taylorSeries(i)
  }

  return result * 4;
}

// Calculate error based on the estimated value
const estimateError = (estimatePi) => {
  const pi = Math.PI;
  return Math.abs(estimatePi - pi);
}

// Display results
const display = (numOfIterations) => {
  const estimate = estimatePi(numOfIterations);
  const error = estimateError(estimate);
  console.log(`Estimate of pi using a Taylor Series: ${estimate}`);
  console.log(`Pi using Math.PI: ${Math.PI}`);
  console.log(`Error of the estimate over ${numOfIterations} iterations: ${error}`);
}

display(20);