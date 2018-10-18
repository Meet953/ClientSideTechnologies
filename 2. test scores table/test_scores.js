var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function addScore (){
    var name = $("name").value;
    var score = $("score").value
    names.push(name);
    scores.push(score);
}

function displayResults(){
    
    var sum=0;
    var max = 0
    var maxindex = 0;
    var maxindex1=scores.indexOf(Math.max(...scores));
    alert(maxindex1);
    for(var i=0;i<scores.length;i++)
        {
            if(scores[i] > max)
                {
                    max = scores[i];
                    maxindex = i;
                }
            
            sum = sum + scores[i];
        }
    var avg = sum/scores.length();
    
    $("results").innerHTML = "<h2>Resul</h2><br><p>Average Score = "+ avg +"<br> High Score = "+ names[maxindex] +" with a score of "+ scores[maxindex]  +"</p>";
    
}

function displayScores(){
 
    $("scores_table").innerHTML = "";
    
    $("scores_table").innerHTML="<caption>Scores</caption><tr><th>Name</th><th>Score</th></tr>";
    
    for(var i=0;i<scores.length;i++)
        {
              $("scores_table").innerHTML += "<tr><td>"+ names[i] +"</td><td>"+ scores[i] + " </tr>";
        }
    
    
}