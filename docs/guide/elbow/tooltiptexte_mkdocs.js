// MkDocs-Port – Tooltiptexte Ellbogen
// Öffnet Detailseiten aus ./tooti_elbow/ in einem Popup (wie früher)

function ttbOpen(url, winName) {
  const win = window.open(url, winName, "scrollbars=1,width=310,height=400,left=400,top=100");
  if (win) win.focus();
  return false;
}

function ttbLink(label, file, winName) {
  return `<a href="#" onclick="return ttbOpen('./tooti_elbow/${file}','${winName}')">${label}</a>`;
}

var el_01 =
  ttbLink("Golferellbogen", "Golferellbogen.htm", "Fenster1") + "<br>" +
  ttbLink("Bandinstabilit&auml;t", "Bandinstabilitaet.htm", "Fenster1") + "<br>" +
  ttbLink("Drucksch&auml;digung des Medianus Nerven", "Druckschaedigung_Medianus_Nerven.htm", "Fenster1") + "<br>" +
  ttbLink("Drucksch&auml;digung des Ellen Nerven", "Druckschaedigung_Ellen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_02 =
  ttbLink("Schleimbeutelentz&uuml;ndung", "Schleimbeutelentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Tricepssehnenentz&uuml;ndung", "Tricepssehnenentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Drucksch&auml;digung des Ellen Nerven", "Druckschaedigung_Ellen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_03 =
  ttbLink("Bizepssehnenentz&uuml;ndung", "Bizepssehnenentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Drucksch&auml;digung des Medianus Nerven", "Druckschaedigung_Medianus_Nerven.htm", "Fenster1") + "<br>" +
  ttbLink("Bandinstabilit&auml;t", "Bandinstabilitaet.htm", "Fenster2") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_04 =
  ttbLink("Drucksch&auml;digung des Ellen Nerven", "Druckschaedigung_Ellen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4") + "<br>" +
  ttbLink("Tricepssehnenentz&uuml;ndung", "Tricepssehnenentzuendung.htm", "Fenster1");

var el_05 =
  ttbLink("Drucksch&auml;digung des Speichen Nerven", "Druckschaedigung_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Bizepssehnenentz&uuml;ndung", "Bizepssehnenentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Bandinstabilit&auml;t", "Bandinstabilitaet.htm", "Fenster1") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4") + "<br>" +
  ttbLink("Akutes Logensyndrom", "Akutes_Logensyndrom.htm", "Fenster3") + "<br>" +
  ttbLink("Chronisches Logensyndrom", "Chronisches_Logensyndrom.htm", "Fenster4") + "<br>" +
  ttbLink("Unterarmmuskulatur", "Unterarmmuskulatur.htm", "Fenster2");

var el_06 =
  ttbLink("Drucksch&auml;digung des Medianus Nerven", "Druckschaedigung_Medianus_Nerven.htm", "Fenster1") + "<br>" +
  ttbLink("Drucksch&auml;digung des Ellen Nerven", "Druckschaedigung_Ellen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Unterarmmuskulatur", "Unterarmmuskulatur.htm", "Fenster2") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4") + "<br>" +
  ttbLink("Akutes Logensyndrom", "Akutes_Logensyndrom.htm", "Fenster3") + "<br>" +
  ttbLink("Chronisches Logensyndrom", "Chronisches_Logensyndrom.htm", "Fenster4");

var el_07 =
  ttbLink("Drucksch&auml;digung des Medianus Nerven", "Druckschaedigung_Medianus_Nerven.htm", "Fenster1") + "<br>" +
  ttbLink("Unterarmmuskulatur", "Unterarmmuskulatur.htm", "Fenster2") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4") + "<br>" +
  ttbLink("Akutes Logensyndrom", "Akutes_Logensyndrom.htm", "Fenster3") + "<br>" +
  ttbLink("Chronisches Logensyndrom", "Chronisches_Logensyndrom.htm", "Fenster4");

var el_08 =
  ttbLink("Bizepssehnenentz&uuml;ndung", "Bizepssehnenentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_09 =
  ttbLink("Tennisellbogen", "Tennisellbogen.htm", "Fenster2") + "<br>" +
  ttbLink("Drucksch&auml;digung des Speichen Nerven", "Druckschaedigung_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Bandinstabilit&auml;t", "Bandinstabilitaet.htm", "Fenster1");

var el_10 =
  ttbLink("Drucksch&auml;digung des Speichen Nerven", "Druckschaedigung_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Unterarmmuskulatur", "Unterarmmuskulatur.htm", "Fenster2") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Akutes Logensyndrom", "Akutes_Logensyndrom.htm", "Fenster3") + "<br>" +
  ttbLink("Chronisches Logensyndrom", "Chronisches_Logensyndrom.htm", "Fenster4") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_11 =
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4") + "<br>" +
  ttbLink("Tricepssehnenentz&uuml;ndung", "Tricepssehnenentzuendung.htm", "Fenster1");

var el_12 =
  ttbLink("Schleimbeutelentz&uuml;ndung", "Schleimbeutelentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Tricepssehnenentz&uuml;ndung", "Tricepssehnenentzuendung.htm", "Fenster1") + "<br>" +
  ttbLink("Drucksch&auml;digung des Ellen Nerven", "Druckschaedigung_Ellen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Ellbogengelenk", "Ellbogengelenk.htm", "Fenster3") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_13 =
  ttbLink("Drucksch&auml;digung des Speichen Nerven", "Druckschaedigung_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_14 =
  ttbLink("Drucksch&auml;digung des Speichen Nerven", "Druckschaedigung_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_15 =
  ttbLink("Unterarmmuskulatur", "Unterarmmuskulatur.htm", "Fenster2") + "<br>" +
  ttbLink("Akutes Logensyndrom", "Akutes_Logensyndrom.htm", "Fenster3") + "<br>" +
  ttbLink("Chronisches Logensyndrom", "Chronisches_Logensyndrom.htm", "Fenster4") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_16 =
  ttbLink("Sehnenscheidenentz&uuml;ndung 1. Strecksehnenfach", "Sehnenscheidenentzuendung_erstes_Strecksehnenfach.htm", "Fenster4") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_17 =
  ttbLink("Sehnenscheidenentz&uuml;ndung 2. Strecksehnenfach", "Sehnenscheidenentzuendung_zweites_Strecksehnenfach.htm", "Fenster4") + "<br>" +
  ttbLink("Drucksch&auml;digung des oberfl&auml;chlichen Speichen Nerven", "Druckschaedigung_oberflaechlicher_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");

var el_18 =
  ttbLink("Unterarmmuskulatur", "Unterarmmuskulatur.htm", "Fenster2") + "<br>" +
  ttbLink("Drucksch&auml;digung des oberfl&auml;chlichen Speichen Nerven", "Druckschaedigung_oberflaechlicher_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Drucksch&auml;digung des Speichen Nerven", "Druckschaedigung_Speichen_Nerven.htm", "Fenster2") + "<br>" +
  ttbLink("Akutes Logensyndrom", "Akutes_Logensyndrom.htm", "Fenster3") + "<br>" +
  ttbLink("Chronisches Logensyndrom", "Chronisches_Logensyndrom.htm", "Fenster4") + "<br>" +
  ttbLink("Knochenbruch", "Knochenbruch.htm", "Fenster4");
