//alert('You successfully linked your JavaScript file!');
var $testInfo = $('#testInfo');
var myName='Anthony';
var $userAge=$('#userage');
var testAge;
var testName;
$(function() {
    
    
    inputName.addEventListener("keyup", function(event) {
        if (event.keyCode==13){
            console.log('enter hit');
            
            myName=document.getElementById("inputName").value;

            $.ajax({
                type: 'GET',
                url: 'https://api.agify.io?name='+myName,
                
                success: function(testInfoReq){
                    console.log('success', testInfoReq);
                    testName=testInfoReq.name;
                    testAge=testInfoReq.age;
                    console.log('name', testName);
                    console.log('age',testAge);
                    //this is where the results are shown in page
                    $userAge.append(' My sources tell me because your name is '
                    + testName+' you are about '
                    +testAge+ ' Years Old');


                    $.each(testInfoReq, function(i, eachtestInfo){
                        $testInfo.append(i+': '+eachtestInfo+' ');
                    })
                },
                error: function(testInfo){
                    console.log('error', testInfo);
        
                },
            });

           
            
        }

    });
    
});