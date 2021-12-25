export const ConvertNameToRGB = (userName) => {
  let nIdx = 0;
  if (userName && userName !== '') {
    for (let i = 0; i < userName.length; i++) {
      nIdx += userName.charCodeAt(i);
      nIdx = nIdx % 24;
    }
  }

  let sColor = "";
  switch (nIdx) {
    case 0: sColor = "#AD1457"; break;
    case 1: sColor = "#D81B60"; break;
    case 2: sColor = "#D50000"; break;
    case 3: sColor = "#E67C73"; break;

    case 4: sColor = "#F4511E"; break;
    case 5: sColor = "#EF6C00"; break;
    case 6: sColor = "#F09300"; break;
    case 7: sColor = "#F6BF26"; break;

    case 8: sColor = "#E4C441"; break;
    case 9: sColor = "#C0CA33"; break;
    case 10: sColor = "#7CB342"; break;
    case 11: sColor = "#33B679"; break;

    case 12: sColor = "#0B8043"; break;
    case 13: sColor = "#009688"; break;
    case 14: sColor = "#039BE5"; break;
    case 15: sColor = "#4285F4"; break;

    case 16: sColor = "#3F51B5"; break;
    case 17: sColor = "#7986CB"; break;
    case 18: sColor = "#B39DDB"; break;
    case 19: sColor = "#9E69AF"; break;

    case 20: sColor = "#8E24AA"; break;
    case 21: sColor = "#795548"; break;
    case 22: sColor = "#616161"; break;
    case 23: sColor = "#A79B8E"; break;
    default: sColor = "#FFFFFF"; break;
  }
  return sColor;
}

export const ReturnToMainPage = () => {
  window.location.replace("./");
}