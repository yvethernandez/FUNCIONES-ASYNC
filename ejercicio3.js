   //resta
    function resta(numero1, numero2) {
        console.log("la resta es " + (numero1-numero2));
        
        }
        function dos(numero1, numero2, funcionCallback) {
        funcionCallback(numero1, numero2); // 3
        }
        dos(5, 2, resta);

           // suma
        function suma(numero1, numero2) {
            console.log("la suma es " + (numero1+numero2));
            
            }
            function segunda(numero1, numero2, funcionCallback) {
            funcionCallback(numero1, numero2); // 9
            }
            segunda(7, 2, suma);

              // multiplicacion
            function multiplica(numero1, numero2) {
                console.log("la multiplicacion es " + (numero1*numero2));
                
                }
                function tres(numero1, numero2, funcionCallback) {
                funcionCallback(numero1, numero2); // 81
                }
                tres(9, 9, multiplica);

                // division
                function division(numero1, numero2) {
                    console.log("la division es " + (numero1/numero2));
                    
                    }
                    function cuatro(numero1, numero2, funcionCallback) {
                    funcionCallback(numero1, numero2); // 4
                    }
                    cuatro(80, 20, division);