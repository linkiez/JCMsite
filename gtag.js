// Global site tag (gtag.js) - Google Analytics

window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-99109145-1');
    gtag('config', 'AW-997519795');

    /*<!-- Event snippet for Chamada telefônica a partir site conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->*/
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-997519795/fhpNCIOW89QBELPj09sD',
      'event_callback': callback
  });
  return false;
}
