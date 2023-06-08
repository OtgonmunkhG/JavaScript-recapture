console.log("numbers sum")
const guestNumber = [234, 67, 9, 34]

let container = 0
let numbers = 0
for(let i = 0; i < guestNumber.length; i++) {
    if(guestNumber[i] > [i]) {
                container = guestNumber[i] 
                console.log("point", container)
                numbers = container
                console.log("numbers", numbers)
                if(container < numbers) {
                    // numbers = container
                    // console.log("check", numbers)
                }
    }
}

