function payment() {
    //B1: DOM tới các input
    var fullName = document.getElementById('fullName').value;
    var kw = +document.getElementById('kw').value;
    //B3: So sánh trường hợp và xuất kết quả ra layout
    var price = 0;
    if (kw <= 0) {
        alert('Số kw không hợp lệ')
    } else {
        price = calculatePrice(kw, 500, 650, 850, 1100, 1300).toLocaleString();

        console.log(price);

    }
    document.getElementById('result').innerHTML = `Họ tên: ${fullName}; Tiền điện: ${price} `
}
//B2:  Viết hàm nhận vào số kw, giá tiền của các mốc kw, sau đó tính ra trả ra tổng tiền
function calculatePrice(kw, kw_0_49, kw_50_99, kw_100_199, kw_200_349, kw_350) {
    var price = 0;
    if (kw < 50) {
        price += kw * kw_0_49;
    } else if (kw < 100) {
        price += 49 * kw_0_49 + (kw - 49) * kw_50_99;
    } else if (kw < 200) {
        price += 49 * kw_0_49 + 50 * kw_50_99 + (kw - 99) * kw_100_199;
    } else if (kw < 350) {
        price += 49 * kw_0_49 + 50 * kw_50_99 + 100 * kw_100_199 + (kw - 199) * kw_200_349;
    } else {
        price += 49 * kw_0_49 + 50 * kw_50_99 + 100 * kw_100_199 + 150 * kw_200_349 + (kw - 349) * kw_350;
    }
    return price;
}