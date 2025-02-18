// // Event emitter

// function Emitter(){
//     this.events = {}
// };

// // on is used add callback 
// Emitter.prototype.on = function(type , eventListener){
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(eventListener)
// }

// // emit is used trigger an events
// Emitter.prototype.emit = function(type){
//     if(this.events[type]){
//         this.events[type].forEach(listener => {
//             listener()});
//     }
// }
// module.exports = Emitter ;