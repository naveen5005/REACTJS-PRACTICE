let user = {
    username: "",
    password: "",
    gender: "",
    subjects: []
}

function editUser(i) {
    globalEdit = i;
    var newUser = users[i];
    for (a in newUser) {
        if (a !== "gender" && a !== "subjects") {
            document.getElementById(a).value = newUser[a];
        }
        else if (a == "gender") {
            var allStatus = document.getElementsByName("gender");
            allStatus.forEach((element) => {
                if (element.value == newUser[a]) {
                    // console.log(element.value)
                    element.checked = true;
                }
            })
        }
        else if (a == "subjects") {
            // console.log(newUser[a]);
            var allSubjects = document.getElementsByName("subjects");
            // newUser[a].forEach((data) => {
            //     allSubjects.forEach((element) => {
            //         if(data == element.value){
            //             element.checked = true
            //         }
            //     })
            // })
            allSubjects.forEach((element)=>{
                var check = newUser[a].find((stream)=>stream === element.value);
                if(check){
                    element.checked = true;
                }
            })

        }
    }

}

function updateUser(userInfo){
    // var user = {...userInfo};
    for (a in user) {
        // console.log(a);
        if (a !== "gender" && a !== "subjects") {
            user[a] = document.getElementById(a).value;
        }
        else if (a == "gender") {
            var allStatus = document.getElementsByName("gender");
            allStatus.forEach((element) => {
                // console.log(element)
                if (element.checked) {
                    user[a] = element.value;
                }
            })
        }
        else if (a == "subjects") {
            var allSubjects = document.getElementsByName("subjects");
            // console.log(allSubjects)
            allSubjects.forEach((element) => {
                if (element.checked) {
                    user.subjects.push(element.value);
                }
            })
        }
    }
    console.log(user);
    users[globalEdit] = user;
    displayUsers(users);
    clearForm(users);

}