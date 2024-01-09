spow = new Array(6);
spow[0] = 130;
spow[1] = 182;
spow[2] = 180;
spow[3] = 252;
spow[4] = 260;
spow[5] = 364;

function SetTsuyo()
{
  document.stsForm.bair.value = spow[0];
}

function SelTsuyo()
{
  stsuyo = document.stsForm.tsuyo.selectedIndex;
  document.stsForm.bair.value = spow[stsuyo];
}


function CalcDamage()
{
  sdef = Number(document.stsForm.def.value);
  shi  = Number(document.stsForm.hi.value);
  smizu = Number(document.stsForm.mizu.value);
  skami = Number(document.stsForm.kami.value);
  sryu = Number(document.stsForm.ryu.value);
  stsuyo = document.stsForm.tsuyo.selectedIndex;
  str = document.stsForm.bair.value;
  if (str == "") {
    sbair = spow[stsuyo];
  } else {
    sbair = Number(str);
  }

  imax=power.length;
  str = "";
  for (i=0; i<imax; i++) {
    str = power[i].innerHTML;
    atk = Number(str) * sbair / 100;
    dam = atk - ((atk * sdef) / (sdef + 80));

    str = attr[i].innerHTML;
    if (str.indexOf("火属性") >= 0) {
      dam = dam * (100 - shi) / 100;
    } else if (str.indexOf("水属性") >= 0) {
      dam = dam * (100 - smizu) / 100;
    } else if (str.indexOf("雷属性") >= 0) {
      dam = dam * (100 - skami) / 100;
    } else if (str.indexOf("龍属性") >= 0) {
      dam = dam * (100 - sryu) / 100;
    }
    str = String(dam);
    k = str.indexOf(".");
    if (k > 0) {
      damag[i].innerHTML = str.substring(0,k);
    } else {
      damag[i].innerHTML = str;
    }
  }
}
