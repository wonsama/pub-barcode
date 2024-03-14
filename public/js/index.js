$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search);
  let code = searchParams.get('code');

  if (code) {
    // draw barcode
    JsBarcode('#code128', code, {
      format: 'CODE128',
      lineColor: '#000',
      width: 1,
      height: 30,
      displayValue: true,
    });
  }
});
