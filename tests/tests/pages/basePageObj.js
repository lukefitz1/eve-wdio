class Base {
	generateRandomString() {
		return randomstring.generate({
            length: 5,
            charset: 'alphanumeric'
        });
	}

	capitalizeFirstLetter(str) {
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	wordCount(str) {
		return str.split(" ").length;
	}

	formatProdNameString(str) {
		var strArr = str.split(" ");
		var prodName = "";

		for (var i=0; i < strArr.length; i++) {
			if (i == (strArr.length) - 1) {
				prodName += this.capitalizeFirstLetter(strArr[i]);
			} else {
				prodName += this.capitalizeFirstLetter(strArr[i]) + " ";
			}
		}

		return prodName;
	}
}

module.exports = new Base();