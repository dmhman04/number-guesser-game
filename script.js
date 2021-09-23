'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const inputEl = document.querySelector('.guess');
const buttonEl = document.querySelector('.check');
const bodyEl = document.querySelector('body');
const buttonAgainEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

/*
1.Khởi tạo biến score và gán giá trị là 20. Hiển thị giá trị score
lên giao diện web (Gợi ý: tham chiếu phần tử có class là "score")

2. Sau khi bấm nút "Check!". Kiểm tra giá trị người dùng nhập vào.
Nếu giá trị là rỗng thì hiển thị nội dung "No number!"
(Gợi ý: hiển thị nội dung tại phần tử có class là "message")

3. Sau đó, thực hiện logic của game như sau:

+ Nếu giá trị người dùng nhập vào (guessNumber) bằng giá trị secretNumber
thì hiển thị nội dung "Correct Number". Sau đó dùng phần tử có class "number"
để hiển thị secretNumber.

+ Nếu guessNumber không bằng secretNumber:
  * Nếu điểm của người chơi lớn hơn 1 thì trừ đi "score" của người chơi 1 đơn vị và cập nhật
    giá trị lên giao diện web. Trường hợp ngược lại thì hiển thị nội dung "You Lost"
    và hiển thị secretNumber lên giao diện web.
  * Dựa vào giá trị guessNumber lớn hơn hay nhỏ hơn secretNumber
    để hiển thị nội dung tương ứng("Too Low" hoặc "Too High").

4. Nếu người chơi đoán đúng thì thay đổi màu body trang web sang mã màu #60b347

5. Khi người dùng bấm nút Again thì logic như sau:
+ Chuyển màu của body về như cũ.
+ Thay đổi secretNumber.
+ Xoá giá trị input của người dùng trước đó.
+ Restart điểm của người dùng về ban đầu.
+ Thay đổi nội dung của phần tử có class "message" thành "Start guessing...".
+ Thay đổi nội dung của phần tử có class "number" thành "?".

6. Khai báo biến highScore để lữu trữ điểm số cao nhất của người dùng
sau mỗi lượt chơi. Hãy thực hiện logic cho Highscore.
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
scoreEl.textContent = score;

const logicCheck = function () {
  if (inputEl.value === "") {
    messageEl.textContent = "No number!";
  } else {
    const guessNumber = Number(inputEl.value);

    if (guessNumber === secretNumber) {
      messageEl.textContent = "Correct Number";
      numberEl.textContent = secretNumber;
      bodyEl.style.backgroundColor = "#60b347";

      if (score > highscore) {
        highscore = score;
        highScoreEl.textContent = highscore;
      }
    } else {
      if (score > 1) {
        score -= 1;
        scoreEl.textContent = score;

        if (guessNumber > secretNumber) {
          messageEl.textContent = "Too High";
        } else {
          messageEl.textContent = "Too Low";
        }
      } else {
        messageEl.textContent = "You lost";
        numberEl.textContent = secretNumber;
      }
    }
  }
};

buttonEl.addEventListener('click', logicCheck);

const againLogic = function () {
  bodyEl.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  inputEl.value = '';
  score = 20;
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
};
buttonAgainEl.addEventListener('click', againLogic);