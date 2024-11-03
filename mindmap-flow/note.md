# yêu cầu bài làm

- thay đổi icon (done)
- tiêu đề ở dạng server side (done)
- tính năng đăng nhập / đăng xuất theo auth0 (done)
- tạo mindmap theo từng tài khoản khác nhau (done)
- chưa đăng nhập => cố tình vào /mindmap => chuyển hướng sang đăng nhập (áp dụng middleware) (done)
- bấm nút thêm mới => chuyển hướng sang trang /mindmap/create => chuyển hướng tiếp sang trang /mindmap/:id (done)
- tài khoản nào chỉ xem được mindmap của tài khoản đấy => cố tình vào => chuyển sang trang error
- id mindmap không tồn tại => chuyển sang trang error (done)
- khi chưa đăng nhập => truy cập đường link /mindmap/:id không được public => chuyển về trang đăng nhập
- bấm vào dây => bấm delete => xóa mindmap
- custom lại node để double click có thể chỉnh sửa được (done)
