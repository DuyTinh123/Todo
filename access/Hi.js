const add = document.querySelector('.add_job')
const input = document.querySelector('.input_job')
const list = document.querySelector('.List_todo')
const update = document.querySelector('#update')
const ad = document.querySelector('#add')
const indexx = document.querySelector('#index')
const check_all = document.querySelectorAll('.check_all')
const delete_all = document.querySelectorAll('.delete_all')


const arrJobs = ['a', 'b', 'v']
const getText = render(arrJobs)
list.innerHTML = getText
add.onclick = function (e) {
    if (arrJobs.includes(input.value)) {
        alert(`Job ${input.value} đã tồn tại`)
        input.value = ''
        add.textContent = 'Add'
        return
    }
        arrJobs.unshift(input.value)
        const getText = render(arrJobs)
        list.innerHTML = getText
        input.value = ''
}

update.onclick = function () {
    let index = indexx.value
    arrJobs[index] = input.value
    const getText = render(arrJobs)
    list.innerHTML = getText
    input.value = ''
    ad.style.display = 'block'
    update.style.display = 'none'
}
function Update(index) {
    input.value = arrJobs[index]
    ad.style.display = 'none'
    update.style.display = 'block'
    indexx.value = index
}
 function Delete(index){
    input.value = arrJobs[index]
    if(confirm('Bạn có muốn xóa không ?')){
        arrJobs.splice(index, 1)
    }
    const getText = render(arrJobs)
    list.innerHTML = getText
    input.value= ''

}

//Complete all tasks
let flag=0
check_all[0].onclick = function(){
    if(flag===0){
        const data = arrJobs.map((item, index) => (
            `   
        <li class="list_li">
            <input class="check_inp" type="checkbox" checked='true'>
            <label for="">${item}</label>
            <div class="edit_delete">
                <i class="ti-pencil" onclick='Update(${index})'></i>
                <i class="ti-trash" onclick='Delete(${index})'></i>
            </div>
        </li>
        `
        ))
        flag=1
        const text = data.join('')
        list.innerHTML = text
    }
    else if(flag===1){
        const data = arrJobs.map((item, index) => (
            `   
        <li class="list_li">
            <input class="check_inp" type="checkbox">
            <label for="">${item}</label>
            <div class="edit_delete">
                <i class="ti-pencil" onclick='Update(${index})'></i>
                <i class="ti-trash" onclick='Delete(${index})'></i>
            </div>
        </li>
        `
        ))
        flag = 0
        const text = data.join('')
        list.innerHTML =text
    }

}

//Delete comp tasks

delete_all[0].onclick = function(){
    // for(let i = 0; i < delete_all.length; i++){
    //     if(delete_all[i].checked===true){
    //         delete_all[i].perentNote.removeChild(delete_all[i])
    //     }
    // }
    // const text = data.join('')
    // list.innerHTML = text
}
    


function render(arr) {
    const data = arr.map((item, index) => (
        `   
        <li class="list_li">
            <input class="check_inp" type="checkbox">
            <label for="">${item}</label>
            <div class="edit_delete">
                <i class="ti-pencil" onclick='Update(${index})'></i>
                <i class="ti-trash" onclick='Delete(${index})'></i>
            </div>
        </li>
        `
    ))
    const text = data.join('')
    return text
}
