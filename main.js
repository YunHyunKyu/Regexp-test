let str = `
010-1111-2222
yhk@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/
//console.log(str.match(regexp))
// console.log(regexp.test(str));
// console.log(str.replace(regexp, 'AAA'))
// str = str.replace(regexp, 'AAA');
// console.log(str);

// console.log(
//   str.match(/\b\w{2,3}\b/g)
//   );

// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// f로 시작하는 모든 문자 찾기
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )

// const h = `  the hello world   !

// `

// // 공백 문자 제거.
// console.log(
//   h.replace(/\s/g, '')
// )

console.log(
  str.match(/(?<=@).{1,}/g)
)