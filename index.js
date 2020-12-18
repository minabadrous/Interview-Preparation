// 
// 
// Rot13 , replaces letter with the letter 13 codes after
// 
function rot13(message){
    return message.replace(/[a-z]/ig, (l) => 
    String.fromCharCode( l.charCodeAt(0) + (l.toLowerCase() < 'n' ? 13 : -13) ) )
}


