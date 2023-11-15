function displayUsers(users){
    document.querySelector("tbody").innerHTML="";
    users.forEach((user,i)=>{
        // console.log(user)
        var myTr = document.createElement("tr");
        for(a in user){
            var myTd = document.createElement("td");
            myTd.innerHTML=user[a]
            myTr.appendChild(myTd);
        }

        var myEditTd = document.createElement("td");
        var myEditBtn = document.createElement("button");
        myEditBtn.innerHTML = "EDIT";
        myEditBtn.setAttribute("onclick","editUser("+i+")");
        myEditTd.appendChild(myEditBtn);
        myTr.appendChild(myEditTd);

        var myDeleteTd = document.createElement("td");
        var myDeleteBtn = document.createElement("button");
        myDeleteBtn.innerHTML = "DELETE"
        myDeleteBtn.setAttribute("onclick","deleteUser("+i+")");
        myDeleteTd.appendChild(myDeleteBtn);
        myTr.appendChild(myDeleteTd);
        document.querySelector("tbody").appendChild(myTr);
    })
}
displayUsers(users);
