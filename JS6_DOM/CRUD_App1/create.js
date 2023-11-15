let userInfo = {
    username: "",
    password: "",
    gender: "",
    subjects: []
}

let users = [
    {
        username: "Naveen",
        password: 123,
        gender: "Male",
        subjects: ["ECE", "CSE"]
    },
    {
        username: "Kiran",
        password: 345,
        gender: "Male",
        subjects: []
    }
];
function addUser() {
    var user = {...userInfo};
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
    users.push(user)
    // console.log(users)
    displayUsers(users)
    clearForm(users);
}
// console.log(users)

function clearForm() {
    users.forEach((user) => {
        for (a in user) {
            if (a !== "gender" && a !== "subjects") {
                document.getElementById(a).value = "";
            }
            else if (a == "gender") {
                var allStatus = document.getElementsByName("gender");
                allStatus.forEach((element) => {
                    if(element.checked){
                        element.checked = false;
                    }
                })
            }
            else if (a =="subjects"){
                var allSubjects = document.getElementsByName("subjects");
                allSubjects.forEach((element)=>{
                    if(element.checked){
                        element.checked = false;
                    }
                })
            }
        }
    })

}