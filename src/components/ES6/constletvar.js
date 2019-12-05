import React from 'react'

class Constletvar extends React.Component {
    //const
    render() {
        var global_variable = 'global';
        let a2 = 'a2' 
        function fn1() {
            if (true) {
                var a1 = 'a1' 
                let a2 = 'a2' 
                const a3 = 'a3' 
            }

            console.log(a1) // var a1 khai báo trong block scope nhưng ở trong cùng 1 function scope ở bên ngoài thì vẫn có thể print ra được
            //  console.log(a2) // let & const a2,a3 khai báo trong block scope nhưng ở trong function scope thì sẽ không thể print ra được ( báo lỗi là chưa được khai báo)
            // console.log(a3) 
        }
        console.log(global_variable)
        // các biến a1,a2,a3 khai báo trong 1 function scope nên ở ngoài global scope sẽ không gọi được. --> chiều ngược lại sẽ lấy được giá trị bình thường
        // console.log(a1) 
        // console.log(a2) 
        // console.log(a3)
        fn1();
        return (
            <div>
                -  Scope: phạm vi làm việc của javascript
                <br />
                - Global scope:  toàn cục tạm gọi là root của javascript trên 1 webpage
                <br />
                - Function scope: Khối làm việc trong 1 function
                <br />
                - Block scope: khối làm việc trong 1 biểu thức rẽ nhánh như : if, switch case, vòng lặp for, while..
                <br />
                <b>Thông tin thêm</b> <br />

                - var có thể update và khai báo lại, let có thể update nhưng không thể khai báo lại (trong cùng 1 scope ), const không thể update hoặc khai báo lại
                <br/>
                - hoisting: var thì có thể làm được và không bị báo lỗi khi thực hiện in ra giá trị của biến (hoặc xử lý khác) nhưng let và const thì không được. --> let và const sẽ minh bạch hơn <br/>
                - var và let có thể khai báo rồi mới gán giá trị, nhưng const thì phải gán giá trị ngay từ khi khai báo ( vì const không thay đổi được giá trị )



            </div>
        );
    }
}
export default Constletvar