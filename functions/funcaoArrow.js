let compareComThis = function (param){
    console.log(this === param)
}

compareComThis(global)

let compareComThis2 = param => console.log(this === global);
compareComThis2(global)