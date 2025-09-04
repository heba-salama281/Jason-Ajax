var loadbtn= document.getElementById('loadData');
loadbtn.addEventListener('click', function(){
    var listData= document.getElementById('postList');

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://heba-salama281.github.io/Json-Ajax/data.json");
    xhr.onload = function() {
        if(xhr.status>=200 && xhr.status <400){
            ourData= JSON.parse(xhr.responseText);
            printData(ourData);
        }else{
            console.log('connection failed');
        }
    };

    function printData(data){
        var listHTML = ''
        for (let i = 0; i < data.length ; i++) {
        
            listHTML += '<li>' + 'Name: ' + data[i].name + ', Title: ' + data[i].title  ;
            
            for (let ii = 0; ii < data[i].contact.email.length ; ii++) {
                listHTML += "<br/> Email" + (ii+1) + ': ' +data[i].contact.email[ii] ;
            };

            for (let ii = 0; ii < data[i].contact.phone.length ; ii++) {
                listHTML += "<br/> Phone" + (ii+1) + ': ' + data[i].contact.phone[ii] ;
              
            };
          
            listData.innerHTML = listHTML
        }

        if (listHTML != ''){
            loadData.disabled = true;
        }

    };
    xhr.send();
})

