
function Datasend(key, arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key , data);

    return true;
}



function dataGet(key){
    let data = localStorage.getItem(key);


    if(data){
       return JSON.parse(data)
    }else{
        return false;
    }
}