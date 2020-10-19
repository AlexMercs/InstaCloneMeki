let flow = document.getElementById("flow");

$.getJSON('data.json', function(json){
    console.log(json);
    data = json.data;
    let begin ='<div class="col-md 4 picture">';
    let end ="</div>";
    
    for(let i = 0; i < data.length; i++){
        let image = '<img src="'+data[i].pics+'">';
        flow.innerHTML += begin + image + '<div>' + data[i].hashtag + '<br>'+ '❤'+data[i].like + '</div>'+end;
}    
});
