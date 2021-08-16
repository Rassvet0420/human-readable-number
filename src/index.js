module.exports = function toReadable (number) {
    let decileNumb = number % 10;
    let hundredthNumb = number % 100;
    let thousandthNumb = number % 1000;

    if (number === 0) {
        return 'zero'
    }

    let toDecileNumb = (dn) => {
        if (dn === 1) {
            return 'one';
        } else if (dn === 2) {
            return 'two';
        } else if (dn === 3) {
            return 'three';
        } else if (dn === 4) {
            return 'four';
        } else if (dn === 5) {
            return 'five';
        } else if (dn === 6) {
            return 'six';
        } else if (dn === 7) {
            return 'seven';
        } else if (dn === 8) {
            return 'eight';
        } else if (dn === 9) {
            return 'nine';
        } else if (dn === 0) {
            return ''
        }
    }

    let namedNumbers = (nn) => {
        if (nn === 10) {
            return 'ten';
        } else if (nn === 11) {
            return 'eleven';
        } else if (nn === 12) {
            return 'twelve';
        } else if (nn === 13) {
            return 'thirteen';
        } else if (nn === 14) {
            return 'fourteen';
        } else if (nn === 15) {
            return 'fifteen';
        } else if (nn === 16) {
            return 'sixteen';
        } else if (nn === 17) {
            return 'seventeen';
        } else if (nn === 18) {
            return 'eighteen';
        } else if (nn === 19) {
            return 'nineteen';
        }
    }

    let toHundredthNumb = (hn) => {
        if (hn >= 20 && hn < 30) {
            return 'twenty';
        } else if (hn >= 30 && hn < 40) {
            return 'thirty';
        } else if (hn >= 40 && hn < 50) {
            return 'forty';
        } else if (hn >= 50 && hn < 60) {
            return 'fifty';
        } else if (hn >= 60 && hn < 70) {
            return 'sixty';
        } else if (hn >= 70 && hn < 80) {
            return 'seventy';
        } else if (hn >= 80 && hn < 90) {
            return 'eighty';
        } else if (hn >= 90 && hn <= 99) {
            return 'ninety';
        }
    }

    let toThousandthNumb = (tn) => {
        if (tn >= 100 && tn <= 199) {
            return 'one hundred';
        } else if (tn >= 200 && tn <= 299) {
            return 'two hundred';
        } else if (tn >= 300 && tn <= 399) {
            return 'three hundred';
        } else if (tn >= 400 && tn <= 499) {
            return 'four hundred';
        } else if (tn >= 500 && tn <= 599) {
            return 'five hundred';
        } else if (tn >= 600 && tn <= 699) {
            return 'six hundred';
        } else if (tn >= 700 && tn <= 799) {
            return 'seven hundred';
        } else if (tn >= 800 && tn <= 899) {
            return 'eight hundred';
        } else if (tn >= 900 && tn <= 999) {
            return 'nine hundred';
        }
    }



    if (number === decileNumb) {
        return toDecileNumb(decileNumb);
    }

    if (number > 9 && number < 20) {
        return namedNumbers(number);
    }

    if (number === hundredthNumb) {
        let deciledHundredthNumb = hundredthNumb % 10;
        if (deciledHundredthNumb === 0) {
            return toHundredthNumb(hundredthNumb);
        } else {
            return toHundredthNumb(hundredthNumb) + ' ' + toDecileNumb(deciledHundredthNumb);
        }
    }

    if (number === thousandthNumb) {
        let hundrededThousandthNumb = thousandthNumb % 100;
        let deciledHundrededThousandthNumb = hundrededThousandthNumb % 10;


        if (thousandthNumb % 100 === 0) {
            return toThousandthNumb(thousandthNumb);
        }

        if (hundrededThousandthNumb > 9 && hundrededThousandthNumb < 20) {
            return toThousandthNumb(thousandthNumb) + ' ' + namedNumbers(hundrededThousandthNumb);
        }

        if (thousandthNumb % 100 < 10) {
            return toThousandthNumb(thousandthNumb) + ' ' + toDecileNumb(deciledHundrededThousandthNumb);
        }

        if(hundrededThousandthNumb % 10 === 0) {
            return toThousandthNumb(thousandthNumb) + ' ' + toHundredthNumb(hundrededThousandthNumb);
        }

        return toThousandthNumb(thousandthNumb) + ' ' + toHundredthNumb(hundrededThousandthNumb) + ' ' + toDecileNumb(deciledHundrededThousandthNumb);
    }
}
