function findSmallestInt(args) {
	let min = args[0];
	for (let i = 1; i < args.length; i++) {
		if (min > args[i]) {
			min = args[i];
		}
	}
	return min;
}

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return Math.min(...args)
	}
}

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.sort((a,b)=>a-b)[0];
	}
}

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return Math.min.apply(this,args);
	}
}
console.log(findSmallestInt([78, 56, 232, 12, 8]))//8,'Should return the smallest int 8');
console.log(findSmallestInt([78, 56, 232, 12, 18]))//12,'Should return the smallest int 12');
console.log(findSmallestInt([78, 56, 232, 412, 228]))//56,'Should return the smallest int 56');
/*console.log(findSmallestInt([78, 56, 232, 12, 0]))//0,'Should return the smallest int 0');
console.log(findSmallestInt([1, 56, 232, 12, 8]))//1,'Should return the smallest int 1');*/
