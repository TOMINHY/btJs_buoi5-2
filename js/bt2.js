/**
 * Author: To Minh Y
 * Function: Tính tiền điện
 * Release: 12/7/2022
 */

/**
 *
 * Khối 1: input
 *
 * Khối 2: các bước cần xử lý
 * 
 * 
 * 
 * Khối 3: output
 * 
 * 
 */





function tinhTienCap() {
    const DAN_HD = 4.5;
    const DAN_CB = 20.5;
    const DAN_KENH_CC = 7.5;

    const DN_HD = 15;
    const DN_CB = 75;
    const DN_KENH_CC = 50;
    var chonKH = document.getElementById("chonKH").value;
    var soCongKetNoi = Number(document.getElementById("oKetNoi").value);
    var maKH = Number(document.getElementById("maKH").value);
    var soKenhThue = Number(document.getElementById("kenhKH").value);
    var tongTien = 0;

    switch(chonKH) {
        case "Nhà Dân":
        tongTien = (DAN_HD + DAN_CB + soKenhThue * DAN_KENH_CC);
            break;
        case "Doanh Nghiệp":
                if(soCongKetNoi < 11){
                tongTien = DN_HD + DN_CB + soKenhThue * DN_KENH_CC;
                }else{
                tongTien = DN_HD + DN_CB + soKenhThue * DN_KENH_CC  + (soCongKetNoi - 10) * 5;
                }
            break;
        default:
           alert ("Vui lòng nhập loại khách hàng!")
            break;
    }       
    document.getElementById("ketQua2").innerHTML = "Mã khách hàng: " + maKH + " ;" + " Tiền cáp: " + "$" + tongTien.toFixed(2);
}
document.getElementById("btnTinh2").onclick = tinhTienCap;

function myFunction() {
    var x = document.getElementById("chonKH").value;
    var xuatHien = document.getElementById("xuatHien");
    switch (x) {
        case "Doanh Nghiệp":
            xuatHien.style.display = "block";
            break;
        case "Nhà dân":
            xuatHien.style.display = "none";
            break;
        case "Chọn loại khách hàng":
            xuatHien.style.display = "none";
            break;

        default:
            xuatHien.style.display = "none";
            break;
    }
}






