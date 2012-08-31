/** =====================================================
 *	WP-UI JS. Same license as jQuery
 * ====================================================*/

if(typeof wpUIOpts=="object"&&wpUIOpts.docWriteFix=="on"){var docWriteTxt="";jQuery(function(){document.write=function(d){docWriteTxt+=d};jQuery(docWriteTxt).appendTo("body")})}tabSet=0;function getNextSet(){return++tabSet}var tabNames=[],accNames=[];
jQuery.fn.wptabs=function(d){var a=jQuery.extend({},jQuery.fn.wptabs.defaults,d);this.each(function(){uid=getNextSet();base=this;var c=jQuery(this);base.jqui=false;if(c.hasClass("jqui-styles"))base.jqui=true;c.prepend('<ul class="ui-tabs-nav" />');var e=c.children(a.h3Class).wrap('<div class="ui-tabs-panel"></div>');c.find("div.ui-tabs-panel:last-child").after('<p id="jqtemp">');a.wpuiautop&&c.find("p, br").not("div.wp-tab-content br, div.wp-tab-content p ").filter(function(){return jQuery.trim(jQuery(this).html())===
""}).remove();e.each(function(){jQuery(this).parent().append(jQuery(this).parent().nextUntil("div.ui-tabs-panel"))});c.find(".ui-tabs-panel").children(a.h3Class).each(function(){dup=getNextSet();parID=jQuery(this).text();otherClass=jQuery(this).hasClass("wpui-hidden-tab")?"wpui-hidden-tab":"";if(parID.match(/[^\x00-\x80]+/)){base.nonEng=true;parID="tab-"+dup}if(jQuery(this).has(a.linkAjaxClass).length!=0)base.linkAJAX=true;parID=parID.replace(/\s{1,}/gm,"_").replace(/[^\-A-Za-z0-9\s_]/mg,"").toLowerCase();
var h="";if(jQuery.inArray(parID,tabNames)!="-1")parID=parID+"-"+dup;if(base.linkAJAX){aLink=jQuery(this).find(a.linkAjaxClass);h='<a href="'+aLink.attr("href")+'">'+aLink.text()+"</a>"}else if(jQuery(this).find("img").length==1){for(h=jQuery(this).find("img");h.parent().is("h3")!=1;)h.unwrap();h.removeAttr("style").css("vertical-align","middle");if(h.attr("title")!="undefined"&&h.attr("title")!=""&&jQuery(this).text()=="")parID=h.attr("title").replace(/\s{1,}/gm,"_").replace(/[^\-A-Za-z0-9\s_]/mg,
"");h='<img src="'+h.attr("src")+'" title="'+h.attr("title")+'" />';h='<a href="#'+parID+'">'+h+jQuery(this).text()+"</a>"}else h='<a href="#'+parID+'">'+jQuery(this).text()+"</a>";liStr='<li class="'+otherClass+'">'+h+"</li>";c.find("ul.ui-tabs-nav").append(liStr);base.linkAJAX?jQuery(this).parent().remove():jQuery(this).parent().attr("id",parID);tabNames=tabNames.concat(parID)}).hide();if(c.find("div.ui-tabs").length==0){c.find("ul.ui-tabs-nav").before("<div class='ui-tabs'>");c.find(".ui-tabs").each(function(){jQuery(this).append(jQuery(this).nextUntil("p#jqtemp"))})}tabsobj=
{};if(a.effect=="slideDown")tabsobj.fx={height:"toggle",speed:a.effectSpeed};else if(a.effect=="fadeIn")tabsobj.fx={opacity:"toggle",speed:a.effectSpeed};if(a.cookies)tabsobj.cookie={expires:30};if(a.tabsEvent)tabsobj.event=a.tabsEvent;if(a.collapsibleTabs)tabsobj.collapsible=true;var b=c.children(".ui-tabs").tabs(tabsobj);jQuery("ul.ui-tabs-nav").each(function(){jQuery("li:first",this).addClass("first-li");jQuery("li:last",this).addClass("last-li")});a.alwaysRotate!="disable"&&jQuery(this+"[class*=tab-rotate]").each(function(){rotateSpeed=
jQuery(this).attr("class").match(/tab-rotate-(.*)/,"$1");if(rotateSpeed!=null){if(rotateSpeed[1].match(/(\d){1,2}s/,"$1"))rotateSpeed[1]=rotateSpeed[1].replace(/s$/,"")*1E3;rotateSpeed=rotateSpeed[1];alwaysRotate=a.alwaysRotate=="always"?true:false}jQuery(this).find(".ui-tabs").tabs("rotate",rotateSpeed,alwaysRotate)});if(a.followNav==true||c.hasClass("tab-nav-follows")){a.topNav=a.bottomNav=false;b.append('<a href="#" class="ui-button tab-nav-follows prev-follow"><span></span>Previous</a>  <a href="#" class="ui-button tab-nav-follows next-follow"><span></span>Next</a>');
jQuery(".tab-nav-follows").css({position:"absolute"});wptabsHgt=c.height()/2;wptabsNavWdt=b.children(".tab-nav-follows").outerWidth();b.parent().css({position:"relative"});maxPH=0;b.children(".ui-tabs-panel").each(function(){if(jQuery(this).height()>maxPH)maxPH=jQuery(this).height()});b.children("div.ui-tabs-panel").innerHeight(maxPH+50);jQuery(".next-follow").css({right:wptabsNavWdt*-1+"px",top:"150px"}).click(function(){g("forward");return false});jQuery(".prev-follow").css({left:wptabsNavWdt*-1+
"px",top:"150px"}).click(function(){g("backward");return false});$fNavs=c.find("a.tab-nav-follows");$fNavs.wpuiScroller({container:b.get(0)})}if(a.topNav||a.bottomNav){c.find("div.ui-tabs-panel").each(function(h){base.navClass=" ui-button ui-widget ui-state-default ui-corner-all";base.navPrevSpan='<span class="ui-icon ui-icon-circle-triangle-w"></span>';base.navNextSpan='<span class="ui-icon ui-icon-circle-triangle-e"></span>';!a.topNav||jQuery(this).prepend('<div class="tab-top-nav" />');!a.bottomNav||
jQuery(this).append('<div style="clear: both;"></div><div class="tab-bottom-nav" />');var u=jQuery(this).parent().children(".ui-tabs-panel").length-1;if(h!=0){!a.topNav||jQuery(this).children(".tab-top-nav").prepend('<a href="#" class="backward prev-tab '+base.navClass+'">'+base.navPrevSpan+a.tabPrevText+"</a>");!a.bottomNav||jQuery(this).children(".tab-bottom-nav").append('<a href="#" class="backward prev-tab '+base.navClass+'">'+base.navPrevSpan+a.tabPrevText+"</a>")}if(h!=u){!a.topNav||jQuery(this).children(".tab-top-nav").append('<a href="#" class="forward next-tab '+
base.navClass+'">'+a.tabNextText+base.navNextSpan+"</a>");!a.bottomNav||jQuery(this).children(".tab-bottom-nav").append('<a href="#" class="forward next-tab '+base.navClass+'">'+a.tabNextText+base.navNextSpan+"</a>")}});jQuery("a.forward, a.backward").hover(function(){base.jqui&&jQuery(this).addClass("ui-state-hover")},function(){base.jqui&&jQuery(this).removeClass("ui-state-hover")}).focus(function(){base.jqui&&jQuery(this).addClass("ui-state-focus ui-state-active")}).blur(function(){base.jqui&&
jQuery(this).removeClass("ui-state-focus ui-state-active")})}if(a.position=="bottom"||jQuery(this).hasClass("tabs-bottom")){jQuery("ul.ui-tabs-nav",this).each(function(){jQuery(this).appendTo(jQuery(this).parent()).addClass("ul-bottom")});c.children(".ui-tabs").addClass("bottom-tabs").children(".ui-tabs-panel").each(function(){jQuery(this).addClass("bottom-tabs")})}if(c.hasClass("wpui-tabs-vertical")){b.addClass("ui-tabs-vertical ui-helper-clearfix");b.find("li").removeClass("ui-corner-top").addClass("ui-corner-left");
b.find("ul.ui-tabs-nav").css({position:"absolute"}).removeClass("ui-corner-all").addClass("ui-corner-left").children().css({"float":"left",clear:"left",position:"relative"});getListWidth=jQuery(this).attr("class").match(/listwidth-(\d{2,4})/,"$1");ulWidth=getListWidth!=null?getListWidth[1]:b.find("ul.ui-tabs-nav").outerWidth();ulHeight=b.find("ul.ui-tabs-nav").outerHeight();b.find("ul.ui-tabs-nav").width(ulWidth);b.find("div.ui-tabs-panel").css({"float":"right"});parWidth=b.width()-(parseInt(b.children("div.ui-tabs-panel").css("paddingLeft"))+
parseInt(b.children("div.ui-tabs-panel").css("paddingRight"))+parseInt(b.children("div.ui-tabs-panel").css("borderRightWidth"))+parseInt(b.children("div.ui-tabs-panel").css("borderLeftWidth")));PaneWidth=parWidth-ulWidth;maxPane=0;paneCount=b.find(".ui-tabs-panel").length;b.find(".ui-tabs-panel").width(PaneWidth);b.find(".ui-tabs-panel").each(function(){if(jQuery(this).outerHeight()>maxPane)maxPane=jQuery(this).outerHeight()});a.effect=="slideDown"&&c.find(".ui-tabs").tabs({fx:null});if(maxPane!=
0)maxPane>ulHeight?b.children().innerHeight(maxPane+40):b.children().innerHeight(ulHeight+40)}typeof WPUIOpts!="undefined"&&c.append('<a class="thickbox cap-icon-link" title="" href="http://kav.in"><img src="'+wpUIOpts.pluginUrl+'/images/cquest.png" alt="Cap" /></a>');if(jQuery.event.special.mousewheel!=="undefined"&&a.mouseWheel!="false"){scrollEl=a.mouseWheel&&a.mouseWheel=="panels"?"div.ui-tabs-panel":"ul.ui-tabs-nav";c.panelength=b.find(".ui-tabs-panel").length;b.find(scrollEl).mousewheel(function(h,
u){if(u<0)dir="forward";else if(u>0)dir="backward";typeof dir=="undefined"||g(dir);return false})}c.find("a.next-tab, a.prev-tab").hover(function(){jQuery(this).addClass("ui-state-hover")},function(){jQuery(this).removeClass("ui-state-hover")});c.find("a.next-tab, a.prev-tab").click(function(){jQuery(this).is("a.next-tab")?g("forward"):g("backward");return false});c.hasClass("wpui-no-background")&&c.find("ul.ui-tabs-nav > li").removeClass("ui-corner-top").addClass("ui-corner-all");var g=function(h){h=
h||"forward";mrel=c.find(".ui-tabs").tabs("option","selected");mrel=h=="backward"?mrel-1:mrel+1;if(h=="forward"&&mrel==c.panelength)mrel=0;if(h=="backward"&&mrel<0)mrel=c.panelength-1;b.tabs("select",mrel)}});if(a.hashChange&&typeof jQuery.event.special.hashchange!="undefined"){jQuery(window).hashchange(function(){tabHash=window.location.hash;if(jQuery(tabHash).length!=1||jQuery.inArray(tabHash.replace(/^#/,""),tabNames)==-1)return false;hashed=jQuery(window.location.hash).prevAll().length-1;jQuery(window.location.hash).parent().tabs({selected:hashed});
return false});jQuery(window).hashchange()}return this};
jQuery.fn.wptabs.defaults={h3Class:"h3.wp-tab-title",linkAjaxClass:"a.wp-tab-load",topNav:typeof wpUIOpts!="undefined"&&wpUIOpts.topNav=="on"?true:false,bottomNav:typeof wpUIOpts!="undefined"&&wpUIOpts.bottomNav=="on"?true:false,position:"top",navStyle:typeof wpUIOpts!="undefined"?wpUIOpts.tabsLinkClass:"",effect:typeof wpUIOpts!="undefined"?wpUIOpts.tabsEffect:"",effectSpeed:typeof wpUIOpts!="undefined"?wpUIOpts.effectSpeed:"",alwaysRotate:typeof wpUIOpts!="undefined"?wpUIOpts.alwaysRotate:"",tabsEvent:typeof wpUIOpts!=
"undefined"?wpUIOpts.tabsEvent:"",collapsibleTabs:typeof wpUIOpts!="undefined"&&wpUIOpts.collapsibleTabs=="on"?true:false,tabPrevText:typeof wpUIOpts!="undefined"&&wpUIOpts.tabPrevText!=""?wpUIOpts.tabPrevText:"&laquo; Previous",tabNextText:typeof wpUIOpts!="undefined"&&wpUIOpts.tabNextText!=""?wpUIOpts.tabNextText:"Next &raquo;",cookies:typeof wpUIOpts!="undefined"&&wpUIOpts.cookies=="on"?true:false,hashChange:typeof wpUIOpts!="undefined"&&wpUIOpts.hashChange=="on"?true:false,hashChange:typeof wpUIOpts!=
"undefined"&&wpUIOpts.hashChange=="on"?true:false,mouseWheel:typeof wpUIOpts!="undefined"?wpUIOpts.mouseWheelTabs:"",wpuiautop:true,followNav:false};
jQuery.fn.wpuiScroller=function(d){var a=this;a.$el=jQuery(this);a.opts=jQuery.extend({},jQuery.fn.wpuiScroller.defaults,d);a.startTop=parseInt(a.$el.css("top"));a.limiter=a.opts.limiter?jQuery(a.opts.limiter):a.$el.parent().parent();a.startAt=parseInt(a.limiter.offset().top);jQuery(window).scroll(function(){a.endAt=parseInt(a.limiter.height()+jQuery(window).height()/2);a.moveTo=a.startTop;if(jQuery(document).scrollTop()>=a.startAt){a.moveTo=a.startTop+(jQuery(window).scrollTop()-a.startAt);if(jQuery(window).scrollTop()+
jQuery(window).height()/2>=a.limiter.height()+a.limiter.offset().top-a.startTop)a.moveTo=a.limiter.height()-a.startTop}a.$el.css("top",a.moveTo)});return this};jQuery.fn.wpuiScroller.defaults={limiter:false,adJust:50};
jQuery.fn.wpuiPager=function(d){var a=this;a.$el=jQuery(a);o=jQuery.extend({},jQuery.fn.wpuiPager.defaults,d);a.$el.each(function(){a.pages=jQuery(this).children(o.pageClass);a.pages.hide();a.pages.eq(0).show();a.pageNum=jQuery(this).children(o.pageClass).length;jQuery(this).append('<div class="wpui-pager">'+a.pageNum+" Pages  </div>");a.pager=jQuery(this).find(".wpui-pager");a.wpuiHeight=0;a.pages.each(function(){tisHgt=parseInt(jQuery(this).css("height"));if(tisHgt>a.wpuiHeight)a.wpuiHeight=tisHgt});
a.wpuiHeight<=0||a.pages.height(a.wpuiHeight);pageStr="";for(i=0;i<a.pageNum;i++){pageNum=i+1;pageStr+='<a class="wpui-page-number" href="#" rel="'+i+'">'+pageNum+"</a>"}a.pager.append(pageStr);a.pager.append('<a class="wpui-next-page" href="#">Next &raquo;</a>');a.pager.each(function(){jQuery(this).find("a").eq(0).addClass("wpui-page-active")});a.browsePages=function(c,e){bPage=jQuery(e).parent().parent().find(o.pageClass);if(o.effect=="fade")bPage.eq(c).fadeIn(o.speed).siblings(".wpui-page").hide();
else o.effect=="slide"?bPage.eq(c).slideDown(o.speed).siblings(".wpui-page").hide():bPage.eq(c).show().siblings(".wpui-page").hide();jQuery(e).siblings().removeClass("wpui-page-active");jQuery(e).addClass("wpui-page-active")};a.pager.children("a").click(function(){pagess=jQuery(this).parent().parent().find(o.pageClass);pagessCount=jQuery(this).siblings().length;if(jQuery(this).hasClass("wpui-next-page")){currEl=jQuery(this).siblings(".wpui-page-active");nextEl=currEl.attr("rel")==pagessCount-1?jQuery(this).siblings().eq(0):
currEl.next();relEL=nextEl.attr("rel");activeEl=nextEl.get(0)}else{relEL=jQuery(this).attr("rel");activeEl=this}a.browsePages(relEL,activeEl);return false})});return this};jQuery.fn.wpuiPager.defaults={position:"bottom",pageClass:".wpui-page",speed:600,effect:"fade"};
jQuery.fn.wpaccord=function(d){var a,c,e,b=jQuery.extend({},jQuery.fn.wpaccord.defaults,d);this.each(function(){var g=jQuery(this);g.append('<p id="jqtemp" />');b.wpuiautop&&g.find("p, br").not("div.wp-tab-content br, div.wp-tab-content p ").filter(function(){return jQuery.trim(jQuery(this).html())===""}).remove();a=g.find("h3:first").wrap('<div class="accordion">');b.wpuiautop&&g.find("p, br").not("div.wp-tab-content br, div.wp-tab-content p ").filter(function(){return jQuery.trim(jQuery(this).html())===
""}).remove();a.each(function(){jQuery(this).parent().append(jQuery(this).parent().nextUntil("p#jqtemp"))});g.find(b.h3Class).each(function(){c=jQuery(this).children(b.linkAjaxClass);dup=getNextSet();aparID=jQuery(this).text().replace(/\s{1,}/gm,"_");aparID=aparID.replace(/[^\-A-Za-z0-9\s_]/mg,"");if(aparID.match(/[^\x00-\x80]+/))aparID="acc-"+dup;if(jQuery.inArray(aparID,accNames)!="-1")aparID=aparID+"_"+dup;jQuery(this).next().attr("id",aparID);if(c.length!=0){e=c.attr("href");c.parent().after("<div></div>");
jQuery(this).next().load(wpUIOpts.wpUrl+"/"+e);jQuery(this).text(jQuery(this).children().text())}accNames=accNames.concat(aparID)});accordOpts={};accordOpts.autoHeight=b.autoHeight?true:false;if(b.collapse){accordOpts.collapsible=true;accordOpts.active=false}accordOpts.animated=b.easing;accordOpts.event=b.accordEvent;$wpAccord=jQuery(".accordion").accordion(accordOpts);accClass=g.attr("class");if(activePanel=accClass.match(/acc-active-(\d){1}/im))$wpAccord.accordion("activate",parseInt(activePanel[1]));
jQuery(".accordion h3.ui-accordion-header:last").addClass("last-child");jQuery(window).hashchange(function(){aHash=window.location.hash;if(jQuery(aHash).length!=1||jQuery.inArray(aHash.replace(/^#/,""),accNames)==-1)return false;hashed=jQuery(window.location.hash).prevAll(b.h3Class).length-1;jQuery(window.location.hash).parent().accordion("activate",hashed);return false});jQuery(window).hashchange()})};
jQuery.fn.wpaccord.defaults={h3Class:"h3.wp-tab-title",linkAjaxClass:"a.wp-tab-load",effect:typeof wpUIOpts!="undefined"?wpUIOpts.accordEffect:"",autoHeight:typeof wpUIOpts!="undefined"&&wpUIOpts.accordAutoHeight=="on"?true:false,collapse:typeof wpUIOpts!="undefined"&&wpUIOpts.accordCollapsible=="on"?true:false,easing:typeof wpUIOpts!="undefined"?wpUIOpts.accordEasing:"",accordEvent:typeof wpUIOpts!="undefined"?wpUIOpts.accordEvent:"",wpuiautop:true,hashChange:true};
jQuery.fn.wpspoiler=function(d){var a,c,e;a=jQuery.extend({},jQuery.fn.wpspoiler.defaults,d);this.each(function(){var b=this,g=jQuery(b);if(typeof convertEntities=="function"){c=convertEntities(a.hideText);e=convertEntities(a.showText)}else{c=a.hideText;e=a.showText}g.addClass("ui-widget ui-collapsible");$header=g.children(a.headerClass);$header.addClass("ui-collapsible-header").each(function(){jQuery(this).prepend('<span class="ui-icon"></span>');jQuery(this).addClass("ui-state-default ui-corner-all ui-helper-reset").find("span.ui-icon",
this).addClass(a.openIconClass);jQuery(this).append('<span class="'+a.spanClass.replace(/\./,"")+'" style="float:right"></span>').find(a.spanClass).html(e);b.aniOpts={};if(a.fade)b.aniOpts.opacity="toggle";if(a.slide)b.aniOpts.height="toggle";if(a.slide||a.fade)if(jQuery(this+"[class*=speed-]").length)speed=(animSpeed=jQuery(this).attr("class").match(/speed-(.*)\s|\"/,"$1"))?animSpeed[1]:a.speed}).next("div").addClass("ui-collapsible-content ui-widget-content ui-corner-bottom").wrapInner('<div class="ui-collapsible-wrapper" />').find(".close-spoiler").addClass("ui-state-default ui-widget ui-corner-all ui-button-text-only").end().hide();
$header.hover(function(){jQuery(this).addClass("ui-state-hover").css({cursor:"pointer"})},function(){jQuery(this).removeClass("ui-state-hover")});$header.click(function(){b.headerToggle(this)});g.find("a.close-spoiler").click(function(h){h.stopPropagation();h.preventDefault();heads=jQuery(this).parent().parent().siblings(a.headerClass).get(0);b.headerToggle(heads);return false});b.headerToggle=function(h){spanText=jQuery(h).find(a.spanClass).html();jQuery(h).toggleClass("ui-state-active ui-corner-all ui-corner-top").children("span.ui-icon").toggleClass(a.closeIconClass).siblings(a.spanClass).html(spanText==
c?e:c).parent().next("div.ui-collapsible-content").animate(b.aniOpts,a.speed,a.easing).addClass("ui-widget-content")};if(g.find(a.headerClass).hasClass("open-true")){h3=g.children(a.headerClass).get(0);b.headerToggle(h3)}});return this};
jQuery.fn.wpspoiler.defaults={hideText:typeof wpUIOpts!="undefined"?wpUIOpts.spoilerHideText:"",showText:typeof wpUIOpts!="undefined"?wpUIOpts.spoilerShowText:"",easing:"easeInOutQuart",fade:true,slide:true,speed:600,spanClass:".toggle_text",headerClass:"h3.wp-spoiler-title",openIconClass:"ui-icon-triangle-1-e",closeIconClass:"ui-icon-triangle-1-s"};
jQuery.fn.wpDialog=function(d){jQuery.extend({},jQuery.fn.wpDialog.defaults,d);return this.each(function(){$base=jQuery(this);dialogArgs=$base.find("h4.wp-dialog-title").toggleClass("wp-dialog-title").attr("class").split(" ");$base.find("h4:first").remove();kel={};for(i=0;i<dialogArgs.length;i++){dialogArgs[i]=dialogArgs[i].replace(/wpui-(.*)-arg/mg,"$1");key=dialogArgs[i].replace(/([\w\d\S]*):([\w\d\S]*)/mg,"$1");value=dialogArgs[i].replace(/(.*):(.*)/mg,"$2").replace(/%/mg," ");if(value=="true")value=
true;if(value=="false")value=false;kel[key]=value}dialogCloseFn=function(){$(this).dialog("close")};if(kel.position=="bottomleft")kel.position=["left","bottom"];else if(kel.position=="bottomright")kel.position=["right","bottom"];else if(kel.position=="topleft")kel.position=["left","top"];else if(kel.position=="topright")kel.position=["right","top"];kel.width=parseInt(kel.width)+"px";if(kel.button){buttonLabel=kel.button;delete kel.button;kel.buttons={};kel.buttons[buttonLabel]=dialogCloseFn}if(kel.dialogClass&&
kel.dialogClass!="")kel.dialogClass=kel.dialogClass.replace(/_/gm," ");$base.dialog(kel);jQuery("[class*=dialog-opener]").button({icons:{primary:"ui-icon-newwin"}});jQuery("[class*=dialog-opener]").click(function(){openerClass=jQuery(this).attr("class").match(/dialog\-opener\-(\d{1,2})/);dNum=openerClass[1];jQuery(".wp-dialog-"+dNum).dialog("open");return false})})};jQuery.fn.wpDialog.defaults={title:"Information"};
jQuery.cookie=function(d,a,c){if(arguments.length>1&&(a===null||typeof a!=="object")){c=jQuery.extend({},c);if(a===null)c.expires=-1;if(typeof c.expires==="number"){var e=c.expires,b=c.expires=new Date;b.setDate(b.getDate()+e)}return document.cookie=[encodeURIComponent(d),"=",c.raw?String(a):encodeURIComponent(String(a)),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}c=a||{};b=c.raw?function(g){return g}:
decodeURIComponent;return(e=RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?b(e[1]):null};
(function(d,a,c){function e(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}var b="hashchange",g=document,h,u=d.event.special,t=g.documentMode,l="on"+b in a&&(t===c||t>7);d.fn[b]=function(j){return j?this.bind(b,j):this.trigger(b)};d.fn[b].delay=50;u[b]=d.extend(u[b],{setup:function(){if(l)return false;d(h.start)},teardown:function(){if(l)return false;d(h.stop)}});h=function(){function j(){var f=e(),q=p(n);if(f!==n){r(n=f,q);d(a).trigger(b)}else if(q!==n)location.href=location.href.replace(/#.*/,
"")+q;m=setTimeout(j,d.fn[b].delay)}var k={},m,n=e(),s=function(f){return f},r=s,p=s;k.start=function(){m||j()};k.stop=function(){m&&clearTimeout(m);m=c};d.browser.msie&&!l&&function(){var f,q;k.start=function(){if(!f){q=(q=d.fn[b].src)&&q+e();f=d('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){q||r(e());j()}).attr("src",q||"javascript:0").insertAfter("body")[0].contentWindow;g.onpropertychange=function(){try{if(event.propertyName==="title")f.document.title=g.title}catch(w){}}}};
k.stop=s;p=function(){return e(f.location.href)};r=function(w,y){var v=f.document,x=d.fn[b].domain;if(w!==y){v.title=g.title;v.open();x&&v.write('<script>document.domain="'+x+'"<\/script>');v.close();f.location.hash=w}}}();return k}()})(jQuery,this);var JSON;JSON||(JSON={});
(function(){function d(l){return l<10?"0"+l:l}function a(l){b.lastIndex=0;return b.test(l)?'"'+l.replace(b,function(j){var k=u[j];return typeof k==="string"?k:"\\u"+("0000"+j.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+l+'"'}function c(l,j){var k,m,n,s,r=g,p,f=j[l];if(f&&typeof f==="object"&&typeof f.toJSON==="function")f=f.toJSON(l);if(typeof t==="function")f=t.call(j,l,f);switch(typeof f){case "string":return a(f);case "number":return isFinite(f)?String(f):"null";case "boolean":case "null":return String(f);
case "object":if(!f)return"null";g+=h;p=[];if(Object.prototype.toString.apply(f)==="[object Array]"){s=f.length;for(k=0;k<s;k+=1)p[k]=c(k,f)||"null";n=p.length===0?"[]":g?"[\n"+g+p.join(",\n"+g)+"\n"+r+"]":"["+p.join(",")+"]";g=r;return n}if(t&&typeof t==="object"){s=t.length;for(k=0;k<s;k+=1)if(typeof t[k]==="string"){m=t[k];if(n=c(m,f))p.push(a(m)+(g?": ":":")+n)}}else for(m in f)if(Object.prototype.hasOwnProperty.call(f,m))if(n=c(m,f))p.push(a(m)+(g?": ":":")+n);n=p.length===0?"{}":g?"{\n"+g+p.join(",\n"+
g)+"\n"+r+"}":"{"+p.join(",")+"}";g=r;return n}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,h,u={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},t;if(typeof JSON.stringify!=="function")JSON.stringify=function(l,j,k){var m;h=g="";if(typeof k==="number")for(m=0;m<k;m+=1)h+=" ";else if(typeof k==="string")h=k;if((t=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return c("",
{"":l})};if(typeof JSON.parse!=="function")JSON.parse=function(l,j){function k(n,s){var r,p,f=n[s];if(f&&typeof f==="object")for(r in f)if(Object.prototype.hasOwnProperty.call(f,r)){p=k(f,r);if(p!==undefined)f[r]=p;else delete f[r]}return j.call(n,s,f)}var m;l=String(l);e.lastIndex=0;if(e.test(l))l=l.replace(e,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(l.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){m=eval("("+l+")");return typeof j==="function"?k({"":m},""):m}throw new SyntaxError("JSON.parse");}})();
(function(d,a,c){function e(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}var b="hashchange",g=document,h,u=d.event.special,t=g.documentMode,l="on"+b in a&&(t===c||t>7);d.fn[b]=function(j){return j?this.bind(b,j):this.trigger(b)};d.fn[b].delay=50;u[b]=d.extend(u[b],{setup:function(){if(l)return false;d(h.start)},teardown:function(){if(l)return false;d(h.stop)}});h=function(){function j(){var f=e(),q=p(n);if(f!==n){r(n=f,q);d(a).trigger(b)}else if(q!==n)location.href=location.href.replace(/#.*/,
"")+q;m=setTimeout(j,d.fn[b].delay)}var k={},m,n=e(),s=function(f){return f},r=s,p=s;k.start=function(){m||j()};k.stop=function(){m&&clearTimeout(m);m=c};d.browser.msie&&!l&&function(){var f,q;k.start=function(){if(!f){q=(q=d.fn[b].src)&&q+e();f=d('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){q||r(e());j()}).attr("src",q||"javascript:0").insertAfter("body")[0].contentWindow;g.onpropertychange=function(){try{if(event.propertyName==="title")f.document.title=g.title}catch(w){}}}};
k.stop=s;p=function(){return e(f.location.href)};r=function(w,y){var v=f.document,x=d.fn[b].domain;if(w!==y){v.title=g.title;v.open();x&&v.write('<script>document.domain="'+x+'"<\/script>');v.close();f.location.hash=w}}}();return k}()})(jQuery,this);
(function(d){function a(e){var b=[].slice.call(arguments,1),g=0;e=d.event.fix(e||window.event);e.type="mousewheel";if(e.wheelDelta)g=e.wheelDelta/120;if(e.detail)g=-e.detail/3;b.unshift(e,g);return d.event.handle.apply(this,b)}var c=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=c.length;e;)this.addEventListener(c[--e],a,false);else this.onmousewheel=a},teardown:function(){if(this.removeEventListener)for(var e=c.length;e;)this.removeEventListener(c[--e],
a,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);
jQuery(document).ready(function(){if(typeof wpUIOpts=="object"){wpUIOpts.enablePagination=="on"&&jQuery("div.wpui-pages-holder").wpuiPager();wpUIOpts.enableTabs=="on"&&jQuery("div.wp-tabs").wptabs();wpUIOpts.enableSpoilers=="on"&&jQuery(".wp-spoiler").wpspoiler();wpUIOpts.enableAccordion=="on"&&jQuery(".wp-accordion").wpaccord()}jQuery("ul.wpui-related-posts").each(function(){allWidth=jQuery(this).children("li").outerWidth()-jQuery(this).children("li").width();if(jQuery(this).hasClass("wpui-per_3"))liWidth=
jQuery(this).innerWidth()/3-allWidth;else if(jQuery(this).hasClass("wpui-per_4"))liWidth=jQuery(this).innerWidth()/4-allWidth;else if(jQuery(this).hasClass("wpui-per_2"))liWidth=jQuery(this).innerWidth()/2-allWidth;typeof liWidth!="undefined"&&jQuery(this).children("li").width(liWidth-1);jQuery(this).hasClass("wpui-per_2")&&jQuery(this).children("li").find(".wpui-rel-post-meta").width(liWidth-120)})});
jQuery.fn.tabsThemeSwitcher=function(d){return this.each(function(){var a=jQuery(this);a.prepend('<div class="selector_tab_style">Switch Theme : <select id="tabs_theme_select" /></div>');for(i=0;i<d.length;i++)jQuery("#tabs_theme_select",this).append('<option value="'+d[i]+'">'+d[i]+"</option");if(jQuery.cookie&&jQuery.cookie("tab_demo_style")!=null){currentVal=jQuery.cookie("tab_demo_style");a.find("select#tabs_theme_select option").each(function(){currentVal==jQuery(this).attr("value")&&jQuery(this).attr("selected",
"selected")})}else currentVal=d[0];a.children(".wp-tabs").attr("class","wp-tabs wpui-styles").addClass(currentVal,500);a.children(".wp-accordion").attr("class","wp-accordion wpui-styles").addClass(currentVal,500);a.children(".wp-spoiler").attr("class","wp-spoiler wpui-styles").addClass(currentVal,500);jQuery("#tabs_theme_select").change(function(){newVal=jQuery(this).val();a.children(".wp-tabs, .wp-accordion, .wp-spoiler").switchClass(currentVal,newVal,1500);currentVal=newVal;jQuery.cookie&&jQuery.cookie("tab_demo_style",
newVal,{expires:2})})})};