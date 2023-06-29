const setBtn = (todo) => {

    let new_arr = [...arr]

    let new_obj = new_arr.map(user => {
        if (user.key === todo.key) {
        } else {
            return { ...user }
        }
    })

    setArr(new_obj);
}