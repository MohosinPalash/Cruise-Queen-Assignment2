var firstClassTickets = stringToFloatForInputField("first_class_seat");
        var economyClassTickets = stringToFloatForInputField("economy_class_seat");

        var subtotalAmount = stringToFloatForTextField("subtotal_amount");
        var vatAmount = stringToFloatForTextField("vat_amount");
        var totalAmount = stringToFloatForTextField("total_amount");

        //To convert string to float data received from INPUT tag
        function stringToFloatForInputField(id){
            var stringNum = document.getElementById(id).value;
            if(stringNum=="")
                stringNum="0";
            const num = parseFloat(stringNum);
            return num;
        }

        //To convert string to float data received from PARAGRAPH tag
        function stringToFloatForTextField(id){
            const stringNum = document.getElementById(id).innerText;
            const num = parseFloat(stringNum);
            return num;
        }

        //To show the values in the INPUT tag and PARAGRAPH tag
        function showOutput(type, ID, val){
            if(type == "inputField")
                document.getElementById(ID).value = val;
            else if (type == "textField")
                document.getElementById(ID).innerText = val;
        }

        //To update and calculate the total fair of the tickets
        function amountCalculation(isFirstClass, isIncrease, unitPrice){
            
            if(isFirstClass == true && isIncrease == true){
                
                firstClassTickets++;
                subtotalAmount+=unitPrice;
                vatAmount = subtotalAmount*0.1;
                totalAmount = subtotalAmount + vatAmount;

                showOutput("inputField","first_class_seat", firstClassTickets);
                showOutput("textField", "subtotal_amount", subtotalAmount);
                showOutput("textField", "vat_amount", vatAmount);
                showOutput("textField", "total_amount", totalAmount);

            }else if(isFirstClass == true && isIncrease == false){
                
                if(firstClassTickets>0){
                    
                    firstClassTickets--;
                    subtotalAmount-=unitPrice;
                    vatAmount = subtotalAmount*0.1;
                    totalAmount = subtotalAmount + vatAmount;

                    showOutput("inputField","first_class_seat", firstClassTickets);
                    showOutput("textField", "subtotal_amount", subtotalAmount);
                    showOutput("textField", "vat_amount", vatAmount);
                    showOutput("textField", "total_amount", totalAmount);
                    console.log("- clicked");
                }
                
            }else if(isFirstClass == false && isIncrease == true){
                
                economyClassTickets++;
                subtotalAmount+=unitPrice;
                vatAmount = subtotalAmount*0.1;
                totalAmount = subtotalAmount + vatAmount;

                showOutput("inputField","economy_class_seat", economyClassTickets);
                showOutput("textField", "subtotal_amount", subtotalAmount);
                showOutput("textField", "vat_amount", vatAmount);
                showOutput("textField", "total_amount", totalAmount);

            }else if(isFirstClass == false && isIncrease == false){
                
                if(economyClassTickets>0){
                    
                    economyClassTickets--;
                    subtotalAmount-=unitPrice;
                    vatAmount = subtotalAmount*0.1;
                    totalAmount = subtotalAmount + vatAmount;
                    
                    showOutput("inputField","economy_class_seat", economyClassTickets);
                    showOutput("textField", "subtotal_amount", subtotalAmount);
                    showOutput("textField", "vat_amount", vatAmount);
                    showOutput("textField", "total_amount", totalAmount);
                    console.log("- clicked");
                }
                
            }
            
        }

        //To confirm the purchase
        function bookNow(){
            var leavingFrom = document.getElementById("leaving_from_input").value;
            var goingTo = document.getElementById("going_to_input").value;
        
            var departureDate = document.getElementById("departure_date_input").value;
            var returnDate = document.getElementById("return_date_input").value;

            var message = "Your Ticket Description:\n"
                            +leavingFrom+" to "+goingTo+" on "+departureDate
                            +"\nFirst Class : "+firstClassTickets+" seat(s) "
                            +"\nEconomy Class : "+economyClassTickets+" seat(s) "
                            +"\nTotal Fare: $ "+totalAmount
                            +"\nDo you want to confirm?";
            var confirmBox = confirm(message);
            if(confirmBox == true){
                document.getElementById("toastMsg").innerText = "Order received successfully. Thank you!"
                clearAllField();
            }else{
                document.getElementById("toastMsg").innerText = "Order has been cancelled."
                clearAllField();
            }
        }

        // To blank all the data fields
        function clearAllField(){
            document.getElementById("leaving_from_input").value = "";
            document.getElementById("going_to_input").value = "";
            document.getElementById("departure_date_input").value = "";
            document.getElementById("return_date_input").value = "";
            document.getElementById("first_class_seat").value = "";
            document.getElementById("economy_class_seat").value = "";
            document.getElementById("subtotal_amount").innerText = "00";
            document.getElementById("vat_amount").innerText = "00";
            document.getElementById("total_amount").innerText = "00";
        }