'use strict'

function kpk(maxNum) {
	let status = false
	let count = 0
	let tebakan = maxNum

	while(!status){
		for(let i = 1; i<=maxNum; i++) {
      if(tebakan%i===0) {
        count = count + 1
      }
    }

    if (count === maxNum) {
      status = true
    } else {
      // reset the count
      count = 0
      tebakan = tebakan + 1
    }
	}
	
	return tebakan
}

// testing
console.log(kpk(10))
console.log(kpk(15))
