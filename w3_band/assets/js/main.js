// goi den button a
let btnBuys = document.querySelectorAll('.js-button-buy-ticket')

//goi den container
let getContainer = document.querySelector('.modal-container')

// lấy nút close
let close_button = document.querySelector('.js-close-button')

// goi class modal
let getModal = document.querySelector('.js-modal')

// Tạo funtion thêm class open vào class modal
function showContainer(){
    getModal.classList.add('open')
}

// ham remove khi nhan nut close
function hideContainer(){
    getModal.classList.remove('open')
    
}
// Ta0 vong lap bat su kien khi nhan nut
for(let btnBuy of btnBuys){
    btnBuy.addEventListener('click',showContainer )
}

// thuc hien hanh dong khi nhan close
close_button.addEventListener('click',hideContainer )

// nhấn ngoài container sẽ hidden 
getModal.addEventListener('click',hideContainer)

//bỏ hiệu ứng nổi bọt khi click vào container sẽ không hidden
getContainer.addEventListener('click', function(e){
    e.stopPropagation()
})

// get header responsive mobile
let getHeader = document.querySelector('#header')
let menuButton = document.querySelector('.menu-mobile')
// lấy giá trị chiều cao
let currentHeight = getHeader.clientHeight
// click menu
menuButton.addEventListener('click',function(){
    // Chiều cao header ban đầu là 47 nên thẻ sẽ đóng
    let currentClose = getHeader.clientHeight === currentHeight
    if(currentClose){
        getHeader.style.height = 'auto'
    }
    else{ //nếu lấy giá trị thông qua height khác 47 sẽ gán lại header bằng gtri ban đầu để đóng
        getHeader.style.height = null
    }
    
})

// sau khi click vào menu sẽ ẩn menu đi ư
// lấy cấc thẻ a
let getItems = document.querySelectorAll('#nav li a[href *= "#"]')

// tạo vòng lặp bắt sự kiện khi nhấn vào từng thẻ a
for (let Item of getItems){
    Item.addEventListener('click',function(e){
        let getMenuMore = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav') // kiểm tra có chứa lớp subnav không
        if(getMenuMore){
            e.preventDefault()
        }
        else{
            getHeader.style.height = null
        }
    })
}


// lấy selector More
this



// lấy giá trị người dùng input
// console.log(personInput.values)


// get button submit
// let btnSubmit = document.querySelector('.btn-submit')
// // click button
// btnSubmit.addEventListener('click',function(e){
//     let personInputs = document.querySelectorAll('.form-control')
//     for(let personInput of personInputs ){
//         e.preventDefault()
//         // btnSubmit.values
//         console.log(personInput.value)
//         if(personInput[].value)
//     }

// })


// thực hiên chức năng báo lỗi form
/**
 * khi người dùng click vào form-text blur ra ngoài để trống báo lỗi + màu đỏ border
 * Khi click nút send ô nào còn trống cũng báo lỗi tương tự 
 * Các bước
 * 1. Lấy được Element các nút
 * 2. Kiểm tra value trong nút
 * 3 Nếu trống thực hiện báo lỗi và ngược lại 
 *  
 */



// lấy element name-input
let getNameInput = document.querySelector('.input-name')
//// thưucj hiên hành động blur 
getNameInput.addEventListener('blur', function getValue(){
        // kiem tra input có rỗng không
        if(getNameInput.value.trim() === ''){
            getNameInput.classList.add('error')
            spanName.classList.add('error')
       }
       else{
        getNameInput.classList.remove('error')
       }
   }
)

// get EMAIL input
let getEmailInput = document.querySelector('.input-email')
getEmailInput.addEventListener('blur', function getValue(){
    if(getEmailInput.value.trim() === ''){
        getEmailInput.classList.add('error')
        spanEmail.classList.add('error')

   }
   else{
    getEmailInput.classList.remove('error')
   }
})

/// get Message
let getMessageInput = document.querySelector('.Message-text')
getMessageInput.addEventListener('blur', function getValue(){
    if(getMessageInput.value.trim() === ''){
        getMessageInput.classList.add('error')
        spanMessage.classList.add('error')

   }
   else{
    getMessageInput.classList.remove('error')
   }
})


// khi không đầy đủ thông tin nhấn subbmit sẽ baó lỗi
let getBtn_send = document.querySelector('.btn-submit')
getBtn_send.addEventListener('click', function(e){
    e.preventDefault()
    // if(getNameInput.value === '' || getEmailInput.value === '' || getMessageInput.value === '') {
        if(getNameInput.value.trim() === ''){
            getNameInput.classList.add('error')
            spanName.classList.add('error')
       }
       else if(getEmailInput.value.trim() === ''){
            getEmailInput.classList.add('error')
            spanEmail.classList.add('error')
       }
       else if(getMessageInput.value.trim() === ''){
        getMessageInput.classList.add('error')
        spanMessage.classList.add('error')
       }
       else{
        getNameInput.classList.add('error')
        spanName.classList.add('error')

        getEmailInput.classList.add('error')
        spanEmail.classList.add('error')

        getMessageInput.classList.add('error')
        spanMessage.classList.add('error')
       }
    })




/// get thẻ span báo lỗi
let spanName = document.querySelector('.error-name')
let spanEmail = document.querySelector('.error-email')
let spanMessage = document.querySelector('.error-message')