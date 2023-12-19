var nameLst = new Array("fishda", "H2O", "lahatNgKlase10", "COJ", "kekw", "Tikoymasarap", "kangkong chips", "Book", "Majin Buu", "Gg", "Tito Boyet", "Bogart", "kopi", "uwianna", "Bigblackhawk", "kamote", "Milk Tea", "chalahedchala", "Polaris Express");
var test = ["1", "2", "3"];
var j = 0;
function random(arr_nameLst, collision) {
    var _a, _b;
    if (!collision) {
        for (var i = arr_nameLst.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            _a = [arr_nameLst[j], arr_nameLst[i]], arr_nameLst[i] = _a[0], arr_nameLst[j] = _a[1];
        }
    }
    else {
        for (var i = arr_nameLst.length - 1; i > 0; i--) {
            do {
                j = Math.floor(Math.random() * (i + 1));
            } while (i == j);
            _b = [arr_nameLst[j], arr_nameLst[i]], arr_nameLst[i] = _b[0], arr_nameLst[j] = _b[1];
        }
    }
    for (var i = 0; i < arr_nameLst.length; i++) {
        console.log(arr_nameLst[i]);
    }
}
random(nameLst, true);
