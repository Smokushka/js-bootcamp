let isGuestOneVagan = false
let isGuestTwoVegan = false

if (isGuestOneVagan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestTwoVegan || isGuestOneVagan) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer up anything on the menu')
}