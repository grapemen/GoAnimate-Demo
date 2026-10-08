var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(b){function a(d){var e=this;this.$modal=d;this.hookOrdering=["commercial-license","business-style","unlimited-duration","download-video","watermark","character","version-control","qvm-contents","qvm-duration"];this.$modal.find(".i-upsell-info").tooltip({container:this.$modal});this.index=0;var c=this.hookOrdering.length-1,f=-600;d.on("click",".upsell-arrow",function(l){l.preventDefault();var k=b(this),h=b(".upsell-features",e.$modal),j=b(".upsell-index > li",e.$modal),g=e.index;if(k.hasClass("left")){g=Math.max(0,--g)}else{g=Math.min(c,++g)}h.css("left",g*f);j.removeClass("active").get(g).className="active";e.index=g})}a.prototype={trigger:function(c){this.setup(c);this.$modal.modal();this.track(c)},setup:function(e){this.index=0;b(".upsell-index li",this.$modal).removeClass("active").filter(":first-child").addClass("active");var c=b(".upsell-features",this.$modal).css("left",0);var d="";for(i in this.hookOrdering){d=this.hookOrdering[i];if(d!=e){b("."+d,c).detach().appendTo(c)}}},track:function(c){_gaq.push(["_trackPageview","/pageTracker/hook/"+c])}};window.triggerUpsell=function(e){var d=b("#upsell-modal"),c=d.data("upsell");if(!c){d.data("upsell",c=new a(d))}if(typeof previewSceen=="function"){previewSceen()}c.trigger(e)};b(document).on("click",'[data-action="upsell"]',function(f){var g=b(this),k=b("#upsell-modal"),l=k.data("upsell"),d=k.data("page"),h=g.data("hook"),j=g.data("hookButtonText");if(!l){k.data("upsell",l=new a(k))}f.preventDefault();l.trigger(h);if(d=="videomaker"&&j){var n=k.find(".btn-cta").html(j);var c=g.data("href");var m=g.data("callback");n.prop("onclick",null).removeAttr("onclick");if(c){n.attr("onclick","window.location.href='"+c+"'")}else{if(m){n.attr("onclick",m)}}}else{if(d=="videos"&&j){k.find(".btn-upsell").html(j)}}})})(jQuery);
}

/*
     FILE ARCHIVED ON 21:20:27 Jun 23, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:48:41 Oct 07, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 1.573
  load_resource: 116.981 (2)
  PetaboxLoader3.datanode: 42.532 (2)
  PetaboxLoader3.resolve: 41.802
*/