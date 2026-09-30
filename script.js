// const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let resultArr = [];
	let i=0;
	while(i<arr.length){
	    // console.log("hello");
	    let sum = 0;
	    let tempArr = [];
	    while(i<arr.length && sum+arr[i] <= n ){
	        // console.log("hi");
	        sum += arr[i];
	        console.log(`sum = ${sum}`);
	        tempArr.push(arr[i]);
	        i++;
	    }
	    resultArr.push(tempArr);
	}
	return resultArr;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
