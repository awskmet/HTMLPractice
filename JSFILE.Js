//alert('You successfully linked your JavaScript file!');
var $testInfo = $('#testInfo');
var myName='Anthony';
$(function() {
    $.ajax({
        type: 'GET',
        url: 'https://api.agify.io?name='+myName,
        
        success: function(testInfo){
            console.log('success', testInfo);
            console.log('name', testInfo.name)
            $.each(testInfo, function(i, eachtestInfo){
                $testInfo.append(i+': '+eachtestInfo+' ');
            })
        },
        error: function(testInfo){
            console.log('error', testInfo);

        }
    });
});