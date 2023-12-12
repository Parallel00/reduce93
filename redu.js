function extractValue(arra, key){
	return arra.reduce(function(acc, nx){
		acc.push(nx[key]);
		return acc;
	}, []);
}

function vowelCount(s){
	const vowels = "aeiou";
	return s.split('').reduce(function(acc,nx){
		let lowerCase = nx.toLowerCase()
		if(vowels.indexOf(lowerCase) !== -1){
			if(acc[lowerCase]){
				acc[lowerCase]++;
			} else {
				acc[lowerCase] = 1;
			}
		}
		return acc;
	}, {});
}

function addKeyAndValue(arra, key, val){
	return arra.reduce(function(acc,nx,idx){
		acc[idx][key] = val;
		return acc;
	}, arra);
}

function partition(arra, cb){
	return arra.reduce(function(acc,nx){
		if(cb(nx)){
			acc[0].push(nx);
		} else {
			acc[1].push(nx);
		}
		return acc;
	}, [[].[]]);
}