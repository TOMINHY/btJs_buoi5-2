/**
 * Author: To Minh Y
 * Function: Quản lý tuyển sinh
 * Release: 12/7/2022
 */

/**
 * Khối 1: input
 * + hoTen
 * + thuNhapNam
 * + soNguoiPT ( số người phụ thuộc )
 * 
 * Khối 2: các bước xử lý
 * B1: tạo các biến cho người dùng nhập vào và gán giá trị 
 * B2: lập công thức tính toán 
 *      thuNhapThueChiu = thuNhapNam - 4tr - soNguoiPT * 1tr6 => tinhThue = thuNhapThueChiu * % thue xuât;
 * 
 * Khối 3: output
 * tienThue
 */

function tienThue() {
    const THUE_DEN_60 = 0.05;
    const THUE_60_DEN_120 = 0.1;
    const THUE_120_DEN_210 = 0.15;
    const THUE_210_DEN_384 = 0.2;
    const THUE_384_DEN_624 = 0.25;
    const THUE_624_DEN_960 = 0.3;
    const THUE_TREN_960 = 0.35;

    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = Number(document.getElementById("thuNhapNam").value);
    var soNguoiPT = Number(document.getElementById("soNguoiPT").value);
    var tinhThue = tinhTienThueCaNhan(thuNhapNam, soNguoiPT);
    document.getElementById("ketQua").innerHTML = "Họ tên: " + hoTen + " ;" + " Tiền thuế thu nhập cá nhân: " + tinhThue.toLocaleString() + " VND";
}
document.getElementById("btnTinh").onclick = tienThue;

// Tạo hàm tính thuế
function tinhTienThueCaNhan(thuNhapNam, soNguoiPT) {
    var thuNhapChiuThe = thuNhapNam - 4e+6 - soNguoiPT * 1600000;
    if (thuNhapChiuThe > 0 && thuNhapChiuThe <= 60e+6) {
        return thuNhapChiuThe  * 0.05;
    } else if (thuNhapChiuThe > 60e+6 && thuNhapChiuThe <= 120e+6) {
        return thuNhapChiuThe  * 0.1;
    } else if (thuNhapChiuThe > 120e+6 && thuNhapChiuThe <= 210e+6) {
        return thuNhapChiuThe  * 0.15;
    } else if (thuNhapChiuThe > 210e+6 && thuNhapChiuThe <= 384e+6) {
        return thuNhapChiuThe  * 0.2;
    } else if (thuNhapChiuThe > 384e+6 && thuNhapChiuThe <= 624e+6) {
        return thuNhapChiuThe  * 0.25;
    } else if (thuNhapChiuThe > 624e+6 && thuNhapChiuThe <= 960e+6) {
        return thuNhapChiuThe  * 0.3;
    } else if (thuNhapChiuThe > 960e+6) {
        return thuNhapChiuThe  * 0.35;
    } else {
        alert("Nhập vào Tổng thu nhập năm đi!")
        return "";
    }
}   


