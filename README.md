# Task1: String Length Frequency
    - Khởi tạo state lưu trữ input
    - Xử lý function handleCalculate tách input nhập vào thành mảng phân cách bởi "," sử dụng split
    - handleCalculate truyền tiếp mảng đã xử lý vào function findMostFrequentLengths
    - Xử lý function findMostFrequentLengths (strings):
        + Khởi tạo 2 biến theo dõi độ dài
        + Sử dụng forEach() để duyệt (strings) nhận vào
        + Tính độ dài với .length và cập nhật lengthFrequency khi trùng .length
        + Cập nhật giá trị cho lengthToStrings, thêm chuỗi vào mảng
        
        + Sau đó sử dụng Math.max để lấy ra length lớn nhất thuộc lengthFrequency
        + Sử dụng filter để lọc ra giá trị trùng với max (mostFrequentLengths)

        + Sử dụng tiếp forEach() để duyệt (length) xuất hiện nhiều (mostFrequentLengths)
        + Lấy ra các chuỗi tương ứng từ lengthToStrings[length]
        + Trả kết quả tìm được về resultStrings
    - Sau khi xử lý xong, truyền lại kết quả về state
    - Trả kết quả tìm được từ state và hiển thị lên screen

# Task 2: Sum of Top Two Integers
    - Khởi tạo state lưu trữ input
    - Xử lý func handleInputChange cập nhật state inputNumbers
    - Xử lý func handleCalculate tách input thành mảng với phân cách split ","
    - Xử lý func sumOfTopTwo để tìm sô và tính toán:
        + Kiểm tra độ dài mảng để thực hiện tính toán
        + Sử dụng sort để sắp xếp phần tử, so sánh a,b truyền vào
        + Với sort((a,b) => b-a) sẽ có mảng sắp xếp từ lớn tới bé
        + Lấy ra 2 phần từ đầu tiên, là 2 phần tử có giá trị lớn nhất
        + Thực hiện phép cộng với 2 phần từ đầu
    - Sau khi xử lý xong, thực hiện tiếp handleCalculate truyền lại kết quả về state
    - Trả kết quả tìm được từ state và hiển thị lên screen

# Task 3: React-Redux Application
    - Tạo Api_EndPoint trong config
    - Định hình cấu trúc xử lý với Redux
    - Tạo store lưu trạng thái
    - Tạo types khai báo hành động cần thực hiện
    - Tạo actions thực hiện các hành động trên kết nối với api từ config
    - Tạo reducers thực hiện cập nhật trạng thái dựa vào types
    - Tạo component để dispatch(action) về store
    - Sau đó store chuyển action đến reducer phù hợp để xử lý trạng thái
    - Sau khi dispatch thành công, payload trả kết quả về và hiển thị ở component.