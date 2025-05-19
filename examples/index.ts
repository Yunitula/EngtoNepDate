const { adToBs, bsToAd, calculateAge } = require('../dist/@Yunitula/EngtoNepDate.umd.js');
try {
	console.log(adToBs('2016-02-15'));
	console.log(calculateAge('2070-10-15'));
} catch (e) {
	console.log(e.message);
}
