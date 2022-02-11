
const student_form = document.getElementById('student_form');
const result = document.getElementById('result');
const data_list = document.getElementById('data_list');


student_form.addEventListener('submit', function(e){
    e.preventDefault();


   let id = student_form.querySelector("input[placeholder='Type your ID']");
   let name = student_form.querySelector("input[placeholder='Type your Name']");
   let roll = student_form.querySelector("input[placeholder='Type your Roll']");
   let Student_class = student_form.querySelector("input[placeholder='Type your Class']");
   let photo = student_form.querySelector("input[placeholder='Type your Photo']");
   let location = student_form.querySelector("input[placeholder='Type your Location']");
   let gender = student_form.querySelector("input[type='radio']:checked");
   let ban = student_form.querySelector("input[placeholder='Bangla']");
   let eng = student_form.querySelector("input[placeholder='English']");
   let math = student_form.querySelector("input[placeholder='Maths']");
   let s = student_form.querySelector("input[placeholder='Science']");
   let ss = student_form.querySelector("input[placeholder='Social Science']");
   let rel = student_form.querySelector("input[placeholder='Religion']");



   if(id.value == '' || name.value == '' || roll.value == '' || Student_class.value == '' || photo.value == '' || location.value == '' || gender.value == '' || ban.value == '' || eng.value == '' || math.value == '' || s.value == '' || ss.value == '' || rel.value == ''){
    result.innerHTML = `<p class=" alert alert-danger"> All feilds are requred* </p>`;
   }else{
       
    let storage_data = [];
    if(dataGet('Result_app')){
     storage_data = dataGet('Result_app');
    }
    storage_data.push({
 
        id  : id.value,
        name  : name.value,
        roll  : roll.value,
        class : Student_class.value,
        photo : photo.value,
        location : location.value,
        gender : gender.value,
        ban : ban.value,
        eng : eng.value,
        math : math.value,
        science : s.value,
        ss : ss.value,
        reli : rel.value,

    });

    Datasend('Result_app' , storage_data );

    student_form.querySelector("input[placeholder='Type your ID']").value = '';
    student_form.querySelector("input[placeholder='Type your Name']").value = '';
    student_form.querySelector("input[placeholder='Type your Roll']").value = '';
    student_form.querySelector("input[placeholder='Type your Class']").value = '';
    student_form.querySelector("input[placeholder='Type your Photo']").value = '';
    student_form.querySelector("input[placeholder='Type your Location']").value = '';
    student_form.querySelector("input[type='radio']:checked");
    student_form.querySelector("input[placeholder='Bangla']").value = '';
    student_form.querySelector("input[placeholder='English']").value = '';
    student_form.querySelector("input[placeholder='Maths']").value = '';
    student_form.querySelector("input[placeholder='Science']").value = '';
    student_form.querySelector("input[placeholder='Social Science']").value = '';
    student_form.querySelector("input[placeholder='Religion']").value = '';
    
   }


   all_student();
});

all_student();
function all_student(){

    let all_data = dataGet('Result_app');

    let data = '';

    all_data.map((student , index) =>{

        data += `
        <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.class}</td>
        <td>${student.location}</td>
        <td>A</td>
        <td>4.80</td>
        <td><img style="width:50px; height:50px; object-fit: cover;" src="${student.photo}"></td>
        <td>
            <button class="btn btn-info btn-sm">View</button>
            <button onclick="deleteData(${ index })" class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>
        `;

        

    });

    data_list.innerHTML = data;

}

/**
 * delete data 
 * @param {*} id 
 */

function deleteData(id){

    let con = confirm('Are you sure ?')

    if(con){
    let storage_data = dataGet('Result_app');

    storage_data.splice( id , 1);
    Datasend('Result_app', storage_data );
    all_student();

    }else{
        return false;
    }



}