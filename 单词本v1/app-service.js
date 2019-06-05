	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[6],[[7],[3,'wordObject']],[3,'images']],[[7],[3,'playIndexImage']]],[1,undefined]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./utils/word_resolve.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/home/home.wxml']={};
f_['./pages/home/home.wxml']['wob'] =f_['./utils/word_resolve.wxs'] || nv_require("p_./utils/word_resolve.wxs");
f_['./pages/home/home.wxml']['wob']();

f_['./utils/word_resolve.wxs'] = nv_require("p_./utils/word_resolve.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_trans = (function (nv_wordObject){var nv_symboles = nv_wordObject.nv_ciba.nv_content.nv_symbols;var nv_symboleString = '';var nv_note = '';nv_symboles.nv_forEach((function (nv_t){if (nv_t.nv_parts !== undefined){nv_t.nv_parts.nv_forEach((function (nv_t1){nv_symboleString = nv_symboleString + nv_t1.nv_part + " ";nv_t1.nv_means.nv_forEach((function (nv_t2){nv_symboleString = nv_symboleString + nv_t2 + " "}));nv_symboleString = nv_symboleString + '\n'}))}}));if (nv_wordObject.nv_note != undefined){nv_symboleString = nv_symboleString + '\n备注:\n' + nv_wordObject.nv_note};return(nv_symboleString)});var nv_en = (function (nv_wordObject){var nv_enString = '';if (nv_wordObject.nv_ciba.nv_content.nv_symbols[(0)].nv_ph_en == undefined){return(nv_enString)};if (nv_wordObject.nv_ciba.nv_content.nv_symbols[(0)].nv_ph_en != ''){nv_enString = '[ ' + nv_wordObject.nv_ciba.nv_content.nv_symbols[(0)].nv_ph_en + ' ]英'};return(nv_enString)});var nv_am = (function (nv_wordObject){var nv_enString = '';if (nv_wordObject.nv_ciba.nv_content.nv_symbols[(0)].nv_ph_am == undefined){return(nv_enString)};if (nv_wordObject.nv_ciba.nv_content.nv_symbols[(0)].nv_ph_am != ''){nv_enString = '[ ' + nv_wordObject.nv_ciba.nv_content.nv_symbols[(0)].nv_ph_am + ' ]美'};return(nv_enString)});nv_module.nv_exports = ({nv_trans:nv_trans,nv_am:nv_am,nv_en:nv_en,});return nv_module.nv_exports;}

var x=['./pages/home/home.wxml','./pages/index/index.wxml','./pages/logs/logs.wxml','./pages/playcopy/index.wxml','./pages/wordAdd/wordAdd.wxml','./pages/wordDetail/wordDetail.wxml','./pages/wordList/wordList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/home/home.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/home/home.wxml'] = $gwx( './pages/home/home.wxml' );
		__wxAppCode__['pages/wordAdd/wordAdd.json'] = {"usingComponents":{},"navigationBarTitleText":"我的单词本"};
		__wxAppCode__['pages/wordAdd/wordAdd.wxml'] = $gwx( './pages/wordAdd/wordAdd.wxml' );
		__wxAppCode__['pages/wordDetail/wordDetail.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/wordDetail/wordDetail.wxml'] = $gwx( './pages/wordDetail/wordDetail.wxml' );
		__wxAppCode__['pages/wordList/wordList.json'] = {"usingComponents":{},"enablePullDownRefresh":true};
		__wxAppCode__['pages/wordList/wordList.wxml'] = $gwx( './pages/wordList/wordList.wxml' );
	
	define("pages/playcopy/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var e=t.data.wordList[t.data.wordPlayIndex].word,n=t.data.wordList[t.data.wordPlayIndex].remarks,a=t.data.wordList[t.data.wordPlayIndex].name,i=null==a?"":"https://itaskanswer.com/enlearn/userWordImg/"+a,u=t.data.wordList[t.data.wordPlayIndex].date,s=t.data.wordList[t.data.wordPlayIndex].update,g=t.data.wordList[t.data.wordPlayIndex].times;l.title=e,l.epname="单词",l.singer=n,l.coverImgUrl=i,t.setData({wordImage:i,date:d.getDateBaseTimestamp(u),update:d.getDateBaseTimestamp(s),times:g,wordImages:[i],word:e,remark:"不显示注释"==t.data.buttonDisplayNoteTitle?n:""}),setTimeout(function(){c>=.1&&(r.volume=.1),l.src="http://fanyi.baidu.com/gettts?lan=en&text="+t.data.wordList[t.data.wordPlayIndex].word+"&spd=3&source=web"},2e3),l.onEnded(function(){o(t)}),l.onError(function(){console.log("error"),o(t)})}function o(o){exit(),r.volume=parseFloat(c),o.setData({wordPlayIndex:o.data.wordPlayIndex+1==o.data.wordList.length?0:o.data.wordPlayIndex+1}),setTimeout(function(){"暂停"==o.data.buttonPlayTitle&&t(o)},3e3)}function e(t){t.setData({buttonPlayTitle:"暂停"==t.data.buttonPlayTitle?"继续":"暂停"}),"暂停"==t.data.buttonPlayTitle&&(console.log("继续播放吧"),o(t))}function n(t){t.setData({buttonDisplayNoteTitle:"显示注释"==t.data.buttonDisplayNoteTitle?"不显示注释":"显示注释"})}function a(t){r.volume=parseFloat(c),wx.setStorageSync("backgroundAudioVolume",c),i(t),console.log(c)}function i(t){t.setData({noteTextBackgroundAudioVolume:c})}function u(){s.tokenRequest(function(){console.log("login success"),wx.reLaunch({url:"/pages/home/home"})},function(){console.log("login fail"),wx.showToast({title:"请求出错，请重试！",icon:"none",duration:2e3})},function(){console.log("go to auth page view"),wx.showToast({title:"未检查到你的授权，请授权",icon:"none",duration:2e3})})}require("../../utils/api.js");var s=require("../../utils/wapiLogin.js"),d=(require("../../utils/clog.js"),require("../../utils/util.js")),r=(getApp(),wx.createInnerAudioContext()),l=wx.getBackgroundAudioManager(),c=""==wx.getStorageSync("backgroundAudioVolume")&&0!=wx.getStorageSync("backgroundAudioVolume")?.2:wx.getStorageSync("backgroundAudioVolume");Page({data:{},onLoad:function(){},onShow:function(t){},onHide:function(t){},getUserInfo:function(t){wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?console.log("已经授权了录音"):wx.authorize({scope:"scope.userInfo",success:function(){},fail:function(){console.log("user jujuele")}})}})},bindtapPlayWord:function(){},bindtapPlayPause:function(){e(this)},bindtapPlayDown:function(){c=(parseFloat(c)-.1).toFixed(1),c=c<.1?0:c,a(this)},bindtapPlayUp:function(){c=(parseFloat(c)+.1).toFixed(1),c=c>.9?1:c,a(this)},bindtapDisplayNote:function(){n(this)},bindtapShowWordImage:function(t){var o=t.currentTarget.dataset.src,e=t.currentTarget.dataset.list;console.log("图片"),wx.previewImage({current:o,urls:e,complete:function(t){console.log("展示完成！")}})},gotoHome:function(t){wx.navigateTo({url:"../home/home",success:function(t){},fail:function(t){},complete:function(t){}})},bindtapAuthorizeReady:function(t){console.log("点击了授权！"),wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&u()}})},bindtapAuthorize:function(t){console.log("请求授权 ！！！"),u()}}); 
 			}); 
		define("utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){wx.getStorage({key:"token",success:function(o){t(o.data)},fail:function(n){a.log("缓存中没有token go获取token"),o(function(o){a.log("获取到的tokenis"+o),t(o)},function(t){a.log("尝试获取token失败了 "+t),e("-----token 未获取成功")})}})}function o(t,o){e(function(o){t(o)},function(t){o(t)})}function e(t,o){var e;e=g+"login";var n={};wx.login({success:function(i){var s=i.code;wx.getSetting({success:function(i){i.authSetting["scope.userInfo"]?(console.log("applaunch"),wx.getUserInfo({success:function(i){console.log(i),n.code=s,n.encryptedData=i.encryptedData,n.iv=i.iv,wx.request({url:e,data:n,method:"post",success:function(e){if(200==e.statusCode)try{wx.setStorageSync("token",e.data.data),a.log("缓存最新token成功"),t(e.data.data)}catch(t){a.log("缓存token失败error:"+t),o("无可fail")}else t("\b获取token请求失败！")},fail:function(){a.log("获取tokenken失败"),o("获取token fail")},complete:function(t){a.log("网络请求 complete")}})}})):console.log("butongyishouquan")}})}})}function n(e,f,d,p,h,w,k){if(0==r&&(r=1,c=0),l){if(c>=r)return a.log("已经加载完数据"),void w("已经加载完数据");c++}t(function(t){if(d.token=t,d.client_type=0,s<u){s++;var m=g+e;l&&(m=m+"&page="+c),a.log("request-url:"),a.log(m),a.log("request-argument:"),a.log(d),wx.request({url:m,data:d,method:f,success:function(t){a.log("request-success-:"),a.log(t),200==t.statusCode||201==t.statusCode?(s=0,l&&(c=t.header["X-Pagination-Current-Page"],r=t.header["X-Pagination-Page-Count"]),p(t)):401==t.statusCode?s<=u?o(function(t){n(e,f,d,p,h,w)},function(t){s=0,w("获取最新token失败！"),wx.showToast({title:"token失败",icon:"loading",duration:1e3})}):(wx.showToast({title:"鉴权失败,且重复请求了一次已经",icon:"loading",duration:1e3}),w("401错误！")):403==t.statusCode?(s=0,t.data.message.length>0&&wx.showToast({title:t.data.message,icon:"loading",duration:1e3}),2==i.getUsertype()?setTimeout(function(){h(t)},1e3):h(t)):(s=0,wx.showToast({title:"错误代码"+t.statusCode+"-"+e,icon:"loading",duration:1e3}))},fail:function(t){a.log("meizu"),s=0,w("网络请求失败"),wx.showToast({title:"请求失败",icon:"loading",duration:1e3})},complete:function(t){setTimeout(function(){wx.hideToast()},1e3),"function"==typeof k&&k("complete")}})}else s=0},function(t){w("缓存获取token失败！")})}var i=require("/init.js"),a=require("/clog.js"),s=0,u=2,c="0",r="1",l=!1,g="https://wodedanciben.com/api0011.php?method=";module.exports={getTokenFromStorage:t,talkwxrequest:n,requestAvatarUrl:function(t,o,e){wx.getUserInfo({success:function(o){t(o.userInfo.avatarUrl)},fail:function(o){t("/pages/image/application-head-portrait.png")}})},homeUrl:g,imageurl:"",audiourl:"",alert:function(t){wx.showToast({title:t,mask:!0,icon:"loading",duration:2e3})},secondToWidth:function(t){var o=t*(250/420);return o>250?300:50+o},secondToViewString:function(t){return Math.floor(t/60)+"'"+t%60+"''"},setPageType:function(t){l=t},setPage:function(t){c=t,a.log("page is set--\x3e"+c)},getPage:function(){return c},secondToWidthRecord:function(t){return t>300&&(t=300),50+t/.24},secondToWidthVoice:function(t){var o=t*(130/300);return o>130?130:o}}; 
 			}); 
		define("utils/clog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("/init.js");module.exports={log:function(t){o.getClogStatus()&&console.log(t)}}; 
 			}); 
		define("utils/init.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=1,e=!1,n="https://wodedanciben.com",r=n+"/api0011.php";module.exports={getDevtype:function(){return t},getApiUrl:function(){return r},getHomeUrl:function(){return n},getClogStatus:function(){return e}}; 
 			}); 
		define("utils/playAudionew.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){var e=Math.floor(o/3600),t=a(Math.floor((o-3600*e)/60));return t+":"+a(o-3600*e-60*t)}function a(o){return o<10?"0"+o:o}function e(o,a,e){console.log("CallBack start"+a+"playnowValue"+s.nowValue+"auido url---"+s.audiourl),1==a?wx.playBackgroundAudio({dataUrl:s.audiourl,coverImgUrl:s.cover,title:s.title,success:function(o){console.log("play success ")},fail:function(o){console.log("play failed le 1")},complete:function(o){console.log("play complete"),"android"==i.platform?t(1,e):wx.seekBackgroundAudio({position:Math.floor(s.nowValue),complete:function(o){console.log("seek complete ios"),t(1,e)}})}}):2==a?(wx.pauseBackgroundAudio(),clearInterval(n)):3==a?clearInterval(n):4==a?wx.getBackgroundAudioPlayerState({success:function(o){0==o.status?console.log("back ground audio seek -- "+s.nowValue):1==o.status?(wx.seekBackgroundAudio({position:s.nowValue}),t(1,e)):o.status}}):5==a?(clearInterval(n),wx.seekBackgroundAudio({position:0})):6==a&&wx.playBackgroundAudio({dataUrl:s.audiourl,coverImgUrl:s.cover,title:s.title,success:function(o){console.log("play success ")},fail:function(o){console.log("play failed 6")},complete:function(o){t(1,e)}})}function t(a,e){clearInterval(n),n=setInterval(function(){wx.getBackgroundAudioPlayerState({success:function(a){if(console.log("播放中 status-: duration currentPosition--\x3e"+s.playStatus+a.duration+"------"+a.currentPosition+"--加载进度--"+a.downloadPercent),1==s.playStatus||3==s.playStatus){if(void 0===a.currentPosition||void 0===a.duration||0==a.duration)return;s.nowValue=Math.floor(a.currentPosition),s.nowTimeStr=o(Math.floor(a.currentPosition)),c.setData({audioplayer:s})}else console.log("finish status call back"),e(0,0,0,o(0),o(0)),clearInterval(n)}})},1e3)}function l(){clearInterval(n),wx.stopBackgroundAudio(),console.log("stop background audio 2")}var n,u,i=wx.getSystemInfoSync();u="ios"==i.platform?300:(i.platform,1500),console.log("platform-"+i.platform+"time-"+u);var s=new Object;s.actionSheetHidden=!1;var c,r=0;wx.getStorageSync("teacher_cover");s.playStatus=0,wx.onBackgroundAudioPlay(function(o){s.playStatus=1,c.setData({audioplayer:s}),"android"==i.platform&&wx.seekBackgroundAudio({position:Math.floor(s.nowValue),complete:function(){console.log("android seek complete")}})}),wx.onBackgroundAudioPause(function(o){console.log("zanting"+o),s.playStatus=2,c.setData({audioplayer:s}),clearInterval(n)}),wx.onBackgroundAudioStop(function(o){if(console.log("tingzhi"+o),1==s.type&&s.maxValue>60)try{s.nowValue>s.maxValue-5&&(s.nowValue=0),wx.setStorageSync(s.audiourl,s.nowValue),console.log("save playvalue success")}catch(o){console.log("save playvalue fail"+o)}s.touchChangeNowValue||(console.log("wx.onBackgroundAudioStop-set playStatus=0"),s.playStatus=0,s.nowValue=1,s.nowTimeStr="00:00",c.setData({audioplayer:s}))}),module.exports={initAudioPlayer:function(o){r=1,c=o,s.minValue=0,s.maxValue=0,s.nowValue=1,s.nowTimeStr="00:00",s.maxTimeStr="00:00",s.audiourl="",s.cover="",s.title="",s.touchChangeNowValue=!1;try{s.title=wx.getStorageSync("lessonName"),s.cover=wx.getStorageSync("teacher_cover")}catch(o){console.log("get lesson name cover fail")}c.setData({audioplayer:s})},setAudiourl:function(o){s.audiourl=o},setAudioNowValue:function(a){s.nowValue=a<1?1:a,s.nowTimeStr=o(Math.floor(s.nowValue)),console.log("nowTime--"+s.nowValue),c.setData({audioplayer:s}),1!=s.playStatus&&(s.touchChangeNowValue=!0,console.log("setAudioNowValue wxstopaudio"),wx.stopBackgroundAudio())},setAudioMaxValue:function(a){s.maxValue=a<1?1:a,s.maxTimeStr=o(Math.floor(a)),console.log("maxTime--"+s.maxValue+"-----"+s.maxTimeStr),c.setData({audioplayer:s})},date_format:o,getPlayStatus:function(){return s.playStatus},voicestopLessionVoice:l,chagePlayStatus:function(o){var a=o.data.apidata,e=o.data.playingIndex;a.list[e].data.playing=!a.list[e].data.playing,o.setData({playingIndex:e,apidata:a})},audioplayLessionVoice:function(o){if(s.type=1,0==o){if(0==r)return void console.log("尚未初始化过音频播放器!");s.actionSheetHidden=!1,s.touchChangeNowValue=!1,c.setData({audioplayer:s}),console.log("audioplayLessionVoice wxstopaudio"),wx.stopBackgroundAudio(),s.playStatus=0,console.log("audioplaylessonvoice-set playStatus=0")}else if(1==o){try{var a=wx.getStorageSync(s.audiourl);a&&(s.nowValue=a,console.log("get playvalue success"))}catch(o){s.nowValue=1,console.log("get playvalue fail")}0==s.playStatus&&(s.nowTimeStr="00:00"),s.actionSheetHidden=!0,s.playStatus=1,console.log("playAudioApple.playStatus--"+s.playStatus),c.setData({audioplayer:s}),e(s.audiourl,1,function(o,a,e,t,l){})}else 2==o?(s.playStatus=2,console.log("playAudioApple.playStatus--"+s.playStatus),c.setData({audioplayer:s}),e(c.data.audiourl,2)):3==o?e(c.data.audiourl,3):4==o?e(s.audiourl,4,function(o,a,e,t,l){}):6==o&&(s.touchChangeNowValue?e(s.audiourl,1,function(o,a,e,t,l){}):(s.playStatus=1,c.setData({audioplayer:s}),e(s.audiourl,6,function(o,a,e,t,l){})),console.log("play button finish tap"),s.touchChangeNowValue=!1,c.setData({audioplayer:s}))},voiceplayLessionVoice:function(o,a,t,n,u,i,c){s.type=2,e(o,1,function(o,a,e,t,n){console.log("status, maxValue, nowValue, maxTimeStr, nowTimeStr"+o+"------"+a+"------"+e+"------"+t+"------"+n),0==o&&(c(),l())})}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),g=e.getHours(),a=e.getMinutes(),u=e.getSeconds();return[n,o,r].map(t).join("/")+" "+[g,a,u].map(t).join(":")},getDateBaseTimestamp:function(t){var e=new Date(1e3*parseInt(t)),n=e.getFullYear()+"-",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=e.getDate()+" ",g=e.getHours(),a=":"+e.getMinutes(),u=":"+e.getSeconds();return console.log(n+o+r+g+a+u),n+o+r+g+a}}; 
 			}); 
		define("utils/wapi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return 400!=e||(wx.clearStorageSync("token"),wx.reLaunch({url:"/pages/index/index"}),!1)}var t=require("/init.js"),o=require("/clog.js");module.exports={wrequest:function(n,r,a,i,u){wx.getStorageSync("token")?(!1!==r.loading&&wx.showNavigationBarLoading(),r.client_type=2,r.token=wx.getStorageSync("token"),r.method=n,console.log("argumentdata->",r),wx.request({url:t.getApiUrl(),data:r,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){o.log("request-success"),e(t.data.status)&&a(t)},fail:function(e){requestCount=0,i("网络请求失败")},complete:function(e){console.log("request complete"),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})):i("没有token")}}; 
 			}); 
		define("utils/wapiLogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,o,n,i){wx.getSetting({success:function(a){if(console.log(a),!a.authSetting["scope.userInfo"])return console.log("weishouquan---"),void i();var s=Array();s.client_type=2,s.method="getUnitId",wx.getUserInfo({success:function(i){s.iv=i.iv,s.encryptedData=i.encryptedData,s.openid=e,wx.showNavigationBarLoading(),wx.request({url:t.getApiUrl(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log("get unitid->",e);var t=e.data.data;wx.setStorageSync("openId",t.openId),wx.setStorageSync("unionId",t.unionId),wx.setStorageSync("token",e.data.token),o()},fail:function(e){n("register request fail")},complete:function(){wx.hideNavigationBarLoading()}})},fail:function(e){console.log("get user info fail"),n()}})},fail:function(){console.log("getSetting fail"),n()}})}var t=require("/init.js");require("/clog.js");module.exports={tokenRequest:function(o,n,i){var a=Array();a.method="wxappLogin",a.client_type=2,wx.login({success:function(s){s.code?(a.code=s.code,wx.showNavigationBarLoading(),wx.request({url:t.getApiUrl(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){console.log("wxappLogin->",t),1==t.data.status?(wx.setStorageSync("token",t.data.token),o()):3==t.data.status?e(t.data.data,function(){console.log("register success"),o()},function(){n("register request fail")},function(){i("user info auth fail")}):n("get token request fail",t)},fail:function(e){n("register request fail")},complete:function(){wx.hideNavigationBarLoading()}})):console.log("wx.login fail ->",s.errMsg)}})}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(){o.tokenRequest(function(n){console.log("login success -"),wx.reLaunch({url:"/pages/home/home"})},function(){console.log("login fail")},function(){console.log("go to auth page view"),wx.reLaunch({url:"/pages/index/index"})})}var o=require("/utils/wapiLogin.js");App({onLaunch:function(){wx.getStorageSync("token")||n()},globalData:{userInfo:null}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/home/home.js';	define("pages/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var a=Array();a.order=" wddcb_user_word.update_date ",a.from=0,a.count=5e4,a.esc="desc",a.know=1,p.wrequest("wordList",a,function(a){if(console.log("e",a),4==a.data.status)return wx.showToast({title:a.data.msg,icon:"none",duration:2e3,complete:function(t){}}),void i(2e3).then(function(){wx.navigateTo({url:"../wordAdd/wordAdd"})});if(1==a.data.status){if(a.data.setting.words_update==t.data.words_update)return;t.setData({wordLists:a.data.data,wordObject:a.data.data[0],playIndex:0,playIndexImage:0,mute:a.data.setting.mute,playStatus:1!=a.data.setting.play_status,tips:!(a.data.data.length>15),words_update:a.data.setting.words_update}),l(t),2==a.data.setting.play_status?n(t,!0):n(t,!1)}},function(t){console.log(t)})}function a(t){var a=t.data.wordLists,e=t.data.playIndex;if(0!=a.length){var o=t.data.wordObject.word,n=Array();n.word=o,p.wrequest("updateKnow",n,function(o){var n=o.data;if(1==n.status){if(1==a.length){var d=t.data.wordObject;return d.know=n.data,void t.setData({wordObject:d})}a.splice(e,1),e==a.length-1&&(e=0),t.setData({playIndex:e,wordLists:a,wordObject:a[e]}),u(t)}})}}function e(t){var a=Array();a.mute=t.data.mute,a.loading=!1,p.wrequest("updateUserSetting",a,function(t){1==t.data.status&&console.log("settting success")})}function o(t){var a=Array();a.play_status=1==t.data.playStatus?2:1,a.loading=!1,p.wrequest("updateUserSetting",a,function(t){1==t.data.status&&console.log("settting success")})}function n(t,a){if(t.setData({playStatus:a}),o(t),a){var e=t.data.playIndex;t.setData({playIndex:e>-1?e-1:e}),g=setInterval(function(){s(t)},6e3)}else clearInterval(g)}function d(t){if(1!=t.data.mute){var a=wx.createInnerAudioContext();a.src=t.data.wordObject.ciba.content.symbols[0].ph_am_mp3,a.play()}}function i(t){return new Promise(function(a){return setTimeout(a,t)})}function r(t,a){if(0==f)return f=t.touches[0].clientX,void(x=t.timeStamp);0!=y?(0==m&&(m=1,f>y&&(console.log("<--"),s(a)),f<y&&(console.log("--\x3e"),c(a))),(h=t.timeStamp)-500>x&&(f=y=m=x=h=0)):y=t.touches[0].clientX}function s(t){var a=t.data.playIndex,e=t.data.wordLists.length;if(!(e<2)){var o=void 0!=t.data.wordObject.images?t.data.wordObject.images:[],n=t.data.playIndexImage;o.length>n+1?t.setData({playIndexImage:n+1}):(a==e-1?a=0:a+=1,t.setData({wordObject:t.data.wordLists[a],playIndex:a,playIndexImage:0}),u(t));try{d(t)}catch(t){console.log("error play",t)}}}function c(t){var a=t.data.playIndex,e=t.data.wordLists.length;if(!(e<2)){0==a?t.setData({wordObject:t.data.wordLists[e-1],playIndex:e-1,playIndexImage:0}):t.setData({wordObject:t.data.wordLists[a-1],playIndex:a-1,playIndexImage:0}),u(t);try{d(t)}catch(t){console.log("error play",t)}}}function u(t){var a=t.data.playIndex,e=t.data.wordLists,o=e.length,n="",d="",i="",r="";console.log(e),console.log(o),console.log(a),0==a?(n=e[o-1].word,d=e[a].word,i=e[1].word):a==o-1?(n=e[a-2].word,d=e[a].word,i=e[0].word):(n=e[a-1].word,d=e[a].word,i=e[a+1].word),r=n+"·"+d+"·"+i,wx.setNavigationBarTitle({title:r}),t.setData({title:r})}function l(t){1==t.data.mute?wx.setNavigationBarTitle({title:t.data.title}):wx.setNavigationBarTitle({title:"⚡️播放单词会有声音"})}var w=require("../../utils/init.js"),p=require("../../utils/wapi.js");require("../../utils/util.js");Page({data:{playStatus:!0,tips:!1,mute:2,playIndex:0,playIndexImage:0,wordObject:{},wordLists:[],imageUrlBase:w.getHomeUrl()+"/wordImage/",words_update:1,title:"我的单词本"},onLoad:function(t){"cda35693a889073320190317111644"==wx.getStorageSync("token")&&wx.showModal({title:"欢迎使用",content:"授权同步，可以在电脑端和小程序同时使用。",showCancel:!0,cancelText:"继续试用",cancelColor:"",confirmText:"现在授权",confirmColor:"",success:function(t){t.confirm&&wx.reLaunch({url:"/pages/index/index"})}})},onReady:function(){},onShow:function(){wx.setKeepScreenOn({keepScreenOn:!0}),t(this)},onHide:function(){},onUnload:function(){},onShareAppMessage:function(){},bindtapWordList:function(){wx.navigateTo({url:"../wordList/wordList"})},bindtapWordAdd:function(){wx.navigateTo({url:"../wordAdd/wordAdd"})},bindtapWordDetail:function(){wx.navigateTo({url:"../wordAdd/wordAdd?from=wordList&word="+this.data.wordObject.word})},bindtapPlay:function(t){n(this,!0)},bindtapPause:function(t){n(this,!1)},catchtouchmove:function(t){r(t,this)},bindtapMute:function(t){this.setData({mute:1==this.data.mute?2:1}),l(this),e(this)},bindtapWordKnow:function(t){var e=this.data.wordObject;e.know=2,this.setData({wordObject:e}),a(this)}});var g,f=0,y=0,m=0,x=0,h=0; 
 			}); 	require("pages/home/home.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(){e.tokenRequest(function(){console.log("login success"),wx.reLaunch({url:"/pages/home/home"})},function(){console.log("login fail"),wx.showToast({title:"请求出错，请重试！",icon:"none",duration:2e3})},function(){console.log("go to auth page view"),wx.showToast({title:"未检查到你的授权，请授权",icon:"none",duration:2e3})})}require("../../utils/api.js");var e=require("../../utils/wapiLogin.js");require("../../utils/clog.js"),require("../../utils/util.js"),getApp(),wx.createInnerAudioContext(),wx.getBackgroundAudioManager(),""==wx.getStorageSync("backgroundAudioVolume")&&0!=wx.getStorageSync("backgroundAudioVolume")||wx.getStorageSync("backgroundAudioVolume");Page({data:{},onLoad:function(){},onShow:function(e){o()},bindtapAuthorizeReady:function(e){console.log("点击了授权！"),wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]&&o()}})},bindtapAuthorize:function(e){console.log("请求授权 ！！！"),o()},bindtapAuthorizeTest:function(o){console.log("先试试"),wx.setStorageSync("token","cda35693a889073320190317111644"),wx.reLaunch({url:"/pages/home/home"})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(a){return t.formatTime(new Date(a))})})}}); 
 			}); 	require("pages/logs/logs.js");
 		__wxRoute = 'pages/wordAdd/wordAdd';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/wordAdd/wordAdd.js';	define("pages/wordAdd/wordAdd.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var e=t.data.word,a=Array();a.word=e;var o,n,d,i,s,u;if(""==e)return o=!0,n=!0,d=!0,i=!0,u=!0,s="添加",void t.setData({ph_am_hidden:o,ph_en_hidden:n,trans_hidden:d,deleteButton:i,addTitle:s,boom_hidden:u});m.wrequest("findWord",a,function(e){var a=e.data;if(4==a.status||3==a.status){console.log("word data->",a),console.log("word pham->",a.data.content.symbols[0].ph_am);var c=a.data.content.symbols[0].ph_am,m=a.data.content.symbols[0].ph_en,h=a.data.content.symbols[0].ph_am_mp3,p=a.data.content.symbols[0].ph_en_mp3,f=r(a.data.content.symbols),w="",g=[],_="",v="",y="",T=!1;3==a.status?(w=a.data.myWord.note,g=a.data.myWord.images,_=l.getDateBaseTimestamp(a.data.myWord.date),v=l.getDateBaseTimestamp(a.data.myWord.update),y=a.data.myWord.number,T=a.data.myWord.know,s="已添加",i=!1,u=!1):(g=[],w="",s="添加",i=!0,u=!0),void 0==c||""==c?(c="",m="",o=!0,n=!0):(o=!1,n=!1),d=void 0==f||""==f,t.setData({ph_am_hidden:o,ph_en_hidden:n,trans_hidden:d,ph_am:c,ph_en:m,en_mp3:p,am_mp3:h,trans:f,note:w,addTitle:s,wordImages:g,deleteButton:i,boom_hidden:u,addTime:_,searchTimeNew:v,searchTimes:y,know:T})}})}function e(t){var e=t.data.word,a=Array();a.word=e,m.wrequest("createWord",a,function(e){1==e.data.status&&t.setData({deleteButton:!1,addTitle:"已添加"})})}function a(t){var e=t.data.word,a=Array();a.word=e,m.wrequest("updateKnow",a,function(e){var a=e.data;1==a.status&&t.setData({know:a.data})})}function o(e){var a=e.data.word,o=Array();o.word=a,m.wrequest("deleteWord",o,function(a){1==a.data.status&&t(e)})}function n(t){var e=t.data.note,a=t.data.word,o=Array();o.word=a,o.note=e,m.wrequest("updateNote",o,function(t){console.log("not request result->",t)})}function d(e,a){console.log(e);var o=Array();o.imageId=e,m.wrequest("deleteImage",o,function(e){console.log("e",e),1==e.data.status&&t(a)})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\n",a="";return t.forEach(function(t){void 0!==t.parts&&t.parts.forEach(function(t){a=a+t.part+" ",t.means.forEach(function(t){a=a+t+" "}),a+=e})}),a}function i(t){return""!=t.data.word}function s(t){return!!i(t)||(wx.showToast({icon:"none",title:"先输入单词",duration:500}),t.setData({inputFocusWord:!0}),!1)}function u(t){if(0!=t.data.wordImages)return!0;var e=t.data.note;return null!=e&&0!=e.replace(/(^\s*)|(\s*$)/g,"").length}var c=require("../../utils/init.js"),m=require("../../utils/wapi.js"),l=require("../../utils/util.js");Page({data:{tips:!0,word:"",inputWord:"",note:"",ph_en:"",ph_am:"",ph_en_hidden:!0,ph_am_hidden:!0,en_mp3:"",am_mp3:"",trans:"",trans_hidden:!0,imageSrc:"",addTitle:"添加",deleteButton:!0,wordImages:[],inputFocusWord:!1,boom_hidden:!0,addTime:"",searchTimeNew:"",searchTimes:"",know:""},chooseImage:function(e){if(s(this)){var a=this;wx.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var o=e.tempFilePaths;wx.uploadFile({url:c.getApiUrl(),filePath:o[0],name:"image",method:"POST",formData:{client_type:2,method:"addImage",token:wx.getStorageSync("token"),word:a.data.word},success:function(e){console.log("success----",e),t(a)},fail:function(t){console.log("fail----")}})}})}},onLoad:function(e){console.log("options--\x3e",e),"wordList"==e.from&&(this.setData({word:e.word,inputWord:e.word}),t(this))},onShow:function(){},bindinputWord:function(e){this.setData({word:e.detail.value}),t(this)},bindtapAddWord:function(t){s(this)&&e(this)},bindtapDeleteWord:function(t){if(u(this)){var e=this;wx.showModal({title:"单词关联的图片和备注将会一同彻底删除，无法恢复。",success:function(t){t.confirm&&o(e)}})}else o(this)},bindtapVoice:function(t){console.log("voice->",t.currentTarget.dataset.mp3);var e=t.currentTarget.dataset.mp3,a=wx.createInnerAudioContext();a.src=e,a.play()},bindfocusNote:function(t){s(this)},bindinputNote:function(t){s(this)&&(this.setData({note:t.detail.value}),n(this))},bindtapDisplayImage:function(t){var e=t.currentTarget.dataset.url,a=Array();this.data.wordImages.forEach(function(t){a.push(t.image)}),wx.previewImage({current:e,urls:a})},bindtapDeleteImage:function(t){console.log("delete",t.currentTarget.dataset.imageid),d(t.currentTarget.dataset.imageid,this)},bindtapKnow:function(t){a(this)}}); 
 			}); 	require("pages/wordAdd/wordAdd.js");
 		__wxRoute = 'pages/wordDetail/wordDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/wordDetail/wordDetail.js';	define("pages/wordDetail/wordDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/wordDetail/wordDetail.js");
 		__wxRoute = 'pages/wordList/wordList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/wordList/wordList.js';	define("pages/wordList/wordList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var o=Array();o.order=" wddcb_user_word.update_date ",o.from=t.data.start,o.count=t.data.length,o.esc="desc",a.wrequest("wordList",o,function(a){console.log("e",a),1==a.data.status&&t.setData({start:t.data.start+t.data.length,wordLists:a.data.data})})}var a=require("../../utils/wapi.js");Page({data:{start:0,length:5e4,wordLists:[]},onLoad:function(t){},onShow:function(){wx.setNavigationBarTitle({title:"单词本"}),t(this)},onPullDownRefresh:function(){this.setData({start:0}),t(this)},onReachBottom:function(){},bindtapWord:function(t){console.log("word--\x3e",t),wx.navigateTo({url:"/pages/wordAdd/wordAdd?from=wordList&word="+t.currentTarget.id})}}); 
 			}); 	require("pages/wordList/wordList.js");
 	