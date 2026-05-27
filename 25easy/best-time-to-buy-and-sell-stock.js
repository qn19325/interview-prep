"use strict";
function maxProfit(prices) {
    let i = 0;
    let maxProf = 0;
    for (let j = 1; j < prices.length; j++) {
        console.log(`${i} ${j}`);
        const prof = prices[j] - prices[i];
        if (prof < 1) {
            i++;
        }
        maxProf = Math.max(maxProf, prof);
    }
    return maxProf;
}
;
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
