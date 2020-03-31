

const WIDTH = 400;
const HEIGH = 400;


let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

console.log(target);

let $map = document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0;
$map.addEventListener('click', function (e) {
    clicks ++;
    console.log('click');
    let distance = getDistance(e, target );
    console.log(distance);
    let distanceHint = getDistanceHint(distance);
    console.log(distanceHint);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`
    
    if (distance < 1.5 ) {
        alert(`Found the tesoure! in ${clicks} clicks`)
        location.reload();
    }

});
