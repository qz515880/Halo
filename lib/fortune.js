var fortunes = ["Whenever possible, keep it simple.",
				"Revers need springs.",
				"Do not fear what you don't know.",
				"You will have a pleasant suprise.",
				"Conquer your fears or they will conquer you."];

exports.getFortune = function(){
	var idx = Math.floor(Math.random() * fortunes.length)
	return fortunes[idx];
}