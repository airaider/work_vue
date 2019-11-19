함수 내 this => window (전역객체)

this가 변경 상황
1. 생성자 함수 내
   this => new 되는 객체 자기 자신
2. bind(), call(), apply()
   this로 사용될 객체를 변경