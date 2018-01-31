//This script takes a filled out PDF form and automatically saves it as a PNG

var mySafeSave = app.trustPropgatorFunction(function(doc) {
    app.beginPriv();
    doc.saveAs("/c/documents/test.png", "com.adobe.acrobat.png");
    app.endPriv();
});

var safeSave = app.trustedFunction(function(doc) {
    app.beginPriv();
    mySafeSave(doc);
    app.endPriv();
});
