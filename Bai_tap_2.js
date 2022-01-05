var messege = document.getElementById("messege_tuoi");
var Ten = document.getElementById("ten");
var Tuoi = document.getElementById("tuoi");

// Restrict input to digits and '.' by using a regular expression filter.
setInputFilter(document.getElementById("tuoi"), function (value) {
  // if (!(/^\d*$/.test(value))) {
  //         document.getElementById("messege_tuoi").innerHTML = "Chỉ được nhập số.";

  //         }
  // else if(!(value === "" || parseInt(value) < 200)){
  //     document.getElementById("messege_tuoi").innerHTML = "Chỉ được nhập số < 200.";

  // }
  // else {
  //     document.getElementById("messege_tuoi").innerHTML = "";

  // }
  return /^\d*$/.test(value) && (value === "" || parseInt(value) < 200);
});

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}
function Gioi_Tinh() {
  var gt = document.querySelector('input[name="gioitinh"]:checked').value;
  return gt;
}

function Tinh_Nam_Sinh() {
  var ket_qua;
  ket_qua = 2022 - tuoi.value;
  return ket_qua;
}

document.getElementById("btn_tinh").onclick = function () {
  Tinh_Nam_Sinh();
  var arr_dulieu = [];
  var obj_tinh = {
    ten: Ten,
    tuoi: Tuoi,
    gioi_tinh: Gioi_Tinh(),
    namsinh: Tinh_Nam_Sinh(),
  };

  // thêm dữ liệu vào mảng
  arr_dulieu.push(obj_tinh);
  var myTB = document.getElementById("My_table");
  for (var i = 0; i < arr_dulieu.length; i++) {
    var obj = arr_dulieu[i];
    // tạo ra một row mới
    var row = myTB.insertRow();
    // tạo các cột mới cho row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // đưa dữ liệu vào các cell
    cell1.innerHTML = obj.ten.value;
    cell2.innerHTML = obj.tuoi.value;
    cell3.innerHTML = obj.gioi_tinh;
    cell4.innerHTML = obj.namsinh;

    kq.value = Tinh_Nam_Sinh();
  }
};

// document.getElementById("tuoi").onblur = function(){
//     var tuoi = document.getElementById("tuoi").value;
//     if (isNaN(tuoi)) {
//     document.getElementById("messege_tuoi").innerHTML = "Chỉ được nhập số.";
//     return false;
//     }else if(!(tuoi<200)) {
//         document.getElementById("messege_tuoi").innerHTML = "Chỉ được nhập số < 200.";
//         return false;
//     }
//     else if(!(tuoi>0)) {
//         document.getElementById("messege_tuoi").innerHTML = "Không được nhập số < 1.";
//         return false;
//     }
//     else {
//         document.getElementById("messege_tuoi").innerHTML = "";
//     return true;
//     }
//}
