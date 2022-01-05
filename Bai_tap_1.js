var st1 = document.getElementById("st1");
var st2 = document.getElementById("st2");
var kq = document.getElementById("kq");
// hàm xoá trắng thông tin
document.getElementById("btn_xoa-tinh").onclick = function () {
  st1.value = "";
  st2.value = "";
  kq.value = "";
};

// Giới hạn đầu vào đối với các chữ số và '.' bằng cách sử dụng bộ lọc biểu thức chính quy.
setInputFilter(document.getElementById("st1"), function (value) {
  return /^-?\d*$/.test(value) || /^-?\d*[.,]?\d*$/.test(value);
});
// Giới hạn đầu vào đối với các chữ số và '.' bằng cách sử dụng bộ lọc biểu thức chính quy.
setInputFilter(document.getElementById("st2"), function (value) {
  return /^-?\d*$/.test(value) || /^-?\d*[.,]?\d*$/.test(value);
});
// Hạn chế đầu vào cho hộp văn bản nhất định đối với inputFilter đã cho.
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

// lấy ra toán tử được lựa chọn từ radio
function Toan_Tu() {
  var tt = document.querySelector('input[name="pheptinh"]:checked').value;
  return tt;
}
// Tính Toán hai Số
function Tinh_Toan() {
  var ket_qua;
  switch (Toan_Tu()) {
    case "+":
      ket_qua = parseFloat(st1.value) + parseFloat(st2.value);
      break;
    case "-":
      ket_qua = st1.value - st2.value;
      break;
    case "*":
      ket_qua = st1.value * st2.value;
      break;
    case "/":
      ket_qua = st1.value / st2.value;
      break;
    case "^":
      ket_qua = st1.value ** st2.value;
      break;
  }
  return ket_qua;
}
// lấy ra tên theo toán tử
function check_TT(toantu) {
  var tt;
  switch (toantu) {
    case "+":
      tt = "Cộng";
      break;
    case "-":
      tt = "Trừ";
      break;
    case "*":
      tt = "Nhân ";
      break;
    case "/":
      tt = "Chia";
      break;
    case "^":
      tt = "Bình Phương";
      break;
  }
  return tt;
}
// xử lí sự kiện click vào buuton tính
document.getElementById("btn_tinh").onclick = function () {
  var arr_dulieu = [];
  var obj_tinh = {
    st1: st1,
    st2: st2,
    phep_tinh: check_TT(Toan_Tu()),
    kq: Tinh_Toan(),
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
    cell1.innerHTML = obj.st1.value;
    cell2.innerHTML = obj.st2.value;
    cell3.innerHTML = obj.phep_tinh;
    cell4.innerHTML = obj.kq;
    kq.value = Tinh_Toan();
  }
};

/**
 *     var st1 = document.getElementById("st1");
    var st2 = document.getElementById("st2");
    var  kq = document.getElementById("kq");
    var phep_tinh = document.getElementById("phep-tinh");
    // hàm xoá trắng thông tin
    document.getElementById("btn_xoa-tinh").onclick = function() {
          st1.value ='';
          st2.value ='';
          kq.value ='';
      
    };

    // hàm tinh toán
  document.getElementById("btn_tinh").onclick = function() {
   var kq_1 = document.getElementById("kq_1");
   var kq_2 = document.getElementById("kq_2");
   var kq_3 = document.getElementById("kq_3");
   var pt = document.getElementsByName('pheptinh');
   var  ket_qua ;
    var rate_value;
    for(var i = 0; i < pt.length; i++){
        if(pt[i].checked){
            rate_value = pt[i].value;
    }
}
    switch(rate_value){
      case '+':
        ket_qua = parseFloat(st1.value) +parseFloat( st2.value);
        break;
        case '-':
        ket_qua = st1.value - st2.value;
        break;
        case '*':
        ket_qua = st1.value * st2.value;
        break;
        case '/':
        ket_qua = st1.value / st2.value;
        break;
        case '^':
        ket_qua = st1.value ** st2.value;
        break;
    }
    var arr_dulieu = [];
    var obj_tinh = {
      st1: st1,
      st2: st2,
      phep_tinh: rate_value,
      kq:ket_qua
    };
    arr_dulieu.push(obj_tinh);
    var myTB= document.getElementById("My_table");
    for( var i=0 ; i< arr_dulieu.length;i++){
      var obj = arr_dulieu[i];
      // tạo ra một row mới
      var row = myTB.insertRow();
      // tạo các cột mới cho row
      var cell1 =row.insertCell(0);
      var cell2 =row.insertCell(1);
      var cell3 =row.insertCell(2);
      var cell4 =row.insertCell(3);
      // đưa dữ liệu vào các cell
      cell1.innerHTML = obj.st1.value;
      cell2.innerHTML = obj.st2.value;
      cell3.innerHTML = obj.phep_tinh;
      cell4.innerHTML = obj.kq;
    // kq_1.innerHTML=st1.value;	
    // kq_2.innerHTML=st2.value;	
    // kq_3.innerHTML=ket_qua;	
    // phep_tinh.innerHTML=rate_value;	
     kq.value=ket_qua;
  
};
}
 */
//https://helpex.vn/question/nhap-van-ban-html-chi-cho-phep-nhap-so-5cb023eeae03f645f4212aa3