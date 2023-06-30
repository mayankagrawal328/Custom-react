  
  export function Flag(param){
    var html="";
    param.forEach(function(item, index){
        html+=`<div style="background-color:${item};">${index}</div>`
    })
    return html;
 
  }