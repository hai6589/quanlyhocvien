let url = 'https://646b70fd7d3c1cae4ce3cdba.mockapi.io/hocvien'


function getStudent() {
    let promise = fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
    promise
        .then(async function (response) {
            let listStudents = await response.json()
            showList(listStudents)
        })
        .catch(function (erroe) {
            console.log(erroe);
        })
}
getStudent()

function showList(listArry) {
    let str = '';
    for (let i = 0; i < listArry.length; i++) {
        let student = listArry[i];
        str += `<tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
        <td>${student.point}</td>
    </tr>`
    document.getElementById('list').innerHTML = str
    }
}