import React from 'react'

class ArrowFunction extends React.Component {

    render() {
        let People = function (person, age) {
            this.person = person;
            this.age = age;
            this.info = function () {

                // logs People 
                console.log(this);

                setTimeout(() => {
                    // here this!=People if using function
                    // else this == People if using arrow function because 'this' is inherit
                    let a = function () {
                    setTimeout(() => {
                            console.log(this);
                            console.log('arrow function con bên trong ' + this + " is " + this +
                                " years old  ");
                        }, 1000);
                    }
                    a();

                    console.log('  ' + this.person + " is " + this.age +
                        " years old ");
                }, 1000);
            };
            this.info1 = () => {
                console.log(this); // maybe err
            }
        }
        let person1 = new People('John', 21);

        // logs : undefined is undefined years old after 3 seconds 
        person1.info();
        person1.info1();
        return (
            <div>
                Arrow function <br />
                - Arrow function là cách viết rút gọn của function <br />
                - trong arrow function không có this của chính nó, nên khi sử dụng this ở trong arrow function tức là gọi tới this = cha của nó . Trường hợp có nhiều arrow function lồng nhau thì sẽ gọi tới this ngoài cùng
            </div>
        );
    }
}
export default ArrowFunction