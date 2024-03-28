
// ĐỀ BÀI 1: VIẾT PHUONG TRÌNH TÍNH LƯƠNG CHO NHÂN VIÊN

/**ĐẦU VÀO:
 * -Lương 1 ngày : 100.000 vnd
 * _Người dùng nhập vào số ngày làm
 * 
 * Bước xử lí dữ liệu ra kết quả:
 * -Tạo 1 biến chứa giá trị 1 ngày làm
 * -Biến chứa giá trị 1 ngày làm * với số ngày người dùng nhập vào
 * 
 * ĐẦU RA:
 * -Tổng tiền nhận được tương đương với số ngày làm
 * 
 */

// ĐỀ BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỰC VÀ XUẤT RA MÀN HÌNH
/**
 * ĐẦU VÀO:
 * -Người dụng nhập vào 5 số thực 
 * 
 * BƯỚC XỬ LÍ DỮ LIỆU RA KẾT QUẢ:
 * -Tạo biến để người dùng nhập 5 số thực
 * -Tạo biến tổng để cộng 5 số thực
 * -Tạo biến giá trị trung bình: lấy biến tổng chia cho 5
 * 
 * ĐẦU RA:
 * -Giá trị trung bình của tông 5 số thực người dùng nhập
 * 
 */

// ĐỀ BÀI 3: CHO NGƯỜI DÙNG NHẬP VÀO SỐ TIỀN USD> TÍNH VÀ XUẤT RA SỐ TIỀN ĐỔI SANG VND
/**
 * BƯỚC XỬ LÍ DỮ LIỆU:
 * - Tạo hàm quy đổi ra tiền
 * - Nhập usd từ người dùng
 * - Chuyển đổi giá trị thành số và kiểm tra xem cóa phải là số hay không 
 * - Gọi hàm quy đổi và xuất kết quả
 * 
 * ĐẦU RA 4:
 * - Kết quả số USD mà người dùng nhập được đổi ra VND
 */

// ĐỀ BÀI : TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỬ NHẬT
/**
 * BƯỚC XỬ LÍ DỮ LIỆU:
 * -Tạo biến chứa giá trị của chiều dài và chiều rộng
 * -Biến diện tích = biến chiều dài * chiều rộng
 * -Biến chu vi = ( biến chiều dài + biến chiều rộng ) * 2
 * 
 * ĐẦU RA:
 * - Kết quả chu vi và diện tích HCN
 */

// ĐỀ BÀI 5: VIẾT PHƯƠNG TRÌNH NHẬP 1 SỐ CÓ 2 CHỮ SỐ. TÍNH TỔNG 2 KÝ SỐ VỪA NHẬP
/**
 * BƯỚC XỬ LÍ DỮ LIỆU:
 * - Tạo biến để người dùng nhập dữ liệu 1 số có 2 chữ số
 * - Tạo biến để lấy số hàng chục = số / 10
 * - Tạo biến để lấy số hàng đơn vị = số % 10
 * 
 * ĐẦU RA:
 * - Tổng 2 ký số = hàng chục + hàng đơn vị 
 */


/** BÀI TẬP 1 */

function tinhTienLuong(){
    var luong1Ngay = document.getElementById('tienLuong1Ngay').value;
    var ngayLam = document.getElementById('soNgayLam').value;

    var tongLuong = 0;

    tongLuong = luong1Ngay * ngayLam;

    document.getElementById('tongLuong').innerHTML = tongLuong;
}


// BÀI TẬP 2

function tongTrungBinh(){
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;
    var num4 = +document.getElementById('num4').value;
    var num5 = +document.getElementById('num5').value;

    var giaTriTb = 0;

    giaTriTb= ( num1 + num2 + num3 + num4 + num5) / 5;

    document.getElementById('giaTriTrungBinh').innerHTML = giaTriTb;
    

}

//BÀI TẬP 3

function doiTien() {

    var VND = 23500;
    var soTienUSD = document.getElementById('soTienUSD').value;

    var quyDoi = VND * soTienUSD;


    document.getElementById('tongTienQuyDoi').innerHTML = quyDoi;
}

//BÀI TẬP 4

function tinhChuVi(){
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;

    var chuVi = ( chieuDai + chieuRong) *2;

    document.getElementById('daiHoacRong').innerHTML = chuVi;
}

function tinhDienTich(){
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;

    var dienTich = chieuDai * chieuRong;
    console.log(" 😤 ~ tinhDienTich ~ dienTich:", dienTich)

    document.getElementById('result').innerHTML = `
        <p>Kết quả : ${dienTich} </p>
    `;
}

//BÀI TẬP 5

function tinhTong(){
    var hangChuc = document.getElementById('soNhap').value;
    var hangDonVi =  document.getElementById('soNhap').value;

    var tongKySo = 0;

    hangChuc = Math.floor(hangChuc / 10 );
    hangDonVi = Math.floor(hangDonVi % 10);

    tongKySo = hangChuc + hangDonVi ;

    document.getElementById('tongSo').innerHTML = tongKySo;
    
}