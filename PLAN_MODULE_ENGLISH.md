# Kế hoạch triển khai module English Foundation

## Hướng dẫn cho phiên Codex mới

Mở repo sau làm workspace duy nhất trong VS Code:

```text
D:\1_Project\github_page\skills-github-pages
```

Sau đó mở chat Codex mới và yêu cầu:

> Đọc `PLAN_MODULE_ENGLISH.md` và triển khai toàn bộ kế hoạch. Bám đúng phạm vi đã duyệt, không cần hỏi xác nhận lại. Chỉ dừng nếu gặp giới hạn kỹ thuật không thể tự xử lý.

Nếu file kế hoạch chưa nằm trong repo D, hãy sao chép file này vào thư mục gốc của repo trước khi bắt đầu.

---

## 1. Mục tiêu

Chuyển toàn bộ tài liệu PDF tiếng Anh trong thư mục:

```text
D:\1_Project\github_page\skills-github-pages\ban_dich_markdown\EN
```

sang Markdown có cấu trúc, sau đó xây dựng một module web độc lập tên `english`, nằm cùng cấp với hai module hiện tại:

```text
copilot/
english/
japanese/
```

Module phải chạy dưới dạng static site trên GitHub Pages, không cần backend và không cần cài package ở runtime.

## 2. Kết quả khảo sát nguồn

- Tổng số PDF: **66**.
- Tổng số trang: **760**.
- Tổng dung lượng PDF nguồn: khoảng **105,56 MB**.
- Mọi trang đều có text layer; không cần OCR đại trà.
- Có khoảng **20 liên kết** trong PDF cần được giữ lại nếu có ý nghĩa.
- Có khoảng **1.379 lượt hình ảnh**; phần lớn là logo, nền hoặc thành phần trang trí lặp.

### EF1

Gồm 6 tài liệu:

- 3 textbook:
  - `F1_M01_Textbook.pdf`
  - `F1_M02_Textbook.pdf`
  - `F1_M03_Textbook.pdf`
- 3 handbook:
  - `F1_Module 01_Handbook.pdf`
  - `F1_Module 02_Handbook.pdf`
  - `F1_Module 03_Handbook.pdf`

### EF2

Gồm 60 tài liệu:

- Module 01: bài 01–20.
- Module 02: bài 01–20.
- Module 03: bài 01–20.

Tên file nguồn không hoàn toàn đồng nhất, ví dụ:

- `L8` và `L08`.
- Có hoặc không có hậu tố phiên bản như `v0.1`, `v0.2`, `v03`.

Pipeline phải chuẩn hóa tên và ID mà không phụ thuộc vào hậu tố phiên bản.

## 3. Nguyên tắc triển khai

1. Giữ nguyên toàn bộ PDF nguồn; không xóa, đổi tên hoặc ghi đè.
2. Không đưa văn bản PDF vào Markdown theo kiểu “đổ thô” nếu có thể nhận diện cấu trúc.
3. Giữ đúng thứ tự nội dung và thứ tự trang nguồn.
4. Loại các header/footer lặp như:
   - `© Copyright FPT Software – Level of Confidentiality`
   - số trang độc lập;
   - tên module/lesson lặp ở chân trang nếu đã có trong tiêu đề.
5. Giữ các phần học tập quan trọng:
   - lesson title;
   - warm-up;
   - vocabulary;
   - pronunciation;
   - reading/listening/video;
   - dialogue;
   - role-play;
   - practice;
   - production;
   - reflection;
   - summary;
   - end-of-lesson task;
   - answer key nếu có.
6. Giữ nguyên tiếng Anh; không tự dịch sang tiếng Việt nếu không được yêu cầu thêm.
7. Giữ hyperlink video và tài liệu tham khảo.
8. Chỉ trích xuất hình ảnh có giá trị học tập như biểu đồ, sơ đồ, mẫu trình bày hoặc hình cần thiết để trả lời bài tập.
9. Không trích xuất logo, nền trang, biểu tượng trang trí hoặc ảnh lặp không mang nội dung.
10. Gắn dấu mốc trang để truy vết về PDF nguồn, ví dụ:

```markdown
<!-- Source: F2_M01_L01_v0.1.pdf, page 3 -->
```

## 4. Cấu trúc đầu ra

```text
skills-github-pages/
├── index.html
├── style.css
├── README.md
├── copilot/
├── japanese/
├── english/
│   ├── index.html
│   ├── reader.html
│   ├── app.js
│   ├── style.css
│   ├── catalog.js
│   ├── content/
│   │   ├── 00_INDEX.md
│   │   ├── ef1/
│   │   │   ├── module-01/
│   │   │   │   ├── textbook.md
│   │   │   │   └── handbook.md
│   │   │   ├── module-02/
│   │   │   │   ├── textbook.md
│   │   │   │   └── handbook.md
│   │   │   └── module-03/
│   │   │       ├── textbook.md
│   │   │       └── handbook.md
│   │   └── ef2/
│   │       ├── module-01/
│   │       │   ├── lesson-01.md
│   │       │   ├── ...
│   │       │   └── lesson-20.md
│   │       ├── module-02/
│   │       │   ├── lesson-01.md
│   │       │   ├── ...
│   │       │   └── lesson-20.md
│   │       └── module-03/
│   │           ├── lesson-01.md
│   │           ├── ...
│   │           └── lesson-20.md
│   └── assets/
│       └── <document-id>/
└── scripts/
    ├── build-japanese-data.mjs
    ├── extract-english-markdown.py
    └── build-english-data.mjs
```

Nếu không có hình ảnh thực sự cần thiết, không tạo thư mục `assets` rỗng.

## 5. Quy tắc đặt ID và tên file

### EF1

- `ef1-m01-textbook`
- `ef1-m01-handbook`
- `ef1-m02-textbook`
- `ef1-m02-handbook`
- `ef1-m03-textbook`
- `ef1-m03-handbook`

### EF2

- `ef2-m01-l01` đến `ef2-m01-l20`.
- `ef2-m02-l01` đến `ef2-m02-l20`.
- `ef2-m03-l01` đến `ef2-m03-l20`.

Tên file Markdown phải dùng hai chữ số cho module và lesson.

## 6. Cấu trúc mỗi file Markdown

Mỗi tài liệu nên có phần metadata ở đầu:

```markdown
---
id: ef2-m01-l01
level: EF2
module: 1
lesson: 1
title: Introduction and Networking
source: F2_M01_L01_v0.1.pdf
source_pages: 6
---
```

Sau metadata:

```markdown
# Lesson 01 — Introduction and Networking

> Source: `F2_M01_L01_v0.1.pdf` — 6 pages

<!-- Source: F2_M01_L01_v0.1.pdf, page 1 -->

## Warm-up

...
```

### Bảng

- Bảng hình chữ nhật đơn giản: chuyển sang bảng Markdown.
- Bảng worksheet phức tạp: dùng HTML table hợp lệ trong Markdown hoặc chuyển thành danh sách có nhãn rõ ràng.
- Không làm mất ô trống dùng để người học điền câu trả lời.

### Hội thoại

Trình bày mỗi lượt nói trên một dòng:

```markdown
**Alex:** ...

**Jamie:** ...
```

### Bài tập

- Giữ nguyên số câu.
- Không tự điền câu trả lời nếu tài liệu nguồn không có đáp án.
- Giữ các dòng trống hoặc placeholder cần thiết.

## 7. Pipeline PDF → Markdown

Tạo `scripts/extract-english-markdown.py` với các trách nhiệm:

1. Quét đệ quy `ban_dich_markdown/EN/**/*.pdf`.
2. Nhận diện EF1/EF2, module, lesson và loại tài liệu từ tên file.
3. Sắp xếp theo EF, module, lesson.
4. Dùng PyMuPDF để lấy:
   - text block;
   - font size/style;
   - vị trí block;
   - hyperlink;
   - hình ảnh cần thiết.
5. Phát hiện và loại header/footer lặp.
6. Khôi phục heading dựa trên font, vị trí và từ khóa.
7. Khôi phục đoạn văn, bullet, numbered list, dialogue và table.
8. Thêm metadata và dấu mốc trang.
9. Ghi Markdown theo cấu trúc `english/content`.
10. Sinh báo cáo JSON hoặc console gồm:
    - số PDF;
    - số trang;
    - số Markdown;
    - trang không có text;
    - link được giữ;
    - hình được giữ;
    - lỗi/cảnh báo.

Pipeline phải chạy lặp lại an toàn và cho kết quả ổn định.

## 8. Module web `english`

### Trang danh mục

`english/index.html` cần có:

- tiêu đề English Foundation;
- thống kê 66 tài liệu và 760 trang;
- bộ lọc EF1/EF2;
- bộ lọc Module 01/02/03;
- tìm kiếm theo tiêu đề, nội dung hoặc lesson;
- nhóm riêng Textbook, Handbook và Lesson;
- liên kết quay về trang chủ;
- giao diện responsive.

### Trình đọc

`english/reader.html` cần có:

- tiêu đề tài liệu;
- breadcrumb EF → Module → Lesson;
- sidebar mục lục heading;
- nội dung Markdown được render an toàn;
- điều hướng tài liệu trước/sau;
- tìm kiếm trong tài liệu nếu phù hợp;
- liên kết quay lại danh mục;
- hỗ trợ URL trực tiếp theo ID, ví dụ:

```text
english/reader.html?id=ef2-m01-l01
```

### Static-site constraint

- Không dùng backend.
- Không phụ thuộc framework hoặc package runtime.
- Ưu tiên JavaScript thuần.
- Tất cả đường dẫn phải tương đối để chạy dưới GitHub Pages repository subpath.
- Có thể sinh `catalog.js` và dữ liệu HTML/JS tại build time để tránh lỗi `file://` nếu cần.

## 9. Build script

Tạo `scripts/build-english-data.mjs` không cần package ngoài.

Script phải:

1. Quét `english/content/**/*.md`.
2. Parse front matter.
3. Kiểm tra ID và file trùng.
4. Kiểm tra đủ:
   - 6 tài liệu EF1;
   - 60 tài liệu EF2;
   - tổng 66 tài liệu;
   - EF2 đủ bài 01–20 cho từng module.
5. Sinh `english/catalog.js`.
6. Chuẩn bị dữ liệu cho reader.
7. Báo lỗi và trả exit code khác 0 nếu thiếu tài liệu hoặc metadata không hợp lệ.

Đầu ra mong đợi:

```text
EF1: 6 documents
EF2 Module 01: 20 lessons
EF2 Module 02: 20 lessons
EF2 Module 03: 20 lessons
Total: 66 documents
Source pages: 760
Errors: 0
```

## 10. Tích hợp landing page

Cập nhật `index.html` và `style.css` ở root:

1. Thêm module card số `03` trỏ đến `./english/`.
2. Đổi “Hai hành trình” thành “Ba hành trình”.
3. Cập nhật hero copy và metadata để nhắc đến English Foundation.
4. Thống kê card English đề xuất:
   - 66 tài liệu;
   - 760 trang;
   - 2 cấp độ.
5. Desktop rộng: hiển thị ba card cân đối.
6. Tablet/mobile: chuyển thành một cột hoặc bố cục phù hợp.
7. Không làm hỏng hai module hiện tại.

## 11. Cập nhật README

Cập nhật `README.md`:

- Website có ba module: Copilot, Japanese và English.
- Bổ sung cây thư mục `english`.
- Bổ sung lệnh build:

```powershell
python scripts/extract-english-markdown.py
node scripts/build-english-data.mjs
```

- Ghi rõ file nào sinh tự động và không nên sửa tay.
- Giữ hướng dẫn build Japanese hiện tại.

## 12. Kiểm thử và nghiệm thu

### Kiểm tra dữ liệu

- [ ] Có đúng 66 Markdown nội dung, không tính `00_INDEX.md`.
- [ ] Tổng metadata `source_pages` bằng 760.
- [ ] EF1 có đúng 6 tài liệu.
- [ ] EF2 có đúng 60 bài.
- [ ] Mỗi module EF2 có đủ lesson 01–20.
- [ ] Không có ID trùng.
- [ ] Không có Markdown rỗng.
- [ ] Không còn header/footer bản quyền lặp trong thân nội dung.
- [ ] Các hyperlink được giữ và hợp lệ.
- [ ] Không có đường dẫn ảnh hỏng.

### Kiểm tra nội dung mẫu

Rà thủ công ít nhất:

- trang đầu, giữa và cuối của mỗi textbook EF1;
- một handbook EF1;
- lesson đầu, giữa và cuối của từng module EF2;
- tài liệu có bảng;
- tài liệu có dialogue;
- tài liệu có video/link;
- tài liệu có hình ảnh mang nội dung.

### Kiểm tra website

- [ ] Landing page mở được cả ba module.
- [ ] `english/index.html` hiển thị đủ 66 tài liệu.
- [ ] Filter và search hoạt động.
- [ ] Reader mở đúng tài liệu theo ID.
- [ ] Previous/Next không vượt phạm vi.
- [ ] Link quay về landing page đúng.
- [ ] Responsive ở desktop, tablet và mobile.
- [ ] Không có lỗi JavaScript trong console.
- [ ] Không ảnh hưởng `copilot` và `japanese`.
- [ ] Chạy đúng khi host dưới repository subpath của GitHub Pages.

## 13. Kiểm soát Git

Trước khi sửa:

```powershell
git status --short
```

Không ghi đè thay đổi sẵn có của người dùng.

Thư mục `ban_dich_markdown/EN` hiện đang ở trạng thái untracked và chứa khoảng 105,56 MB PDF. Mặc định:

- giữ PDF nguồn tại chỗ;
- không tự xóa PDF;
- không tự commit/push;
- chỉ đưa PDF vào Git nếu người dùng yêu cầu rõ ràng;
- ưu tiên commit Markdown, module web và build scripts để GitHub Pages nhẹ hơn.

Sau khi hoàn tất, báo cáo:

- danh sách file chính đã tạo/sửa;
- số Markdown và số trang đã chuyển;
- số ảnh/link được giữ;
- kết quả build/validation;
- các hạn chế còn lại nếu có.

## 14. Phạm vi đã được duyệt

Người dùng đã duyệt toàn bộ kế hoạch và yêu cầu triển khai không cần xác nhận lại. Codex được phép tự quyết các chi tiết kỹ thuật nằm trong phạm vi trên.

Không tự mở rộng sang:

- dịch nội dung tiếng Anh sang ngôn ngữ khác;
- thay đổi nội dung hai module Copilot/Japanese ngoài phần tích hợp landing page;
- xóa PDF nguồn;
- commit, push hoặc deploy GitHub Pages;
- thay đổi repository/branch từ xa.

