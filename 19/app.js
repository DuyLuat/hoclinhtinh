// viết hàm diff nhận 2 tham số là 2 mảng a và b có các phần tử là các số
// trả về một mảng mới gồm các số chỉ có trong a mà không có trong b
// ví dụ: diff([1, 2], [1]) -> [1]

function diff(a, b) {
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (b[i] == a[j]) {
        console.log(a.slice(j));
      }
    }
  }
  return console.log(a);
}

diff([1, 2, 3], [2, 4, 1]);
