
var love=parseInt(prompt("entre nombre utilisateur 1"))
var hate=parseInt(prompt("entre nombre utilisateur 2"))
while (love != hate ){
if (hate<love) {
    prompt("trop petit")
    
} else {
    prompt("trop grand")
    
}
}
if (love==hate) {
    alert("bravo")
}