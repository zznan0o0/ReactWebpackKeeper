class KString {
  len(str) {
    var l = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        l++;
      } else {
        l += 2;
      }
    }
    return l;
  }
}

export default KString;
