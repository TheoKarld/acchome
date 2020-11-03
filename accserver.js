var version='1.0.0',
	port=process.env.PORT||5050,
	name='African Child Care',
	ll='',
	fs=require('fs'),
	express=require('express'),
	app=express(),
	path=require('path'),
	server=app.listen(port,shout),
	_dirname=path.resolve(),
	dbn='acc101',
	db='',
	CL='',
	ADM='',
	url='_mongodb._tcp.197.210.52.130',
	uri="mongodb+srv://Rms:x2J4bgzn4LP7EApf@cluster0.31eaj.mongodb.net/acc101?retryWrites=true&w=majority",
	io=require('socket.io')(server),
	//mongo=require('mongodb').MongoClient,
	idx=['admindl','message','sender','donation'],ll='',fma=['Name','Phone number','Email','Message'],dna=['Name','Email','Address','Donation'],XA=[['confirm','acknowledge'],['read','reply']],
	nodemailer=require('nodemailer'),
	kwport = nodemailer.createTransport({host:"smtp.gmail.com",port:465,secure:true,auth:{user:"dashekarld@gmail.com",pass:"theophilus"}}),
	ppe='bernardarinze007@gmail.com',mem='douglaspeters488@gmail.com';
	
	
/*verify local server then deploy*/	
app.use(express.static(_dirname));

/*kwport = nodemailer.createTransport({host:"smtp.mailtrap.io",port:2525,auth:{user:"9be080e4e485b2",pass:"e07547884f96a1"})*/

app.get('/',function(req,res){
	res.end(fsread('accindex.html'));
});




function MFS(){
	if(ll||!db||!ADM)return;
	ll=adminlg();
	putincol(ADM,ll);
}
function rmvfile(lc){
	if(!edey(lc))return;
	fs.unlink(lc,function(err) {
			if(!err) clg('pin file unlink successfully!!');
		});
}
function fulltime(){
	var d=new Date();return d.toGMTString();
}
function cta(o){
	var a=[];for(var i in o)a.push(i);
	return a;
}
function cto(a){
	var o={};
	for(var i in a){o[a[i]]=true;}
	return o;
}
function clonea(a){
	var r=[];
	for(var i in a)r.push(a[i]);
	return r;
}
function write(l,o){
	var w=fs.createWriteStream(l);
	w.write(o);
}
function tdate(){
	var d=new Date();return d.toGMTString();
}
function jp(o){
	try{return JSON.parse(o);}catch(err){clg(err);}
}
function ocn(o){
	var c=0;
	for(var i in o)c++;
	return c;
}
function putincol(cl,ob){
	if(!db||!cl)return;
	var co=cl;
	co.insertOne(ob,incall);
	
}
function replace(co,m,o,n){
	if(!db||!co)return; 
	co.replaceOne({[m]:o},n,incall);
}
function removeall(cl){
	if(!db||!cl)return;
	cl.remove({});
}
function findone(cl,m,o){
	if(!db||!cl)return;
	cl.findOne({[m]:o},outcall);
}
function outcall(err,dat){
	if(err)clg(err);
	clg(dat);
}
function incall(er,re){
	if(er)clg(er);
}
function read(cl,calb){
	if(!db)return;
	try{
		var r=cl.find(),ar=[];
		r.each(function(err,doc){
			if(err)clg(err);
			if(doc){
				ar.push(doc);
			}else{if(calb)calb(ar);}
		});
	}catch(err){clg(err);}
}
function rmvcollection(c){
	if(!db)return;
	try{
		db.dropCollection(c);
		clg(c+' collection dropped');
	}catch(err){clg(err);}
}
function js(o){
	return JSON.stringify(o);
}
function clg(t){
	console.log(t);
}
function collect(t){
	if(!db)return;
	return db.collection(t);
}
function callog(res){
	if(!ADM)return;
	read(ADM,respond);
	function respond(a){
		for(var i in a){
			if(a[i].fid==idx[0])ll=a[i];
			if(a[i].fid==idx[1])plog=a[i];
		}
		if(res)res();
	}
}
function calladm(){
	if(!db)return;
	ADM=db.collection('admin');
	callog();
	
	
}
function calldb(){
	var gb=new mongo(uri,{useUnifiedTopology:true});gb.connect(function(err,plug){
		if(err){
			clg(err);
			return;
		}
		CL=plug;db=plug.db(dbn);
		calladm();
		clg(app+' version '+version+' is online...');
	});
	
}
function upob(fnc){
	CL=new mongo(uri,{useNewUrlParser:true,useUnifiedTopology:true});
	clg(CL);
	CL.connect(err => {
		if(err){clg(err);return;}
		db=CL.db(dbn);
		ADM=db.collection('ADM');
		ll=ADM.findOne({'fid':idx[0]});
		clg(ll);
		if(!ll){ll=adminlog();ADM.insertOne(ll,outcall);}
		//if(fnc)fnc();
		CL.close();
		
	});
}
function shout(err){
	if(!err)clg('LAUNCHED');
}
function fsread(l){
	return fs.readFileSync(l);
}
function mkdir(d){
	if(edey(d))return;
	fs.mkdir(d);
}
function js(o){
	return JSON.stringify(o);
}
function clg(t){
	console.log(t);
}
function upmsg(o){
	var ms=msgob(o),nm=o[fma[0]]+':'+tdate(),mo=emto(o[fma[2]],mem,fma[3]+' from '+o[fma[0]],slo(o));
	sendemail(mo);
	//ll[fma[3]][nm]=ms;
	//clg(ll);
	//writelog('ll');
}
function writelog(o){
	if(o=='ll'&&ll)replace(ADM,'fid',idx[0],ll);
}
function updon(o){
	var ms=donob(o),nm=o[fma[0]]+':'+tdate(),mo=emto(o[fma[2]],mem,dna[3]+' from '+o[fma[0]],slo(o));
	sendemail(mo);
	//ll.doninfo[nm]=ms;
	//writelog('ll');
}
function sendemail(o){
	kwport.sendMail(o,function(er,inf){
		if(er){clg(er);}else{clg('Email sent successfully..');}
	});
}
function elem(t,c){
	return '<'+t+'>'+c+'</'+t+'>';
}
function elo(o){
	var d='';
	for(var i in o){
		d=d+'<br/>'+(elem('div',(elem('h4',i)+'<br/>'+elem('p',o[i]))));
	}
	return d;
}
function slo(o){
	var d='';
	for(var i in o){
		d=d+i+' :- '+o[i]+' ___ ';
	}
	return d;
}


var emto=function(f,t,s,m){
	return {from:f,to:t,subject:s,text:m,attachment:'img/accicon.png'};
}
var dnflag=function(){
	var o={},a=XA[0];for(var i in a)o[a[i]]=false;
	return o;
}
var donob=function(o){
	var ob={};ob.fid=idx[3];ob[idx[2]]=o[fma[0]];ob.don=o;ob.flag=dnflag();
	return ob;
}
var adminlg=function(){
	var o={};o.fid=idx[0];o[fma[3]]={};o.doninfo={};o.story={};
	return o;
}
var msgob=function(o){
	var ob={};ob.fid=fma[3];ob[idx[2]]=o[fma[0]];ob.msg=o;ob.flag=msflag();
	return ob;
}
var msflag=function(){
	var o={},a=XA[1];for(var i in a)o[a[i]]=false;
	return o;
}

//calldb();
//upob(outcall);
io.on('connection',function(socket){
socket.on('init',function(){
	socket.emit('kick');
});
socket.on('climsg',function(o){
	upmsg(o);
	socket.emit('msgsv',o[fma[0]]);
	
});
socket.on('donation',function(o){
	updon(o);
});
	
});

clg(name+' version '+version+' is online...');