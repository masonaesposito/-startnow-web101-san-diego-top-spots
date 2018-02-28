$(document).ready(function(){
    $.getJSON("data.json", function(data){
        var places_data = '';
        $.each(data, function(key,value){
             places_data += '<tr>';
             places_data += '<td>'+ value.name +'</td>';
             places_data += '<td>'+ value.description +'</td>';      
             places_data += '<td>'+ value.location +'</td>';
             places_data += '</tr>';
        });
        $('#places-to-visit-SD').append(places_data);
    });
 });