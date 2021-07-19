//returning first element of array
arr=[1,2,3,45];
function getFirstValue(arr) {
	console.log(arr[0]);
}

getFirstValue(arr);
//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(votes) {
	
	return votes.upvotes-votes.downvotes;
}

const v=getVoteCount(45);

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
	result= (side1+side2)-1;
	return result;
}