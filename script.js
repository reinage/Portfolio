var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function myFunction() {
   var element = document.getElementById("toggleinfo");
   element.classList.toggle("showinfo");
} 

var kofiwidget2 =
  kofiwidget2 ||
  (function() {
    var style = "";
    var html = "";
    var color = "";
    var text = "";
    var id = "";
    return {
      init: function(pText, pColor, pId) {
        color = pColor;
        text = pText;
        id = pId;
        style =
          "img.kofiimg{display: initial!important;vertical-align:middle;height:13px!important;width:20px!important;padding-top:0!important;padding-bottom:0!important;border:none;margin-top:0;margin-right:5px!important;margin-left:0!important;margin-bottom:3px!important;content:url('https://web.archive.org/web/20241008112055/https://storage.ko-fi.com/cdn/cup-border.png')}.kofiimg:after{vertical-align:middle;height:25px;padding-top:0;padding-bottom:0;border:none;margin-top:0;margin-right:0px;margin-left:0;margin-bottom:4px!important;content:url('https://web.archive.org/web/20241008112055/https://storage.ko-fi.com/cdn/whitelogo.svg')}.btn-container{display:inline-block!important;white-space:nowrap;min-width:160px}span.kofitext{color:#fff !important;letter-spacing: -0.15px!important;text-wrap:none;vertical-align:middle;line-height:25px !important;padding:0;text-align:center;text-decoration:none!important; text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);}.kofitext a{color:#fff !important;text-decoration:none:important;}.kofitext a:hover{color:#fff !important;text-decoration:none}a.kofi-button{box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);line-height:0px!important;min-width:5px;display:table!important;background-color:#29abe0;padding:2px 5px !important;text-align:center !important;border-radius:0px;color:#fff;cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff !important;font-family:'Quicksand',Helvetica,Century Gothic,sans-serif !important;text-decoration:none;text-shadow:none;font-weight:0!important;font-size:0px !important}a.kofi-button:visited{color:#fff !important;text-decoration:none !important}a.kofi-button:hover{opacity:.85;color:#f5f5f5 !important;text-decoration:none !important}a.kofi-button:active{color:#f5f5f5 !important;text-decoration:none !important}.kofitext img.kofiimg {height:15px!important;width:22px!important;display: initial;animation: kofi-wiggle 6s infinite;}";
        style =
          style +
          "@keyframes kofi-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}";
        style = "<style>" + style + "</style>";
        html =
          "<link href='https://web.archive.org/web/20241008112055/https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
        html +=
          '<div class=btn-container><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:[color];" href="https://web.archive.org/web/20241008112055/https://ko-fi.com/[id]" target="_blank"> <span class="kofitext"><img src="https://web.archive.org/web/20241008112055/https://storage.ko-fi.com/cdn/cup-border.png" class="kofiimg"/>[text]</span></a></div>';
      },
      getHTML: function() {
        var rtn =
          style +
          html
            .replace("[color]", color)
            .replace("[text]", text)
            .replace("[id]", id);
        return rtn;
      },
      draw: function() {
        document.writeln(
          style +
            html
              .replace("[color]", color)
              .replace("[text]", text)
              .replace("[id]", id)
        );
      }
    };
  })();

/*info text*/
let isDragging = false;
let startX;
let currentPage = 0;
const pages = document.querySelectorAll('.page');


}

/*
     FILE ARCHIVED ON 11:20:55 Oct 08, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:10:12 Mar 20, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.801
  load_resource: 124.874
  PetaboxLoader3.resolve: 61.879
  PetaboxLoader3.datanode: 34.756
*/
