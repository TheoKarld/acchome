var kick=(function(){
	var ffo={},itv='',nvc=['nav nav-pills nav-stacked','list-inline'],AA={'Supporting the Orphan Child':'Our Society today pay almost no attention to the helpless orphans roaming the community in search for their basic and daily needs as well as childrens in Orphanages. Therefore we at ACC have taken it up on ourselves to fish out and orient this youths and support them financially when ever and where ever we can cause we believe educated and dream driven youths result to a steady growing Society.','Suporting the Single Parent':'Most Single parents in our society especially widows have a hard time supporting themselves and thier children after the death of their partner who in most cases is the bread winner of the family, so we reach out to them as well to support them with Feeding, clothing, fees and other pocket draining responsibilities.','Supporting the Less Previlege':'Not only Orphans and widows suffer porvery and lack, some people still suffer lack due to the steady rise of unemployment, low income, steady rise of price in the market, so we consider them as well. Supporting them with any assistance we can is also a priority for us.'},wnte='African Child Care (ACC) is an online platform initiated to connect those willing to help with those in need of help. That\'s to say your DONATION will be used to assist the poor widows and orphans our aiding arms can reach. Also your personal contacts (Phone number,Email) will be collected, so when your donation is confirmed you get a call from us to allow you converse with the recievers of your donation.',WT='',abn='African Child Care is a newly inovated online platform, inspired by the rapid growth of neglegence by the oversights in our society which is causing a rise in the suffering of the African child. So We chose to design an African Child Care system to link with those willing to assist our quest to reach out to those ignored by the rich. We have no "on land" office cause we aim at using the funds at our disposal to assist the Orphans, Widows, Less Previlege and more so anyone in need.',get=['Food','Cloths','Books','School Fees(where we can\'t afford all we still assist with part)','Hospital Bills','and what so ever nessesity demands..'],dtx='Donate now to support the child in need, know with full assurance that, no amount is too small or too big to ease the vast spread of porverty threatining the future of our society. Cause if the young are pose to carry tomorrow on their shoulder then, it is up to us to carry their needs on ours and support them in what so ever way we can to ensure the health of the future society. Please be sure to inform us (via our email address) about any donation forehand to ensure fast confirmation and instant aquisition and distribution of the afforded resources.',dna=[['Name','Email','Address','Donation'],['full name','please enter a valid email.','it\'s optional but we will love to get your location','amount you intend to donate(e.g 10 dollars,10 pounds,10 Euroes,...)']],PC='',hu2x='',xo={},pu='http://www.paypal.com/us/signin',ppe='bernardarinze007@gmail.com',fbp='https://www.facebook.com/African-childcare/',igh='https://www.instagram.com/African_childcare/',lin='https://www.linkedin.com/in/african-childcare-9bb8911ba',spa=['African-childcare','African_childcare','african-childcare-9bb8911ba'];
	
	
function init(){
	var jm=jum('',[hea(1,name)]);
	
	socket.emit('init');
	socket.on('kick',function(){
		callhome();
	});
	
}
function bringup(cl,cv){
	if(cv){
		ffo.otx('Ready');
		var t=setTimeout(function(){bring();clearInterval(itv);clearTimeout(t);},3000);
	}else{bring();}
	
	function bring(){
		if(WV){XC=VP.childNodes[0];X(WV);}
		APP(VP,cl);
		WV=cl;
		addEvent(VP,'keydown',function(e){
			e=e.code;
			if(e=='Enter'&&hu2x){hu2x();}
		});
	}
}
function callhome(){
	if(Mng)return;
	var m=Men[0];if(isme(m))return;
	if(!ffo.hme)homedv();
	bringup(ffo.hme);
	WT=m;
}
function callcont(){
	if(Mng)return;
	var m=Men[1];if(isme(m))return;
	if(!ffo.cont)contactdv();
	bringup(ffo.cont);
	WT=m;
}
function calltree(t){
	if(Mng)return;
	var a=Men;
	if(t==a[0])callhome();
	if(t==a[1])callcont();
	if(t==a[2])callabout();
	if(t==a[3])calldonate();
	
}
function callabout(){
	if(Mng)return;
	var m=Men[2];if(isme(m))return;
	if(!ffo.huib)aboutdv();
	bringup(ffo.huib);
	WT=m;
}
function isme(m){
	return WT==m;
}
function calldonate(){
	if(Mng)return;
	var m=Men[3];if(isme(m))return;
	if(!ffo.don)donatedv();
	bringup(ffo.don);
	WT=m;
}
function callpop(t){
	if(!ffo.pop)popa();
	ffo.fpop(t,true);
	PC=ffo.cont;
	WT='pop';
}
function callacct(){
	if(Mng)return;
	if(!ffo.dntact)donacct();
	bringup(ffo.dntact);
	WT='acct';
}



var sbut=function(l,c,s,t){
	return anc(l,[span('','icosp',s),span(t)],c,'',{type:'button',role:'button',target:'_blank'});
}
var socialbox=function(){
	var ig=sbut(igh,'btn-lg btn-ins','fa fa-instagram',spa[1]),fb=sbut(fbp,'btn-lg btn-fb','fa fa-facebook-f pr-1',spa[0]),li=sbut(lin,'btn-lg btn-li','fa fa-linkedin',spa[2]),bb=jum('soc-buts',[fb,ig,li]),sh=pah('soc-ph',[hea(1,'you can also connect with us on..','soc-h')]),rd=DIV('socialbox','','',[sh,bb]);
	return rd;
	
}
var donacct=function(){
	var h=pah('dnact-hd',[hea(1,'thank you for supporting our objectives.','act-h')]),pk=jum('acct-keys',[anc(pu,'continue to PayPal','btn btn-lg btn-danger','gotopaypal',{target:'_blank'}),but('done','button','actdone','btn btn-lg btn-primary')]),emd=jum('act-emd',[par('For now we recieve donations strictly through PayPal, so below is our PayPal associated email.','act-eh'),par(ppe,'act-email')]),rd=colbox('donacct',12,12,12,12,[h,emd,pk,morecont()]);
	ffo.dntact=rd;
	fit2scrn(rd);
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='actdone')calldonate();
	});
	
	
	
}
var popa=function(){
	var tx=par('','pop-tx'),h=hea(1,'notification','pop-h'),tj=jum('poptxjm',[tx]),bj=jum('popkeyjm',[but('close','button','cpop','btn btn-lg btn-primary')]),rd=colbox('popa',12,12,12,12,[jum('popbox',[h,tj,bj])]);
	fit2scrn(rd,true);
	ffo.pop=rd;
	ffo.fpop=fil;
	xo.pop=xpop;
	
	function fil(st,ap){
		tx.textContent=st;if(ap&&!fada(rd)){bringup(rd);}
	}
	function xpop(){
		bringup(PC);
		PC='';
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(e=='Enter')xpop();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='cpop')xpop();
		
	});
}
var donform=function(){
	var fo={},hd=pah('dtfm-hd',[hea(1,Men[3]+' Now.','dnfm-h'),small('your donation will assist a child.')]),mo={},fm=fom(dna[0],dna[1]),mb=par([but('Continue','button','sndot','btn btn-lg btn-info')]),ws=colbox('donfm-ws',12,12,12,12,[fm.f,mb]),rd=jum('dotform',[hd,ws]);
	ffo.dtfm=rd;
	
	function chk4ext(){
		var oo=fm.o,ck=true;
		for(var i in oo)if(!oo[i].value){alert('please insert '+i+' to continue.');ck=false;break;}
		if(!ck)return;
		ck=fetchvalu(oo);
		socket.emit('donation',ck);
		cleanup();
		callacct();
		
	}
	function cleanup(){
		clrvalu(fm.o);
	}
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(e=='Enter')chk4ext();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='sndot')chk4ext();
		
	});
	
}
var donatedv=function(){
	if(!ffo.dtfm)donform();
	var hd=pagehed(3,'donate-hd'),dth=pah('dont-hd',[hea(1,'Support a Child Today','dont-h'),par('Every child deserves the support of the society','dnth-p')]),dnt=par(dtx,'dont-txt'),dtd=colbox('dont-td',6,6,12,12,[dth,dnt]),fmd=colbox('donfmhol',6,6,12,12,[jum('dtfmd',[ffo.dtfm])]),dnw=jum('dntjum',[dtd,fmd]),ws=colbox('dont-ws',12,12,12,12,[dnw,morecont()]),rd=colbox('donatedv',12,12,12,12,[hd,ws]);
	fit2scrn(rd);
	ffo.don=rd;
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		
	});
	
}
var morecont=function(){
	var rd=jum('morecontact',[socialbox()]);
	
	
	addEvent(rd,'click',function(){
		
	});
	
	return rd;
}
var aboutdv=function(){
	var mx='About ME'+' ('+acro+')',hd=pagehed(2,'about-hd'),aph=pah('abot-he',[hea(1,mx,'abot-h')]),atp=par(abn,'about-txt'),awd=jum('abt-stn',[aph,atp]),sh=pah('wat-hd',[hea(2,'What We Mean.','wat-h')]),ul=plist('about-ul','form',{d:'form-group'},get),wd=jum('watwemin',[sh,ul.u]),mc=morecont(),ws=colbox('about-ws',12,12,12,12,[awd,wd,mc]),rd=colbox('aboutdv',12,12,12,12,[hd,ws]);
	fit2scrn(rd);
	ffo.huib=rd;
	
	
}
var msgform=function(){
	var fo={},hd=pah('msfm-hd',[hea(3,Men[1]+' Us.','mf-h'),small('we will love to hear your suggestion or correction.')]),mo={},fm=fom(rar(fma,1),[' (required) ',' (required) ',' please make sure it\'s valid email']),mb=par([fomgrup(fma[3],'form-control','text','',fo,true),but('Send','button','sndmsg','btn btn-lg btn-info')]),ws=colbox('msfm-ws',12,12,12,12,[fm.f,mb]),rd=jum('msgform',[hd,ws]),sd,sc;
	
	ffo.msfm=rd;
	ffo.cmsfm=cleanup;
	
	function chk4ext(){
		var bi=fm.o,ms=fo,ck=true,so={};
		for(var i in bi)if(!bi[i].value){alert('please enter '+i+' to continue.');ck=false;break;}
		if(!ms[fma[3]].value){alert('Please insert '+fma[3]+' to continue.');ck=false;}
		if(!ck)return;
		sd=jum();
		
		for(var i in bi){
			so[i]=bi[i].value;
			APP(sd,par([small(i),par(so[i])]));
		}
		so[fma[3]]=fo[fma[3]].value;
		socket.emit('climsg',so);
		socket.on('msgsv',function(n){
			var tx='Thank you for contacting us '+n+'. We will reply you if their is need to.';
			callpop(tx);
			cleanup();
		});
	}
	function cleanup(){
		clrvalu(fm.o);clrvalu(fo);
		
	}
	addEvent(rd,'keydown',function(e){
		e=e.code;
		
		if(e=='Enter')chk4ext();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='sndmsg')chk4ext();
		
	});
	
}
var pagehed=function(c,id){
	var ns=nas(),mn=navi(Men[c]),rd=colbox(id,12,12,12,12,[ns,mn]);
	return rd;
}
var contactdv=function(){
	if(!ffo.msfm)msgform();
	var hd=pagehed(1,'cont-hd'),mc=morecont(),ws=colbox('cont-ws',12,12,12,12,[ffo.msfm,mc]),rd=colbox('contdv',12,12,12,12,[hd,ws]);
	fit2scrn(rd);
	ffo.cont=rd;
	
	
}
var welnote=function(){
	var h=pah('wen-hd',[hea(1,'WELCOME','wel-h')]),rd=jum('welnote',[h,par(wnte,'welpar')]);
	return rd;
}
var carbox=function(t){
	var h=hea(1,t),ws=colbox('carbx-ws',12,12,12,12,[par(AA[t])]),rd=colbox(t,3,3,12,12,[h,ws]);
	return rd;
	
}
var nas=function(){
	var im=img('img/acclogo.png','','nas-logo inliner'),nm=hea(1,name,'cname','inliner'),hc=par([im,nm],'nas-hc'),mo=par(moto,'nas-moto'),rd=colbox('nascol',6,6,12,12,[jum('nasdv',[hc,mo])]);
	return rd;
}
var navi=function(m){
	var a=Men,sd=ulist(m,nvc[1],{d:'active btn btn-md btn-info',s:'active btn btn-md btn-success'},a),rd=ulist(m,nvc[0],{d:'active btn btn-sm btn-info',s:'active btn btn-sm btn-success'},a),dr=colbox('navicol',6,6,12,12,[rigiya('sx','sx-menu',[rd.u]),rigiya('lm','lm-menu',[sd.u])]);
	
	addEvent(dr,'click',function(e){
		e=ee(e);
		
		if(e.tagName=='A'&&WT!=e.textContent){calltree(e.textContent);}
	});
	return dr;
}
var homedv=function(){
	var hd=pagehed(0,'hme-hd'),ah=pah('wen-hd',[hea(1,'Aims/Objectives','aic-h')]),aic=jum('myaim',[ah]),ws=colbox('hme-ws',12,12,12,12,[welnote(),aic,morecont()]),rd=colbox('hmediv',12,12,12,12,[hd,ws]),a=[],cr;
	fit2scrn(rd);
	ffo.hme=rd;
	for(var i in AA)APP(aic,carbox(i));
	
	
}

	return{
		
		gear:function(){
			init();
		}
	}
	
})();