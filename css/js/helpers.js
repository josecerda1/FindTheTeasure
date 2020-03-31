let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

//Aca creamos una funcion que tomara el clock y el objeto tesoro
let getDistance = (e, target)=>{
    //guardamos donde da el click el usuario con el tesoro
    //esto en eje X
    //OFFSETX DONDE CLICK --- TARGET.X TESORO
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;
    console.log("diffx==" , diffx );
    console.log("diffy==" , diffy );
    return Math.sqrt( diffx * diffx +
     diffy * diffy);
}

let getDistanceHint = distance => {
    if (distance < 10){
        return "So close";
        
    } else if (distance < 40) {
        return "Very close";
    } else if (distance < 60) {
        return "Close";
    } else if (distance < 100) {
    return "Far";
    } else if (distance < 180) {
    return "Far away";
    } else if (distance < 360) {
    return "Far far away";
    
    } else {
        return "You're lost!";
    }
}