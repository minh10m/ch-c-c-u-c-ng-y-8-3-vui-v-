
function transformWord0(){
   document.querySelector('.content').innerHTML = `Nhân dịp ngày 8-3, là ngày quốc tế Phụ Nữ...`;
}
function transformWord1() {
   document.querySelector('.content').innerHTML = `tớ muốn gửi lời chúc mừng đến cô gái xinh đẹp và tài năng trên màn hình đó =)))))`;
}
function transformWord2() {
   document.querySelector('.content').innerHTML = `Chúc cậu hãy luôn tin vào bản thân mình, không ngừng theo đuổi những ước mơ của mình`;
}
function transformWord3() {
   document.querySelector('.content').innerHTML = `Mỗi bước đi, mỗi trải nghiệm đều là một phần của hành trình trưởng thành và tự do của cậu.`;
}
function transformWord4(){
   document.querySelector('.content').innerHTML = `Chúc cậu có một ngày lễ tràn đầy niềm vui và hạnh phúc! Hãy luôn tỏa sáng như những ngôi sao sáng trên bầu trời đêm. 🌟💖`;
}
function transformWord5(){
   document.querySelector('.content').innerHTML = `(lướt xuống dưới và ở góc bên trái có món quà dành cho cậu đấy)`;
}
document.querySelector('.start').addEventListener('click', () => {
      transformWord0();
      setTimeout(() => {
         transformWord1();
      }, 5000);
      setTimeout(() => {
         transformWord2();
      }, 10000);
      setTimeout(() => {
         transformWord3();
      }, 15000);
      setTimeout(() => {
         transformWord4();
      }, 20000);
      setTimeout(() => {
         transformWord5();
      }, 26000);
});