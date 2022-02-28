function User(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange =function(){
        if(this.readyState===4 && this.status===200){
           
             var text=JSON.parse(this.responseText)
             var a="";
          text.results.forEach((user) => {
              a+=`
              <div class="col-lg-3">
              <div class="box">
              <img src="${user.picture.large}" alt="">
              <h6>${user.name.first}</h6>
              <p></p>
               </div>
               </div>`;
              
          });
           
            
        }
        
        document.querySelector('#person').innerHTML=a
    }
    xhr.open('GET','https://randomuser.me/api/?results=28')
    xhr.send()
    
}
User();