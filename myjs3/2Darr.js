/*let twoDarr = [
            ["aman","B.tech","TIU","60"],
            ["rohan","B.tech","IIT","50"],
            ["sohan","B.tech","NIT","80"],
            ["sohan","B.tech","IIIT","30"],
];

console.log(twoDarr[2][3]); // marks of sohan

for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        console.log(twoDarr[i][j]);
    }
}*/

/*let tArr = [[1,2,3,4],
           [5,6,7,8]
]
for(let i=0;i<2;i++){
    for(let j=0;j<4;j++){
        console.log(tArr[i][j]*5);
    }
}

tArr.forEach((Element,x) =>{
    Element.forEach((ele,y) =>{
        console.log(ele,`endex is ${x} ${y}`);
    })
});*/
/*let m=4;
let n=4;
let tArr = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
]
let output=""
let rowTemp = ""
let colTemp = ""
for(let i=0,j=0;i<m && j<n;j++){
    output = output + tArr[i][j];
}
console.log(output);*/

let mat = new Array(4).fill(0).map(arr => new Array(5).fill(0));
//console.log(mat)
let count=0
for(let i=0;i<4;i++){
	for(let j=0;j<5;j++){
		mat[i][j] = count++;
	}
}

console.log(mat)
