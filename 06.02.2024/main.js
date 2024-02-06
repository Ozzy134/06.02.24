// // console.log(document.forms[0])
// // console.log(document.forms.reg)
// let form = document.forms.reg
// // console.log(form.element.btn)
// // let elem = document.querySelector('.input')
// // console.log(elem.form)
// let email = form.elements.email
// let error = document.querySelector('.error')
// let errorAgree = document.querySelector('.agree')
// let agree = form.elements.agree

// email.addEventListener('blur', () => {
//     if(!email.value.includes('@')){
//         error.innerHTML = 'Email error'
//     }
// })

// email.addEventListener('focus', () => {
//     error.innerHTML = ''
// })

// agree.addEventListener('blur', () => {
//     if(!agree.checked){
//         errorAgree.innerHTML = 'Нужно выбрать'
//     }
// })

// agree.addEventListener('focus', () => {
//     errorAgree.innerHTML = ''
// })

// 11111

// let input = document.querySelector('.input');
// let newElem;

// input.addEventListener('click', () => {
//     newElem = document.createElement('textarea')
//     newElem.innerHTML = input.textContent;

//     newElem.onblure = blurText;

//     input.replaceWith(newElem)
// })

// function blurText(){
//     input.textContent = newElem.value;
//     newElem.replaceWith(input)
// }

// 22222

// let users = []
// async