// goi den button a
var btnBuys = document.querySelectorAll('.js-button-buy-ticket')

//goi den container
var getContainer = document.querySelector('.modal-container')

// lấy nút close
var close_button = document.querySelector('.js-close-button')

// goi class modal
var getModal = document.querySelector('.js-modal')

// Tạo funtion thêm class open vào class modal
function showContainer(){
    getModal.classList.add('open')
}

// ham remove khi nhan nut close
function hideContainer(){
    getModal.classList.remove('open')
}
// Ta0 vong lap bat su kien khi nhan nut
for(var btnBuy of btnBuys){
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