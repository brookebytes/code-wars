//------------------------------A wolf in sheep's clothing - 8kyu------------------------------
/*Warn the sheep in front of the wolf that it is about to be eaten. 
* Remember that you are standing at the front of the queue which is at the end of the array*/

function warnTheSheep(queue) {
    let n = queue.indexOf('wolf');
    return queue.length-1==n ? 'Pls go away and stop eating my sheep' 
        : `Oi! Sheep number ${queue.length-n-1}! You are about to be eaten by a wolf!`;
}