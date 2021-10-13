export const saveData = (key, data) => {
    try {
        let parseData = JSON.stringify(data);
        localStorage.setItem(key, parseData);
    } catch (err) {
        console.log("localStorage ERROR :", err);
    }
};







export const getData = (key) => {
    // alert(key)
    var resp = localStorage.getItem("user");
    // console.log("RESPP", resp)
    // alert(resp)
    return resp;

}

export default {};
