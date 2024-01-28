
class DescriptiveStatistics{
constructor(){
  this.data= data;
}
 
//measure of central tendency
mean(){
  let sum = 0
  for (let a of this.data)
  sum+= a;
  return  Math.floor(sum / this.data.length);
}

median(){
  const sortedData = this.data.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
        return sortedData[middleIndex];
    }

}

mode(){const frequencyMap = new Map();
  for (const value of this.data) {
    frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
  }

  let mode;
  let maxFrequency = 0;

  for (const [value, frequency] of frequencyMap.entries()) {
    if (frequency > maxFrequency) {
      mode = value;
      maxFrequency = frequency;
    }
  }

  return mode;}

   // Measures of Dispersion
 
   range(){
 let number= this.data;
 let max= number.reduce((acc,curr)=>{
  return Math.max(acc,curr);
 }, number[0]);
 
 let min= number.reduce((acc,curr)=>{
  return Math.min(acc,curr);
 }, number[0]);
 
 return max-min
 }
 variance(){
  const meanValue = this.mean();
  const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
  const sumSquaredDiff = squaredDifferences.reduce((acc, value) => acc + value, 0);
  return sumSquaredDiff / this.data.length;
 }
 standardDeviation() {
  return Math.sqrt(this.variance());
}

meanAbsoluteDeviation(){
  let loop= this.data
  let sum=0
 for(let i=0; i<loop.length; i++){
  (loop[i]=Math.abs(loop[i]-this.mean()),sum+=loop[i])
  }
  return  Math.floor(sum/this.data.length)
}
 // this function is used to calculate the median for quartileDeviation
medianForQD(arr) {
  const sortedData = arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
        return sortedData[middleIndex];
    }
}
quartileDeviation(){
  let myData= this.data.sort((a,b)=> a - b);
  const length= myData.length;
  const midPoint=Math.floor(length/2);
  // Using slice to split the array into two parts
  let q1= myData.slice(0,midPoint);
  let q3= myData.slice(midPoint);
  
  const median1 = this.medianForQD(q1);
    const median2 = this.medianForQD(q3);
  
    return (median2 -median1)/2;
  
}

}
const data = [1, 2, 3, 4, 5, 5, 6,6,6, 6, 7, 8, 8, 9, ];
const statistics = new DescriptiveStatistics(data);

console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("range:", statistics.range());
console.log("Variance:", statistics.variance());
console.log("StandardDeviation:", statistics.standardDeviation());
console.log("meanAbsoluteDeviation:", statistics.meanAbsoluteDeviation())
console.log("quartileDeviation",statistics.quartileDeviation())





