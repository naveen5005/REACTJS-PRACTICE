let allFilteredUsers = [];
function deleteUser(i) {
    if (allFilteredUsers.length == 0) {
        allFilteredUsers = users.filter((ele, index) => {
            return index !== i;
        });
    } else {
        allFilteredUsers = allFilteredUsers.filter((ele, index) => {
            return index !== i;
        })
    }
    displayUsers(allFilteredUsers);
}