Bài 3: tạo project với Nest CLI

main.ts: File để khởi tạo các đối tượng chạy ứng dụng, chẳng hạn ta có thể dùng lệnh NestFactory.create() để tạo instance cho Nest.

app.module.ts: Là module gốc của ứng dụng, có trách nhiệm đóng gói mọi thứ có trong project.

app.controller.ts: Chứa các router để xử lý các request và trả về response cho client.

app.services.ts: Chứa các hàm xử lý logic cho service, chẳng hạn như ứng dụng có service kết nối đến DB hoặc xử lý file,…

app.controller.spec.ts: File dùng để viết unit test cho các controller.

- npm i -g @nestjs/cli
- nest new project-name

tạo folder bằng lệnh:

-tạo file module messages
nest g module messages

-tạo file controller
nest g controller messages/messages --flat
