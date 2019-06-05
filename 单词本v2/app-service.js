	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20181105_syb_scopedata*/global.__wcc_version__='v0.5vv_20181105_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
__WXML_GLOBAL__.$gdc = $gdc;
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
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
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
if(typeof(global.modules)==='undefined')global.modules=__WXML_GLOBAL__.modules;f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClose'])
Z([[7],[3,'closeOnClickOverlay']])
Z([3,'van-action-sheet'])
Z([[7],[3,'overlay']])
Z([3,'bottom'])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([[7],[3,'title']])
Z(z[0])
Z([3,'van-action-sheet__close'])
Z([3,'close'])
Z([[7],[3,'actions']])
Z([3,'index'])
Z([3,'onSelect'])
Z([a,[3,'van-action-sheet__item van-hairline--top '],[[2,'?:'],[[2,'||'],[[6],[[7],[3,'item']],[3,'disabled']],[[6],[[7],[3,'item']],[3,'loading']]],[1,'van-action-sheet__item--disabled'],[1,'']],[3,' '],[[2,'||'],[[6],[[7],[3,'item']],[3,'className']],[1,'']]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'openType']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'loading']]])
Z([[6],[[7],[3,'item']],[3,'subname']])
Z([3,'van-action-sheet__loading'])
Z([3,'20px'])
Z([[7],[3,'cancelText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([3,'#38f'])
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
Z([3,'onClick'])
Z([a,[3,'van-badge van-hairline custom-class '],[[2,'?:'],[[7],[3,'active']],[1,'van-badge--active'],[1,'']]])
Z([[7],[3,'info']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([3,'onClick'])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindOpenSetting'])
Z([a,[3,'custom-class van-button '],[[7],[3,'classes']]])
Z([3,'submit'])
Z([[7],[3,'hoverStartTime']])
Z([[7],[3,'hoverStayTime']])
Z([[7],[3,'hoverStopPropagation']])
Z([[7],[3,'id']])
Z([[7],[3,'lang']])
Z([[7],[3,'openType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([[7],[3,'loading']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'type']],[1,'default']],[1,'#c9c9c9'],[1,'#fff']])
Z([3,'loading-class'])
Z([3,'20px'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class van-card '],[[2,'?:'],[[7],[3,'centered']],[1,'van-card--center'],[1,'']]])
Z([3,'onClickThumb'])
Z([3,'van-card__thumb'])
Z([[7],[3,'thumb']])
Z([3,'thumb'])
Z([[7],[3,'tag']])
Z([3,'van-card__tag'])
Z([3,'danger'])
Z([3,'van-card__content'])
Z([[2,'||'],[[2,'||'],[[7],[3,'title']],[[7],[3,'price']]],[[2,'==='],[[7],[3,'price']],[1,0]]])
Z([3,'van-card__row'])
Z([[7],[3,'title']])
Z([[2,'||'],[[7],[3,'price']],[[2,'==='],[[7],[3,'price']],[1,0]]])
Z([3,'title'])
Z([[2,'||'],[[7],[3,'desc']],[[7],[3,'num']]])
Z(z[10])
Z([[7],[3,'desc']])
Z([[7],[3,'num']])
Z([3,'desc'])
Z([3,'tags'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[7],[3,'cellClass']])
Z([[7],[3,'customStyle']])
Z([[7],[3,'icon']])
Z([3,'onIconClick'])
Z([3,'van-cell__left-icon'])
Z(z[3])
Z([3,'icon'])
Z([3,'van-cell__title title-class'])
Z([[7],[3,'titleStyle']])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
Z([3,'title'])
Z([3,'van-cell__value value-class'])
Z([[7],[3,'value']])
Z([[7],[3,'isLink']])
Z([3,'van-cell__right-icon'])
Z([3,'arrow'])
Z([3,'right-icon'])
Z([3,'extra'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-checkbox custom-class'])
Z([3,'toggle'])
Z([3,'van-checkbox__icon-wrap'])
Z([[7],[3,'useIconSlot']])
Z([3,'icon'])
Z([[7],[3,'iconClass']])
Z([3,'icon-class'])
Z([3,'line-height: 20px;'])
Z([3,'success'])
Z([3,'onClickLabel'])
Z([a,[3,'van-checkbox__label van-checkbox__label--'],[[7],[3,'labelPosition']],[3,' label-class']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class demo-block '],[[2,'?:'],[[7],[3,'padding']],[1,'demo-block--padding'],[1,'']]])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClickOverlay'])
Z([[7],[3,'closeOnClickOverlay']])
Z([3,'van-dialog'])
Z([[7],[3,'overlay']])
Z([[7],[3,'show']])
Z([3,'scale'])
Z([[7],[3,'zIndex']])
Z([[7],[3,'title']])
Z([[2,'||'],[[7],[3,'message']],[[7],[3,'useSlot']]])
Z([3,'van-dialog__content'])
Z([[7],[3,'useSlot']])
Z([[7],[3,'message']])
Z([a,[3,'van-hairline--top van-dialog__footer '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCancelButton']],[[7],[3,'showConfirmButton']]],[1,'van-dialog__footer--buttons'],[1,'']]])
Z([[7],[3,'showCancelButton']])
Z([3,'onCancel'])
Z([3,'van-dialog__cancel'])
Z([[6],[[7],[3,'loading']],[3,'cancel']])
Z([3,'large'])
Z([[7],[3,'showConfirmButton']])
Z([3,'onConfirm'])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindOpenSetting'])
Z([3,'van-dialog__confirm'])
Z([[6],[[7],[3,'loading']],[3,'confirm']])
Z([[7],[3,'confirmButtonOpenType']])
Z(z[17])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onIconClicked'])
Z([[7],[3,'border']])
Z([[7],[3,'center']])
Z([3,'van-field'])
Z([[7],[3,'customStyle']])
Z([[7],[3,'leftIcon']])
Z([[7],[3,'isLink']])
Z([[7],[3,'required']])
Z([[7],[3,'label']])
Z([[7],[3,'titleWidth']])
Z([3,'label'])
Z([3,'title'])
Z([a,[3,'van-field__body '],[[2,'?:'],[[2,'==='],[[7],[3,'type']],[1,'textarea']],[1,'van-field__body--textarea'],[1,'']]])
Z([[7],[3,'showClear']])
Z([3,'onClear'])
Z([3,'van-field__clear-root'])
Z([3,'van-field__clear'])
Z([3,'clear'])
Z([[2,'||'],[[7],[3,'icon']],[[7],[3,'useIconSlot']]])
Z([3,'onClickIcon'])
Z([3,'van-field__icon-container'])
Z([[7],[3,'icon']])
Z([a,[3,'van-field__icon '],[[7],[3,'iconClass']]])
Z(z[21])
Z([3,'icon'])
Z([[7],[3,'useButtonSlot']])
Z([3,'button'])
Z([[7],[3,'errorMessage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[7],[3,'classPrefix']],[3,' '],[[7],[3,'classPrefix']],[3,'-'],[[7],[3,'name']]])
Z([a,[[2,'?:'],[[7],[3,'color']],[[2,'+'],[[2,'+'],[1,'color: '],[[7],[3,'color']]],[1,';']],[1,'']],[[2,'?:'],[[7],[3,'size']],[[2,'+'],[[2,'+'],[1,'font-size: '],[[7],[3,'size']]],[1,';']],[1,'']],[[7],[3,'customStyle']]])
Z([[2,'!=='],[[7],[3,'info']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item in 12'])
Z([[7],[3,'index']])
Z([[2,'==='],[[7],[3,'type']],[1,'spinner']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class van-nav-bar van-hairline--bottom '],[[2,'?:'],[[7],[3,'fixed']],[1,'van-nav-bar--fixed'],[1,'']]])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']]])
Z([3,'onClickLeft'])
Z([3,'van-nav-bar__left'])
Z([[2,'||'],[[7],[3,'leftArrow']],[[7],[3,'leftText']]])
Z([[7],[3,'leftArrow']])
Z([3,'van-nav-bar__arrow'])
Z([3,'arrow'])
Z([[7],[3,'leftText']])
Z([3,'left'])
Z([3,'van-nav-bar__title title-class van-ellipsis'])
Z([[7],[3,'title']])
Z([3,'title'])
Z([3,'onClickRight'])
Z([3,'van-nav-bar__right'])
Z([[7],[3,'rightText']])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'onClick'])
Z([a,[3,'custom-class van-notice-bar '],[[2,'?:'],[[7],[3,'hasRightIcon']],[1,'van-notice-bar--within-icon'],[1,'']]])
Z([a,[3,'color: '],[[7],[3,'color']],[3,';background-color: '],[[7],[3,'backgroundColor']]])
Z([[7],[3,'leftIcon']])
Z([[7],[3,'mode']])
Z([[2,'==='],[[7],[3,'mode']],[1,'closeable']])
Z([3,'onClickIcon'])
Z([3,'van-notice-bar__right-icon'])
Z([3,'close'])
Z([[2,'==='],[[7],[3,'mode']],[1,'link']])
Z(z[8])
Z([3,'arrow'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-notify'])
Z([a,[3,'background-color:'],[[7],[3,'backgroundColor']]])
Z([3,'slide-down'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([3,'noop'])
Z([3,'van-overlay'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[2,'?:'],[[7],[3,'mask']],[1,'background-color: rgba(0, 0, 0, .7);'],[1,'']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-panel van-hairline--top-bottom custom-class'])
Z([[2,'||'],[[2,'||'],[[7],[3,'title']],[[7],[3,'desc']]],[[7],[3,'status']]])
Z([[7],[3,'headerClass']])
Z([[7],[3,'desc']])
Z([[7],[3,'title']])
Z([[7],[3,'status']])
Z([3,'van-panel__header-value'])
Z([3,'header'])
Z([[7],[3,'useFooterSlot']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClickOverlay'])
Z([[7],[3,'overlayStyle']])
Z([[2,'&&'],[[7],[3,'overlay']],[[7],[3,'show']]])
Z([[7],[3,'zIndex']])
Z([[7],[3,'inited']])
Z([3,'onAnimationEnd'])
Z([a,[3,'custom-class van-popup '],[[2,'?:'],[[7],[3,'position']],[[2,'+'],[1,'van-popup--'],[[7],[3,'position']]],[1,'']]])
Z([a,[3,'z-index: '],z[3],[3,'; animation-name: van-'],[[2,'||'],[[7],[3,'transition']],[[7],[3,'position']]],[3,'-'],[[7],[3,'type']],[3,'; animation-duration: '],[[7],[3,'duration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none;']],[[7],[3,'customStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'showPivot']],[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-radio custom-class'])
Z([[7],[3,'iconClass']])
Z([3,'icon-class'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'value']],[[7],[3,'name']]],[1,'checked'],[1,'check']])
Z([3,'onClickLabel'])
Z([a,[3,'van-radio__label van-radio__label--'],[[7],[3,'labelPosition']],[3,' label-class']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'van-search custom-class '],[[2,'?:'],[[2,'||'],[[7],[3,'showAction']],[[7],[3,'useActionSlot']]],[1,'van-search--show-action'],[1,'']]])
Z([a,[3,'background: '],[[7],[3,'background']]])
Z([3,'onBlur'])
Z([3,'onChange'])
Z([3,'onSearch'])
Z([3,'onFocus'])
Z([1,false])
Z([3,'search'])
Z([3,'padding: 3px 10px'])
Z([[7],[3,'disabled']])
Z([[7],[3,'focus']])
Z(z[7])
Z([[7],[3,'maxlength']])
Z([[7],[3,'placeholder']])
Z([[7],[3,'readony']])
Z(z[7])
Z([[7],[3,'value']])
Z([[2,'||'],[[7],[3,'showAction']],[[7],[3,'useActionSlot']]])
Z([3,'van-search__action'])
Z([[7],[3,'useActionSlot']])
Z([3,'action'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'steps']])
Z([3,'index'])
Z([a,[3,'van-step van-hairline van-step--'],[[7],[3,'direction']],[3,' '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'status']],[[2,'+'],[1,'van-step--'],[[6],[[7],[3,'item']],[3,'status']]],[1,'']]])
Z([[2,'?:'],[[7],[3,'width']],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'width']]],[1,'px']],[1,'']])
Z([3,'van-step__circle-container'])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'status']],[1,'process']])
Z([[7],[3,'activeColor']])
Z([3,'van-step__active'])
Z([3,'checked'])
Z([[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'steps']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-submit-bar custom-class'])
Z([3,'top'])
Z([[7],[3,'tip']])
Z([3,'tip'])
Z([3,'van-submit-bar__bar bar-class'])
Z([[7],[3,'hasPrice']])
Z([3,'onSubmit'])
Z([a,[3,'van-submit-bar__button '],[[2,'?:'],[[7],[3,'disabled']],[1,'van-submit-bar__button--disabled'],[1,'']]])
Z([3,'button-class'])
Z([[7],[3,'disabled']])
Z([[7],[3,'loading']])
Z([3,'large'])
Z([[7],[3,'buttonType']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'border']])
Z([3,'van-switch-cell'])
Z([[7],[3,'title']])
Z([3,'onChange'])
Z([[7],[3,'checked']])
Z([3,'van-switch-cell__switch'])
Z([[7],[3,'disabled']])
Z([[7],[3,'loading']])
Z([[7],[3,'size']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'van-switch custom-class '],[[2,'?:'],[[7],[3,'checked']],[1,'van-switch--on'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'disabled']],[1,'van-switch--disabled'],[1,'']]])
Z([a,[3,'font-size: '],[[7],[3,'size']],[3,';']])
Z([[7],[3,'loading']])
Z([3,'van-switch__loading'])
Z([3,'50%'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'van-tabbar-item '],[[2,'?:'],[[7],[3,'active']],[1,'van-tabbar-item--active'],[1,'']]])
Z([[2,'?:'],[[7],[3,'count']],[[2,'+'],[[2,'+'],[1,'width: '],[[2,'/'],[1,100],[[7],[3,'count']]]],[1,'%']],[1,'']])
Z([a,[3,'van-tabbar-item__icon '],[[2,'?:'],[[7],[3,'dot']],[1,'van-tabbar-item__icon--dot'],[1,'']]])
Z([[7],[3,'active']])
Z([3,'icon-active'])
Z([3,'icon'])
Z([[7],[3,'icon']])
Z([[7],[3,'info']])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class van-tabs van-tabs--'],[[7],[3,'type']]])
Z([[2,'==='],[[7],[3,'type']],[1,'line']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'mask']])
Z([[2,'&&'],[[7],[3,'show']],[[2,'||'],[[7],[3,'mask']],[[7],[3,'forbidClick']]]])
Z([[7],[3,'zIndex']])
Z([3,'van-toast__container'])
Z([a,[3,'z-index: '],z[2]])
Z([[7],[3,'show']])
Z([3,'noop'])
Z([a,[3,'van-toast van-toast--'],[[2,'?:'],[[2,'==='],[[7],[3,'type']],[1,'text']],[1,'text'],[1,'icon']],[3,' van-toast--'],[[7],[3,'position']]])
Z([[2,'==='],[[7],[3,'type']],[1,'text']])
Z([[2,'==='],[[7],[3,'type']],[1,'loading']])
Z([3,'white'])
Z([3,'van-toast__loading'])
Z([[7],[3,'loadingType']])
Z([3,'van-toast__icon'])
Z([[7],[3,'type']])
Z([[7],[3,'message']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
Z([3,'onAnimationEnd'])
Z([3,'van-transition custom-class'])
Z([a,[3,'animation-name: van-'],[[7],[3,'name']],[3,'-'],[[7],[3,'type']],[3,'; animation-duration: '],[[7],[3,'duration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none;']],[3,' '],[[7],[3,'customStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'subItems']])
Z([3,'item.id'])
Z([3,'onSelectItem'])
Z([a,[3,'tree-select__item van-ellipsis '],[[2,'?:'],[[2,'==='],[[7],[3,'activeId']],[[6],[[7],[3,'item']],[3,'id']]],[1,'tree-select__item--active'],[1,'']]])
Z([[7],[3,'item']])
Z([[2,'==='],[[7],[3,'activeId']],[[6],[[7],[3,'item']],[3,'id']]])
Z([3,'tree-select__selected'])
Z([3,'success'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'animationData']])
Z([3,'wetoast__bd'])
Z([[7],[3,'img']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submit'])
Z([[2,'==='],[[7],[3,'_pageMode']],[[6],[[7],[3,'page_mode']],[3,'group']]])
Z([3,'typeNext'])
Z([3,'onFocus'])
Z([1,true])
Z([3,'next'])
Z([3,'0'])
Z([[2,'==='],[[7],[3,'focusIdx']],[1,0]])
Z([3,'语言'])
Z([3,'language'])
Z([3,'请输入语言'])
Z([[7],[3,'language']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z([3,'1'])
Z([[2,'==='],[[7],[3,'focusIdx']],[1,1]])
Z([3,'分组'])
Z([3,'group'])
Z([3,'请输入分组'])
Z([[7],[3,'group']])
Z([[2,'||'],[[2,'==='],[[7],[3,'_pageMode']],[[6],[[7],[3,'page_mode']],[3,'word']]],[[2,'==='],[[7],[3,'_pageMode']],[[6],[[7],[3,'page_mode']],[3,'meaning']]]])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z([3,'2'])
Z([[2,'==='],[[7],[3,'focusIdx']],[1,2]])
Z([3,'词句'])
Z([3,'word'])
Z([3,'请输入词句'])
Z([[7],[3,'word']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'meanings']])
Z(z[34])
Z(z[23])
Z([3,'addMeaning'])
Z(z[2])
Z(z[3])
Z([3,'meaningInputed'])
Z([3,'reduceMeaning'])
Z(z[4])
Z(z[5])
Z([[7],[3,'index']])
Z([[2,'+'],[[7],[3,'index']],[1,3]])
Z([[2,'==='],[[7],[3,'focusIdx']],[[2,'+'],[[7],[3,'index']],[1,3]]])
Z([[2,'?:'],[[2,'==='],[[2,'+'],[[7],[3,'index']],[1,1]],[[6],[[7],[3,'meanings']],[3,'length']]],[1,'add'],[1,null]])
Z([a,[3,'释义'],[[2,'+'],[[7],[3,'index']],[1,1]]])
Z([3,'delete'])
Z([a,[3,'meaning'],z[46]])
Z([3,'请输入释义'])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'emptyPage']])
Z([3,'language'])
Z([3,'groups'])
Z([[7],[3,'list']])
Z(z[2])
Z([[7],[3,'language']])
Z([3,'index'])
Z([3,'group'])
Z([[7],[3,'groups']])
Z(z[7])
Z([3,'naviToNote'])
Z([[7],[3,'group']])
Z(z[6])
Z([1,true])
Z(z[12])
Z([3,'addLanguage'])
Z([3,'icon'])
Z([3,'add'])
Z([3,'128rpx'])
Z([3,'clickicon'])
Z([[2,'!'],[[7],[3,'emptyPage']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'word_index'])
Z([3,'word'])
Z([[7],[3,'list']])
Z(z[0])
Z([[2,'!'],[[7],[3,'ThisPageIsEmpty']]])
Z([[2,'!=='],[[7],[3,'word_index']],[1,0]])
Z([[6],[[7],[3,'word']],[3,'word']])
Z([3,'meaning_index'])
Z([3,'meaning'])
Z([[6],[[7],[3,'word']],[3,'meanings']])
Z(z[7])
Z([3,'edit'])
Z([[6],[[7],[3,'word']],[3,'_id']])
Z([1,true])
Z([a,[[2,'+'],[[7],[3,'meaning_index']],[1,1]],[3,'. '],[[7],[3,'meaning']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/vant/action-sheet/index.wxml','./components/vant/area/index.wxml','./components/vant/badge-group/index.wxml','./components/vant/badge/index.wxml','./components/vant/button/index.wxml','./components/vant/card/index.wxml','./components/vant/cell-group/index.wxml','./components/vant/cell/index.wxml','./components/vant/checkbox-group/index.wxml','./components/vant/checkbox/index.wxml','./components/vant/col/index.wxml','./components/vant/demo-block/index.wxml','./components/vant/dialog/index.wxml','./components/vant/field/index.wxml','./components/vant/icon/index.wxml','./components/vant/loading/index.wxml','./components/vant/nav-bar/index.wxml','./components/vant/notice-bar/index.wxml','./components/vant/notify/index.wxml','./components/vant/overlay/index.wxml','./components/vant/panel/index.wxml','./components/vant/popup/index.wxml','./components/vant/progress/index.wxml','./components/vant/radio-group/index.wxml','./components/vant/radio/index.wxml','./components/vant/row/index.wxml','./components/vant/search/index.wxml','./components/vant/slider/index.wxml','./components/vant/stepper/index.wxml','./components/vant/steps/index.wxml','./components/vant/submit-bar/index.wxml','./components/vant/switch-cell/index.wxml','./components/vant/switch/index.wxml','./components/vant/tab/index.wxml','./components/vant/tabbar-item/index.wxml','./components/vant/tabbar/index.wxml','./components/vant/tabs/index.wxml','./components/vant/tag/index.wxml','./components/vant/toast/index.wxml','./components/vant/transition/index.wxml','./components/vant/tree-select/index.wxml','./npm/wepy-com-toast/toast.wxml','./pages/edit.wxml','./pages/index.wxml','./pages/note.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'van-popup',['bind:close',0,'closeOnClickOverlay',1,'customClass',1,'overlay',2,'position',3,'show',4,'zIndex',5],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,7,e,s,gg)){xC.wxVkey=1
var fE=_mz(z,'van-icon',['bind:click',8,'customClass',1,'name',2],[],e,s,gg)
_(xC,fE)
}
else{xC.wxVkey=2
var cF=_v()
_(xC,cF)
var hG=function(cI,oH,oJ,gg){
var aL=_mz(z,'button',['bind:tap',13,'class',1,'data-index',2,'openType',3],[],cI,oH,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,17,cI,oH,gg)){tM.wxVkey=1
var eN=_v()
_(tM,eN)
if(_oz(z,18,cI,oH,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
}
else{tM.wxVkey=2
var bO=_mz(z,'van-loading',['customClass',19,'size',1],[],cI,oH,gg)
_(tM,bO)
}
tM.wxXCkey=1
tM.wxXCkey=3
_(oJ,aL)
return oJ
}
cF.wxXCkey=4
_2z(z,11,hG,e,s,gg,cF,'item','index','index')
}
var oD=_v()
_(oB,oD)
if(_oz(z,21,e,s,gg)){oD.wxVkey=1
}
else{oD.wxVkey=2
var oP=_n('slot')
_(oD,oP)
}
xC.wxXCkey=1
xC.wxXCkey=3
xC.wxXCkey=3
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oR=_v()
_(r,oR)
if(_oz(z,0,e,s,gg)){oR.wxVkey=1
var fS=_n('van-loading')
_rz(z,fS,'color',1,e,s,gg)
_(oR,fS)
}
oR.wxXCkey=1
oR.wxXCkey=3
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var hU=_n('slot')
_(r,hU)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cW=_mz(z,'view',['bind:tap',0,'class',1],[],e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,2,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
_(r,cW)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aZ=_mz(z,'button',['appParameter',0,'bind:tap',1,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindopensetting',5,'class',6,'formType',7,'hoverStartTime',8,'hoverStayTime',9,'hoverStopPropagation',10,'id',11,'lang',12,'openType',13,'sendMessageImg',14,'sendMessagePath',15,'sendMessageTitle',16,'sessionFrom',17,'showMessageCard',18],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,20,e,s,gg)){t1.wxVkey=1
var e2=_mz(z,'van-loading',['color',21,'customClass',1,'size',2],[],e,s,gg)
_(t1,e2)
}
else{t1.wxVkey=2
var b3=_n('slot')
_(t1,b3)
}
t1.wxXCkey=1
t1.wxXCkey=3
_(r,aZ)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var x5=_n('view')
_rz(z,x5,'class',0,e,s,gg)
var o6=_mz(z,'view',['bind:tap',1,'class',1],[],e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,3,e,s,gg)){f7.wxVkey=1
}
else{f7.wxVkey=2
var h9=_n('slot')
_rz(z,h9,'name',4,e,s,gg)
_(f7,h9)
}
var c8=_v()
_(o6,c8)
if(_oz(z,5,e,s,gg)){c8.wxVkey=1
var o0=_mz(z,'van-tag',['mark',-1,'customClass',6,'type',1],[],e,s,gg)
_(c8,o0)
}
f7.wxXCkey=1
c8.wxXCkey=1
c8.wxXCkey=3
_(x5,o6)
var cAB=_n('view')
_rz(z,cAB,'class',8,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,9,e,s,gg)){oBB.wxVkey=1
var aDB=_n('view')
_rz(z,aDB,'class',10,e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,11,e,s,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,12,e,s,gg)){eFB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
_(oBB,aDB)
}
else{oBB.wxVkey=2
var bGB=_n('slot')
_rz(z,bGB,'name',13,e,s,gg)
_(oBB,bGB)
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,14,e,s,gg)){lCB.wxVkey=1
var oHB=_n('view')
_rz(z,oHB,'class',15,e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,16,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(oHB,oJB)
if(_oz(z,17,e,s,gg)){oJB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
_(lCB,oHB)
}
else{lCB.wxVkey=2
var fKB=_n('slot')
_rz(z,fKB,'name',18,e,s,gg)
_(lCB,fKB)
}
var cLB=_n('slot')
_rz(z,cLB,'name',19,e,s,gg)
_(cAB,cLB)
oBB.wxXCkey=1
lCB.wxXCkey=1
_(x5,cAB)
var hMB=_n('slot')
_rz(z,hMB,'name',20,e,s,gg)
_(x5,hMB)
_(r,x5)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cOB=_n('slot')
_(r,cOB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lQB=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,3,e,s,gg)){aRB.wxVkey=1
var eTB=_mz(z,'van-icon',['bind:tap',4,'customClass',1,'name',2],[],e,s,gg)
_(aRB,eTB)
}
else{aRB.wxVkey=2
var bUB=_n('slot')
_rz(z,bUB,'name',7,e,s,gg)
_(aRB,bUB)
}
var oVB=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,10,e,s,gg)){xWB.wxVkey=1
var oXB=_v()
_(xWB,oXB)
if(_oz(z,11,e,s,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
}
else{xWB.wxVkey=2
var fYB=_n('slot')
_rz(z,fYB,'name',12,e,s,gg)
_(xWB,fYB)
}
xWB.wxXCkey=1
_(lQB,oVB)
var cZB=_n('view')
_rz(z,cZB,'class',13,e,s,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,14,e,s,gg)){h1B.wxVkey=1
}
else{h1B.wxVkey=2
var o2B=_n('slot')
_(h1B,o2B)
}
h1B.wxXCkey=1
_(lQB,cZB)
var tSB=_v()
_(lQB,tSB)
if(_oz(z,15,e,s,gg)){tSB.wxVkey=1
var c3B=_mz(z,'van-icon',['customClass',16,'name',1],[],e,s,gg)
_(tSB,c3B)
}
else{tSB.wxVkey=2
var o4B=_n('slot')
_rz(z,o4B,'name',18,e,s,gg)
_(tSB,o4B)
}
var l5B=_n('slot')
_rz(z,l5B,'name',19,e,s,gg)
_(lQB,l5B)
aRB.wxXCkey=1
aRB.wxXCkey=3
tSB.wxXCkey=1
tSB.wxXCkey=3
_(r,lQB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var t7B=_n('slot')
_(r,t7B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var b9B=_n('view')
_rz(z,b9B,'class',0,e,s,gg)
var o0B=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,3,e,s,gg)){xAC.wxVkey=1
var oBC=_n('slot')
_rz(z,oBC,'name',4,e,s,gg)
_(xAC,oBC)
}
else{xAC.wxVkey=2
var fCC=_mz(z,'van-icon',['class',5,'customClass',1,'customStyle',2,'name',3],[],e,s,gg)
_(xAC,fCC)
}
xAC.wxXCkey=1
xAC.wxXCkey=3
_(b9B,o0B)
var cDC=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var hEC=_n('slot')
_(cDC,hEC)
_(b9B,cDC)
_(r,b9B)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cGC=_n('slot')
_(r,cGC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var lIC=_n('view')
_rz(z,lIC,'class',0,e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,1,e,s,gg)){aJC.wxVkey=1
}
var tKC=_n('slot')
_(lIC,tKC)
aJC.wxXCkey=1
_(r,lIC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var bMC=_mz(z,'van-popup',['bind:close',0,'closeOnClickOverlay',1,'customClass',1,'overlay',2,'show',3,'transition',4,'zIndex',5],[],e,s,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,7,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,8,e,s,gg)){xOC.wxVkey=1
var oPC=_n('view')
_rz(z,oPC,'class',9,e,s,gg)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,10,e,s,gg)){fQC.wxVkey=1
var cRC=_n('slot')
_(fQC,cRC)
}
else if(_oz(z,11,e,s,gg)){fQC.wxVkey=2
}
fQC.wxXCkey=1
_(xOC,oPC)
}
var hSC=_n('view')
_rz(z,hSC,'class',12,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,13,e,s,gg)){oTC.wxVkey=1
var oVC=_mz(z,'van-button',['bind:click',14,'customClass',1,'loading',2,'size',3],[],e,s,gg)
_(oTC,oVC)
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,18,e,s,gg)){cUC.wxVkey=1
var lWC=_mz(z,'van-button',['bind:click',19,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindopensetting',5,'customClass',6,'loading',7,'openType',8,'size',9],[],e,s,gg)
_(cUC,lWC)
}
oTC.wxXCkey=1
oTC.wxXCkey=3
cUC.wxXCkey=1
cUC.wxXCkey=3
_(bMC,hSC)
oNC.wxXCkey=1
xOC.wxXCkey=1
_(r,bMC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var tYC=_mz(z,'van-cell',['bind:iconClicked',0,'border',1,'center',1,'customClass',2,'customStyle',3,'icon',4,'isLink',5,'required',6,'title',7,'titleWidth',8],[],e,s,gg)
var b1C=_mz(z,'slot',['name',10,'slot',1],[],e,s,gg)
_(tYC,b1C)
var o2C=_n('view')
_rz(z,o2C,'class',12,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,13,e,s,gg)){x3C.wxVkey=1
var c6C=_mz(z,'van-icon',['bind:touchstart',14,'class',1,'customClass',2,'name',3],[],e,s,gg)
_(x3C,c6C)
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,18,e,s,gg)){o4C.wxVkey=1
var h7C=_mz(z,'view',['bind:tap',19,'class',1],[],e,s,gg)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,21,e,s,gg)){o8C.wxVkey=1
var c9C=_mz(z,'van-icon',['customClass',22,'name',1],[],e,s,gg)
_(o8C,c9C)
}
else{o8C.wxVkey=2
var o0C=_n('slot')
_rz(z,o0C,'name',24,e,s,gg)
_(o8C,o0C)
}
o8C.wxXCkey=1
o8C.wxXCkey=3
_(o4C,h7C)
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,25,e,s,gg)){f5C.wxVkey=1
var lAD=_n('slot')
_rz(z,lAD,'name',26,e,s,gg)
_(f5C,lAD)
}
x3C.wxXCkey=1
x3C.wxXCkey=3
o4C.wxXCkey=1
o4C.wxXCkey=3
f5C.wxXCkey=1
_(tYC,o2C)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,27,e,s,gg)){eZC.wxVkey=1
}
eZC.wxXCkey=1
_(r,tYC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var tCD=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,3,e,s,gg)){eDD.wxVkey=1
}
eDD.wxXCkey=1
_(r,tCD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oFD=_v()
_(r,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_v()
_(cJD,oLD)
if(_oz(z,2,fID,oHD,gg)){oLD.wxVkey=1
}
oLD.wxXCkey=1
return cJD
}
oFD.wxXCkey=2
_2z(z,0,xGD,e,s,gg,oFD,'item','index','{{ index }}')
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oND=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var lOD=_mz(z,'view',['bind:tap',2,'class',1],[],e,s,gg)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,4,e,s,gg)){aPD.wxVkey=1
var tQD=_v()
_(aPD,tQD)
if(_oz(z,5,e,s,gg)){tQD.wxVkey=1
var bSD=_mz(z,'van-icon',['customClass',6,'name',1],[],e,s,gg)
_(tQD,bSD)
}
var eRD=_v()
_(aPD,eRD)
if(_oz(z,8,e,s,gg)){eRD.wxVkey=1
}
tQD.wxXCkey=1
tQD.wxXCkey=3
eRD.wxXCkey=1
}
else{aPD.wxVkey=2
var oTD=_n('slot')
_rz(z,oTD,'name',9,e,s,gg)
_(aPD,oTD)
}
aPD.wxXCkey=1
aPD.wxXCkey=3
_(oND,lOD)
var xUD=_n('view')
_rz(z,xUD,'class',10,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,11,e,s,gg)){oVD.wxVkey=1
}
else{oVD.wxVkey=2
var fWD=_n('slot')
_rz(z,fWD,'name',12,e,s,gg)
_(oVD,fWD)
}
oVD.wxXCkey=1
_(oND,xUD)
var cXD=_mz(z,'view',['bind:tap',13,'class',1],[],e,s,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,15,e,s,gg)){hYD.wxVkey=1
}
else{hYD.wxVkey=2
var oZD=_n('slot')
_rz(z,oZD,'name',16,e,s,gg)
_(hYD,oZD)
}
hYD.wxXCkey=1
_(oND,cXD)
_(r,oND)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var o2D=_v()
_(r,o2D)
if(_oz(z,0,e,s,gg)){o2D.wxVkey=1
var l3D=_mz(z,'view',['bind:tap',1,'class',1,'style',2],[],e,s,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,4,e,s,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(l3D,t5D)
if(_oz(z,5,e,s,gg)){t5D.wxVkey=1
var e6D=_v()
_(t5D,e6D)
if(_oz(z,6,e,s,gg)){e6D.wxVkey=1
var o8D=_mz(z,'van-icon',['bind:tap',7,'class',1,'name',2],[],e,s,gg)
_(e6D,o8D)
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,10,e,s,gg)){b7D.wxVkey=1
var x9D=_mz(z,'van-icon',['class',11,'name',1],[],e,s,gg)
_(b7D,x9D)
}
e6D.wxXCkey=1
e6D.wxXCkey=3
b7D.wxXCkey=1
b7D.wxXCkey=3
}
a4D.wxXCkey=1
t5D.wxXCkey=1
t5D.wxXCkey=3
_(o2D,l3D)
}
o2D.wxXCkey=1
o2D.wxXCkey=3
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var fAE=_mz(z,'van-transition',['customClass',0,'customStyle',1,'name',1,'show',2],[],e,s,gg)
_(r,fAE)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var hCE=_mz(z,'van-transition',['bind:tap',0,'catch:touchmove',1,'customClass',1,'customStyle',2,'show',3],[],e,s,gg)
_(r,hCE)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cEE=_n('view')
_rz(z,cEE,'class',0,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,1,e,s,gg)){oFE.wxVkey=1
var aHE=_mz(z,'van-cell',['customClass',2,'label',1,'title',2,'value',3,'valueClass',4],[],e,s,gg)
_(oFE,aHE)
}
else{oFE.wxVkey=2
var tIE=_n('slot')
_rz(z,tIE,'name',7,e,s,gg)
_(oFE,tIE)
}
var eJE=_n('slot')
_(cEE,eJE)
var lGE=_v()
_(cEE,lGE)
if(_oz(z,8,e,s,gg)){lGE.wxVkey=1
var bKE=_n('slot')
_rz(z,bKE,'name',9,e,s,gg)
_(lGE,bKE)
}
oFE.wxXCkey=1
oFE.wxXCkey=3
lGE.wxXCkey=1
_(r,cEE)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oNE=_mz(z,'van-overlay',['mask',-1,'bind:click',0,'customStyle',1,'show',1,'zIndex',2],[],e,s,gg)
_(r,oNE)
var xME=_v()
_(r,xME)
if(_oz(z,4,e,s,gg)){xME.wxVkey=1
var fOE=_mz(z,'view',['bind:animationend',5,'class',1,'style',2],[],e,s,gg)
var cPE=_n('slot')
_(fOE,cPE)
_(xME,fOE)
}
xME.wxXCkey=1
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oRE=_v()
_(r,oRE)
if(_oz(z,0,e,s,gg)){oRE.wxVkey=1
}
oRE.wxXCkey=1
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oTE=_n('slot')
_(r,oTE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var aVE=_n('view')
_rz(z,aVE,'class',0,e,s,gg)
var tWE=_mz(z,'van-icon',['class',1,'customClass',1,'name',2],[],e,s,gg)
_(aVE,tWE)
var eXE=_mz(z,'view',['bindtap',4,'class',1],[],e,s,gg)
var bYE=_n('slot')
_(eXE,bYE)
_(aVE,eXE)
_(r,aVE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var x1E=_n('slot')
_(r,x1E)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var f3E=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var h5E=_mz(z,'van-field',['clearable',-1,'bind:blur',2,'bind:change',1,'bind:confirm',2,'bind:focus',3,'border',4,'confirmType',5,'customStyle',6,'disabled',7,'focus',8,'leftIcon',9,'maxlength',10,'placeholder',11,'readonly',12,'type',13,'value',14],[],e,s,gg)
_(f3E,h5E)
var c4E=_v()
_(f3E,c4E)
if(_oz(z,17,e,s,gg)){c4E.wxVkey=1
var o6E=_n('view')
_rz(z,o6E,'class',18,e,s,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,19,e,s,gg)){c7E.wxVkey=1
var o8E=_n('slot')
_rz(z,o8E,'name',20,e,s,gg)
_(c7E,o8E)
}
else{c7E.wxVkey=2
}
c7E.wxXCkey=1
_(c4E,o6E)
}
c4E.wxXCkey=1
_(r,f3E)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var eBF=_v()
_(r,eBF)
var bCF=function(xEF,oDF,oFF,gg){
var cHF=_mz(z,'view',['class',2,'style',1],[],xEF,oDF,gg)
var oJF=_n('view')
_rz(z,oJF,'class',4,xEF,oDF,gg)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,5,xEF,oDF,gg)){cKF.wxVkey=1
}
else{cKF.wxVkey=2
var oLF=_mz(z,'van-icon',['color',6,'customClass',1,'name',2],[],xEF,oDF,gg)
_(cKF,oLF)
}
cKF.wxXCkey=1
cKF.wxXCkey=3
_(cHF,oJF)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,9,xEF,oDF,gg)){hIF.wxVkey=1
}
hIF.wxXCkey=1
_(oFF,cHF)
return oFF
}
eBF.wxXCkey=4
_2z(z,0,bCF,e,s,gg,eBF,'item','index','index')
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var aNF=_n('view')
_rz(z,aNF,'class',0,e,s,gg)
var ePF=_n('slot')
_rz(z,ePF,'name',1,e,s,gg)
_(aNF,ePF)
var tOF=_v()
_(aNF,tOF)
if(_oz(z,2,e,s,gg)){tOF.wxVkey=1
var bQF=_n('slot')
_rz(z,bQF,'name',3,e,s,gg)
_(tOF,bQF)
}
var oRF=_n('view')
_rz(z,oRF,'class',4,e,s,gg)
var oTF=_n('slot')
_(oRF,oTF)
var xSF=_v()
_(oRF,xSF)
if(_oz(z,5,e,s,gg)){xSF.wxVkey=1
}
var fUF=_mz(z,'van-button',['square',-1,'bind:click',6,'class',1,'customClass',2,'disabled',3,'loading',4,'size',5,'type',6],[],e,s,gg)
_(oRF,fUF)
xSF.wxXCkey=1
_(aNF,oRF)
tOF.wxXCkey=1
_(r,aNF)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var hWF=_mz(z,'van-cell',['center',-1,'border',0,'customClass',1,'title',1],[],e,s,gg)
var oXF=_mz(z,'van-switch',['bind:change',3,'checked',1,'customClass',2,'disabled',3,'loading',4,'size',5],[],e,s,gg)
_(hWF,oXF)
_(r,hWF)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oZF=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,3,e,s,gg)){l1F.wxVkey=1
var a2F=_mz(z,'van-loading',['customClass',4,'size',1],[],e,s,gg)
_(l1F,a2F)
}
l1F.wxXCkey=1
l1F.wxXCkey=3
_(r,oZF)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var e4F=_v()
_(r,e4F)
if(_oz(z,0,e,s,gg)){e4F.wxVkey=1
var b5F=_n('slot')
_(e4F,b5F)
}
e4F.wxXCkey=1
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var x7F=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var o8F=_n('view')
_rz(z,o8F,'class',3,e,s,gg)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,4,e,s,gg)){f9F.wxVkey=1
var hAG=_n('slot')
_rz(z,hAG,'name',5,e,s,gg)
_(f9F,hAG)
}
else{f9F.wxVkey=2
var oBG=_n('slot')
_rz(z,oBG,'name',6,e,s,gg)
_(f9F,oBG)
}
var c0F=_v()
_(o8F,c0F)
if(_oz(z,7,e,s,gg)){c0F.wxVkey=1
var cCG=_mz(z,'van-icon',['info',8,'name',1],[],e,s,gg)
_(c0F,cCG)
}
f9F.wxXCkey=1
c0F.wxXCkey=1
c0F.wxXCkey=3
_(x7F,o8F)
var oDG=_n('slot')
_(x7F,oDG)
_(r,x7F)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var aFG=_n('slot')
_(r,aFG)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var eHG=_n('view')
_rz(z,eHG,'class',0,e,s,gg)
var bIG=_v()
_(eHG,bIG)
if(_oz(z,1,e,s,gg)){bIG.wxVkey=1
}
var oJG=_n('slot')
_(eHG,oJG)
bIG.wxXCkey=1
_(r,eHG)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oLG=_n('slot')
_(r,oLG)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cNG=_mz(z,'van-overlay',['mask',0,'show',1,'zIndex',1],[],e,s,gg)
_(r,cNG)
var hOG=_mz(z,'van-transition',['customClass',3,'customStyle',1,'show',2],[],e,s,gg)
var oPG=_mz(z,'view',['catch:touchmove',6,'class',1],[],e,s,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,8,e,s,gg)){cQG.wxVkey=1
}
else{cQG.wxVkey=2
var oRG=_v()
_(cQG,oRG)
if(_oz(z,9,e,s,gg)){oRG.wxVkey=1
var aTG=_mz(z,'van-loading',['color',10,'customClass',1,'type',2],[],e,s,gg)
_(oRG,aTG)
}
else{oRG.wxVkey=2
var tUG=_mz(z,'van-icon',['class',13,'name',1],[],e,s,gg)
_(oRG,tUG)
}
var lSG=_v()
_(cQG,lSG)
if(_oz(z,15,e,s,gg)){lSG.wxVkey=1
}
oRG.wxXCkey=1
oRG.wxXCkey=3
oRG.wxXCkey=3
lSG.wxXCkey=1
}
cQG.wxXCkey=1
cQG.wxXCkey=3
_(hOG,oPG)
_(r,hOG)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var bWG=_v()
_(r,bWG)
if(_oz(z,0,e,s,gg)){bWG.wxVkey=1
var oXG=_mz(z,'view',['bind:animationend',1,'class',1,'style',2],[],e,s,gg)
var xYG=_n('slot')
_(oXG,xYG)
_(bWG,oXG)
}
bWG.wxXCkey=1
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var f1G=_v()
_(r,f1G)
var c2G=function(o4G,h3G,c5G,gg){
var l7G=_mz(z,'view',['bind:tap',2,'class',1,'data-item',2],[],o4G,h3G,gg)
var a8G=_v()
_(l7G,a8G)
if(_oz(z,5,o4G,h3G,gg)){a8G.wxVkey=1
var t9G=_mz(z,'van-icon',['class',6,'name',1],[],o4G,h3G,gg)
_(a8G,t9G)
}
a8G.wxXCkey=1
a8G.wxXCkey=3
_(c5G,l7G)
return c5G
}
f1G.wxXCkey=4
_2z(z,0,c2G,e,s,gg,f1G,'item','index','item.id')
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var bAH=_mz(z,'view',['animation',0,'class',1],[],e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,2,e,s,gg)){oBH.wxVkey=1
}
var xCH=_v()
_(bAH,xCH)
if(_oz(z,3,e,s,gg)){xCH.wxVkey=1
}
oBH.wxXCkey=1
xCH.wxXCkey=1
_(r,bAH)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var fEH=_n('form')
_rz(z,fEH,'bindsubmit',0,e,s,gg)
var cFH=_n('van-cell-group')
var hGH=_v()
_(cFH,hGH)
if(_oz(z,1,e,s,gg)){hGH.wxVkey=1
var oJH=_mz(z,'van-field',['bindconfirm',2,'bindfocus',1,'clearable',2,'confirmType',3,'data-wpyonfocus-a',4,'focus',5,'label',6,'name',7,'placeholder',8,'value',9],[],e,s,gg)
_(hGH,oJH)
}
var oHH=_v()
_(cFH,oHH)
if(_oz(z,12,e,s,gg)){oHH.wxVkey=1
var lKH=_mz(z,'van-field',['bindconfirm',13,'bindfocus',1,'clearable',2,'confirmType',3,'data-wpyonfocus-a',4,'focus',5,'label',6,'name',7,'placeholder',8,'value',9],[],e,s,gg)
_(oHH,lKH)
}
var cIH=_v()
_(cFH,cIH)
if(_oz(z,23,e,s,gg)){cIH.wxVkey=1
var aLH=_mz(z,'van-field',['bindconfirm',24,'bindfocus',1,'clearable',2,'confirmType',3,'data-wpyonfocus-a',4,'focus',5,'label',6,'name',7,'placeholder',8,'value',9],[],e,s,gg)
_(cIH,aLH)
}
var tMH=_v()
_(cFH,tMH)
var eNH=function(oPH,bOH,xQH,gg){
var fSH=_v()
_(xQH,fSH)
if(_oz(z,38,oPH,bOH,gg)){fSH.wxVkey=1
var cTH=_mz(z,'van-field',['bindclickicon',39,'bindconfirm',1,'bindfocus',2,'bindinput',3,'bindleftIconClicked',4,'clearable',5,'confirmType',6,'data-idx',7,'data-wpyonfocus-a',8,'focus',9,'icon',10,'label',11,'leftIcon',12,'name',13,'placeholder',14,'value',15],[],oPH,bOH,gg)
_(fSH,cTH)
}
fSH.wxXCkey=1
fSH.wxXCkey=3
return xQH
}
tMH.wxXCkey=4
_2z(z,36,eNH,e,s,gg,tMH,'item','index','index')
hGH.wxXCkey=1
hGH.wxXCkey=3
oHH.wxXCkey=1
oHH.wxXCkey=3
cIH.wxXCkey=1
cIH.wxXCkey=3
_(fEH,cFH)
_(r,fEH)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oVH=_n('view')
_rz(z,oVH,'class',0,e,s,gg)
var cWH=_v()
_(oVH,cWH)
if(_oz(z,1,e,s,gg)){cWH.wxVkey=1
}
var lYH=_v()
_(oVH,lYH)
var aZH=function(e2H,t1H,b3H,gg){
var x5H=_n('demo-block')
_rz(z,x5H,'title',6,e2H,t1H,gg)
var o6H=_n('van-cell-group')
var f7H=_v()
_(o6H,f7H)
var c8H=function(o0H,h9H,cAI,gg){
var lCI=_mz(z,'van-cell',['bindtap',11,'data-group',1,'data-lan',2,'isLink',3,'title',4],[],o0H,h9H,gg)
_(cAI,lCI)
return cAI
}
f7H.wxXCkey=4
_2z(z,9,c8H,e2H,t1H,gg,f7H,'group','index','index')
_(x5H,o6H)
_(b3H,x5H)
return b3H
}
lYH.wxXCkey=4
_2z(z,4,aZH,e,s,gg,lYH,'groups','language','language')
var aDI=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var tEI=_mz(z,'van-icon',['name',18,'size',1,'v-on:click-icon',2],[],e,s,gg)
_(aDI,tEI)
_(oVH,aDI)
var oXH=_v()
_(oVH,oXH)
if(_oz(z,21,e,s,gg)){oXH.wxVkey=1
}
cWH.wxXCkey=1
oXH.wxXCkey=1
_(r,oVH)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var bGI=_v()
_(r,bGI)
var oHI=function(oJI,xII,fKI,gg){
var hMI=_v()
_(fKI,hMI)
if(_oz(z,4,oJI,xII,gg)){hMI.wxVkey=1
var oNI=_v()
_(hMI,oNI)
if(_oz(z,5,oJI,xII,gg)){oNI.wxVkey=1
var cOI=_n('demo-block')
_rz(z,cOI,'title',6,oJI,xII,gg)
var oPI=_n('van-cell-group')
var lQI=_v()
_(oPI,lQI)
var aRI=function(eTI,tSI,bUI,gg){
var xWI=_mz(z,'van-cell',['bindtap',11,'data-_id',1,'isLink',2,'title',3],[],eTI,tSI,gg)
_(bUI,xWI)
return bUI
}
lQI.wxXCkey=4
_2z(z,9,aRI,oJI,xII,gg,lQI,'meaning','meaning_index','meaning_index')
_(cOI,oPI)
_(oNI,cOI)
}
oNI.wxXCkey=1
oNI.wxXCkey=3
}
hMI.wxXCkey=1
hMI.wxXCkey=3
return fKI
}
bGI.wxXCkey=4
_2z(z,2,oHI,e,s,gg,bGI,'word','word_index','word_index')
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['components/vant/action-sheet/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-popup":"../popup/index","van-loading":"../loading/index"}};
		__wxAppCode__['components/vant/action-sheet/index.wxml'] = $gwx( './components/vant/action-sheet/index.wxml' );
		__wxAppCode__['components/vant/area/index.json'] = {"component":true,"usingComponents":{"van-loading":"../loading/index"}};
		__wxAppCode__['components/vant/area/index.wxml'] = $gwx( './components/vant/area/index.wxml' );
		__wxAppCode__['components/vant/badge-group/index.json'] = {"component":true};
		__wxAppCode__['components/vant/badge-group/index.wxml'] = $gwx( './components/vant/badge-group/index.wxml' );
		__wxAppCode__['components/vant/badge/index.json'] = {"component":true};
		__wxAppCode__['components/vant/badge/index.wxml'] = $gwx( './components/vant/badge/index.wxml' );
		__wxAppCode__['components/vant/button/index.json'] = {"component":true,"usingComponents":{"van-loading":"../loading/index"}};
		__wxAppCode__['components/vant/button/index.wxml'] = $gwx( './components/vant/button/index.wxml' );
		__wxAppCode__['components/vant/card/index.json'] = {"component":true,"usingComponents":{"van-tag":"../tag/index"}};
		__wxAppCode__['components/vant/card/index.wxml'] = $gwx( './components/vant/card/index.wxml' );
		__wxAppCode__['components/vant/cell-group/index.json'] = {"component":true};
		__wxAppCode__['components/vant/cell-group/index.wxml'] = $gwx( './components/vant/cell-group/index.wxml' );
		__wxAppCode__['components/vant/cell/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/cell/index.wxml'] = $gwx( './components/vant/cell/index.wxml' );
		__wxAppCode__['components/vant/checkbox-group/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/checkbox-group/index.wxml'] = $gwx( './components/vant/checkbox-group/index.wxml' );
		__wxAppCode__['components/vant/checkbox/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/checkbox/index.wxml'] = $gwx( './components/vant/checkbox/index.wxml' );
		__wxAppCode__['components/vant/col/index.json'] = {"component":true};
		__wxAppCode__['components/vant/col/index.wxml'] = $gwx( './components/vant/col/index.wxml' );
		__wxAppCode__['components/vant/demo-block/index.json'] = {"component":true};
		__wxAppCode__['components/vant/demo-block/index.wxml'] = $gwx( './components/vant/demo-block/index.wxml' );
		__wxAppCode__['components/vant/dialog/index.json'] = {"component":true,"usingComponents":{"van-popup":"../popup/index","van-button":"../button/index"}};
		__wxAppCode__['components/vant/dialog/index.wxml'] = $gwx( './components/vant/dialog/index.wxml' );
		__wxAppCode__['components/vant/field/index.json'] = {"component":true,"usingComponents":{"van-cell":"../cell/index","van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/field/index.wxml'] = $gwx( './components/vant/field/index.wxml' );
		__wxAppCode__['components/vant/icon/index.json'] = {"component":true};
		__wxAppCode__['components/vant/icon/index.wxml'] = $gwx( './components/vant/icon/index.wxml' );
		__wxAppCode__['components/vant/loading/index.json'] = {"component":true};
		__wxAppCode__['components/vant/loading/index.wxml'] = $gwx( './components/vant/loading/index.wxml' );
		__wxAppCode__['components/vant/nav-bar/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/nav-bar/index.wxml'] = $gwx( './components/vant/nav-bar/index.wxml' );
		__wxAppCode__['components/vant/notice-bar/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/notice-bar/index.wxml'] = $gwx( './components/vant/notice-bar/index.wxml' );
		__wxAppCode__['components/vant/notify/index.json'] = {"component":true,"usingComponents":{"van-transition":"../transition/index"}};
		__wxAppCode__['components/vant/notify/index.wxml'] = $gwx( './components/vant/notify/index.wxml' );
		__wxAppCode__['components/vant/overlay/index.json'] = {"component":true,"usingComponents":{"van-transition":"../transition/index"}};
		__wxAppCode__['components/vant/overlay/index.wxml'] = $gwx( './components/vant/overlay/index.wxml' );
		__wxAppCode__['components/vant/panel/index.json'] = {"component":true,"usingComponents":{"van-cell":"../cell/index"}};
		__wxAppCode__['components/vant/panel/index.wxml'] = $gwx( './components/vant/panel/index.wxml' );
		__wxAppCode__['components/vant/popup/index.json'] = {"component":true,"usingComponents":{"van-overlay":"../overlay/index"}};
		__wxAppCode__['components/vant/popup/index.wxml'] = $gwx( './components/vant/popup/index.wxml' );
		__wxAppCode__['components/vant/progress/index.json'] = {"component":true};
		__wxAppCode__['components/vant/progress/index.wxml'] = $gwx( './components/vant/progress/index.wxml' );
		__wxAppCode__['components/vant/radio-group/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/radio-group/index.wxml'] = $gwx( './components/vant/radio-group/index.wxml' );
		__wxAppCode__['components/vant/radio/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/radio/index.wxml'] = $gwx( './components/vant/radio/index.wxml' );
		__wxAppCode__['components/vant/row/index.json'] = {"component":true};
		__wxAppCode__['components/vant/row/index.wxml'] = $gwx( './components/vant/row/index.wxml' );
		__wxAppCode__['components/vant/search/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-field":"../field/index"}};
		__wxAppCode__['components/vant/search/index.wxml'] = $gwx( './components/vant/search/index.wxml' );
		__wxAppCode__['components/vant/slider/index.json'] = {"component":true};
		__wxAppCode__['components/vant/slider/index.wxml'] = $gwx( './components/vant/slider/index.wxml' );
		__wxAppCode__['components/vant/stepper/index.json'] = {"component":true};
		__wxAppCode__['components/vant/stepper/index.wxml'] = $gwx( './components/vant/stepper/index.wxml' );
		__wxAppCode__['components/vant/steps/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/steps/index.wxml'] = $gwx( './components/vant/steps/index.wxml' );
		__wxAppCode__['components/vant/submit-bar/index.json'] = {"component":true,"usingComponents":{"van-button":"../button/index"}};
		__wxAppCode__['components/vant/submit-bar/index.wxml'] = $gwx( './components/vant/submit-bar/index.wxml' );
		__wxAppCode__['components/vant/switch-cell/index.json'] = {"component":true,"usingComponents":{"van-cell":"../cell/index","van-switch":"../switch/index"}};
		__wxAppCode__['components/vant/switch-cell/index.wxml'] = $gwx( './components/vant/switch-cell/index.wxml' );
		__wxAppCode__['components/vant/switch/index.json'] = {"component":true,"usingComponents":{"van-loading":"../loading/index"}};
		__wxAppCode__['components/vant/switch/index.wxml'] = $gwx( './components/vant/switch/index.wxml' );
		__wxAppCode__['components/vant/tab/index.json'] = {"component":true};
		__wxAppCode__['components/vant/tab/index.wxml'] = $gwx( './components/vant/tab/index.wxml' );
		__wxAppCode__['components/vant/tabbar-item/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/tabbar-item/index.wxml'] = $gwx( './components/vant/tabbar-item/index.wxml' );
		__wxAppCode__['components/vant/tabbar/index.json'] = {"component":true};
		__wxAppCode__['components/vant/tabbar/index.wxml'] = $gwx( './components/vant/tabbar/index.wxml' );
		__wxAppCode__['components/vant/tabs/index.json'] = {"component":true};
		__wxAppCode__['components/vant/tabs/index.wxml'] = $gwx( './components/vant/tabs/index.wxml' );
		__wxAppCode__['components/vant/tag/index.json'] = {"component":true};
		__wxAppCode__['components/vant/tag/index.wxml'] = $gwx( './components/vant/tag/index.wxml' );
		__wxAppCode__['components/vant/toast/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-loading":"../loading/index","van-overlay":"../overlay/index","van-transition":"../transition/index"}};
		__wxAppCode__['components/vant/toast/index.wxml'] = $gwx( './components/vant/toast/index.wxml' );
		__wxAppCode__['components/vant/transition/index.json'] = {"component":true};
		__wxAppCode__['components/vant/transition/index.wxml'] = $gwx( './components/vant/transition/index.wxml' );
		__wxAppCode__['components/vant/tree-select/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		__wxAppCode__['components/vant/tree-select/index.wxml'] = $gwx( './components/vant/tree-select/index.wxml' );
		__wxAppCode__['pages/edit.json'] = {"navigationBarTitleText":"编辑","usingComponents":{"demo-block":"../components/vant/demo-block/index","van-button":"../components/vant/button/index","van-field":"../components/vant/field/index","van-cell":"../components/vant/cell/index","van-cell-group":"../components/vant/cell-group/index"}};
		__wxAppCode__['pages/edit.wxml'] = $gwx( './pages/edit.wxml' );
		__wxAppCode__['pages/index.json'] = {"navigationBarTitleText":"单词本","usingComponents":{"van-icon":"../components/vant/icon/index","demo-block":"../components/vant/demo-block/index","van-cell":"../components/vant/cell/index","van-cell-group":"../components/vant/cell-group/index"}};
		__wxAppCode__['pages/index.wxml'] = $gwx( './pages/index.wxml' );
		__wxAppCode__['pages/note.json'] = {"navigationBarTitleText":"Note","usingComponents":{"demo-block":"../components/vant/demo-block/index","van-cell":"../components/vant/cell/index","van-cell-group":"../components/vant/cell-group/index"}};
		__wxAppCode__['pages/note.wxml'] = $gwx( './pages/note.wxml' );
	
	define("_wepylogs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
console.log('WePY开启错误监控');
 
 			}); 
		define("cloud/dictionary.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _flag = require('./flag.js');

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var success = _flag2.default.success,
    fail = _flag2.default.fail;
var loading = _utils2.default.loading,
    loaded = _utils2.default.loaded;

var Dictionary = function () {
    function Dictionary() {
        _classCallCheck(this, Dictionary);

        wx.cloud.init({
            traceUser: true
        });
        this.instantiateDb();
    }

    _createClass(Dictionary, [{
        key: 'instantiateDb',
        value: function instantiateDb() {
            var db = wx.cloud.database({
                env: 'my-dictionary-f77667'
            });
            this.dict = db.collection('dict');
        }
    }, {
        key: '_getOpenid',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _utils2.default.getOpenid();

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _getOpenid() {
                return _ref.apply(this, arguments);
            }

            return _getOpenid;
        }()
    }, {
        key: 'all',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                loading();
                                _context2.next = 3;
                                return this._getOpenid();

                            case 3:
                                this.openid = _context2.sent;

                                loaded();
                                _context2.next = 7;
                                return this.where();

                            case 7:
                                return _context2.abrupt('return', _context2.sent);

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function all() {
                return _ref2.apply(this, arguments);
            }

            return all;
        }()
    }, {
        key: 'read',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(word) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                loading();
                                _context3.next = 3;
                                return this.dict.doc(word).get();

                            case 3:
                                res = _context3.sent;

                                loaded();
                                return _context3.abrupt('return', res.data);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function read(_x) {
                return _ref3.apply(this, arguments);
            }

            return read;
        }()
    }, {
        key: 'save',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(language, group, word, meanings) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                loading();
                                _context4.next = 3;
                                return this.dict.add({
                                    data: {
                                        word: word,
                                        meanings: meanings,
                                        language: language,
                                        group: group
                                    }
                                });

                            case 3:
                                res = _context4.sent;

                                loaded();

                                if (!(res.errMsg !== 'collection.add:ok')) {
                                    _context4.next = 10;
                                    break;
                                }

                                _utils2.default.toastError();
                                return _context4.abrupt('return', fail);

                            case 10:
                                return _context4.abrupt('return', success);

                            case 11:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function save(_x2, _x3, _x4, _x5) {
                return _ref4.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: 'update',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, data) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                loading();
                                _context5.next = 3;
                                return this.dict.doc(id).update({ data: data });

                            case 3:
                                res = _context5.sent;

                                loaded();
                                return _context5.abrupt('return', success);

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function update(_x6, _x7) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: 'where',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var rule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var result, i, _ref7, data;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                result = [];
                                i = 0;

                                loading();

                            case 3:
                                if (!true) {
                                    _context6.next = 14;
                                    break;
                                }

                                _context6.next = 6;
                                return this.dict.skip(i).where(_extends({}, rule, { _openid: this.openid })).get();

                            case 6:
                                _ref7 = _context6.sent;
                                data = _ref7.data;

                                if (!(data.length === 0)) {
                                    _context6.next = 10;
                                    break;
                                }

                                return _context6.abrupt('break', 14);

                            case 10:
                                result = result.concat(data);
                                i += 20;
                                _context6.next = 3;
                                break;

                            case 14:
                                loaded();
                                return _context6.abrupt('return', result);

                            case 16:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function where() {
                return _ref6.apply(this, arguments);
            }

            return where;
        }()
    }, {
        key: 'deleteWord',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
                var res;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return this.dict.doc(id).remove();

                            case 2:
                                res = _context7.sent;

                                if (!(res.errMsg !== 'document.remove:ok')) {
                                    _context7.next = 8;
                                    break;
                                }

                                _utils2.default.toastError();
                                return _context7.abrupt('return', fail);

                            case 8:
                                return _context7.abrupt('return', success);

                            case 9:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function deleteWord(_x9) {
                return _ref8.apply(this, arguments);
            }

            return deleteWord;
        }()
    }, {
        key: 'deleteGroup',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(rule) {
                var _this = this;

                var data, ids, res;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                /* 需校验openid，否则会删除其他用户的数据 */
                                loading();
                                _context8.next = 3;
                                return this.where(_extends({}, rule));

                            case 3:
                                data = _context8.sent;
                                ids = data.map(function (item) {
                                    return item._id;
                                });
                                _context8.next = 7;
                                return Promise.all(ids.map(function (id) {
                                    return _this.deleteWord(id);
                                }));

                            case 7:
                                res = _context8.sent;

                                loaded();

                                if (!(res.indexOf(false) > -1)) {
                                    _context8.next = 14;
                                    break;
                                }

                                _utils2.default.toastError();
                                return _context8.abrupt('return', fail);

                            case 14:
                                return _context8.abrupt('return', success);

                            case 15:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function deleteGroup(_x10) {
                return _ref9.apply(this, arguments);
            }

            return deleteGroup;
        }()
    }]);

    return Dictionary;
}();

exports.default = new Dictionary();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3Rpb25hcnkuanMiXSwibmFtZXMiOlsic3VjY2VzcyIsImZsYWciLCJmYWlsIiwibG9hZGluZyIsIlV0aWxzIiwibG9hZGVkIiwiRGljdGlvbmFyeSIsInd4IiwiY2xvdWQiLCJpbml0IiwidHJhY2VVc2VyIiwiaW5zdGFudGlhdGVEYiIsImRiIiwiZGF0YWJhc2UiLCJlbnYiLCJkaWN0IiwiY29sbGVjdGlvbiIsImdldE9wZW5pZCIsIl9nZXRPcGVuaWQiLCJvcGVuaWQiLCJ3aGVyZSIsIndvcmQiLCJkb2MiLCJnZXQiLCJyZXMiLCJkYXRhIiwibGFuZ3VhZ2UiLCJncm91cCIsIm1lYW5pbmdzIiwiYWRkIiwiZXJyTXNnIiwidG9hc3RFcnJvciIsImlkIiwidXBkYXRlIiwicnVsZSIsInJlc3VsdCIsImkiLCJza2lwIiwiX29wZW5pZCIsImxlbmd0aCIsImNvbmNhdCIsInJlbW92ZSIsImlkcyIsIm1hcCIsIml0ZW0iLCJfaWQiLCJQcm9taXNlIiwiYWxsIiwiZGVsZXRlV29yZCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ1FBLE8sR0FBa0JDLGMsQ0FBbEJELE87SUFBU0UsSSxHQUFTRCxjLENBQVRDLEk7SUFFYkMsTyxHQUVBQyxlLENBRkFELE87SUFDQUUsTSxHQUNBRCxlLENBREFDLE07O0lBRUVDLFU7QUFDRiwwQkFBYztBQUFBOztBQUNWQyxXQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUNWQyx1QkFBVztBQURELFNBQWQ7QUFHQSxhQUFLQyxhQUFMO0FBQ0g7Ozs7d0NBQ2U7QUFDWixnQkFBTUMsS0FBS0wsR0FBR0MsS0FBSCxDQUFTSyxRQUFULENBQWtCO0FBQ3pCQyxxQkFBSztBQURvQixhQUFsQixDQUFYO0FBR0EsaUJBQUtDLElBQUwsR0FBWUgsR0FBR0ksVUFBSCxDQUFjLE1BQWQsQ0FBWjtBQUNIOzs7Ozs7Ozs7O3VDQUVnQlosZ0JBQU1hLFNBQU4sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2JkOzt1Q0FDb0IsS0FBS2UsVUFBTCxFOzs7QUFBcEIscUNBQUtDLE07O0FBQ0xkOzt1Q0FDYSxLQUFLZSxLQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRU5DLEk7Ozs7OztBQUNQbEI7O3VDQUNrQixLQUFLWSxJQUFMLENBQVVPLEdBQVYsQ0FBY0QsSUFBZCxFQUFvQkUsR0FBcEIsRTs7O0FBQVpDLG1DOztBQUNObkI7a0VBQ09tQixJQUFJQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVKQyxRLEVBQVVDLEssRUFBT04sSSxFQUFNTyxROzs7Ozs7QUFDOUJ6Qjs7dUNBQ2tCLEtBQUtZLElBQUwsQ0FBVWMsR0FBVixDQUFjO0FBQzVCSiwwQ0FBTTtBQUNGSixrREFERTtBQUVGTywwREFGRTtBQUdGRiwwREFIRTtBQUlGQztBQUpFO0FBRHNCLGlDQUFkLEM7OztBQUFaSCxtQzs7QUFRTm5COztzQ0FDSW1CLElBQUlNLE1BQUosS0FBZSxtQjs7Ozs7QUFDZjFCLGdEQUFNMkIsVUFBTjtrRUFDTzdCLEk7OztrRUFFQUYsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FHRmdDLEUsRUFBSVAsSTs7Ozs7O0FBQ2J0Qjs7dUNBQ2tCLEtBQUtZLElBQUwsQ0FBVU8sR0FBVixDQUFjVSxFQUFkLEVBQWtCQyxNQUFsQixDQUF5QixFQUFFUixVQUFGLEVBQXpCLEM7OztBQUFaRCxtQzs7QUFDTm5CO2tFQUNPTCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFFQ2tDLEksdUVBQU8sRTs7Ozs7Ozs7QUFDWEMsc0MsR0FBUyxFO0FBQ1RDLGlDLEdBQUksQzs7QUFDUmpDOzs7cUNBQ08sSTs7Ozs7O3VDQUNvQixLQUFLWSxJQUFMLENBQVVzQixJQUFWLENBQWVELENBQWYsRUFBa0JoQixLQUFsQixjQUE2QmMsSUFBN0IsSUFBbUNJLFNBQVMsS0FBS25CLE1BQWpELEtBQTJESSxHQUEzRCxFOzs7O0FBQWZFLG9DLFNBQUFBLEk7O3NDQUNKQSxLQUFLYyxNQUFMLEtBQWdCLEM7Ozs7Ozs7O0FBQ3BCSix5Q0FBU0EsT0FBT0ssTUFBUCxDQUFjZixJQUFkLENBQVQ7QUFDQVcscUNBQUssRUFBTDs7Ozs7QUFFSi9CO2tFQUNPOEIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FFTUgsRTs7Ozs7Ozt1Q0FDSyxLQUFLakIsSUFBTCxDQUFVTyxHQUFWLENBQWNVLEVBQWQsRUFBa0JTLE1BQWxCLEU7OztBQUFaakIsbUM7O3NDQUNGQSxJQUFJTSxNQUFKLEtBQWUsb0I7Ozs7O0FBQ2YxQixnREFBTTJCLFVBQU47a0VBQ083QixJOzs7a0VBRUFGLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBR0drQyxJOzs7Ozs7OztBQUNkO0FBQ0EvQjs7dUNBQ21CLEtBQUtpQixLQUFMLGNBQ1pjLElBRFksRTs7O0FBQWJULG9DO0FBR0FpQixtQyxHQUFNakIsS0FBS2tCLEdBQUwsQ0FBUztBQUFBLDJDQUFRQyxLQUFLQyxHQUFiO0FBQUEsaUNBQVQsQzs7dUNBQ01DLFFBQVFDLEdBQVIsQ0FBWUwsSUFBSUMsR0FBSixDQUFRO0FBQUEsMkNBQU0sTUFBS0ssVUFBTCxDQUFnQmhCLEVBQWhCLENBQU47QUFBQSxpQ0FBUixDQUFaLEM7OztBQUFaUixtQzs7QUFDTm5COztzQ0FDSW1CLElBQUl5QixPQUFKLENBQVksS0FBWixJQUFxQixDQUFDLEM7Ozs7O0FBQ3RCN0MsZ0RBQU0yQixVQUFOO2tFQUNPN0IsSTs7O2tFQUVBRixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS0osSUFBSU0sVUFBSixFIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgZmxhZyBmcm9tICcuL2ZsYWcuanMnO1xyXG5jb25zdCB7IHN1Y2Nlc3MsIGZhaWwgfSA9IGZsYWc7XHJcbmNvbnN0IHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2FkZWRcclxufSA9IFV0aWxzO1xyXG5jbGFzcyBEaWN0aW9uYXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHd4LmNsb3VkLmluaXQoe1xyXG4gICAgICAgICAgICB0cmFjZVVzZXI6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRlRGIoKVxyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGVEYigpIHtcclxuICAgICAgICBjb25zdCBkYiA9IHd4LmNsb3VkLmRhdGFiYXNlKHtcclxuICAgICAgICAgICAgZW52OiAnbXktZGljdGlvbmFyeS1mNzc2NjcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaWN0ID0gZGIuY29sbGVjdGlvbignZGljdCcpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX2dldE9wZW5pZCgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgVXRpbHMuZ2V0T3BlbmlkKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBhbGwoKSB7XHJcbiAgICAgICAgbG9hZGluZygpO1xyXG4gICAgICAgIHRoaXMub3BlbmlkID0gYXdhaXQgdGhpcy5fZ2V0T3BlbmlkKCk7XHJcbiAgICAgICAgbG9hZGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMud2hlcmUoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVhZCh3b3JkKSB7XHJcbiAgICAgICAgbG9hZGluZygpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGljdC5kb2Mod29yZCkuZ2V0KCk7XHJcbiAgICAgICAgbG9hZGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgICB9XHJcbiAgICBhc3luYyBzYXZlKGxhbmd1YWdlLCBncm91cCwgd29yZCwgbWVhbmluZ3MpIHtcclxuICAgICAgICBsb2FkaW5nKCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0LmFkZCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHdvcmQsXHJcbiAgICAgICAgICAgICAgICBtZWFuaW5ncyxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIGlmIChyZXMuZXJyTXNnICE9PSAnY29sbGVjdGlvbi5hZGQ6b2snKSB7XHJcbiAgICAgICAgICAgIFV0aWxzLnRvYXN0RXJyb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhaWxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZShpZCwgZGF0YSkge1xyXG4gICAgICAgIGxvYWRpbmcoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmRpY3QuZG9jKGlkKS51cGRhdGUoeyBkYXRhIH0pXHJcbiAgICAgICAgbG9hZGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XHJcbiAgICB9XHJcbiAgICBhc3luYyB3aGVyZShydWxlID0ge30pIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxvYWRpbmcoKTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZGljdC5za2lwKGkpLndoZXJlKHsgLi4ucnVsZSwgX29wZW5pZDogdGhpcy5vcGVuaWQgfSkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGkgKz0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVXb3JkKGlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0LmRvYyhpZCkucmVtb3ZlKClcclxuICAgICAgICBpZiAocmVzLmVyck1zZyAhPT0gJ2RvY3VtZW50LnJlbW92ZTpvaycpIHtcclxuICAgICAgICAgICAgVXRpbHMudG9hc3RFcnJvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFpbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZGVsZXRlR3JvdXAocnVsZSkge1xyXG4gICAgICAgIC8qIOmcgOagoemqjG9wZW5pZO+8jOWQpuWImeS8muWIoOmZpOWFtuS7lueUqOaIt+eahOaVsOaNriAqL1xyXG4gICAgICAgIGxvYWRpbmcoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy53aGVyZSh7XHJcbiAgICAgICAgICAgIC4uLnJ1bGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpZHMgPSBkYXRhLm1hcChpdGVtID0+IGl0ZW0uX2lkKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpZHMubWFwKGlkID0+IHRoaXMuZGVsZXRlV29yZChpZCkpKVxyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIGlmIChyZXMuaW5kZXhPZihmYWxzZSkgPiAtMSkge1xyXG4gICAgICAgICAgICBVdGlscy50b2FzdEVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEaWN0aW9uYXJ5KCkiXX0= 
 			}); 
		define("cloud/flag.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "success": true,
    "fail": false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQWU7QUFDWCxlQUFVLElBREM7QUFFWCxZQUFPO0FBRkksQyIsImZpbGUiOiJmbGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJzdWNjZXNzXCI6dHJ1ZSxcclxuICAgIFwiZmFpbFwiOmZhbHNlXHJcbn0iXX0= 
 			}); 
		define("cloud/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _flag = require('./flag.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dictionary = function () {
    function Dictionary() {
        _classCallCheck(this, Dictionary);

        wx.cloud.init({
            traceUser: true
        });
        this._getOpenid();
        this.instantiateDb();
    }

    _createClass(Dictionary, [{
        key: 'instantiateDb',
        value: function instantiateDb() {
            var db = wx.cloud.database({
                env: 'my-dictionary-f77667'
            });
            this.dict = db.collection('dict');
        }
    }, {
        key: '_getOpenid',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _utils2.default.getOpenid();

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _getOpenid() {
                return _ref.apply(this, arguments);
            }

            return _getOpenid;
        }()
    }, {
        key: 'all',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _openid, res;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _openid = this._getOpenid();
                                _context2.next = 3;
                                return this.dict.where({
                                    _openid: _openid
                                }).get();

                            case 3:
                                res = _context2.sent;
                                return _context2.abrupt('return', res.data);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function all() {
                return _ref2.apply(this, arguments);
            }

            return all;
        }()
    }, {
        key: 'read',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(word) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.dict.doc(word).get();

                            case 2:
                                res = _context3.sent;
                                return _context3.abrupt('return', res.data);

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function read(_x) {
                return _ref3.apply(this, arguments);
            }

            return read;
        }()
    }, {
        key: 'save',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(word, meanings) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.dict.add({
                                    data: {
                                        _id: word,
                                        meanings: meanings
                                    }
                                });

                            case 2:
                                res = _context4.sent;

                                if (!(res.errMsg !== 'collection.add:ok')) {
                                    _context4.next = 8;
                                    break;
                                }

                                _utils2.default.toastError();
                                return _context4.abrupt('return', _flag.fail);

                            case 8:
                                return _context4.abrupt('return', _flag.success);

                            case 9:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function save(_x2, _x3) {
                return _ref4.apply(this, arguments);
            }

            return save;
        }()
    }]);

    return Dictionary;
}();

exports.default = new Dictionary();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRpY3Rpb25hcnkiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInRyYWNlVXNlciIsIl9nZXRPcGVuaWQiLCJpbnN0YW50aWF0ZURiIiwiZGIiLCJkYXRhYmFzZSIsImVudiIsImRpY3QiLCJjb2xsZWN0aW9uIiwiVXRpbHMiLCJnZXRPcGVuaWQiLCJfb3BlbmlkIiwid2hlcmUiLCJnZXQiLCJyZXMiLCJkYXRhIiwid29yZCIsImRvYyIsIm1lYW5pbmdzIiwiYWRkIiwiX2lkIiwiZXJyTXNnIiwidG9hc3RFcnJvciIsImZhaWwiLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBQ01BLFU7QUFDRiwwQkFBYztBQUFBOztBQUNWQyxXQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUNWQyx1QkFBVztBQURELFNBQWQ7QUFHQSxhQUFLQyxVQUFMO0FBQ0EsYUFBS0MsYUFBTDtBQUNIOzs7O3dDQUNlO0FBQ1osZ0JBQU1DLEtBQUtOLEdBQUdDLEtBQUgsQ0FBU00sUUFBVCxDQUFrQjtBQUN6QkMscUJBQUs7QUFEb0IsYUFBbEIsQ0FBWDtBQUdBLGlCQUFLQyxJQUFMLEdBQVlILEdBQUdJLFVBQUgsQ0FBYyxNQUFkLENBQVo7QUFDSDs7Ozs7Ozs7Ozt1Q0FFZ0JDLGdCQUFNQyxTQUFOLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1JDLHVDLEdBQVUsS0FBS1QsVUFBTCxFOzt1Q0FDRyxLQUFLSyxJQUFMLENBQ2JLLEtBRGEsQ0FDUDtBQUNIRDtBQURHLGlDQURPLEVBSWJFLEdBSmEsRTs7O0FBQVpDLG1DO2tFQUtDQSxJQUFJQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVKQyxJOzs7Ozs7O3VDQUNXLEtBQUtULElBQUwsQ0FBVVUsR0FBVixDQUFjRCxJQUFkLEVBQW9CSCxHQUFwQixFOzs7QUFBWkMsbUM7a0VBQ0NBLElBQUlDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRUpDLEksRUFBTUUsUTs7Ozs7Ozt1Q0FDSyxLQUFLWCxJQUFMLENBQVVZLEdBQVYsQ0FBYztBQUM1QkosMENBQU07QUFDRkssNkNBQUtKLElBREg7QUFFRkU7QUFGRTtBQURzQixpQ0FBZCxDOzs7QUFBWkosbUM7O3NDQU1GQSxJQUFJTyxNQUFKLEtBQWUsbUI7Ozs7O0FBQ2ZaLGdEQUFNYSxVQUFOO2tFQUNPQyxVOzs7a0VBRUFDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFLSixJQUFJM0IsVUFBSixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgc3VjY2VzcywgZmFpbCB9IGZyb20gJy4vZmxhZy5qcyc7XHJcbmNsYXNzIERpY3Rpb25hcnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgd3guY2xvdWQuaW5pdCh7XHJcbiAgICAgICAgICAgIHRyYWNlVXNlcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2dldE9wZW5pZCgpXHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0ZURiKClcclxuICAgIH1cclxuICAgIGluc3RhbnRpYXRlRGIoKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSh7XHJcbiAgICAgICAgICAgIGVudjogJ215LWRpY3Rpb25hcnktZjc3NjY3J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGljdCA9IGRiLmNvbGxlY3Rpb24oJ2RpY3QnKTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9nZXRPcGVuaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFV0aWxzLmdldE9wZW5pZCgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYWxsKCkge1xyXG4gICAgICAgY29uc3QgX29wZW5pZCA9IHRoaXMuX2dldE9wZW5pZCgpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0XHJcbiAgICAgICAgICAgIC53aGVyZSh7XHJcbiAgICAgICAgICAgICAgICBfb3BlbmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGFcclxuICAgIH1cclxuICAgIGFzeW5jIHJlYWQod29yZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGljdC5kb2Mod29yZCkuZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgICB9XHJcbiAgICBhc3luYyBzYXZlKHdvcmQsIG1lYW5pbmdzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0LmFkZCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogd29yZCxcclxuICAgICAgICAgICAgICAgIG1lYW5pbmdzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzLmVyck1zZyAhPT0gJ2NvbGxlY3Rpb24uYWRkOm9rJykge1xyXG4gICAgICAgICAgICBVdGlscy50b2FzdEVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEaWN0aW9uYXJ5KCkiXX0= 
 			}); 
		define("components/counter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.watch = {
    num: function num(curVal, oldVal) {
      console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + ' plus tap');

      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIndlcHkiLCJjb21wb25lbnQiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwid2F0Y2giLCJjdXJWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBZ0JDLGVBQUtDLFM7Ozs7O09BQ3hDQyxLLEdBQVE7QUFDTkMsU0FBSztBQUNIQyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGNBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNuQixlQUFPLENBQUNBLENBQVI7QUFDRCxPQUpFO0FBS0hDLGVBQVM7QUFMTjtBQURDLEc7T0FVUkMsSSxHQUFPLEU7T0FFUEMsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRztPQU9URyxLLEdBQVE7QUFDTmhCLE9BRE0sZUFDRGlCLE1BREMsRUFDT0MsTUFEUCxFQUNlO0FBQ25CUCxjQUFRQyxHQUFSLHdCQUFrQk0sTUFBbEIsZ0NBQStCRCxNQUEvQjtBQUNEO0FBSEssRztPQU1SRSxPLEdBQVU7QUFDUkMsUUFEUSxrQkFDQTtBQUNOLFdBQUtwQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsV0FBekI7O0FBRUEsV0FBS1EsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDRCxLQU5PO0FBT1JDLFNBUFEsbUJBT0M7QUFDUCxXQUFLdEIsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNBVyxjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFlBQXpCO0FBQ0Q7QUFWTyxHOzs7a0JBMUJTakIsTyIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIG51bToge1xuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuICt2XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IDUwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgbnVtIChjdXJWYWwsIG9sZFZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhg5pen5YC877yaJHtvbGRWYWx977yM5paw5YC877yaJHtjdXJWYWx9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcGx1cyAoKSB7XG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJylcblxuICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMylcbiAgICAgIH0sXG4gICAgICBtaW51cyAoKSB7XG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gLSAxXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIG1pbnVzIHRhcCcpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0= 
 			}); 
		define("components/group.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
  _inherits(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      grouplist: {},
      index: {}
    }, _this.$repeat = { "grouplist": { "com": "groupitem", "props": "gitem" } }, _this.$props = { "groupitem": { "xmlns:v-bind": { "value": "", "for": "grouplist.list", "item": "item", "index": "index", "key": "key" }, "v-bind:gitem.once": { "value": "item", "type": "item", "for": "grouplist.list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        this.grouplist.name = 'Parent Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdyb3VwaXRlbSIsIkdyb3VwSXRlbSIsIm1ldGhvZHMiLCJ0YXAiLCJuYW1lIiwiTWF0aCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCIkaW5kZXgiLCJpZCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXLEVBREw7QUFFTkMsYUFBTztBQUZELEssUUFLVEMsTyxHQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sV0FBUCxFQUFtQixTQUFRLE9BQTNCLEVBQWIsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGdCQUFsQixFQUFtQyxRQUFPLE1BQTFDLEVBQWlELFNBQVEsT0FBekQsRUFBaUUsT0FBTSxLQUF2RSxFQUFoQixFQUE4RixxQkFBb0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLGdCQUFwQyxFQUFxRCxRQUFPLE1BQTVELEVBQW1FLFNBQVEsT0FBM0UsRUFBbUYsT0FBTSxLQUF6RixFQUFsSCxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGlCQUFXQztBQURILEssUUFHVkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTCxhQUFLVCxTQUFMLENBQWVVLElBQWYsc0JBQXVDQyxLQUFLQyxNQUFMLEVBQXZDO0FBQ0FDLGdCQUFRQyxHQUFSLG9CQUE2QixLQUFLQyxNQUFsQyxnQkFBbUQsS0FBS2YsU0FBTCxDQUFlZ0IsRUFBbEU7QUFDRDtBQUpPLEs7Ozs7RUFadUJDLGVBQUtDLFM7O2tCQUFuQnBCLEsiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwaXRlbSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGdyb3VwbGlzdDoge30sXG4gICAgICBpbmRleDoge31cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJncm91cGxpc3RcIjp7XCJjb21cIjpcImdyb3VwaXRlbVwiLFwicHJvcHNcIjpcImdpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wiZ3JvdXBpdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJncm91cGxpc3QubGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDpnaXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiZ3JvdXBsaXN0Lmxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdyb3VwaXRlbTogR3JvdXBJdGVtXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXAgKCkge1xuICAgICAgICB0aGlzLmdyb3VwbGlzdC5uYW1lID0gYFBhcmVudCBSYW5kb20oJHtNYXRoLnJhbmRvbSgpfSlgXG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ3JvdXBsaXN0LmlkfWApXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0= 
 			}); 
		define("components/groupitem.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupItem = function (_wepy$component) {
  _inherits(GroupItem, _wepy$component);

  function GroupItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      gitem: {}
    }, _this.data = {}, _this.methods = {
      tap: function tap() {
        this.gitem.childname = 'Child Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$parent.$index + '. Item ' + this.$index + ', ID is ' + this.gitem.childid);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsImdpdGVtIiwiZGF0YSIsIm1ldGhvZHMiLCJ0YXAiLCJjaGlsZG5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCIkaW5kZXgiLCJjaGlsZGlkIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFERCxLLFFBR1JDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0wsYUFBS0gsS0FBTCxDQUFXSSxTQUFYLHFCQUF1Q0MsS0FBS0MsTUFBTCxFQUF2QztBQUNBQyxnQkFBUUMsR0FBUixvQkFBNkIsS0FBS0MsT0FBTCxDQUFhQyxNQUExQyxlQUEwRCxLQUFLQSxNQUEvRCxnQkFBZ0YsS0FBS1YsS0FBTCxDQUFXVyxPQUEzRjtBQUNEO0FBSk8sSzs7OztFQU4yQkMsZUFBS0MsUzs7a0JBQXZCZixTIiwiZmlsZSI6Imdyb3VwaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGdpdGVtOiB7fVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgdGhpcy5naXRlbS5jaGlsZG5hbWUgPSBgQ2hpbGQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCAke3RoaXMuJHBhcmVudC4kaW5kZXh9LiBJdGVtICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ2l0ZW0uY2hpbGRpZH1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19 
 			}); 
		define("components/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return List;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    list: [{
      id: '0',
      title: 'loading'
    }]
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      // this.num = this.num + 1
      console.log(this.$name + ' tap');
    },
    add: function add() {
      var len = this.list.length;
      this.list.push({ id: len + 1, title: 'title_' + len });
    }
  };
};

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsIndlcHkiLCJjb21wb25lbnQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwibWV0aG9kcyIsInRhcCIsImFkZCIsImxlbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBNEJULENBQ1Q7Ozs7RUE3QitCQyxlQUFLQyxTOzs7OztPQUNyQ0MsSSxHQUFPO0FBQ0xDLFVBQU0sQ0FDSjtBQUNFQyxVQUFJLEdBRE47QUFFRUMsYUFBTztBQUZULEtBREk7QUFERCxHO09BU1BDLE0sR0FBUztBQUNQLHVCQUFtQiwwQkFBYTtBQUFBOztBQUM5QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsY0FBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0QsSUFBdkU7QUFDRDtBQUpNLEc7T0FPVEUsTyxHQUFVO0FBQ1JDLE9BRFEsaUJBQ0Q7QUFDTDtBQUNBTixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLE1BQXpCO0FBQ0QsS0FKTztBQUtSSyxPQUxRLGlCQUtEO0FBQ0wsVUFBSUMsTUFBTSxLQUFLZCxJQUFMLENBQVVLLE1BQXBCO0FBQ0EsV0FBS0wsSUFBTCxDQUFVZSxJQUFWLENBQWUsRUFBQ2QsSUFBSWEsTUFBTSxDQUFYLEVBQWNaLE9BQU8sV0FBV1ksR0FBaEMsRUFBZjtBQUNEO0FBUk8sRzs7O2tCQWpCU2xCLEkiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnMCcsXG4gICAgICAgICAgdGl0bGU6ICdsb2FkaW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS5uYW1lfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIC8vIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXG4gICAgICB9LFxuICAgICAgYWRkICgpIHtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgICAgdGhpcy5saXN0LnB1c2goe2lkOiBsZW4gKyAxLCB0aXRsZTogJ3RpdGxlXycgKyBsZW59KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICB9XG4iXX0= 
 			}); 
		define("components/panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_wepy$component) {
  _inherits(Panel, _wepy$component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  return Panel;
}(_wepy2.default.component);

exports.default = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmpzIl0sIm5hbWVzIjpbIlBhbmVsIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7RUFBY0MsZUFBS0MsUzs7a0JBQW5CRixLIiwiZmlsZSI6InBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIH1cbiJdfQ== 
 			}); 
		define("components/vant/common/class-names.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.classNames = classNames;
var hasOwn = {}.hasOwnProperty;
function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;
    var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLW5hbWVzLmpzIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5Iiwia2V5IiwiY2FsbCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQ2dCQSxVLEdBQUFBLFU7QUFEaEIsSUFBSUMsU0FBUyxHQUFHQyxjQUFoQjtBQUNPLFNBQVNGLFVBQVQsR0FBc0I7QUFDM0IsTUFBSUcsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDekMsUUFBSUcsTUFBTUYsVUFBVUQsQ0FBVixDQUFWO0FBQ0EsUUFBSSxDQUFDRyxHQUFMLEVBQVU7QUFDVixRQUFJQyxpQkFBaUJELEdBQWpCLHlDQUFpQkEsR0FBakIsQ0FBSjs7QUFFQSxRQUFJQyxZQUFZLFFBQVosSUFBd0JBLFlBQVksUUFBeEMsRUFBa0Q7QUFDaERMLGNBQVFNLElBQVIsQ0FBYUYsR0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJRyxNQUFNQyxPQUFOLENBQWNKLEdBQWQsS0FBc0JBLElBQUlELE1BQTlCLEVBQXNDO0FBQzNDLFVBQUlNLFFBQVFaLFdBQVdhLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJOLEdBQXZCLENBQVo7O0FBRUEsVUFBSUssS0FBSixFQUFXO0FBQ1RULGdCQUFRTSxJQUFSLENBQWFHLEtBQWI7QUFDRDtBQUNGLEtBTk0sTUFNQSxJQUFJSixZQUFZLFFBQWhCLEVBQTBCO0FBQy9CLFdBQUssSUFBSU0sR0FBVCxJQUFnQlAsR0FBaEIsRUFBcUI7QUFDbkIsWUFBSU4sT0FBT2MsSUFBUCxDQUFZUixHQUFaLEVBQWlCTyxHQUFqQixLQUF5QlAsSUFBSU8sR0FBSixDQUE3QixFQUF1QztBQUNyQ1gsa0JBQVFNLElBQVIsQ0FBYUssR0FBYjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELFNBQU9YLFFBQVFhLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDtBQUNEIiwiZmlsZSI6ImNsYXNzLW5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcclxuICB2YXIgY2xhc3NlcyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghYXJnKSBjb250aW51ZTtcclxuICAgIHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcclxuXHJcbiAgICBpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKGFyZyk7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XHJcbiAgICAgIHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcclxuXHJcbiAgICAgIGlmIChpbm5lcikge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChpbm5lcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgZm9yICh2YXIga2V5IGluIGFyZykge1xyXG4gICAgICAgIGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcclxuICAgICAgICAgIGNsYXNzZXMucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xyXG59XHJcbjsiXX0= 
 			}); 
		define("components/vant/common/component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VantComponent = undefined;

var _basic = require('./../mixins/basic.js');

var _index = require('./../mixins/observer/index.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function VantComponent(vantOptions) {
  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  var relation = vantOptions.relation;

  if (relation) {
    options.relations = Object.assign(options.relations || {}, _defineProperty({}, "../" + relation.name + "/index", relation));
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(_basic.basic); // map field to form-field behavior

  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  (0, _index.observe)(vantOptions, options);
  Component(options);
}

exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtYXBLZXlzIiwic291cmNlIiwidGFyZ2V0IiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJWYW50Q29tcG9uZW50IiwidmFudE9wdGlvbnMiLCJvcHRpb25zIiwiZGF0YSIsInByb3BzIiwibWl4aW5zIiwibWV0aG9kcyIsImJlZm9yZUNyZWF0ZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwicmVsYXRpb25zIiwiZGVzdHJveWVkIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwiYXNzaWduIiwibmFtZSIsImV4dGVybmFsQ2xhc3NlcyIsInB1c2giLCJiZWhhdmlvcnMiLCJiYXNpYyIsImZpZWxkIiwibXVsdGlwbGVTbG90cyIsImFkZEdsb2JhbENsYXNzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDQyxTQUFPQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQXlCLFVBQVVDLEdBQVYsRUFBZTtBQUN0QyxRQUFJTixPQUFPTSxHQUFQLENBQUosRUFBaUI7QUFDZkwsYUFBT0MsSUFBSUksR0FBSixDQUFQLElBQW1CTixPQUFPTSxHQUFQLENBQW5CO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0M7QUFDbEMsTUFBSUMsVUFBVSxFQUFkO0FBQ0FWLFVBQVFTLFdBQVIsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzVCQyxVQUFNLE1BRHNCO0FBRTVCQyxXQUFPLFlBRnFCO0FBRzVCQyxZQUFRLFdBSG9CO0FBSTVCQyxhQUFTLFNBSm1CO0FBSzVCQyxrQkFBYyxTQUxjO0FBTTVCQyxhQUFTLFVBTm1CO0FBTzVCQyxhQUFTLE9BUG1CO0FBUTVCQyxlQUFXLFdBUmlCO0FBUzVCQyxlQUFXLFVBVGlCO0FBVTVCQyxhQUFTO0FBVm1CLEdBQTlCO0FBWUEsTUFBSUMsV0FBV1osWUFBWVksUUFBM0I7O0FBRUEsTUFBSUEsUUFBSixFQUFjO0FBQ1pYLFlBQVFRLFNBQVIsR0FBb0JkLE9BQU9rQixNQUFQLENBQWNaLFFBQVFRLFNBQVIsSUFBcUIsRUFBbkMsc0JBQ2pCLFFBQVFHLFNBQVNFLElBQWpCLEdBQXdCLFFBRFAsRUFDa0JGLFFBRGxCLEVBQXBCO0FBR0QsR0FwQmlDLENBb0JoQzs7O0FBR0ZYLFVBQVFjLGVBQVIsR0FBMEJkLFFBQVFjLGVBQVIsSUFBMkIsRUFBckQ7QUFDQWQsVUFBUWMsZUFBUixDQUF3QkMsSUFBeEIsQ0FBNkIsY0FBN0IsRUF4QmtDLENBd0JZOztBQUU5Q2YsVUFBUWdCLFNBQVIsR0FBb0JoQixRQUFRZ0IsU0FBUixJQUFxQixFQUF6QztBQUNBaEIsVUFBUWdCLFNBQVIsQ0FBa0JELElBQWxCLENBQXVCRSxZQUF2QixFQTNCa0MsQ0EyQkg7O0FBRS9CLE1BQUlsQixZQUFZbUIsS0FBaEIsRUFBdUI7QUFDckJsQixZQUFRZ0IsU0FBUixDQUFrQkQsSUFBbEIsQ0FBdUIsaUJBQXZCO0FBQ0QsR0EvQmlDLENBK0JoQzs7O0FBR0ZmLFVBQVFBLE9BQVIsR0FBa0I7QUFDaEJtQixtQkFBZSxJQURDO0FBRWhCQyxvQkFBZ0I7QUFGQSxHQUFsQjtBQUlBLHNCQUFRckIsV0FBUixFQUFxQkMsT0FBckI7QUFDQXFCLFlBQVVyQixPQUFWO0FBQ0Q7O1FBRVFGLGEsR0FBQUEsYSIsImZpbGUiOiJjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNpYyB9IGZyb20gJy4uL21peGlucy9iYXNpYyc7XHJcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tICcuLi9taXhpbnMvb2JzZXJ2ZXIvaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gbWFwS2V5cyhzb3VyY2UsIHRhcmdldCwgbWFwKSB7XHJcbiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIGlmIChzb3VyY2Vba2V5XSkge1xyXG4gICAgICB0YXJnZXRbbWFwW2tleV1dID0gc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZhbnRDb21wb25lbnQodmFudE9wdGlvbnMpIHtcclxuICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gIG1hcEtleXModmFudE9wdGlvbnMsIG9wdGlvbnMsIHtcclxuICAgIGRhdGE6ICdkYXRhJyxcclxuICAgIHByb3BzOiAncHJvcGVydGllcycsXHJcbiAgICBtaXhpbnM6ICdiZWhhdmlvcnMnLFxyXG4gICAgbWV0aG9kczogJ21ldGhvZHMnLFxyXG4gICAgYmVmb3JlQ3JlYXRlOiAnY3JlYXRlZCcsXHJcbiAgICBjcmVhdGVkOiAnYXR0YWNoZWQnLFxyXG4gICAgbW91bnRlZDogJ3JlYWR5JyxcclxuICAgIHJlbGF0aW9uczogJ3JlbGF0aW9ucycsXHJcbiAgICBkZXN0cm95ZWQ6ICdkZXRhY2hlZCcsXHJcbiAgICBjbGFzc2VzOiAnZXh0ZXJuYWxDbGFzc2VzJ1xyXG4gIH0pO1xyXG4gIHZhciByZWxhdGlvbiA9IHZhbnRPcHRpb25zLnJlbGF0aW9uO1xyXG5cclxuICBpZiAocmVsYXRpb24pIHtcclxuICAgIG9wdGlvbnMucmVsYXRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLnJlbGF0aW9ucyB8fCB7fSwge1xyXG4gICAgICBbXCIuLi9cIiArIHJlbGF0aW9uLm5hbWUgKyBcIi9pbmRleFwiXTogcmVsYXRpb25cclxuICAgIH0pO1xyXG4gIH0gLy8gYWRkIGRlZmF1bHQgZXh0ZXJuYWxDbGFzc2VzXHJcblxyXG5cclxuICBvcHRpb25zLmV4dGVybmFsQ2xhc3NlcyA9IG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzIHx8IFtdO1xyXG4gIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzLnB1c2goJ2N1c3RvbS1jbGFzcycpOyAvLyBhZGQgZGVmYXVsdCBiZWhhdmlvcnNcclxuXHJcbiAgb3B0aW9ucy5iZWhhdmlvcnMgPSBvcHRpb25zLmJlaGF2aW9ycyB8fCBbXTtcclxuICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJhc2ljKTsgLy8gbWFwIGZpZWxkIHRvIGZvcm0tZmllbGQgYmVoYXZpb3JcclxuXHJcbiAgaWYgKHZhbnRPcHRpb25zLmZpZWxkKSB7XHJcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKCd3eDovL2Zvcm0tZmllbGQnKTtcclxuICB9IC8vIGFkZCBkZWZhdWx0IG9wdGlvbnNcclxuXHJcblxyXG4gIG9wdGlvbnMub3B0aW9ucyA9IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gIH07XHJcbiAgb2JzZXJ2ZSh2YW50T3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgQ29tcG9uZW50KG9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBWYW50Q29tcG9uZW50IH07Il19 
 			}); 
		define("components/vant/common/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
  return x !== null && (type === 'object' || type === 'function');
}

exports.isObj = isObj;
exports.isDef = isDef;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzRGVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPQSxVQUFVQyxTQUFWLElBQXVCRCxVQUFVLElBQXhDO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLE1BQUlDLGNBQWNELENBQWQseUNBQWNBLENBQWQsQ0FBSjtBQUNBLFNBQU9BLE1BQU0sSUFBTixLQUFlQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsVUFBN0MsQ0FBUDtBQUNEOztRQUVRRixLLEdBQUFBLEs7UUFBT0gsSyxHQUFBQSxLIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXNEZWYodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmooeCkge1xyXG4gIHZhciB0eXBlID0gdHlwZW9mIHg7XHJcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc09iaiwgaXNEZWYgfTsiXX0= 
 			}); 
		define("components/vant/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var queue = [];

var Dialog = function Dialog(options) {
  return new Promise(function (resolve, reject) {
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];
    var dialog = ctx.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.setData(_extends({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  selector: '#van-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};

Dialog.alert = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};

Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInF1ZXVlIiwiRGlhbG9nIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdHgiLCJkaWFsb2ciLCJzZWxlY3RDb21wb25lbnQiLCJzZWxlY3RvciIsInNldERhdGEiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsInB1c2giLCJkZWZhdWx0T3B0aW9ucyIsInNob3ciLCJ0aXRsZSIsIm1lc3NhZ2UiLCJ6SW5kZXgiLCJvdmVybGF5IiwiYXN5bmNDbG9zZSIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJhbGVydCIsImN1cnJlbnRPcHRpb25zIiwiY29uZmlybSIsImNsb3NlIiwiZm9yRWFjaCIsInNldERlZmF1bHRPcHRpb25zIiwicmVzZXREZWZhdWx0T3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxRQUFULEdBQW9CO0FBQUVBLGFBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFBRSxVQUFJRyxTQUFTRixVQUFVRCxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJSSxHQUFULElBQWdCRCxNQUFoQixFQUF3QjtBQUFFLFlBQUlOLE9BQU9RLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osTUFBckMsRUFBNkNDLEdBQTdDLENBQUosRUFBdUQ7QUFBRUwsaUJBQU9LLEdBQVAsSUFBY0QsT0FBT0MsR0FBUCxDQUFkO0FBQTRCO0FBQUU7QUFBRSxLQUFDLE9BQU9MLE1BQVA7QUFBZ0IsR0FBNVAsQ0FBOFAsT0FBT0gsU0FBU1ksS0FBVCxDQUFlLElBQWYsRUFBcUJQLFNBQXJCLENBQVA7QUFBeUM7O0FBRTdULElBQUlRLFFBQVEsRUFBWjs7QUFFQSxJQUFJQyxTQUFTLFNBQVNBLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCO0FBQ3BDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDLFFBQUlDLFFBQVFDLGlCQUFaO0FBQ0EsUUFBSUMsTUFBTUYsTUFBTUEsTUFBTWIsTUFBTixHQUFlLENBQXJCLENBQVY7QUFDQSxRQUFJZ0IsU0FBU0QsSUFBSUUsZUFBSixDQUFvQlIsUUFBUVMsUUFBNUIsQ0FBYjtBQUNBLFdBQU9ULFFBQVFTLFFBQWY7O0FBRUEsUUFBSUYsTUFBSixFQUFZO0FBQ1ZBLGFBQU9HLE9BQVAsQ0FBZXpCLFNBQVM7QUFDdEIwQixrQkFBVVIsTUFEWTtBQUV0QlMsbUJBQVdWO0FBRlcsT0FBVCxFQUdaRixPQUhZLENBQWY7QUFJQUYsWUFBTWUsSUFBTixDQUFXTixNQUFYO0FBQ0Q7QUFDRixHQWJNLENBQVA7QUFjRCxDQWZEOztBQWlCQVIsT0FBT2UsY0FBUCxHQUF3QjtBQUN0QkMsUUFBTSxJQURnQjtBQUV0QkMsU0FBTyxFQUZlO0FBR3RCQyxXQUFTLEVBSGE7QUFJdEJDLFVBQVEsR0FKYztBQUt0QkMsV0FBUyxJQUxhO0FBTXRCQyxjQUFZLEtBTlU7QUFPdEJYLFlBQVUsYUFQWTtBQVF0QlkscUJBQW1CLElBUkc7QUFTdEJDLG9CQUFrQixJQVRJO0FBVXRCQyxxQkFBbUIsSUFWRztBQVd0QkMsb0JBQWtCLEtBWEk7QUFZdEJDLHVCQUFxQixLQVpDO0FBYXRCQyx5QkFBdUI7QUFiRCxDQUF4Qjs7QUFnQkEzQixPQUFPNEIsS0FBUCxHQUFlLFVBQVUzQixPQUFWLEVBQW1CO0FBQ2hDLFNBQU9ELE9BQU9kLFNBQVMsRUFBVCxFQUFhYyxPQUFPNkIsY0FBcEIsRUFBb0M1QixPQUFwQyxDQUFQLENBQVA7QUFDRCxDQUZEOztBQUlBRCxPQUFPOEIsT0FBUCxHQUFpQixVQUFVN0IsT0FBVixFQUFtQjtBQUNsQyxTQUFPRCxPQUFPZCxTQUFTLEVBQVQsRUFBYWMsT0FBTzZCLGNBQXBCLEVBQW9DO0FBQ2hESixzQkFBa0I7QUFEOEIsR0FBcEMsRUFFWHhCLE9BRlcsQ0FBUCxDQUFQO0FBR0QsQ0FKRDs7QUFNQUQsT0FBTytCLEtBQVAsR0FBZSxZQUFZO0FBQ3pCaEMsUUFBTWlDLE9BQU4sQ0FBYyxVQUFVeEIsTUFBVixFQUFrQjtBQUM5QkEsV0FBT3VCLEtBQVA7QUFDRCxHQUZEO0FBR0FoQyxVQUFRLEVBQVI7QUFDRCxDQUxEOztBQU9BQyxPQUFPaUMsaUJBQVAsR0FBMkIsVUFBVWhDLE9BQVYsRUFBbUI7QUFDNUNkLFNBQU9DLE1BQVAsQ0FBY1ksT0FBTzZCLGNBQXJCLEVBQXFDNUIsT0FBckM7QUFDRCxDQUZEOztBQUlBRCxPQUFPa0MsbUJBQVAsR0FBNkIsWUFBWTtBQUN2Q2xDLFNBQU82QixjQUFQLEdBQXdCM0MsU0FBUyxFQUFULEVBQWFjLE9BQU9lLGNBQXBCLENBQXhCO0FBQ0QsQ0FGRDs7QUFJQWYsT0FBT2tDLG1CQUFQO2tCQUNlbEMsTSIsImZpbGUiOiJkaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxyXG5cclxudmFyIHF1ZXVlID0gW107XHJcblxyXG52YXIgRGlhbG9nID0gZnVuY3Rpb24gRGlhbG9nKG9wdGlvbnMpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICB2YXIgY3R4ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgICB2YXIgZGlhbG9nID0gY3R4LnNlbGVjdENvbXBvbmVudChvcHRpb25zLnNlbGVjdG9yKTtcclxuICAgIGRlbGV0ZSBvcHRpb25zLnNlbGVjdG9yO1xyXG5cclxuICAgIGlmIChkaWFsb2cpIHtcclxuICAgICAgZGlhbG9nLnNldERhdGEoX2V4dGVuZHMoe1xyXG4gICAgICAgIG9uQ2FuY2VsOiByZWplY3QsXHJcbiAgICAgICAgb25Db25maXJtOiByZXNvbHZlXHJcbiAgICAgIH0sIG9wdGlvbnMpKTtcclxuICAgICAgcXVldWUucHVzaChkaWFsb2cpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuRGlhbG9nLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gIHNob3c6IHRydWUsXHJcbiAgdGl0bGU6ICcnLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIHpJbmRleDogMTAwLFxyXG4gIG92ZXJsYXk6IHRydWUsXHJcbiAgYXN5bmNDbG9zZTogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICcjdmFuLWRpYWxvZycsXHJcbiAgY29uZmlybUJ1dHRvblRleHQ6ICfnoa7orqQnLFxyXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICflj5bmtognLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxyXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gIGNsb3NlT25DbGlja092ZXJsYXk6IGZhbHNlLFxyXG4gIGNvbmZpcm1CdXR0b25PcGVuVHlwZTogJydcclxufTtcclxuXHJcbkRpYWxvZy5hbGVydCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgcmV0dXJuIERpYWxvZyhfZXh0ZW5kcyh7fSwgRGlhbG9nLmN1cnJlbnRPcHRpb25zLCBvcHRpb25zKSk7XHJcbn07XHJcblxyXG5EaWFsb2cuY29uZmlybSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgcmV0dXJuIERpYWxvZyhfZXh0ZW5kcyh7fSwgRGlhbG9nLmN1cnJlbnRPcHRpb25zLCB7XHJcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlXHJcbiAgfSwgb3B0aW9ucykpO1xyXG59O1xyXG5cclxuRGlhbG9nLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgfSk7XHJcbiAgcXVldWUgPSBbXTtcclxufTtcclxuXHJcbkRpYWxvZy5zZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgT2JqZWN0LmFzc2lnbihEaWFsb2cuY3VycmVudE9wdGlvbnMsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuRGlhbG9nLnJlc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgRGlhbG9nLmN1cnJlbnRPcHRpb25zID0gX2V4dGVuZHMoe30sIERpYWxvZy5kZWZhdWx0T3B0aW9ucyk7XHJcbn07XHJcblxyXG5EaWFsb2cucmVzZXREZWZhdWx0T3B0aW9ucygpO1xyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7Il19 
 			}); 
		define("components/vant/mixins/basic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = undefined;

var _classNames = require('./../common/class-names.js');

var basic = exports.basic = Behavior({
  methods: {
    classNames: _classNames.classNames,
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiY2xhc3NOYW1lcyIsIiRlbWl0IiwidHJpZ2dlckV2ZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRSZWN0Iiwic2VsZWN0b3IiLCJhbGwiLCJfdGhpcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiaW4iLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQUlBLHdCQUFRQyxTQUFTO0FBQzFCQyxXQUFTO0FBQ1BDLGdCQUFZQSxzQkFETDtBQUVQQyxXQUFPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsV0FBS0MsWUFBTCxDQUFrQkMsS0FBbEIsQ0FBd0IsSUFBeEIsRUFBOEJDLFNBQTlCO0FBQ0QsS0FKTTtBQUtQQyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN2QyxVQUFJQyxRQUFRLElBQVo7O0FBRUEsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUNwQ0MsV0FBR0MsbUJBQUgsR0FBeUJDLEVBQXpCLENBQTRCTCxLQUE1QixFQUFtQ0QsTUFBTSxXQUFOLEdBQW9CLFFBQXZELEVBQWlFRCxRQUFqRSxFQUEyRVEsa0JBQTNFLENBQThGLFVBQVVDLElBQVYsRUFBZ0I7QUFDNUcsY0FBSVIsT0FBT1MsTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQVAsSUFBOEJBLEtBQUtHLE1BQXZDLEVBQStDO0FBQzdDUixvQkFBUUssSUFBUjtBQUNEOztBQUVELGNBQUksQ0FBQ1IsR0FBRCxJQUFRUSxJQUFaLEVBQWtCO0FBQ2hCTCxvQkFBUUssSUFBUjtBQUNEO0FBQ0YsU0FSRCxFQVFHSSxJQVJIO0FBU0QsT0FWTSxDQUFQO0FBV0Q7QUFuQk07QUFEaUIsQ0FBVCxDQUFaIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJy4uL2NvbW1vbi9jbGFzcy1uYW1lcyc7XHJcbmV4cG9ydCB2YXIgYmFzaWMgPSBCZWhhdmlvcih7XHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xhc3NOYW1lczogY2xhc3NOYW1lcyxcclxuICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH0sXHJcbiAgICBnZXRSZWN0OiBmdW5jdGlvbiBnZXRSZWN0KHNlbGVjdG9yLCBhbGwpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbihfdGhpcylbYWxsID8gJ3NlbGVjdEFsbCcgOiAnc2VsZWN0J10oc2VsZWN0b3IpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCFhbGwgJiYgcmVjdCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmV4ZWMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 
		define("components/vant/mixins/button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var button = exports.button = Behavior({
  properties: {
    id: String,
    appParameter: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: ''
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJidXR0b24iLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJpZCIsIlN0cmluZyIsImFwcFBhcmFtZXRlciIsInNlbmRNZXNzYWdlVGl0bGUiLCJzZW5kTWVzc2FnZVBhdGgiLCJzZW5kTWVzc2FnZUltZyIsInNob3dNZXNzYWdlQ2FyZCIsImhvdmVyU3RvcFByb3BhZ2F0aW9uIiwiQm9vbGVhbiIsImhvdmVyU3RhcnRUaW1lIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwiaG92ZXJTdGF5VGltZSIsImxhbmciLCJzZXNzaW9uRnJvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFJQSwwQkFBU0MsU0FBUztBQUMzQkMsY0FBWTtBQUNWQyxRQUFJQyxNQURNO0FBRVZDLGtCQUFjRCxNQUZKO0FBR1ZFLHNCQUFrQkYsTUFIUjtBQUlWRyxxQkFBaUJILE1BSlA7QUFLVkksb0JBQWdCSixNQUxOO0FBTVZLLHFCQUFpQkwsTUFOUDtBQU9WTSwwQkFBc0JDLE9BUFo7QUFRVkMsb0JBQWdCO0FBQ2RDLFlBQU1DLE1BRFE7QUFFZEMsYUFBTztBQUZPLEtBUk47QUFZVkMsbUJBQWU7QUFDYkgsWUFBTUMsTUFETztBQUViQyxhQUFPO0FBRk0sS0FaTDtBQWdCVkUsVUFBTTtBQUNKSixZQUFNVCxNQURGO0FBRUpXLGFBQU87QUFGSCxLQWhCSTtBQW9CVkcsaUJBQWE7QUFDWEwsWUFBTVQsTUFESztBQUVYVyxhQUFPO0FBRkk7QUFwQkg7QUFEZSxDQUFULENBQWIiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBidXR0b24gPSBCZWhhdmlvcih7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgaWQ6IFN0cmluZyxcclxuICAgIGFwcFBhcmFtZXRlcjogU3RyaW5nLFxyXG4gICAgc2VuZE1lc3NhZ2VUaXRsZTogU3RyaW5nLFxyXG4gICAgc2VuZE1lc3NhZ2VQYXRoOiBTdHJpbmcsXHJcbiAgICBzZW5kTWVzc2FnZUltZzogU3RyaW5nLFxyXG4gICAgc2hvd01lc3NhZ2VDYXJkOiBTdHJpbmcsXHJcbiAgICBob3ZlclN0b3BQcm9wYWdhdGlvbjogQm9vbGVhbixcclxuICAgIGhvdmVyU3RhcnRUaW1lOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDIwXHJcbiAgICB9LFxyXG4gICAgaG92ZXJTdGF5VGltZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiA3MFxyXG4gICAgfSxcclxuICAgIGxhbmc6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ2VuJ1xyXG4gICAgfSxcclxuICAgIHNlc3Npb25Gcm9tOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 
		define("components/vant/mixins/observer/behavior.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var behavior = exports.behavior = Behavior({
  created: function created() {
    var _this = this;

    if (!this.$options) {
      return;
    }

    var cache = {};
    var setData = this.setData;

    var _this$$options = this.$options(),
        computed = _this$$options.computed;

    var keys = Object.keys(computed);

    var calcComputed = function calcComputed() {
      var needUpdate = {};
      keys.forEach(function (key) {
        var value = computed[key].call(_this);

        if (cache[key] !== value) {
          cache[key] = needUpdate[key] = value;
        }
      });
      return needUpdate;
    };

    Object.defineProperty(this, 'setData', {
      writable: true
    });

    this.setData = function (data, callback) {
      data && setData.call(_this, data, callback);
      setData.call(_this, calcComputed());
    };
  },
  attached: function attached() {
    this.setData();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbImJlaGF2aW9yIiwiQmVoYXZpb3IiLCJjcmVhdGVkIiwiX3RoaXMiLCIkb3B0aW9ucyIsImNhY2hlIiwic2V0RGF0YSIsIl90aGlzJCRvcHRpb25zIiwiY29tcHV0ZWQiLCJrZXlzIiwiT2JqZWN0IiwiY2FsY0NvbXB1dGVkIiwibmVlZFVwZGF0ZSIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSIsIndyaXRhYmxlIiwiZGF0YSIsImNhbGxiYWNrIiwiYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsOEJBQVdDLFNBQVM7QUFDN0JDLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxRQUFRLElBQVo7O0FBRUEsUUFBSSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxRQUFJQyxRQUFRLEVBQVo7QUFDQSxRQUFJQyxVQUFVLEtBQUtBLE9BQW5COztBQUVBLFFBQUlDLGlCQUFpQixLQUFLSCxRQUFMLEVBQXJCO0FBQUEsUUFDSUksV0FBV0QsZUFBZUMsUUFEOUI7O0FBR0EsUUFBSUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRCxRQUFaLENBQVg7O0FBRUEsUUFBSUcsZUFBZSxTQUFTQSxZQUFULEdBQXdCO0FBQ3pDLFVBQUlDLGFBQWEsRUFBakI7QUFDQUgsV0FBS0ksT0FBTCxDQUFhLFVBQVVDLEdBQVYsRUFBZTtBQUMxQixZQUFJQyxRQUFRUCxTQUFTTSxHQUFULEVBQWNFLElBQWQsQ0FBbUJiLEtBQW5CLENBQVo7O0FBRUEsWUFBSUUsTUFBTVMsR0FBTixNQUFlQyxLQUFuQixFQUEwQjtBQUN4QlYsZ0JBQU1TLEdBQU4sSUFBYUYsV0FBV0UsR0FBWCxJQUFrQkMsS0FBL0I7QUFDRDtBQUNGLE9BTkQ7QUFPQSxhQUFPSCxVQUFQO0FBQ0QsS0FWRDs7QUFZQUYsV0FBT08sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQ0MsZ0JBQVU7QUFEMkIsS0FBdkM7O0FBSUEsU0FBS1osT0FBTCxHQUFlLFVBQVVhLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3ZDRCxjQUFRYixRQUFRVSxJQUFSLENBQWFiLEtBQWIsRUFBb0JnQixJQUFwQixFQUEwQkMsUUFBMUIsQ0FBUjtBQUNBZCxjQUFRVSxJQUFSLENBQWFiLEtBQWIsRUFBb0JRLGNBQXBCO0FBQ0QsS0FIRDtBQUlELEdBcEM0QjtBQXFDN0JVLFlBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixTQUFLZixPQUFMO0FBQ0Q7QUF2QzRCLENBQVQsQ0FBZiIsImZpbGUiOiJiZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgYmVoYXZpb3IgPSBCZWhhdmlvcih7XHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCF0aGlzLiRvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FjaGUgPSB7fTtcclxuICAgIHZhciBzZXREYXRhID0gdGhpcy5zZXREYXRhO1xyXG5cclxuICAgIHZhciBfdGhpcyQkb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnMoKSxcclxuICAgICAgICBjb21wdXRlZCA9IF90aGlzJCRvcHRpb25zLmNvbXB1dGVkO1xyXG5cclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29tcHV0ZWQpO1xyXG5cclxuICAgIHZhciBjYWxjQ29tcHV0ZWQgPSBmdW5jdGlvbiBjYWxjQ29tcHV0ZWQoKSB7XHJcbiAgICAgIHZhciBuZWVkVXBkYXRlID0ge307XHJcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gY29tcHV0ZWRba2V5XS5jYWxsKF90aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGNhY2hlW2tleV0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICBjYWNoZVtrZXldID0gbmVlZFVwZGF0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5lZWRVcGRhdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2V0RGF0YScsIHtcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICBkYXRhICYmIHNldERhdGEuY2FsbChfdGhpcywgZGF0YSwgY2FsbGJhY2spO1xyXG4gICAgICBzZXREYXRhLmNhbGwoX3RoaXMsIGNhbGNDb21wdXRlZCgpKTtcclxuICAgIH07XHJcbiAgfSxcclxuICBhdHRhY2hlZDogZnVuY3Rpb24gYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoKTtcclxuICB9XHJcbn0pOyJdfQ== 
 			}); 
		define("components/vant/mixins/observer/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = observe;

var _behavior = require('./behavior.js');

var _props = require('./props.js');

function observe(vantOptions, options) {
  var watch = vantOptions.watch,
      computed = vantOptions.computed;

  if (watch) {
    var props = options.properties || {};
    Object.keys(watch).forEach(function (key) {
      if (key in props) {
        var prop = props[key];

        if (prop === null || !('type' in prop)) {
          prop = {
            type: prop
          };
        }

        prop.observer = watch[key];
        props[key] = prop;
      }
    });
    options.properties = props;
  }

  if (computed) {
    options.behaviors.push(_behavior.behavior);
    options.methods = options.methods || {};

    options.methods.$options = function () {
      return vantOptions;
    };

    if (options.properties) {
      (0, _props.observeProps)(options.properties);
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJ2YW50T3B0aW9ucyIsIm9wdGlvbnMiLCJ3YXRjaCIsImNvbXB1dGVkIiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIm9ic2VydmVyIiwiYmVoYXZpb3JzIiwicHVzaCIsImJlaGF2aW9yIiwibWV0aG9kcyIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsTyxHQUFBQSxPOztBQUZoQjs7QUFDQTs7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxXQUFqQixFQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsTUFBSUMsUUFBUUYsWUFBWUUsS0FBeEI7QUFBQSxNQUNJQyxXQUFXSCxZQUFZRyxRQUQzQjs7QUFHQSxNQUFJRCxLQUFKLEVBQVc7QUFDVCxRQUFJRSxRQUFRSCxRQUFRSSxVQUFSLElBQXNCLEVBQWxDO0FBQ0FDLFdBQU9DLElBQVAsQ0FBWUwsS0FBWixFQUFtQk0sT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3hDLFVBQUlBLE9BQU9MLEtBQVgsRUFBa0I7QUFDaEIsWUFBSU0sT0FBT04sTUFBTUssR0FBTixDQUFYOztBQUVBLFlBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDdENBLGlCQUFPO0FBQ0xDLGtCQUFNRDtBQURELFdBQVA7QUFHRDs7QUFFREEsYUFBS0UsUUFBTCxHQUFnQlYsTUFBTU8sR0FBTixDQUFoQjtBQUNBTCxjQUFNSyxHQUFOLElBQWFDLElBQWI7QUFDRDtBQUNGLEtBYkQ7QUFjQVQsWUFBUUksVUFBUixHQUFxQkQsS0FBckI7QUFDRDs7QUFFRCxNQUFJRCxRQUFKLEVBQWM7QUFDWkYsWUFBUVksU0FBUixDQUFrQkMsSUFBbEIsQ0FBdUJDLGtCQUF2QjtBQUNBZCxZQUFRZSxPQUFSLEdBQWtCZixRQUFRZSxPQUFSLElBQW1CLEVBQXJDOztBQUVBZixZQUFRZSxPQUFSLENBQWdCQyxRQUFoQixHQUEyQixZQUFZO0FBQ3JDLGFBQU9qQixXQUFQO0FBQ0QsS0FGRDs7QUFJQSxRQUFJQyxRQUFRSSxVQUFaLEVBQXdCO0FBQ3RCLCtCQUFhSixRQUFRSSxVQUFyQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XHJcbmltcG9ydCB7IG9ic2VydmVQcm9wcyB9IGZyb20gJy4vcHJvcHMnO1xyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh2YW50T3B0aW9ucywgb3B0aW9ucykge1xyXG4gIHZhciB3YXRjaCA9IHZhbnRPcHRpb25zLndhdGNoLFxyXG4gICAgICBjb21wdXRlZCA9IHZhbnRPcHRpb25zLmNvbXB1dGVkO1xyXG5cclxuICBpZiAod2F0Y2gpIHtcclxuICAgIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllcyB8fCB7fTtcclxuICAgIE9iamVjdC5rZXlzKHdhdGNoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgaWYgKGtleSBpbiBwcm9wcykge1xyXG4gICAgICAgIHZhciBwcm9wID0gcHJvcHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcclxuICAgICAgICAgIHByb3AgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IHByb3BcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wLm9ic2VydmVyID0gd2F0Y2hba2V5XTtcclxuICAgICAgICBwcm9wc1trZXldID0gcHJvcDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvcHRpb25zLnByb3BlcnRpZXMgPSBwcm9wcztcclxuICB9XHJcblxyXG4gIGlmIChjb21wdXRlZCkge1xyXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMucHVzaChiZWhhdmlvcik7XHJcbiAgICBvcHRpb25zLm1ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gICAgb3B0aW9ucy5tZXRob2RzLiRvcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdmFudE9wdGlvbnM7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zLnByb3BlcnRpZXMpIHtcclxuICAgICAgb2JzZXJ2ZVByb3BzKG9wdGlvbnMucHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 
 			}); 
		define("components/vant/mixins/observer/props.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeProps = observeProps;
function observeProps(props) {
  if (!props) {
    return;
  }

  Object.keys(props).forEach(function (key) {
    var prop = props[key];

    if (prop === null || !('type' in prop)) {
      prop = {
        type: prop
      };
    }

    var _prop = prop,
        observer = _prop.observer;

    prop.observer = function () {
      if (observer) {
        if (typeof observer === 'string') {
          observer = this[observer];
        }

        observer.apply(this, arguments);
      }

      this.setData();
    };

    props[key] = prop;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVQcm9wcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIl9wcm9wIiwib2JzZXJ2ZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxZLEdBQUFBLFk7QUFBVCxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUNsQyxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRURDLFNBQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQkcsT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3hDLFFBQUlDLE9BQU9MLE1BQU1JLEdBQU4sQ0FBWDs7QUFFQSxRQUFJQyxTQUFTLElBQVQsSUFBaUIsRUFBRSxVQUFVQSxJQUFaLENBQXJCLEVBQXdDO0FBQ3RDQSxhQUFPO0FBQ0xDLGNBQU1EO0FBREQsT0FBUDtBQUdEOztBQUVELFFBQUlFLFFBQVFGLElBQVo7QUFBQSxRQUNJRyxXQUFXRCxNQUFNQyxRQURyQjs7QUFHQUgsU0FBS0csUUFBTCxHQUFnQixZQUFZO0FBQzFCLFVBQUlBLFFBQUosRUFBYztBQUNaLFlBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EscUJBQVcsS0FBS0EsUUFBTCxDQUFYO0FBQ0Q7O0FBRURBLGlCQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkMsU0FBckI7QUFDRDs7QUFFRCxXQUFLQyxPQUFMO0FBQ0QsS0FWRDs7QUFZQVgsVUFBTUksR0FBTixJQUFhQyxJQUFiO0FBQ0QsR0F6QkQ7QUEwQkQiLCJmaWxlIjoicHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVByb3BzKHByb3BzKSB7XHJcbiAgaWYgKCFwcm9wcykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xyXG5cclxuICAgIGlmIChwcm9wID09PSBudWxsIHx8ICEoJ3R5cGUnIGluIHByb3ApKSB7XHJcbiAgICAgIHByb3AgPSB7XHJcbiAgICAgICAgdHlwZTogcHJvcFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfcHJvcCA9IHByb3AsXHJcbiAgICAgICAgb2JzZXJ2ZXIgPSBfcHJvcC5vYnNlcnZlcjtcclxuXHJcbiAgICBwcm9wLm9ic2VydmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIgPSB0aGlzW29ic2VydmVyXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9ic2VydmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm9wc1trZXldID0gcHJvcDtcclxuICB9KTtcclxufSJdfQ== 
 			}); 
		define("components/vant/mixins/open-type.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var openType = exports.openType = Behavior({
  properties: {
    openType: String
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    bindContact: function bindContact(event) {
      this.$emit('contact', event.detail);
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    bindOpenSetting: function bindOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    },
    bindError: function bindError(event) {
      this.$emit('error', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4tdHlwZS5qcyJdLCJuYW1lcyI6WyJvcGVuVHlwZSIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsIlN0cmluZyIsIm1ldGhvZHMiLCJiaW5kR2V0VXNlckluZm8iLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwiYmluZENvbnRhY3QiLCJiaW5kR2V0UGhvbmVOdW1iZXIiLCJiaW5kT3BlblNldHRpbmciLCJiaW5kRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsOEJBQVdDLFNBQVM7QUFDN0JDLGNBQVk7QUFDVkYsY0FBVUc7QUFEQSxHQURpQjtBQUk3QkMsV0FBUztBQUNQQyxxQkFBaUIsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDL0MsV0FBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEJELE1BQU1FLE1BQWhDO0FBQ0QsS0FITTtBQUlQQyxpQkFBYSxTQUFTQSxXQUFULENBQXFCSCxLQUFyQixFQUE0QjtBQUN2QyxXQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQkQsTUFBTUUsTUFBNUI7QUFDRCxLQU5NO0FBT1BFLHdCQUFvQixTQUFTQSxrQkFBVCxDQUE0QkosS0FBNUIsRUFBbUM7QUFDckQsV0FBS0MsS0FBTCxDQUFXLGdCQUFYLEVBQTZCRCxNQUFNRSxNQUFuQztBQUNELEtBVE07QUFVUEcscUJBQWlCLFNBQVNBLGVBQVQsQ0FBeUJMLEtBQXpCLEVBQWdDO0FBQy9DLFdBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxNQUFNRSxNQUFoQztBQUNELEtBWk07QUFhUEksZUFBVyxTQUFTQSxTQUFULENBQW1CTixLQUFuQixFQUEwQjtBQUNuQyxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDRDtBQWZNO0FBSm9CLENBQVQsQ0FBZiIsImZpbGUiOiJvcGVuLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIG9wZW5UeXBlID0gQmVoYXZpb3Ioe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIG9wZW5UeXBlOiBTdHJpbmdcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGJpbmRHZXRVc2VySW5mbzogZnVuY3Rpb24gYmluZEdldFVzZXJJbmZvKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2dldHVzZXJpbmZvJywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH0sXHJcbiAgICBiaW5kQ29udGFjdDogZnVuY3Rpb24gYmluZENvbnRhY3QoZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY29udGFjdCcsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9LFxyXG4gICAgYmluZEdldFBob25lTnVtYmVyOiBmdW5jdGlvbiBiaW5kR2V0UGhvbmVOdW1iZXIoZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnZ2V0cGhvbmVudW1iZXInLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuICAgIGJpbmRPcGVuU2V0dGluZzogZnVuY3Rpb24gYmluZE9wZW5TZXR0aW5nKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ29wZW5zZXR0aW5nJywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH0sXHJcbiAgICBiaW5kRXJyb3I6IGZ1bmN0aW9uIGJpbmRFcnJvcihldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdlcnJvcicsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 
		define("components/vant/mixins/touch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var touch = exports.touch = Behavior({
  methods: {
    touchStart: function touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbInRvdWNoIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsImV2ZW50IiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwiZGVsdGFZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdGFydFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJ0b3VjaE1vdmUiLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLHdCQUFRQyxTQUFTO0FBQzFCQyxXQUFTO0FBQ1BDLGdCQUFZLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3JDLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE1BQUwsR0FBY04sTUFBTU8sT0FBTixDQUFjLENBQWQsRUFBaUJDLE9BQS9CO0FBQ0EsV0FBS0MsTUFBTCxHQUFjVCxNQUFNTyxPQUFOLENBQWMsQ0FBZCxFQUFpQkcsT0FBL0I7QUFDRCxLQVRNO0FBVVBDLGVBQVcsU0FBU0EsU0FBVCxDQUFtQlgsS0FBbkIsRUFBMEI7QUFDbkMsVUFBSUosUUFBUUksTUFBTU8sT0FBTixDQUFjLENBQWQsQ0FBWjtBQUNBLFdBQUtMLE1BQUwsR0FBY04sTUFBTVksT0FBTixHQUFnQixLQUFLRixNQUFuQztBQUNBLFdBQUtILE1BQUwsR0FBY1AsTUFBTWMsT0FBTixHQUFnQixLQUFLRCxNQUFuQztBQUNBLFdBQUtMLE9BQUwsR0FBZVEsS0FBS0MsR0FBTCxDQUFTLEtBQUtYLE1BQWQsQ0FBZjtBQUNBLFdBQUtHLE9BQUwsR0FBZU8sS0FBS0MsR0FBTCxDQUFTLEtBQUtWLE1BQWQsQ0FBZjtBQUNBLFdBQUtGLFNBQUwsR0FBaUIsS0FBS0csT0FBTCxHQUFlLEtBQUtDLE9BQXBCLEdBQThCLFlBQTlCLEdBQTZDLEtBQUtELE9BQUwsR0FBZSxLQUFLQyxPQUFwQixHQUE4QixVQUE5QixHQUEyQyxFQUF6RztBQUNEO0FBakJNO0FBRGlCLENBQVQsQ0FBWiIsImZpbGUiOiJ0b3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgdG91Y2ggPSBCZWhhdmlvcih7XHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG91Y2hTdGFydDogZnVuY3Rpb24gdG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xyXG4gICAgICB0aGlzLmRlbHRhWCA9IDA7XHJcbiAgICAgIHRoaXMuZGVsdGFZID0gMDtcclxuICAgICAgdGhpcy5vZmZzZXRYID0gMDtcclxuICAgICAgdGhpcy5vZmZzZXRZID0gMDtcclxuICAgICAgdGhpcy5zdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgfSxcclxuICAgIHRvdWNoTW92ZTogZnVuY3Rpb24gdG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgIHRoaXMuZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuc3RhcnRYO1xyXG4gICAgICB0aGlzLmRlbHRhWSA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcclxuICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5hYnModGhpcy5kZWx0YVgpO1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLmFicyh0aGlzLmRlbHRhWSk7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5vZmZzZXRYID4gdGhpcy5vZmZzZXRZID8gJ2hvcml6b250YWwnIDogdGhpcy5vZmZzZXRYIDwgdGhpcy5vZmZzZXRZID8gJ3ZlcnRpY2FsJyA6ICcnO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 
		define("components/vant/mixins/transition.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var transition = exports.transition = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      duration: {
        type: Number,
        value: 300
      }
    },
    data: {
      type: '',
      inited: false,
      display: false
    },
    attached: function attached() {
      if (this.data.show) {
        this.show();
      }
    },
    methods: {
      observeShow: function observeShow(value) {
        if (value) {
          this.show();
        } else {
          this.setData({
            type: 'leave'
          });
        }
      },
      show: function show() {
        this.setData({
          inited: true,
          display: true,
          type: 'enter'
        });
      },
      onAnimationEnd: function onAnimationEnd() {
        if (!this.data.show) {
          this.setData({
            display: false
          });
        }
      }
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwib2JzZXJ2ZXIiLCJkdXJhdGlvbiIsIk51bWJlciIsImRhdGEiLCJpbml0ZWQiLCJkaXNwbGF5IiwiYXR0YWNoZWQiLCJtZXRob2RzIiwib2JzZXJ2ZVNob3ciLCJzZXREYXRhIiwib25BbmltYXRpb25FbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsa0NBQWEsU0FBU0EsVUFBVCxDQUFvQkMsZ0JBQXBCLEVBQXNDO0FBQzVELFNBQU9DLFNBQVM7QUFDZEMsZ0JBQVk7QUFDVkMsbUJBQWFDLE1BREg7QUFFVkMsWUFBTTtBQUNKQyxjQUFNQyxPQURGO0FBRUpDLGVBQU9SLGdCQUZIO0FBR0pTLGtCQUFVO0FBSE4sT0FGSTtBQU9WQyxnQkFBVTtBQUNSSixjQUFNSyxNQURFO0FBRVJILGVBQU87QUFGQztBQVBBLEtBREU7QUFhZEksVUFBTTtBQUNKTixZQUFNLEVBREY7QUFFSk8sY0FBUSxLQUZKO0FBR0pDLGVBQVM7QUFITCxLQWJRO0FBa0JkQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSSxLQUFLSCxJQUFMLENBQVVQLElBQWQsRUFBb0I7QUFDbEIsYUFBS0EsSUFBTDtBQUNEO0FBQ0YsS0F0QmE7QUF1QmRXLGFBQVM7QUFDUEMsbUJBQWEsU0FBU0EsV0FBVCxDQUFxQlQsS0FBckIsRUFBNEI7QUFDdkMsWUFBSUEsS0FBSixFQUFXO0FBQ1QsZUFBS0gsSUFBTDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUthLE9BQUwsQ0FBYTtBQUNYWixrQkFBTTtBQURLLFdBQWI7QUFHRDtBQUNGLE9BVE07QUFVUEQsWUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQUthLE9BQUwsQ0FBYTtBQUNYTCxrQkFBUSxJQURHO0FBRVhDLG1CQUFTLElBRkU7QUFHWFIsZ0JBQU07QUFISyxTQUFiO0FBS0QsT0FoQk07QUFpQlBhLHNCQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFlBQUksQ0FBQyxLQUFLUCxJQUFMLENBQVVQLElBQWYsRUFBcUI7QUFDbkIsZUFBS2EsT0FBTCxDQUFhO0FBQ1hKLHFCQUFTO0FBREUsV0FBYjtBQUdEO0FBQ0Y7QUF2Qk07QUF2QkssR0FBVCxDQUFQO0FBaURELENBbERNIiwiZmlsZSI6InRyYW5zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIHRyYW5zaXRpb24gPSBmdW5jdGlvbiB0cmFuc2l0aW9uKHNob3dEZWZhdWx0VmFsdWUpIHtcclxuICByZXR1cm4gQmVoYXZpb3Ioe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxyXG4gICAgICBzaG93OiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcclxuICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93J1xyXG4gICAgICB9LFxyXG4gICAgICBkdXJhdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICB2YWx1ZTogMzAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6ICcnLFxyXG4gICAgICBpbml0ZWQ6IGZhbHNlLFxyXG4gICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiBhdHRhY2hlZCgpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5zaG93KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG9ic2VydmVTaG93OiBmdW5jdGlvbiBvYnNlcnZlU2hvdyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsZWF2ZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaW5pdGVkOiB0cnVlLFxyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHR5cGU6ICdlbnRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25BbmltYXRpb25FbmQ6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLnNob3cpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufTsiXX0= 
 			}); 
		define("components/vant/notify/notify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Notify;

var _utils = require('./../common/utils.js');

var defaultOptions = {
  selector: '#van-notify',
  duration: 3000
};

function parseOptions(text) {
  return (0, _utils.isObj)(text) ? text : {
    text: text
  };
}

function Notify(options) {
  if (options === void 0) {
    options = {};
  }

  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1];
  options = Object.assign({}, defaultOptions, parseOptions(options));
  var el = ctx.selectComponent(options.selector);
  delete options.selector;

  if (el) {
    el.setData(options);
    el.show();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJOb3RpZnkiLCJkZWZhdWx0T3B0aW9ucyIsInNlbGVjdG9yIiwiZHVyYXRpb24iLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0Iiwib3B0aW9ucyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiY3R4IiwibGVuZ3RoIiwiT2JqZWN0IiwiYXNzaWduIiwiZWwiLCJzZWxlY3RDb21wb25lbnQiLCJzZXREYXRhIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxNOztBQVp4Qjs7QUFDQSxJQUFJQyxpQkFBaUI7QUFDbkJDLFlBQVUsYUFEUztBQUVuQkMsWUFBVTtBQUZTLENBQXJCOztBQUtBLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFNBQU8sa0JBQU1BLElBQU4sSUFBY0EsSUFBZCxHQUFxQjtBQUMxQkEsVUFBTUE7QUFEb0IsR0FBNUI7QUFHRDs7QUFFYyxTQUFTTCxNQUFULENBQWdCTSxPQUFoQixFQUF5QjtBQUN0QyxNQUFJQSxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJBLGNBQVUsRUFBVjtBQUNEOztBQUVELE1BQUlDLFFBQVFDLGlCQUFaO0FBQ0EsTUFBSUMsTUFBTUYsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQVY7QUFDQUosWUFBVUssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JYLGNBQWxCLEVBQWtDRyxhQUFhRSxPQUFiLENBQWxDLENBQVY7QUFDQSxNQUFJTyxLQUFLSixJQUFJSyxlQUFKLENBQW9CUixRQUFRSixRQUE1QixDQUFUO0FBQ0EsU0FBT0ksUUFBUUosUUFBZjs7QUFFQSxNQUFJVyxFQUFKLEVBQVE7QUFDTkEsT0FBR0UsT0FBSCxDQUFXVCxPQUFYO0FBQ0FPLE9BQUdHLElBQUg7QUFDRDtBQUNGIiwiZmlsZSI6Im5vdGlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcclxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIHNlbGVjdG9yOiAnI3Zhbi1ub3RpZnknLFxyXG4gIGR1cmF0aW9uOiAzMDAwXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnModGV4dCkge1xyXG4gIHJldHVybiBpc09iaih0ZXh0KSA/IHRleHQgOiB7XHJcbiAgICB0ZXh0OiB0ZXh0XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZ5KG9wdGlvbnMpIHtcclxuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgY3R4ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBwYXJzZU9wdGlvbnMob3B0aW9ucykpO1xyXG4gIHZhciBlbCA9IGN0eC5zZWxlY3RDb21wb25lbnQob3B0aW9ucy5zZWxlY3Rvcik7XHJcbiAgZGVsZXRlIG9wdGlvbnMuc2VsZWN0b3I7XHJcblxyXG4gIGlmIChlbCkge1xyXG4gICAgZWwuc2V0RGF0YShvcHRpb25zKTtcclxuICAgIGVsLnNob3coKTtcclxuICB9XHJcbn0iXX0= 
 			}); 
		define("components/vant/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../common/utils.js');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast'
};
var queue = [];

var currentOptions = _extends({}, defaultOptions);

function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
}

var Toast = function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  options = _extends({}, currentOptions, parseOptions(options));
  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1];
  var toast = ctx.selectComponent(options.selector);
  delete options.selector;
  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {
        return item !== toast;
      });
    }, options.duration);
  }

  return toast;
};

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_extends({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function () {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiZGVmYXVsdE9wdGlvbnMiLCJ0eXBlIiwibWFzayIsIm1lc3NhZ2UiLCJzaG93IiwiekluZGV4IiwiZHVyYXRpb24iLCJwb3NpdGlvbiIsImZvcmJpZENsaWNrIiwibG9hZGluZ1R5cGUiLCJzZWxlY3RvciIsInF1ZXVlIiwiY3VycmVudE9wdGlvbnMiLCJwYXJzZU9wdGlvbnMiLCJUb2FzdCIsIm9wdGlvbnMiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImN0eCIsInRvYXN0Iiwic2VsZWN0Q29tcG9uZW50IiwicHVzaCIsInNldERhdGEiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhciIsImZpbHRlciIsIml0ZW0iLCJjcmVhdGVNZXRob2QiLCJmb3JFYWNoIiwibWV0aG9kIiwic2V0RGVmYXVsdE9wdGlvbnMiLCJyZXNldERlZmF1bHRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7QUFGQSxTQUFTQSxRQUFULEdBQW9CO0FBQUVBLGFBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFBRSxVQUFJRyxTQUFTRixVQUFVRCxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJSSxHQUFULElBQWdCRCxNQUFoQixFQUF3QjtBQUFFLFlBQUlOLE9BQU9RLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osTUFBckMsRUFBNkNDLEdBQTdDLENBQUosRUFBdUQ7QUFBRUwsaUJBQU9LLEdBQVAsSUFBY0QsT0FBT0MsR0FBUCxDQUFkO0FBQTRCO0FBQUU7QUFBRSxLQUFDLE9BQU9MLE1BQVA7QUFBZ0IsR0FBNVAsQ0FBOFAsT0FBT0gsU0FBU1ksS0FBVCxDQUFlLElBQWYsRUFBcUJQLFNBQXJCLENBQVA7QUFBeUM7O0FBRzdULElBQUlRLGlCQUFpQjtBQUNuQkMsUUFBTSxNQURhO0FBRW5CQyxRQUFNLEtBRmE7QUFHbkJDLFdBQVMsRUFIVTtBQUluQkMsUUFBTSxJQUphO0FBS25CQyxVQUFRLElBTFc7QUFNbkJDLFlBQVUsSUFOUztBQU9uQkMsWUFBVSxRQVBTO0FBUW5CQyxlQUFhLEtBUk07QUFTbkJDLGVBQWEsVUFUTTtBQVVuQkMsWUFBVTtBQVZTLENBQXJCO0FBWUEsSUFBSUMsUUFBUSxFQUFaOztBQUVBLElBQUlDLGlCQUFpQnpCLFNBQVMsRUFBVCxFQUFhYSxjQUFiLENBQXJCOztBQUVBLFNBQVNhLFlBQVQsQ0FBc0JWLE9BQXRCLEVBQStCO0FBQzdCLFNBQU8sa0JBQU1BLE9BQU4sSUFBaUJBLE9BQWpCLEdBQTJCO0FBQ2hDQSxhQUFTQTtBQUR1QixHQUFsQztBQUdEOztBQUVELElBQUlXLFFBQVEsU0FBU0EsS0FBVCxDQUFlQyxPQUFmLEVBQXdCO0FBQ2xDLE1BQUlBLFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUN0QkEsY0FBVSxFQUFWO0FBQ0Q7O0FBRURBLFlBQVU1QixTQUFTLEVBQVQsRUFBYXlCLGNBQWIsRUFBNkJDLGFBQWFFLE9BQWIsQ0FBN0IsQ0FBVjtBQUNBLE1BQUlDLFFBQVFDLGlCQUFaO0FBQ0EsTUFBSUMsTUFBTUYsTUFBTUEsTUFBTXZCLE1BQU4sR0FBZSxDQUFyQixDQUFWO0FBQ0EsTUFBSTBCLFFBQVFELElBQUlFLGVBQUosQ0FBb0JMLFFBQVFMLFFBQTVCLENBQVo7QUFDQSxTQUFPSyxRQUFRTCxRQUFmO0FBQ0FDLFFBQU1VLElBQU4sQ0FBV0YsS0FBWDtBQUNBQSxRQUFNRyxPQUFOLENBQWNQLE9BQWQ7QUFDQVEsZUFBYUosTUFBTUssS0FBbkI7O0FBRUEsTUFBSVQsUUFBUVQsUUFBUixHQUFtQixDQUF2QixFQUEwQjtBQUN4QmEsVUFBTUssS0FBTixHQUFjQyxXQUFXLFlBQVk7QUFDbkNOLFlBQU1PLEtBQU47QUFDQWYsY0FBUUEsTUFBTWdCLE1BQU4sQ0FBYSxVQUFVQyxJQUFWLEVBQWdCO0FBQ25DLGVBQU9BLFNBQVNULEtBQWhCO0FBQ0QsT0FGTyxDQUFSO0FBR0QsS0FMYSxFQUtYSixRQUFRVCxRQUxHLENBQWQ7QUFNRDs7QUFFRCxTQUFPYSxLQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQUlVLGVBQWUsU0FBU0EsWUFBVCxDQUFzQjVCLElBQXRCLEVBQTRCO0FBQzdDLFNBQU8sVUFBVWMsT0FBVixFQUFtQjtBQUN4QixXQUFPRCxNQUFNM0IsU0FBUztBQUNwQmMsWUFBTUE7QUFEYyxLQUFULEVBRVZZLGFBQWFFLE9BQWIsQ0FGVSxDQUFOLENBQVA7QUFHRCxHQUpEO0FBS0QsQ0FORDs7QUFRQSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLE1BQXZCLEVBQStCZSxPQUEvQixDQUF1QyxVQUFVQyxNQUFWLEVBQWtCO0FBQ3ZEakIsUUFBTWlCLE1BQU4sSUFBZ0JGLGFBQWFFLE1BQWIsQ0FBaEI7QUFDRCxDQUZEOztBQUlBakIsTUFBTVksS0FBTixHQUFjLFlBQVk7QUFDeEJmLFFBQU1tQixPQUFOLENBQWMsVUFBVVgsS0FBVixFQUFpQjtBQUM3QkEsVUFBTU8sS0FBTjtBQUNELEdBRkQ7QUFHQWYsVUFBUSxFQUFSO0FBQ0QsQ0FMRDs7QUFPQUcsTUFBTWtCLGlCQUFOLEdBQTBCLFVBQVVqQixPQUFWLEVBQW1CO0FBQzNDM0IsU0FBT0MsTUFBUCxDQUFjdUIsY0FBZCxFQUE4QkcsT0FBOUI7QUFDRCxDQUZEOztBQUlBRCxNQUFNbUIsbUJBQU4sR0FBNEIsWUFBWTtBQUN0Q3JCLG1CQUFpQnpCLFNBQVMsRUFBVCxFQUFhYSxjQUFiLENBQWpCO0FBQ0QsQ0FGRDs7a0JBSWVjLEsiLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxyXG5cclxuaW1wb3J0IHsgaXNPYmogfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xyXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgdHlwZTogJ3RleHQnLFxyXG4gIG1hc2s6IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIHNob3c6IHRydWUsXHJcbiAgekluZGV4OiAxMDAwLFxyXG4gIGR1cmF0aW9uOiAzMDAwLFxyXG4gIHBvc2l0aW9uOiAnbWlkZGxlJyxcclxuICBmb3JiaWRDbGljazogZmFsc2UsXHJcbiAgbG9hZGluZ1R5cGU6ICdjaXJjdWxhcicsXHJcbiAgc2VsZWN0b3I6ICcjdmFuLXRvYXN0J1xyXG59O1xyXG52YXIgcXVldWUgPSBbXTtcclxuXHJcbnZhciBjdXJyZW50T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucyk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMobWVzc2FnZSkge1xyXG4gIHJldHVybiBpc09iaihtZXNzYWdlKSA/IG1lc3NhZ2UgOiB7XHJcbiAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgfTtcclxufVxyXG5cclxudmFyIFRvYXN0ID0gZnVuY3Rpb24gVG9hc3Qob3B0aW9ucykge1xyXG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgY3VycmVudE9wdGlvbnMsIHBhcnNlT3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIGN0eCA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIHZhciB0b2FzdCA9IGN0eC5zZWxlY3RDb21wb25lbnQob3B0aW9ucy5zZWxlY3Rvcik7XHJcbiAgZGVsZXRlIG9wdGlvbnMuc2VsZWN0b3I7XHJcbiAgcXVldWUucHVzaCh0b2FzdCk7XHJcbiAgdG9hc3Quc2V0RGF0YShvcHRpb25zKTtcclxuICBjbGVhclRpbWVvdXQodG9hc3QudGltZXIpO1xyXG5cclxuICBpZiAob3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcclxuICAgIHRvYXN0LnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvYXN0LmNsZWFyKCk7XHJcbiAgICAgIHF1ZXVlID0gcXVldWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHRvYXN0O1xyXG4gICAgICB9KTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRvYXN0O1xyXG59O1xyXG5cclxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZCh0eXBlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gVG9hc3QoX2V4dGVuZHMoe1xyXG4gICAgICB0eXBlOiB0eXBlXHJcbiAgICB9LCBwYXJzZU9wdGlvbnMob3B0aW9ucykpKTtcclxuICB9O1xyXG59O1xyXG5cclxuWydsb2FkaW5nJywgJ3N1Y2Nlc3MnLCAnZmFpbCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gIFRvYXN0W21ldGhvZF0gPSBjcmVhdGVNZXRob2QobWV0aG9kKTtcclxufSk7XHJcblxyXG5Ub2FzdC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0b2FzdCkge1xyXG4gICAgdG9hc3QuY2xlYXIoKTtcclxuICB9KTtcclxuICBxdWV1ZSA9IFtdO1xyXG59O1xyXG5cclxuVG9hc3Quc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24oY3VycmVudE9wdGlvbnMsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuVG9hc3QucmVzZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICBjdXJyZW50T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdDsiXX0= 
 			}); 
		define("components/wepy-list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListAnother = function (_wepy$component) {
  _inherits(ListAnother, _wepy$component);

  function ListAnother() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListAnother);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListAnother.__proto__ || Object.getPrototypeOf(ListAnother)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListAnother, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ListAnother;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    list: [{
      id: '0',
      title: 'loading'
    }]
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      // this.num = this.num + 1
      console.log(this.$name + ' tap');
    },
    add: function add() {
      var len = this.list.length;
      this.list.push({ id: len + 1, title: 'title_' + len });
    }
  };
};

exports.default = ListAnother;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0QW5vdGhlciIsIndlcHkiLCJjb21wb25lbnQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwibWV0aG9kcyIsInRhcCIsImFkZCIsImxlbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBNEJULENBQ1Q7Ozs7RUE3QnNDQyxlQUFLQyxTOzs7OztPQUM1Q0MsSSxHQUFPO0FBQ0xDLFVBQU0sQ0FDSjtBQUNFQyxVQUFJLEdBRE47QUFFRUMsYUFBTztBQUZULEtBREk7QUFERCxHO09BU1BDLE0sR0FBUztBQUNQLHVCQUFtQiwwQkFBYTtBQUFBOztBQUM5QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsY0FBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0QsSUFBdkU7QUFDRDtBQUpNLEc7T0FPVEUsTyxHQUFVO0FBQ1JDLE9BRFEsaUJBQ0Q7QUFDTDtBQUNBTixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLE1BQXpCO0FBQ0QsS0FKTztBQUtSSyxPQUxRLGlCQUtEO0FBQ0wsVUFBSUMsTUFBTSxLQUFLZCxJQUFMLENBQVVLLE1BQXBCO0FBQ0EsV0FBS0wsSUFBTCxDQUFVZSxJQUFWLENBQWUsRUFBQ2QsSUFBSWEsTUFBTSxDQUFYLEVBQWNaLE9BQU8sV0FBV1ksR0FBaEMsRUFBZjtBQUNEO0FBUk8sRzs7O2tCQWpCU2xCLFciLCJmaWxlIjoid2VweS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEFub3RoZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnMCcsXG4gICAgICAgICAgdGl0bGU6ICdsb2FkaW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS5uYW1lfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIC8vIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXG4gICAgICB9LFxuICAgICAgYWRkICgpIHtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgICAgdGhpcy5saXN0LnB1c2goe2lkOiBsZW4gKyAxLCB0aXRsZTogJ3RpdGxlXycgKyBsZW59KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICB9XG4iXX0= 
 			}); 
		define("mixins/test.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
  _inherits(testMixin, _wepy$mixin);

  function testMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, testMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = testMixin.__proto__ || Object.getPrototypeOf(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      mixin: 'This is mixin data.'
    }, _this.methods = {
      tap: function tap() {
        this.mixin = 'mixin data was changed';
        console.log('mixin method tap');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(testMixin, [{
    key: 'onShow',
    value: function onShow() {
      console.log('mixin onShow');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log('mixin onLoad');
    }
  }]);

  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsidGVzdE1peGluIiwiZGF0YSIsIm1peGluIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxhQUFPO0FBREYsSyxRQUdQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRDtBQUNMLGFBQUtGLEtBQUwsR0FBYSx3QkFBYjtBQUNBRyxnQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0Q7QUFKTyxLOzs7Ozs2QkFPRDtBQUNQRCxjQUFRQyxHQUFSLENBQVksY0FBWjtBQUNEOzs7NkJBRVE7QUFDUEQsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDRDs7OztFQWpCb0NDLGVBQUtMLEs7O2tCQUF2QkYsUyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIGRhdGEgPSB7XG4gICAgbWl4aW46ICdUaGlzIGlzIG1peGluIGRhdGEuJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwICgpIHtcbiAgICAgIHRoaXMubWl4aW4gPSAnbWl4aW4gZGF0YSB3YXMgY2hhbmdlZCdcbiAgICAgIGNvbnNvbGUubG9nKCdtaXhpbiBtZXRob2QgdGFwJylcbiAgICB9XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ21peGluIG9uU2hvdycpXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ21peGluIG9uTG9hZCcpXG4gIH1cbn1cbiJdfQ== 
 			}); 
		define("npm/deep-assign/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';
var isObj = require('./../is-obj/index.js');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};
 
 			}); 
		define("npm/extend/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};
 
 			}); 
		define("npm/is-obj/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';
module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};
 
 			}); 
		define("npm/json-stringify-safe/stringify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}
 
 			}); 
		define("npm/promise-polyfill/promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);
 
 			}); 
		define("npm/regenerator-runtime/runtime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);
 
 			}); 
		define("npm/request/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
// Copyright 2010-2012 Mikeal Rogers
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

'use strict'

var extend                = require('./../extend/index.js')
  , cookies               = require('./lib/cookies.js')
  , helpers               = require('./lib/helpers.js')

var paramsHaveRequestBody = helpers.paramsHaveRequestBody


// organize params for patch, post, put, head, del
function initParams(uri, options, callback) {
  if (typeof options === 'function') {
    callback = options
  }

  var params = {}
  if (typeof options === 'object') {
    extend(params, options, {uri: uri})
  } else if (typeof uri === 'string') {
    extend(params, {uri: uri})
  } else {
    extend(params, uri)
  }

  params.callback = callback || params.callback
  return params
}

function request (uri, options, callback) {
  if (typeof uri === 'undefined') {
    throw new Error('undefined is not a valid uri or options object.')
  }

  var params = initParams(uri, options, callback)

  if (params.method === 'HEAD' && paramsHaveRequestBody(params)) {
    throw new Error('HTTP HEAD requests MUST NOT include a request body.')
  }

  return new request.Request(params)
}

function verbFunc (verb) {
  var method = verb.toUpperCase()
  return function (uri, options, callback) {
    var params = initParams(uri, options, callback)
    params.method = method
    return request(params, params.callback)
  }
}

// define like this to please codeintel/intellisense IDEs
request.get = verbFunc('get')
request.head = verbFunc('head')
request.post = verbFunc('post')
request.put = verbFunc('put')
request.patch = verbFunc('patch')
request.del = verbFunc('delete')
request['delete'] = verbFunc('delete')

request.jar = function (store) {
  return cookies.jar(store)
}

request.cookie = function (str) {
  return cookies.parse(str)
}

function wrapRequestMethod (method, options, requester, verb) {

  return function (uri, opts, callback) {
    var params = initParams(uri, opts, callback)

    var target = {}
    extend(true, target, options, params)

    target.pool = params.pool || options.pool

    if (verb) {
      target.method = verb.toUpperCase()
    }

    if (typeof requester === 'function') {
      method = requester
    }

    return method(target, target.callback)
  }
}

request.defaults = function (options, requester) {
  var self = this

  options = options || {}

  if (typeof options === 'function') {
    requester = options
    options = {}
  }

  var defaults      = wrapRequestMethod(self, options, requester)

  var verbs = ['get', 'head', 'post', 'put', 'patch', 'del', 'delete']
  verbs.forEach(function(verb) {
    defaults[verb]  = wrapRequestMethod(self[verb], options, requester, verb)
  })

  defaults.cookie   = wrapRequestMethod(self.cookie, options, requester)
  defaults.jar      = self.jar
  defaults.defaults = self.defaults
  return defaults
}

request.forever = function (agentOptions, optionsArg) {
  var options = {}
  if (optionsArg) {
    extend(options, optionsArg)
  }
  if (agentOptions) {
    options.agentOptions = agentOptions
  }

  options.forever = true
  return request.defaults(options)
}

// Exports

module.exports = request
request.Request = require('./request.js')
request.initParams = initParams

// Backwards compatibility for request.debug
Object.defineProperty(request, 'debug', {
  enumerable : true,
  get : function() {
    return request.Request.debug
  },
  set : function(debug) {
    request.Request.debug = debug
  }
})
 
 			}); 
		define("npm/request/lib/cookies.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict'

var tough = require('./../../tough-cookie/lib/cookie.js')

var Cookie = tough.Cookie
  , CookieJar = tough.CookieJar


exports.parse = function(str) {
  if (str && str.uri) {
    str = str.uri
  }
  if (typeof str !== 'string') {
    throw new Error('The cookie function only accepts STRING as param')
  }
  return Cookie.parse(str, {loose: true})
}

// Adapt the sometimes-Async api of tough.CookieJar to our requirements
function RequestJar(store) {
  var self = this
  self._jar = new CookieJar(store, {looseMode: true})
}
RequestJar.prototype.setCookie = function(cookieOrStr, uri, options) {
  var self = this
  return self._jar.setCookieSync(cookieOrStr, uri, options || {})
}
RequestJar.prototype.getCookieString = function(uri) {
  var self = this
  return self._jar.getCookieStringSync(uri)
}
RequestJar.prototype.getCookies = function(uri) {
  var self = this
  return self._jar.getCookiesSync(uri)
}

exports.jar = function(store) {
  return new RequestJar(store)
}
 
 			}); 
		define("npm/tcb-admin-node/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
const storage = require('./src/storage/index.js');
const database = require('./src/db/index.js').Db;
const functions = require('./src/functions/index.js');
const wx = require('./src/wx/index.js');

function Tcb(config) {
  // console.log(config)
  this.config = config ? config : this.config
}

Tcb.prototype.init = function ({
  secretId,
  secretKey,
  sessionToken,
  env,
  proxy
} = {}) {
  if ((secretId && !secretKey) || (!secretId && secretKey)) {
    throw Error("secretId and secretKey must be a pair");
  }

  this.config = {
    get secretId() {
      return this._secretId
        ? this._secretId
        : process.env.TENCENTCLOUD_SECRETID;
    },
    set secretId(id) {
      this._secretId = id;
    },
    get secretKey() {
      return this._secretKey
        ? this._secretKey
        : process.env.TENCENTCLOUD_SECRETKEY;
    },
    set secretKey(key) {
      this._secretKey = key;
    },
    get sessionToken() {
      if (this._sessionToken === undefined) {
        //默认临时密钥
        return process.env.TENCENTCLOUD_SESSIONTOKEN;
      } else if (this._sessionToken === false) {
        //固定秘钥
        return undefined;
      } else {
        //传入的临时密钥
        return this._sessionToken;
      }
    },
    set sessionToken(token) {
      this._sessionToken = token;
    },
    envName: env,
    proxy: proxy
  };

  this.config.secretId = secretId;
  this.config.secretKey = secretKey;
  this.config.sessionToken = sessionToken ? sessionToken : (secretId && secretKey ? false : undefined);

  return new Tcb(this.config);
};

Tcb.prototype.database = function () {
  return new database(this);
};

function each(obj, fn) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn(obj[i], i);
    }
  }
}

function extend(target, source) {
  each(source, function (val, key) {
    target[key] = source[key];
  });
  return target;
}

extend(Tcb.prototype, functions);
extend(Tcb.prototype, storage);
extend(Tcb.prototype, wx)

module.exports = new Tcb();
 
 			}); 
		define("npm/tcb-admin-node/src/db/collection.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = require('./document.js');
const query_1 = require('./query.js');
class CollectionReference extends query_1.Query {
    constructor(db, coll) {
        super(db, coll);
    }
    get name() {
        return this._coll;
    }
    doc(docID) {
        return new document_1.DocumentReference(this._db, this._coll, docID);
    }
    add(data) {
        let docRef = this.doc();
        return docRef.create(data);
    }
}
exports.CollectionReference = CollectionReference;
 
 			}); 
		define("npm/tcb-admin-node/src/db/command.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(logicParam) {
        this.logicParam = {};
        this.placeholder = "{{{AAA}}}";
        this.baseOperator = ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$in', '$nin'];
        this.toString = () => {
            return this.logicParam[0];
        };
        if (logicParam) {
            this.logicParam = logicParam;
        }
    }
    eq(target) {
        return new Command(this.baseOperate("$eq", target));
    }
    neq(target) {
        return new Command(this.baseOperate("$ne", target));
    }
    gt(target) {
        return new Command(this.baseOperate("$gt", target));
    }
    gte(target) {
        return new Command(this.baseOperate("$gte", target));
    }
    lt(target) {
        return new Command(this.baseOperate("$lt", target));
    }
    lte(target) {
        return new Command(this.baseOperate("$lte", target));
    }
    in(target) {
        return new Command(this.baseOperate("$in", target));
    }
    nin(target) {
        return new Command(this.baseOperate("$nin", target));
    }
    mul(target) {
        return new Command({ $mul: { [this.placeholder]: target } });
    }
    remove() {
        return new Command({ $unset: { [this.placeholder]: "" } });
    }
    inc(target) {
        return new Command({ $inc: { [this.placeholder]: target } });
    }
    set(target) {
        return new Command({ $set: { [this.placeholder]: target } });
    }
    push(target) {
        let value = target;
        if (Array.isArray(target)) {
            value = { $each: target };
        }
        return new Command({ $push: { [this.placeholder]: value } });
    }
    pop() {
        return new Command({ $pop: { [this.placeholder]: 1 } });
    }
    unshift(target) {
        let value = { $each: [target], $position: 0 };
        if (Array.isArray(target)) {
            value = { $each: target, $position: 0 };
        }
        return new Command({
            $push: { [this.placeholder]: value }
        });
    }
    shift() {
        return new Command({ $pop: { [this.placeholder]: -1 } });
    }
    baseOperate(operator, target) {
        return {
            [this.placeholder]: { [operator]: target }
        };
    }
    and(...targets) {
        if (targets.length === 1 && Array.isArray(targets[0])) {
            targets = targets[0];
        }
        return new Command(this.connectOperate("$and", targets));
    }
    or(...targets) {
        if (targets.length === 1 && Array.isArray(targets[0])) {
            targets = targets[0];
        }
        return new Command(this.connectOperate("$or", targets));
    }
    connectOperate(operator, targets) {
        let logicParams = [];
        if (Object.keys(this.logicParam).length > 0) {
            logicParams.push(this.logicParam);
        }
        for (let target of targets) {
            if (target instanceof Command) {
                if (Object.keys(target.logicParam).length === 0) {
                    continue;
                }
                logicParams.push(target.logicParam);
            }
            else {
                let tmp = {};
                this.concatKeys(target, '', tmp);
                let tmp1 = {};
                for (let keys in tmp) {
                    let value = tmp[keys];
                    if (value instanceof Command) {
                        Object.assign(tmp1, value.parse(keys));
                    }
                    else {
                        Object.assign(tmp1, {
                            [keys]: value
                        });
                    }
                }
                logicParams.push(tmp1);
            }
        }
        this.logicParam = [];
        return {
            [operator]: logicParams
        };
    }
    parse(key) {
        return JSON.parse(JSON.stringify(this.logicParam).replace(/{{{AAA}}}/g, key));
    }
    concatKeys(obj, key, res) {
        let keys, value;
        for (let k in obj) {
            if (typeof obj[k] === 'object' &&
                obj[k] instanceof Command === false) {
                keys = key ? key + '.' + k : k;
                this.concatKeys(obj[k], keys, res);
            }
            else {
                keys = key ? key + '.' + k : k;
                value = obj[k];
                Object.assign(res, { [keys]: value });
            }
        }
    }
}
exports.Command = Command;
 
 			}); 
		define("npm/tcb-admin-node/src/db/constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["DocIDError"] = "\u6587\u6863ID\u4E0D\u5408\u6CD5";
    ErrorCode["CollNameError"] = "\u96C6\u5408\u540D\u79F0\u4E0D\u5408\u6CD5";
    ErrorCode["OpStrError"] = "\u64CD\u4F5C\u7B26\u4E0D\u5408\u6CD5";
    ErrorCode["DirectionError"] = "\u6392\u5E8F\u5B57\u7B26\u4E0D\u5408\u6CD5";
    ErrorCode["IntergerError"] = "must be integer";
})(ErrorCode || (ErrorCode = {}));
exports.ErrorCode = ErrorCode;
const FieldType = {
    String: "String",
    Number: "Number",
    Object: "Object",
    Array: "Array",
    Boolean: "Boolean",
    Null: "Null",
    GeoPoint: "GeoPoint",
    Timestamp: "Date",
    Command: "Command",
    ServerDate: "ServerDate"
};
exports.FieldType = FieldType;
const OrderDirectionList = ["desc", "asc"];
exports.OrderDirectionList = OrderDirectionList;
const WhereFilterOpList = ["<", "<=", "==", ">=", ">"];
exports.WhereFilterOpList = WhereFilterOpList;
var Opeartor;
(function (Opeartor) {
    Opeartor["lt"] = "<";
    Opeartor["gt"] = ">";
    Opeartor["lte"] = "<=";
    Opeartor["gte"] = ">=";
    Opeartor["eq"] = "==";
})(Opeartor || (Opeartor = {}));
exports.Opeartor = Opeartor;
const OperatorMap = {
    [Opeartor.eq]: "$eq",
    [Opeartor.lt]: "$lt",
    [Opeartor.lte]: "$lte",
    [Opeartor.gt]: "$gt",
    [Opeartor.gte]: "$gte"
};
exports.OperatorMap = OperatorMap;
const UpdateOperatorList = [
    "$set",
    "$inc",
    "$mul",
    "$unset",
    "$push",
    "$pop",
    "$unshift",
    "$shift",
    "$currentDate",
    "$each",
    "$position"
];
exports.UpdateOperatorList = UpdateOperatorList;
 
 			}); 
		define("npm/tcb-admin-node/src/db/db.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geo = require('./geo/index.js');
const collection_1 = require('./collection.js');
const command_1 = require('./command.js');
const serverDate_1 = require('./serverDate/index.js');
const request_1 = require('./request.js');
class Db {
    constructor(config) {
        this.config = config;
        this.Geo = Geo;
        this.command = new command_1.Command();
    }
    serverDate({ offset = 0 } = {}) {
        return new serverDate_1.ServerDate({ offset });
    }
    collection(collName) {
        if (!collName) {
            throw new Error("Collection name is required");
        }
        return new collection_1.CollectionReference(this, collName);
    }
    createCollection(collName) {
        let request = new request_1.Request(this);
        const params = {
            collectionName: collName
        };
        return request.send("addCollection", params);
    }
}
exports.Db = Db;
 
 			}); 
		define("npm/tcb-admin-node/src/db/document.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require('./request.js');
const util_1 = require('./util.js');
const command_1 = require('./command.js');
class DocumentReference {
    constructor(db, coll, docID, projection = {}) {
        this._db = db;
        this._coll = coll;
        this.id = docID;
        this.request = new request_1.Request(this._db);
        this.projection = projection;
    }
    create(data) {
        let params = {
            collectionName: this._coll,
            data: util_1.Util.encodeDocumentDataForReq(data, false, false)
        };
        if (this.id) {
            params["_id"] = this.id;
        }
        return new Promise(resolve => {
            this.request.send("addDocument", params).then(res => {
                if (res.code) {
                    resolve(res);
                }
                resolve({
                    id: res.data._id,
                    requestId: res.requestId
                });
            });
        });
    }
    set(data) {
        if (!data || typeof data !== "object") {
            return Promise.resolve({
                code: 'INVALID_PARAM',
                message: '参数必需是非空对象'
            });
        }
        if (data.hasOwnProperty('_id')) {
            return Promise.resolve({
                code: 'INVALID_PARAM',
                message: '不能更新_id的值'
            });
        }
        let hasOperator = false;
        const checkMixed = (objs) => {
            if (typeof objs === 'object') {
                for (let key in objs) {
                    if (objs[key] instanceof command_1.Command) {
                        hasOperator = true;
                    }
                    else if (typeof objs[key] === 'object') {
                        checkMixed(objs[key]);
                    }
                }
            }
        };
        checkMixed(data);
        if (hasOperator) {
            return Promise.resolve({
                code: 'DATABASE_REQUEST_FAILED',
                message: 'update operator complicit'
            });
        }
        const merge = false;
        let param = {
            collectionName: this._coll,
            data: util_1.Util.encodeDocumentDataForReq(data, merge, false),
            multi: false,
            merge,
            upsert: true
        };
        if (this.id) {
            param["query"] = { _id: this.id };
        }
        return new Promise(resolve => {
            this.request.send("updateDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    resolve({
                        updated: res.data.updated,
                        upsertedId: res.data.upserted_id,
                        requestId: res.requestId
                    });
                }
            });
        });
    }
    update(data) {
        if (!data || typeof data !== "object") {
            return Promise.resolve({
                code: 'INVALID_PARAM',
                message: '参数必需是非空对象'
            });
        }
        if (data.hasOwnProperty('_id')) {
            return Promise.resolve({
                code: 'INVALID_PARAM',
                message: '不能更新_id的值'
            });
        }
        const query = { _id: this.id };
        const merge = true;
        const param = {
            collectionName: this._coll,
            data: util_1.Util.encodeDocumentDataForReq(data, merge, true),
            query: query,
            multi: false,
            merge,
            upsert: false
        };
        return new Promise(resolve => {
            this.request.send("updateDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    resolve({
                        updated: res.data.updated,
                        upsertedId: res.data.upserted_id,
                        requestId: res.requestId
                    });
                }
            });
        });
    }
    remove() {
        const query = { _id: this.id };
        const param = {
            collectionName: this._coll,
            query: query,
            multi: false
        };
        return new Promise(resolve => {
            this.request.send("deleteDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    resolve({
                        deleted: res.data.deleted,
                        requestId: res.requestId
                    });
                }
            });
        });
    }
    get() {
        const query = { _id: this.id };
        const param = {
            collectionName: this._coll,
            query: query,
            multi: false,
            projection: this.projection
        };
        return new Promise(resolve => {
            this.request.send("queryDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    const documents = util_1.Util.formatResDocumentData(res.data.list);
                    resolve({
                        data: documents,
                        requestId: res.requestId,
                        total: res.TotalCount,
                        limit: res.Limit,
                        offset: res.Offset
                    });
                }
            });
        });
    }
    field(projection) {
        for (let k in projection) {
            if (projection[k]) {
                projection[k] = 1;
            }
            else {
                projection[k] = 0;
            }
        }
        return new DocumentReference(this._db, this._coll, this.id, projection);
    }
}
exports.DocumentReference = DocumentReference;
 
 			}); 
		define("npm/tcb-admin-node/src/db/geo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require('./point.js'));
 
 			}); 
		define("npm/tcb-admin-node/src/db/geo/point.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require('./../validate.js');
class Point {
    constructor(longitude, latitude) {
        validate_1.Validate.isGeopoint("latitude", latitude);
        validate_1.Validate.isGeopoint("longitude", longitude);
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
exports.Point = Point;
 
 			}); 
		define("npm/tcb-admin-node/src/db/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require('./db.js'));
 
 			}); 
		define("npm/tcb-admin-node/src/db/query.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require('./request.js');
const validate_1 = require('./validate.js');
const util_1 = require('./util.js');
const command_1 = require('./command.js');
class Query {
    constructor(db, coll, fieldFilters, fieldOrders, queryOptions) {
        this._db = db;
        this._coll = coll;
        this._fieldFilters = fieldFilters;
        this._fieldOrders = fieldOrders || [];
        this._queryOptions = queryOptions || {};
        this._request = new request_1.Request(this._db);
    }
    get() {
        let newOder = [];
        if (this._fieldOrders) {
            this._fieldOrders.forEach(order => {
                newOder.push(order);
            });
        }
        let param = {
            collectionName: this._coll
        };
        if (this._fieldFilters) {
            param.query = this._fieldFilters;
        }
        if (newOder.length > 0) {
            param.order = newOder;
        }
        if (this._queryOptions.offset) {
            param.offset = this._queryOptions.offset;
        }
        if (this._queryOptions.limit) {
            param.limit =
                this._queryOptions.limit < 100 ? this._queryOptions.limit : 100;
        }
        else {
            param.limit = 100;
        }
        if (this._queryOptions.projection) {
            param.projection = this._queryOptions.projection;
        }
        return new Promise(resolve => {
            this._request.send("queryDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    const documents = util_1.Util.formatResDocumentData(res.data.list);
                    resolve({
                        data: documents,
                        requestId: res.requestId,
                        total: res.TotalCount,
                        limit: res.Limit,
                        offset: res.Offset
                    });
                }
            });
        });
    }
    count() {
        let param = {
            collectionName: this._coll
        };
        if (this._fieldFilters) {
            param.query = this._fieldFilters;
        }
        return new Promise(resolve => {
            this._request.send("countDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    resolve({
                        requestId: res.requestId,
                        total: res.data.total
                    });
                }
            });
        });
    }
    where(query) {
        return new Query(this._db, this._coll, this.convertParams(query), this._fieldOrders, this._queryOptions);
    }
    orderBy(fieldPath, directionStr) {
        validate_1.Validate.isFieldPath(fieldPath);
        validate_1.Validate.isFieldOrder(directionStr);
        const newOrder = {
            field: fieldPath,
            direction: directionStr
        };
        const combinedOrders = this._fieldOrders.concat(newOrder);
        return new Query(this._db, this._coll, this._fieldFilters, combinedOrders, this._queryOptions);
    }
    limit(limit) {
        validate_1.Validate.isInteger("limit", limit);
        let option = Object.assign({}, this._queryOptions);
        option.limit = limit;
        return new Query(this._db, this._coll, this._fieldFilters, this._fieldOrders, option);
    }
    skip(offset) {
        validate_1.Validate.isInteger("offset", offset);
        let option = Object.assign({}, this._queryOptions);
        option.offset = offset;
        return new Query(this._db, this._coll, this._fieldFilters, this._fieldOrders, option);
    }
    update(data) {
        if (!data || typeof data !== "object") {
            return Promise.resolve({
                code: 'INVALID_PARAM',
                message: '参数必需是非空对象'
            });
        }
        if (data.hasOwnProperty('_id')) {
            return Promise.resolve({
                code: 'INVALID_PARAM',
                message: '不能更新_id的值'
            });
        }
        let param = {
            collectionName: this._coll,
            query: this._fieldFilters,
            multi: true,
            merge: true,
            upsert: false,
            data: util_1.Util.encodeDocumentDataForReq(data, true)
        };
        return new Promise(resolve => {
            this._request.send("updateDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    resolve({
                        requestId: res.requestId,
                        updated: res.data.updated,
                        upsertId: res.data.upsert_id
                    });
                }
            });
        });
    }
    field(projection) {
        for (let k in projection) {
            if (projection[k]) {
                projection[k] = 1;
            }
            else {
                projection[k] = 0;
            }
        }
        let option = Object.assign({}, this._queryOptions);
        option.projection = projection;
        return new Query(this._db, this._coll, this._fieldFilters, this._fieldOrders, option);
    }
    remove() {
        const param = {
            collectionName: this._coll,
            query: this._fieldFilters,
            multi: true
        };
        return new Promise(resolve => {
            this._request.send("deleteDocument", param).then(res => {
                if (res.code) {
                    resolve(res);
                }
                else {
                    resolve({
                        requestId: res.requestId,
                        deleted: res.data.deleted
                    });
                }
            });
        });
    }
    convertParams(query) {
        let queryParam = {};
        if (query instanceof command_1.Command) {
            queryParam = query.parse();
        }
        else {
            for (let key in query) {
                if (query[key] instanceof command_1.Command) {
                    queryParam = Object.assign({}, queryParam, query[key].parse(key));
                }
                else if (typeof query[key] === "object") {
                    let command = new command_1.Command();
                    let tmp = {};
                    command.concatKeys({ [key]: query[key] }, '', tmp);
                    let keys = Object.keys(tmp)[0];
                    let value = tmp[keys];
                    if (value instanceof command_1.Command) {
                        value = value.parse(keys);
                    }
                    else {
                        value = { [keys]: value };
                    }
                    queryParam = Object.assign({}, queryParam, value);
                }
                else {
                    queryParam = Object.assign({}, queryParam, { [key]: query[key] });
                }
            }
        }
        return queryParam;
    }
}
exports.Query = Query;
 
 			}); 
		define("npm/tcb-admin-node/src/db/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestHandler = require('./../utils/httpRequest.js');
class Request {
    constructor(db) {
        this.db = db;
    }
    send(api, data) {
        const params = Object.assign({}, data, {
            action: `database.${api}`
        });
        return requestHandler({
            config: this.db.config.config,
            params,
            method: "post",
            headers: {
                "content-type": "application/json"
            }
        });
    }
}
exports.Request = Request;
 
 			}); 
		define("npm/tcb-admin-node/src/db/serverDate/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerDate {
    constructor({ offset }) {
        this.offset = offset;
    }
}
exports.ServerDate = ServerDate;
 
 			}); 
		define("npm/tcb-admin-node/src/db/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require('./constant.js');
const point_1 = require('./geo/point.js');
const command_1 = require('./command.js');
const deepAssign = require('./../../../deep-assign/index.js');
const serverDate_1 = require('./serverDate/index.js');
class Util {
}
Util.encodeGeoPoint = (point) => {
    if (!(point instanceof point_1.Point)) {
        throw new Error("encodeGeoPoint: must be GeoPoint type");
    }
    return {
        type: "Point",
        coordinates: [point.latitude, point.longitude]
    };
};
Util.encodeServerDate = (serverDate) => {
    return { $date: { offset: serverDate.offset } };
};
Util.encodeTimestamp = (stamp) => {
    if (!(stamp instanceof Date)) {
        throw new Error("encodeTimestamp: must be Date type");
    }
    return {
        $timestamp: Math.floor(stamp.getTime() / 1000)
    };
};
Util.encodeDocumentDataForReq = (document, merge = false, concatKey = true) => {
    const keys = Object.keys(document);
    let params = {};
    if (Array.isArray(document)) {
        params = [];
    }
    const getCommandVal = (obj) => {
        let res = {};
        let command = new command_1.Command();
        command.concatKeys(obj, '', res);
        for (let key in res) {
            if (res[key] instanceof command_1.Command) {
                res[key] = res[key].parse(key);
            }
        }
        return res;
    };
    keys.forEach(key => {
        const item = document[key];
        const type = Util.whichType(item);
        let realValue;
        if (type === constant_1.FieldType.GeoPoint) {
            realValue = { [key]: Util.encodeGeoPoint(item).coordinates };
        }
        else if (type === constant_1.FieldType.Timestamp) {
            realValue = { [key]: Util.encodeTimestamp(item) };
        }
        else if (type === constant_1.FieldType.ServerDate) {
            realValue = { [key]: Util.encodeServerDate(item) };
        }
        else if (type === constant_1.FieldType.Object) {
            if (concatKey) {
                realValue = getCommandVal({ [key]: item });
            }
            else {
                realValue = { [key]: Util.encodeDocumentDataForReq(item, merge, concatKey) };
            }
        }
        else if (type === constant_1.FieldType.Command) {
            realValue = getCommandVal({ [key]: item });
        }
        else {
            realValue = { [key]: item };
        }
        if (constant_1.UpdateOperatorList.indexOf(Object.keys(realValue)[0]) === -1 && merge === true) {
            realValue = { $set: realValue };
        }
        if (Array.isArray(params)) {
            params.push(realValue);
        }
        else {
            params = deepAssign({}, params, realValue);
        }
    });
    return params;
};
Util.formatResDocumentData = (documents) => {
    return documents.map(document => {
        return Util.formatField(document);
    });
};
Util.formatField = document => {
    const keys = Object.keys(document);
    let protoField = {};
    if (Array.isArray(document)) {
        protoField = [];
    }
    keys.forEach(key => {
        const item = document[key];
        const type = Util.whichType(item);
        let realValue;
        switch (type) {
            case constant_1.FieldType.GeoPoint:
                realValue = new point_1.Point(item.coordinates[0], item.coordinates[1]);
                break;
            case constant_1.FieldType.Timestamp:
                realValue = new Date(item.$timestamp * 1000);
                break;
            case constant_1.FieldType.Object:
            case constant_1.FieldType.Array:
                realValue = Util.formatField(item);
                break;
            case constant_1.FieldType.ServerDate:
                realValue = new Date(item.$date);
                break;
            default:
                realValue = item;
        }
        if (Array.isArray(protoField)) {
            protoField.push(realValue);
        }
        else {
            protoField[key] = realValue;
        }
    });
    return protoField;
};
Util.whichType = (obj) => {
    let type = Object.prototype.toString.call(obj).slice(8, -1);
    if (type === constant_1.FieldType.Object) {
        if (obj instanceof point_1.Point) {
            return constant_1.FieldType.GeoPoint;
        }
        else if (obj instanceof Date) {
            return constant_1.FieldType.Timestamp;
        }
        else if (obj instanceof command_1.Command) {
            return constant_1.FieldType.Command;
        }
        else if (obj instanceof serverDate_1.ServerDate) {
            return constant_1.FieldType.ServerDate;
        }
        if (obj.$timestamp) {
            type = constant_1.FieldType.Timestamp;
        }
        else if (obj.$date) {
            type = constant_1.FieldType.ServerDate;
        }
        else if (Array.isArray(obj.coordinates) && obj.type === "Point") {
            type = constant_1.FieldType.GeoPoint;
        }
    }
    return type;
};
Util.generateDocId = () => {
    let chars = "ABCDEFabcdef0123456789";
    let autoId = "";
    for (let i = 0; i < 24; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return autoId;
};
exports.Util = Util;
 
 			}); 
		define("npm/tcb-admin-node/src/db/validate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require('./constant.js');
const util_1 = require('./util.js');
class Validate {
    static isGeopoint(point, degree) {
        if (util_1.Util.whichType(degree) !== constant_1.FieldType.Number) {
            throw new Error("Geo Point must be number type");
        }
        const degreeAbs = Math.abs(degree);
        if (point === "latitude" && degreeAbs > 90) {
            throw new Error("latitude should be a number ranges from -90 to 90");
        }
        else if (point === "longitude" && degreeAbs > 180) {
            throw new Error("longitude should be a number ranges from -180 to 180");
        }
        return true;
    }
    static isInteger(param, num) {
        if (!Number.isInteger(num)) {
            throw new Error(param + constant_1.ErrorCode.IntergerError);
        }
        return true;
    }
    static isFieldOrder(direction) {
        if (constant_1.OrderDirectionList.indexOf(direction) === -1) {
            throw new Error(constant_1.ErrorCode.DirectionError);
        }
        return true;
    }
    static isFieldPath(path) {
        if (!/^[a-zA-Z0-9-_\.]/.test(path)) {
            throw new Error();
        }
        return true;
    }
    static isOperator(op) {
        if (constant_1.WhereFilterOpList.indexOf(op) === -1) {
            throw new Error(constant_1.ErrorCode.OpStrError);
        }
        return true;
    }
    static isCollName(name) {
        if (!/^[a-zA-Z0-9]([a-zA-Z0-9-_]){1,32}$/.test(name)) {
            throw new Error(constant_1.ErrorCode.CollNameError);
        }
        return true;
    }
    static isDocID(docId) {
        if (!/^([a-fA-F0-9]){24}$/.test(docId)) {
            throw new Error(constant_1.ErrorCode.DocIDError);
        }
        return true;
    }
}
exports.Validate = Validate;
 
 			}); 
		define("npm/tcb-admin-node/src/functions/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
const httpRequest = require('./../utils/httpRequest.js');

/**
 * 调用云函数
 * @param {String} name  函数名
 * @param {Object} functionParam 函数参数
 * @return {Promise}
 */
function callFunction({ name, data }) {
  try {
    data = data ? JSON.stringify(data) : "";
  } catch (e) {
    return Promise.reject(e);
  }
  if (!name) {
    return Promise.reject(
      new Error({
        message: "函数名不能为空"
      })
    );
  }

  let params = {
    action: "functions.invokeFunction",
    function_name: name,
    request_data: data
  };

  return httpRequest({
    config: this.config,
    params,
    method: "post",
    headers: {
      "content-type": "application/json"
    }
  }).then(res => {
    // console.log(res);
    if (res.code) {
      return res;
    } else {
      let result = res.data.response_data
      try {
        result = JSON.parse(res.data.response_data)
      } catch (e) { }
      return {
        result,
        requestId: res.requestId
      };
    }
  });
}

exports.callFunction = callFunction;
 
 			}); 
		define("npm/tcb-admin-node/src/utils/httpRequest.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var request = require('./../../../request/index.js');
var auth = require('./auth.js');

module.exports = function (args) {
  var config = args.config,
    params = args.params,
    method = args.method || "get";

  params = Object.assign({}, params, {
    envName: config.envName,
    timestamp: new Date().valueOf(),
    eventId: ""
  });

  for (let key in params) {
    if (params[key] === undefined) {
      delete params[key];
    }
  }

  let file = null;
  if (params.action === "storage.uploadFile") {
    file = params["file"];
    delete params["file"];
  }

  if (!config.secretId || !config.secretKey) {
    if (process.env.TENCENTCLOUD_RUNENV === 'SCF') {
      throw Error("missing authoration key, redeploy the function")
    }
    throw Error("missing secretId or secretKey of tencent cloud");
  }

  const authObj = {
    SecretId: config.secretId,
    SecretKey: config.secretKey,
    Method: method,
    pathname: "/admin",
    Query: params,
    Headers: Object.assign(
      {
        "user-agent": "tcb-admin-sdk"
      },
      args.headers || {}
    )
  };

  var authorization = auth.getAuth(authObj);

  params.authorization = authorization;
  file && (params.file = file);
  config.sessionToken && (params.sessionToken = config.sessionToken);

  // console.log(params);
  var opts = {
    // url: 'http://localhost:8002/admin',
    url: "http://tcb-admin.tencentcloudapi.com/admin",
    method: args.method || "get",
    timeout: args.timeout || 50000,
    headers: authObj.Headers,
    proxy: config.proxy
  };

  if (params.action === "storage.uploadFile") {
    opts.formData = params;
    opts.formData.file = {
      value: params.file,
      options: {
        filename: params.path
      }
    };
  } else if (args.method == "post") {
    opts.body = params;
    opts.json = true;
  } else {
    opts.qs = params;
  }

  if (params.action === 'wx.api') {
    opts.url = 'https://tcb-open.tencentcloudapi.com/admin'
  }

  if (args.proxy) {
    opts.proxy = args.proxy;
  }

  // console.log(JSON.stringify(opts));
  return new Promise(function (resolve, reject) {
    request(opts, function (err, response, body) {
      // console.log(err, body);
      args && args.callback && args.callback(response)

      if (err === null && response.statusCode == 200) {
        let res;
        try {
          res = typeof body === "string" ? JSON.parse(body) : body;
        } catch (e) {
          res = body;
        }
        return resolve(res);
      } else {
        return reject(err);
      }
    });
  });
};
 
 			}); 
		define("npm/tcb-admin-node/src/wx/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
const httpRequest = require('./../utils/httpRequest.js');

exports.callWxOpenApi = function ({ apiName, requestData, event } = {}) {
    try {
        requestData = requestData ? JSON.stringify(requestData) : "";
    } catch (e) {
        throw Error(e)
    }

    const { wxCloudApiToken } = event
    let params = {
        action: "wx.api",
        apiName,
        requestData,
        wxCloudApiToken
    };

    return httpRequest({
        config: this.config,
        params,
        method: "post",
        headers: {
            "content-type": "application/json"
        }
    }).then(res => {
        // console.log(res);
        if (res.code) {
            return res;
        } else {
            let result = res.data.responseData
            try {
                result = JSON.parse(res.data.responseData)
            } catch (e) { }
            return {
                result,
                requestId: res.requestId
            };
        }
    });
}
 
 			}); 
		define("npm/tslib/tslib.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});
 
 			}); 
		define("npm/wepy-async-function/global.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
/**
 * Tencent is pleased to support the open source community by making WePY available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * 
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */


var global = module.exports = typeof window !== 'undefined' && window.Math === Math
  ? window : typeof self !== 'undefined' && self.Math === Math ? self : this;
 
 			}); 
		define("npm/wepy-async-function/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
/**
 * Tencent is pleased to support the open source community by making WePY available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */


var g = require('./global.js');

if (!g.Promise) {
  // IOS 10.0.1 may cause IOS crash.
  g.Promise = require('./../promise-polyfill/promise.js');
}
if (!g.regeneratorRuntime) {
  g.regeneratorRuntime = require('./../regenerator-runtime/runtime.js');
}
 
 			}); 
		define("npm/wepy-com-toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_wepy$component) {
    _inherits(Panel, _wepy$component);

    function Panel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Panel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            reveal: false,
            img: '',
            animationData: '',
            imgClassName: '',
            imgMode: 'scaleToFill',
            title: '载入中...',
            titleClassName: ''
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Panel, [{
        key: 'onLoad',
        value: function onLoad() {
            this.hasPromise = (typeof Promise === 'undefined' ? 'undefined' : _typeof(Promise)) !== undefined;
        }
    }, {
        key: 'show',
        value: function show() {
            var _this2 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.reveal = true;
            for (var k in data) {
                this[k] = data[k];
            }
            this.$apply();

            clearTimeout(this.__timeout);

            setTimeout(function () {
                var animation = wx.createAnimation();
                animation.opacity(1).step();
                _this2.animationData = animation.export();
                _this2.reveal = true;
                _this2.$apply();
            }, 30);

            if (data.duration === 0) {
                // success callback after toast showed
                if (this.hasPromise) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(data);
                        }, 430);
                    });
                } else {
                    setTimeout(function () {
                        return typeof data.success === 'function' ? data.success(data) : data;
                    }, 430);
                }
            } else {
                if (this.hasPromise) {
                    return new Promise(function (resolve, reject) {
                        _this2.__timeout = setTimeout(function () {
                            _this2.toast();
                            resolve(data);
                        }, (data.duration || 1500) + 400);
                    });
                } else {
                    this.__timeout = setTimeout(function () {
                        _this2.toast();

                        // success callback
                        typeof data.success === 'function' && data.success(data);
                    }, (data.duration || 1500) + 400);
                }
            }
        }
    }, {
        key: 'toast',
        value: function toast(data) {
            var err = false;
            try {
                if (!data) {
                    this.hide();
                } else {
                    this.show(data);
                }
            } catch (e) {
                err = e;
            }

            if (this.hasPromise) {
                return new Promise(function (resolve, reject) {
                    if (!err) {
                        resolve(data);
                    } else reject(data);
                });
            } else {
                if (err) {
                    typeof data.fail === 'function' && data.fail(data);
                } else {
                    typeof data.success === 'function' && data.success(data);
                }
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            clearTimeout(this.__timeout);
            this.reveal = false;

            var animation = wx.createAnimation();
            animation.opacity(0).step();
            this.animationData = animation.export();

            this.$apply();

            if (this.hasPromise) {
                return new Promise(function (resolve, reject) {
                    resolve();
                });
            } else {
                if (typeof data.success === 'function') {
                    return data.success(data);
                }
            }
        }
    }]);

    return Panel;
}(_wepy2.default.component);

exports.default = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlBhbmVsIiwiZGF0YSIsInJldmVhbCIsImltZyIsImFuaW1hdGlvbkRhdGEiLCJpbWdDbGFzc05hbWUiLCJpbWdNb2RlIiwidGl0bGUiLCJ0aXRsZUNsYXNzTmFtZSIsIm1ldGhvZHMiLCJoYXNQcm9taXNlIiwiUHJvbWlzZSIsInVuZGVmaW5lZCIsImsiLCIkYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJfX3RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwid3giLCJjcmVhdGVBbmltYXRpb24iLCJvcGFjaXR5Iiwic3RlcCIsImV4cG9ydCIsImR1cmF0aW9uIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJ0b2FzdCIsImVyciIsImhpZGUiLCJzaG93IiwiZSIsImZhaWwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsSSxHQUFPO0FBQ0hDLG9CQUFRLEtBREw7QUFFSEMsaUJBQUssRUFGRjtBQUdIQywyQkFBZSxFQUhaO0FBSUhDLDBCQUFjLEVBSlg7QUFLSEMscUJBQVMsYUFMTjtBQU1IQyxtQkFBTyxRQU5KO0FBT0hDLDRCQUFnQjtBQVBiLFMsUUFVZEMsTyxHQUFVLEU7Ozs7O2lDQUVPO0FBQ04saUJBQUtDLFVBQUwsR0FBbUIsUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQkMsU0FBdEM7QUFDSDs7OytCQUVnQjtBQUFBOztBQUFBLGdCQUFYWCxJQUFXLHVFQUFKLEVBQUk7O0FBQ2IsaUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUssSUFBSVcsQ0FBVCxJQUFjWixJQUFkLEVBQW9CO0FBQ2hCLHFCQUFLWSxDQUFMLElBQVVaLEtBQUtZLENBQUwsQ0FBVjtBQUNIO0FBQ0QsaUJBQUtDLE1BQUw7O0FBRUFDLHlCQUFhLEtBQUtDLFNBQWxCOztBQUVBQyx1QkFBVyxZQUFJO0FBQ1gsb0JBQUlDLFlBQVlDLEdBQUdDLGVBQUgsRUFBaEI7QUFDQUYsMEJBQVVHLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCO0FBQ0EsdUJBQUtsQixhQUFMLEdBQXFCYyxVQUFVSyxNQUFWLEVBQXJCO0FBQ0EsdUJBQUtyQixNQUFMLEdBQWMsSUFBZDtBQUNBLHVCQUFLWSxNQUFMO0FBQ0gsYUFORCxFQU1FLEVBTkY7O0FBU0EsZ0JBQUliLEtBQUt1QixRQUFMLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCO0FBQ0Esb0JBQUksS0FBS2QsVUFBVCxFQUFxQjtBQUNqQiwyQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ2MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDVCxtQ0FBWSxZQUFNO0FBQ2RRLG9DQUFReEIsSUFBUjtBQUNILHlCQUZELEVBRUcsR0FGSDtBQUdILHFCQUpNLENBQVA7QUFLSCxpQkFORCxNQU1RO0FBQ0pnQiwrQkFBWSxZQUFNO0FBQ2QsK0JBQVEsT0FBT2hCLEtBQUswQixPQUFaLEtBQXdCLFVBQXpCLEdBQXVDMUIsS0FBSzBCLE9BQUwsQ0FBYTFCLElBQWIsQ0FBdkMsR0FBNERBLElBQW5FO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0g7QUFDSixhQWJELE1BYU87QUFDSCxvQkFBSSxLQUFLUyxVQUFULEVBQXFCO0FBQ2pCLDJCQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDYyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsK0JBQUtWLFNBQUwsR0FBaUJDLFdBQVksWUFBTTtBQUMvQixtQ0FBS1csS0FBTDtBQUNBSCxvQ0FBUXhCLElBQVI7QUFDSCx5QkFIZ0IsRUFHZCxDQUFDQSxLQUFLdUIsUUFBTCxJQUFpQixJQUFsQixJQUEwQixHQUhaLENBQWpCO0FBSUgscUJBTE0sQ0FBUDtBQU1ILGlCQVBELE1BT087QUFDSCx5QkFBS1IsU0FBTCxHQUFpQkMsV0FBVyxZQUFNO0FBQzlCLCtCQUFLVyxLQUFMOztBQUVBO0FBQ0EsK0JBQU8zQixLQUFLMEIsT0FBWixLQUF3QixVQUF4QixJQUFzQzFCLEtBQUswQixPQUFMLENBQWExQixJQUFiLENBQXRDO0FBQ0gscUJBTGdCLEVBS2QsQ0FBQ0EsS0FBS3VCLFFBQUwsSUFBaUIsSUFBbEIsSUFBMEIsR0FMWixDQUFqQjtBQU1IO0FBQ0o7QUFDSjs7OzhCQUVNdkIsSSxFQUFNO0FBQ1QsZ0JBQUk0QixNQUFNLEtBQVY7QUFDQSxnQkFBSTtBQUNBLG9CQUFJLENBQUM1QixJQUFMLEVBQVc7QUFDUCx5QkFBSzZCLElBQUw7QUFDSCxpQkFGRCxNQUVPO0FBQ0gseUJBQUtDLElBQUwsQ0FBVTlCLElBQVY7QUFDSDtBQUNKLGFBTkQsQ0FNRSxPQUFPK0IsQ0FBUCxFQUFVO0FBQ1JILHNCQUFNRyxDQUFOO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS3RCLFVBQVQsRUFBcUI7QUFDakIsdUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNjLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx3QkFBSSxDQUFDRyxHQUFMLEVBQVU7QUFDTkosZ0NBQVF4QixJQUFSO0FBQ0gscUJBRkQsTUFHSXlCLE9BQU96QixJQUFQO0FBQ1AsaUJBTE0sQ0FBUDtBQU1ILGFBUEQsTUFPTztBQUNILG9CQUFJNEIsR0FBSixFQUFTO0FBQ0wsMkJBQU81QixLQUFLZ0MsSUFBWixLQUFxQixVQUFyQixJQUFtQ2hDLEtBQUtnQyxJQUFMLENBQVVoQyxJQUFWLENBQW5DO0FBQ0gsaUJBRkQsTUFFTztBQUNILDJCQUFPQSxLQUFLMEIsT0FBWixLQUF3QixVQUF4QixJQUFzQzFCLEtBQUswQixPQUFMLENBQWExQixJQUFiLENBQXRDO0FBQ0g7QUFDSjtBQUNKOzs7K0JBRU87QUFDSmMseUJBQWEsS0FBS0MsU0FBbEI7QUFDQSxpQkFBS2QsTUFBTCxHQUFjLEtBQWQ7O0FBRUEsZ0JBQUlnQixZQUFZQyxHQUFHQyxlQUFILEVBQWhCO0FBQ0FGLHNCQUFVRyxPQUFWLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQjtBQUNBLGlCQUFLbEIsYUFBTCxHQUFxQmMsVUFBVUssTUFBVixFQUFyQjs7QUFFQSxpQkFBS1QsTUFBTDs7QUFFQSxnQkFBSSxLQUFLSixVQUFULEVBQXFCO0FBQ2pCLHVCQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDYyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENEO0FBQ0gsaUJBRk0sQ0FBUDtBQUdILGFBSkQsTUFJTztBQUNILG9CQUFJLE9BQU94QixLQUFLMEIsT0FBWixLQUF3QixVQUE1QixFQUF3QztBQUNwQywyQkFBTzFCLEtBQUswQixPQUFMLENBQWExQixJQUFiLENBQVA7QUFDSDtBQUNKO0FBQ0o7Ozs7RUFuSDhCaUMsZUFBS0MsUzs7a0JBQW5CbkMsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHJldmVhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6ICcnLFxyXG4gICAgICAgICAgICBpbWdDbGFzc05hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbWdNb2RlOiAnc2NhbGVUb0ZpbGwnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+i9veWFpeS4rS4uLicsXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3NOYW1lOiAnJ1xyXG4gICAgICAgIH07XHJcblxyXG5cdG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNQcm9taXNlID0gKHR5cGVvZiBQcm9taXNlICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdyAoZGF0YSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tdID0gZGF0YVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX190aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vcGFjaXR5KDEpLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sMzApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmR1cmF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzIGNhbGxiYWNrIGFmdGVyIHRvYXN0IHNob3dlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykgPyBkYXRhLnN1Y2Nlc3MoZGF0YSkgOiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQzMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RpbWVvdXQgPSBzZXRUaW1lb3V0ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoZGF0YS5kdXJhdGlvbiB8fCAxNTAwKSArIDQwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhLnN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGRhdGEuZHVyYXRpb24gfHwgMTUwMCkgKyA0MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdG9hc3QgKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGVyciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXJyID0gZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5mYWlsID09PSAnZnVuY3Rpb24nICYmIGRhdGEuZmFpbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhLnN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoaWRlICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX190aW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLm9wYWNpdHkoMCkuc3RlcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19 
 			}); 
		define("npm/wepy/lib/app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _native = require('./native.js');

var _native2 = _interopRequireDefault(_native);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestMQ = {
    map: {},
    mq: [],
    running: [],
    MAX_REQUEST: 5,
    push: function push(param) {
        param.t = +new Date();
        while (this.mq.indexOf(param.t) > -1 || this.running.indexOf(param.t) > -1) {
            param.t += Math.random() * 10 >> 0;
        }
        this.mq.push(param.t);
        this.map[param.t] = param;
    },
    next: function next() {
        var me = this;

        if (this.mq.length === 0) return;

        if (this.running.length < this.MAX_REQUEST - 1) {
            var newone = this.mq.shift();
            var obj = this.map[newone];
            var oldComplete = obj.complete;
            obj.complete = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                me.running.splice(me.running.indexOf(obj.t), 1);
                delete me.map[obj.t];
                oldComplete && oldComplete.apply(obj, args);
                me.next();
            };
            this.running.push(obj.t);
            return wx.request(obj);
        }
    },
    request: function request(obj) {

        obj = obj || {};
        obj = typeof obj === 'string' ? { url: obj } : obj;

        this.push(obj);

        return this.next();
    }
};

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$addons = {};
        this.$interceptors = {};
        this.$pages = {};
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init(wepy) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.$initAPI(wepy, config.noPromiseAPI);
            this.$wxapp = getApp();
        }
    }, {
        key: 'use',
        value: function use(addon) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            if (typeof addon === 'string' && this[addon]) {
                this.$addons[addon] = 1;
                this[addon](args);
            } else {
                this.$addons[addon.name] = new addon(args);
            }
        }
    }, {
        key: 'intercept',
        value: function intercept(api, provider) {
            this.$interceptors[api] = provider;
        }
    }, {
        key: 'promisify',
        value: function promisify() {}
    }, {
        key: 'requestfix',
        value: function requestfix() {}
    }, {
        key: '$initAPI',
        value: function $initAPI(wepy, noPromiseAPI) {
            var self = this;
            var noPromiseMethods = {
                stopRecord: true,
                getRecorderManager: true,
                pauseVoice: true,
                stopVoice: true,
                pauseBackgroundAudio: true,
                stopBackgroundAudio: true,
                getBackgroundAudioManager: true,
                createAudioContext: true,
                createInnerAudioContext: true,
                createVideoContext: true,
                createCameraContext: true,

                createMapContext: true,

                canIUse: true,
                startAccelerometer: true,
                stopAccelerometer: true,
                startCompass: true,
                stopCompass: true,
                onBLECharacteristicValueChange: true,
                onBLEConnectionStateChange: true,

                hideToast: true,
                hideLoading: true,
                showNavigationBarLoading: true,
                hideNavigationBarLoading: true,
                navigateBack: true,
                createAnimation: true,
                pageScrollTo: true,
                createSelectorQuery: true,
                createCanvasContext: true,
                createContext: true,
                drawCanvas: true,
                hideKeyboard: true,
                stopPullDownRefresh: true,

                reportAnalytics: true,

                arrayBufferToBase64: true,
                base64ToArrayBuffer: true
            };
            if (noPromiseAPI) {
                if (Array.isArray(noPromiseAPI)) {
                    noPromiseAPI.forEach(function (v) {
                        return noPromiseMethods[v] = true;
                    });
                } else {
                    for (var k in noPromiseAPI) {
                        noPromiseMethods[k] = noPromiseAPI[k];
                    }
                }
            }
            Object.keys(wx).forEach(function (key) {
                if (!noPromiseMethods[key] && key.substr(0, 2) !== 'on' && !/\w+Sync$/.test(key)) {
                    Object.defineProperty(_native2.default, key, {
                        get: function get() {
                            return function (obj) {
                                obj = obj || {};
                                if (self.$interceptors[key] && self.$interceptors[key].config) {
                                    var rst = self.$interceptors[key].config.call(self, obj);
                                    if (rst === false) {
                                        if (self.$addons.promisify) {
                                            return Promise.reject('aborted by interceptor');
                                        } else {
                                            obj.fail && obj.fail('aborted by interceptor');
                                            return;
                                        }
                                    }
                                    obj = rst;
                                }
                                if (key === 'request') {
                                    obj = typeof obj === 'string' ? { url: obj } : obj;
                                }
                                if (typeof obj === 'string') {
                                    return wx[key](obj);
                                }
                                if (self.$addons.promisify) {
                                    var task = void 0;
                                    var p = new Promise(function (resolve, reject) {
                                        var bak = {};
                                        ['fail', 'success', 'complete'].forEach(function (k) {
                                            bak[k] = obj[k];
                                            obj[k] = function (res) {
                                                if (self.$interceptors[key] && self.$interceptors[key][k]) {
                                                    res = self.$interceptors[key][k].call(self, res);
                                                }
                                                if (k === 'success') resolve(res);else if (k === 'fail') reject(res);
                                            };
                                        });
                                        if (self.$addons.requestfix && key === 'request') {
                                            RequestMQ.request(obj);
                                        } else {
                                            task = wx[key](obj);
                                        }
                                    });
                                    if (key === 'uploadFile' || key === 'downloadFile') {
                                        p.progress = function (cb) {
                                            task.onProgressUpdate(cb);
                                            return p;
                                        };
                                        p.abort = function (cb) {
                                            cb && cb();
                                            task.abort();
                                            return p;
                                        };
                                    }
                                    return p;
                                } else {
                                    var bak = {};
                                    ['fail', 'success', 'complete'].forEach(function (k) {
                                        bak[k] = obj[k];
                                        obj[k] = function (res) {
                                            if (self.$interceptors[key] && self.$interceptors[key][k]) {
                                                res = self.$interceptors[key][k].call(self, res);
                                            }
                                            bak[k] && bak[k].call(self, res);
                                        };
                                    });
                                    if (self.$addons.requestfix && key === 'request') {
                                        RequestMQ.request(obj);
                                    } else {
                                        return wx[key](obj);
                                    }
                                }
                            };
                        }
                    });
                    wepy[key] = _native2.default[key];
                } else {
                    Object.defineProperty(_native2.default, key, {
                        get: function get() {
                            return function () {
                                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                                    args[_key3] = arguments[_key3];
                                }

                                return wx[key].apply(wx, args);
                            };
                        }
                    });
                    wepy[key] = _native2.default[key];
                }
            });
        }
    }]);

    return _class;
}();

exports.default = _class;
//# sourceMappingURL=app.js.map 
 			}); 
		define("npm/wepy/lib/base.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PAGE_EVENT = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];
var APP_EVENT = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound'];

var $bindEvt = function $bindEvt(config, com, prefix) {
    com.$prefix = _util2.default.camelize(prefix || '');
    Object.getOwnPropertyNames(com.components || {}).forEach(function (name) {
        var cClass = com.components[name];
        var child = new cClass();
        child.$initMixins();
        child.$name = name;
        var comPrefix = prefix ? prefix + child.$name + '$' : '$' + child.$name + '$';

        com.$com[name] = child;

        $bindEvt(config, child, comPrefix);
    });
    Object.getOwnPropertyNames(com.constructor.prototype || []).forEach(function (prop) {
        if (prop !== 'constructor' && PAGE_EVENT.indexOf(prop) === -1) {
            config[prop] = function () {
                com.constructor.prototype[prop].apply(com, arguments);
                com.$apply();
            };
        }
    });

    var allMethods = Object.getOwnPropertyNames(com.methods || []);

    com.$mixins.forEach(function (mix) {
        allMethods = allMethods.concat(Object.getOwnPropertyNames(mix.methods || []));
    });

    allMethods.forEach(function (method, i) {
        config[com.$prefix + method] = function (e) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var evt = new _event2.default('system', this, e.type);
            evt.$transfor(e);
            var wepyParams = [],
                paramsLength = 0,
                tmp = void 0,
                p = void 0,
                comIndex = void 0;
            if (e.currentTarget && e.currentTarget.dataset) {
                tmp = e.currentTarget.dataset;
                while (tmp['wpy' + method.toLowerCase() + (p = String.fromCharCode(65 + paramsLength++))] !== undefined) {
                    wepyParams.push(tmp['wpy' + method.toLowerCase() + p]);
                }
                if (tmp.comIndex !== undefined) {
                    comIndex = tmp.comIndex;
                }
            }

            if (comIndex !== undefined) {
                comIndex = ('' + comIndex).split('-');
                var level = comIndex.length,
                    _tmp = level;
                while (level-- > 0) {
                    _tmp = level;
                    var tmpcom = com;
                    while (_tmp-- > 0) {
                        tmpcom = tmpcom.$parent;
                    }
                    tmpcom.$setIndex(comIndex.shift());
                }
            }

            args = args.concat(wepyParams);
            var rst = void 0,
                mixRst = void 0;
            var comfn = com.methods[method];
            if (comfn) {
                rst = comfn.apply(com, args.concat(evt));
            }
            com.$mixins.forEach(function (mix) {
                mix.methods[method] && (mixRst = mix.methods[method].apply(com, args.concat(evt)));
            });
            com.$apply();
            return comfn ? rst : mixRst;
        };
    });
    return config;
};

exports.default = {
    $createApp: function $createApp(appClass, appConfig) {
        var config = {};
        var app = new appClass();

        if (!this.$instance) {
            app.$init(this, appConfig);
            this.$instance = app;
            this.$appConfig = appConfig;
        }

        if (arguments.length === 2 && arguments[1] === true) {
            config.$app = app;
        }

        app.$wxapp = getApp();

        APP_EVENT = APP_EVENT.concat(appConfig.appEvents || []);
        PAGE_EVENT = PAGE_EVENT.concat(appConfig.pageEvents || []);

        APP_EVENT.forEach(function (v) {
            config[v] = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                var rst = void 0;
                !app.$wxapp && (app.$wxapp = getApp());
                app[v] && (rst = app[v].apply(app, args));
                return rst;
            };
        });
        return config;
    },
    $createPage: function $createPage(pageClass, pagePath) {
        var self = this;
        var config = {},
            k = void 0;
        var page = new pageClass();
        if (typeof pagePath === 'string') {
            this.$instance.$pages['/' + pagePath] = page;
        }
        page.$initMixins();

        if (typeof pagePath === 'boolean' && pagePath || arguments.length === 3 && arguments[2] === true) config.$page = page;

        config.onLoad = function () {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            !('options' in this) && (this.options = args.length ? args[0] : {});

            page.$name = pageClass.name || 'unnamed';
            page.$init(this, self.$instance, self.$instance);

            var prevPage = self.$instance.__prevPage__;
            var secParams = {};
            secParams.from = prevPage ? prevPage : undefined;

            if (prevPage && prevPage.$preloadData) {
                secParams.preload = prevPage.$preloadData;
                prevPage.$preloadData = undefined;
            }
            if (page.$prefetchData) {
                secParams.prefetch = page.$prefetchData;
                page.$prefetchData = undefined;
            }
            args.push(secParams);

            page.$onLoad.apply(page, args);

            page.$apply();
        };

        config.onUnload = function () {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            page.$onUnload.apply(page, args);
        };

        config.onShow = function () {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

            self.$instance.__prevPage__ = page;

            [].concat(page.$mixins, page).forEach(function (mix) {
                mix['onShow'] && mix['onShow'].apply(page, args);
            });

            var pages = getCurrentPages();
            var pageId = pages[pages.length - 1].__route__;
            var webViewId = pages[pages.length - 1].__wxWebviewId__;

            if (self.$instance.__wxWebviewId__ !== webViewId) {

                page.$wxpage = this;

                self.$instance.__route__ = pageId;
                self.$instance.__wxWebviewId__ = webViewId;

                [].concat(page.$mixins, page).forEach(function (mix) {
                    mix['onRoute'] && mix['onRoute'].apply(page, args);
                });
            }

            page.$apply();
        };

        PAGE_EVENT.forEach(function (v) {
            if (v !== 'onLoad' && v !== 'onUnload' && v !== 'onShow') {
                config[v] = function () {
                    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                        args[_key6] = arguments[_key6];
                    }

                    var rst = void 0;

                    if (v === 'onShareAppMessage') {
                        page[v] && (rst = page[v].apply(page, args));
                        return rst;
                    }

                    [].concat(page.$mixins, page).forEach(function (mix) {
                        mix[v] && mix[v].apply(page, args);
                    });

                    if (v !== 'onPageScroll') {
                        page.$apply();
                    }

                    return rst;
                };
            }
        });

        if (!page.onShareAppMessage) {
            delete config.onShareAppMessage;
        }

        if ([].concat(page.$mixins, page).findIndex(function (mix) {
            return mix['onPageScroll'];
        }) === -1) {
            delete config.onPageScroll;
        }

        return $bindEvt(config, page, '');
    }
};
//# sourceMappingURL=base.js.map 
 			}); 
		define("npm/wepy/lib/component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = {
    check: function check(t, val) {
        switch (t) {
            case String:
                return typeof val === 'string';
            case Number:
                return typeof val === 'number';
            case Boolean:
                return typeof val === 'boolean';
            case Function:
                return typeof val === 'function';
            case Object:
                return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            case Array:
                return toString.call(val) === '[object Array]';
            default:
                return val instanceof t;
        }
    },
    build: function build(props) {
        var rst = {};
        if (typeof props === 'string') {
            rst[props] = {};
        } else if (toString.call(props) === '[object Array]') {
            props.forEach(function (p) {
                rst[p] = {};
            });
        } else {
            Object.keys(props).forEach(function (p) {
                if (typeof props[p] === 'function') {
                    rst[p] = {
                        type: [props[p]]
                    };
                } else if (toString.call(props[p]) === '[object Array]') {
                    rst[p] = {
                        type: props[p]
                    };
                } else rst[p] = props[p];

                if (rst[p].type && toString.call(rst[p].type) !== '[object Array]') rst[p].type = [rst[p].type];
            });
        }
        return rst;
    },
    valid: function valid(props, key, val) {
        var _this = this;

        var valid = false;
        if (props[key]) {
            if (!props[key].type) {
                valid = true;
            } else {
                return props[key].type.some(function (t) {
                    return _this.check(t, val);
                });
            }
        }
        return valid;
    },
    getValue: function getValue(props, key, value, com) {
        var rst;
        if (value !== undefined && this.valid(props, key, value)) {
            rst = value;
        } else if (typeof props[key].default === 'function') {
            rst = props[key].default();
        } else rst = props[key].default;
        return props[key].coerce ? props[key].coerce.call(com, rst) : rst;
    }
};

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$com = {};
        this.$events = {};
        this.$mixins = [];
        this.$isComponent = true;
        this.$prefix = '';
        this.$mappingProps = {};
        this.data = {};
        this.methods = {};
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init($wxpage, $root, $parent) {
            var _this2 = this;

            var self = this;

            this.$wxpage = $wxpage;
            if (this.$isComponent) {
                this.$root = $root || this.$root;
                this.$parent = $parent || this.$parent;
                this.$wxapp = this.$root.$parent.$wxapp;
            }

            if (this.props) {
                this.props = Props.build(this.props);
            }

            var k = void 0,
                defaultData = {};

            var props = this.props;
            var key = void 0,
                val = void 0,
                binded = void 0;
            var inRepeat = false,
                repeatKey = void 0;

            if (this.$initData === undefined) {
                this.$initData = _util2.default.$copy(this.data, true);
            } else {
                this.data = _util2.default.$copy(this.$initData, true);
            }

            if (this.$props) {
                for (key in this.$props) {
                    for (binded in this.$props[key]) {
                        if (/\.sync$/.test(binded)) {
                            if (!this.$mappingProps[this.$props[key][binded]]) this.$mappingProps[this.$props[key][binded]] = {};
                            this.$mappingProps[this.$props[key][binded]][key] = binded.substring(7, binded.length - 5);
                        }
                    }
                }
            }

            if (props) {
                for (key in props) {
                    if (keyCheck(this, key)) {
                        val = undefined;
                        if ($parent && $parent.$props && $parent.$props[this.$name]) {
                            val = $parent.$props[this.$name][key];
                            binded = $parent.$props[this.$name]['v-bind:' + key + '.once'] || $parent.$props[this.$name]['v-bind:' + key + '.sync'];
                            if (binded) {
                                if ((typeof binded === 'undefined' ? 'undefined' : _typeof(binded)) === 'object') {
                                    (function () {
                                        props[key].repeat = binded.for;
                                        props[key].item = binded.item;
                                        props[key].index = binded.index;
                                        props[key].key = binded.key;
                                        props[key].value = binded.value;

                                        inRepeat = true;

                                        var bindfor = binded.for,
                                            binddata = $parent;
                                        bindfor.split('.').forEach(function (t) {
                                            binddata = binddata ? binddata[t] : {};
                                        });
                                        if (binddata && ((typeof binddata === 'undefined' ? 'undefined' : _typeof(binddata)) === 'object' || typeof binddata === 'string')) {
                                            repeatKey = Object.keys(binddata)[0];
                                        }

                                        if (!_this2.$mappingProps[key]) _this2.$mappingProps[key] = {};
                                        _this2.$mappingProps[key]['parent'] = {
                                            mapping: binded.for,
                                            from: key
                                        };
                                    })();
                                } else {
                                    val = $parent[binded];
                                    if (props[key].twoWay) {
                                        if (!this.$mappingProps[key]) this.$mappingProps[key] = {};
                                        this.$mappingProps[key]['parent'] = binded;
                                    }
                                }
                            } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.value !== undefined) {
                                this.data[key] = val.value;
                            }
                        }
                        if (!this.data[key] && !props[key].repeat) {
                            val = Props.getValue(props, key, val, this);
                            this.data[key] = val;
                        }
                    }
                }
            }

            if (typeof this.data === 'function') {
                this.data = this.data.apply(this.data);
            }

            for (k in this.data) {
                if (keyCheck(this, k)) {
                    defaultData['' + this.$prefix + k] = this.data[k];
                    this[k] = this.data[k];
                }
            }

            this.$data = _util2.default.$copy(this.data, true);
            if (inRepeat && repeatKey !== undefined) this.$setIndex(repeatKey);

            if (this.computed) {
                for (k in this.computed) {
                    if (keyCheck(this, k)) {
                        var fn = this.computed[k];
                        defaultData['' + this.$prefix + k] = fn.call(this);
                        this[k] = _util2.default.$copy(defaultData['' + this.$prefix + k], true);
                    }
                }
            }
            this.setData(defaultData);

            var coms = Object.getOwnPropertyNames(this.$com);
            if (coms.length) {
                coms.forEach(function (name) {
                    var com = _this2.$com[name];
                    com.$init(_this2.getWxPage(), $root, _this2);
                });
            }
        }
    }, {
        key: '$initMixins',
        value: function $initMixins() {
            var _this3 = this;

            if (this.mixins) {
                if (typeof this.mixins === 'function') {
                    this.mixins = [this.mixins];
                }
            } else {
                this.mixins = [];
            }
            this.mixins.forEach(function (mix) {
                var inst = new mix();
                inst.$init(_this3);
                _this3.$mixins.push(inst);
            });
        }
    }, {
        key: '$onLoad',
        value: function $onLoad() {
            var _this4 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            [].concat(this.$mixins, this).forEach(function (mix) {
                mix['onLoad'] && mix['onLoad'].apply(_this4, args);
            });

            var coms = Object.getOwnPropertyNames(this.$com);
            if (coms.length) {
                coms.forEach(function (name) {
                    var com = _this4.$com[name];
                    com.$onLoad.call(com);
                });
            }
        }
    }, {
        key: '$onUnload',
        value: function $onUnload() {
            var _this5 = this;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            var coms = Object.getOwnPropertyNames(this.$com);
            if (coms.length) {
                coms.forEach(function (name) {
                    var com = _this5.$com[name];
                    com.$onUnload.call(com);
                });
            }

            [].concat(this.$mixins, this).forEach(function (mix) {
                mix['onUnload'] && mix['onUnload'].apply(_this5, args);
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onUnload',
        value: function onUnload() {}
    }, {
        key: 'setData',
        value: function setData(k, v) {
            if (typeof k === 'string') {
                if (v) {
                    var tmp = {};
                    tmp[k] = v;
                    k = tmp;
                } else {
                    var _tmp = {};
                    _tmp[k] = this.data['' + k];
                    k = _tmp;
                }
                return this.$wxpage.setData(k);
            }
            var t = null,
                reg = new RegExp('^' + this.$prefix.replace(/\$/g, '\\$'), 'ig');

            for (t in k) {
                var noPrefix = t.replace(reg, '');
                this.$data[noPrefix] = _util2.default.$copy(k[t], true);

                if (_util2.default.isImmutable(k[t])) {
                    k[t] = k[t].toJS();
                }

                if (k[t] === undefined) {
                    delete k[t];
                }
            }

            if (typeof v === 'function') {
                return this.$root.$wxpage.setData(k, v);
            }
            return this.$root.$wxpage.setData(k);
        }
    }, {
        key: 'getWxPage',
        value: function getWxPage() {
            return this.$wxpage;
        }
    }, {
        key: 'getCurrentPages',
        value: function (_getCurrentPages) {
            function getCurrentPages() {
                return _getCurrentPages.apply(this, arguments);
            }

            getCurrentPages.toString = function () {
                return _getCurrentPages.toString();
            };

            return getCurrentPages;
        }(function () {
            return getCurrentPages();
        })
    }, {
        key: '$setIndex',
        value: function $setIndex(index) {
            var _this6 = this;

            this.$index = index;

            var props = this.props,
                $parent = this.$parent;
            var key = void 0,
                val = void 0,
                binded = void 0;
            if (props) {
                for (key in props) {
                    val = undefined;
                    if ($parent && $parent.$props && $parent.$props[this.$name]) {
                        val = $parent.$props[this.$name][key];
                        binded = $parent.$props[this.$name]['v-bind:' + key + '.once'] || $parent.$props[this.$name]['v-bind:' + key + '.sync'];
                        if (binded) {
                            if ((typeof binded === 'undefined' ? 'undefined' : _typeof(binded)) === 'object') {
                                (function () {
                                    var bindfor = binded.for,
                                        binddata = $parent;

                                    if (bindfor.indexOf('[') === 0) {
                                        var bdarr = [];
                                        bindfor = bindfor.substr(1, bindfor.length - 2).trim();

                                        bindfor.split(',').forEach(function (e) {
                                            var bd = $parent;
                                            e.trim().split('.').forEach(function (t) {
                                                bd = bd ? bd[t] : {};
                                            });
                                            bdarr.push(bd);
                                        });

                                        binddata = bdarr;
                                    } else {
                                        bindfor.split('.').forEach(function (t) {
                                            binddata = binddata ? binddata[t] : {};
                                        });
                                    }

                                    index = Array.isArray(binddata) ? +index : index;

                                    if (props[key].value === props[key].item) {
                                        val = binddata[index];
                                    } else if (props[key].value === props[key].index) {
                                        val = index;
                                    } else if (props[key].value === props[key].key) {
                                        val = index;
                                    } else {
                                        val = $parent[props[key].value];
                                    }
                                    _this6.$index = index;
                                    _this6.data[key] = val;
                                    _this6[key] = val;
                                    _this6.$data[key] = _util2.default.$copy(_this6[key], true);
                                })();
                            }
                        }
                    }
                }

                for (key in this.$com) {
                    this.$com[key].$index = undefined;
                }
            }
        }
    }, {
        key: '$getComponent',
        value: function $getComponent(com) {
            var _this7 = this;

            if (typeof com === 'string') {
                if (com.indexOf('/') === -1) {
                    return this.$com[com];
                } else if (com === '/') {
                    return this.$parent;
                } else {
                    var path = com.split('/');
                    path.forEach(function (s, i) {
                        if (i === 0) {
                            if (s === '') {
                                com = _this7.$root;
                            } else if (s === '.') {
                                com = _this7;
                            } else if (s === '..') {
                                com = _this7.$parent;
                            } else {
                                com = _this7.$getComponent(s);
                            }
                        } else if (s) {
                            com = com.$com[s];
                        }
                    });
                }
            }
            return (typeof com === 'undefined' ? 'undefined' : _typeof(com)) !== 'object' ? null : com;
        }
    }, {
        key: '$invoke',
        value: function $invoke(com, method) {
            com = this.$getComponent(com);

            if (!com) {
                throw new Error('Invalid path: ' + com);
            }

            var fn = com.methods ? com.methods[method] : '';

            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            if (typeof fn === 'function') {
                var $evt = new _event2.default('', this, 'invoke');
                var rst = fn.apply(com, args.concat($evt));
                com.$apply();
                return rst;
            } else {
                fn = com[method];
            }

            if (typeof fn === 'function') {
                return fn.apply(com, args);
            } else {
                throw new Error('Invalid method: ' + method);
            }
        }
    }, {
        key: '$broadcast',
        value: function $broadcast(evtName) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }

            var com = this;
            var $evt = typeof evtName === 'string' ? new _event2.default(evtName, this, 'broadcast') : $evt;
            var queue = [com];

            while (queue.length && $evt.active) {
                var current = queue.shift();

                var _loop = function _loop(_c) {
                    _c = current.$com[_c];
                    queue.push(_c);
                    var fn = getEventsFn(_c, evtName);
                    if (fn) {
                        _c.$apply(function () {
                            fn.apply(_c, args.concat($evt));
                        });
                    }
                    if (!$evt.active) return 'break';
                    c = _c;
                };

                for (var c in current.$com) {
                    var _ret3 = _loop(c);

                    if (_ret3 === 'break') break;
                }
            }
        }
    }, {
        key: '$emit',
        value: function $emit(evtName) {
            var _this8 = this;

            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                args[_key5 - 1] = arguments[_key5];
            }

            var com = this;
            var source = this;
            var $evt = new _event2.default(evtName, source, 'emit');

            args = args.concat($evt);

            if (this.$parent && this.$parent.$events && this.$parent.$events[this.$name]) {
                var method = this.$parent.$events[this.$name]['v-on:' + evtName];
                if (method && this.$parent.methods) {
                    var _fn = this.$parent.methods[method];
                    if (typeof _fn === 'function') {
                        this.$parent.$apply(function () {
                            _fn.apply(_this8.$parent, args);
                        });
                        return;
                    } else {
                        throw new Error('Invalid method from emit, component is ' + this.$parent.$name + ', method is ' + method + '. Make sure you defined it already.\n');
                    }
                }
            }

            var _loop2 = function _loop2() {
                var comContext = com;
                var fn = getEventsFn(comContext, evtName);
                if (fn) {
                    if (typeof fn === 'function') {
                        comContext.$apply(function () {
                            fn.apply(comContext, args);
                        });
                    } else if (Array.isArray(fn)) {
                        fn.forEach(function (f) {
                            f.apply(comContext, args);
                        });
                        comContext.$apply();
                    }
                }
                com = comContext.$parent;
            };

            while (com && com.$isComponent !== undefined && $evt.active) {
                _loop2();
            }
        }
    }, {
        key: '$on',
        value: function $on(evtName, fn) {
            var _this9 = this;

            if (typeof evtName === 'string') {
                (this.$events[evtName] || (this.$events[evtName] = [])).push(fn);
            } else if (Array.isArray(evtName)) {
                evtName.forEach(function (k) {
                    _this9.$on(k, fn);
                });
            } else if ((typeof evtName === 'undefined' ? 'undefined' : _typeof(evtName)) === 'object') {
                for (var k in evtName) {
                    this.$on(k, evtName[k]);
                }
            }
            return this;
        }
    }, {
        key: '$once',
        value: function $once(evtName, fn) {
            var self = this;
            var oncefn = function oncefn() {
                self.$off(evtName, oncefn);
                fn.apply(self, arguments);
            };
            oncefn.fn = fn;
            this.$on(evtName, oncefn);
        }
    }, {
        key: '$off',
        value: function $off(evtName, fn) {
            var _this10 = this;

            if (evtName === undefined) {
                this.$events = {};
            } else if (typeof evtName === 'string') {
                if (fn) {
                    var fns = this.$events[evtName];
                    var i = fns.length;
                    while (i--) {
                        if (fn === fns[i] || fn === fns[i].fn) {
                            fns.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    this.$events[evtName] = [];
                }
            } else if (Array.isArray(evtName)) {
                evtName.forEach(function (k) {
                    _this10.$off(k, fn);
                });
            }
            return this;
        }
    }, {
        key: '$apply',
        value: function $apply(fn) {
            if (typeof fn === 'function') {
                fn.call(this);
                this.$apply();
            } else {
                if (this.$$phase) {
                    this.$$phase = '$apply';
                } else {
                    this.$digest();
                }
            }
        }
    }, {
        key: '$digest',
        value: function $digest() {
            var _this11 = this;

            var k = void 0;
            var originData = this.$data;
            this.$$phase = '$digest';
            this.$$dc = 0;
            while (this.$$phase) {
                this.$$dc++;
                if (this.$$dc >= 3) {
                    throw new Error('Can not call $apply in $apply process');
                }
                var readyToSet = {};
                if (this.computed) {
                    for (k in this.computed) {
                        var _fn2 = this.computed[k],
                            val = _fn2.call(this);
                        if (!_util2.default.$isEqual(this[k], val)) {
                            readyToSet[this.$prefix + k] = val;
                            this[k] = _util2.default.$copy(val, true);
                        }
                    }
                }
                for (k in originData) {
                    if (!_util2.default.$isEqual(this[k], originData[k])) {
                        if (this.watch) {
                            if (this.watch[k]) {
                                if (typeof this.watch[k] === 'function') {
                                    this.watch[k].call(this, this[k], originData[k]);
                                } else if (typeof this.watch[k] === 'string' && typeof this.methods[k] === 'function') {
                                    this.methods[k].call(this, this[k], originData[k]);
                                }
                            }
                        }

                        readyToSet[this.$prefix + k] = this[k];
                        this.data[k] = this[k];
                        originData[k] = _util2.default.$copy(this[k], true);
                        if (this.$repeat && this.$repeat[k]) {
                            var $repeat = this.$repeat[k];
                            this.$com[$repeat.com].data[$repeat.props] = this[k];
                            this.$com[$repeat.com].$setIndex(0);
                            this.$com[$repeat.com].$apply();
                        }
                        if (this.$mappingProps[k]) {
                            Object.keys(this.$mappingProps[k]).forEach(function (changed) {
                                var mapping = _this11.$mappingProps[k][changed];
                                if ((typeof mapping === 'undefined' ? 'undefined' : _typeof(mapping)) === 'object') {
                                    _this11.$parent.$apply();
                                } else if (changed === 'parent' && !_util2.default.$isEqual(_this11.$parent.$data[mapping], _this11[k])) {
                                    _this11.$parent[mapping] = _this11[k];
                                    _this11.$parent.data[mapping] = _this11[k];
                                    _this11.$parent.$apply();
                                } else if (changed !== 'parent' && !_util2.default.$isEqual(_this11.$com[changed].$data[mapping], _this11[k])) {
                                    _this11.$com[changed][mapping] = _this11[k];
                                    _this11.$com[changed].data[mapping] = _this11[k];
                                    _this11.$com[changed].$apply();
                                }
                            });
                        }
                    }
                }
                if (Object.keys(readyToSet).length) {
                    this.setData(readyToSet, function () {
                        if (_this11.$$nextTick) {
                            var $$nextTick = _this11.$$nextTick;
                            _this11.$$nextTick = null;
                            if ($$nextTick.promise) {
                                $$nextTick();
                            } else {
                                $$nextTick.call(_this11);
                            }
                        }
                    });
                } else {
                    if (this.$$nextTick) {
                        var $$nextTick = this.$$nextTick;
                        this.$$nextTick = null;
                        if ($$nextTick.promise) {
                            $$nextTick();
                        } else {
                            $$nextTick.call(this);
                        }
                    }
                }
                this.$$phase = this.$$phase === '$apply' ? '$digest' : false;
            }
        }
    }, {
        key: '$nextTick',
        value: function $nextTick(fn) {
            var _this12 = this;

            if (typeof fn === 'undefined') {
                return new Promise(function (resolve, reject) {
                    _this12.$$nextTick = function () {
                        resolve();
                    };
                    _this12.$$nextTick.promise = true;
                });
            }
            this.$$nextTick = fn;
        }
    }]);

    return _class;
}();

exports.default = _class;

function keyCheck(vm, k) {
    if (typeof vm[k] === 'function') {
        console.warn('You are not allowed to define a function "' + k + '" in data.');
        return 0;
    } else if (['data', 'props', 'methods', 'events', 'mixins'].indexOf(k) !== -1) {
        console.warn('"' + k + '" is reserved word, please fix it.');
        return 0;
    } else if (k[0] === '$') {
        console.warn('"' + k + ': You can not define a property started with "$"');
        return 0;
    }
    return 1;
}

function getEventsFn(comContext, evtName) {
    var fn = comContext.events ? comContext.events[evtName] : comContext.$events[evtName] ? comContext.$events[evtName] : undefined;
    var typeFn = typeof fn === 'undefined' ? 'undefined' : _typeof(fn);
    var fnFn = void 0;
    if (typeFn === 'string') {
        var method = comContext.methods && comContext.methods[fn];
        if (typeof method === 'function') {
            fnFn = method;
        }
    } else if (typeFn === 'function' || Array.isArray(fn)) {
        fnFn = fn;
    }
    return fnFn;
}
//# sourceMappingURL=component.js.map 
 			}); 
		define("npm/wepy/lib/event.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(name, source, type) {
        _classCallCheck(this, _class);

        this.active = true;


        this.name = name;
        this.source = source;
        this.type = type;
    }

    _createClass(_class, [{
        key: "$destroy",
        value: function $destroy() {
            this.active = false;
        }
    }, {
        key: "$transfor",
        value: function $transfor(wxevent) {
            var k = 0;
            for (k in wxevent) {
                this[k] = wxevent[k];
            }
        }
    }]);

    return _class;
}();

exports.default = _class;
//# sourceMappingURL=event.js.map 
 			}); 
		define("npm/wepy/lib/mixin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.data = {};
        this.computed = {};
        this.components = {};
        this.methods = {};
        this.events = {};
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init(parent) {
            var _this = this;

            var k = void 0;

            Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this))).forEach(function (k) {
                if (k[0] + k[1] !== 'on' && k !== 'constructor') {
                    if (!parent[k]) parent[k] = _this[k];
                }
            });

            ['data', 'computed', 'events', 'components'].forEach(function (item) {
                Object.getOwnPropertyNames(_this[item]).forEach(function (k) {
                    if (k !== 'init' && !parent[item][k]) parent[item][k] = _this[item][k];
                });
            });
        }
    }]);

    return _class;
}();

exports.default = _class;
//# sourceMappingURL=mixin.js.map 
 			}); 
		define("npm/wepy/lib/native.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};
//# sourceMappingURL=native.js.map 
 			}); 
		define("npm/wepy/lib/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _native = require('./native.js');

var _native2 = _interopRequireDefault(_native);

var _component2 = require('./component.js');

var _component3 = _interopRequireDefault(_component2);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_component) {
    _inherits(_class, _component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.$isComponent = false, _this.$preloadData = undefined, _this.$prefetchData = undefined, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init(wxpage, $parent) {

            this.$parent = $parent;
            this.$root = this;
            if (!$parent.$wxapp) {
                $parent.$wxapp = getApp();
            }
            this.$wxapp = $parent.$wxapp;
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), '$init', this).call(this, wxpage, this);
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onLoad', this).call(this);
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onUnload', this).call(this);
        }
    }, {
        key: '$preload',
        value: function $preload(key, data) {
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                var k = void 0;
                for (k in key) {
                    this.$preload(k, key[k]);
                }
            } else {
                (this.$preloadData ? this.$preloadData : this.$preloadData = {})[key] = data;
            }
        }
    }, {
        key: '$route',
        value: function $route(type, url) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (typeof url === 'string') {
                var s = url + '?';
                if (params) {
                    var k = void 0;
                    for (k in params) {
                        s += k + '=' + params[k] + '&';
                    }
                }
                s = s.substring(0, s.length - 1);
                url = { url: s };
            } else {
                params = _util2.default.$getParams(url.url);
            }

            if (!this.$parent.__route__) {
                this.$parent.__route__ = getCurrentPages()[0].__route__;
                this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__;
            }
            var absoluteRoute = this.$parent.__route__[0] !== '/' ? '/' + this.$parent.__route__ : this.$parent.__route__;
            var realPath = _util2.default.$resolvePath(absoluteRoute, url.url.split('?')[0]);
            var goTo = this.$parent.$pages[realPath];
            if (goTo && goTo.onPrefetch) {
                var prevPage = this.$parent.__prevPage__;
                var preloadData = undefined;
                if (prevPage && prevPage.$preloadData) {
                    preloadData = prevPage.$preloadData;
                }
                goTo.$prefetchData = goTo.onPrefetch(params, { from: this, preload: preloadData });
            }
            return _native2.default[type](url);
        }
    }, {
        key: '$redirect',
        value: function $redirect(url, params) {
            return this.$route('redirectTo', url, params);
        }
    }, {
        key: '$navigate',
        value: function $navigate(url, params) {
            return this.$route('navigateTo', url, params);
        }
    }, {
        key: '$switch',
        value: function $switch(url) {
            if (typeof url === 'string') url = { url: url };

            return _native2.default.switchTab(url);
        }
    }, {
        key: '$back',
        value: function $back(delta) {
            var p = delta || {};
            if (typeof p === 'number') p = { delta: p };

            if (!p.delta) p.delta = 1;

            return _native2.default.navigateBack(p);
        }
    }]);

    return _class;
}(_component3.default);

exports.default = _class;
//# sourceMappingURL=page.js.map 
 			}); 
		define("npm/wepy/lib/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isImmutable(maybeImmutable) {
    if (!maybeImmutable || (typeof maybeImmutable === 'undefined' ? 'undefined' : _typeof(maybeImmutable)) !== 'object') {
        return false;
    }

    var IMMUTABLE_KEYS = ['@@__IMMUTABLE_ITERABLE__@@', '@@__IMMUTABLE_KEYED__@@', '@@__IMMUTABLE_INDEXED__@@', '@@__IMMUTABLE_ORDERED__@@', '@@__IMMUTABLE_RECORD__@@'];

    return !!IMMUTABLE_KEYS.filter(function (key) {
        return maybeImmutable[key];
    }).length;
}

exports.default = {
    $isEmpty: function $isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },
    $isEqual: function $isEqual(a, b, aStack, bStack) {
        if (isImmutable(a)) return a.equals(b);
        if (isImmutable(b)) return b.equals(a);

        if (a === b) return a !== 0 || 1 / a === 1 / b;

        if (a !== a) return b !== b;

        if (!a || !b) return a === b;

        var type = typeof a === 'undefined' ? 'undefined' : _typeof(a);
        if (type !== 'function' && type !== 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return false;
        return this.$isDeepEqual(a, b, aStack, bStack);
    },
    $isDeepEqual: function $isDeepEqual(a, b, aStack, bStack) {
        if (isImmutable(a)) a = a.toJS();

        if (isImmutable(b)) b = b.toJS();

        var self = this;

        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) return +b !== +b;

                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
            case '[object Symbol]':
                var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
                return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return a === b;

            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
                return false;
            }
        }

        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) return bStack[length] === b;
        }

        aStack.push(a);
        bStack.push(b);

        if (areArrays) {
            length = a.length;
            if (length !== b.length) return false;

            while (length--) {
                if (!self.$isEqual(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            var keys = Object.keys(a),
                key;
            length = keys.length;

            if (Object.keys(b).length !== length) return false;
            while (length--) {
                key = keys[length];
                if (!(self.$has(b, key) && self.$isEqual(a[key], b[key], aStack, bStack))) return false;
            }
        }

        aStack.pop();
        bStack.pop();
        return true;
    },
    $has: function $has(obj, path) {
        if (toString.call(path) !== '[object Array]') {
            return obj && hasOwnProperty.call(obj, path);
        }
        var length = path.length;
        for (var i = 0; i < length; i++) {
            var key = path[i];
            if (!obj || !hasOwnProperty.call(obj, key)) {
                return false;
            }
            obj = obj[key];
        }
        return !!length;
    },
    $extend: function $extend() {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        var self = this;

        if (typeof target === 'boolean') {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !(typeof target === 'function')) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if (options = arguments[i]) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (self.$isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && self.$isPlainObject(src) ? src : {};
                        }

                        target[name] = self.$extend(deep, clone, copy);
                    } else {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    },
    $copy: function $copy(obj) {
        var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(obj)) {
            return this.$extend(deep, [], obj);
        } else if ('' + obj === 'null') {
            return obj;
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
            if (isImmutable(obj)) return obj;
            return this.$extend(deep, {}, obj);
        } else return obj;
    },
    $isPlainObject: function $isPlainObject(obj) {
        var proto, Ctor;

        if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
            return false;
        }

        proto = Object.getPrototypeOf(obj);

        if (!proto) {
            return true;
        }

        Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor === 'function' && Object.prototype.hasOwnProperty.toString.call(Ctor) === Object.prototype.hasOwnProperty.toString.call(Object);
    },
    $resolvePath: function $resolvePath(route, url) {
        if (!url) return route;
        if (url[0] === '/') {
            url = url.substr(1);
            return this.$resolvePath('', url);
        }
        if (url[0] !== '.') {
            return this.$resolvePath(route, './' + url);
        }
        var current = route.split('/');
        if (url[0] === '.' && url[1] === '/') {
            url = url.substr(2);
            if (url[0] !== '.') {
                if (current.length) current[current.length - 1] = url;else current = [url];
                return current.length === 1 ? '/' + current[0] : current.join('/');
            }
            return this.$resolvePath(current.join('/'), url);
        }
        if (url[0] === '.' && url[1] === '.' && url[2] === '/') {
            url = url.replace(/^\.*/ig, '');
            current.pop();
            return this.$resolvePath(current.join('/'), '.' + url);
        }
        if (url[0] === '.') {
            return this.$resolvePath(route, url.substr(1));
        }
    },
    $getParams: function $getParams(url) {
        var rst = {};
        var quoteIndex = url.indexOf('?');

        if (quoteIndex !== -1) {
            var str = url.substr(quoteIndex + 1);
            var tmp = void 0;
            str.split('&').forEach(function (v) {
                tmp = v.split('=');
                rst[tmp[0]] = decodeURIComponent(tmp[1]);
            });
        }
        return rst;
    },


    isImmutable: isImmutable,

    hyphenate: function hyphenate(str) {
        return str.replace(/([^-])([A-Z])/g, '$1-$2').replace(/([^-])([A-Z])/g, '$1-$2').toLowerCase();
    },
    camelize: function camelize(str) {
        return str.replace(/-(\w)/g, function (_, c) {
            return c ? c.toUpperCase() : '';
        });
    }
};
//# sourceMappingURL=util.js.map 
 			}); 
		define("npm/wepy/lib/wepy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _page = require('./page.js');

var _page2 = _interopRequireDefault(_page);

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _mixin = require('./mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    event: _event2.default,
    app: _app2.default,
    component: _component2.default,
    page: _page2.default,
    mixin: _mixin2.default,

    $createApp: _base2.default.$createApp,
    $createPage: _base2.default.$createPage,

    $isEmpty: _util2.default.$isEmpty,
    $isEqual: _util2.default.$isEqual,
    $isDeepEqual: _util2.default.$isDeepEqual,
    $has: _util2.default.$has,
    $extend: _util2.default.$extend,
    $isPlainObject: _util2.default.$isPlainObject,
    $copy: _util2.default.$copy
};
//# sourceMappingURL=wepy.js.map 
 			}); 
		define("npm/wx-server-sdk/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/cloud/index.ts":
/*!********************************!*\
  !*** ./src/api/cloud/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var provider_1 = __webpack_require__(/*! ./provider */ "./src/api/cloud/provider/index.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var type_1 = __webpack_require__(/*! utils/type */ "./src/utils/type.ts");
var Cloud = /** @class */ (function () {
    function Cloud() {
        this.inited = false;
        this.services = {};
        this.exportAPI = {
            init: this.init.bind(this)
        };
        this.meta = {
            session_id: (+new Date).toString()
        };
        this.defaultConfig = {};
        this.provider = provider_1.default();
    }
    Cloud.prototype.getMetaData = function () {
        return this.meta;
    };
    Cloud.prototype.getDefaultConfig = function () {
        return this.defaultConfig;
    };
    Cloud.prototype.getOverriddenConfig = function (config, service) {
        var overriden = tslib_1.__assign({}, this.defaultConfig);
        Object.assign(overriden, config);
        if (service) {
            var env = this.getEnvForService(overriden, service);
            overriden.env = env;
        }
        return overriden;
    };
    Cloud.prototype.getEnvForService = function (config, service) {
        if (!config.env)
            return;
        switch (type_1.getType(config.env)) {
            case 'string': {
                return config.env;
            }
            case 'object': {
                return config.env[service];
            }
            default: {
                return;
            }
        }
    };
    Cloud.prototype.init = function (config) {
        if (config === void 0) { config = {}; }
        if (this.inited)
            return;
        this.inited = true;
        this.provider.init(config);
        this.defaultConfig = config;
    };
    Cloud.prototype.registerService = function (service) {
        this.services[service.name] = service;
        var functions = service.getAPIs();
        for (var name in functions) {
            this.registerFunction(name, functions[name]);
        }
    };
    Cloud.prototype.registerFunction = function (name, func) {
        var instance = this;
        this.exportAPI[name] = function () {
            if (!instance.inited) {
                throw new error_1.CloudSDKError({
                    errMsg: 'Cloud API isn\'t enabled, please call init first\n' +
                        '请先调用 init 完成初始化后再调用其他云 API。init 方法可传入一个对象用于设置默认配置，详见文档。'
                });
            }
            return func.apply(this, arguments);
        };
    };
    return Cloud;
}());
exports.Cloud = Cloud;
var cloud = new Cloud();
exports.default = cloud;


/***/ }),

/***/ "./src/api/cloud/provider/index.ts":
/*!*****************************************!*\
  !*** ./src/api/cloud/provider/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tcb_1 = __webpack_require__(/*! ./tcb */ "./src/api/cloud/provider/tcb/index.ts");
var PROVIDER;
(function (PROVIDER) {
    PROVIDER[PROVIDER["TCB"] = 0] = "TCB";
})(PROVIDER = exports.PROVIDER || (exports.PROVIDER = {}));
function getProvider(provider) {
    if (provider === void 0) { provider = PROVIDER.TCB; }
    switch (provider) {
        default: {
            return tcb_1.default;
        }
    }
}
exports.default = getProvider;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/callFunction.ts":
/*!********************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/callFunction.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function callFunction(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var tcbInstance, res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()
                    /*
                    const res = await tcbRequest({
                      params: {
                        action: 'functions.invokeFunction',
                        function_name: options.name,
                        request_data: options.dataStr,
                      },
                      // TODO
                      timeout: 5 * 60 * 1000,
                      config: mergeConfig(tcb.config, config),
                      method: 'post',
                      headers: {
                        'content-type': 'application/json'
                      }
                    })
                    */
                ];
                case 1:
                    _a.sent();
                    tcbInstance = tcb.config.envName === config.env ? tcb : tcb.init(config);
                    return [4 /*yield*/, tcbInstance.callFunction({
                            name: options.name,
                            data: options.data,
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: "requestID " + res.requestId + ", " + res.message,
                            requestId: res.requestId,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                result: res.result,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.callFunction = callFunction;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/callOpenAPI.ts":
/*!*******************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/callOpenAPI.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function callOpenAPI(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()
                    // console.log('wx-server-sdk tcb.callWxOpenApi options: ', options)
                ];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, tcb.callWxOpenApi({
                            apiName: options.api,
                            requestData: options.data,
                            event: options.event,
                        })
                        // console.log('wx-server-sdk tcb.callWxOpenApi res: ', res)
                    ];
                case 2:
                    res = _a.sent();
                    // console.log('wx-server-sdk tcb.callWxOpenApi res: ', res)
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                result: res.result,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.callOpenAPI = callOpenAPI;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/database.ts":
/*!****************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/database.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var tcbRequest = __webpack_require__(/*! tcb-admin-node/src/utils/httpRequest */ "tcb-admin-node/src/utils/httpRequest");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
var mergeConfig = function (tcbConfig, config) {
    var ret = tslib_1.__assign({}, tcbConfig);
    if (config.env) {
        ret.env = config.env;
    }
    return ret;
};
function addDocument(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // 不得已而 sleep(0)，因为 tcb-admin-node 的 httpRequest 在返回 promise 之前竟然有逻辑可能抛错 !!!!!
                return [4 /*yield*/, sleep()];
                case 1:
                    // 不得已而 sleep(0)，因为 tcb-admin-node 的 httpRequest 在返回 promise 之前竟然有逻辑可能抛错 !!!!!
                    _a.sent();
                    return [4 /*yield*/, tcbRequest({
                            params: {
                                action: 'database.addDocument',
                                _id: options._id,
                                collectionName: options.collectionName,
                                data: options.data,
                            },
                            config: mergeConfig(tcb.config, config),
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                _id: res.data._id,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.addDocument = addDocument;
function queryDocument(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, tcbRequest({
                            params: tslib_1.__assign({}, options, { action: 'database.queryDocument', collectionName: options.collectionName }),
                            config: mergeConfig(tcb.config, config),
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                list: res.data.list || [],
                                limit: res.Limit,
                                offset: res.Offset,
                                total: res.TotalCount,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.queryDocument = queryDocument;
function updateDocument(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, tcbRequest({
                            params: tslib_1.__assign({}, options, { action: 'database.updateDocument', collectionName: options.collectionName }),
                            config: mergeConfig(tcb.config, config),
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                updated: res.data.updated,
                                upsertedId: res.data.upserted_id,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateDocument = updateDocument;
function removeDocument(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, tcbRequest({
                            params: tslib_1.__assign({}, options, { action: 'database.removeDocument', collectionName: options.collectionName }),
                            config: mergeConfig(tcb.config, config),
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                removed: res.deleted,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.removeDocument = removeDocument;
function countDocument(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, tcbRequest({
                            params: tslib_1.__assign({}, options, { action: 'database.countDocument', collectionName: options.collectionName }),
                            config: mergeConfig(tcb.config, config),
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        return [2 /*return*/, {
                                total: res.data.total,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.countDocument = countDocument;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/deleteFile.ts":
/*!******************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/deleteFile.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var error_config_2 = __webpack_require__(/*! ../../../../../config/error.config */ "./src/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function deleteFile(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var tcbInstance, res, fileList;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    tcbInstance = tcb.config.envName === config.env ? tcb : tcb.init(config);
                    return [4 /*yield*/, tcbInstance.deleteFile({
                            fileList: options.fileList
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        fileList = (res.fileList || []).filter(function (s) { return Boolean(s); }).map(function (f) {
                            if (f.code && error_config_1.TCB_ERR_CODE[f.code] !== 0) {
                                var code = error_config_1.TCB_ERR_CODE[f.code] || error_config_1.TCB_ERR_CODE.SYS_ERR;
                                return {
                                    fileID: f.fileID,
                                    status: error_config_1.TCB_ERR_CODE[f.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                                    errMsg: error_config_2.ERR_CODE[code]
                                };
                            }
                            return {
                                fileID: f.fileID,
                                status: 0,
                                errMsg: 'ok',
                            };
                        });
                        //@ts-ignore
                        return [2 /*return*/, {
                                fileList: fileList,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteFile = deleteFile;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/downloadFile.ts":
/*!********************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/downloadFile.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function downloadFile(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var statusCode, tcbInstance, res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    statusCode = 200;
                    tcbInstance = tcb.config.envName === config.env ? tcb : tcb.init(config);
                    return [4 /*yield*/, tcbInstance.downloadFile({
                            fileID: options.fileID
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    return [2 /*return*/, {
                            statusCode: statusCode,
                            fileContent: res.fileContent,
                        }];
            }
        });
    });
}
exports.downloadFile = downloadFile;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/getTempFileURL.ts":
/*!**********************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/getTempFileURL.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var error_config_2 = __webpack_require__(/*! ../../../../../config/error.config */ "./src/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function getTempFileURL(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var tcbInstance, res, fileList;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    tcbInstance = tcb.config.envName === config.env ? tcb : tcb.init(config);
                    return [4 /*yield*/, tcbInstance.getTempFileURL({
                            fileList: options.fileList,
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        fileList = (res.fileList || []).filter(function (s) { return Boolean(s); }).map(function (f, i) {
                            if (f.code && error_config_1.TCB_ERR_CODE[f.code] !== 0) {
                                var code = error_config_1.TCB_ERR_CODE[f.code] || error_config_1.TCB_ERR_CODE.SYS_ERR;
                                return {
                                    fileID: f.fileID,
                                    status: error_config_1.TCB_ERR_CODE[f.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                                    errMsg: error_config_2.ERR_CODE[code],
                                    maxAge: f.maxAge,
                                    tempFileURL: '',
                                };
                            }
                            return {
                                fileID: f.fileID,
                                status: 0,
                                errMsg: 'ok',
                                maxAge: f.maxAge,
                                tempFileURL: f.tempFileURL,
                            };
                        });
                        return [2 /*return*/, {
                                fileList: fileList,
                                requestId: res.requestId,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getTempFileURL = getTempFileURL;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/api/uploadFile.ts":
/*!******************************************************!*\
  !*** ./src/api/cloud/provider/tcb/api/uploadFile.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var error_config_1 = __webpack_require__(/*! ../config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
var sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function uploadFile(options, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var statusCode, tcbInstance, res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    statusCode = -1;
                    tcbInstance = tcb.config.envName === config.env ? tcb : tcb.init(config);
                    return [4 /*yield*/, tcbInstance.uploadFile({
                            cloudPath: options.cloudPath,
                            fileContent: options.fileContent,
                        }, {
                            onResponseReceived: function (resp) {
                                statusCode = resp ? resp.statusCode : statusCode;
                            }
                        })];
                case 2:
                    res = _a.sent();
                    if (res.code && error_config_1.TCB_ERR_CODE[res.code] !== 0) {
                        throw {
                            errCode: error_config_1.TCB_ERR_CODE[res.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
                            errMsg: res.message,
                        };
                    }
                    else {
                        //@ts-ignore
                        return [2 /*return*/, {
                                fileID: res.fileID,
                                requestId: res.requestId,
                                statusCode: statusCode,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.uploadFile = uploadFile;


/***/ }),

/***/ "./src/api/cloud/provider/tcb/config/error.config.ts":
/*!***********************************************************!*\
  !*** ./src/api/cloud/provider/tcb/config/error.config.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// provider should also register the error codes in src/config/error.config.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCB_ERR_CODE = {
    // 通用
    SUCCESS: 0,
    SYS_ERR: -501001,
    SERVER_TIMEOUT: -501002,
    EXCEED_REQUEST_LIMIT: -501003,
    EXCEED_CONCURRENT_REQUEST_LIMIT: -501004,
    INVALIID_ENV: -501005,
    INVALID_COMMON_PARAM: -501006,
    INVALID_PARAM: -501007,
    INVALID_REQUEST_SOURCE: -501008,
    RESOURCE_NOT_INITIAL: -501009,
    // 数据库
    DATABASE_REQUEST_FAILED: -502001,
    DATABASE_INVALID_OPERRATOR: -502002,
    DATABASE_PERMISSION_DENIED: -502003,
    DATABASE_COLLECTION_EXCEED_LIMIT: -502004,
    DATABASE_COLLECTION_NOT_EXIST: -502005,
    // 文件
    STORAGE_REQUEST_FAIL: -503001,
    STORAGE_EXCEED_AUTHORITY: -503002,
    STORAGE_FILE_NONEXIST: -503003,
    STORAGE_SIGN_PARAM_INVALID: -503004,
    // 云函数
    FUNCTIONS_REQUEST_FAIL: -504001,
    FUNCTIONS_EXECUTE_FAIL: -504002,
};


/***/ }),

/***/ "./src/api/cloud/provider/tcb/index.ts":
/*!*********************************************!*\
  !*** ./src/api/cloud/provider/tcb/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var tcbRequest = __webpack_require__(/*! tcb-admin-node/src/utils/httpRequest */ "tcb-admin-node/src/utils/httpRequest");
var database_1 = __webpack_require__(/*! ./api/database */ "./src/api/cloud/provider/tcb/api/database.ts");
var callFunction_1 = __webpack_require__(/*! ./api/callFunction */ "./src/api/cloud/provider/tcb/api/callFunction.ts");
var downloadFile_1 = __webpack_require__(/*! ./api/downloadFile */ "./src/api/cloud/provider/tcb/api/downloadFile.ts");
var uploadFile_1 = __webpack_require__(/*! ./api/uploadFile */ "./src/api/cloud/provider/tcb/api/uploadFile.ts");
var deleteFile_1 = __webpack_require__(/*! ./api/deleteFile */ "./src/api/cloud/provider/tcb/api/deleteFile.ts");
var getTempFileURL_1 = __webpack_require__(/*! ./api/getTempFileURL */ "./src/api/cloud/provider/tcb/api/getTempFileURL.ts");
var callOpenAPI_1 = __webpack_require__(/*! ./api/callOpenAPI */ "./src/api/cloud/provider/tcb/api/callOpenAPI.ts");
var provider = {
    // init
    init: tcb.init.bind(tcb),
    get config() {
        return tcb.config;
    },
    // request
    sendRequest: function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, tcbRequest(tslib_1.__assign({ config: tcb.config, params: options.data }, options))];
            });
        });
    },
    // api
    api: {
        addDocument: database_1.addDocument,
        queryDocument: database_1.queryDocument,
        updateDocument: database_1.updateDocument,
        removeDocument: database_1.removeDocument,
        countDocument: database_1.countDocument,
        callFunction: callFunction_1.callFunction,
        downloadFile: downloadFile_1.downloadFile,
        uploadFile: uploadFile_1.uploadFile,
        deleteFile: deleteFile_1.deleteFile,
        getTempFileURL: getTempFileURL_1.getTempFileURL,
        callOpenAPI: callOpenAPI_1.callOpenAPI,
    }
};
exports.default = provider;


/***/ }),

/***/ "./src/api/database/api/api.ts":
/*!*************************************!*\
  !*** ./src/api/database/api/api.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __webpack_require__(/*! ./database */ "./src/api/database/api/database.ts");
function getAPIs() {
    return {
        database: database_1.default,
    };
}
exports.getAPIs = getAPIs;


/***/ }),

/***/ "./src/api/database/api/database.ts":
/*!******************************************!*\
  !*** ./src/api/database/api/database.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var tcb = __webpack_require__(/*! tcb-admin-node */ "tcb-admin-node");
var collection_1 = __webpack_require__(/*! ./database/collection */ "./src/api/database/api/database/collection.ts");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var error_checker_1 = __webpack_require__(/*! ./database/helper/error-checker */ "./src/api/database/api/database/helper/error-checker.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/api/database/index.ts");
function getDatabase(config) {
    return new Database(config);
}
exports.default = getDatabase;
var Database = /** @class */ (function () {
    function Database(config) {
        if (config === void 0) { config = {}; }
        var instance = this;
        this.config = config;
        if (config.env) {
            assert_1.assertType(config.env, 'string');
        }
        var overridenConfig = cloud_1.default.getOverriddenConfig(config || {}, __1.DATABASE_SERVICE_NAME);
        var tcbInstance = tcb.init(overridenConfig);
        this._db = tcbInstance.database();
        this.command = this._db.command;
        this.Geo = this._db.Geo;
        this.serverDate = this._db.serverDate;
    }
    Database.prototype.collection = function (collectionName) {
        return new collection_1.CollectionReference(this._db.collection(collectionName), collectionName, this);
    };
    Database.prototype.createCollection = function (collectionName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var apiName, result, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiName = 'createCollection';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._db.createCollection(collectionName)];
                    case 2:
                        result = _a.sent();
                        error_checker_1.checkError(result);
                        return [2 /*return*/, {
                                errMsg: msg_1.apiSuccessMsg(apiName),
                                requestId: result.requestId,
                            }];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, error_1.returnAsFinalCloudSDKError(e_1, apiName)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Database;
}());
exports.Database = Database;


/***/ }),

/***/ "./src/api/database/api/database/collection.ts":
/*!*****************************************************!*\
  !*** ./src/api/database/api/database/collection.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var query_1 = __webpack_require__(/*! ./query */ "./src/api/database/api/database/query.ts");
var document_1 = __webpack_require__(/*! ./document */ "./src/api/database/api/database/document.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_checker_1 = __webpack_require__(/*! ./helper/error-checker */ "./src/api/database/api/database/helper/error-checker.ts");
var CollectionReference = /** @class */ (function (_super) {
    tslib_1.__extends(CollectionReference, _super);
    function CollectionReference(_collection, collectionName, database) {
        var _this = _super.call(this, _collection, collectionName, database) || this;
        _this._collection = _collection;
        _this.collectionName = collectionName;
        _this.database = database;
        return _this;
    }
    CollectionReference.prototype.doc = function (docId) {
        return new document_1.DocumentReference(this._collection.doc(docId), this, docId, this.database);
    };
    CollectionReference.prototype.add = function (options) {
        var _this = this;
        var apiName = 'collection.add';
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var addResult, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        assert_1.assertType(options, {
                            data: 'object'
                        });
                        assert_1.assertObjectNotEmpty({
                            name: 'options.data',
                            target: options.data,
                        });
                        return [4 /*yield*/, this._collection.add(options.data)];
                    case 1:
                        addResult = _a.sent();
                        error_checker_1.checkError(addResult);
                        resolve({
                            _id: addResult.id,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_1, apiName));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    return CollectionReference;
}(query_1.Query));
exports.CollectionReference = CollectionReference;


/***/ }),

/***/ "./src/api/database/api/database/document.ts":
/*!***************************************************!*\
  !*** ./src/api/database/api/database/document.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_checker_1 = __webpack_require__(/*! ./helper/error-checker */ "./src/api/database/api/database/helper/error-checker.ts");
var GET_API_NAME = 'document.get';
var UPDATE_API_NAME = 'document.update';
var SET_API_NAME = 'document.set';
var REMOVE_API_NAME = 'document.remove';
var DocumentReference = /** @class */ (function () {
    function DocumentReference(_document, collection, docId, database) {
        this._document = _document;
        this.collection = collection;
        this.database = database;
        this._id = docId;
    }
    DocumentReference.prototype.field = function (object) {
        assert_1.assertRequiredParam(object, 'object', 'field');
        assert_1.assertType(object, 'object', 'field');
        return new DocumentReference(this._document.field(object), this.collection, this._id, this.database);
    };
    DocumentReference.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _id, queryResult, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = this._id;
                        return [4 /*yield*/, this._document.get()];
                    case 1:
                        queryResult = _a.sent();
                        error_checker_1.checkError(queryResult);
                        if (!queryResult.data || !queryResult.data.length) {
                            throw "document with _id " + _id + " does not exist";
                        }
                        resolve({
                            data: queryResult.data[0],
                            errMsg: msg_1.apiSuccessMsg(GET_API_NAME),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_1, GET_API_NAME));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DocumentReference.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _id, setResult, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        assert_1.assertType(options, {
                            data: 'object',
                        });
                        assert_1.assertObjectNotEmpty({
                            name: 'options.data',
                            target: options.data,
                        });
                        _id = this._id;
                        return [4 /*yield*/, this._document.set(options.data)];
                    case 1:
                        setResult = _a.sent();
                        error_checker_1.checkError(setResult);
                        resolve({
                            _id: _id,
                            errMsg: msg_1.apiSuccessMsg(SET_API_NAME),
                            stats: {
                                updated: setResult.updated,
                                created: setResult.upsertedId ? 1 : 0,
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_2, SET_API_NAME));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DocumentReference.prototype.update = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var updateResult, err_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        assert_1.assertType(options, {
                            data: 'object',
                        });
                        assert_1.assertObjectNotEmpty({
                            name: 'options.data',
                            target: options.data,
                        });
                        return [4 /*yield*/, this._document.update(options.data)];
                    case 1:
                        updateResult = _a.sent();
                        error_checker_1.checkError(updateResult);
                        resolve({
                            stats: {
                                updated: updateResult.updated,
                            },
                            errMsg: msg_1.apiSuccessMsg(UPDATE_API_NAME),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_3, UPDATE_API_NAME));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DocumentReference.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var removeResult, err_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._document.remove()];
                    case 1:
                        removeResult = _a.sent();
                        error_checker_1.checkError(removeResult);
                        resolve({
                            stats: {
                                removed: removeResult.deleted || 0,
                            },
                            errMsg: msg_1.apiSuccessMsg(REMOVE_API_NAME),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_4, REMOVE_API_NAME));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    return DocumentReference;
}());
exports.DocumentReference = DocumentReference;


/***/ }),

/***/ "./src/api/database/api/database/helper/error-checker.ts":
/*!***************************************************************!*\
  !*** ./src/api/database/api/database/helper/error-checker.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var error_config_1 = __webpack_require__(/*! api/cloud/provider/tcb/config/error.config */ "./src/api/cloud/provider/tcb/config/error.config.ts");
function checkError(tcbResult) {
    if (tcbResult && tcbResult.code) {
        throw error_1.returnAsCloudSDKError({
            errCode: error_config_1.TCB_ERR_CODE[tcbResult.code] || error_config_1.TCB_ERR_CODE.SYS_ERR,
            errMsg: tcbResult.message,
        });
    }
}
exports.checkError = checkError;


/***/ }),

/***/ "./src/api/database/api/database/query.ts":
/*!************************************************!*\
  !*** ./src/api/database/api/database/query.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var error_checker_1 = __webpack_require__(/*! ./helper/error-checker */ "./src/api/database/api/database/helper/error-checker.ts");
var ORDER_DIRECTION;
(function (ORDER_DIRECTION) {
    ORDER_DIRECTION["ASC"] = "asc";
    ORDER_DIRECTION["DESC"] = "desc";
})(ORDER_DIRECTION = exports.ORDER_DIRECTION || (exports.ORDER_DIRECTION = {}));
var Query = /** @class */ (function () {
    function Query(_query, collectionName, database) {
        this._query = _query;
        this.collectionName = collectionName;
        this.database = database;
    }
    Query.prototype.field = function (object) {
        return new Query(this._query.field(object), this.collectionName, this.database);
    };
    Query.prototype.where = function (condition) {
        return new Query(this._query.where(condition), this.collectionName, this.database);
    };
    Query.prototype.orderBy = function (fieldPath, order) {
        return new Query(this._query.orderBy(fieldPath, order), this.collectionName, this.database);
    };
    Query.prototype.limit = function (max) {
        return new Query(this._query.limit(max), this.collectionName, this.database);
    };
    Query.prototype.skip = function (offset) {
        return new Query(this._query.skip(offset), this.collectionName, this.database);
    };
    Query.prototype.get = function (options) {
        var _this = this;
        var apiName = 'collection.get';
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var queryResult, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._query.get()];
                    case 1:
                        queryResult = _a.sent();
                        error_checker_1.checkError(queryResult);
                        resolve({
                            data: queryResult.data,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_1, apiName));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Query.prototype.update = function (options) {
        var _this = this;
        var apiName = 'collection.update';
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var updateResult, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        assert_1.assertType(options, {
                            data: 'object',
                        });
                        assert_1.assertObjectNotEmpty({
                            name: 'options.data',
                            target: options.data,
                        });
                        return [4 /*yield*/, this._query.update(options.data)];
                    case 1:
                        updateResult = _a.sent();
                        error_checker_1.checkError(updateResult);
                        resolve({
                            stats: {
                                updated: updateResult.updated || 0,
                            },
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_2, apiName));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Query.prototype.remove = function (options) {
        var _this = this;
        var apiName = 'collection.remove';
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var removeResult, err_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._query.remove()];
                    case 1:
                        removeResult = _a.sent();
                        error_checker_1.checkError(removeResult);
                        resolve({
                            stats: {
                                removed: removeResult.removed,
                            },
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_3, apiName));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Query.prototype.count = function (options) {
        var _this = this;
        var apiName = 'collection.count';
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var queryResult, err_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._query.count()];
                    case 1:
                        queryResult = _a.sent();
                        error_checker_1.checkError(queryResult);
                        resolve({
                            total: queryResult.total,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        reject(error_1.returnAsFinalCloudSDKError(err_4, apiName));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    return Query;
}());
exports.Query = Query;


/***/ }),

/***/ "./src/api/database/index.ts":
/*!***********************************!*\
  !*** ./src/api/database/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloud_1 = __webpack_require__(/*! ../cloud */ "./src/api/cloud/index.ts");
var api_1 = __webpack_require__(/*! ./api/api */ "./src/api/database/api/api.ts");
exports.DATABASE_SERVICE_NAME = 'database';
function createDatabaseService() {
    return {
        name: exports.DATABASE_SERVICE_NAME,
        getAPIs: api_1.getAPIs,
    };
}
function registerService(cloud) {
    cloud.registerService(createDatabaseService());
}
exports.registerService = registerService;
registerService(cloud_1.default);


/***/ }),

/***/ "./src/api/functions/api/api.ts":
/*!**************************************!*\
  !*** ./src/api/functions/api/api.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var callFunction_1 = __webpack_require__(/*! ./callFunction */ "./src/api/functions/api/callFunction.ts");
function getAPIs() {
    return {
        callFunction: callFunction_1.default,
    };
}
exports.getAPIs = getAPIs;


/***/ }),

/***/ "./src/api/functions/api/callFunction.ts":
/*!***********************************************!*\
  !*** ./src/api/functions/api/callFunction.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/api/functions/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function callFunction(options) {
    var _this = this;
    var apiName = 'callFunction';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, parsedResult, e_1, error;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for callFunction must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            name: 'string'
                        });
                        if (options.hasOwnProperty('data')) {
                            assert_1.assertType(options, {
                                data: 'object'
                            });
                        }
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.callFunction({
                            name: options.name,
                            data: options.data || {},
                        }, cloud_1.default.getOverriddenConfig(options.config || {}, __1.FUNCTIONS_SERVICE_NAME))];
                case 2:
                    result = _a.sent();
                    parsedResult = result.result;
                    try {
                        if (typeof parsedResult === 'string') {
                            parsedResult = JSON.parse(result.result);
                        }
                    }
                    catch (_) {
                        // no nothing
                    }
                    return [2 /*return*/, resolve({
                            result: parsedResult,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                            requestID: result.requestId,
                        })];
                case 3:
                    e_1 = _a.sent();
                    error = error_1.returnAsFinalCloudSDKError(e_1, apiName);
                    // @ts-ignore
                    error.requestID = e_1.requestID;
                    return [2 /*return*/, reject(error)];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = callFunction;


/***/ }),

/***/ "./src/api/functions/index.ts":
/*!************************************!*\
  !*** ./src/api/functions/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloud_1 = __webpack_require__(/*! ../cloud */ "./src/api/cloud/index.ts");
var api_1 = __webpack_require__(/*! ./api/api */ "./src/api/functions/api/api.ts");
exports.FUNCTIONS_SERVICE_NAME = 'functions';
function createFunctionsService() {
    return {
        name: exports.FUNCTIONS_SERVICE_NAME,
        getAPIs: api_1.getAPIs,
    };
}
function registerService(cl) {
    cl.registerService(createFunctionsService());
}
exports.registerService = registerService;
registerService(cloud_1.default);


/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var cloud_1 = __webpack_require__(/*! ./cloud */ "./src/api/cloud/index.ts");
// import api
__webpack_require__(/*! ./database */ "./src/api/database/index.ts");
__webpack_require__(/*! ./storage */ "./src/api/storage/index.ts");
__webpack_require__(/*! ./functions */ "./src/api/functions/index.ts");
__webpack_require__(/*! ./open */ "./src/api/open/index.ts");
__webpack_require__(/*! ./utils */ "./src/api/utils/index.ts");
module.exports = cloud_1.default.exportAPI;


/***/ }),

/***/ "./src/api/open/api/api.ts":
/*!*********************************!*\
  !*** ./src/api/open/api/api.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var callOpenAPI_1 = __webpack_require__(/*! ./callOpenAPI */ "./src/api/open/api/callOpenAPI.ts");
var callWXInnerAPI_1 = __webpack_require__(/*! ./callWXInnerAPI */ "./src/api/open/api/callWXInnerAPI.ts");
function getAPIs() {
    return {
        callOpenAPI: callOpenAPI_1.default,
        callWXInnerAPI: callWXInnerAPI_1.default,
    };
}
exports.getAPIs = getAPIs;


/***/ }),

/***/ "./src/api/open/api/callOpenAPI.ts":
/*!*****************************************!*\
  !*** ./src/api/open/api/callOpenAPI.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function callOpenAPI(options) {
    var _this = this;
    var apiName = 'callOpenAPI';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, parsedResult, e_1, error;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for callOpenAPI must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            api: 'string'
                        });
                        if (options.data) {
                            assert_1.assertType(options, {
                                data: 'object'
                            });
                        }
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.callOpenAPI({
                            api: options.api,
                            data: options.data || {},
                            event: options.event,
                        }, options.config || {})];
                case 2:
                    result = _a.sent();
                    parsedResult = result.result;
                    try {
                        if (typeof parsedResult === 'string') {
                            parsedResult = JSON.parse(result.result);
                        }
                    }
                    catch (_) {
                        // no nothing
                    }
                    return [2 /*return*/, resolve({
                            result: parsedResult,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        })];
                case 3:
                    e_1 = _a.sent();
                    error = error_1.returnAsFinalCloudSDKError(e_1, apiName);
                    return [2 /*return*/, reject(error)];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = callOpenAPI;


/***/ }),

/***/ "./src/api/open/api/callWXInnerAPI.ts":
/*!********************************************!*\
  !*** ./src/api/open/api/callWXInnerAPI.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function callWXInnerAPI(options) {
    var _this = this;
    var apiName = 'callWXInnerAPI';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, parsedResult, e_1, error;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for callWXInnerAPI must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            cmdid: 'number'
                        });
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.callOpenAPI({
                            api: '/inner/wxtransfer',
                            data: {
                                cmdid: options.cmdid,
                                req_data: JSON.stringify(options.data || {}),
                            },
                            event: options.event,
                        }, options.config || {})];
                case 2:
                    result = _a.sent();
                    parsedResult = result.result;
                    try {
                        if (typeof parsedResult === 'string') {
                            parsedResult = JSON.parse(result.result);
                        }
                    }
                    catch (_) {
                        // no nothing
                    }
                    return [2 /*return*/, resolve({
                            result: parsedResult,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        })];
                case 3:
                    e_1 = _a.sent();
                    error = error_1.returnAsFinalCloudSDKError(e_1, apiName);
                    return [2 /*return*/, reject(error)];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = callWXInnerAPI;


/***/ }),

/***/ "./src/api/open/index.ts":
/*!*******************************!*\
  !*** ./src/api/open/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloud_1 = __webpack_require__(/*! ../cloud */ "./src/api/cloud/index.ts");
var api_1 = __webpack_require__(/*! ./api/api */ "./src/api/open/api/api.ts");
var OPEN_SERVICE_NAME = 'open';
function createFunctionsService() {
    return {
        name: OPEN_SERVICE_NAME,
        getAPIs: api_1.getAPIs,
    };
}
function registerService(cl) {
    cl.registerService(createFunctionsService());
}
exports.registerService = registerService;
registerService(cloud_1.default);


/***/ }),

/***/ "./src/api/storage/api/api.ts":
/*!************************************!*\
  !*** ./src/api/storage/api/api.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uploadFile_1 = __webpack_require__(/*! ./uploadFile */ "./src/api/storage/api/uploadFile.ts");
var downloadFile_1 = __webpack_require__(/*! ./downloadFile */ "./src/api/storage/api/downloadFile.ts");
var getTempFileURL_1 = __webpack_require__(/*! ./getTempFileURL */ "./src/api/storage/api/getTempFileURL.ts");
var deleteFile_1 = __webpack_require__(/*! ./deleteFile */ "./src/api/storage/api/deleteFile.ts");
function getAPIs() {
    return {
        uploadFile: uploadFile_1.default,
        downloadFile: downloadFile_1.default,
        getTempFileURL: getTempFileURL_1.default,
        deleteFile: deleteFile_1.default,
    };
}
exports.getAPIs = getAPIs;


/***/ }),

/***/ "./src/api/storage/api/deleteFile.ts":
/*!*******************************************!*\
  !*** ./src/api/storage/api/deleteFile.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/api/storage/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function deleteFile(options) {
    var _this = this;
    var apiName = 'deleteFile';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for deleteFile must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            fileList: 'array'
                        });
                        options.fileList.forEach(function (f, i) {
                            if (typeof f !== 'string') {
                                throw new Error("Type of fileList[" + i + "] must be string instead of " + typeof f);
                            }
                        });
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.deleteFile({
                            fileList: options.fileList
                        }, cloud_1.default.getOverriddenConfig(options.config || {}, __1.STORAGE_SERVICE_NAME))];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, resolve({
                            fileList: result.fileList,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        })];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e_1, apiName))];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = deleteFile;


/***/ }),

/***/ "./src/api/storage/api/downloadFile.ts":
/*!*********************************************!*\
  !*** ./src/api/storage/api/downloadFile.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/api/storage/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function downloadFile(options) {
    var _this = this;
    var apiName = 'downloadFile';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for downloadFile must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            fileID: 'string',
                        });
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.downloadFile({
                            fileID: options.fileID,
                        }, cloud_1.default.getOverriddenConfig(options.config || {}, __1.STORAGE_SERVICE_NAME))];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, resolve({
                            fileContent: result.fileContent,
                            statusCode: result.statusCode,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        })];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e_1, apiName))];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = downloadFile;


/***/ }),

/***/ "./src/api/storage/api/getTempFileURL.ts":
/*!***********************************************!*\
  !*** ./src/api/storage/api/getTempFileURL.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/api/storage/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function getTempFileURL(options) {
    var _this = this;
    var apiName = 'getTempFileURL';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for getTempFileURL must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            fileList: 'array',
                        });
                        /*
                        options.fileList.forEach((f, i) => {
                          if (!f) {
                            throw new Error(`Type of fileList[${i}] must be object instead of ${typeof f}`)
                          }
                          if (typeof f.maxAge !== 'number') {
                            throw new Error(`Type of fileList[${i}].maxAge must be number instead of ${typeof f.maxAge}`)
                          }
                          if (typeof f.fileID !== 'string') {
                            throw new Error(`Type of fileList[${i}].fileID must be string instead of ${typeof f.fileID}`)
                          }
                        })
                        */
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.getTempFileURL({
                            fileList: options.fileList,
                        }, cloud_1.default.getOverriddenConfig(options.config || {}, __1.STORAGE_SERVICE_NAME))];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, resolve({
                            fileList: result.fileList,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        })];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e_1, apiName))];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = getTempFileURL;


/***/ }),

/***/ "./src/api/storage/api/uploadFile.ts":
/*!*******************************************!*\
  !*** ./src/api/storage/api/uploadFile.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var assert_1 = __webpack_require__(/*! utils/assert */ "./src/utils/assert.ts");
var error_1 = __webpack_require__(/*! utils/error */ "./src/utils/error.ts");
var cloud_1 = __webpack_require__(/*! ../../cloud */ "./src/api/cloud/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/api/storage/index.ts");
var msg_1 = __webpack_require__(/*! utils/msg */ "./src/utils/msg.ts");
function uploadFile(options) {
    var _this = this;
    var apiName = 'uploadFile';
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var header, result, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError({
                                errMsg: 'Params for uploadFile must be an object instead of ' + typeof options,
                            }, apiName))];
                    }
                    try {
                        assert_1.assertType(options, {
                            cloudPath: 'string',
                        });
                        if (!options.fileContent) {
                            return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(new Error('Type of fileContent must be fs.ReadStream instead of ' + typeof options.fileContent), apiName))];
                        }
                    }
                    catch (e) {
                        return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e, apiName))];
                    }
                    header = options.header || {};
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cloud_1.default.provider.api.uploadFile({
                            fileContent: options.fileContent,
                            cloudPath: options.cloudPath,
                            header: header,
                        }, cloud_1.default.getOverriddenConfig(options.config || {}, __1.STORAGE_SERVICE_NAME))];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, resolve({
                            fileID: result.fileID,
                            statusCode: result.statusCode,
                            errMsg: msg_1.apiSuccessMsg(apiName),
                        })];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, reject(error_1.returnAsFinalCloudSDKError(e_1, apiName))];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = uploadFile;


/***/ }),

/***/ "./src/api/storage/index.ts":
/*!**********************************!*\
  !*** ./src/api/storage/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloud_1 = __webpack_require__(/*! ../cloud */ "./src/api/cloud/index.ts");
var api_1 = __webpack_require__(/*! ./api/api */ "./src/api/storage/api/api.ts");
exports.STORAGE_SERVICE_NAME = 'storage';
function createStorageService() {
    return {
        name: exports.STORAGE_SERVICE_NAME,
        getAPIs: api_1.getAPIs,
    };
}
function registerService(cloud) {
    cloud.registerService(createStorageService());
}
exports.registerService = registerService;
registerService(cloud_1.default);


/***/ }),

/***/ "./src/api/utils/api/api.ts":
/*!**********************************!*\
  !*** ./src/api/utils/api/api.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getAPIs() {
    return {};
}
exports.getAPIs = getAPIs;


/***/ }),

/***/ "./src/api/utils/index.ts":
/*!********************************!*\
  !*** ./src/api/utils/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloud_1 = __webpack_require__(/*! ../cloud */ "./src/api/cloud/index.ts");
var api_1 = __webpack_require__(/*! ./api/api */ "./src/api/utils/api/api.ts");
var UTILS_SERVICE_NAME = 'utils';
function createUtilsService() {
    return {
        name: UTILS_SERVICE_NAME,
        getAPIs: api_1.getAPIs,
    };
}
function registerService(cloud) {
    cloud.registerService(createUtilsService());
}
exports.registerService = registerService;
registerService(cloud_1.default);


/***/ }),

/***/ "./src/config/error.config.ts":
/*!************************************!*\
  !*** ./src/config/error.config.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERR_CODE = {
    '-1': 'unknown error',
    UNKNOWN_ERROR: -1,
    // 以 6 开始的是由微信服务器侧产生的错误码
    // 以 5 开始的是由腾讯云侧产生的错误码
    // 以 4 开始的是本地 SDK 产生的错误
    // 接下来两位表示具体业务类型：01通用，02数据库，03文件，04云函数
    // 最后三位表示具体的错误
    // 小程序 SDK 云函数
    '-404001': 'empty call result',
    SDK_FUNCTIONS_EMPTY_CALL_RESULT: -404001,
    '-404002': 'empty event id',
    SDK_FUNCTIONS_EMPTY_EVENT_ID: -404002,
    '-404003': 'empty poll url',
    SDK_FUNCTIONS_EMPTY_POLL_URL: -404003,
    '-404004': 'empty poll result json',
    SDK_FUNCTIONS_EMPTY_POLL_RESULT_JSON: -404004,
    '-404005': 'exceed max poll retry',
    SDK_FUNCTIONS_EXCEED_MAX_POLL_RETRY: -404005,
    '-404006': 'empty poll result base resp',
    SDK_FUNCTIONS_EMPTY_POLL_RESULT_BASE_RESP: -404006,
    '-404007': 'error while polling for the result, poll result base resp ret %s',
    SDK_FUNCTIONS_POLL_RESULT_BASE_RESP_RET_ABNORMAL: -404007,
    '-404008': 'error while polling for the result, polling server return a status code of %s',
    SDK_FUNCTIONS_POLL_RESULT_STATUS_CODE_ERROR: -404008,
    '-404009': 'error while polling for the result: %s',
    SDK_FUNCTIONS_POLL_ERROR: -404009,
    // 微信服务器
    '-601001': 'system error',
    WX_SYSTEM_ERROR: -601001,
    '-601002': 'system args error',
    WX_SYSTEM_ARGS_ERROR: -601002,
    '-601003': 'system network error',
    WX_SYSTEM_NETWORK_ERROR: -601003,
    // 腾讯云通用
    '-501001': 'resource system error',
    TCB_RESOURCE_SYSTEM_ERROR: -501001,
    '-501002': 'resource server timeout',
    TCB_RESOURCE_SERVER_TIMEOUT: -501002,
    '-501003': 'exceed request limit',
    TCB_EXCEED_REQUEST_LIMIT: -501003,
    '-501004': 'exceed concurrent request limit',
    TCB_EXCEED_CONCURRENT_REQUEST_LIMIT: -501004,
    '-501005': 'invalid env',
    TCB_INVALID_ENV: -501005,
    '-501006': 'invalid common parameters',
    TCB_INVALID_COMMON_PARAM: -501006,
    '-501007': 'invalid parameters',
    TCB_INVALID_PARAM: -501007,
    '-501008': 'invalid request source',
    TCB_INVALID_REQUEST_SOURCE: -501008,
    '-501009': 'resource not initialized',
    TCB_RESOURCE_NOT_INITIALIZED: -501009,
    // 腾讯云数据库
    '-502001': 'database request fail',
    TCB_DB_REQUEST_FAIL: -502001,
    '-502002': 'database invalid command',
    TCB_DB_INVALID_COMMAND: -502002,
    '-502003': 'database permission denied',
    TCB_DB_PERMISSION_DENIED: -502003,
    '-502004': 'database exceed collection limit',
    TCB_DB_EXCEED_COLLECTION_LIMIT: -502004,
    '-502005': 'database collection not exists',
    TCB_DB_COLLECTION_NOT_EXISTS: -502005,
    // 腾讯云文件管理
    '-503001': 'storage request fail',
    TCB_STORAGE_REQUEST_FAIL: -503001,
    '-503002': 'storage permission denied',
    TCB_STORAGE_PERMISSION_DENIED: -503002,
    '-503003': 'storage file not exists',
    TCB_STORAGE_FILE_NOT_EXISTS: -503003,
    '-503004': 'storage invalid sign parameter',
    TCB_STORAGE_INVALID_SIGN_PARAM: -503004,
    // 腾讯云云函数
    '-504001': 'functions request fail',
    TCB_FUNCTIONS_REQUEST_FAIL: -504001,
    '-504002': 'functions execute fail',
    TCB_FUNCTIONS_EXEC_FAIL: -504002,
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./api/index */ "./src/api/index.ts");


/***/ }),

/***/ "./src/utils/assert.ts":
/*!*****************************!*\
  !*** ./src/utils/assert.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = __webpack_require__(/*! ./type */ "./src/utils/type.ts");
var error_1 = __webpack_require__(/*! ./error */ "./src/utils/error.ts");
var error_config_1 = __webpack_require__(/*! config/error.config */ "./src/config/error.config.ts");
function sameType(input, ref, name) {
    function sameTypeImpl(input, ref, name) {
        var inputType = type_1.getType(input);
        var refType = type_1.getType(ref);
        if (inputType !== refType) {
            return name + " should be " + refType + " instead of " + inputType + "; ";
        }
        var errors = '';
        switch (inputType) {
            case 'object': {
                for (var key in ref) {
                    errors += sameTypeImpl(input[key], ref[key], name + "." + key);
                }
                break;
            }
            case 'array': {
                for (var i = 0; i < ref.length; i++) {
                    errors += sameTypeImpl(input[i], ref[i], name + "[" + i + "]");
                }
                break;
            }
            default: {
                break;
            }
        }
        return errors;
    }
    var error = sameTypeImpl(input, ref, name);
    return {
        passed: !error,
        reason: error,
    };
}
exports.sameType = sameType;
function validType(input, ref, name) {
    if (name === void 0) { name = 'parameter'; }
    function validTypeImpl(input, ref, name) {
        var inputType = type_1.getType(input);
        var refType = type_1.getType(ref);
        if (refType === 'string') {
            if (inputType !== ref) {
                return name + " should be " + ref + " instead of " + inputType + ";";
            }
            return '';
        }
        else {
            if (inputType !== refType) {
                return name + " should be " + refType + " instead of " + inputType + "; ";
            }
            var errors = '';
            switch (inputType) {
                case 'object': {
                    for (var key in ref) {
                        errors += validTypeImpl(input[key], ref[key], name + "." + key);
                    }
                    break;
                }
                case 'array': {
                    for (var i = 0; i < ref.length; i++) {
                        errors += validTypeImpl(input[i], ref[i], name + "[" + i + "]");
                    }
                    break;
                }
                default: {
                    break;
                }
            }
            return errors;
        }
    }
    var error = validTypeImpl(input, ref, name);
    return {
        passed: !error,
        reason: error,
    };
}
exports.validType = validType;
function validObjectOptionalType(input, ref, name) {
    if (name === void 0) { name = 'parameter'; }
    function validImpl(input, ref, name) {
        var inputType = type_1.getType(input);
        var refType = type_1.getType(ref);
        if (refType !== 'object')
            return '';
        if (inputType === 'object') {
            for (var key in input) {
                var val = input[key];
                if (val === undefined || key === null) {
                    continue;
                }
                var assertResult = validType(val, ref[key], name + "." + key);
                return assertResult.passed ? '' : assertResult.reason;
            }
        }
        else {
            return name + " should be object instead of " + inputType;
        }
        return '';
    }
    var error = validImpl(input, ref, name);
    return {
        passed: !error,
        reason: error,
    };
}
exports.validObjectOptionalType = validObjectOptionalType;
function assertType(param, ref, name, ErrorClass) {
    if (name === void 0) { name = 'parameter'; }
    if (ErrorClass === void 0) { ErrorClass = error_1.CloudSDKError; }
    // check param validity
    var paramCheckResult = validType(param, ref, name);
    if (!paramCheckResult.passed) {
        throw new ErrorClass({
            errMsg: paramCheckResult.reason,
        });
    }
}
exports.assertType = assertType;
function assertObjectOptionalType(param, ref, name, ErrorClass) {
    if (name === void 0) { name = 'parameter'; }
    if (ErrorClass === void 0) { ErrorClass = error_1.CloudSDKError; }
    // check param validity
    var paramCheckResult = validObjectOptionalType(param, ref, name);
    if (!paramCheckResult.passed) {
        throw new ErrorClass({
            errMsg: paramCheckResult.reason,
        });
    }
}
exports.assertObjectOptionalType = assertObjectOptionalType;
function assertRequiredParam(param, name, funcName, ErrorClass) {
    if (ErrorClass === void 0) { ErrorClass = error_1.CloudSDKError; }
    if (param === undefined || param === null) {
        throw new ErrorClass({
            errMsg: "parameter " + name + " of function " + funcName + " must be provided",
        });
    }
}
exports.assertRequiredParam = assertRequiredParam;
function assertObjectNotEmpty(_a) {
    var target = _a.target, name = _a.name, _b = _a.ErrorClass, ErrorClass = _b === void 0 ? error_1.CloudSDKError : _b;
    if (Object.keys(target).length === 0) {
        throw new ErrorClass({
            errCode: error_config_1.ERR_CODE.SDK_API_PARAMETER_ERROR,
            errMsg: name + " must not be empty"
        });
    }
}
exports.assertObjectNotEmpty = assertObjectNotEmpty;
/*
export function constructTypeRef(typeDef: any): any {

  const type = getType(typeDef)

  switch(type) {
    case 'string': {
      return ''
    }
    case 'number': {

    }
  }

}
*/ 


/***/ }),

/***/ "./src/utils/error.ts":
/*!****************************!*\
  !*** ./src/utils/error.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var type_1 = __webpack_require__(/*! ./type */ "./src/utils/type.ts");
var msg_1 = __webpack_require__(/*! ./msg */ "./src/utils/msg.ts");
var error_config_1 = __webpack_require__(/*! config/error.config */ "./src/config/error.config.ts");
var CloudSDKError = /** @class */ (function (_super) {
    tslib_1.__extends(CloudSDKError, _super);
    function CloudSDKError(options) {
        var _this = _super.call(this, options.errMsg) || this;
        _this.errCode = -1;
        Object.defineProperties(_this, {
            message: {
                get: function () {
                    return "errCode: " + this.errCode + " " + (error_config_1.ERR_CODE[this.errCode] || '') + " | errMsg: " + this.errMsg;
                },
                set: function (msg) {
                    this.errMsg = msg;
                }
            }
        });
        _this.errCode = options.errCode || -1;
        _this.errMsg = options.errMsg;
        return _this;
    }
    Object.defineProperty(CloudSDKError.prototype, "message", {
        get: function () {
            return "errCode: " + this.errCode + " | errMsg: " + this.errMsg;
        },
        set: function (msg) {
            this.errMsg = msg;
        },
        enumerable: true,
        configurable: true
    });
    return CloudSDKError;
}(Error));
exports.CloudSDKError = CloudSDKError;
function createError(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.errCode, errCode = _c === void 0 ? 1 : _c, _d = _b.errMsg, errMsg = _d === void 0 ? '' : _d, _e = _b.errClass, errClass = _e === void 0 ? CloudSDKError : _e;
    return new errClass({
        errCode: errCode,
        errMsg: errMsg,
    });
}
exports.createError = createError;
function isSDKError(error) {
    return error && (error instanceof Error) && type_1.isString(error.errMsg);
}
exports.isSDKError = isSDKError;
function returnAsCloudSDKError(err, appendMsg) {
    if (appendMsg === void 0) { appendMsg = ''; }
    if (err) {
        if (isSDKError(err)) {
            if (appendMsg) {
                err.errMsg += '; ' + appendMsg;
            }
            return err;
        }
        var errCode = err ? err.errCode : undefined;
        var errMsg = (err && err.errMsg || err.toString() || 'unknown error') + '; ' + appendMsg;
        return new CloudSDKError({
            errCode: errCode,
            errMsg: errMsg,
        });
    }
    return new CloudSDKError({
        errMsg: appendMsg
    });
}
exports.returnAsCloudSDKError = returnAsCloudSDKError;
function returnAsFinalCloudSDKError(err, apiName) {
    if (err && isSDKError(err)) {
        return err;
    }
    var e = returnAsCloudSDKError(err, "at " + apiName + " api; ");
    e.errMsg = msg_1.apiFailMsg(apiName, e.errMsg);
    return e;
}
exports.returnAsFinalCloudSDKError = returnAsFinalCloudSDKError;


/***/ }),

/***/ "./src/utils/msg.ts":
/*!**************************!*\
  !*** ./src/utils/msg.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function apiSuccessMsg(apiName) {
    return apiName + ":ok";
}
exports.apiSuccessMsg = apiSuccessMsg;
function apiCancelMsg(apiName, msg) {
    return apiName + ":cancel " + msg;
}
exports.apiCancelMsg = apiCancelMsg;
function apiFailMsg(apiName, msg) {
    return apiName + ":fail " + msg;
}
exports.apiFailMsg = apiFailMsg;


/***/ }),

/***/ "./src/utils/symbol.ts":
/*!*****************************!*\
  !*** ./src/utils/symbol.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var _symbols = [];
var __internalMark__ = {};
var HiddenSymbol = /** @class */ (function () {
    function HiddenSymbol(target) {
        Object.defineProperties(this, {
            target: {
                enumerable: false,
                writable: false,
                configurable: false,
                value: target,
            },
        });
    }
    return HiddenSymbol;
}());
var InternalSymbol = /** @class */ (function (_super) {
    tslib_1.__extends(InternalSymbol, _super);
    function InternalSymbol(target, __mark__) {
        var _this = this;
        if (__mark__ !== __internalMark__) {
            throw new TypeError('InternalSymbol cannot be constructed with new operator');
        }
        _this = _super.call(this, target) || this;
        return _this;
    }
    InternalSymbol.for = function (target) {
        for (var i = 0, len = _symbols.length; i < len; i++) {
            if (_symbols[i].target === target) {
                return _symbols[i].instance;
            }
        }
        var symbol = new InternalSymbol(target, __internalMark__);
        _symbols.push({
            target: target,
            instance: symbol,
        });
        return symbol;
    };
    return InternalSymbol;
}(HiddenSymbol));
exports.InternalSymbol = InternalSymbol;
exports.default = InternalSymbol;


/***/ }),

/***/ "./src/utils/type.ts":
/*!***************************!*\
  !*** ./src/utils/type.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var symbol_1 = __webpack_require__(/*! ./symbol */ "./src/utils/symbol.ts");
exports.getType = function (x) { return Object.prototype.toString.call(x).slice(8, -1).toLowerCase(); };
exports.isObject = function (x) { return exports.getType(x) === 'object'; };
exports.isString = function (x) { return exports.getType(x) === 'string'; };
exports.isNumber = function (x) { return exports.getType(x) === 'number'; };
exports.isPromise = function (x) { return exports.getType(x) === 'promise'; };
exports.isFunction = function (x) { return typeof x === 'function'; };
exports.isArray = function (x) { return Array.isArray(x); };
exports.isDate = function (x) { return exports.getType(x) === 'date'; };
exports.isInternalObject = function (x) { return x && (x._internalType instanceof symbol_1.InternalSymbol); };
exports.isPlainObject = function (obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    var proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
};


/***/ }),

/***/ "tcb-admin-node":
/*!*********************************!*\
  !*** external "tcb-admin-node" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('./../tcb-admin-node/index.js');

/***/ }),

/***/ "tcb-admin-node/src/utils/httpRequest":
/*!*******************************************************!*\
  !*** external "tcb-admin-node/src/utils/httpRequest" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('./../tcb-admin-node/src/utils/httpRequest.js');

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('./../tslib/tslib.js');

/***/ })

/******/ }))); 
 			}); 
		define("utils/openid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

function getOpenid() {
    return new Promise(function (res, rej) {
        wx.login({
            success: function success(loginCode) {
                var appid = 'wxb68e03b957eb1a9c'; //填写微信小程序appid  
                var secret = '9110816a35f73a5b716d2ddbfea51fdc'; //填写微信小程序secret  
                //调用request请求api转换登录凭证  
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + loginCode.code,
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function success(d) {
                        //获取openid  
                        res(d.data.openid);
                    },
                    fail: function fail(d) {
                        rej(d);
                    }
                });
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5pZC5qcyJdLCJuYW1lcyI6WyJnZXRPcGVuaWQiLCJQcm9taXNlIiwicmVzIiwicmVqIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJsb2dpbkNvZGUiLCJhcHBpZCIsInNlY3JldCIsInJlcXVlc3QiLCJ1cmwiLCJjb2RlIiwiaGVhZGVyIiwiZCIsImRhdGEiLCJvcGVuaWQiLCJmYWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0JDLFdBQUdDLEtBQUgsQ0FBUztBQUNMQyxxQkFBUyxpQkFBVUMsU0FBVixFQUFxQjtBQUMxQixvQkFBSUMsUUFBUSxvQkFBWixDQUQwQixDQUNRO0FBQ2xDLG9CQUFJQyxTQUFTLGtDQUFiLENBRjBCLENBRXVCO0FBQ2pEO0FBQ0FMLG1CQUFHTSxPQUFILENBQVc7QUFDUEMseUJBQUssd0RBQXdESCxLQUF4RCxHQUFnRSxVQUFoRSxHQUE2RUMsTUFBN0UsR0FBc0YseUNBQXRGLEdBQWtJRixVQUFVSyxJQUQxSTtBQUVQQyw0QkFBUTtBQUNKLHdDQUFnQjtBQURaLHFCQUZEO0FBS1BQLDJCQUxPLG1CQUtDUSxDQUxELEVBS0k7QUFDUDtBQUNBWiw0QkFBSVksRUFBRUMsSUFBRixDQUFPQyxNQUFYO0FBQ0gscUJBUk07QUFTUEMsd0JBVE8sZ0JBU0ZILENBVEUsRUFTQztBQUNKWCw0QkFBSVcsQ0FBSjtBQUNIO0FBWE0saUJBQVg7QUFhSDtBQWxCSSxTQUFUO0FBb0JILEtBckJNLENBQVA7QUFzQkgiLCJmaWxlIjoib3BlbmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0T3BlbmlkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGxvZ2luQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFwcGlkID0gJ3d4YjY4ZTAzYjk1N2ViMWE5Yyc7IC8v5aGr5YaZ5b6u5L+h5bCP56iL5bqPYXBwaWQgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3JldCA9ICc5MTEwODE2YTM1ZjczYTViNzE2ZDJkZGJmZWE1MWZkYyc7IC8v5aGr5YaZ5b6u5L+h5bCP56iL5bqPc2VjcmV0ICBcclxuICAgICAgICAgICAgICAgIC8v6LCD55SocmVxdWVzdOivt+axgmFwaei9rOaNoueZu+W9leWHreivgSAgXHJcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgYXBwaWQgKyAnJnNlY3JldD0nICsgc2VjcmV0ICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSZqc19jb2RlPScgKyBsb2dpbkNvZGUuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+Wb3BlbmlkICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKGQuZGF0YS5vcGVuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqKGQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19 
 			}); 
		define("utils/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flag = require('./../cloud/flag.js');

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var success = _flag2.default.success,
    fail = _flag2.default.fail;

var _default = function () {
    function _default() {
        _classCallCheck(this, _default);
    }

    _createClass(_default, null, [{
        key: 'showActionSheet',
        value: function showActionSheet() {
            var itemList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['确认'];

            return new Promise(function (resole, reject) {
                wx.showActionSheet({
                    itemList: [].concat(_toConsumableArray(itemList), ['取消']),
                    success: function success(e) {
                        console.info('showActionSheet success', e);
                        resole(e.tapIndex);
                    },
                    fail: function fail(e) {
                        console.info('showActionSheet fail', e);
                    }
                });
            });
        }
    }, {
        key: 'navi',
        value: function navi(url) {
            wx.navigateTo({
                url: url
            });
        }
    }, {
        key: 'goback',
        value: function goback() {
            var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            wx.navigateBack({
                delta: delta
            });
        }
    }, {
        key: 'toastError',
        value: function toastError() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '添加失败';

            wx.showToast({
                icon: 'none',
                mask: true,
                title: title
            });
        }
    }, {
        key: 'gobackWhenSuccess',
        value: function gobackWhenSuccess(res) {
            if (res === fail) {
                Utils.toastError();
                return;
            }
            this.goback();
        }
    }, {
        key: 'arr_splice',
        value: function arr_splice(arr, idx) {
            arr.splice(idx, 1);
        }
    }, {
        key: 'getOpenid',
        value: function getOpenid() {
            return new Promise(function (res, rej) {
                wx.cloud.callFunction({
                    // 云函数名称
                    name: 'getOpenid',
                    // 传给云函数的参数
                    success: function success(d) {
                        res(d.result.openId);
                    },
                    fail: function fail(e) {
                        rej(e);
                    }
                });
            });
        }
    }, {
        key: 'loading',
        value: function loading() {
            wx.showLoading({
                title: '加载中',
                mask: true
            });
        }
    }, {
        key: 'loaded',
        value: function loaded() {
            wx.hideLoading();
        }
    }]);

    return _default;
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbInN1Y2Nlc3MiLCJmbGFnIiwiZmFpbCIsIml0ZW1MaXN0IiwiUHJvbWlzZSIsInJlc29sZSIsInJlamVjdCIsInd4Iiwic2hvd0FjdGlvblNoZWV0IiwiZSIsImNvbnNvbGUiLCJpbmZvIiwidGFwSW5kZXgiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwiZGVsdGEiLCJuYXZpZ2F0ZUJhY2siLCJ0aXRsZSIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwicmVzIiwiVXRpbHMiLCJ0b2FzdEVycm9yIiwiZ29iYWNrIiwiYXJyIiwiaWR4Iiwic3BsaWNlIiwicmVqIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiZCIsInJlc3VsdCIsIm9wZW5JZCIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBQ1FBLE8sR0FBa0JDLGMsQ0FBbEJELE87SUFBU0UsSSxHQUFTRCxjLENBQVRDLEk7Ozs7Ozs7OzswQ0FFNkI7QUFBQSxnQkFBbkJDLFFBQW1CLHVFQUFSLENBQUMsSUFBRCxDQUFROztBQUN0QyxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ25DQyxtQkFBR0MsZUFBSCxDQUFtQjtBQUNmTCwyREFBYUEsUUFBYixJQUFzQixJQUF0QixFQURlO0FBRWZILDJCQUZlLG1CQUVQUyxDQUZPLEVBRUo7QUFDUEMsZ0NBQVFDLElBQVIsQ0FBYSx5QkFBYixFQUF3Q0YsQ0FBeEM7QUFDQUosK0JBQU9JLEVBQUVHLFFBQVQ7QUFDSCxxQkFMYztBQU1mVix3QkFOZSxnQkFNVk8sQ0FOVSxFQU1QO0FBQ0pDLGdDQUFRQyxJQUFSLENBQWEsc0JBQWIsRUFBcUNGLENBQXJDO0FBQ0g7QUFSYyxpQkFBbkI7QUFVSCxhQVhNLENBQVA7QUFZSDs7OzZCQUNXSSxHLEVBQUs7QUFDYk4sZUFBR08sVUFBSCxDQUFjO0FBQ1ZEO0FBRFUsYUFBZDtBQUdIOzs7aUNBQ3dCO0FBQUEsZ0JBQVhFLEtBQVcsdUVBQUgsQ0FBRzs7QUFDckJSLGVBQUdTLFlBQUgsQ0FBZ0I7QUFDWkQ7QUFEWSxhQUFoQjtBQUdIOzs7cUNBQ2lDO0FBQUEsZ0JBQWhCRSxLQUFnQix1RUFBUixNQUFROztBQUM5QlYsZUFBR1csU0FBSCxDQUFhO0FBQ1RDLHNCQUFNLE1BREc7QUFFVEMsc0JBQU0sSUFGRztBQUdUSDtBQUhTLGFBQWI7QUFLSDs7OzBDQUN3QkksRyxFQUFLO0FBQzFCLGdCQUFJQSxRQUFRbkIsSUFBWixFQUFrQjtBQUNkb0Isc0JBQU1DLFVBQU47QUFDQTtBQUNIO0FBQ0QsaUJBQUtDLE1BQUw7QUFDSDs7O21DQUNpQkMsRyxFQUFLQyxHLEVBQUs7QUFDeEJELGdCQUFJRSxNQUFKLENBQVdELEdBQVgsRUFBZ0IsQ0FBaEI7QUFDSDs7O29DQUNrQjtBQUNmLG1CQUFPLElBQUl0QixPQUFKLENBQVksVUFBQ2lCLEdBQUQsRUFBTU8sR0FBTixFQUFjO0FBQzdCckIsbUJBQUdzQixLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDbEI7QUFDQUMsMEJBQU0sV0FGWTtBQUdsQjtBQUNBL0IsMkJBSmtCLG1CQUlWZ0MsQ0FKVSxFQUlQO0FBQ1BYLDRCQUFJVyxFQUFFQyxNQUFGLENBQVNDLE1BQWI7QUFDSCxxQkFOaUI7QUFPbEJoQyx3QkFQa0IsZ0JBT2JPLENBUGEsRUFPVjtBQUNKbUIsNEJBQUluQixDQUFKO0FBQ0g7QUFUaUIsaUJBQXRCO0FBV0gsYUFaTSxDQUFQO0FBY0g7OztrQ0FDZTtBQUNaRixlQUFHNEIsV0FBSCxDQUFlO0FBQ1hsQix1QkFBTSxLQURLO0FBRVhHLHNCQUFLO0FBRk0sYUFBZjtBQUlIOzs7aUNBQ2M7QUFDWGIsZUFBRzZCLFdBQUg7QUFDSCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGFnIGZyb20gJy4uL2Nsb3VkL2ZsYWcnO1xyXG5jb25zdCB7IHN1Y2Nlc3MsIGZhaWwgfSA9IGZsYWc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIHN0YXRpYyBzaG93QWN0aW9uU2hlZXQoaXRlbUxpc3QgPSBbJ+ehruiupCddKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbGUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgaXRlbUxpc3Q6Wy4uLml0ZW1MaXN0LCflj5bmtognXSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnc2hvd0FjdGlvblNoZWV0IHN1Y2Nlc3MnLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sZShlLnRhcEluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ3Nob3dBY3Rpb25TaGVldCBmYWlsJywgZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbmF2aSh1cmwpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBnb2JhY2soZGVsdGEgPSAxKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgZGVsdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHRvYXN0RXJyb3IodGl0bGUgPSAn5re75Yqg5aSx6LSlJykge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdvYmFja1doZW5TdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMgPT09IGZhaWwpIHtcclxuICAgICAgICAgICAgVXRpbHMudG9hc3RFcnJvcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ29iYWNrKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXJyX3NwbGljZShhcnIsIGlkeCkge1xyXG4gICAgICAgIGFyci5zcGxpY2UoaWR4LCAxKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRPcGVuaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgLy8g5LqR5Ye95pWw5ZCN56ewXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0T3BlbmlkJyxcclxuICAgICAgICAgICAgICAgIC8vIOS8oOe7meS6keWHveaVsOeahOWPguaVsFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzKGQucmVzdWx0Lm9wZW5JZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGxvYWRpbmcoKXtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOifliqDovb3kuK0nLFxyXG4gICAgICAgICAgICBtYXNrOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2FkZWQoKXtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICB9XHJcbn0gIl19 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _utils = require('./utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/edit', 'pages/note'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    wx.cloud.init({
      traceUser: true
    });
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInRyYWNlVXNlciIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFnQkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWRkQSxNQWNjLEdBZEw7QUFDUEMsYUFBTyxDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsRUFBOEIsWUFBOUIsQ0FEQTtBQUVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBRkQsS0FjSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQUMsT0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWM7QUFDWkMsaUJBQVc7QUFEQyxLQUFkO0FBSFk7QUFNYjs7O0VBckIwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgnLCAncGFnZXMvZWRpdCcsICdwYWdlcy9ub3RlJ10sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgd3guY2xvdWQuaW5pdCh7XG4gICAgICB0cmFjZVVzZXI6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuIl19 
 			}); 	require("app.js");
 		__wxRoute = 'components/vant/action-sheet/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/action-sheet/index.js';	define("components/vant/action-sheet/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    zIndex: {
      type: Number,
      value: 100
    },
    actions: {
      type: Array,
      value: []
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onSelect: function onSelect(event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.actions[index];

      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    },
    onClose: function onClose() {
      this.$emit('close');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJhY3Rpb25zIiwiQXJyYXkiLCJvdmVybGF5IiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsIm1ldGhvZHMiLCJvblNlbGVjdCIsImV2ZW50IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIml0ZW0iLCJkYXRhIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiJGVtaXQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxPQUREO0FBRUxDLFdBQU9DLE1BRkY7QUFHTEMsZ0JBQVlELE1BSFA7QUFJTEUsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksS0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyxhQUFTO0FBQ1BMLFlBQU1MLE9BREM7QUFFUE8sYUFBTztBQUZBLEtBWko7QUFnQkxJLHlCQUFxQjtBQUNuQk4sWUFBTUwsT0FEYTtBQUVuQk8sYUFBTztBQUZZO0FBaEJoQixHQURLO0FBc0JaSyxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsVUFBSUMsUUFBUUQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJGLEtBQXhDO0FBQ0EsVUFBSUcsT0FBTyxLQUFLQyxJQUFMLENBQVVYLE9BQVYsQ0FBa0JPLEtBQWxCLENBQVg7O0FBRUEsVUFBSUcsUUFBUSxDQUFDQSxLQUFLRSxRQUFkLElBQTBCLENBQUNGLEtBQUtHLE9BQXBDLEVBQTZDO0FBQzNDLGFBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSixJQUFyQjtBQUNEO0FBQ0YsS0FSTTtBQVNQSyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsS0FBTCxDQUFXLFFBQVg7QUFDRCxLQVhNO0FBWVBFLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLRixLQUFMLENBQVcsT0FBWDtBQUNEO0FBZE07QUF0QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNob3c6IEJvb2xlYW4sXHJcbiAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgY2FuY2VsVGV4dDogU3RyaW5nLFxyXG4gICAgekluZGV4OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDEwMFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHZhbHVlOiBbXVxyXG4gICAgfSxcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZXZlbnQpIHtcclxuICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5hY3Rpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIGlmIChpdGVtICYmICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmxvYWRpbmcpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/action-sheet/index.js");
 		__wxRoute = 'components/vant/area/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/area/index.js';	define("components/vant/area/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    title: String,
    value: String,
    loading: Boolean,
    itemHeight: {
      type: Number,
      value: 44
    },
    visibleItemCount: {
      type: Number,
      value: 5
    },
    columnsNum: {
      type: [String, Number],
      value: 3
    },
    areaList: {
      type: Object,
      value: {}
    }
  },
  data: {
    pickerValue: [0, 0, 0],
    columns: []
  },
  computed: {
    displayColumns: function displayColumns() {
      var _this$data = this.data,
          _this$data$columns = _this$data.columns,
          columns = _this$data$columns === void 0 ? [] : _this$data$columns,
          columnsNum = _this$data.columnsNum;
      return columns.slice(0, +columnsNum);
    }
  },
  watch: {
    value: function value(_value) {
      this.code = _value;
      this.setValues();
    },
    areaList: 'setValues'
  },
  methods: {
    onCancel: function onCancel() {
      this.$emit('cancel', {
        values: this.getValues(),
        indexs: this.getIndexs()
      });
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', {
        values: this.getValues(),
        indexs: this.getIndexs()
      });
    },
    onChange: function onChange(event) {
      var value = event.detail.value;
      var _this$data2 = this.data,
          pickerValue = _this$data2.pickerValue,
          displayColumns = _this$data2.displayColumns;
      var index = pickerValue.findIndex(function (item, index) {
        return item !== value[index];
      });
      var values = displayColumns[index];

      if (!value[index] || !values[value[index]]) {
        return;
      }

      this.code = values[value[index]].code;
      this.setValues();
      this.$emit('change', {
        picker: this,
        values: this.getValues(),
        index: index
      });
    },
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this.data.areaList && this.data.areaList[type + "_list"] || {};
      result = Object.keys(list).map(function (code) {
        return {
          code: code,
          name: list[code]
        };
      });

      if (code) {
        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    setValues: function setValues() {
      var code = this.code || this.data.areaList && Object.keys(this.data.areaList.county_list || {})[0] || '';
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));
      this.setData({
        'columns[0]': province,
        'columns[1]': city
      });

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code;
      }

      this.setData({
        'columns[2]': this.getList('county', code.slice(0, 4)),
        pickerValue: [this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]
      });
    },
    getValues: function getValues() {
      var _this$data3 = this.data,
          _this$data3$displayCo = _this$data3.displayColumns,
          displayColumns = _this$data3$displayCo === void 0 ? [] : _this$data3$displayCo,
          _this$data3$pickerVal = _this$data3.pickerValue,
          pickerValue = _this$data3$pickerVal === void 0 ? [] : _this$data3$pickerVal;
      return displayColumns.map(function (option, index) {
        return option[pickerValue[index]];
      });
    },
    getIndexs: function getIndexs() {
      var _this$data4 = this.data,
          pickerValue = _this$data4.pickerValue,
          columnsNum = _this$data4.columnsNum;
      return pickerValue.slice(0, columnsNum);
    },
    reset: function reset() {
      this.code = '';
      this.setValues();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJ2YWx1ZSIsImxvYWRpbmciLCJCb29sZWFuIiwiaXRlbUhlaWdodCIsInR5cGUiLCJOdW1iZXIiLCJ2aXNpYmxlSXRlbUNvdW50IiwiY29sdW1uc051bSIsImFyZWFMaXN0IiwiT2JqZWN0IiwiZGF0YSIsInBpY2tlclZhbHVlIiwiY29sdW1ucyIsImNvbXB1dGVkIiwiZGlzcGxheUNvbHVtbnMiLCJfdGhpcyRkYXRhIiwiX3RoaXMkZGF0YSRjb2x1bW5zIiwic2xpY2UiLCJ3YXRjaCIsIl92YWx1ZSIsImNvZGUiLCJzZXRWYWx1ZXMiLCJtZXRob2RzIiwib25DYW5jZWwiLCIkZW1pdCIsInZhbHVlcyIsImdldFZhbHVlcyIsImluZGV4cyIsImdldEluZGV4cyIsIm9uQ29uZmlybSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJkZXRhaWwiLCJfdGhpcyRkYXRhMiIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInBpY2tlciIsImdldExpc3QiLCJyZXN1bHQiLCJsaXN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZ2V0SW5kZXgiLCJjb21wYXJlTnVtIiwiaSIsImxlbmd0aCIsImNvdW50eV9saXN0IiwicHJvdmluY2UiLCJjaXR5Iiwic2V0RGF0YSIsIl90aGlzJGRhdGEzIiwiX3RoaXMkZGF0YTMkZGlzcGxheUNvIiwiX3RoaXMkZGF0YTMkcGlja2VyVmFsIiwib3B0aW9uIiwiX3RoaXMkZGF0YTQiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFdBQU9DLE1BREY7QUFFTEMsV0FBT0QsTUFGRjtBQUdMRSxhQUFTQyxPQUhKO0FBSUxDLGdCQUFZO0FBQ1ZDLFlBQU1DLE1BREk7QUFFVkwsYUFBTztBQUZHLEtBSlA7QUFRTE0sc0JBQWtCO0FBQ2hCRixZQUFNQyxNQURVO0FBRWhCTCxhQUFPO0FBRlMsS0FSYjtBQVlMTyxnQkFBWTtBQUNWSCxZQUFNLENBQUNMLE1BQUQsRUFBU00sTUFBVCxDQURJO0FBRVZMLGFBQU87QUFGRyxLQVpQO0FBZ0JMUSxjQUFVO0FBQ1JKLFlBQU1LLE1BREU7QUFFUlQsYUFBTztBQUZDO0FBaEJMLEdBREs7QUFzQlpVLFFBQU07QUFDSkMsaUJBQWEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEVDtBQUVKQyxhQUFTO0FBRkwsR0F0Qk07QUEwQlpDLFlBQVU7QUFDUkMsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsVUFBSUMsYUFBYSxLQUFLTCxJQUF0QjtBQUFBLFVBQ0lNLHFCQUFxQkQsV0FBV0gsT0FEcEM7QUFBQSxVQUVJQSxVQUFVSSx1QkFBdUIsS0FBSyxDQUE1QixHQUFnQyxFQUFoQyxHQUFxQ0Esa0JBRm5EO0FBQUEsVUFHSVQsYUFBYVEsV0FBV1IsVUFINUI7QUFJQSxhQUFPSyxRQUFRSyxLQUFSLENBQWMsQ0FBZCxFQUFpQixDQUFDVixVQUFsQixDQUFQO0FBQ0Q7QUFQTyxHQTFCRTtBQW1DWlcsU0FBTztBQUNMbEIsV0FBTyxTQUFTQSxLQUFULENBQWVtQixNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLElBQUwsR0FBWUQsTUFBWjtBQUNBLFdBQUtFLFNBQUw7QUFDRCxLQUpJO0FBS0xiLGNBQVU7QUFMTCxHQW5DSztBQTBDWmMsV0FBUztBQUNQQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUI7QUFDbkJDLGdCQUFRLEtBQUtDLFNBQUwsRUFEVztBQUVuQkMsZ0JBQVEsS0FBS0MsU0FBTDtBQUZXLE9BQXJCO0FBSUQsS0FOTTtBQU9QQyxlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsV0FBS0wsS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFDcEJDLGdCQUFRLEtBQUtDLFNBQUwsRUFEWTtBQUVwQkMsZ0JBQVEsS0FBS0MsU0FBTDtBQUZZLE9BQXRCO0FBSUQsS0FaTTtBQWFQRSxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ2pDLFVBQUkvQixRQUFRK0IsTUFBTUMsTUFBTixDQUFhaEMsS0FBekI7QUFDQSxVQUFJaUMsY0FBYyxLQUFLdkIsSUFBdkI7QUFBQSxVQUNJQyxjQUFjc0IsWUFBWXRCLFdBRDlCO0FBQUEsVUFFSUcsaUJBQWlCbUIsWUFBWW5CLGNBRmpDO0FBR0EsVUFBSW9CLFFBQVF2QixZQUFZd0IsU0FBWixDQUFzQixVQUFVQyxJQUFWLEVBQWdCRixLQUFoQixFQUF1QjtBQUN2RCxlQUFPRSxTQUFTcEMsTUFBTWtDLEtBQU4sQ0FBaEI7QUFDRCxPQUZXLENBQVo7QUFHQSxVQUFJVCxTQUFTWCxlQUFlb0IsS0FBZixDQUFiOztBQUVBLFVBQUksQ0FBQ2xDLE1BQU1rQyxLQUFOLENBQUQsSUFBaUIsQ0FBQ1QsT0FBT3pCLE1BQU1rQyxLQUFOLENBQVAsQ0FBdEIsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxXQUFLZCxJQUFMLEdBQVlLLE9BQU96QixNQUFNa0MsS0FBTixDQUFQLEVBQXFCZCxJQUFqQztBQUNBLFdBQUtDLFNBQUw7QUFDQSxXQUFLRyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUNuQmEsZ0JBQVEsSUFEVztBQUVuQlosZ0JBQVEsS0FBS0MsU0FBTCxFQUZXO0FBR25CUSxlQUFPQTtBQUhZLE9BQXJCO0FBS0QsS0FsQ007QUFtQ1BJLGFBQVMsU0FBU0EsT0FBVCxDQUFpQmxDLElBQWpCLEVBQXVCZ0IsSUFBdkIsRUFBNkI7QUFDcEMsVUFBSW1CLFNBQVMsRUFBYjs7QUFFQSxVQUFJbkMsU0FBUyxVQUFULElBQXVCLENBQUNnQixJQUE1QixFQUFrQztBQUNoQyxlQUFPbUIsTUFBUDtBQUNEOztBQUVELFVBQUlDLE9BQU8sS0FBSzlCLElBQUwsQ0FBVUYsUUFBVixJQUFzQixLQUFLRSxJQUFMLENBQVVGLFFBQVYsQ0FBbUJKLE9BQU8sT0FBMUIsQ0FBdEIsSUFBNEQsRUFBdkU7QUFDQW1DLGVBQVM5QixPQUFPZ0MsSUFBUCxDQUFZRCxJQUFaLEVBQWtCRSxHQUFsQixDQUFzQixVQUFVdEIsSUFBVixFQUFnQjtBQUM3QyxlQUFPO0FBQ0xBLGdCQUFNQSxJQUREO0FBRUx1QixnQkFBTUgsS0FBS3BCLElBQUw7QUFGRCxTQUFQO0FBSUQsT0FMUSxDQUFUOztBQU9BLFVBQUlBLElBQUosRUFBVTtBQUNSbUIsaUJBQVNBLE9BQU9LLE1BQVAsQ0FBYyxVQUFVUixJQUFWLEVBQWdCO0FBQ3JDLGlCQUFPQSxLQUFLaEIsSUFBTCxDQUFVeUIsT0FBVixDQUFrQnpCLElBQWxCLE1BQTRCLENBQW5DO0FBQ0QsU0FGUSxDQUFUO0FBR0Q7O0FBRUQsYUFBT21CLE1BQVA7QUFDRCxLQXpETTtBQTBEUE8sY0FBVSxTQUFTQSxRQUFULENBQWtCMUMsSUFBbEIsRUFBd0JnQixJQUF4QixFQUE4QjtBQUN0QyxVQUFJMkIsYUFBYTNDLFNBQVMsVUFBVCxHQUFzQixDQUF0QixHQUEwQkEsU0FBUyxNQUFULEdBQWtCLENBQWxCLEdBQXNCLENBQWpFO0FBQ0EsVUFBSW9DLE9BQU8sS0FBS0YsT0FBTCxDQUFhbEMsSUFBYixFQUFtQmdCLEtBQUtILEtBQUwsQ0FBVyxDQUFYLEVBQWM4QixhQUFhLENBQTNCLENBQW5CLENBQVg7QUFDQTNCLGFBQU9BLEtBQUtILEtBQUwsQ0FBVyxDQUFYLEVBQWM4QixVQUFkLENBQVA7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLEtBQUtTLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNwQyxZQUFJUixLQUFLUSxDQUFMLEVBQVE1QixJQUFSLENBQWFILEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0I4QixVQUF0QixNQUFzQzNCLElBQTFDLEVBQWdEO0FBQzlDLGlCQUFPNEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxDQUFQO0FBQ0QsS0F0RU07QUF1RVAzQixlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsVUFBSUQsT0FBTyxLQUFLQSxJQUFMLElBQWEsS0FBS1YsSUFBTCxDQUFVRixRQUFWLElBQXNCQyxPQUFPZ0MsSUFBUCxDQUFZLEtBQUsvQixJQUFMLENBQVVGLFFBQVYsQ0FBbUIwQyxXQUFuQixJQUFrQyxFQUE5QyxFQUFrRCxDQUFsRCxDQUFuQyxJQUEyRixFQUF0RztBQUNBLFVBQUlDLFdBQVcsS0FBS2IsT0FBTCxDQUFhLFVBQWIsQ0FBZjtBQUNBLFVBQUljLE9BQU8sS0FBS2QsT0FBTCxDQUFhLE1BQWIsRUFBcUJsQixLQUFLSCxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBckIsQ0FBWDtBQUNBLFdBQUtvQyxPQUFMLENBQWE7QUFDWCxzQkFBY0YsUUFESDtBQUVYLHNCQUFjQztBQUZILE9BQWI7O0FBS0EsVUFBSUEsS0FBS0gsTUFBTCxJQUFlN0IsS0FBS0gsS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFkLE1BQXFCLElBQXhDLEVBQThDO0FBQzVDRyxlQUFPZ0MsS0FBSyxDQUFMLEVBQVFoQyxJQUFmO0FBQ0Q7O0FBRUQsV0FBS2lDLE9BQUwsQ0FBYTtBQUNYLHNCQUFjLEtBQUtmLE9BQUwsQ0FBYSxRQUFiLEVBQXVCbEIsS0FBS0gsS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFkLENBQXZCLENBREg7QUFFWE4scUJBQWEsQ0FBQyxLQUFLbUMsUUFBTCxDQUFjLFVBQWQsRUFBMEIxQixJQUExQixDQUFELEVBQWtDLEtBQUswQixRQUFMLENBQWMsTUFBZCxFQUFzQjFCLElBQXRCLENBQWxDLEVBQStELEtBQUswQixRQUFMLENBQWMsUUFBZCxFQUF3QjFCLElBQXhCLENBQS9EO0FBRkYsT0FBYjtBQUlELEtBeEZNO0FBeUZQTSxlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsVUFBSTRCLGNBQWMsS0FBSzVDLElBQXZCO0FBQUEsVUFDSTZDLHdCQUF3QkQsWUFBWXhDLGNBRHhDO0FBQUEsVUFFSUEsaUJBQWlCeUMsMEJBQTBCLEtBQUssQ0FBL0IsR0FBbUMsRUFBbkMsR0FBd0NBLHFCQUY3RDtBQUFBLFVBR0lDLHdCQUF3QkYsWUFBWTNDLFdBSHhDO0FBQUEsVUFJSUEsY0FBYzZDLDBCQUEwQixLQUFLLENBQS9CLEdBQW1DLEVBQW5DLEdBQXdDQSxxQkFKMUQ7QUFLQSxhQUFPMUMsZUFBZTRCLEdBQWYsQ0FBbUIsVUFBVWUsTUFBVixFQUFrQnZCLEtBQWxCLEVBQXlCO0FBQ2pELGVBQU91QixPQUFPOUMsWUFBWXVCLEtBQVosQ0FBUCxDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FsR007QUFtR1BOLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixVQUFJOEIsY0FBYyxLQUFLaEQsSUFBdkI7QUFBQSxVQUNJQyxjQUFjK0MsWUFBWS9DLFdBRDlCO0FBQUEsVUFFSUosYUFBYW1ELFlBQVluRCxVQUY3QjtBQUdBLGFBQU9JLFlBQVlNLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJWLFVBQXJCLENBQVA7QUFDRCxLQXhHTTtBQXlHUG9ELFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLdkMsSUFBTCxHQUFZLEVBQVo7QUFDQSxXQUFLQyxTQUFMO0FBQ0Q7QUE1R007QUExQ0csQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICB2YWx1ZTogU3RyaW5nLFxyXG4gICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgIGl0ZW1IZWlnaHQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogNDRcclxuICAgIH0sXHJcbiAgICB2aXNpYmxlSXRlbUNvdW50OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDVcclxuICAgIH0sXHJcbiAgICBjb2x1bW5zTnVtOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgIHZhbHVlOiAzXHJcbiAgICB9LFxyXG4gICAgYXJlYUxpc3Q6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZToge31cclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHBpY2tlclZhbHVlOiBbMCwgMCwgMF0sXHJcbiAgICBjb2x1bW5zOiBbXVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGRpc3BsYXlDb2x1bW5zOiBmdW5jdGlvbiBkaXNwbGF5Q29sdW1ucygpIHtcclxuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICBfdGhpcyRkYXRhJGNvbHVtbnMgPSBfdGhpcyRkYXRhLmNvbHVtbnMsXHJcbiAgICAgICAgICBjb2x1bW5zID0gX3RoaXMkZGF0YSRjb2x1bW5zID09PSB2b2lkIDAgPyBbXSA6IF90aGlzJGRhdGEkY29sdW1ucyxcclxuICAgICAgICAgIGNvbHVtbnNOdW0gPSBfdGhpcyRkYXRhLmNvbHVtbnNOdW07XHJcbiAgICAgIHJldHVybiBjb2x1bW5zLnNsaWNlKDAsICtjb2x1bW5zTnVtKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY29kZSA9IF92YWx1ZTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZXMoKTtcclxuICAgIH0sXHJcbiAgICBhcmVhTGlzdDogJ3NldFZhbHVlcydcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJywge1xyXG4gICAgICAgIHZhbHVlczogdGhpcy5nZXRWYWx1ZXMoKSxcclxuICAgICAgICBpbmRleHM6IHRoaXMuZ2V0SW5kZXhzKClcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtOiBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCB7XHJcbiAgICAgICAgdmFsdWVzOiB0aGlzLmdldFZhbHVlcygpLFxyXG4gICAgICAgIGluZGV4czogdGhpcy5nZXRJbmRleHMoKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgdmFyIHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YTIgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICBwaWNrZXJWYWx1ZSA9IF90aGlzJGRhdGEyLnBpY2tlclZhbHVlLFxyXG4gICAgICAgICAgZGlzcGxheUNvbHVtbnMgPSBfdGhpcyRkYXRhMi5kaXNwbGF5Q29sdW1ucztcclxuICAgICAgdmFyIGluZGV4ID0gcGlja2VyVmFsdWUuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9PSB2YWx1ZVtpbmRleF07XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdmFsdWVzID0gZGlzcGxheUNvbHVtbnNbaW5kZXhdO1xyXG5cclxuICAgICAgaWYgKCF2YWx1ZVtpbmRleF0gfHwgIXZhbHVlc1t2YWx1ZVtpbmRleF1dKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvZGUgPSB2YWx1ZXNbdmFsdWVbaW5kZXhdXS5jb2RlO1xyXG4gICAgICB0aGlzLnNldFZhbHVlcygpO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcbiAgICAgICAgcGlja2VyOiB0aGlzLFxyXG4gICAgICAgIHZhbHVlczogdGhpcy5nZXRWYWx1ZXMoKSxcclxuICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TGlzdDogZnVuY3Rpb24gZ2V0TGlzdCh0eXBlLCBjb2RlKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgIGlmICh0eXBlICE9PSAncHJvdmluY2UnICYmICFjb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGxpc3QgPSB0aGlzLmRhdGEuYXJlYUxpc3QgJiYgdGhpcy5kYXRhLmFyZWFMaXN0W3R5cGUgKyBcIl9saXN0XCJdIHx8IHt9O1xyXG4gICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhsaXN0KS5tYXAoZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgIG5hbWU6IGxpc3RbY29kZV1cclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChjb2RlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY29kZS5pbmRleE9mKGNvZGUpID09PSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIGdldEluZGV4OiBmdW5jdGlvbiBnZXRJbmRleCh0eXBlLCBjb2RlKSB7XHJcbiAgICAgIHZhciBjb21wYXJlTnVtID0gdHlwZSA9PT0gJ3Byb3ZpbmNlJyA/IDIgOiB0eXBlID09PSAnY2l0eScgPyA0IDogNjtcclxuICAgICAgdmFyIGxpc3QgPSB0aGlzLmdldExpc3QodHlwZSwgY29kZS5zbGljZSgwLCBjb21wYXJlTnVtIC0gMikpO1xyXG4gICAgICBjb2RlID0gY29kZS5zbGljZSgwLCBjb21wYXJlTnVtKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsaXN0W2ldLmNvZGUuc2xpY2UoMCwgY29tcGFyZU51bSkgPT09IGNvZGUpIHtcclxuICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9LFxyXG4gICAgc2V0VmFsdWVzOiBmdW5jdGlvbiBzZXRWYWx1ZXMoKSB7XHJcbiAgICAgIHZhciBjb2RlID0gdGhpcy5jb2RlIHx8IHRoaXMuZGF0YS5hcmVhTGlzdCAmJiBPYmplY3Qua2V5cyh0aGlzLmRhdGEuYXJlYUxpc3QuY291bnR5X2xpc3QgfHwge30pWzBdIHx8ICcnO1xyXG4gICAgICB2YXIgcHJvdmluY2UgPSB0aGlzLmdldExpc3QoJ3Byb3ZpbmNlJyk7XHJcbiAgICAgIHZhciBjaXR5ID0gdGhpcy5nZXRMaXN0KCdjaXR5JywgY29kZS5zbGljZSgwLCAyKSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgJ2NvbHVtbnNbMF0nOiBwcm92aW5jZSxcclxuICAgICAgICAnY29sdW1uc1sxXSc6IGNpdHlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoY2l0eS5sZW5ndGggJiYgY29kZS5zbGljZSgyLCA0KSA9PT0gJzAwJykge1xyXG4gICAgICAgIGNvZGUgPSBjaXR5WzBdLmNvZGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgJ2NvbHVtbnNbMl0nOiB0aGlzLmdldExpc3QoJ2NvdW50eScsIGNvZGUuc2xpY2UoMCwgNCkpLFxyXG4gICAgICAgIHBpY2tlclZhbHVlOiBbdGhpcy5nZXRJbmRleCgncHJvdmluY2UnLCBjb2RlKSwgdGhpcy5nZXRJbmRleCgnY2l0eScsIGNvZGUpLCB0aGlzLmdldEluZGV4KCdjb3VudHknLCBjb2RlKV1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VmFsdWVzOiBmdW5jdGlvbiBnZXRWYWx1ZXMoKSB7XHJcbiAgICAgIHZhciBfdGhpcyRkYXRhMyA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIF90aGlzJGRhdGEzJGRpc3BsYXlDbyA9IF90aGlzJGRhdGEzLmRpc3BsYXlDb2x1bW5zLFxyXG4gICAgICAgICAgZGlzcGxheUNvbHVtbnMgPSBfdGhpcyRkYXRhMyRkaXNwbGF5Q28gPT09IHZvaWQgMCA/IFtdIDogX3RoaXMkZGF0YTMkZGlzcGxheUNvLFxyXG4gICAgICAgICAgX3RoaXMkZGF0YTMkcGlja2VyVmFsID0gX3RoaXMkZGF0YTMucGlja2VyVmFsdWUsXHJcbiAgICAgICAgICBwaWNrZXJWYWx1ZSA9IF90aGlzJGRhdGEzJHBpY2tlclZhbCA9PT0gdm9pZCAwID8gW10gOiBfdGhpcyRkYXRhMyRwaWNrZXJWYWw7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5Q29sdW1ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9uW3BpY2tlclZhbHVlW2luZGV4XV07XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldEluZGV4czogZnVuY3Rpb24gZ2V0SW5kZXhzKCkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YTQgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICBwaWNrZXJWYWx1ZSA9IF90aGlzJGRhdGE0LnBpY2tlclZhbHVlLFxyXG4gICAgICAgICAgY29sdW1uc051bSA9IF90aGlzJGRhdGE0LmNvbHVtbnNOdW07XHJcbiAgICAgIHJldHVybiBwaWNrZXJWYWx1ZS5zbGljZSgwLCBjb2x1bW5zTnVtKTtcclxuICAgIH0sXHJcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICAgIHRoaXMuY29kZSA9ICcnO1xyXG4gICAgICB0aGlzLnNldFZhbHVlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/area/index.js");
 		__wxRoute = 'components/vant/badge-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/badge-group/index.js';	define("components/vant/badge-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'badge',
    type: 'descendant',
    linked: function linked(target) {
      this.badges.push(target);
      this.setActive();
    },
    unlinked: function unlinked(target) {
      this.badges = this.badges.filter(function (item) {
        return item !== target;
      });
      this.setActive();
    }
  },
  props: {
    active: {
      type: Number,
      value: 0
    }
  },
  watch: {
    active: 'setActive'
  },
  beforeCreate: function beforeCreate() {
    this.badges = [];
    this.currentActive = -1;
  },
  methods: {
    setActive: function setActive(badge) {
      var active = this.data.active;
      var badges = this.badges;

      if (badge) {
        active = badges.indexOf(badge);
      }

      if (active === this.currentActive) {
        return;
      }

      if (this.currentActive !== -1 && badges[this.currentActive]) {
        this.$emit('change', active);
        badges[this.currentActive].setActive(false);
      }

      if (badges[active]) {
        badges[active].setActive(true);
        this.currentActive = active;
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJiYWRnZXMiLCJwdXNoIiwic2V0QWN0aXZlIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwicHJvcHMiLCJhY3RpdmUiLCJOdW1iZXIiLCJ2YWx1ZSIsIndhdGNoIiwiYmVmb3JlQ3JlYXRlIiwiY3VycmVudEFjdGl2ZSIsIm1ldGhvZHMiLCJiYWRnZSIsImRhdGEiLCJpbmRleE9mIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsWUFBVTtBQUNSQyxVQUFNLE9BREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsV0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCRixNQUFqQjtBQUNBLFdBQUtHLFNBQUw7QUFDRCxLQU5PO0FBT1JDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkosTUFBbEIsRUFBMEI7QUFDbEMsV0FBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUksTUFBWixDQUFtQixVQUFVQyxJQUFWLEVBQWdCO0FBQy9DLGVBQU9BLFNBQVNOLE1BQWhCO0FBQ0QsT0FGYSxDQUFkO0FBR0EsV0FBS0csU0FBTDtBQUNEO0FBWk8sR0FERTtBQWVaSSxTQUFPO0FBQ0xDLFlBQVE7QUFDTlYsWUFBTVcsTUFEQTtBQUVOQyxhQUFPO0FBRkQ7QUFESCxHQWZLO0FBcUJaQyxTQUFPO0FBQ0xILFlBQVE7QUFESCxHQXJCSztBQXdCWkksZ0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxTQUFLWCxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtZLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNELEdBM0JXO0FBNEJaQyxXQUFTO0FBQ1BYLGVBQVcsU0FBU0EsU0FBVCxDQUFtQlksS0FBbkIsRUFBMEI7QUFDbkMsVUFBSVAsU0FBUyxLQUFLUSxJQUFMLENBQVVSLE1BQXZCO0FBQ0EsVUFBSVAsU0FBUyxLQUFLQSxNQUFsQjs7QUFFQSxVQUFJYyxLQUFKLEVBQVc7QUFDVFAsaUJBQVNQLE9BQU9nQixPQUFQLENBQWVGLEtBQWYsQ0FBVDtBQUNEOztBQUVELFVBQUlQLFdBQVcsS0FBS0ssYUFBcEIsRUFBbUM7QUFDakM7QUFDRDs7QUFFRCxVQUFJLEtBQUtBLGFBQUwsS0FBdUIsQ0FBQyxDQUF4QixJQUE2QlosT0FBTyxLQUFLWSxhQUFaLENBQWpDLEVBQTZEO0FBQzNELGFBQUtLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCVixNQUFyQjtBQUNBUCxlQUFPLEtBQUtZLGFBQVosRUFBMkJWLFNBQTNCLENBQXFDLEtBQXJDO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBT08sTUFBUCxDQUFKLEVBQW9CO0FBQ2xCUCxlQUFPTyxNQUFQLEVBQWVMLFNBQWYsQ0FBeUIsSUFBekI7QUFDQSxhQUFLVSxhQUFMLEdBQXFCTCxNQUFyQjtBQUNEO0FBQ0Y7QUF0Qk07QUE1QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICdiYWRnZScsXHJcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5iYWRnZXMucHVzaCh0YXJnZXQpO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZSgpO1xyXG4gICAgfSxcclxuICAgIHVubGlua2VkOiBmdW5jdGlvbiB1bmxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5iYWRnZXMgPSB0aGlzLmJhZGdlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPT0gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBhY3RpdmU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFjdGl2ZTogJ3NldEFjdGl2ZSdcclxuICB9LFxyXG4gIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy5iYWRnZXMgPSBbXTtcclxuICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IC0xO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoYmFkZ2UpIHtcclxuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuZGF0YS5hY3RpdmU7XHJcbiAgICAgIHZhciBiYWRnZXMgPSB0aGlzLmJhZGdlcztcclxuXHJcbiAgICAgIGlmIChiYWRnZSkge1xyXG4gICAgICAgIGFjdGl2ZSA9IGJhZGdlcy5pbmRleE9mKGJhZGdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFjdGl2ZSA9PT0gdGhpcy5jdXJyZW50QWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50QWN0aXZlICE9PSAtMSAmJiBiYWRnZXNbdGhpcy5jdXJyZW50QWN0aXZlXSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZSk7XHJcbiAgICAgICAgYmFkZ2VzW3RoaXMuY3VycmVudEFjdGl2ZV0uc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGJhZGdlc1thY3RpdmVdKSB7XHJcbiAgICAgICAgYmFkZ2VzW2FjdGl2ZV0uc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/badge-group/index.js");
 		__wxRoute = 'components/vant/badge/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/badge/index.js';	define("components/vant/badge/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    type: 'ancestor',
    name: 'badge-group'
  },
  props: {
    info: Number,
    title: String
  },
  methods: {
    onClick: function onClick() {
      var group = this.getRelationNodes('../badge-group/index')[0];

      if (group) {
        group.setActive(this);
      }
    },
    setActive: function setActive(active) {
      this.setData({
        active: active
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImluZm8iLCJOdW1iZXIiLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sVUFERTtBQUVSQyxVQUFNO0FBRkUsR0FERTtBQUtaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0M7QUFGRixHQUxLO0FBU1pDLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlDLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0Isc0JBQXRCLEVBQThDLENBQTlDLENBQVo7O0FBRUEsVUFBSUQsS0FBSixFQUFXO0FBQ1RBLGNBQU1FLFNBQU4sQ0FBZ0IsSUFBaEI7QUFDRDtBQUNGLEtBUE07QUFRUEEsZUFBVyxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUNwQyxXQUFLQyxPQUFMLENBQWE7QUFDWEQsZ0JBQVFBO0FBREcsT0FBYjtBQUdEO0FBWk07QUFURyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICByZWxhdGlvbjoge1xyXG4gICAgdHlwZTogJ2FuY2VzdG9yJyxcclxuICAgIG5hbWU6ICdiYWRnZS1ncm91cCdcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBpbmZvOiBOdW1iZXIsXHJcbiAgICB0aXRsZTogU3RyaW5nXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgICB2YXIgZ3JvdXAgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2JhZGdlLWdyb3VwL2luZGV4JylbMF07XHJcblxyXG4gICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICBncm91cC5zZXRBY3RpdmUodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/badge/index.js");
 		__wxRoute = 'components/vant/button/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/button/index.js';	define("components/vant/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
  classes: ['loading-class'],
  mixins: [_button.button, _openType.openType],
  props: {
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'normal'
    }
  },
  computed: {
    classes: function classes() {
      var _this$data = this.data,
          type = _this$data.type,
          size = _this$data.size,
          block = _this$data.block,
          plain = _this$data.plain,
          round = _this$data.round,
          square = _this$data.square,
          loading = _this$data.loading,
          disabled = _this$data.disabled;
      return this.classNames("van-button--" + type, "van-button--" + size, {
        'van-button--block': block,
        'van-button--round': round,
        'van-button--plain': plain,
        'van-button--square': square,
        'van-button--loading': loading,
        'van-button--disabled': disabled,
        'van-button--unclickable': disabled || loading
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        this.$emit('click');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInNpemUiLCJjb21wdXRlZCIsIl90aGlzJGRhdGEiLCJkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsV0FBUyxDQUFDLGVBQUQsQ0FERztBQUVaQyxVQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FGSTtBQUdaQyxTQUFPO0FBQ0xDLFdBQU9DLE9BREY7QUFFTEMsV0FBT0QsT0FGRjtBQUdMRSxXQUFPRixPQUhGO0FBSUxHLFlBQVFILE9BSkg7QUFLTEksYUFBU0osT0FMSjtBQU1MSyxjQUFVTCxPQU5MO0FBT0xNLFVBQU07QUFDSkEsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FQRDtBQVdMQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZIO0FBWEQsR0FISztBQW1CWkUsWUFBVTtBQUNSaEIsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlpQixhQUFhLEtBQUtDLElBQXRCO0FBQUEsVUFDSU4sT0FBT0ssV0FBV0wsSUFEdEI7QUFBQSxVQUVJRyxPQUFPRSxXQUFXRixJQUZ0QjtBQUFBLFVBR0lSLFFBQVFVLFdBQVdWLEtBSHZCO0FBQUEsVUFJSUYsUUFBUVksV0FBV1osS0FKdkI7QUFBQSxVQUtJRyxRQUFRUyxXQUFXVCxLQUx2QjtBQUFBLFVBTUlDLFNBQVNRLFdBQVdSLE1BTnhCO0FBQUEsVUFPSUMsVUFBVU8sV0FBV1AsT0FQekI7QUFBQSxVQVFJQyxXQUFXTSxXQUFXTixRQVIxQjtBQVNBLGFBQU8sS0FBS1EsVUFBTCxDQUFnQixpQkFBaUJQLElBQWpDLEVBQXVDLGlCQUFpQkcsSUFBeEQsRUFBOEQ7QUFDbkUsNkJBQXFCUixLQUQ4QztBQUVuRSw2QkFBcUJDLEtBRjhDO0FBR25FLDZCQUFxQkgsS0FIOEM7QUFJbkUsOEJBQXNCSSxNQUo2QztBQUtuRSwrQkFBdUJDLE9BTDRDO0FBTW5FLGdDQUF3QkMsUUFOMkM7QUFPbkUsbUNBQTJCQSxZQUFZRDtBQVA0QixPQUE5RCxDQUFQO0FBU0Q7QUFwQk8sR0FuQkU7QUF5Q1pVLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUksQ0FBQyxLQUFLSCxJQUFMLENBQVVQLFFBQVgsSUFBdUIsQ0FBQyxLQUFLTyxJQUFMLENBQVVSLE9BQXRDLEVBQStDO0FBQzdDLGFBQUtZLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFDRjtBQUxNO0FBekNHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xyXG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ2xvYWRpbmctY2xhc3MnXSxcclxuICBtaXhpbnM6IFtidXR0b24sIG9wZW5UeXBlXSxcclxuICBwcm9wczoge1xyXG4gICAgcGxhaW46IEJvb2xlYW4sXHJcbiAgICBibG9jazogQm9vbGVhbixcclxuICAgIHJvdW5kOiBCb29sZWFuLFxyXG4gICAgc3F1YXJlOiBCb29sZWFuLFxyXG4gICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCdcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdub3JtYWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2xhc3NlczogZnVuY3Rpb24gY2xhc3NlcygpIHtcclxuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICB0eXBlID0gX3RoaXMkZGF0YS50eXBlLFxyXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJGRhdGEuc2l6ZSxcclxuICAgICAgICAgIGJsb2NrID0gX3RoaXMkZGF0YS5ibG9jayxcclxuICAgICAgICAgIHBsYWluID0gX3RoaXMkZGF0YS5wbGFpbixcclxuICAgICAgICAgIHJvdW5kID0gX3RoaXMkZGF0YS5yb3VuZCxcclxuICAgICAgICAgIHNxdWFyZSA9IF90aGlzJGRhdGEuc3F1YXJlLFxyXG4gICAgICAgICAgbG9hZGluZyA9IF90aGlzJGRhdGEubG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZDtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lcyhcInZhbi1idXR0b24tLVwiICsgdHlwZSwgXCJ2YW4tYnV0dG9uLS1cIiArIHNpemUsIHtcclxuICAgICAgICAndmFuLWJ1dHRvbi0tYmxvY2snOiBibG9jayxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tcm91bmQnOiByb3VuZCxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tcGxhaW4nOiBwbGFpbixcclxuICAgICAgICAndmFuLWJ1dHRvbi0tc3F1YXJlJzogc3F1YXJlLFxyXG4gICAgICAgICd2YW4tYnV0dG9uLS1sb2FkaW5nJzogbG9hZGluZyxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tdW5jbGlja2FibGUnOiBkaXNhYmxlZCB8fCBsb2FkaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/button/index.js");
 		__wxRoute = 'components/vant/card/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/card/index.js';	define("components/vant/card/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['thumb-class', 'title-class', 'price-class', 'desc-class', 'num-class'],
  props: {
    tag: String,
    num: String,
    desc: String,
    thumb: String,
    title: String,
    price: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    currency: {
      type: String,
      value: '¥'
    }
  },
  methods: {
    onClickThumb: function onClickThumb() {
      var thumbLink = this.data.thumbLink;

      if (thumbLink) {
        wx[this.data.linkType]({
          url: thumbLink
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRhZyIsIlN0cmluZyIsIm51bSIsImRlc2MiLCJ0aHVtYiIsInRpdGxlIiwicHJpY2UiLCJjZW50ZXJlZCIsIkJvb2xlYW4iLCJsYXp5TG9hZCIsInRodW1iTGluayIsImxpbmtUeXBlIiwidHlwZSIsInZhbHVlIiwiY3VycmVuY3kiLCJtZXRob2RzIiwib25DbGlja1RodW1iIiwiZGF0YSIsInd4IiwidXJsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLEVBQThDLFlBQTlDLEVBQTRELFdBQTVELENBREc7QUFFWkMsU0FBTztBQUNMQyxTQUFLQyxNQURBO0FBRUxDLFNBQUtELE1BRkE7QUFHTEUsVUFBTUYsTUFIRDtBQUlMRyxXQUFPSCxNQUpGO0FBS0xJLFdBQU9KLE1BTEY7QUFNTEssV0FBT0wsTUFORjtBQU9MTSxjQUFVQyxPQVBMO0FBUUxDLGNBQVVELE9BUkw7QUFTTEUsZUFBV1QsTUFUTjtBQVVMVSxjQUFVO0FBQ1JDLFlBQU1YLE1BREU7QUFFUlksYUFBTztBQUZDLEtBVkw7QUFjTEMsY0FBVTtBQUNSRixZQUFNWCxNQURFO0FBRVJZLGFBQU87QUFGQztBQWRMLEdBRks7QUFxQlpFLFdBQVM7QUFDUEMsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJTixZQUFZLEtBQUtPLElBQUwsQ0FBVVAsU0FBMUI7O0FBRUEsVUFBSUEsU0FBSixFQUFlO0FBQ2JRLFdBQUcsS0FBS0QsSUFBTCxDQUFVTixRQUFiLEVBQXVCO0FBQ3JCUSxlQUFLVDtBQURnQixTQUF2QjtBQUdEO0FBQ0Y7QUFUTTtBQXJCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RodW1iLWNsYXNzJywgJ3RpdGxlLWNsYXNzJywgJ3ByaWNlLWNsYXNzJywgJ2Rlc2MtY2xhc3MnLCAnbnVtLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRhZzogU3RyaW5nLFxyXG4gICAgbnVtOiBTdHJpbmcsXHJcbiAgICBkZXNjOiBTdHJpbmcsXHJcbiAgICB0aHVtYjogU3RyaW5nLFxyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIHByaWNlOiBTdHJpbmcsXHJcbiAgICBjZW50ZXJlZDogQm9vbGVhbixcclxuICAgIGxhenlMb2FkOiBCb29sZWFuLFxyXG4gICAgdGh1bWJMaW5rOiBTdHJpbmcsXHJcbiAgICBsaW5rVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnbmF2aWdhdGVUbydcclxuICAgIH0sXHJcbiAgICBjdXJyZW5jeToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnwqUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrVGh1bWI6IGZ1bmN0aW9uIG9uQ2xpY2tUaHVtYigpIHtcclxuICAgICAgdmFyIHRodW1iTGluayA9IHRoaXMuZGF0YS50aHVtYkxpbms7XHJcblxyXG4gICAgICBpZiAodGh1bWJMaW5rKSB7XHJcbiAgICAgICAgd3hbdGhpcy5kYXRhLmxpbmtUeXBlXSh7XHJcbiAgICAgICAgICB1cmw6IHRodW1iTGlua1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/card/index.js");
 		__wxRoute = 'components/vant/cell-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/cell-group/index.js';	define("components/vant/cell-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    border: {
      type: Boolean,
      value: true
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiYm9yZGVyIiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFlBQVE7QUFDTkMsWUFBTUMsT0FEQTtBQUVOQyxhQUFPO0FBRkQ7QUFESDtBQURLLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/cell-group/index.js");
 		__wxRoute = 'components/vant/cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/cell/index.js';	define("components/vant/cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['title-class', 'label-class', 'value-class'],
  props: {
    title: null,
    value: null,
    url: String,
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  computed: {
    cellClass: function cellClass() {
      var data = this.data;
      return this.classNames('custom-class', 'van-cell', {
        'van-cell--center': data.center,
        'van-cell--required': data.required,
        'van-cell--borderless': !data.border,
        'van-cell--clickable': data.isLink || data.clickable
      });
    },
    titleStyle: function titleStyle() {
      var titleWidth = this.data.titleWidth;
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    }
  },
  methods: {
    onIconClick: function onIconClick() {
      this.triggerEvent('iconClicked');
    },
    onClick: function onClick() {
      var url = this.data.url;

      if (url) {
        wx[this.data.linkType]({
          url: url
        });
      }
      this.$emit('click');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwidmFsdWUiLCJ1cmwiLCJTdHJpbmciLCJpY29uIiwibGFiZWwiLCJjZW50ZXIiLCJCb29sZWFuIiwiaXNMaW5rIiwicmVxdWlyZWQiLCJjbGlja2FibGUiLCJ0aXRsZVdpZHRoIiwiY3VzdG9tU3R5bGUiLCJsaW5rVHlwZSIsInR5cGUiLCJib3JkZXIiLCJjb21wdXRlZCIsImNlbGxDbGFzcyIsImRhdGEiLCJjbGFzc05hbWVzIiwidGl0bGVTdHlsZSIsIm1ldGhvZHMiLCJvbkljb25DbGljayIsInRyaWdnZXJFdmVudCIsIm9uQ2xpY2siLCJ3eCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLENBREc7QUFFWkMsU0FBTztBQUNMQyxXQUFPLElBREY7QUFFTEMsV0FBTyxJQUZGO0FBR0xDLFNBQUtDLE1BSEE7QUFJTEMsVUFBTUQsTUFKRDtBQUtMRSxXQUFPRixNQUxGO0FBTUxHLFlBQVFDLE9BTkg7QUFPTEMsWUFBUUQsT0FQSDtBQVFMRSxjQUFVRixPQVJMO0FBU0xHLGVBQVdILE9BVE47QUFVTEksZ0JBQVlSLE1BVlA7QUFXTFMsaUJBQWFULE1BWFI7QUFZTFUsY0FBVTtBQUNSQyxZQUFNWCxNQURFO0FBRVJGLGFBQU87QUFGQyxLQVpMO0FBZ0JMYyxZQUFRO0FBQ05ELFlBQU1QLE9BREE7QUFFTk4sYUFBTztBQUZEO0FBaEJILEdBRks7QUF1QlplLFlBQVU7QUFDUkMsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlDLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0MsVUFBaEMsRUFBNEM7QUFDakQsNEJBQW9CRCxLQUFLWixNQUR3QjtBQUVqRCw4QkFBc0JZLEtBQUtULFFBRnNCO0FBR2pELGdDQUF3QixDQUFDUyxLQUFLSCxNQUhtQjtBQUlqRCwrQkFBdUJHLEtBQUtWLE1BQUwsSUFBZVUsS0FBS1I7QUFKTSxPQUE1QyxDQUFQO0FBTUQsS0FUTztBQVVSVSxnQkFBWSxTQUFTQSxVQUFULEdBQXNCO0FBQ2hDLFVBQUlULGFBQWEsS0FBS08sSUFBTCxDQUFVUCxVQUEzQjtBQUNBLGFBQU9BLGFBQWEsZ0JBQWdCQSxVQUFoQixHQUE2QixjQUE3QixHQUE4Q0EsVUFBM0QsR0FBd0UsRUFBL0U7QUFDRDtBQWJPLEdBdkJFO0FBc0NaVSxXQUFTO0FBQ1BDLGlCQUFZLFNBQVNBLFdBQVQsR0FBc0I7QUFDaEMsV0FBS0MsWUFBTCxDQUFrQixhQUFsQjtBQUNELEtBSE07QUFJUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUl0QixNQUFNLEtBQUtnQixJQUFMLENBQVVoQixHQUFwQjs7QUFFQSxVQUFJQSxHQUFKLEVBQVM7QUFDUHVCLFdBQUcsS0FBS1AsSUFBTCxDQUFVTCxRQUFiLEVBQXVCO0FBQ3JCWCxlQUFLQTtBQURnQixTQUF2QjtBQUdEO0FBQ0QsV0FBS3dCLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFiTTtBQXRDRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJywgJ2xhYmVsLWNsYXNzJywgJ3ZhbHVlLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB1cmw6IFN0cmluZyxcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBjZW50ZXI6IEJvb2xlYW4sXHJcbiAgICBpc0xpbms6IEJvb2xlYW4sXHJcbiAgICByZXF1aXJlZDogQm9vbGVhbixcclxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcclxuICAgIHRpdGxlV2lkdGg6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICBsaW5rVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnbmF2aWdhdGVUbydcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjZWxsQ2xhc3M6IGZ1bmN0aW9uIGNlbGxDbGFzcygpIHtcclxuICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ2N1c3RvbS1jbGFzcycsICd2YW4tY2VsbCcsIHtcclxuICAgICAgICAndmFuLWNlbGwtLWNlbnRlcic6IGRhdGEuY2VudGVyLFxyXG4gICAgICAgICd2YW4tY2VsbC0tcmVxdWlyZWQnOiBkYXRhLnJlcXVpcmVkLFxyXG4gICAgICAgICd2YW4tY2VsbC0tYm9yZGVybGVzcyc6ICFkYXRhLmJvcmRlcixcclxuICAgICAgICAndmFuLWNlbGwtLWNsaWNrYWJsZSc6IGRhdGEuaXNMaW5rIHx8IGRhdGEuY2xpY2thYmxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRpdGxlU3R5bGU6IGZ1bmN0aW9uIHRpdGxlU3R5bGUoKSB7XHJcbiAgICAgIHZhciB0aXRsZVdpZHRoID0gdGhpcy5kYXRhLnRpdGxlV2lkdGg7XHJcbiAgICAgIHJldHVybiB0aXRsZVdpZHRoID8gXCJtYXgtd2lkdGg6IFwiICsgdGl0bGVXaWR0aCArIFwiO21pbi13aWR0aDogXCIgKyB0aXRsZVdpZHRoIDogJyc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkljb25DbGljazpmdW5jdGlvbiBvbkljb25DbGljaygpe1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaWNvbkNsaWNrZWQnKVxyXG4gICAgfSxcclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICAgIHZhciB1cmwgPSB0aGlzLmRhdGEudXJsO1xyXG5cclxuICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgIHd4W3RoaXMuZGF0YS5saW5rVHlwZV0oe1xyXG4gICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/cell/index.js");
 		__wxRoute = 'components/vant/checkbox-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/checkbox-group/index.js';	define("components/vant/checkbox-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'checkbox',
    type: 'descendant',
    linked: function linked(target) {
      var _this$data = this.data,
          value = _this$data.value,
          disabled = _this$data.disabled;
      target.setData({
        value: value.indexOf(target.data.name) !== -1,
        disabled: disabled || target.data.disabled
      });
    }
  },
  props: {
    value: Array,
    disabled: Boolean,
    max: Number
  },
  watch: {
    value: function value(_value) {
      var children = this.getRelationNodes('../checkbox/index');
      children.forEach(function (child) {
        child.setData({
          value: _value.indexOf(child.data.name) !== -1
        });
      });
    },
    disabled: function disabled(_disabled) {
      var children = this.getRelationNodes('../checkbox/index');
      children.forEach(function (child) {
        child.setData({
          disabled: _disabled || child.data.disabled
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldERhdGEiLCJpbmRleE9mIiwicHJvcHMiLCJBcnJheSIsIkJvb2xlYW4iLCJtYXgiLCJOdW1iZXIiLCJ3YXRjaCIsIl92YWx1ZSIsImNoaWxkcmVuIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJjaGlsZCIsIl9kaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsWUFBVTtBQUNSQyxVQUFNLFVBREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lDLFFBQVFGLFdBQVdFLEtBRHZCO0FBQUEsVUFFSUMsV0FBV0gsV0FBV0csUUFGMUI7QUFHQUosYUFBT0ssT0FBUCxDQUFlO0FBQ2JGLGVBQU9BLE1BQU1HLE9BQU4sQ0FBY04sT0FBT0UsSUFBUCxDQUFZTCxJQUExQixNQUFvQyxDQUFDLENBRC9CO0FBRWJPLGtCQUFVQSxZQUFZSixPQUFPRSxJQUFQLENBQVlFO0FBRnJCLE9BQWY7QUFJRDtBQVhPLEdBRkU7QUFlWkcsU0FBTztBQUNMSixXQUFPSyxLQURGO0FBRUxKLGNBQVVLLE9BRkw7QUFHTEMsU0FBS0M7QUFIQSxHQWZLO0FBb0JaQyxTQUFPO0FBQ0xULFdBQU8sU0FBU0EsS0FBVCxDQUFlVSxNQUFmLEVBQXVCO0FBQzVCLFVBQUlDLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsbUJBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNWixPQUFOLENBQWM7QUFDWkYsaUJBQU9VLE9BQU9QLE9BQVAsQ0FBZVcsTUFBTWYsSUFBTixDQUFXTCxJQUExQixNQUFvQyxDQUFDO0FBRGhDLFNBQWQ7QUFHRCxPQUpEO0FBS0QsS0FSSTtBQVNMTyxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JjLFNBQWxCLEVBQTZCO0FBQ3JDLFVBQUlKLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsbUJBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNWixPQUFOLENBQWM7QUFDWkQsb0JBQVVjLGFBQWFELE1BQU1mLElBQU4sQ0FBV0U7QUFEdEIsU0FBZDtBQUdELE9BSkQ7QUFLRDtBQWhCSTtBQXBCSyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICByZWxhdGlvbjoge1xyXG4gICAgbmFtZTogJ2NoZWNrYm94JyxcclxuICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcclxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKHRhcmdldCkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkZGF0YS52YWx1ZSxcclxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZDtcclxuICAgICAgdGFyZ2V0LnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZS5pbmRleE9mKHRhcmdldC5kYXRhLm5hbWUpICE9PSAtMSxcclxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgdGFyZ2V0LmRhdGEuZGlzYWJsZWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgdmFsdWU6IEFycmF5LFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBtYXg6IE51bWJlclxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnNldERhdGEoe1xyXG4gICAgICAgICAgdmFsdWU6IF92YWx1ZS5pbmRleE9mKGNoaWxkLmRhdGEubmFtZSkgIT09IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZChfZGlzYWJsZWQpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnNldERhdGEoe1xyXG4gICAgICAgICAgZGlzYWJsZWQ6IF9kaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/checkbox-group/index.js");
 		__wxRoute = 'components/vant/checkbox/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/checkbox/index.js';	define("components/vant/checkbox/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'checkbox-group',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String,
    shape: {
      type: String,
      value: 'round'
    },
    useIconSlot: Boolean
  },
  computed: {
    iconClass: function iconClass() {
      var _this$data = this.data,
          disabled = _this$data.disabled,
          value = _this$data.value,
          shape = _this$data.shape;
      return this.classNames('van-checkbox__icon', "van-checkbox__icon--" + shape, {
        'van-checkbox__icon--disabled': disabled,
        'van-checkbox__icon--checked': value
      });
    }
  },
  methods: {
    emitChange: function emitChange(value) {
      var parent = this.getRelationNodes('../checkbox-group/index')[0];

      if (parent) {
        var parentValue = parent.data.value.slice();
        var name = this.data.name;

        if (value) {
          if (parent.data.max && parentValue.length >= parent.data.max) {
            return;
          }
          /* istanbul ignore else */

          if (parentValue.indexOf(name) === -1) {
            parentValue.push(name);
            parent.$emit('input', parentValue);
            parent.$emit('change', parentValue);
          }
        } else {
          var index = parentValue.indexOf(name);
          /* istanbul ignore else */

          if (index !== -1) {
            parentValue.splice(index, 1);
            parent.$emit('input', parentValue);
            parent.$emit('change', parentValue);
          }
        }
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    toggle: function toggle() {
      if (!this.data.disabled) {
        this.emitChange(!this.data.value);
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(!this.data.value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJzaGFwZSIsInVzZUljb25TbG90IiwiY29tcHV0ZWQiLCJpY29uQ2xhc3MiLCJfdGhpcyRkYXRhIiwiZGF0YSIsImNsYXNzTmFtZXMiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJwYXJlbnRWYWx1ZSIsInNsaWNlIiwibWF4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCIkZW1pdCIsImluZGV4Iiwic3BsaWNlIiwidG9nZ2xlIiwib25DbGlja0xhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sZ0JBREU7QUFFUkMsVUFBTTtBQUZFLEdBRkU7QUFNWkMsV0FBUyxDQUFDLFlBQUQsRUFBZSxhQUFmLENBTkc7QUFPWkMsU0FBTztBQUNMQyxXQUFPLElBREY7QUFFTEMsY0FBVUMsT0FGTDtBQUdMQyxtQkFBZUQsT0FIVjtBQUlMRSxtQkFBZUMsTUFKVjtBQUtMQyxXQUFPO0FBQ0xULFlBQU1RLE1BREQ7QUFFTEwsYUFBTztBQUZGLEtBTEY7QUFTTE8saUJBQWFMO0FBVFIsR0FQSztBQWtCWk0sWUFBVTtBQUNSQyxlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lWLFdBQVdTLFdBQVdULFFBRDFCO0FBQUEsVUFFSUQsUUFBUVUsV0FBV1YsS0FGdkI7QUFBQSxVQUdJTSxRQUFRSSxXQUFXSixLQUh2QjtBQUlBLGFBQU8sS0FBS00sVUFBTCxDQUFnQixvQkFBaEIsRUFBc0MseUJBQXlCTixLQUEvRCxFQUFzRTtBQUMzRSx3Q0FBZ0NMLFFBRDJDO0FBRTNFLHVDQUErQkQ7QUFGNEMsT0FBdEUsQ0FBUDtBQUlEO0FBVk8sR0FsQkU7QUE4QlphLFdBQVM7QUFDUEMsZ0JBQVksU0FBU0EsVUFBVCxDQUFvQmQsS0FBcEIsRUFBMkI7QUFDckMsVUFBSWUsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQix5QkFBdEIsRUFBaUQsQ0FBakQsQ0FBYjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixZQUFJRSxjQUFjRixPQUFPSixJQUFQLENBQVlYLEtBQVosQ0FBa0JrQixLQUFsQixFQUFsQjtBQUNBLFlBQUl0QixPQUFPLEtBQUtlLElBQUwsQ0FBVWYsSUFBckI7O0FBRUEsWUFBSUksS0FBSixFQUFXO0FBQ1QsY0FBSWUsT0FBT0osSUFBUCxDQUFZUSxHQUFaLElBQW1CRixZQUFZRyxNQUFaLElBQXNCTCxPQUFPSixJQUFQLENBQVlRLEdBQXpELEVBQThEO0FBQzVEO0FBQ0Q7QUFDRDs7QUFHQSxjQUFJRixZQUFZSSxPQUFaLENBQW9CekIsSUFBcEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQ3FCLHdCQUFZSyxJQUFaLENBQWlCMUIsSUFBakI7QUFDQW1CLG1CQUFPUSxLQUFQLENBQWEsT0FBYixFQUFzQk4sV0FBdEI7QUFDQUYsbUJBQU9RLEtBQVAsQ0FBYSxRQUFiLEVBQXVCTixXQUF2QjtBQUNEO0FBQ0YsU0FaRCxNQVlPO0FBQ0wsY0FBSU8sUUFBUVAsWUFBWUksT0FBWixDQUFvQnpCLElBQXBCLENBQVo7QUFDQTs7QUFFQSxjQUFJNEIsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEJQLHdCQUFZUSxNQUFaLENBQW1CRCxLQUFuQixFQUEwQixDQUExQjtBQUNBVCxtQkFBT1EsS0FBUCxDQUFhLE9BQWIsRUFBc0JOLFdBQXRCO0FBQ0FGLG1CQUFPUSxLQUFQLENBQWEsUUFBYixFQUF1Qk4sV0FBdkI7QUFDRDtBQUNGO0FBQ0YsT0ExQkQsTUEwQk87QUFDTCxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQnZCLEtBQXBCO0FBQ0EsYUFBS3VCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCdkIsS0FBckI7QUFDRDtBQUNGLEtBbENNO0FBbUNQMEIsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFVBQUksQ0FBQyxLQUFLZixJQUFMLENBQVVWLFFBQWYsRUFBeUI7QUFDdkIsYUFBS2EsVUFBTCxDQUFnQixDQUFDLEtBQUtILElBQUwsQ0FBVVgsS0FBM0I7QUFDRDtBQUNGLEtBdkNNO0FBd0NQMkIsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJLENBQUMsS0FBS2hCLElBQUwsQ0FBVVYsUUFBWCxJQUF1QixDQUFDLEtBQUtVLElBQUwsQ0FBVVIsYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS1csVUFBTCxDQUFnQixDQUFDLEtBQUtILElBQUwsQ0FBVVgsS0FBM0I7QUFDRDtBQUNGO0FBNUNNO0FBOUJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGZpZWxkOiB0cnVlLFxyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAnY2hlY2tib3gtZ3JvdXAnLFxyXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gIH0sXHJcbiAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgbGFiZWxQb3NpdGlvbjogU3RyaW5nLFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ3JvdW5kJ1xyXG4gICAgfSxcclxuICAgIHVzZUljb25TbG90OiBCb29sZWFuXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaWNvbkNsYXNzOiBmdW5jdGlvbiBpY29uQ2xhc3MoKSB7XHJcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxyXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRkYXRhLmRpc2FibGVkLFxyXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRkYXRhLnZhbHVlLFxyXG4gICAgICAgICAgc2hhcGUgPSBfdGhpcyRkYXRhLnNoYXBlO1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWVzKCd2YW4tY2hlY2tib3hfX2ljb24nLCBcInZhbi1jaGVja2JveF9faWNvbi0tXCIgKyBzaGFwZSwge1xyXG4gICAgICAgICd2YW4tY2hlY2tib3hfX2ljb24tLWRpc2FibGVkJzogZGlzYWJsZWQsXHJcbiAgICAgICAgJ3Zhbi1jaGVja2JveF9faWNvbi0tY2hlY2tlZCc6IHZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24gZW1pdENoYW5nZSh2YWx1ZSkge1xyXG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC1ncm91cC9pbmRleCcpWzBdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHZhciBwYXJlbnRWYWx1ZSA9IHBhcmVudC5kYXRhLnZhbHVlLnNsaWNlKCk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmRhdGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAocGFyZW50LmRhdGEubWF4ICYmIHBhcmVudFZhbHVlLmxlbmd0aCA+PSBwYXJlbnQuZGF0YS5tYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuXHJcblxyXG4gICAgICAgICAgaWYgKHBhcmVudFZhbHVlLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFZhbHVlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uIG9uQ2xpY2tMYWJlbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sYWJlbERpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/checkbox/index.js");
 		__wxRoute = 'components/vant/col/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/col/index.js';	define("components/vant/col/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  relation: {
    name: 'row',
    type: 'ancestor'
  },
  props: {
    span: Number,
    offset: Number
  },
  data: {
    style: ''
  },
  computed: {
    classes: function classes() {
      var _classNames;

      var _this$data = this.data,
          span = _this$data.span,
          offset = _this$data.offset;
      return this.classNames('custom-class', 'van-col', (_classNames = {}, _defineProperty(_classNames, "van-col--" + span, span), _defineProperty(_classNames, "van-col--offset-" + offset, offset), _classNames));
    }
  },
  methods: {
    setGutter: function setGutter(gutter) {
      var padding = gutter / 2 + "px";
      var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';

      if (style !== this.data.style) {
        this.setData({
          style: style
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJjb21wdXRlZCIsImNsYXNzZXMiLCJfdGhpcyRkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJzZXRHdXR0ZXIiLCJndXR0ZXIiLCJwYWRkaW5nIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxLQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxZQUFRRDtBQUZILEdBTEs7QUFTWkUsUUFBTTtBQUNKQyxXQUFPO0FBREgsR0FUTTtBQVlaQyxZQUFVO0FBQ1JDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUMxQixVQUFJQyxhQUFhLEtBQUtKLElBQXRCO0FBQUEsVUFDSUgsT0FBT08sV0FBV1AsSUFEdEI7QUFBQSxVQUVJRSxTQUFTSyxXQUFXTCxNQUZ4QjtBQUdBLGFBQU8sS0FBS00sVUFBTCxDQUFnQixjQUFoQixFQUFnQyxTQUFoQyxrREFDSixjQUFjUixJQURWLEVBQ2lCQSxJQURqQixnQ0FFSixxQkFBcUJFLE1BRmpCLEVBRTBCQSxNQUYxQixnQkFBUDtBQUlEO0FBVE8sR0FaRTtBQXVCWk8sV0FBUztBQUNQQyxlQUFXLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3BDLFVBQUlDLFVBQVVELFNBQVMsQ0FBVCxHQUFhLElBQTNCO0FBQ0EsVUFBSVAsUUFBUU8sU0FBUyxtQkFBbUJDLE9BQW5CLEdBQTZCLG1CQUE3QixHQUFtREEsT0FBbkQsR0FBNkQsR0FBdEUsR0FBNEUsRUFBeEY7O0FBRUEsVUFBSVIsVUFBVSxLQUFLRCxJQUFMLENBQVVDLEtBQXhCLEVBQStCO0FBQzdCLGFBQUtTLE9BQUwsQ0FBYTtBQUNYVCxpQkFBT0E7QUFESSxTQUFiO0FBR0Q7QUFDRjtBQVZNO0FBdkJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAncm93JyxcclxuICAgIHR5cGU6ICdhbmNlc3RvcidcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBzcGFuOiBOdW1iZXIsXHJcbiAgICBvZmZzZXQ6IE51bWJlclxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgc3R5bGU6ICcnXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2xhc3NlczogZnVuY3Rpb24gY2xhc3NlcygpIHtcclxuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICBzcGFuID0gX3RoaXMkZGF0YS5zcGFuLFxyXG4gICAgICAgICAgb2Zmc2V0ID0gX3RoaXMkZGF0YS5vZmZzZXQ7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ2N1c3RvbS1jbGFzcycsICd2YW4tY29sJywge1xyXG4gICAgICAgIFtcInZhbi1jb2wtLVwiICsgc3Bhbl06IHNwYW4sXHJcbiAgICAgICAgW1widmFuLWNvbC0tb2Zmc2V0LVwiICsgb2Zmc2V0XTogb2Zmc2V0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0R3V0dGVyOiBmdW5jdGlvbiBzZXRHdXR0ZXIoZ3V0dGVyKSB7XHJcbiAgICAgIHZhciBwYWRkaW5nID0gZ3V0dGVyIC8gMiArIFwicHhcIjtcclxuICAgICAgdmFyIHN0eWxlID0gZ3V0dGVyID8gXCJwYWRkaW5nLWxlZnQ6IFwiICsgcGFkZGluZyArIFwiOyBwYWRkaW5nLXJpZ2h0OiBcIiArIHBhZGRpbmcgKyBcIjtcIiA6ICcnO1xyXG5cclxuICAgICAgaWYgKHN0eWxlICE9PSB0aGlzLmRhdGEuc3R5bGUpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc3R5bGU6IHN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/col/index.js");
 		__wxRoute = 'components/vant/demo-block/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/demo-block/index.js';	define("components/vant/demo-block/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Component({
  properties: {
    customStyle: String,
    title: String,
    padding: Boolean
  },

  externalClasses: ['custom-class']
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInRpdGxlIiwicGFkZGluZyIsIkJvb2xlYW4iLCJleHRlcm5hbENsYXNzZXMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsY0FBWTtBQUNWQyxpQkFBYUMsTUFESDtBQUVWQyxXQUFPRCxNQUZHO0FBR1ZFLGFBQVNDO0FBSEMsR0FESjs7QUFPUkMsbUJBQWlCLENBQUMsY0FBRDtBQVBULENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgcGFkZGluZzogQm9vbGVhblxyXG4gIH0sXHJcblxyXG4gIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnXVxyXG59KTtcclxuIl19 
 			}); 	require("components/vant/demo-block/index.js");
 		__wxRoute = 'components/vant/dialog/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/dialog/index.js';	define("components/vant/dialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var _openType = require('./../mixins/open-type.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  mixins: [_openType.openType],
  props: {
    show: Boolean,
    title: String,
    message: String,
    useSlot: Boolean,
    asyncClose: Boolean,
    showCancelButton: Boolean,
    confirmButtonOpenType: String,
    zIndex: {
      type: Number,
      value: 100
    },
    confirmButtonText: {
      type: String,
      value: '确认'
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: false
    }
  },
  data: {
    loading: {
      confirm: false,
      cancel: false
    }
  },
  watch: {
    show: function show(_show) {
      if (!_show) {
        this.setData({
          loading: {
            confirm: false,
            cancel: false
          }
        });
      }
    }
  },
  methods: {
    onConfirm: function onConfirm() {
      this.handleAction('confirm');
    },
    onCancel: function onCancel() {
      this.handleAction('cancel');
    },
    onClickOverlay: function onClickOverlay() {
      this.onClose('overlay');
    },
    handleAction: function handleAction(action) {
      if (this.data.asyncClose) {
        this.setData(_defineProperty({}, "loading." + action, true));
      }

      this.onClose(action);
    },
    close: function close() {
      this.setData({
        show: false
      });
    },
    onClose: function onClose(action) {
      if (!this.data.asyncClose) {
        this.close();
      }

      this.$emit('close', action);
      this.$emit(action);
      var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];

      if (callback) {
        callback(this);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJhc3luY0Nsb3NlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25PcGVuVHlwZSIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwib3ZlcmxheSIsImNsb3NlT25DbGlja092ZXJsYXkiLCJkYXRhIiwibG9hZGluZyIsImNvbmZpcm0iLCJjYW5jZWwiLCJ3YXRjaCIsIl9zaG93Iiwic2V0RGF0YSIsIm1ldGhvZHMiLCJvbkNvbmZpcm0iLCJoYW5kbGVBY3Rpb24iLCJvbkNhbmNlbCIsIm9uQ2xpY2tPdmVybGF5Iiwib25DbG9zZSIsImFjdGlvbiIsImNsb3NlIiwiJGVtaXQiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBLDhCQUFjO0FBQ1pBLFVBQVEsQ0FBQ0Msa0JBQUQsQ0FESTtBQUVaQyxTQUFPO0FBQ0xDLFVBQU1DLE9BREQ7QUFFTEMsV0FBT0MsTUFGRjtBQUdMQyxhQUFTRCxNQUhKO0FBSUxFLGFBQVNKLE9BSko7QUFLTEssZ0JBQVlMLE9BTFA7QUFNTE0sc0JBQWtCTixPQU5iO0FBT0xPLDJCQUF1QkwsTUFQbEI7QUFRTE0sWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQVJIO0FBWUxDLHVCQUFtQjtBQUNqQkgsWUFBTVAsTUFEVztBQUVqQlMsYUFBTztBQUZVLEtBWmQ7QUFnQkxFLHNCQUFrQjtBQUNoQkosWUFBTVAsTUFEVTtBQUVoQlMsYUFBTztBQUZTLEtBaEJiO0FBb0JMRyx1QkFBbUI7QUFDakJMLFlBQU1ULE9BRFc7QUFFakJXLGFBQU87QUFGVSxLQXBCZDtBQXdCTEksYUFBUztBQUNQTixZQUFNVCxPQURDO0FBRVBXLGFBQU87QUFGQSxLQXhCSjtBQTRCTEsseUJBQXFCO0FBQ25CUCxZQUFNVCxPQURhO0FBRW5CVyxhQUFPO0FBRlk7QUE1QmhCLEdBRks7QUFtQ1pNLFFBQU07QUFDSkMsYUFBUztBQUNQQyxlQUFTLEtBREY7QUFFUEMsY0FBUTtBQUZEO0FBREwsR0FuQ007QUF5Q1pDLFNBQU87QUFDTHRCLFVBQU0sU0FBU0EsSUFBVCxDQUFjdUIsS0FBZCxFQUFxQjtBQUN6QixVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGFBQUtDLE9BQUwsQ0FBYTtBQUNYTCxtQkFBUztBQUNQQyxxQkFBUyxLQURGO0FBRVBDLG9CQUFRO0FBRkQ7QUFERSxTQUFiO0FBTUQ7QUFDRjtBQVZJLEdBekNLO0FBcURaSSxXQUFTO0FBQ1BDLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixXQUFLQyxZQUFMLENBQWtCLFNBQWxCO0FBQ0QsS0FITTtBQUlQQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsWUFBTCxDQUFrQixRQUFsQjtBQUNELEtBTk07QUFPUEUsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsV0FBS0MsT0FBTCxDQUFhLFNBQWI7QUFDRCxLQVRNO0FBVVBILGtCQUFjLFNBQVNBLFlBQVQsQ0FBc0JJLE1BQXRCLEVBQThCO0FBQzFDLFVBQUksS0FBS2IsSUFBTCxDQUFVWixVQUFkLEVBQTBCO0FBQ3hCLGFBQUtrQixPQUFMLHFCQUNHLGFBQWFPLE1BRGhCLEVBQ3lCLElBRHpCO0FBR0Q7O0FBRUQsV0FBS0QsT0FBTCxDQUFhQyxNQUFiO0FBQ0QsS0FsQk07QUFtQlBDLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLUixPQUFMLENBQWE7QUFDWHhCLGNBQU07QUFESyxPQUFiO0FBR0QsS0F2Qk07QUF3QlA4QixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ2hDLFVBQUksQ0FBQyxLQUFLYixJQUFMLENBQVVaLFVBQWYsRUFBMkI7QUFDekIsYUFBSzBCLEtBQUw7QUFDRDs7QUFFRCxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkYsTUFBcEI7QUFDQSxXQUFLRSxLQUFMLENBQVdGLE1BQVg7QUFDQSxVQUFJRyxXQUFXLEtBQUtoQixJQUFMLENBQVVhLFdBQVcsU0FBWCxHQUF1QixXQUF2QixHQUFxQyxVQUEvQyxDQUFmOztBQUVBLFVBQUlHLFFBQUosRUFBYztBQUNaQSxpQkFBUyxJQUFUO0FBQ0Q7QUFDRjtBQXBDTTtBQXJERyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFtvcGVuVHlwZV0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHNob3c6IEJvb2xlYW4sXHJcbiAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgbWVzc2FnZTogU3RyaW5nLFxyXG4gICAgdXNlU2xvdDogQm9vbGVhbixcclxuICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW4sXHJcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBCb29sZWFuLFxyXG4gICAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiBTdHJpbmcsXHJcbiAgICB6SW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMTAwXHJcbiAgICB9LFxyXG4gICAgY29uZmlybUJ1dHRvblRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ+ehruiupCdcclxuICAgIH0sXHJcbiAgICBjYW5jZWxCdXR0b25UZXh0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICflj5bmtognXHJcbiAgICB9LFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIGxvYWRpbmc6IHtcclxuICAgICAgY29uZmlybTogZmFsc2UsXHJcbiAgICAgIGNhbmNlbDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KF9zaG93KSB7XHJcbiAgICAgIGlmICghX3Nob3cpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9hZGluZzoge1xyXG4gICAgICAgICAgICBjb25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNvbmZpcm06IGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NvbmZpcm0nKTtcclxuICAgIH0sXHJcbiAgICBvbkNhbmNlbDogZnVuY3Rpb24gb25DYW5jZWwoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjYW5jZWwnKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gb25DbGlja092ZXJsYXkoKSB7XHJcbiAgICAgIHRoaXMub25DbG9zZSgnb3ZlcmxheScpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUFjdGlvbjogZnVuY3Rpb24gaGFuZGxlQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wibG9hZGluZy5cIiArIGFjdGlvbl06IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vbkNsb3NlKGFjdGlvbik7XHJcbiAgICB9LFxyXG4gICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoYWN0aW9uKSB7XHJcbiAgICAgIGlmICghdGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJywgYWN0aW9uKTtcclxuICAgICAgdGhpcy4kZW1pdChhY3Rpb24pO1xyXG4gICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xyXG5cclxuICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/dialog/index.js");
 		__wxRoute = 'components/vant/field/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/field/index.js';	define("components/vant/field/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  field: true,
  classes: ['input-class'],
  props: {
    icon: String,
    label: String,
    error: Boolean,
    focus: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    iconClass: String,
    clearable: Boolean,
    inputAlign: String,
    customClass: String,
    confirmType: String,
    errorMessage: String,
    placeholder: String,
    customStyle: String,
    useIconSlot: Boolean,
    useButtonSlot: Boolean,
    placeholderStyle: String,
    cursorSpacing: {
      type: Number,
      value: 50
    },
    maxlength: {
      type: Number,
      value: -1
    },
    type: {
      type: String,
      value: 'text'
    },
    border: {
      type: Boolean,
      value: true
    },
    titleWidth: {
      type: String,
      value: '90px'
    }
  },
  data: {
    showClear: false
  },
  computed: {
    inputClass: function inputClass() {
      var data = this.data;
      return this.classNames('input-class', 'van-field__input', _defineProperty({
        'van-field--error': data.error,
        'van-field__textarea': data.type === 'textarea',
        'van-field__input--disabled': data.disabled
      }, "van-field--" + data.inputAlign, data.inputAlign));
    }
  },
  beforeCreate: function beforeCreate() {
    this.focused = false;
  },
  methods: {
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value;

      this.$emit('input', value);
      this.$emit('change', value);
      this.setData({
        value: value,
        showClear: this.getShowClear(value)
      });
    },
    onFocus: function onFocus() {
      this.$emit('focus');
      this.focused = true;
      this.setData({
        showClear: this.getShowClear()
      });
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.$emit('blur');
      this.setData({
        showClear: this.getShowClear()
      });
    },
    onClickIcon: function onClickIcon() {
      this.$emit('clickicon');
    },
    getShowClear: function getShowClear(value) {
      value = value === undefined ? this.data.value : value;
      return this.data.clearable && this.focused && value && !this.data.readonly;
    },
    onClear: function onClear() {
      this.setData({
        value: '',
        showClear: this.getShowClear('')
      });
      this.$emit('input', '');
      this.$emit('change', '');
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.data.value);
    },
    onIconClicked: function onIconClicked() {
      this.$emit('leftIconClicked');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZXJyb3IiLCJCb29sZWFuIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiaW5wdXRBbGlnbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybVR5cGUiLCJlcnJvck1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsImN1c3RvbVN0eWxlIiwidXNlSWNvblNsb3QiLCJ1c2VCdXR0b25TbG90IiwicGxhY2Vob2xkZXJTdHlsZSIsImN1cnNvclNwYWNpbmciLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsInNob3dDbGVhciIsImNvbXB1dGVkIiwiaW5wdXRDbGFzcyIsImNsYXNzTmFtZXMiLCJiZWZvcmVDcmVhdGUiLCJmb2N1c2VkIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsIl9yZWYiLCJkZXRhaWwiLCJfcmVmJHZhbHVlIiwiJGVtaXQiLCJzZXREYXRhIiwiZ2V0U2hvd0NsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xpY2tJY29uIiwidW5kZWZpbmVkIiwib25DbGVhciIsIm9uQ29uZmlybSIsIm9uSWNvbkNsaWNrZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsV0FBUyxDQUFDLGFBQUQsQ0FGRztBQUdaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0QsTUFGRjtBQUdMRSxXQUFPQyxPQUhGO0FBSUxDLFdBQU9ELE9BSkY7QUFLTEUsWUFBUUYsT0FMSDtBQU1MRyxZQUFRSCxPQU5IO0FBT0xJLGNBQVVQLE1BUEw7QUFRTFEsY0FBVUwsT0FSTDtBQVNMTSxjQUFVTixPQVRMO0FBVUxPLGNBQVVQLE9BVkw7QUFXTFEsY0FBVVIsT0FYTDtBQVlMUyxlQUFXWixNQVpOO0FBYUxhLGVBQVdWLE9BYk47QUFjTFcsZ0JBQVlkLE1BZFA7QUFlTGUsaUJBQWFmLE1BZlI7QUFnQkxnQixpQkFBYWhCLE1BaEJSO0FBaUJMaUIsa0JBQWNqQixNQWpCVDtBQWtCTGtCLGlCQUFhbEIsTUFsQlI7QUFtQkxtQixpQkFBYW5CLE1BbkJSO0FBb0JMb0IsaUJBQWFqQixPQXBCUjtBQXFCTGtCLG1CQUFlbEIsT0FyQlY7QUFzQkxtQixzQkFBa0J0QixNQXRCYjtBQXVCTHVCLG1CQUFlO0FBQ2JDLFlBQU1DLE1BRE87QUFFYkMsYUFBTztBQUZNLEtBdkJWO0FBMkJMQyxlQUFXO0FBQ1RILFlBQU1DLE1BREc7QUFFVEMsYUFBTyxDQUFDO0FBRkMsS0EzQk47QUErQkxGLFVBQU07QUFDSkEsWUFBTXhCLE1BREY7QUFFSjBCLGFBQU87QUFGSCxLQS9CRDtBQW1DTEUsWUFBUTtBQUNOSixZQUFNckIsT0FEQTtBQUVOdUIsYUFBTztBQUZELEtBbkNIO0FBdUNMRyxnQkFBWTtBQUNWTCxZQUFNeEIsTUFESTtBQUVWMEIsYUFBTztBQUZHO0FBdkNQLEdBSEs7QUErQ1pJLFFBQU07QUFDSkMsZUFBVztBQURQLEdBL0NNO0FBa0RaQyxZQUFVO0FBQ1JDLGdCQUFZLFNBQVNBLFVBQVQsR0FBc0I7QUFDaEMsVUFBSUgsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLGFBQU8sS0FBS0ksVUFBTCxDQUFnQixhQUFoQixFQUErQixrQkFBL0I7QUFDTCw0QkFBb0JKLEtBQUs1QixLQURwQjtBQUVMLCtCQUF1QjRCLEtBQUtOLElBQUwsS0FBYyxVQUZoQztBQUdMLHNDQUE4Qk0sS0FBS3RCO0FBSDlCLFNBSUosZ0JBQWdCc0IsS0FBS2hCLFVBSmpCLEVBSThCZ0IsS0FBS2hCLFVBSm5DLEVBQVA7QUFNRDtBQVRPLEdBbERFO0FBNkRacUIsZ0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNELEdBL0RXO0FBZ0VaQyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDL0IsVUFBSUMsT0FBT0QsTUFBTUUsTUFBTixJQUFnQixFQUEzQjtBQUFBLFVBQ0lDLGFBQWFGLEtBQUtkLEtBRHRCO0FBQUEsVUFFSUEsUUFBUWdCLGVBQWUsS0FBSyxDQUFwQixHQUF3QixFQUF4QixHQUE2QkEsVUFGekM7O0FBSUEsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JqQixLQUFwQjtBQUNBLFdBQUtpQixLQUFMLENBQVcsUUFBWCxFQUFxQmpCLEtBQXJCO0FBQ0EsV0FBS2tCLE9BQUwsQ0FBYTtBQUNYbEIsZUFBT0EsS0FESTtBQUVYSyxtQkFBVyxLQUFLYyxZQUFMLENBQWtCbkIsS0FBbEI7QUFGQSxPQUFiO0FBSUQsS0FaTTtBQWFQb0IsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtILEtBQUwsQ0FBVyxPQUFYO0FBQ0EsV0FBS1AsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLUSxPQUFMLENBQWE7QUFDWGIsbUJBQVcsS0FBS2MsWUFBTDtBQURBLE9BQWI7QUFHRCxLQW5CTTtBQW9CUEUsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFdBQUtYLE9BQUwsR0FBZSxLQUFmO0FBQ0EsV0FBS08sS0FBTCxDQUFXLE1BQVg7QUFDQSxXQUFLQyxPQUFMLENBQWE7QUFDWGIsbUJBQVcsS0FBS2MsWUFBTDtBQURBLE9BQWI7QUFHRCxLQTFCTTtBQTJCUEcsaUJBQWEsU0FBU0EsV0FBVCxHQUF1QjtBQUNsQyxXQUFLTCxLQUFMLENBQVcsV0FBWDtBQUNELEtBN0JNO0FBOEJQRSxrQkFBYyxTQUFTQSxZQUFULENBQXNCbkIsS0FBdEIsRUFBNkI7QUFDekNBLGNBQVFBLFVBQVV1QixTQUFWLEdBQXNCLEtBQUtuQixJQUFMLENBQVVKLEtBQWhDLEdBQXdDQSxLQUFoRDtBQUNBLGFBQU8sS0FBS0ksSUFBTCxDQUFVakIsU0FBVixJQUF1QixLQUFLdUIsT0FBNUIsSUFBdUNWLEtBQXZDLElBQWdELENBQUMsS0FBS0ksSUFBTCxDQUFVcEIsUUFBbEU7QUFDRCxLQWpDTTtBQWtDUHdDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLTixPQUFMLENBQWE7QUFDWGxCLGVBQU8sRUFESTtBQUVYSyxtQkFBVyxLQUFLYyxZQUFMLENBQWtCLEVBQWxCO0FBRkEsT0FBYjtBQUlBLFdBQUtGLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEVBQXBCO0FBQ0EsV0FBS0EsS0FBTCxDQUFXLFFBQVgsRUFBcUIsRUFBckI7QUFDRCxLQXpDTTtBQTBDUFEsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFdBQUtSLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtiLElBQUwsQ0FBVUosS0FBaEM7QUFDRCxLQTVDTTtBQTZDUDBCLGlCQTdDTywyQkE2Q1E7QUFDYixXQUFLVCxLQUFMLENBQVcsaUJBQVg7QUFDRDtBQS9DTTtBQWhFRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICBjbGFzc2VzOiBbJ2lucHV0LWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBlcnJvcjogQm9vbGVhbixcclxuICAgIGZvY3VzOiBCb29sZWFuLFxyXG4gICAgY2VudGVyOiBCb29sZWFuLFxyXG4gICAgaXNMaW5rOiBCb29sZWFuLFxyXG4gICAgbGVmdEljb246IFN0cmluZyxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgYXV0b3NpemU6IEJvb2xlYW4sXHJcbiAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgIHJlcXVpcmVkOiBCb29sZWFuLFxyXG4gICAgaWNvbkNsYXNzOiBTdHJpbmcsXHJcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXHJcbiAgICBpbnB1dEFsaWduOiBTdHJpbmcsXHJcbiAgICBjdXN0b21DbGFzczogU3RyaW5nLFxyXG4gICAgY29uZmlybVR5cGU6IFN0cmluZyxcclxuICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcclxuICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlclN0eWxlOiBTdHJpbmcsXHJcbiAgICBjdXJzb3JTcGFjaW5nOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDUwXHJcbiAgICB9LFxyXG4gICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IC0xXHJcbiAgICB9LFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZVdpZHRoOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICc5MHB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgc2hvd0NsZWFyOiBmYWxzZVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGlucHV0Q2xhc3M6IGZ1bmN0aW9uIGlucHV0Q2xhc3MoKSB7XHJcbiAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWVzKCdpbnB1dC1jbGFzcycsICd2YW4tZmllbGRfX2lucHV0Jywge1xyXG4gICAgICAgICd2YW4tZmllbGQtLWVycm9yJzogZGF0YS5lcnJvcixcclxuICAgICAgICAndmFuLWZpZWxkX190ZXh0YXJlYSc6IGRhdGEudHlwZSA9PT0gJ3RleHRhcmVhJyxcclxuICAgICAgICAndmFuLWZpZWxkX19pbnB1dC0tZGlzYWJsZWQnOiBkYXRhLmRpc2FibGVkLFxyXG4gICAgICAgIFtcInZhbi1maWVsZC0tXCIgKyBkYXRhLmlucHV0QWxpZ25dOiBkYXRhLmlucHV0QWxpZ25cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25JbnB1dDogZnVuY3Rpb24gb25JbnB1dChldmVudCkge1xyXG4gICAgICB2YXIgX3JlZiA9IGV2ZW50LmRldGFpbCB8fCB7fSxcclxuICAgICAgICAgIF9yZWYkdmFsdWUgPSBfcmVmLnZhbHVlLFxyXG4gICAgICAgICAgdmFsdWUgPSBfcmVmJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcclxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKHZhbHVlKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdmb2N1cycpO1xyXG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKClcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGlja0ljb246IGZ1bmN0aW9uIG9uQ2xpY2tJY29uKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjbGlja2ljb24nKTtcclxuICAgIH0sXHJcbiAgICBnZXRTaG93Q2xlYXI6IGZ1bmN0aW9uIGdldFNob3dDbGVhcih2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmRhdGEudmFsdWUgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jbGVhcmFibGUgJiYgdGhpcy5mb2N1c2VkICYmIHZhbHVlICYmICF0aGlzLmRhdGEucmVhZG9ubHk7XHJcbiAgICB9LFxyXG4gICAgb25DbGVhcjogZnVuY3Rpb24gb25DbGVhcigpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcignJylcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgJycpO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAnJyk7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtOiBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCB0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uSWNvbkNsaWNrZWQoKXtcclxuICAgICAgdGhpcy4kZW1pdCgnbGVmdEljb25DbGlja2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/field/index.js");
 		__wxRoute = 'components/vant/icon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/icon/index.js';	define("components/vant/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsIm5hbWUiLCJTdHJpbmciLCJzaXplIiwiY29sb3IiLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidHlwZSIsInZhbHVlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU0sSUFERDtBQUVMQyxVQUFNQyxNQUZEO0FBR0xDLFVBQU1ELE1BSEQ7QUFJTEUsV0FBT0YsTUFKRjtBQUtMRyxpQkFBYUgsTUFMUjtBQU1MSSxpQkFBYTtBQUNYQyxZQUFNTCxNQURLO0FBRVhNLGFBQU87QUFGSTtBQU5SLEdBREs7QUFZWkMsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXLE9BQVg7QUFDRDtBQUhNO0FBWkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIGluZm86IG51bGwsXHJcbiAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICBzaXplOiBTdHJpbmcsXHJcbiAgICBjb2xvcjogU3RyaW5nLFxyXG4gICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcclxuICAgIGNsYXNzUHJlZml4OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICd2YW4taWNvbidcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/icon/index.js");
 		__wxRoute = 'components/vant/loading/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/loading/index.js';	define("components/vant/loading/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    size: {
      type: String,
      value: '30px'
    },
    type: {
      type: String,
      value: 'circular'
    },
    color: {
      type: String,
      value: '#c9c9c9'
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2l6ZSIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTTtBQUNKQyxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQUREO0FBS0xGLFVBQU07QUFDSkEsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FMRDtBQVNMQyxXQUFPO0FBQ0xILFlBQU1DLE1BREQ7QUFFTEMsYUFBTztBQUZGO0FBVEY7QUFESyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBwcm9wczoge1xyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnMzBweCdcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdjaXJjdWxhcidcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnI2M5YzljOSdcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/loading/index.js");
 		__wxRoute = 'components/vant/nav-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/nav-bar/index.js';	define("components/vant/nav-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['title-class'],
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit('click-left');
    },
    onClickRight: function onClickRight() {
      this.$emit('click-right');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJCb29sZWFuIiwiZml4ZWQiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCIkZW1pdCIsIm9uQ2xpY2tSaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxXQUFTLENBQUMsYUFBRCxDQURHO0FBRVpDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxjQUFVRCxNQUZMO0FBR0xFLGVBQVdGLE1BSE47QUFJTEcsZUFBV0MsT0FKTjtBQUtMQyxXQUFPRCxPQUxGO0FBTUxFLFlBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPO0FBRkQ7QUFOSCxHQUZLO0FBYVpDLFdBQVM7QUFDUEMsaUJBQWEsU0FBU0EsV0FBVCxHQUF1QjtBQUNsQyxXQUFLQyxLQUFMLENBQVcsWUFBWDtBQUNELEtBSE07QUFJUEMsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxXQUFLRCxLQUFMLENBQVcsYUFBWDtBQUNEO0FBTk07QUFiRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICBsZWZ0VGV4dDogU3RyaW5nLFxyXG4gICAgcmlnaHRUZXh0OiBTdHJpbmcsXHJcbiAgICBsZWZ0QXJyb3c6IEJvb2xlYW4sXHJcbiAgICBmaXhlZDogQm9vbGVhbixcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrTGVmdDogZnVuY3Rpb24gb25DbGlja0xlZnQoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWxlZnQnKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrUmlnaHQ6IGZ1bmN0aW9uIG9uQ2xpY2tSaWdodCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2stcmlnaHQnKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/nav-bar/index.js");
 		__wxRoute = 'components/vant/notice-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/notice-bar/index.js';	define("components/vant/notice-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
(0, _component.VantComponent)({
  props: {
    text: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: 'navigate'
    },
    delay: {
      type: Number,
      value: 0
    },
    speed: {
      type: Number,
      value: 50
    },
    scrollable: {
      type: Boolean,
      value: true
    },
    leftIcon: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: FONT_COLOR
    },
    backgroundColor: {
      type: String,
      value: BG_COLOR
    }
  },
  data: {
    show: true,
    hasRightIcon: false,
    width: undefined,
    wrapWidth: undefined,
    elapse: undefined,
    animation: null,
    resetAnimation: null,
    timer: null
  },
  watch: {
    text: function text() {
      this.setData({}, this.init);
    }
  },
  created: function created() {
    if (this.data.mode) {
      this.setData({
        hasRightIcon: true
      });
    }
  },
  destroyed: function destroyed() {
    var timer = this.data.timer;
    timer && clearTimeout(timer);
  },
  methods: {
    init: function init() {
      var _this = this;

      this.getRect('.van-notice-bar__content').then(function (rect) {
        if (!rect || !rect.width) {
          return;
        }

        _this.setData({
          width: rect.width
        });

        _this.getRect('.van-notice-bar__content-wrap').then(function (rect) {
          if (!rect || !rect.width) {
            return;
          }

          var wrapWidth = rect.width;
          var _this$data = _this.data,
              width = _this$data.width,
              speed = _this$data.speed,
              scrollable = _this$data.scrollable,
              delay = _this$data.delay;

          if (scrollable && wrapWidth < width) {
            var elapse = width / speed * 1000;
            var animation = wx.createAnimation({
              duration: elapse,
              timeingFunction: 'linear',
              delay: delay
            });
            var resetAnimation = wx.createAnimation({
              duration: 0,
              timeingFunction: 'linear'
            });

            _this.setData({
              elapse: elapse,
              wrapWidth: wrapWidth,
              animation: animation,
              resetAnimation: resetAnimation
            }, function () {
              _this.scroll();
            });
          }
        });
      });
    },
    scroll: function scroll() {
      var _this2 = this;

      var _this$data2 = this.data,
          animation = _this$data2.animation,
          resetAnimation = _this$data2.resetAnimation,
          wrapWidth = _this$data2.wrapWidth,
          elapse = _this$data2.elapse,
          speed = _this$data2.speed;
      resetAnimation.translateX(wrapWidth).step();
      var animationData = animation.translateX(-(elapse * speed) / 1000).step();
      this.setData({
        animationData: resetAnimation.export()
      });
      setTimeout(function () {
        _this2.setData({
          animationData: animationData.export()
        });
      }, 100);
      var timer = setTimeout(function () {
        _this2.scroll();
      }, elapse);
      this.setData({
        timer: timer
      });
    },
    onClickIcon: function onClickIcon() {
      var timer = this.data.timer;
      timer && clearTimeout(timer);
      this.setData({
        show: false,
        timer: null
      });
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZPTlRfQ09MT1IiLCJCR19DT0xPUiIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm1vZGUiLCJ1cmwiLCJvcGVuVHlwZSIsImRlbGF5IiwiTnVtYmVyIiwic3BlZWQiLCJzY3JvbGxhYmxlIiwiQm9vbGVhbiIsImxlZnRJY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwic2hvdyIsImhhc1JpZ2h0SWNvbiIsIndpZHRoIiwidW5kZWZpbmVkIiwid3JhcFdpZHRoIiwiZWxhcHNlIiwiYW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJ0aW1lciIsIndhdGNoIiwic2V0RGF0YSIsImluaXQiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwiY2xlYXJUaW1lb3V0IiwibWV0aG9kcyIsIl90aGlzIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0IiwiX3RoaXMkZGF0YSIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1laW5nRnVuY3Rpb24iLCJzY3JvbGwiLCJfdGhpczIiLCJfdGhpcyRkYXRhMiIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJvbkNsaWNrSWNvbiIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLElBQUlBLGFBQWEsU0FBakI7QUFDQSxJQUFJQyxXQUFXLFNBQWY7QUFDQSw4QkFBYztBQUNaQyxTQUFPO0FBQ0xDLFVBQU07QUFDSkMsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FERDtBQUtMQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZILEtBTEQ7QUFTTEUsU0FBSztBQUNISixZQUFNQyxNQURIO0FBRUhDLGFBQU87QUFGSixLQVRBO0FBYUxHLGNBQVU7QUFDUkwsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkMsS0FiTDtBQWlCTEksV0FBTztBQUNMTixZQUFNTyxNQUREO0FBRUxMLGFBQU87QUFGRixLQWpCRjtBQXFCTE0sV0FBTztBQUNMUixZQUFNTyxNQUREO0FBRUxMLGFBQU87QUFGRixLQXJCRjtBQXlCTE8sZ0JBQVk7QUFDVlQsWUFBTVUsT0FESTtBQUVWUixhQUFPO0FBRkcsS0F6QlA7QUE2QkxTLGNBQVU7QUFDUlgsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkMsS0E3Qkw7QUFpQ0xVLFdBQU87QUFDTFosWUFBTUMsTUFERDtBQUVMQyxhQUFPTjtBQUZGLEtBakNGO0FBcUNMaUIscUJBQWlCO0FBQ2ZiLFlBQU1DLE1BRFM7QUFFZkMsYUFBT0w7QUFGUTtBQXJDWixHQURLO0FBMkNaaUIsUUFBTTtBQUNKQyxVQUFNLElBREY7QUFFSkMsa0JBQWMsS0FGVjtBQUdKQyxXQUFPQyxTQUhIO0FBSUpDLGVBQVdELFNBSlA7QUFLSkUsWUFBUUYsU0FMSjtBQU1KRyxlQUFXLElBTlA7QUFPSkMsb0JBQWdCLElBUFo7QUFRSkMsV0FBTztBQVJILEdBM0NNO0FBcURaQyxTQUFPO0FBQ0x6QixVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBSzBCLE9BQUwsQ0FBYSxFQUFiLEVBQWlCLEtBQUtDLElBQXRCO0FBQ0Q7QUFISSxHQXJESztBQTBEWkMsV0FBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksS0FBS2IsSUFBTCxDQUFVWCxJQUFkLEVBQW9CO0FBQ2xCLFdBQUtzQixPQUFMLENBQWE7QUFDWFQsc0JBQWM7QUFESCxPQUFiO0FBR0Q7QUFDRixHQWhFVztBQWlFWlksYUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFFBQUlMLFFBQVEsS0FBS1QsSUFBTCxDQUFVUyxLQUF0QjtBQUNBQSxhQUFTTSxhQUFhTixLQUFiLENBQVQ7QUFDRCxHQXBFVztBQXFFWk8sV0FBUztBQUNQSixVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsVUFBSUssUUFBUSxJQUFaOztBQUVBLFdBQUtDLE9BQUwsQ0FBYSwwQkFBYixFQUF5Q0MsSUFBekMsQ0FBOEMsVUFBVUMsSUFBVixFQUFnQjtBQUM1RCxZQUFJLENBQUNBLElBQUQsSUFBUyxDQUFDQSxLQUFLakIsS0FBbkIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRGMsY0FBTU4sT0FBTixDQUFjO0FBQ1pSLGlCQUFPaUIsS0FBS2pCO0FBREEsU0FBZDs7QUFJQWMsY0FBTUMsT0FBTixDQUFjLCtCQUFkLEVBQStDQyxJQUEvQyxDQUFvRCxVQUFVQyxJQUFWLEVBQWdCO0FBQ2xFLGNBQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLEtBQUtqQixLQUFuQixFQUEwQjtBQUN4QjtBQUNEOztBQUVELGNBQUlFLFlBQVllLEtBQUtqQixLQUFyQjtBQUNBLGNBQUlrQixhQUFhSixNQUFNakIsSUFBdkI7QUFBQSxjQUNJRyxRQUFRa0IsV0FBV2xCLEtBRHZCO0FBQUEsY0FFSVQsUUFBUTJCLFdBQVczQixLQUZ2QjtBQUFBLGNBR0lDLGFBQWEwQixXQUFXMUIsVUFINUI7QUFBQSxjQUlJSCxRQUFRNkIsV0FBVzdCLEtBSnZCOztBQU1BLGNBQUlHLGNBQWNVLFlBQVlGLEtBQTlCLEVBQXFDO0FBQ25DLGdCQUFJRyxTQUFTSCxRQUFRVCxLQUFSLEdBQWdCLElBQTdCO0FBQ0EsZ0JBQUlhLFlBQVllLEdBQUdDLGVBQUgsQ0FBbUI7QUFDakNDLHdCQUFVbEIsTUFEdUI7QUFFakNtQiwrQkFBaUIsUUFGZ0I7QUFHakNqQyxxQkFBT0E7QUFIMEIsYUFBbkIsQ0FBaEI7QUFLQSxnQkFBSWdCLGlCQUFpQmMsR0FBR0MsZUFBSCxDQUFtQjtBQUN0Q0Msd0JBQVUsQ0FENEI7QUFFdENDLCtCQUFpQjtBQUZxQixhQUFuQixDQUFyQjs7QUFLQVIsa0JBQU1OLE9BQU4sQ0FBYztBQUNaTCxzQkFBUUEsTUFESTtBQUVaRCx5QkFBV0EsU0FGQztBQUdaRSx5QkFBV0EsU0FIQztBQUlaQyw4QkFBZ0JBO0FBSkosYUFBZCxFQUtHLFlBQVk7QUFDYlMsb0JBQU1TLE1BQU47QUFDRCxhQVBEO0FBUUQ7QUFDRixTQWpDRDtBQWtDRCxPQTNDRDtBQTRDRCxLQWhETTtBQWlEUEEsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFVBQUlDLFNBQVMsSUFBYjs7QUFFQSxVQUFJQyxjQUFjLEtBQUs1QixJQUF2QjtBQUFBLFVBQ0lPLFlBQVlxQixZQUFZckIsU0FENUI7QUFBQSxVQUVJQyxpQkFBaUJvQixZQUFZcEIsY0FGakM7QUFBQSxVQUdJSCxZQUFZdUIsWUFBWXZCLFNBSDVCO0FBQUEsVUFJSUMsU0FBU3NCLFlBQVl0QixNQUp6QjtBQUFBLFVBS0laLFFBQVFrQyxZQUFZbEMsS0FMeEI7QUFNQWMscUJBQWVxQixVQUFmLENBQTBCeEIsU0FBMUIsRUFBcUN5QixJQUFyQztBQUNBLFVBQUlDLGdCQUFnQnhCLFVBQVVzQixVQUFWLENBQXFCLEVBQUV2QixTQUFTWixLQUFYLElBQW9CLElBQXpDLEVBQStDb0MsSUFBL0MsRUFBcEI7QUFDQSxXQUFLbkIsT0FBTCxDQUFhO0FBQ1hvQix1QkFBZXZCLGVBQWV3QixNQUFmO0FBREosT0FBYjtBQUdBQyxpQkFBVyxZQUFZO0FBQ3JCTixlQUFPaEIsT0FBUCxDQUFlO0FBQ2JvQix5QkFBZUEsY0FBY0MsTUFBZDtBQURGLFNBQWY7QUFHRCxPQUpELEVBSUcsR0FKSDtBQUtBLFVBQUl2QixRQUFRd0IsV0FBVyxZQUFZO0FBQ2pDTixlQUFPRCxNQUFQO0FBQ0QsT0FGVyxFQUVUcEIsTUFGUyxDQUFaO0FBR0EsV0FBS0ssT0FBTCxDQUFhO0FBQ1hGLGVBQU9BO0FBREksT0FBYjtBQUdELEtBMUVNO0FBMkVQeUIsaUJBQWEsU0FBU0EsV0FBVCxHQUF1QjtBQUNsQyxVQUFJekIsUUFBUSxLQUFLVCxJQUFMLENBQVVTLEtBQXRCO0FBQ0FBLGVBQVNNLGFBQWFOLEtBQWIsQ0FBVDtBQUNBLFdBQUtFLE9BQUwsQ0FBYTtBQUNYVixjQUFNLEtBREs7QUFFWFEsZUFBTztBQUZJLE9BQWI7QUFJRCxLQWxGTTtBQW1GUDBCLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDL0IsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELEtBQXBCO0FBQ0Q7QUFyRk07QUFyRUcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxudmFyIEZPTlRfQ09MT1IgPSAnI2VkNmEwYyc7XHJcbnZhciBCR19DT0xPUiA9ICcjZmZmYmU4JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH0sXHJcbiAgICBtb2RlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgdXJsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgb3BlblR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ25hdmlnYXRlJ1xyXG4gICAgfSxcclxuICAgIGRlbGF5OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICBzcGVlZDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiA1MFxyXG4gICAgfSxcclxuICAgIHNjcm9sbGFibGU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBsZWZ0SWNvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogQkdfQ09MT1JcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBoYXNSaWdodEljb246IGZhbHNlLFxyXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIHdyYXBXaWR0aDogdW5kZWZpbmVkLFxyXG4gICAgZWxhcHNlOiB1bmRlZmluZWQsXHJcbiAgICBhbmltYXRpb246IG51bGwsXHJcbiAgICByZXNldEFuaW1hdGlvbjogbnVsbCxcclxuICAgIHRpbWVyOiBudWxsXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdGV4dDogZnVuY3Rpb24gdGV4dCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHt9LCB0aGlzLmluaXQpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEubW9kZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGhhc1JpZ2h0SWNvbjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkKCkge1xyXG4gICAgdmFyIHRpbWVyID0gdGhpcy5kYXRhLnRpbWVyO1xyXG4gICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fY29udGVudCcpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICBpZiAoIXJlY3QgfHwgIXJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGhcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgX3RoaXMuZ2V0UmVjdCgnLnZhbi1ub3RpY2UtYmFyX19jb250ZW50LXdyYXAnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgICBpZiAoIXJlY3QgfHwgIXJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciB3cmFwV2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgdmFyIF90aGlzJGRhdGEgPSBfdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICAgIHdpZHRoID0gX3RoaXMkZGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICBzcGVlZCA9IF90aGlzJGRhdGEuc3BlZWQsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZSA9IF90aGlzJGRhdGEuc2Nyb2xsYWJsZSxcclxuICAgICAgICAgICAgICBkZWxheSA9IF90aGlzJGRhdGEuZGVsYXk7XHJcblxyXG4gICAgICAgICAgaWYgKHNjcm9sbGFibGUgJiYgd3JhcFdpZHRoIDwgd2lkdGgpIHtcclxuICAgICAgICAgICAgdmFyIGVsYXBzZSA9IHdpZHRoIC8gc3BlZWQgKiAxMDAwO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogZWxhcHNlLFxyXG4gICAgICAgICAgICAgIHRpbWVpbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzZXRBbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgIHRpbWVpbmdGdW5jdGlvbjogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBlbGFwc2U6IGVsYXBzZSxcclxuICAgICAgICAgICAgICB3cmFwV2lkdGg6IHdyYXBXaWR0aCxcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICByZXNldEFuaW1hdGlvbjogcmVzZXRBbmltYXRpb25cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIF90aGlzLnNjcm9sbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsOiBmdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgdmFyIF90aGlzJGRhdGEyID0gdGhpcy5kYXRhLFxyXG4gICAgICAgICAgYW5pbWF0aW9uID0gX3RoaXMkZGF0YTIuYW5pbWF0aW9uLFxyXG4gICAgICAgICAgcmVzZXRBbmltYXRpb24gPSBfdGhpcyRkYXRhMi5yZXNldEFuaW1hdGlvbixcclxuICAgICAgICAgIHdyYXBXaWR0aCA9IF90aGlzJGRhdGEyLndyYXBXaWR0aCxcclxuICAgICAgICAgIGVsYXBzZSA9IF90aGlzJGRhdGEyLmVsYXBzZSxcclxuICAgICAgICAgIHNwZWVkID0gX3RoaXMkZGF0YTIuc3BlZWQ7XHJcbiAgICAgIHJlc2V0QW5pbWF0aW9uLnRyYW5zbGF0ZVgod3JhcFdpZHRoKS5zdGVwKCk7XHJcbiAgICAgIHZhciBhbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLnRyYW5zbGF0ZVgoLShlbGFwc2UgKiBzcGVlZCkgLyAxMDAwKS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogcmVzZXRBbmltYXRpb24uZXhwb3J0KClcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF90aGlzMi5zZXREYXRhKHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMyLnNjcm9sbCgpO1xyXG4gICAgICB9LCBlbGFwc2UpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRpbWVyOiB0aW1lclxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrSWNvbjogZnVuY3Rpb24gb25DbGlja0ljb24oKSB7XHJcbiAgICAgIHZhciB0aW1lciA9IHRoaXMuZGF0YS50aW1lcjtcclxuICAgICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogbnVsbFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/notice-bar/index.js");
 		__wxRoute = 'components/vant/notify/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/notify/index.js';	define("components/vant/notify/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    text: String,
    color: {
      type: String,
      value: '#fff'
    },
    backgroundColor: {
      type: String,
      value: '#e64340'
    },
    duration: {
      type: Number,
      value: 3000
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      var duration = this.data.duration;
      clearTimeout(this.timer);
      this.setData({
        show: true
      });

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(function () {
          _this.hide();
        }, duration);
      }
    },
    hide: function hide() {
      clearTimeout(this.timer);
      this.setData({
        show: false
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJtZXRob2RzIiwic2hvdyIsIl90aGlzIiwiZGF0YSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0RGF0YSIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFdBQU87QUFDTEMsWUFBTUYsTUFERDtBQUVMRyxhQUFPO0FBRkYsS0FGRjtBQU1MQyxxQkFBaUI7QUFDZkYsWUFBTUYsTUFEUztBQUVmRyxhQUFPO0FBRlEsS0FOWjtBQVVMRSxjQUFVO0FBQ1JILFlBQU1JLE1BREU7QUFFUkgsYUFBTztBQUZDO0FBVkwsR0FESztBQWdCWkksV0FBUztBQUNQQyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFVBQUlKLFdBQVcsS0FBS0ssSUFBTCxDQUFVTCxRQUF6QjtBQUNBTSxtQkFBYSxLQUFLQyxLQUFsQjtBQUNBLFdBQUtDLE9BQUwsQ0FBYTtBQUNYTCxjQUFNO0FBREssT0FBYjs7QUFJQSxVQUFJSCxXQUFXLENBQVgsSUFBZ0JBLGFBQWFTLFFBQWpDLEVBQTJDO0FBQ3pDLGFBQUtGLEtBQUwsR0FBYUcsV0FBVyxZQUFZO0FBQ2xDTixnQkFBTU8sSUFBTjtBQUNELFNBRlksRUFFVlgsUUFGVSxDQUFiO0FBR0Q7QUFDRixLQWZNO0FBZ0JQVyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEJMLG1CQUFhLEtBQUtDLEtBQWxCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1hMLGNBQU07QUFESyxPQUFiO0FBR0Q7QUFyQk07QUFoQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHRleHQ6IFN0cmluZyxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcjZmZmJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnI2U2NDM0MCdcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAzMDAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5kYXRhLmR1cmF0aW9uO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX3RoaXMuaGlkZSgpO1xyXG4gICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/notify/index.js");
 		__wxRoute = 'components/vant/overlay/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/overlay/index.js';	define("components/vant/overlay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwiY3VzdG9tU3R5bGUiLCJTdHJpbmciLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Iiwibm9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU1DLE9BREQ7QUFFTEMsVUFBTUQsT0FGRDtBQUdMRSxpQkFBYUMsTUFIUjtBQUlMQyxZQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsYUFBTztBQUZEO0FBSkgsR0FESztBQVVaQyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNELEtBSE07QUFJUDtBQUNBQyxVQUFNLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTtBQUxqQjtBQVZHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBzaG93OiBCb29sZWFuLFxyXG4gICAgbWFzazogQm9vbGVhbixcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB6SW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcclxuICAgIH0sXHJcbiAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcclxuICAgIG5vb3A6IGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/overlay/index.js");
 		__wxRoute = 'components/vant/panel/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/panel/index.js';	define("components/vant/panel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['footer-class'],
  props: {
    desc: String,
    title: String,
    status: String,
    headerClass: String,
    useFooterSlot: Boolean
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsImRlc2MiLCJTdHJpbmciLCJ0aXRsZSIsInN0YXR1cyIsImhlYWRlckNsYXNzIiwidXNlRm9vdGVyU2xvdCIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsV0FBUyxDQUFDLGNBQUQsQ0FERztBQUVaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0QsTUFGRjtBQUdMRSxZQUFRRixNQUhIO0FBSUxHLGlCQUFhSCxNQUpSO0FBS0xJLG1CQUFlQztBQUxWO0FBRkssQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgY2xhc3NlczogWydmb290ZXItY2xhc3MnXSxcclxuICBwcm9wczoge1xyXG4gICAgZGVzYzogU3RyaW5nLFxyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIHN0YXR1czogU3RyaW5nLFxyXG4gICAgaGVhZGVyQ2xhc3M6IFN0cmluZyxcclxuICAgIHVzZUZvb3RlclNsb3Q6IEJvb2xlYW5cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/panel/index.js");
 		__wxRoute = 'components/vant/popup/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/popup/index.js';	define("components/vant/popup/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

(0, _component.VantComponent)({
  mixins: [(0, _transition.transition)(false)],
  props: {
    transition: String,
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    }
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.$emit('close');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwidHJhbnNpdGlvbiIsIlN0cmluZyIsImN1c3RvbVN0eWxlIiwib3ZlcmxheVN0eWxlIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib3ZlcmxheSIsIkJvb2xlYW4iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJtZXRob2RzIiwib25DbGlja092ZXJsYXkiLCIkZW1pdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDLDRCQUFXLEtBQVgsQ0FBRCxDQURJO0FBRVpDLFNBQU87QUFDTEMsZ0JBQVlDLE1BRFA7QUFFTEMsaUJBQWFELE1BRlI7QUFHTEUsa0JBQWNGLE1BSFQ7QUFJTEcsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksT0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyx5QkFBcUI7QUFDbkJMLFlBQU1JLE9BRGE7QUFFbkJGLGFBQU87QUFGWSxLQVpoQjtBQWdCTEksY0FBVTtBQUNSTixZQUFNSixNQURFO0FBRVJNLGFBQU87QUFGQztBQWhCTCxHQUZLO0FBdUJaSyxXQUFTO0FBQ1BDLG9CQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFdBQUtDLEtBQUwsQ0FBVyxlQUFYOztBQUVBLFVBQUksS0FBS0MsSUFBTCxDQUFVTCxtQkFBZCxFQUFtQztBQUNqQyxhQUFLSSxLQUFMLENBQVcsT0FBWDtBQUNEO0FBQ0Y7QUFQTTtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnLi4vbWl4aW5zL3RyYW5zaXRpb24nO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFt0cmFuc2l0aW9uKGZhbHNlKV0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxMDBcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdjZW50ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gb25DbGlja092ZXJsYXkoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW92ZXJsYXknKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrT3ZlcmxheSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/popup/index.js");
 		__wxRoute = 'components/vant/progress/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/progress/index.js';	define("components/vant/progress/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    inactive: Boolean,
    percentage: Number,
    pivotText: String,
    pivotColor: String,
    showPivot: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: '#38f'
    },
    textColor: {
      type: String,
      value: '#fff'
    }
  },
  data: {
    pivotWidth: 0,
    progressWidth: 0
  },
  watch: {
    pivotText: 'getWidth',
    showPivot: 'getWidth'
  },
  computed: {
    portionStyle: function portionStyle() {
      var width = (this.data.progressWidth - this.data.pivotWidth) * this.data.percentage / 100 + 'px';
      var background = this.getCurrentColor();
      return "width: " + width + "; background: " + background + "; ";
    },
    pivotStyle: function pivotStyle() {
      var color = this.data.textColor;
      var background = this.data.pivotColor || this.getCurrentColor();
      return "color: " + color + "; background: " + background;
    },
    text: function text() {
      return this.data.pivotText || this.data.percentage + '%';
    }
  },
  mounted: function mounted() {
    this.getWidth();
  },
  methods: {
    getCurrentColor: function getCurrentColor() {
      return this.data.inactive ? '#cacaca' : this.data.color;
    },
    getWidth: function getWidth() {
      var _this = this;

      this.getRect('.van-progress').then(function (rect) {
        _this.setData({
          progressWidth: rect.width
        });
      });
      this.getRect('.van-progress__pivot').then(function (rect) {
        _this.setData({
          pivotWidth: rect.width || 0
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJzaG93UGl2b3QiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsInRleHRDb2xvciIsImRhdGEiLCJwaXZvdFdpZHRoIiwicHJvZ3Jlc3NXaWR0aCIsIndhdGNoIiwiY29tcHV0ZWQiLCJwb3J0aW9uU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJnZXRDdXJyZW50Q29sb3IiLCJwaXZvdFN0eWxlIiwidGV4dCIsIm1vdW50ZWQiLCJnZXRXaWR0aCIsIm1ldGhvZHMiLCJfdGhpcyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxjQUFVQyxPQURMO0FBRUxDLGdCQUFZQyxNQUZQO0FBR0xDLGVBQVdDLE1BSE47QUFJTEMsZ0JBQVlELE1BSlA7QUFLTEUsZUFBVztBQUNUQyxZQUFNUCxPQURHO0FBRVRRLGFBQU87QUFGRSxLQUxOO0FBU0xDLFdBQU87QUFDTEYsWUFBTUgsTUFERDtBQUVMSSxhQUFPO0FBRkYsS0FURjtBQWFMRSxlQUFXO0FBQ1RILFlBQU1ILE1BREc7QUFFVEksYUFBTztBQUZFO0FBYk4sR0FESztBQW1CWkcsUUFBTTtBQUNKQyxnQkFBWSxDQURSO0FBRUpDLG1CQUFlO0FBRlgsR0FuQk07QUF1QlpDLFNBQU87QUFDTFgsZUFBVyxVQUROO0FBRUxHLGVBQVc7QUFGTixHQXZCSztBQTJCWlMsWUFBVTtBQUNSQyxrQkFBYyxTQUFTQSxZQUFULEdBQXdCO0FBQ3BDLFVBQUlDLFFBQVEsQ0FBQyxLQUFLTixJQUFMLENBQVVFLGFBQVYsR0FBMEIsS0FBS0YsSUFBTCxDQUFVQyxVQUFyQyxJQUFtRCxLQUFLRCxJQUFMLENBQVVWLFVBQTdELEdBQTBFLEdBQTFFLEdBQWdGLElBQTVGO0FBQ0EsVUFBSWlCLGFBQWEsS0FBS0MsZUFBTCxFQUFqQjtBQUNBLGFBQU8sWUFBWUYsS0FBWixHQUFvQixnQkFBcEIsR0FBdUNDLFVBQXZDLEdBQW9ELElBQTNEO0FBQ0QsS0FMTztBQU1SRSxnQkFBWSxTQUFTQSxVQUFULEdBQXNCO0FBQ2hDLFVBQUlYLFFBQVEsS0FBS0UsSUFBTCxDQUFVRCxTQUF0QjtBQUNBLFVBQUlRLGFBQWEsS0FBS1AsSUFBTCxDQUFVTixVQUFWLElBQXdCLEtBQUtjLGVBQUwsRUFBekM7QUFDQSxhQUFPLFlBQVlWLEtBQVosR0FBb0IsZ0JBQXBCLEdBQXVDUyxVQUE5QztBQUNELEtBVk87QUFXUkcsVUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQU8sS0FBS1YsSUFBTCxDQUFVUixTQUFWLElBQXVCLEtBQUtRLElBQUwsQ0FBVVYsVUFBVixHQUF1QixHQUFyRDtBQUNEO0FBYk8sR0EzQkU7QUEwQ1pxQixXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsUUFBTDtBQUNELEdBNUNXO0FBNkNaQyxXQUFTO0FBQ1BMLHFCQUFpQixTQUFTQSxlQUFULEdBQTJCO0FBQzFDLGFBQU8sS0FBS1IsSUFBTCxDQUFVWixRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLEtBQUtZLElBQUwsQ0FBVUYsS0FBbEQ7QUFDRCxLQUhNO0FBSVBjLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixVQUFJRSxRQUFRLElBQVo7O0FBRUEsV0FBS0MsT0FBTCxDQUFhLGVBQWIsRUFBOEJDLElBQTlCLENBQW1DLFVBQVVDLElBQVYsRUFBZ0I7QUFDakRILGNBQU1JLE9BQU4sQ0FBYztBQUNaaEIseUJBQWVlLEtBQUtYO0FBRFIsU0FBZDtBQUdELE9BSkQ7QUFLQSxXQUFLUyxPQUFMLENBQWEsc0JBQWIsRUFBcUNDLElBQXJDLENBQTBDLFVBQVVDLElBQVYsRUFBZ0I7QUFDeERILGNBQU1JLE9BQU4sQ0FBYztBQUNaakIsc0JBQVlnQixLQUFLWCxLQUFMLElBQWM7QUFEZCxTQUFkO0FBR0QsT0FKRDtBQUtEO0FBakJNO0FBN0NHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBpbmFjdGl2ZTogQm9vbGVhbixcclxuICAgIHBlcmNlbnRhZ2U6IE51bWJlcixcclxuICAgIHBpdm90VGV4dDogU3RyaW5nLFxyXG4gICAgcGl2b3RDb2xvcjogU3RyaW5nLFxyXG4gICAgc2hvd1Bpdm90OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJyMzOGYnXHJcbiAgICB9LFxyXG4gICAgdGV4dENvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcjZmZmJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgcGl2b3RXaWR0aDogMCxcclxuICAgIHByb2dyZXNzV2lkdGg6IDBcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBwaXZvdFRleHQ6ICdnZXRXaWR0aCcsXHJcbiAgICBzaG93UGl2b3Q6ICdnZXRXaWR0aCdcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwb3J0aW9uU3R5bGU6IGZ1bmN0aW9uIHBvcnRpb25TdHlsZSgpIHtcclxuICAgICAgdmFyIHdpZHRoID0gKHRoaXMuZGF0YS5wcm9ncmVzc1dpZHRoIC0gdGhpcy5kYXRhLnBpdm90V2lkdGgpICogdGhpcy5kYXRhLnBlcmNlbnRhZ2UgLyAxMDAgKyAncHgnO1xyXG4gICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XHJcbiAgICAgIHJldHVybiBcIndpZHRoOiBcIiArIHdpZHRoICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZCArIFwiOyBcIjtcclxuICAgIH0sXHJcbiAgICBwaXZvdFN0eWxlOiBmdW5jdGlvbiBwaXZvdFN0eWxlKCkge1xyXG4gICAgICB2YXIgY29sb3IgPSB0aGlzLmRhdGEudGV4dENvbG9yO1xyXG4gICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuZGF0YS5waXZvdENvbG9yIHx8IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XHJcbiAgICAgIHJldHVybiBcImNvbG9yOiBcIiArIGNvbG9yICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZDtcclxuICAgIH0sXHJcbiAgICB0ZXh0OiBmdW5jdGlvbiB0ZXh0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhLnBpdm90VGV4dCB8fCB0aGlzLmRhdGEucGVyY2VudGFnZSArICclJztcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldFdpZHRoKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRDdXJyZW50Q29sb3I6IGZ1bmN0aW9uIGdldEN1cnJlbnRDb2xvcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pbmFjdGl2ZSA/ICcjY2FjYWNhJyA6IHRoaXMuZGF0YS5jb2xvcjtcclxuICAgIH0sXHJcbiAgICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tcHJvZ3Jlc3MnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwcm9ncmVzc1dpZHRoOiByZWN0LndpZHRoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tcHJvZ3Jlc3NfX3Bpdm90JykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGl2b3RXaWR0aDogcmVjdC53aWR0aCB8fCAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/progress/index.js");
 		__wxRoute = 'components/vant/radio-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/radio-group/index.js';	define("components/vant/radio-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio',
    type: 'descendant',
    linked: function linked(target) {
      var _this$data = this.data,
          value = _this$data.value,
          disabled = _this$data.disabled;
      target.setData({
        value: value,
        disabled: disabled || target.data.disabled
      });
    }
  },
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      var children = this.getRelationNodes('../radio/index');
      children.forEach(function (child) {
        child.setData({
          value: _value
        });
      });
    },
    disabled: function disabled(_disabled) {
      var children = this.getRelationNodes('../radio/index');
      children.forEach(function (child) {
        child.setData({
          disabled: _disabled || child.data.disabled
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldERhdGEiLCJwcm9wcyIsIkJvb2xlYW4iLCJ3YXRjaCIsIl92YWx1ZSIsImNoaWxkcmVuIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJjaGlsZCIsIl9kaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsWUFBVTtBQUNSQyxVQUFNLE9BREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lDLFFBQVFGLFdBQVdFLEtBRHZCO0FBQUEsVUFFSUMsV0FBV0gsV0FBV0csUUFGMUI7QUFHQUosYUFBT0ssT0FBUCxDQUFlO0FBQ2JGLGVBQU9BLEtBRE07QUFFYkMsa0JBQVVBLFlBQVlKLE9BQU9FLElBQVAsQ0FBWUU7QUFGckIsT0FBZjtBQUlEO0FBWE8sR0FGRTtBQWVaRSxTQUFPO0FBQ0xILFdBQU8sSUFERjtBQUVMQyxjQUFVRztBQUZMLEdBZks7QUFtQlpDLFNBQU87QUFDTEwsV0FBTyxTQUFTQSxLQUFULENBQWVNLE1BQWYsRUFBdUI7QUFDNUIsVUFBSUMsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixnQkFBdEIsQ0FBZjtBQUNBRCxlQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDaENBLGNBQU1SLE9BQU4sQ0FBYztBQUNaRixpQkFBT007QUFESyxTQUFkO0FBR0QsT0FKRDtBQUtELEtBUkk7QUFTTEwsY0FBVSxTQUFTQSxRQUFULENBQWtCVSxTQUFsQixFQUE2QjtBQUNyQyxVQUFJSixXQUFXLEtBQUtDLGdCQUFMLENBQXNCLGdCQUF0QixDQUFmO0FBQ0FELGVBQVNFLE9BQVQsQ0FBaUIsVUFBVUMsS0FBVixFQUFpQjtBQUNoQ0EsY0FBTVIsT0FBTixDQUFjO0FBQ1pELG9CQUFVVSxhQUFhRCxNQUFNWCxJQUFOLENBQVdFO0FBRHRCLFNBQWQ7QUFHRCxPQUpEO0FBS0Q7QUFoQkk7QUFuQkssQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgZmllbGQ6IHRydWUsXHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICdyYWRpbycsXHJcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJGRhdGEudmFsdWUsXHJcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJGRhdGEuZGlzYWJsZWQ7XHJcbiAgICAgIHRhcmdldC5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IHRhcmdldC5kYXRhLmRpc2FibGVkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW5cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XHJcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vcmFkaW8vaW5kZXgnKTtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5zZXREYXRhKHtcclxuICAgICAgICAgIHZhbHVlOiBfdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IGZ1bmN0aW9uIGRpc2FibGVkKF9kaXNhYmxlZCkge1xyXG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvL2luZGV4Jyk7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBkaXNhYmxlZDogX2Rpc2FibGVkIHx8IGNoaWxkLmRhdGEuZGlzYWJsZWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/radio-group/index.js");
 		__wxRoute = 'components/vant/radio/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/radio/index.js';	define("components/vant/radio/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio-group',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String
  },
  computed: {
    iconClass: function iconClass() {
      var _this$data = this.data,
          disabled = _this$data.disabled,
          name = _this$data.name,
          value = _this$data.value;
      return this.classNames('van-radio__icon', {
        'van-radio__icon--disabled': disabled,
        'van-radio__icon--checked': !disabled && name === value,
        'van-radio__icon--check': !disabled && name !== value
      });
    }
  },
  methods: {
    emitChange: function emitChange(value) {
      var instance = this.getRelationNodes('../radio-group/index')[0] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },
    onChange: function onChange(event) {
      this.emitChange(event.detail.value);
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(this.data.name);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJjb21wdXRlZCIsImljb25DbGFzcyIsIl90aGlzJGRhdGEiLCJkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwiaW5zdGFuY2UiLCJnZXRSZWxhdGlvbk5vZGVzIiwiJGVtaXQiLCJvbkNoYW5nZSIsImV2ZW50IiwiZGV0YWlsIiwib25DbGlja0xhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sYUFERTtBQUVSQyxVQUFNO0FBRkUsR0FGRTtBQU1aQyxXQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FORztBQU9aQyxTQUFPO0FBQ0xILFVBQU0sSUFERDtBQUVMSSxXQUFPLElBRkY7QUFHTEMsY0FBVUMsT0FITDtBQUlMQyxtQkFBZUQsT0FKVjtBQUtMRSxtQkFBZUM7QUFMVixHQVBLO0FBY1pDLFlBQVU7QUFDUkMsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlDLGFBQWEsS0FBS0MsSUFBdEI7QUFBQSxVQUNJUixXQUFXTyxXQUFXUCxRQUQxQjtBQUFBLFVBRUlMLE9BQU9ZLFdBQVdaLElBRnRCO0FBQUEsVUFHSUksUUFBUVEsV0FBV1IsS0FIdkI7QUFJQSxhQUFPLEtBQUtVLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DO0FBQ3hDLHFDQUE2QlQsUUFEVztBQUV4QyxvQ0FBNEIsQ0FBQ0EsUUFBRCxJQUFhTCxTQUFTSSxLQUZWO0FBR3hDLGtDQUEwQixDQUFDQyxRQUFELElBQWFMLFNBQVNJO0FBSFIsT0FBbkMsQ0FBUDtBQUtEO0FBWE8sR0FkRTtBQTJCWlcsV0FBUztBQUNQQyxnQkFBWSxTQUFTQSxVQUFULENBQW9CWixLQUFwQixFQUEyQjtBQUNyQyxVQUFJYSxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxLQUFvRCxJQUFuRTtBQUNBRCxlQUFTRSxLQUFULENBQWUsT0FBZixFQUF3QmYsS0FBeEI7QUFDQWEsZUFBU0UsS0FBVCxDQUFlLFFBQWYsRUFBeUJmLEtBQXpCO0FBQ0QsS0FMTTtBQU1QZ0IsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLTCxVQUFMLENBQWdCSyxNQUFNQyxNQUFOLENBQWFsQixLQUE3QjtBQUNELEtBUk07QUFTUG1CLGtCQUFjLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEMsVUFBSSxDQUFDLEtBQUtWLElBQUwsQ0FBVVIsUUFBWCxJQUF1QixDQUFDLEtBQUtRLElBQUwsQ0FBVU4sYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS1MsVUFBTCxDQUFnQixLQUFLSCxJQUFMLENBQVViLElBQTFCO0FBQ0Q7QUFDRjtBQWJNO0FBM0JHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGZpZWxkOiB0cnVlLFxyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAncmFkaW8tZ3JvdXAnLFxyXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gIH0sXHJcbiAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcclxuICAgIGxhYmVsUG9zaXRpb246IFN0cmluZ1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGljb25DbGFzczogZnVuY3Rpb24gaWNvbkNsYXNzKCkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZCxcclxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRkYXRhLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJGRhdGEudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ3Zhbi1yYWRpb19faWNvbicsIHtcclxuICAgICAgICAndmFuLXJhZGlvX19pY29uLS1kaXNhYmxlZCc6IGRpc2FibGVkLFxyXG4gICAgICAgICd2YW4tcmFkaW9fX2ljb24tLWNoZWNrZWQnOiAhZGlzYWJsZWQgJiYgbmFtZSA9PT0gdmFsdWUsXHJcbiAgICAgICAgJ3Zhbi1yYWRpb19faWNvbi0tY2hlY2snOiAhZGlzYWJsZWQgJiYgbmFtZSAhPT0gdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiBlbWl0Q2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vcmFkaW8tZ3JvdXAvaW5kZXgnKVswXSB8fCB0aGlzO1xyXG4gICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XHJcbiAgICAgIGluc3RhbmNlLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdENoYW5nZShldmVudC5kZXRhaWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tMYWJlbDogZnVuY3Rpb24gb25DbGlja0xhYmVsKCkge1xyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCAmJiAhdGhpcy5kYXRhLmxhYmVsRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy5kYXRhLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/radio/index.js");
 		__wxRoute = 'components/vant/row/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/row/index.js';	define("components/vant/row/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'col',
    type: 'descendant',
    linked: function linked(target) {
      if (this.data.gutter) {
        target.setGutter(this.data.gutter);
      }
    }
  },
  props: {
    gutter: Number
  },
  watch: {
    gutter: 'setGutter'
  },
  mounted: function mounted() {
    if (this.data.gutter) {
      this.setGutter();
    }
  },
  methods: {
    setGutter: function setGutter() {
      var _this = this;

      var gutter = this.data.gutter;
      var margin = "-" + Number(gutter) / 2 + "px";
      var style = gutter ? "margin-right: " + margin + "; margin-left: " + margin + ";" : '';
      this.setData({
        style: style
      });
      this.getRelationNodes('../col/index').forEach(function (col) {
        col.setGutter(_this.data.gutter);
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiZ3V0dGVyIiwic2V0R3V0dGVyIiwicHJvcHMiLCJOdW1iZXIiLCJ3YXRjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiX3RoaXMiLCJtYXJnaW4iLCJzdHlsZSIsInNldERhdGEiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sS0FERTtBQUVSQyxVQUFNLFlBRkU7QUFHUkMsWUFBUSxTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM5QixVQUFJLEtBQUtDLElBQUwsQ0FBVUMsTUFBZCxFQUFzQjtBQUNwQkYsZUFBT0csU0FBUCxDQUFpQixLQUFLRixJQUFMLENBQVVDLE1BQTNCO0FBQ0Q7QUFDRjtBQVBPLEdBREU7QUFVWkUsU0FBTztBQUNMRixZQUFRRztBQURILEdBVks7QUFhWkMsU0FBTztBQUNMSixZQUFRO0FBREgsR0FiSztBQWdCWkssV0FBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksS0FBS04sSUFBTCxDQUFVQyxNQUFkLEVBQXNCO0FBQ3BCLFdBQUtDLFNBQUw7QUFDRDtBQUNGLEdBcEJXO0FBcUJaSyxXQUFTO0FBQ1BMLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixVQUFJTSxRQUFRLElBQVo7O0FBRUEsVUFBSVAsU0FBUyxLQUFLRCxJQUFMLENBQVVDLE1BQXZCO0FBQ0EsVUFBSVEsU0FBUyxNQUFNTCxPQUFPSCxNQUFQLElBQWlCLENBQXZCLEdBQTJCLElBQXhDO0FBQ0EsVUFBSVMsUUFBUVQsU0FBUyxtQkFBbUJRLE1BQW5CLEdBQTRCLGlCQUE1QixHQUFnREEsTUFBaEQsR0FBeUQsR0FBbEUsR0FBd0UsRUFBcEY7QUFDQSxXQUFLRSxPQUFMLENBQWE7QUFDWEQsZUFBT0E7QUFESSxPQUFiO0FBR0EsV0FBS0UsZ0JBQUwsQ0FBc0IsY0FBdEIsRUFBc0NDLE9BQXRDLENBQThDLFVBQVVDLEdBQVYsRUFBZTtBQUMzREEsWUFBSVosU0FBSixDQUFjTSxNQUFNUixJQUFOLENBQVdDLE1BQXpCO0FBQ0QsT0FGRDtBQUdEO0FBYk07QUFyQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICdjb2wnLFxyXG4gICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgbGlua2VkOiBmdW5jdGlvbiBsaW5rZWQodGFyZ2V0KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LnNldEd1dHRlcih0aGlzLmRhdGEuZ3V0dGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGd1dHRlcjogTnVtYmVyXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgZ3V0dGVyOiAnc2V0R3V0dGVyJ1xyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XHJcbiAgICAgIHRoaXMuc2V0R3V0dGVyKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzZXRHdXR0ZXI6IGZ1bmN0aW9uIHNldEd1dHRlcigpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHZhciBndXR0ZXIgPSB0aGlzLmRhdGEuZ3V0dGVyO1xyXG4gICAgICB2YXIgbWFyZ2luID0gXCItXCIgKyBOdW1iZXIoZ3V0dGVyKSAvIDIgKyBcInB4XCI7XHJcbiAgICAgIHZhciBzdHlsZSA9IGd1dHRlciA/IFwibWFyZ2luLXJpZ2h0OiBcIiArIG1hcmdpbiArIFwiOyBtYXJnaW4tbGVmdDogXCIgKyBtYXJnaW4gKyBcIjtcIiA6ICcnO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHN0eWxlOiBzdHlsZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jb2wvaW5kZXgnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICBjb2wuc2V0R3V0dGVyKF90aGlzLmRhdGEuZ3V0dGVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/row/index.js");
 		__wxRoute = 'components/vant/search/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/search/index.js';	define("components/vant/search/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['cancel-class'],
  props: {
    focus: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.setData({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },
    onCancel: function onCancel() {
      this.setData({
        value: ''
      });
      this.$emit('cancel');
      this.$emit('change', '');
    },
    onSearch: function onSearch() {
      this.$emit('search', this.data.value);
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiZm9jdXMiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsInNob3dBY3Rpb24iLCJ1c2VBY3Rpb25TbG90IiwicGxhY2Vob2xkZXIiLCJTdHJpbmciLCJiYWNrZ3JvdW5kIiwidHlwZSIsInZhbHVlIiwibWF4bGVuZ3RoIiwiTnVtYmVyIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXREYXRhIiwiZGV0YWlsIiwiJGVtaXQiLCJvbkNhbmNlbCIsIm9uU2VhcmNoIiwiZGF0YSIsIm9uRm9jdXMiLCJvbkJsdXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTyxJQURLO0FBRVpDLFdBQVMsQ0FBQyxjQUFELENBRkc7QUFHWkMsU0FBTztBQUNMQyxXQUFPQyxPQURGO0FBRUxDLGNBQVVELE9BRkw7QUFHTEUsY0FBVUYsT0FITDtBQUlMRyxnQkFBWUgsT0FKUDtBQUtMSSxtQkFBZUosT0FMVjtBQU1MSyxpQkFBYUMsTUFOUjtBQU9MQyxnQkFBWTtBQUNWQyxZQUFNRixNQURJO0FBRVZHLGFBQU87QUFGRyxLQVBQO0FBV0xDLGVBQVc7QUFDVEYsWUFBTUcsTUFERztBQUVURixhQUFPLENBQUM7QUFGQztBQVhOLEdBSEs7QUFtQlpHLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLQyxPQUFMLENBQWE7QUFDWE4sZUFBT0ssTUFBTUU7QUFERixPQUFiO0FBR0EsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJILE1BQU1FLE1BQTNCO0FBQ0QsS0FOTTtBQU9QRSxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0gsT0FBTCxDQUFhO0FBQ1hOLGVBQU87QUFESSxPQUFiO0FBR0EsV0FBS1EsS0FBTCxDQUFXLFFBQVg7QUFDQSxXQUFLQSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNELEtBYk07QUFjUEUsY0FBVSxTQUFTQSxRQUFULEdBQW9CO0FBQzVCLFdBQUtGLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtHLElBQUwsQ0FBVVgsS0FBL0I7QUFDRCxLQWhCTTtBQWlCUFksYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtKLEtBQUwsQ0FBVyxPQUFYO0FBQ0QsS0FuQk07QUFvQlBLLFlBQVEsU0FBU0EsTUFBVCxHQUFrQjtBQUN4QixXQUFLTCxLQUFMLENBQVcsTUFBWDtBQUNEO0FBdEJNO0FBbkJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGZpZWxkOiB0cnVlLFxyXG4gIGNsYXNzZXM6IFsnY2FuY2VsLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIGZvY3VzOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgIHNob3dBY3Rpb246IEJvb2xlYW4sXHJcbiAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJyNmMmYyZjInXHJcbiAgICB9LFxyXG4gICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IC0xXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogZXZlbnQuZGV0YWlsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAnJyk7XHJcbiAgICB9LFxyXG4gICAgb25TZWFyY2g6IGZ1bmN0aW9uIG9uU2VhcmNoKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJyk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/search/index.js");
 		__wxRoute = 'components/vant/slider/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/slider/index.js';	define("components/vant/slider/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

(0, _component.VantComponent)({
  mixins: [_touch.touch],
  props: {
    disabled: Boolean,
    max: {
      type: Number,
      value: 100
    },
    min: {
      type: Number,
      value: 0
    },
    step: {
      type: Number,
      value: 1
    },
    value: {
      type: Number,
      value: 0
    },
    barHeight: {
      type: String,
      value: '2px'
    }
  },
  created: function created() {
    this.updateValue(this.data.value);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.data.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.data.value);
    },
    onTouchMove: function onTouchMove(event) {
      var _this = this;

      if (this.data.disabled) return;
      this.touchMove(event);
      this.getRect('.van-slider').then(function (rect) {
        var diff = _this.deltaX / rect.width * 100;

        _this.updateValue(_this.startValue + diff);
      });
    },
    onTouchEnd: function onTouchEnd() {
      if (this.data.disabled) return;
      this.updateValue(this.data.value, true);
    },
    onClick: function onClick(event) {
      var _this2 = this;

      if (this.data.disabled) return;
      this.getRect(function (rect) {
        var value = (event.detail.x - rect.left) / rect.width * 100;

        _this2.updateValue(value, true);
      });
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.setData({
        value: value,
        barStyle: "width: " + value + "%; height: " + this.data.barHeight + ";"
      });

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      var _this$data = this.data,
          max = _this$data.max,
          min = _this$data.min,
          step = _this$data.step;
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJtYXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtaW4iLCJzdGVwIiwiYmFySGVpZ2h0IiwiU3RyaW5nIiwiY3JlYXRlZCIsInVwZGF0ZVZhbHVlIiwiZGF0YSIsIm1ldGhvZHMiLCJvblRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoU3RhcnQiLCJzdGFydFZhbHVlIiwiZm9ybWF0Iiwib25Ub3VjaE1vdmUiLCJfdGhpcyIsInRvdWNoTW92ZSIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsImRpZmYiLCJkZWx0YVgiLCJ3aWR0aCIsIm9uVG91Y2hFbmQiLCJvbkNsaWNrIiwiX3RoaXMyIiwiZGV0YWlsIiwieCIsImxlZnQiLCJlbmQiLCJzZXREYXRhIiwiYmFyU3R5bGUiLCIkZW1pdCIsIl90aGlzJGRhdGEiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDQyxZQUFELENBREk7QUFFWkMsU0FBTztBQUNMQyxjQUFVQyxPQURMO0FBRUxDLFNBQUs7QUFDSEMsWUFBTUMsTUFESDtBQUVIQyxhQUFPO0FBRkosS0FGQTtBQU1MQyxTQUFLO0FBQ0hILFlBQU1DLE1BREg7QUFFSEMsYUFBTztBQUZKLEtBTkE7QUFVTEUsVUFBTTtBQUNKSixZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQVZEO0FBY0xBLFdBQU87QUFDTEYsWUFBTUMsTUFERDtBQUVMQyxhQUFPO0FBRkYsS0FkRjtBQWtCTEcsZUFBVztBQUNUTCxZQUFNTSxNQURHO0FBRVRKLGFBQU87QUFGRTtBQWxCTixHQUZLO0FBeUJaSyxXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsV0FBTCxDQUFpQixLQUFLQyxJQUFMLENBQVVQLEtBQTNCO0FBQ0QsR0EzQlc7QUE0QlpRLFdBQVM7QUFDUEMsa0JBQWMsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDekMsVUFBSSxLQUFLSCxJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDeEIsV0FBS2dCLFVBQUwsQ0FBZ0JELEtBQWhCO0FBQ0EsV0FBS0UsVUFBTCxHQUFrQixLQUFLQyxNQUFMLENBQVksS0FBS04sSUFBTCxDQUFVUCxLQUF0QixDQUFsQjtBQUNELEtBTE07QUFNUGMsaUJBQWEsU0FBU0EsV0FBVCxDQUFxQkosS0FBckIsRUFBNEI7QUFDdkMsVUFBSUssUUFBUSxJQUFaOztBQUVBLFVBQUksS0FBS1IsSUFBTCxDQUFVWixRQUFkLEVBQXdCO0FBQ3hCLFdBQUtxQixTQUFMLENBQWVOLEtBQWY7QUFDQSxXQUFLTyxPQUFMLENBQWEsYUFBYixFQUE0QkMsSUFBNUIsQ0FBaUMsVUFBVUMsSUFBVixFQUFnQjtBQUMvQyxZQUFJQyxPQUFPTCxNQUFNTSxNQUFOLEdBQWVGLEtBQUtHLEtBQXBCLEdBQTRCLEdBQXZDOztBQUVBUCxjQUFNVCxXQUFOLENBQWtCUyxNQUFNSCxVQUFOLEdBQW1CUSxJQUFyQztBQUNELE9BSkQ7QUFLRCxLQWhCTTtBQWlCUEcsZ0JBQVksU0FBU0EsVUFBVCxHQUFzQjtBQUNoQyxVQUFJLEtBQUtoQixJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDeEIsV0FBS1csV0FBTCxDQUFpQixLQUFLQyxJQUFMLENBQVVQLEtBQTNCLEVBQWtDLElBQWxDO0FBQ0QsS0FwQk07QUFxQlB3QixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJkLEtBQWpCLEVBQXdCO0FBQy9CLFVBQUllLFNBQVMsSUFBYjs7QUFFQSxVQUFJLEtBQUtsQixJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDeEIsV0FBS3NCLE9BQUwsQ0FBYSxVQUFVRSxJQUFWLEVBQWdCO0FBQzNCLFlBQUluQixRQUFRLENBQUNVLE1BQU1nQixNQUFOLENBQWFDLENBQWIsR0FBaUJSLEtBQUtTLElBQXZCLElBQStCVCxLQUFLRyxLQUFwQyxHQUE0QyxHQUF4RDs7QUFFQUcsZUFBT25CLFdBQVAsQ0FBbUJOLEtBQW5CLEVBQTBCLElBQTFCO0FBQ0QsT0FKRDtBQUtELEtBOUJNO0FBK0JQTSxpQkFBYSxTQUFTQSxXQUFULENBQXFCTixLQUFyQixFQUE0QjZCLEdBQTVCLEVBQWlDO0FBQzVDN0IsY0FBUSxLQUFLYSxNQUFMLENBQVliLEtBQVosQ0FBUjtBQUNBLFdBQUs4QixPQUFMLENBQWE7QUFDWDlCLGVBQU9BLEtBREk7QUFFWCtCLGtCQUFVLFlBQVkvQixLQUFaLEdBQW9CLGFBQXBCLEdBQW9DLEtBQUtPLElBQUwsQ0FBVUosU0FBOUMsR0FBMEQ7QUFGekQsT0FBYjs7QUFLQSxVQUFJMEIsR0FBSixFQUFTO0FBQ1AsYUFBS0csS0FBTCxDQUFXLFFBQVgsRUFBcUJoQyxLQUFyQjtBQUNEO0FBQ0YsS0F6Q007QUEwQ1BhLFlBQVEsU0FBU0EsTUFBVCxDQUFnQmIsS0FBaEIsRUFBdUI7QUFDN0IsVUFBSWlDLGFBQWEsS0FBSzFCLElBQXRCO0FBQUEsVUFDSVYsTUFBTW9DLFdBQVdwQyxHQURyQjtBQUFBLFVBRUlJLE1BQU1nQyxXQUFXaEMsR0FGckI7QUFBQSxVQUdJQyxPQUFPK0IsV0FBVy9CLElBSHRCO0FBSUEsYUFBT2dDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS3JDLEdBQUwsQ0FBU0ksR0FBVCxFQUFjaUMsS0FBS2pDLEdBQUwsQ0FBU0QsS0FBVCxFQUFnQkgsR0FBaEIsQ0FBZCxJQUFzQ0ssSUFBakQsSUFBeURBLElBQWhFO0FBQ0Q7QUFoRE07QUE1QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi9taXhpbnMvdG91Y2gnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFt0b3VjaF0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgbWF4OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDEwMFxyXG4gICAgfSxcclxuICAgIG1pbjoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgc3RlcDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9LFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIGJhckhlaWdodDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnMnB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcclxuICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5mb3JtYXQodGhpcy5kYXRhLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tc2xpZGVyJykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIHZhciBkaWZmID0gX3RoaXMuZGVsdGFYIC8gcmVjdC53aWR0aCAqIDEwMDtcclxuXHJcbiAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUoX3RoaXMuc3RhcnRWYWx1ZSArIGRpZmYpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRhLnZhbHVlLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmdldFJlY3QoZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAoZXZlbnQuZGV0YWlsLnggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCAqIDEwMDtcclxuXHJcbiAgICAgICAgX3RoaXMyLnVwZGF0ZVZhbHVlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHZhbHVlLCBlbmQpIHtcclxuICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIGJhclN0eWxlOiBcIndpZHRoOiBcIiArIHZhbHVlICsgXCIlOyBoZWlnaHQ6IFwiICsgdGhpcy5kYXRhLmJhckhlaWdodCArIFwiO1wiXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVuZCkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XHJcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxyXG4gICAgICAgICAgbWF4ID0gX3RoaXMkZGF0YS5tYXgsXHJcbiAgICAgICAgICBtaW4gPSBfdGhpcyRkYXRhLm1pbixcclxuICAgICAgICAgIHN0ZXAgPSBfdGhpcyRkYXRhLnN0ZXA7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpIC8gc3RlcCkgKiBzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/slider/index.js");
 		__wxRoute = 'components/vant/stepper/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/stepper/index.js';	define("components/vant/stepper/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

// Note that the bitwise operators and shift operators operate on 32-bit ints
// so in that case, the max safe integer is 2^31-1, or 2147483647

var MAX = 2147483647;
(0, _component.VantComponent)({
  field: true,
  classes: ['input-class', 'plus-class', 'minus-class'],
  props: {
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: MAX
    },
    step: {
      type: null,
      value: 1
    }
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.data.disabled || this.data.value <= this.data.min;
    },
    plusDisabled: function plusDisabled() {
      return this.data.disabled || this.data.value >= this.data.max;
    }
  },
  created: function created() {
    this.setData({
      value: this.range(this.data.value)
    });
  },
  methods: {
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.data.max, value), this.data.min);
    },
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value;

      this.triggerInput(value);
    },
    onChange: function onChange(type) {
      if (this.data[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.data.step : +this.data.step;
      var value = Math.round((this.data.value + diff) * 100) / 100;
      this.triggerInput(this.range(value));
      this.$emit(type);
    },
    onBlur: function onBlur(event) {
      var value = this.range(this.data.value);
      this.triggerInput(value);
      this.$emit('blur', event);
    },
    onMinus: function onMinus() {
      this.onChange('minus');
    },
    onPlus: function onPlus() {
      this.onChange('plus');
    },
    triggerInput: function triggerInput(value) {
      this.setData({
        value: value
      });
      this.$emit('change', value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1BWCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiaW50ZWdlciIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImRpc2FibGVJbnB1dCIsIm1pbiIsInR5cGUiLCJ2YWx1ZSIsIm1heCIsInN0ZXAiLCJjb21wdXRlZCIsIm1pbnVzRGlzYWJsZWQiLCJkYXRhIiwicGx1c0Rpc2FibGVkIiwiY3JlYXRlZCIsInNldERhdGEiLCJyYW5nZSIsIm1ldGhvZHMiLCJNYXRoIiwib25JbnB1dCIsImV2ZW50IiwiX3JlZiIsImRldGFpbCIsIl9yZWYkdmFsdWUiLCJ0cmlnZ2VySW5wdXQiLCJvbkNoYW5nZSIsIiRlbWl0IiwiZGlmZiIsInJvdW5kIiwib25CbHVyIiwib25NaW51cyIsIm9uUGx1cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFBcUQ7QUFDckQ7O0FBRUEsSUFBSUEsTUFBTSxVQUFWO0FBQ0EsOEJBQWM7QUFDWkMsU0FBTyxJQURLO0FBRVpDLFdBQVMsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLEVBQThCLGFBQTlCLENBRkc7QUFHWkMsU0FBTztBQUNMQyxhQUFTQyxPQURKO0FBRUxDLGNBQVVELE9BRkw7QUFHTEUsa0JBQWNGLE9BSFQ7QUFJTEcsU0FBSztBQUNIQyxZQUFNLElBREg7QUFFSEMsYUFBTztBQUZKLEtBSkE7QUFRTEMsU0FBSztBQUNIRixZQUFNLElBREg7QUFFSEMsYUFBT1Y7QUFGSixLQVJBO0FBWUxZLFVBQU07QUFDSkgsWUFBTSxJQURGO0FBRUpDLGFBQU87QUFGSDtBQVpELEdBSEs7QUFvQlpHLFlBQVU7QUFDUkMsbUJBQWUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxhQUFPLEtBQUtDLElBQUwsQ0FBVVQsUUFBVixJQUFzQixLQUFLUyxJQUFMLENBQVVMLEtBQVYsSUFBbUIsS0FBS0ssSUFBTCxDQUFVUCxHQUExRDtBQUNELEtBSE87QUFJUlEsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxhQUFPLEtBQUtELElBQUwsQ0FBVVQsUUFBVixJQUFzQixLQUFLUyxJQUFMLENBQVVMLEtBQVYsSUFBbUIsS0FBS0ssSUFBTCxDQUFVSixHQUExRDtBQUNEO0FBTk8sR0FwQkU7QUE0QlpNLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLQyxPQUFMLENBQWE7QUFDWFIsYUFBTyxLQUFLUyxLQUFMLENBQVcsS0FBS0osSUFBTCxDQUFVTCxLQUFyQjtBQURJLEtBQWI7QUFHRCxHQWhDVztBQWlDWlUsV0FBUztBQUNQO0FBQ0FELFdBQU8sU0FBU0EsS0FBVCxDQUFlVCxLQUFmLEVBQXNCO0FBQzNCLGFBQU9XLEtBQUtWLEdBQUwsQ0FBU1UsS0FBS2IsR0FBTCxDQUFTLEtBQUtPLElBQUwsQ0FBVUosR0FBbkIsRUFBd0JELEtBQXhCLENBQVQsRUFBeUMsS0FBS0ssSUFBTCxDQUFVUCxHQUFuRCxDQUFQO0FBQ0QsS0FKTTtBQUtQYyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQy9CLFVBQUlDLE9BQU9ELE1BQU1FLE1BQU4sSUFBZ0IsRUFBM0I7QUFBQSxVQUNJQyxhQUFhRixLQUFLZCxLQUR0QjtBQUFBLFVBRUlBLFFBQVFnQixlQUFlLEtBQUssQ0FBcEIsR0FBd0IsRUFBeEIsR0FBNkJBLFVBRnpDOztBQUlBLFdBQUtDLFlBQUwsQ0FBa0JqQixLQUFsQjtBQUNELEtBWE07QUFZUGtCLGNBQVUsU0FBU0EsUUFBVCxDQUFrQm5CLElBQWxCLEVBQXdCO0FBQ2hDLFVBQUksS0FBS00sSUFBTCxDQUFVTixPQUFPLFVBQWpCLENBQUosRUFBa0M7QUFDaEMsYUFBS29CLEtBQUwsQ0FBVyxXQUFYLEVBQXdCcEIsSUFBeEI7QUFDQTtBQUNEOztBQUVELFVBQUlxQixPQUFPckIsU0FBUyxPQUFULEdBQW1CLENBQUMsS0FBS00sSUFBTCxDQUFVSCxJQUE5QixHQUFxQyxDQUFDLEtBQUtHLElBQUwsQ0FBVUgsSUFBM0Q7QUFDQSxVQUFJRixRQUFRVyxLQUFLVSxLQUFMLENBQVcsQ0FBQyxLQUFLaEIsSUFBTCxDQUFVTCxLQUFWLEdBQWtCb0IsSUFBbkIsSUFBMkIsR0FBdEMsSUFBNkMsR0FBekQ7QUFDQSxXQUFLSCxZQUFMLENBQWtCLEtBQUtSLEtBQUwsQ0FBV1QsS0FBWCxDQUFsQjtBQUNBLFdBQUttQixLQUFMLENBQVdwQixJQUFYO0FBQ0QsS0F0Qk07QUF1QlB1QixZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JULEtBQWhCLEVBQXVCO0FBQzdCLFVBQUliLFFBQVEsS0FBS1MsS0FBTCxDQUFXLEtBQUtKLElBQUwsQ0FBVUwsS0FBckIsQ0FBWjtBQUNBLFdBQUtpQixZQUFMLENBQWtCakIsS0FBbEI7QUFDQSxXQUFLbUIsS0FBTCxDQUFXLE1BQVgsRUFBbUJOLEtBQW5CO0FBQ0QsS0EzQk07QUE0QlBVLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLTCxRQUFMLENBQWMsT0FBZDtBQUNELEtBOUJNO0FBK0JQTSxZQUFRLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsV0FBS04sUUFBTCxDQUFjLE1BQWQ7QUFDRCxLQWpDTTtBQWtDUEQsa0JBQWMsU0FBU0EsWUFBVCxDQUFzQmpCLEtBQXRCLEVBQTZCO0FBQ3pDLFdBQUtRLE9BQUwsQ0FBYTtBQUNYUixlQUFPQTtBQURJLE9BQWI7QUFHQSxXQUFLbUIsS0FBTCxDQUFXLFFBQVgsRUFBcUJuQixLQUFyQjtBQUNEO0FBdkNNO0FBakNHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7IC8vIE5vdGUgdGhhdCB0aGUgYml0d2lzZSBvcGVyYXRvcnMgYW5kIHNoaWZ0IG9wZXJhdG9ycyBvcGVyYXRlIG9uIDMyLWJpdCBpbnRzXHJcbi8vIHNvIGluIHRoYXQgY2FzZSwgdGhlIG1heCBzYWZlIGludGVnZXIgaXMgMl4zMS0xLCBvciAyMTQ3NDgzNjQ3XHJcblxyXG52YXIgTUFYID0gMjE0NzQ4MzY0NztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgZmllbGQ6IHRydWUsXHJcbiAgY2xhc3NlczogWydpbnB1dC1jbGFzcycsICdwbHVzLWNsYXNzJywgJ21pbnVzLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIGludGVnZXI6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIGRpc2FibGVJbnB1dDogQm9vbGVhbixcclxuICAgIG1pbjoge1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfSxcclxuICAgIG1heDoge1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogTUFYXHJcbiAgICB9LFxyXG4gICAgc3RlcDoge1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIG1pbnVzRGlzYWJsZWQ6IGZ1bmN0aW9uIG1pbnVzRGlzYWJsZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZGlzYWJsZWQgfHwgdGhpcy5kYXRhLnZhbHVlIDw9IHRoaXMuZGF0YS5taW47XHJcbiAgICB9LFxyXG4gICAgcGx1c0Rpc2FibGVkOiBmdW5jdGlvbiBwbHVzRGlzYWJsZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZGlzYWJsZWQgfHwgdGhpcy5kYXRhLnZhbHVlID49IHRoaXMuZGF0YS5tYXg7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmFsdWU6IHRoaXMucmFuZ2UodGhpcy5kYXRhLnZhbHVlKVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBsaW1pdCB2YWx1ZSByYW5nZVxyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uIHJhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih0aGlzLmRhdGEubWF4LCB2YWx1ZSksIHRoaXMuZGF0YS5taW4pO1xyXG4gICAgfSxcclxuICAgIG9uSW5wdXQ6IGZ1bmN0aW9uIG9uSW5wdXQoZXZlbnQpIHtcclxuICAgICAgdmFyIF9yZWYgPSBldmVudC5kZXRhaWwgfHwge30sXHJcbiAgICAgICAgICBfcmVmJHZhbHVlID0gX3JlZi52YWx1ZSxcclxuICAgICAgICAgIHZhbHVlID0gX3JlZiR2YWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy50cmlnZ2VySW5wdXQodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0eXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFbdHlwZSArIFwiRGlzYWJsZWRcIl0pIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdvdmVybGltaXQnLCB0eXBlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBkaWZmID0gdHlwZSA9PT0gJ21pbnVzJyA/IC10aGlzLmRhdGEuc3RlcCA6ICt0aGlzLmRhdGEuc3RlcDtcclxuICAgICAgdmFyIHZhbHVlID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLnZhbHVlICsgZGlmZikgKiAxMDApIC8gMTAwO1xyXG4gICAgICB0aGlzLnRyaWdnZXJJbnB1dCh0aGlzLnJhbmdlKHZhbHVlKSk7XHJcbiAgICAgIHRoaXMuJGVtaXQodHlwZSk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoZXZlbnQpIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJJbnB1dCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudCk7XHJcbiAgICB9LFxyXG4gICAgb25NaW51czogZnVuY3Rpb24gb25NaW51cygpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSgnbWludXMnKTtcclxuICAgIH0sXHJcbiAgICBvblBsdXM6IGZ1bmN0aW9uIG9uUGx1cygpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSgncGx1cycpO1xyXG4gICAgfSxcclxuICAgIHRyaWdnZXJJbnB1dDogZnVuY3Rpb24gdHJpZ2dlcklucHV0KHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0= 
 			}); 	require("components/vant/stepper/index.js");
 		__wxRoute = 'components/vant/steps/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/steps/index.js';	define("components/vant/steps/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    icon: String,
    steps: Array,
    active: Number,
    direction: {
      type: String,
      value: 'horizontal'
    },
    activeColor: {
      type: String,
      value: '#06bf04'
    }
  },
  watch: {
    steps: 'formatSteps',
    active: 'formatSteps'
  },
  created: function created() {
    this.formatSteps();
  },
  methods: {
    formatSteps: function formatSteps() {
      var _this = this;

      var steps = this.data.steps;
      steps.forEach(function (step, index) {
        step.status = _this.getStatus(index);
      });
      this.setData({
        steps: steps
      });
    },
    getStatus: function getStatus(index) {
      var active = this.data.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }

      return '';
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaWNvbiIsIlN0cmluZyIsInN0ZXBzIiwiQXJyYXkiLCJhY3RpdmUiLCJOdW1iZXIiLCJkaXJlY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJhY3RpdmVDb2xvciIsIndhdGNoIiwiY3JlYXRlZCIsImZvcm1hdFN0ZXBzIiwibWV0aG9kcyIsIl90aGlzIiwiZGF0YSIsImZvckVhY2giLCJzdGVwIiwiaW5kZXgiLCJzdGF0dXMiLCJnZXRTdGF0dXMiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxXQUFPQyxLQUZGO0FBR0xDLFlBQVFDLE1BSEg7QUFJTEMsZUFBVztBQUNUQyxZQUFNTixNQURHO0FBRVRPLGFBQU87QUFGRSxLQUpOO0FBUUxDLGlCQUFhO0FBQ1hGLFlBQU1OLE1BREs7QUFFWE8sYUFBTztBQUZJO0FBUlIsR0FESztBQWNaRSxTQUFPO0FBQ0xSLFdBQU8sYUFERjtBQUVMRSxZQUFRO0FBRkgsR0FkSztBQWtCWk8sV0FBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtDLFdBQUw7QUFDRCxHQXBCVztBQXFCWkMsV0FBUztBQUNQRCxpQkFBYSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLFVBQUlFLFFBQVEsSUFBWjs7QUFFQSxVQUFJWixRQUFRLEtBQUthLElBQUwsQ0FBVWIsS0FBdEI7QUFDQUEsWUFBTWMsT0FBTixDQUFjLFVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ25DRCxhQUFLRSxNQUFMLEdBQWNMLE1BQU1NLFNBQU4sQ0FBZ0JGLEtBQWhCLENBQWQ7QUFDRCxPQUZEO0FBR0EsV0FBS0csT0FBTCxDQUFhO0FBQ1huQixlQUFPQTtBQURJLE9BQWI7QUFHRCxLQVhNO0FBWVBrQixlQUFXLFNBQVNBLFNBQVQsQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQ25DLFVBQUlkLFNBQVMsS0FBS1csSUFBTCxDQUFVWCxNQUF2Qjs7QUFFQSxVQUFJYyxRQUFRZCxNQUFaLEVBQW9CO0FBQ2xCLGVBQU8sUUFBUDtBQUNELE9BRkQsTUFFTyxJQUFJYyxVQUFVZCxNQUFkLEVBQXNCO0FBQzNCLGVBQU8sU0FBUDtBQUNEOztBQUVELGFBQU8sRUFBUDtBQUNEO0FBdEJNO0FBckJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBpY29uOiBTdHJpbmcsXHJcbiAgICBzdGVwczogQXJyYXksXHJcbiAgICBhY3RpdmU6IE51bWJlcixcclxuICAgIGRpcmVjdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnaG9yaXpvbnRhbCdcclxuICAgIH0sXHJcbiAgICBhY3RpdmVDb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnIzA2YmYwNCdcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzdGVwczogJ2Zvcm1hdFN0ZXBzJyxcclxuICAgIGFjdGl2ZTogJ2Zvcm1hdFN0ZXBzJ1xyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZm9ybWF0U3RlcHMoKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGZvcm1hdFN0ZXBzOiBmdW5jdGlvbiBmb3JtYXRTdGVwcygpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHZhciBzdGVwcyA9IHRoaXMuZGF0YS5zdGVwcztcclxuICAgICAgc3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcclxuICAgICAgICBzdGVwLnN0YXR1cyA9IF90aGlzLmdldFN0YXR1cyhpbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHN0ZXBzOiBzdGVwc1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRTdGF0dXM6IGZ1bmN0aW9uIGdldFN0YXR1cyhpbmRleCkge1xyXG4gICAgICB2YXIgYWN0aXZlID0gdGhpcy5kYXRhLmFjdGl2ZTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA8IGFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiAnZmluaXNoJztcclxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuICdwcm9jZXNzJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/steps/index.js");
 		__wxRoute = 'components/vant/submit-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/submit-bar/index.js';	define("components/vant/submit-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['bar-class', 'price-class', 'button-class'],
  props: {
    tip: [String, Boolean],
    type: Number,
    price: null,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      value: '¥'
    },
    buttonType: {
      type: String,
      value: 'danger'
    }
  },
  computed: {
    hasPrice: function hasPrice() {
      return typeof this.data.price === 'number';
    },
    priceStr: function priceStr() {
      return (this.data.price / 100).toFixed(2);
    },
    tipStr: function tipStr() {
      var tip = this.data.tip;
      return typeof tip === 'string' ? tip : '';
    }
  },
  methods: {
    onSubmit: function onSubmit(event) {
      this.$emit('submit', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpcCIsIlN0cmluZyIsIkJvb2xlYW4iLCJ0eXBlIiwiTnVtYmVyIiwicHJpY2UiLCJsYWJlbCIsImxvYWRpbmciLCJkaXNhYmxlZCIsImJ1dHRvblRleHQiLCJjdXJyZW5jeSIsInZhbHVlIiwiYnV0dG9uVHlwZSIsImNvbXB1dGVkIiwiaGFzUHJpY2UiLCJkYXRhIiwicHJpY2VTdHIiLCJ0b0ZpeGVkIiwidGlwU3RyIiwibWV0aG9kcyIsIm9uU3VibWl0IiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxXQUFTLENBQUMsV0FBRCxFQUFjLGFBQWQsRUFBNkIsY0FBN0IsQ0FERztBQUVaQyxTQUFPO0FBQ0xDLFNBQUssQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULENBREE7QUFFTEMsVUFBTUMsTUFGRDtBQUdMQyxXQUFPLElBSEY7QUFJTEMsV0FBT0wsTUFKRjtBQUtMTSxhQUFTTCxPQUxKO0FBTUxNLGNBQVVOLE9BTkw7QUFPTE8sZ0JBQVlSLE1BUFA7QUFRTFMsY0FBVTtBQUNSUCxZQUFNRixNQURFO0FBRVJVLGFBQU87QUFGQyxLQVJMO0FBWUxDLGdCQUFZO0FBQ1ZULFlBQU1GLE1BREk7QUFFVlUsYUFBTztBQUZHO0FBWlAsR0FGSztBQW1CWkUsWUFBVTtBQUNSQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsYUFBTyxPQUFPLEtBQUtDLElBQUwsQ0FBVVYsS0FBakIsS0FBMkIsUUFBbEM7QUFDRCxLQUhPO0FBSVJXLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixhQUFPLENBQUMsS0FBS0QsSUFBTCxDQUFVVixLQUFWLEdBQWtCLEdBQW5CLEVBQXdCWSxPQUF4QixDQUFnQyxDQUFoQyxDQUFQO0FBQ0QsS0FOTztBQU9SQyxZQUFRLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsVUFBSWxCLE1BQU0sS0FBS2UsSUFBTCxDQUFVZixHQUFwQjtBQUNBLGFBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQWYsR0FBMEJBLEdBQTFCLEdBQWdDLEVBQXZDO0FBQ0Q7QUFWTyxHQW5CRTtBQStCWm1CLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsTUFBTUUsTUFBM0I7QUFDRDtBQUhNO0FBL0JHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGNsYXNzZXM6IFsnYmFyLWNsYXNzJywgJ3ByaWNlLWNsYXNzJywgJ2J1dHRvbi1jbGFzcyddLFxyXG4gIHByb3BzOiB7XHJcbiAgICB0aXA6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgcHJpY2U6IG51bGwsXHJcbiAgICBsYWJlbDogU3RyaW5nLFxyXG4gICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgYnV0dG9uVGV4dDogU3RyaW5nLFxyXG4gICAgY3VycmVuY3k6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ8KlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvblR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ2RhbmdlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBoYXNQcmljZTogZnVuY3Rpb24gaGFzUHJpY2UoKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhLnByaWNlID09PSAnbnVtYmVyJztcclxuICAgIH0sXHJcbiAgICBwcmljZVN0cjogZnVuY3Rpb24gcHJpY2VTdHIoKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5kYXRhLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfSxcclxuICAgIHRpcFN0cjogZnVuY3Rpb24gdGlwU3RyKCkge1xyXG4gICAgICB2YXIgdGlwID0gdGhpcy5kYXRhLnRpcDtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB0aXAgPT09ICdzdHJpbmcnID8gdGlwIDogJyc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/submit-bar/index.js");
 		__wxRoute = 'components/vant/switch-cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/switch-cell/index.js';	define("components/vant/switch-cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  props: {
    title: String,
    border: Boolean,
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      value: '26px'
    }
  },
  watch: {
    checked: function checked(value) {
      this.setData({
        value: value
      });
    }
  },
  created: function created() {
    this.setData({
      value: this.data.checked
    });
  },
  methods: {
    onChange: function onChange(event) {
      this.$emit('change', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsImJvcmRlciIsIkJvb2xlYW4iLCJjaGVja2VkIiwibG9hZGluZyIsImRpc2FibGVkIiwic2l6ZSIsInR5cGUiLCJ2YWx1ZSIsIndhdGNoIiwic2V0RGF0YSIsImNyZWF0ZWQiLCJkYXRhIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsU0FBTztBQUNMQyxXQUFPQyxNQURGO0FBRUxDLFlBQVFDLE9BRkg7QUFHTEMsYUFBU0QsT0FISjtBQUlMRSxhQUFTRixPQUpKO0FBS0xHLGNBQVVILE9BTEw7QUFNTEksVUFBTTtBQUNKQyxZQUFNUCxNQURGO0FBRUpRLGFBQU87QUFGSDtBQU5ELEdBRks7QUFhWkMsU0FBTztBQUNMTixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJLLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtFLE9BQUwsQ0FBYTtBQUNYRixlQUFPQTtBQURJLE9BQWI7QUFHRDtBQUxJLEdBYks7QUFvQlpHLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxPQUFMLENBQWE7QUFDWEYsYUFBTyxLQUFLSSxJQUFMLENBQVVUO0FBRE4sS0FBYjtBQUdELEdBeEJXO0FBeUJaVSxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0Q7QUFITTtBQXpCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIGJvcmRlcjogQm9vbGVhbixcclxuICAgIGNoZWNrZWQ6IEJvb2xlYW4sXHJcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcyNnB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGNoZWNrZWQ6IGZ1bmN0aW9uIGNoZWNrZWQodmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmFsdWU6IHRoaXMuZGF0YS5jaGVja2VkXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/switch-cell/index.js");
 		__wxRoute = 'components/vant/switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/switch/index.js';	define("components/vant/switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['node-class'],
  props: {
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      value: '30px'
    }
  },
  watch: {
    checked: function checked(value) {
      this.setData({
        value: value
      });
    }
  },
  created: function created() {
    this.setData({
      value: this.data.checked
    });
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        var checked = !this.data.checked;
        this.$emit('input', checked);
        this.$emit('change', checked);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJzaXplIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwid2F0Y2giLCJzZXREYXRhIiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsWUFBRCxDQUZHO0FBR1pDLFNBQU87QUFDTEMsYUFBU0MsT0FESjtBQUVMQyxhQUFTRCxPQUZKO0FBR0xFLGNBQVVGLE9BSEw7QUFJTEcsVUFBTTtBQUNKQyxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSDtBQUpELEdBSEs7QUFZWkMsU0FBTztBQUNMUixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJPLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtFLE9BQUwsQ0FBYTtBQUNYRixlQUFPQTtBQURJLE9BQWI7QUFHRDtBQUxJLEdBWks7QUFtQlpHLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxPQUFMLENBQWE7QUFDWEYsYUFBTyxLQUFLSSxJQUFMLENBQVVYO0FBRE4sS0FBYjtBQUdELEdBdkJXO0FBd0JaWSxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJLENBQUMsS0FBS0YsSUFBTCxDQUFVUixRQUFYLElBQXVCLENBQUMsS0FBS1EsSUFBTCxDQUFVVCxPQUF0QyxFQUErQztBQUM3QyxZQUFJRixVQUFVLENBQUMsS0FBS1csSUFBTCxDQUFVWCxPQUF6QjtBQUNBLGFBQUtjLEtBQUwsQ0FBVyxPQUFYLEVBQW9CZCxPQUFwQjtBQUNBLGFBQUtjLEtBQUwsQ0FBVyxRQUFYLEVBQXFCZCxPQUFyQjtBQUNEO0FBQ0Y7QUFQTTtBQXhCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICBjbGFzc2VzOiBbJ25vZGUtY2xhc3MnXSxcclxuICBwcm9wczoge1xyXG4gICAgY2hlY2tlZDogQm9vbGVhbixcclxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJzMwcHgnXHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgY2hlY2tlZDogZnVuY3Rpb24gY2hlY2tlZCh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2YWx1ZTogdGhpcy5kYXRhLmNoZWNrZWRcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrZWQgPSAhdGhpcy5kYXRhLmNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBjaGVja2VkKTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjaGVja2VkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/switch/index.js");
 		__wxRoute = 'components/vant/tab/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/tab/index.js';	define("components/vant/tab/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'tabs',
    type: 'ancestor'
  },
  props: {
    title: String,
    disabled: Boolean
  },
  data: {
    inited: false,
    active: false
  },
  watch: {
    disabled: function disabled() {
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.updateTabs();
      }
    },
    title: function title() {
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.setLine();
        parent.updateTabs();
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiZGF0YSIsImluaXRlZCIsImFjdGl2ZSIsIndhdGNoIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsInVwZGF0ZVRhYnMiLCJzZXRMaW5lIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxNQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxjQUFVQztBQUZMLEdBTEs7QUFTWkMsUUFBTTtBQUNKQyxZQUFRLEtBREo7QUFFSkMsWUFBUTtBQUZKLEdBVE07QUFhWkMsU0FBTztBQUNMTCxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSU0sU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxDQUF2QyxDQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWQSxlQUFPRSxVQUFQO0FBQ0Q7QUFDRixLQVBJO0FBUUxWLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixVQUFJUSxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDLENBQXZDLENBQWI7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1ZBLGVBQU9HLE9BQVA7QUFDQUgsZUFBT0UsVUFBUDtBQUNEO0FBQ0Y7QUFmSTtBQWJLLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAndGFicycsXHJcbiAgICB0eXBlOiAnYW5jZXN0b3InXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBpbml0ZWQ6IGZhbHNlLFxyXG4gICAgYWN0aXZlOiBmYWxzZVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZCgpIHtcclxuICAgICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vdGFicy9pbmRleCcpWzBdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC51cGRhdGVUYWJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aXRsZTogZnVuY3Rpb24gdGl0bGUoKSB7XHJcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVswXTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQuc2V0TGluZSgpO1xyXG4gICAgICAgIHBhcmVudC51cGRhdGVUYWJzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/tab/index.js");
 		__wxRoute = 'components/vant/tabbar-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/tabbar-item/index.js';	define("components/vant/tabbar-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    info: null,
    icon: String,
    dot: Boolean
  },
  relation: {
    name: 'tabbar',
    type: 'ancestor'
  },
  data: {
    active: false,
    count: 0
  },
  methods: {
    onClick: function onClick() {
      var parent = this.getRelationNodes('../tabbar/index')[0];

      if (parent) {
        parent.onChange(this);
      }

      this.$emit('click');
    },
    setActive: function setActive(data) {
      var _this$data = this.data,
          active = _this$data.active,
          count = _this$data.count;

      if (active !== data.active || count !== data.count) {
        this.setData(data);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImRhdGEiLCJhY3RpdmUiLCJjb3VudCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsIm9uQ2hhbmdlIiwiJGVtaXQiLCJzZXRBY3RpdmUiLCJfdGhpcyRkYXRhIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU0sSUFERDtBQUVMQyxVQUFNQyxNQUZEO0FBR0xDLFNBQUtDO0FBSEEsR0FESztBQU1aQyxZQUFVO0FBQ1JDLFVBQU0sUUFERTtBQUVSQyxVQUFNO0FBRkUsR0FORTtBQVVaQyxRQUFNO0FBQ0pDLFlBQVEsS0FESjtBQUVKQyxXQUFPO0FBRkgsR0FWTTtBQWNaQyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJQyxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLGlCQUF0QixFQUF5QyxDQUF6QyxDQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWQSxlQUFPRSxRQUFQLENBQWdCLElBQWhCO0FBQ0Q7O0FBRUQsV0FBS0MsS0FBTCxDQUFXLE9BQVg7QUFDRCxLQVRNO0FBVVBDLGVBQVcsU0FBU0EsU0FBVCxDQUFtQlQsSUFBbkIsRUFBeUI7QUFDbEMsVUFBSVUsYUFBYSxLQUFLVixJQUF0QjtBQUFBLFVBQ0lDLFNBQVNTLFdBQVdULE1BRHhCO0FBQUEsVUFFSUMsUUFBUVEsV0FBV1IsS0FGdkI7O0FBSUEsVUFBSUQsV0FBV0QsS0FBS0MsTUFBaEIsSUFBMEJDLFVBQVVGLEtBQUtFLEtBQTdDLEVBQW9EO0FBQ2xELGFBQUtTLE9BQUwsQ0FBYVgsSUFBYjtBQUNEO0FBQ0Y7QUFsQk07QUFkRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBwcm9wczoge1xyXG4gICAgaW5mbzogbnVsbCxcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGRvdDogQm9vbGVhblxyXG4gIH0sXHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICd0YWJiYXInLFxyXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGNvdW50OiAwXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWJiYXIvaW5kZXgnKVswXTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQub25DaGFuZ2UodGhpcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoZGF0YSkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIGFjdGl2ZSA9IF90aGlzJGRhdGEuYWN0aXZlLFxyXG4gICAgICAgICAgY291bnQgPSBfdGhpcyRkYXRhLmNvdW50O1xyXG5cclxuICAgICAgaWYgKGFjdGl2ZSAhPT0gZGF0YS5hY3RpdmUgfHwgY291bnQgIT09IGRhdGEuY291bnQpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/tabbar-item/index.js");
 		__wxRoute = 'components/vant/tabbar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/tabbar/index.js';	define("components/vant/tabbar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'tabbar-item',
    type: 'descendant',
    linked: function linked(target) {
      var _this = this;

      this.data.items.push(target);
      setTimeout(function () {
        _this.setActiveItem();
      });
    },
    unlinked: function unlinked(target) {
      var _this2 = this;

      this.data.items = this.data.items.filter(function (item) {
        return item !== target;
      });
      setTimeout(function () {
        _this2.setActiveItem();
      });
    }
  },
  props: {
    active: Number,
    fixed: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  data: {
    items: [],
    currentActive: -1
  },
  watch: {
    active: function active(_active) {
      this.setData({
        currentActive: _active
      });
      this.setActiveItem();
    }
  },
  created: function created() {
    this.setData({
      currentActive: this.data.active
    });
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this3 = this;

      this.data.items.forEach(function (item, index) {
        item.setActive({
          active: index === _this3.data.currentActive,
          count: _this3.data.items.length
        });
      });
    },
    onChange: function onChange(child) {
      var active = this.data.items.indexOf(child);

      if (active !== this.data.currentActive && active !== -1) {
        this.$emit('change', active);
        this.setData({
          currentActive: active
        });
        this.setActiveItem();
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJfdGhpcyIsImRhdGEiLCJpdGVtcyIsInB1c2giLCJzZXRUaW1lb3V0Iiwic2V0QWN0aXZlSXRlbSIsInVubGlua2VkIiwiX3RoaXMyIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwiYWN0aXZlIiwiTnVtYmVyIiwiZml4ZWQiLCJCb29sZWFuIiwidmFsdWUiLCJ6SW5kZXgiLCJjdXJyZW50QWN0aXZlIiwid2F0Y2giLCJfYWN0aXZlIiwic2V0RGF0YSIsImNyZWF0ZWQiLCJtZXRob2RzIiwiX3RoaXMzIiwiZm9yRWFjaCIsImluZGV4Iiwic2V0QWN0aXZlIiwiY291bnQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImNoaWxkIiwiaW5kZXhPZiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxhQURFO0FBRVJDLFVBQU0sWUFGRTtBQUdSQyxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQzlCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLENBQXFCSixNQUFyQjtBQUNBSyxpQkFBVyxZQUFZO0FBQ3JCSixjQUFNSyxhQUFOO0FBQ0QsT0FGRDtBQUdELEtBVk87QUFXUkMsY0FBVSxTQUFTQSxRQUFULENBQWtCUCxNQUFsQixFQUEwQjtBQUNsQyxVQUFJUSxTQUFTLElBQWI7O0FBRUEsV0FBS04sSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQk0sTUFBaEIsQ0FBdUIsVUFBVUMsSUFBVixFQUFnQjtBQUN2RCxlQUFPQSxTQUFTVixNQUFoQjtBQUNELE9BRmlCLENBQWxCO0FBR0FLLGlCQUFXLFlBQVk7QUFDckJHLGVBQU9GLGFBQVA7QUFDRCxPQUZEO0FBR0Q7QUFwQk8sR0FERTtBQXVCWkssU0FBTztBQUNMQyxZQUFRQyxNQURIO0FBRUxDLFdBQU87QUFDTGhCLFlBQU1pQixPQUREO0FBRUxDLGFBQU87QUFGRixLQUZGO0FBTUxDLFlBQVE7QUFDTm5CLFlBQU1lLE1BREE7QUFFTkcsYUFBTztBQUZEO0FBTkgsR0F2Qks7QUFrQ1pkLFFBQU07QUFDSkMsV0FBTyxFQURIO0FBRUplLG1CQUFlLENBQUM7QUFGWixHQWxDTTtBQXNDWkMsU0FBTztBQUNMUCxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JRLE9BQWhCLEVBQXlCO0FBQy9CLFdBQUtDLE9BQUwsQ0FBYTtBQUNYSCx1QkFBZUU7QUFESixPQUFiO0FBR0EsV0FBS2QsYUFBTDtBQUNEO0FBTkksR0F0Q0s7QUE4Q1pnQixXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0QsT0FBTCxDQUFhO0FBQ1hILHFCQUFlLEtBQUtoQixJQUFMLENBQVVVO0FBRGQsS0FBYjtBQUdELEdBbERXO0FBbURaVyxXQUFTO0FBQ1BqQixtQkFBZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFVBQUlrQixTQUFTLElBQWI7O0FBRUEsV0FBS3RCLElBQUwsQ0FBVUMsS0FBVixDQUFnQnNCLE9BQWhCLENBQXdCLFVBQVVmLElBQVYsRUFBZ0JnQixLQUFoQixFQUF1QjtBQUM3Q2hCLGFBQUtpQixTQUFMLENBQWU7QUFDYmYsa0JBQVFjLFVBQVVGLE9BQU90QixJQUFQLENBQVlnQixhQURqQjtBQUViVSxpQkFBT0osT0FBT3RCLElBQVAsQ0FBWUMsS0FBWixDQUFrQjBCO0FBRlosU0FBZjtBQUlELE9BTEQ7QUFNRCxLQVZNO0FBV1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsVUFBSW5CLFNBQVMsS0FBS1YsSUFBTCxDQUFVQyxLQUFWLENBQWdCNkIsT0FBaEIsQ0FBd0JELEtBQXhCLENBQWI7O0FBRUEsVUFBSW5CLFdBQVcsS0FBS1YsSUFBTCxDQUFVZ0IsYUFBckIsSUFBc0NOLFdBQVcsQ0FBQyxDQUF0RCxFQUF5RDtBQUN2RCxhQUFLcUIsS0FBTCxDQUFXLFFBQVgsRUFBcUJyQixNQUFyQjtBQUNBLGFBQUtTLE9BQUwsQ0FBYTtBQUNYSCx5QkFBZU47QUFESixTQUFiO0FBR0EsYUFBS04sYUFBTDtBQUNEO0FBQ0Y7QUFyQk07QUFuREcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICd0YWJiYXItaXRlbScsXHJcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5pdGVtcy5wdXNoKHRhcmdldCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF90aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdW5saW5rZWQ6IGZ1bmN0aW9uIHVubGlua2VkKHRhcmdldCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5pdGVtcyA9IHRoaXMuZGF0YS5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPT0gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMyLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgYWN0aXZlOiBOdW1iZXIsXHJcbiAgICBmaXhlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjdXJyZW50QWN0aXZlOiAtMVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFjdGl2ZTogZnVuY3Rpb24gYWN0aXZlKF9hY3RpdmUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjdXJyZW50QWN0aXZlOiBfYWN0aXZlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjdXJyZW50QWN0aXZlOiB0aGlzLmRhdGEuYWN0aXZlXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldEFjdGl2ZUl0ZW06IGZ1bmN0aW9uIHNldEFjdGl2ZUl0ZW0oKSB7XHJcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgdGhpcy5kYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgaXRlbS5zZXRBY3RpdmUoe1xyXG4gICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gX3RoaXMzLmRhdGEuY3VycmVudEFjdGl2ZSxcclxuICAgICAgICAgIGNvdW50OiBfdGhpczMuZGF0YS5pdGVtcy5sZW5ndGhcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNoaWxkKSB7XHJcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmRhdGEuaXRlbXMuaW5kZXhPZihjaGlsZCk7XHJcblxyXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmRhdGEuY3VycmVudEFjdGl2ZSAmJiBhY3RpdmUgIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgYWN0aXZlKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY3VycmVudEFjdGl2ZTogYWN0aXZlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/tabbar/index.js");
 		__wxRoute = 'components/vant/tabs/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/tabs/index.js';	define("components/vant/tabs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'tab',
    type: 'descendant',
    linked: function linked(child) {
      this.data.tabs.push({
        instance: child,
        data: child.data
      });
      this.updateTabs();
    },
    unlinked: function unlinked(child) {
      var tabs = this.data.tabs.filter(function (item) {
        return item.instance !== child;
      });
      this.setData({
        tabs: tabs,
        scrollable: tabs.length > this.data.swipeThreshold
      });
      this.setActiveTab();
    }
  },
  props: {
    color: String,
    lineWidth: Number,
    active: {
      type: Number,
      value: 0
    },
    type: {
      type: String,
      value: 'line'
    },
    border: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0.2
    },
    zIndex: {
      type: Number,
      value: 99
    },
    swipeThreshold: {
      type: Number,
      value: 4
    }
  },
  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false
  },
  watch: {
    swipeThreshold: function swipeThreshold() {
      this.setData({
        scrollable: this.data.tabs.length > this.data.swipeThreshold
      });
    },
    color: 'setLine',
    lineWidth: 'setLine',
    active: 'setActiveTab'
  },
  mounted: function mounted() {
    this.setLine();
    this.scrollIntoView();
  },
  methods: {
    updateTabs: function updateTabs() {
      var tabs = this.data.tabs;
      this.setData({
        tabs: tabs,
        scrollable: tabs.length > this.data.swipeThreshold
      });
      this.setActiveTab();
    },
    trigger: function trigger(eventName, index) {
      this.$emit(eventName, {
        index: index,
        title: this.data.tabs[index].data.title
      });
    },
    onTap: function onTap(event) {
      var index = event.currentTarget.dataset.index;

      if (this.data.tabs[index].data.disabled) {
        this.trigger('disabled', index);
      } else {
        this.trigger('click', index);
        this.setActive(index);
      }
    },
    setActive: function setActive(active) {
      if (active !== this.data.active) {
        this.trigger('change', active);
        this.setData({
          active: active
        });
        this.setActiveTab();
      }
    },
    setLine: function setLine() {
      var _this = this;

      if (this.data.type !== 'line') {
        return;
      }

      this.getRect('.van-tab', true).then(function (rects) {
        var rect = rects[_this.data.active];
        var width = _this.data.lineWidth || rect.width / 2;
        var left = rects.slice(0, _this.data.active).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        left += (rect.width - width) / 2;

        _this.setData({
          lineStyle: "\n            width: " + width + "px;\n            background-color: " + _this.data.color + ";\n            transform: translateX(" + left + "px);\n            transition-duration: " + _this.data.duration + "s;\n          "
        });
      });
    },
    setActiveTab: function setActiveTab() {
      var _this2 = this;

      this.data.tabs.forEach(function (item, index) {
        var data = {
          active: index === _this2.data.active
        };

        if (data.active) {
          data.inited = true;
        }

        if (data.active !== item.instance.data.active) {
          item.instance.setData(data);
        }
      });
      this.setLine();
      this.scrollIntoView();
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      var _this3 = this;

      if (!this.data.scrollable) {
        return;
      }

      this.getRect('.van-tab', true).then(function (tabRects) {
        var tabRect = tabRects[_this3.data.active];
        var offsetLeft = tabRects.slice(0, _this3.data.active).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        var tabWidth = tabRect.width;

        _this3.getRect('.van-tabs__nav').then(function (navRect) {
          var navWidth = navRect.width;

          _this3.setData({
            scrollLeft: offsetLeft - (navWidth - tabWidth) / 2
          });
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImRhdGEiLCJ0YWJzIiwicHVzaCIsImluc3RhbmNlIiwidXBkYXRlVGFicyIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInNldERhdGEiLCJzY3JvbGxhYmxlIiwibGVuZ3RoIiwic3dpcGVUaHJlc2hvbGQiLCJzZXRBY3RpdmVUYWIiLCJwcm9wcyIsImNvbG9yIiwiU3RyaW5nIiwibGluZVdpZHRoIiwiTnVtYmVyIiwiYWN0aXZlIiwidmFsdWUiLCJib3JkZXIiLCJCb29sZWFuIiwiZHVyYXRpb24iLCJ6SW5kZXgiLCJsaW5lU3R5bGUiLCJzY3JvbGxMZWZ0Iiwid2F0Y2giLCJtb3VudGVkIiwic2V0TGluZSIsInNjcm9sbEludG9WaWV3IiwibWV0aG9kcyIsInRyaWdnZXIiLCJldmVudE5hbWUiLCJpbmRleCIsIiRlbWl0IiwidGl0bGUiLCJvblRhcCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkaXNhYmxlZCIsInNldEFjdGl2ZSIsIl90aGlzIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0cyIsInJlY3QiLCJ3aWR0aCIsImxlZnQiLCJzbGljZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiX3RoaXMyIiwiZm9yRWFjaCIsImluaXRlZCIsIl90aGlzMyIsInRhYlJlY3RzIiwidGFiUmVjdCIsIm9mZnNldExlZnQiLCJ0YWJXaWR0aCIsIm5hdlJlY3QiLCJuYXZXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sS0FERTtBQUVSQyxVQUFNLFlBRkU7QUFHUkMsWUFBUSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUM3QixXQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZUMsSUFBZixDQUFvQjtBQUNsQkMsa0JBQVVKLEtBRFE7QUFFbEJDLGNBQU1ELE1BQU1DO0FBRk0sT0FBcEI7QUFJQSxXQUFLSSxVQUFMO0FBQ0QsS0FUTztBQVVSQyxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JOLEtBQWxCLEVBQXlCO0FBQ2pDLFVBQUlFLE9BQU8sS0FBS0QsSUFBTCxDQUFVQyxJQUFWLENBQWVLLE1BQWYsQ0FBc0IsVUFBVUMsSUFBVixFQUFnQjtBQUMvQyxlQUFPQSxLQUFLSixRQUFMLEtBQWtCSixLQUF6QjtBQUNELE9BRlUsQ0FBWDtBQUdBLFdBQUtTLE9BQUwsQ0FBYTtBQUNYUCxjQUFNQSxJQURLO0FBRVhRLG9CQUFZUixLQUFLUyxNQUFMLEdBQWMsS0FBS1YsSUFBTCxDQUFVVztBQUZ6QixPQUFiO0FBSUEsV0FBS0MsWUFBTDtBQUNEO0FBbkJPLEdBREU7QUFzQlpDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxlQUFXQyxNQUZOO0FBR0xDLFlBQVE7QUFDTnJCLFlBQU1vQixNQURBO0FBRU5FLGFBQU87QUFGRCxLQUhIO0FBT0x0QixVQUFNO0FBQ0pBLFlBQU1rQixNQURGO0FBRUpJLGFBQU87QUFGSCxLQVBEO0FBV0xDLFlBQVE7QUFDTnZCLFlBQU13QixPQURBO0FBRU5GLGFBQU87QUFGRCxLQVhIO0FBZUxHLGNBQVU7QUFDUnpCLFlBQU1vQixNQURFO0FBRVJFLGFBQU87QUFGQyxLQWZMO0FBbUJMSSxZQUFRO0FBQ04xQixZQUFNb0IsTUFEQTtBQUVORSxhQUFPO0FBRkQsS0FuQkg7QUF1QkxSLG9CQUFnQjtBQUNkZCxZQUFNb0IsTUFEUTtBQUVkRSxhQUFPO0FBRk87QUF2QlgsR0F0Qks7QUFrRFpuQixRQUFNO0FBQ0pDLFVBQU0sRUFERjtBQUVKdUIsZUFBVyxFQUZQO0FBR0pDLGdCQUFZLENBSFI7QUFJSmhCLGdCQUFZO0FBSlIsR0FsRE07QUF3RFppQixTQUFPO0FBQ0xmLG9CQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFdBQUtILE9BQUwsQ0FBYTtBQUNYQyxvQkFBWSxLQUFLVCxJQUFMLENBQVVDLElBQVYsQ0FBZVMsTUFBZixHQUF3QixLQUFLVixJQUFMLENBQVVXO0FBRG5DLE9BQWI7QUFHRCxLQUxJO0FBTUxHLFdBQU8sU0FORjtBQU9MRSxlQUFXLFNBUE47QUFRTEUsWUFBUTtBQVJILEdBeERLO0FBa0VaUyxXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsT0FBTDtBQUNBLFNBQUtDLGNBQUw7QUFDRCxHQXJFVztBQXNFWkMsV0FBUztBQUNQMUIsZ0JBQVksU0FBU0EsVUFBVCxHQUFzQjtBQUNoQyxVQUFJSCxPQUFPLEtBQUtELElBQUwsQ0FBVUMsSUFBckI7QUFDQSxXQUFLTyxPQUFMLENBQWE7QUFDWFAsY0FBTUEsSUFESztBQUVYUSxvQkFBWVIsS0FBS1MsTUFBTCxHQUFjLEtBQUtWLElBQUwsQ0FBVVc7QUFGekIsT0FBYjtBQUlBLFdBQUtDLFlBQUw7QUFDRCxLQVJNO0FBU1BtQixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCQyxLQUE1QixFQUFtQztBQUMxQyxXQUFLQyxLQUFMLENBQVdGLFNBQVgsRUFBc0I7QUFDcEJDLGVBQU9BLEtBRGE7QUFFcEJFLGVBQU8sS0FBS25DLElBQUwsQ0FBVUMsSUFBVixDQUFlZ0MsS0FBZixFQUFzQmpDLElBQXRCLENBQTJCbUM7QUFGZCxPQUF0QjtBQUlELEtBZE07QUFlUEMsV0FBTyxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDM0IsVUFBSUosUUFBUUksTUFBTUMsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJOLEtBQXhDOztBQUVBLFVBQUksS0FBS2pDLElBQUwsQ0FBVUMsSUFBVixDQUFlZ0MsS0FBZixFQUFzQmpDLElBQXRCLENBQTJCd0MsUUFBL0IsRUFBeUM7QUFDdkMsYUFBS1QsT0FBTCxDQUFhLFVBQWIsRUFBeUJFLEtBQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0YsT0FBTCxDQUFhLE9BQWIsRUFBc0JFLEtBQXRCO0FBQ0EsYUFBS1EsU0FBTCxDQUFlUixLQUFmO0FBQ0Q7QUFDRixLQXhCTTtBQXlCUFEsZUFBVyxTQUFTQSxTQUFULENBQW1CdkIsTUFBbkIsRUFBMkI7QUFDcEMsVUFBSUEsV0FBVyxLQUFLbEIsSUFBTCxDQUFVa0IsTUFBekIsRUFBaUM7QUFDL0IsYUFBS2EsT0FBTCxDQUFhLFFBQWIsRUFBdUJiLE1BQXZCO0FBQ0EsYUFBS1YsT0FBTCxDQUFhO0FBQ1hVLGtCQUFRQTtBQURHLFNBQWI7QUFHQSxhQUFLTixZQUFMO0FBQ0Q7QUFDRixLQWpDTTtBQWtDUGdCLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJYyxRQUFRLElBQVo7O0FBRUEsVUFBSSxLQUFLMUMsSUFBTCxDQUFVSCxJQUFWLEtBQW1CLE1BQXZCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsV0FBSzhDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLElBQXpCLEVBQStCQyxJQUEvQixDQUFvQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ25ELFlBQUlDLE9BQU9ELE1BQU1ILE1BQU0xQyxJQUFOLENBQVdrQixNQUFqQixDQUFYO0FBQ0EsWUFBSTZCLFFBQVFMLE1BQU0xQyxJQUFOLENBQVdnQixTQUFYLElBQXdCOEIsS0FBS0MsS0FBTCxHQUFhLENBQWpEO0FBQ0EsWUFBSUMsT0FBT0gsTUFBTUksS0FBTixDQUFZLENBQVosRUFBZVAsTUFBTTFDLElBQU4sQ0FBV2tCLE1BQTFCLEVBQWtDZ0MsTUFBbEMsQ0FBeUMsVUFBVUMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0I7QUFDeEUsaUJBQU9ELE9BQU9DLEtBQUtMLEtBQW5CO0FBQ0QsU0FGVSxFQUVSLENBRlEsQ0FBWDtBQUdBQyxnQkFBUSxDQUFDRixLQUFLQyxLQUFMLEdBQWFBLEtBQWQsSUFBdUIsQ0FBL0I7O0FBRUFMLGNBQU1sQyxPQUFOLENBQWM7QUFDWmdCLHFCQUFXLDBCQUEwQnVCLEtBQTFCLEdBQWtDLHFDQUFsQyxHQUEwRUwsTUFBTTFDLElBQU4sQ0FBV2MsS0FBckYsR0FBNkYsdUNBQTdGLEdBQXVJa0MsSUFBdkksR0FBOEkseUNBQTlJLEdBQTBMTixNQUFNMUMsSUFBTixDQUFXc0IsUUFBck0sR0FBZ047QUFEL00sU0FBZDtBQUdELE9BWEQ7QUFZRCxLQXJETTtBQXNEUFYsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJeUMsU0FBUyxJQUFiOztBQUVBLFdBQUtyRCxJQUFMLENBQVVDLElBQVYsQ0FBZXFELE9BQWYsQ0FBdUIsVUFBVS9DLElBQVYsRUFBZ0IwQixLQUFoQixFQUF1QjtBQUM1QyxZQUFJakMsT0FBTztBQUNUa0Isa0JBQVFlLFVBQVVvQixPQUFPckQsSUFBUCxDQUFZa0I7QUFEckIsU0FBWDs7QUFJQSxZQUFJbEIsS0FBS2tCLE1BQVQsRUFBaUI7QUFDZmxCLGVBQUt1RCxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVELFlBQUl2RCxLQUFLa0IsTUFBTCxLQUFnQlgsS0FBS0osUUFBTCxDQUFjSCxJQUFkLENBQW1Ca0IsTUFBdkMsRUFBK0M7QUFDN0NYLGVBQUtKLFFBQUwsQ0FBY0ssT0FBZCxDQUFzQlIsSUFBdEI7QUFDRDtBQUNGLE9BWkQ7QUFhQSxXQUFLNEIsT0FBTDtBQUNBLFdBQUtDLGNBQUw7QUFDRCxLQXhFTTtBQXlFUDtBQUNBQSxvQkFBZ0IsU0FBU0EsY0FBVCxHQUEwQjtBQUN4QyxVQUFJMkIsU0FBUyxJQUFiOztBQUVBLFVBQUksQ0FBQyxLQUFLeEQsSUFBTCxDQUFVUyxVQUFmLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsV0FBS2tDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLElBQXpCLEVBQStCQyxJQUEvQixDQUFvQyxVQUFVYSxRQUFWLEVBQW9CO0FBQ3RELFlBQUlDLFVBQVVELFNBQVNELE9BQU94RCxJQUFQLENBQVlrQixNQUFyQixDQUFkO0FBQ0EsWUFBSXlDLGFBQWFGLFNBQVNSLEtBQVQsQ0FBZSxDQUFmLEVBQWtCTyxPQUFPeEQsSUFBUCxDQUFZa0IsTUFBOUIsRUFBc0NnQyxNQUF0QyxDQUE2QyxVQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUNsRixpQkFBT0QsT0FBT0MsS0FBS0wsS0FBbkI7QUFDRCxTQUZnQixFQUVkLENBRmMsQ0FBakI7QUFHQSxZQUFJYSxXQUFXRixRQUFRWCxLQUF2Qjs7QUFFQVMsZUFBT2IsT0FBUCxDQUFlLGdCQUFmLEVBQWlDQyxJQUFqQyxDQUFzQyxVQUFVaUIsT0FBVixFQUFtQjtBQUN2RCxjQUFJQyxXQUFXRCxRQUFRZCxLQUF2Qjs7QUFFQVMsaUJBQU9oRCxPQUFQLENBQWU7QUFDYmlCLHdCQUFZa0MsYUFBYSxDQUFDRyxXQUFXRixRQUFaLElBQXdCO0FBRHBDLFdBQWY7QUFHRCxTQU5EO0FBT0QsT0FkRDtBQWVEO0FBaEdNO0FBdEVHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAndGFiJyxcclxuICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcclxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKGNoaWxkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50YWJzLnB1c2goe1xyXG4gICAgICAgIGluc3RhbmNlOiBjaGlsZCxcclxuICAgICAgICBkYXRhOiBjaGlsZC5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRhYnMoKTtcclxuICAgIH0sXHJcbiAgICB1bmxpbmtlZDogZnVuY3Rpb24gdW5saW5rZWQoY2hpbGQpIHtcclxuICAgICAgdmFyIHRhYnMgPSB0aGlzLmRhdGEudGFicy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pbnN0YW5jZSAhPT0gY2hpbGQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRhYnM6IHRhYnMsXHJcbiAgICAgICAgc2Nyb2xsYWJsZTogdGFicy5sZW5ndGggPiB0aGlzLmRhdGEuc3dpcGVUaHJlc2hvbGRcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgY29sb3I6IFN0cmluZyxcclxuICAgIGxpbmVXaWR0aDogTnVtYmVyLFxyXG4gICAgYWN0aXZlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdsaW5lJ1xyXG4gICAgfSxcclxuICAgIGJvcmRlcjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGR1cmF0aW9uOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDAuMlxyXG4gICAgfSxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiA5OVxyXG4gICAgfSxcclxuICAgIHN3aXBlVGhyZXNob2xkOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDRcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHRhYnM6IFtdLFxyXG4gICAgbGluZVN0eWxlOiAnJyxcclxuICAgIHNjcm9sbExlZnQ6IDAsXHJcbiAgICBzY3JvbGxhYmxlOiBmYWxzZVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHN3aXBlVGhyZXNob2xkOiBmdW5jdGlvbiBzd2lwZVRocmVzaG9sZCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzY3JvbGxhYmxlOiB0aGlzLmRhdGEudGFicy5sZW5ndGggPiB0aGlzLmRhdGEuc3dpcGVUaHJlc2hvbGRcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29sb3I6ICdzZXRMaW5lJyxcclxuICAgIGxpbmVXaWR0aDogJ3NldExpbmUnLFxyXG4gICAgYWN0aXZlOiAnc2V0QWN0aXZlVGFiJ1xyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcclxuICAgIHRoaXMuc2V0TGluZSgpO1xyXG4gICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlVGFiczogZnVuY3Rpb24gdXBkYXRlVGFicygpIHtcclxuICAgICAgdmFyIHRhYnMgPSB0aGlzLmRhdGEudGFicztcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0YWJzOiB0YWJzLFxyXG4gICAgICAgIHNjcm9sbGFibGU6IHRhYnMubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZVRhYigpO1xyXG4gICAgfSxcclxuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwge1xyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLnRhYnNbaW5kZXhdLmRhdGEudGl0bGVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25UYXA6IGZ1bmN0aW9uIG9uVGFwKGV2ZW50KSB7XHJcbiAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEudGFic1tpbmRleF0uZGF0YS5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcignZGlzYWJsZWQnLCBpbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5kYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgYWN0aXZlKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZTogZnVuY3Rpb24gc2V0TGluZSgpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFiJywgdHJ1ZSkudGhlbihmdW5jdGlvbiAocmVjdHMpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHJlY3RzW190aGlzLmRhdGEuYWN0aXZlXTtcclxuICAgICAgICB2YXIgd2lkdGggPSBfdGhpcy5kYXRhLmxpbmVXaWR0aCB8fCByZWN0LndpZHRoIC8gMjtcclxuICAgICAgICB2YXIgbGVmdCA9IHJlY3RzLnNsaWNlKDAsIF90aGlzLmRhdGEuYWN0aXZlKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcclxuICAgICAgICAgIHJldHVybiBwcmV2ICsgY3Vyci53aWR0aDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBsZWZ0ICs9IChyZWN0LndpZHRoIC0gd2lkdGgpIC8gMjtcclxuXHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsaW5lU3R5bGU6IFwiXFxuICAgICAgICAgICAgd2lkdGg6IFwiICsgd2lkdGggKyBcInB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiICsgX3RoaXMuZGF0YS5jb2xvciArIFwiO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGxlZnQgKyBcInB4KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBcIiArIF90aGlzLmRhdGEuZHVyYXRpb24gKyBcInM7XFxuICAgICAgICAgIFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldEFjdGl2ZVRhYjogZnVuY3Rpb24gc2V0QWN0aXZlVGFiKCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZGF0YS50YWJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSBfdGhpczIuZGF0YS5hY3RpdmVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5hY3RpdmUpIHtcclxuICAgICAgICAgIGRhdGEuaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmFjdGl2ZSAhPT0gaXRlbS5pbnN0YW5jZS5kYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaXRlbS5pbnN0YW5jZS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0TGluZSgpO1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9LFxyXG4gICAgLy8gc2Nyb2xsIGFjdGl2ZSB0YWIgaW50byB2aWV3XHJcbiAgICBzY3JvbGxJbnRvVmlldzogZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmRhdGEuc2Nyb2xsYWJsZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYicsIHRydWUpLnRoZW4oZnVuY3Rpb24gKHRhYlJlY3RzKSB7XHJcbiAgICAgICAgdmFyIHRhYlJlY3QgPSB0YWJSZWN0c1tfdGhpczMuZGF0YS5hY3RpdmVdO1xyXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gdGFiUmVjdHMuc2xpY2UoMCwgX3RoaXMzLmRhdGEuYWN0aXZlKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcclxuICAgICAgICAgIHJldHVybiBwcmV2ICsgY3Vyci53aWR0aDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICB2YXIgdGFiV2lkdGggPSB0YWJSZWN0LndpZHRoO1xyXG5cclxuICAgICAgICBfdGhpczMuZ2V0UmVjdCgnLnZhbi10YWJzX19uYXYnKS50aGVuKGZ1bmN0aW9uIChuYXZSZWN0KSB7XHJcbiAgICAgICAgICB2YXIgbmF2V2lkdGggPSBuYXZSZWN0LndpZHRoO1xyXG5cclxuICAgICAgICAgIF90aGlzMy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogb2Zmc2V0TGVmdCAtIChuYXZXaWR0aCAtIHRhYldpZHRoKSAvIDJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/tabs/index.js");
 		__wxRoute = 'components/vant/tag/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/tag/index.js';	define("components/vant/tag/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidHlwZSIsIlN0cmluZyIsIm1hcmsiLCJCb29sZWFuIiwicGxhaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFVBQU1DLE9BRkQ7QUFHTEMsV0FBT0Q7QUFIRjtBQURLLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBtYXJrOiBCb29sZWFuLFxyXG4gICAgcGxhaW46IEJvb2xlYW5cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/tag/index.js");
 		__wxRoute = 'components/vant/toast/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/toast/index.js';	define("components/vant/toast/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 1000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },
  methods: {
    clear: function clear() {
      this.setData({
        show: false
      });
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibG9hZGluZ1R5cGUiLCJwb3NpdGlvbiIsIm1ldGhvZHMiLCJjbGVhciIsInNldERhdGEiLCJub29wIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTUMsT0FERDtBQUVMQyxVQUFNRCxPQUZEO0FBR0xFLGFBQVNDLE1BSEo7QUFJTEMsaUJBQWFKLE9BSlI7QUFLTEssWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUxIO0FBU0xGLFVBQU07QUFDSkEsWUFBTUgsTUFERjtBQUVKSyxhQUFPO0FBRkgsS0FURDtBQWFMQyxpQkFBYTtBQUNYSCxZQUFNSCxNQURLO0FBRVhLLGFBQU87QUFGSSxLQWJSO0FBaUJMRSxjQUFVO0FBQ1JKLFlBQU1ILE1BREU7QUFFUkssYUFBTztBQUZDO0FBakJMLEdBREs7QUF1QlpHLFdBQVM7QUFDUEMsV0FBTyxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCLFdBQUtDLE9BQUwsQ0FBYTtBQUNYZCxjQUFNO0FBREssT0FBYjtBQUdELEtBTE07QUFNUDtBQUNBZSxVQUFNLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTtBQVBqQjtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBwcm9wczoge1xyXG4gICAgc2hvdzogQm9vbGVhbixcclxuICAgIG1hc2s6IEJvb2xlYW4sXHJcbiAgICBtZXNzYWdlOiBTdHJpbmcsXHJcbiAgICBmb3JiaWRDbGljazogQm9vbGVhbixcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxMDAwXHJcbiAgICB9LFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnY2lyY3VsYXInXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ21pZGRsZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcclxuICAgIG5vb3A6IGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG4gIH1cclxufSk7Il19 
 			}); 	require("components/vant/toast/index.js");
 		__wxRoute = 'components/vant/transition/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/transition/index.js';	define("components/vant/transition/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

(0, _component.VantComponent)({
  mixins: [(0, _transition.transition)(true)],
  props: {
    name: {
      type: String,
      value: 'fade'
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNaQSxVQUFRLENBQUMsNEJBQVcsSUFBWCxDQUFELENBREk7QUFFWkMsU0FBTztBQUNMQyxVQUFNO0FBQ0pDLFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZIO0FBREQ7QUFGSyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnLi4vbWl4aW5zL3RyYW5zaXRpb24nO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFt0cmFuc2l0aW9uKHRydWUpXSxcclxuICBwcm9wczoge1xyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnZmFkZSdcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/transition/index.js");
 		__wxRoute = 'components/vant/tree-select/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/vant/tree-select/index.js';	define("components/vant/tree-select/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _component = require('./../common/component.js');

var ITEM_HEIGHT = 44;
(0, _component.VantComponent)({
  props: {
    items: Array,
    mainActiveIndex: {
      type: Number,
      value: 0
    },
    activeId: {
      type: Number,
      value: 0
    },
    maxHeight: {
      type: Number,
      value: 300
    }
  },
  data: {
    subItems: [],
    mainHeight: 0,
    itemHeight: 0
  },
  watch: {
    items: function items() {
      this.updateSubItems();
      this.updateMainHeight();
    },
    maxHeight: function maxHeight() {
      this.updateItemHeight();
      this.updateMainHeight();
    },
    mainActiveIndex: 'updateSubItems'
  },
  methods: {
    // 当一个子项被选择时
    onSelectItem: function onSelectItem(event) {
      this.$emit('click-item', event.currentTarget.dataset.item);
    },
    // 当一个导航被点击时
    onClickNav: function onClickNav(event) {
      var index = event.currentTarget.dataset.index;
      this.$emit('click-nav', {
        index: index
      });
    },
    // 更新子项列表
    updateSubItems: function updateSubItems() {
      var selectedItem = this.data.items[this.data.mainActiveIndex] || {};
      this.setData({
        subItems: selectedItem.children || []
      });
      this.updateItemHeight();
    },
    // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
    updateMainHeight: function updateMainHeight() {
      var maxHeight = Math.max(this.data.items.length * ITEM_HEIGHT, this.data.subItems.length * ITEM_HEIGHT);
      this.setData({
        mainHeight: Math.min(maxHeight, this.data.maxHeight)
      });
    },
    // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
    updateItemHeight: function updateItemHeight() {
      this.setData({
        itemHeight: Math.min(this.data.subItems.length * ITEM_HEIGHT, this.data.maxHeight)
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwicHJvcHMiLCJpdGVtcyIsIkFycmF5IiwibWFpbkFjdGl2ZUluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwiYWN0aXZlSWQiLCJtYXhIZWlnaHQiLCJkYXRhIiwic3ViSXRlbXMiLCJtYWluSGVpZ2h0IiwiaXRlbUhlaWdodCIsIndhdGNoIiwidXBkYXRlU3ViSXRlbXMiLCJ1cGRhdGVNYWluSGVpZ2h0IiwidXBkYXRlSXRlbUhlaWdodCIsIm1ldGhvZHMiLCJvblNlbGVjdEl0ZW0iLCJldmVudCIsIiRlbWl0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwib25DbGlja05hdiIsImluZGV4Iiwic2VsZWN0ZWRJdGVtIiwic2V0RGF0YSIsImNoaWxkcmVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFJQSxjQUFjLEVBQWxCO0FBQ0EsOEJBQWM7QUFDWkMsU0FBTztBQUNMQyxXQUFPQyxLQURGO0FBRUxDLHFCQUFpQjtBQUNmQyxZQUFNQyxNQURTO0FBRWZDLGFBQU87QUFGUSxLQUZaO0FBTUxDLGNBQVU7QUFDUkgsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkMsS0FOTDtBQVVMRSxlQUFXO0FBQ1RKLFlBQU1DLE1BREc7QUFFVEMsYUFBTztBQUZFO0FBVk4sR0FESztBQWdCWkcsUUFBTTtBQUNKQyxjQUFVLEVBRE47QUFFSkMsZ0JBQVksQ0FGUjtBQUdKQyxnQkFBWTtBQUhSLEdBaEJNO0FBcUJaQyxTQUFPO0FBQ0xaLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLYSxjQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDRCxLQUpJO0FBS0xQLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixXQUFLUSxnQkFBTDtBQUNBLFdBQUtELGdCQUFMO0FBQ0QsS0FSSTtBQVNMWixxQkFBaUI7QUFUWixHQXJCSztBQWdDWmMsV0FBUztBQUNQO0FBQ0FDLGtCQUFjLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pDLFdBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCRCxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsSUFBckQ7QUFDRCxLQUpNO0FBS1A7QUFDQUMsZ0JBQVksU0FBU0EsVUFBVCxDQUFvQkwsS0FBcEIsRUFBMkI7QUFDckMsVUFBSU0sUUFBUU4sTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJHLEtBQXhDO0FBQ0EsV0FBS0wsS0FBTCxDQUFXLFdBQVgsRUFBd0I7QUFDdEJLLGVBQU9BO0FBRGUsT0FBeEI7QUFHRCxLQVhNO0FBWVA7QUFDQVgsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsVUFBSVksZUFBZSxLQUFLakIsSUFBTCxDQUFVUixLQUFWLENBQWdCLEtBQUtRLElBQUwsQ0FBVU4sZUFBMUIsS0FBOEMsRUFBakU7QUFDQSxXQUFLd0IsT0FBTCxDQUFhO0FBQ1hqQixrQkFBVWdCLGFBQWFFLFFBQWIsSUFBeUI7QUFEeEIsT0FBYjtBQUdBLFdBQUtaLGdCQUFMO0FBQ0QsS0FuQk07QUFvQlA7QUFDQUQsc0JBQWtCLFNBQVNBLGdCQUFULEdBQTRCO0FBQzVDLFVBQUlQLFlBQVlxQixLQUFLQyxHQUFMLENBQVMsS0FBS3JCLElBQUwsQ0FBVVIsS0FBVixDQUFnQjhCLE1BQWhCLEdBQXlCaEMsV0FBbEMsRUFBK0MsS0FBS1UsSUFBTCxDQUFVQyxRQUFWLENBQW1CcUIsTUFBbkIsR0FBNEJoQyxXQUEzRSxDQUFoQjtBQUNBLFdBQUs0QixPQUFMLENBQWE7QUFDWGhCLG9CQUFZa0IsS0FBS0csR0FBTCxDQUFTeEIsU0FBVCxFQUFvQixLQUFLQyxJQUFMLENBQVVELFNBQTlCO0FBREQsT0FBYjtBQUdELEtBMUJNO0FBMkJQO0FBQ0FRLHNCQUFrQixTQUFTQSxnQkFBVCxHQUE0QjtBQUM1QyxXQUFLVyxPQUFMLENBQWE7QUFDWGYsb0JBQVlpQixLQUFLRyxHQUFMLENBQVMsS0FBS3ZCLElBQUwsQ0FBVUMsUUFBVixDQUFtQnFCLE1BQW5CLEdBQTRCaEMsV0FBckMsRUFBa0QsS0FBS1UsSUFBTCxDQUFVRCxTQUE1RDtBQURELE9BQWI7QUFHRDtBQWhDTTtBQWhDRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG52YXIgSVRFTV9IRUlHSFQgPSA0NDtcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIGl0ZW1zOiBBcnJheSxcclxuICAgIG1haW5BY3RpdmVJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlSWQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIG1heEhlaWdodDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAzMDBcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHN1Ykl0ZW1zOiBbXSxcclxuICAgIG1haW5IZWlnaHQ6IDAsXHJcbiAgICBpdGVtSGVpZ2h0OiAwXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN1Ykl0ZW1zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTWFpbkhlaWdodCgpO1xyXG4gICAgfSxcclxuICAgIG1heEhlaWdodDogZnVuY3Rpb24gbWF4SGVpZ2h0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQoKTtcclxuICAgICAgdGhpcy51cGRhdGVNYWluSGVpZ2h0KCk7XHJcbiAgICB9LFxyXG4gICAgbWFpbkFjdGl2ZUluZGV4OiAndXBkYXRlU3ViSXRlbXMnXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyDlvZPkuIDkuKrlrZDpobnooqvpgInmi6nml7ZcclxuICAgIG9uU2VsZWN0SXRlbTogZnVuY3Rpb24gb25TZWxlY3RJdGVtKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWl0ZW0nLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5b2T5LiA5Liq5a+86Iiq6KKr54K55Ye75pe2XHJcbiAgICBvbkNsaWNrTmF2OiBmdW5jdGlvbiBvbkNsaWNrTmF2KGV2ZW50KSB7XHJcbiAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbmF2Jywge1xyXG4gICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDlrZDpobnliJfooahcclxuICAgIHVwZGF0ZVN1Ykl0ZW1zOiBmdW5jdGlvbiB1cGRhdGVTdWJJdGVtcygpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YS5pdGVtc1t0aGlzLmRhdGEubWFpbkFjdGl2ZUluZGV4XSB8fCB7fTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzdWJJdGVtczogc2VsZWN0ZWRJdGVtLmNoaWxkcmVuIHx8IFtdXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQoKTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDnu4Tku7bmlbTkvZPpq5jluqbvvIzmoLnmja7mnIDlpKfpq5jluqblkozlvZPliY3nu4Tku7bpnIDopoHlsZXnpLrnmoTpq5jluqbmnaXlhrPlrppcclxuICAgIHVwZGF0ZU1haW5IZWlnaHQ6IGZ1bmN0aW9uIHVwZGF0ZU1haW5IZWlnaHQoKSB7XHJcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRhdGEuaXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQsIHRoaXMuZGF0YS5zdWJJdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWFpbkhlaWdodDogTWF0aC5taW4obWF4SGVpZ2h0LCB0aGlzLmRhdGEubWF4SGVpZ2h0KVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDlrZDpobnliJfooajpq5jluqbvvIzmoLnmja7lj6/lsZXnpLrnmoTmnIDlpKfpq5jluqblkozlvZPliY3lrZDpobnliJfooajnmoTpq5jluqblhrPlrppcclxuICAgIHVwZGF0ZUl0ZW1IZWlnaHQ6IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1IZWlnaHQoKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXRlbUhlaWdodDogTWF0aC5taW4odGhpcy5kYXRhLnN1Ykl0ZW1zLmxlbmd0aCAqIElURU1fSEVJR0hULCB0aGlzLmRhdGEubWF4SGVpZ2h0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ== 
 			}); 	require("components/vant/tree-select/index.js");
 		__wxRoute = 'pages/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index.js';	define("pages/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _dictionary = require('./../cloud/dictionary.js');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cacheKey = 'groups';

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '单词本',
      usingComponents: {
        'van-icon': '../components/vant/icon',
        'demo-block': '../components/vant/demo-block',
        'van-cell': '../components/vant/cell',
        'van-cell-group': '../components/vant/cell-group'
      }
    }, _this.components = {}, _this.data = {
      list: {}
    }, _this.computed = {
      emptyPage: function emptyPage() {
        return JSON.stringify(this.list) === '{}';
      }
    }, _this.methods = {
      naviToNote: function naviToNote(d) {
        var _d$currentTarget$data = d.currentTarget.dataset,
            lan = _d$currentTarget$data.lan,
            group = _d$currentTarget$data.group;

        _utils2.default.navi('/pages/note?language=' + lan + '&group=' + group);
      },
      addLanguage: function addLanguage(d) {
        _utils2.default.navi('/pages/edit?pageMode=group');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.queryDict();
      // dict.save('English','默认组','easy',['简单','很简单']);
      // dict.save('English','默认组','hard',['难','很难']);
      // dict.save('English','组2','JAVA',['编程语言','一个编程语言']);
      // dict.save('English','组2','js',['编程语言','做网站']);
      // dict.save('日本語','默认组','哇达西哇',['简单','很简单']);
      // dict.save('日本語','组2','搜噶',['难','很难']);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.queryDict();
    }
  }, {
    key: 'queryDict',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data, list, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _dictionary2.default.all();

              case 2:
                data = _context.sent;
                list = {};

                data.forEach(function (item) {
                  var language = item.language,
                      word = item.word,
                      meanings = item.meanings,
                      group = item.group;

                  if (list[language] == null) list[language] = new Set();
                  list[language].add(group);
                });
                for (i in list) {
                  list[i] = [].concat(_toConsumableArray(list[i]));
                }
                this.cache(list);
                this.getCache();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function queryDict() {
        return _ref2.apply(this, arguments);
      }

      return queryDict;
    }()
  }, {
    key: 'cache',
    value: function cache(d) {
      wx.setStorageSync(cacheKey, d);
    }
  }, {
    key: 'getCache',
    value: function getCache() {
      this.list = wx.getStorageSync(cacheKey);
      this.$apply();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNhY2hlS2V5IiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJsaXN0IiwiY29tcHV0ZWQiLCJlbXB0eVBhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kcyIsIm5hdmlUb05vdGUiLCJkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsYW4iLCJncm91cCIsIlV0aWxzIiwibmF2aSIsImFkZExhbmd1YWdlIiwiZXZlbnRzIiwicXVlcnlEaWN0IiwiZGljdCIsImFsbCIsImZvckVhY2giLCJsYW5ndWFnZSIsIml0ZW0iLCJ3b3JkIiwibWVhbmluZ3MiLCJTZXQiLCJhZGQiLCJpIiwiY2FjaGUiLCJnZXRDYWNoZSIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxXQUFXLFFBQWpCOztJQUNxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLHlCQURHO0FBRWYsc0JBQWMsK0JBRkM7QUFHZixvQkFBWSx5QkFIRztBQUlmLDBCQUFrQjtBQUpIO0FBRlYsSyxRQVNUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFJUEMsUSxHQUFXO0FBQ1RDLGVBRFMsdUJBQ0c7QUFDVixlQUFPQyxLQUFLQyxTQUFMLENBQWUsS0FBS0osSUFBcEIsTUFBOEIsSUFBckM7QUFDRDtBQUhRLEssUUFNWEssTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFBQSxvQ0FDV0EsRUFBRUMsYUFBRixDQUFnQkMsT0FEM0I7QUFBQSxZQUNKQyxHQURJLHlCQUNKQSxHQURJO0FBQUEsWUFDQ0MsS0FERCx5QkFDQ0EsS0FERDs7QUFFWkMsd0JBQU1DLElBQU4sMkJBQW1DSCxHQUFuQyxlQUFnREMsS0FBaEQ7QUFDRCxPQUpPO0FBS1JHLGlCQUxRLHVCQUtJUCxDQUxKLEVBS087QUFDYkssd0JBQU1DLElBQU47QUFDRDtBQVBPLEssUUFVVkUsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsV0FBS0MsU0FBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLQSxTQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUVvQkMscUJBQUtDLEdBQUwsRTs7O0FBQWJuQixvQjtBQUNBQyxvQixHQUFPLEU7O0FBQ2JELHFCQUFLb0IsT0FBTCxDQUFhLGdCQUFRO0FBQUEsc0JBQ1hDLFFBRFcsR0FDeUJDLElBRHpCLENBQ1hELFFBRFc7QUFBQSxzQkFDREUsSUFEQyxHQUN5QkQsSUFEekIsQ0FDREMsSUFEQztBQUFBLHNCQUNLQyxRQURMLEdBQ3lCRixJQUR6QixDQUNLRSxRQURMO0FBQUEsc0JBQ2VaLEtBRGYsR0FDeUJVLElBRHpCLENBQ2VWLEtBRGY7O0FBRW5CLHNCQUFJWCxLQUFLb0IsUUFBTCxLQUFrQixJQUF0QixFQUE0QnBCLEtBQUtvQixRQUFMLElBQWlCLElBQUlJLEdBQUosRUFBakI7QUFDNUJ4Qix1QkFBS29CLFFBQUwsRUFBZUssR0FBZixDQUFtQmQsS0FBbkI7QUFDRCxpQkFKRDtBQUtBLHFCQUFTZSxDQUFULElBQWMxQixJQUFkLEVBQW9CO0FBQ2xCQSx1QkFBSzBCLENBQUwsaUNBQWMxQixLQUFLMEIsQ0FBTCxDQUFkO0FBQ0Q7QUFDRCxxQkFBS0MsS0FBTCxDQUFXM0IsSUFBWDtBQUNBLHFCQUFLNEIsUUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVJckIsQyxFQUFHO0FBQ1BzQixTQUFHQyxjQUFILENBQWtCckMsUUFBbEIsRUFBNEJjLENBQTVCO0FBQ0Q7OzsrQkFDVTtBQUNULFdBQUtQLElBQUwsR0FBWTZCLEdBQUdFLGNBQUgsQ0FBa0J0QyxRQUFsQixDQUFaO0FBQ0EsV0FBS3VDLE1BQUw7QUFDRDs7OztFQWpFZ0NDLGVBQUtDLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBkaWN0IGZyb20gJy4uL2Nsb3VkL2RpY3Rpb25hcnknO1xyXG5jb25zdCBjYWNoZUtleSA9ICdncm91cHMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNleivjeacrCcsXHJcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgJ3Zhbi1pY29uJzogJy4uL2NvbXBvbmVudHMvdmFudC9pY29uJyxcclxuICAgICAgJ2RlbW8tYmxvY2snOiAnLi4vY29tcG9uZW50cy92YW50L2RlbW8tYmxvY2snLFxyXG4gICAgICAndmFuLWNlbGwnOiAnLi4vY29tcG9uZW50cy92YW50L2NlbGwnLFxyXG4gICAgICAndmFuLWNlbGwtZ3JvdXAnOiAnLi4vY29tcG9uZW50cy92YW50L2NlbGwtZ3JvdXAnXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge307XHJcbiAgZGF0YSA9IHtcclxuICAgIGxpc3Q6IHt9XHJcbiAgfTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICBlbXB0eVBhZ2UoKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpID09PSAne30nO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBuYXZpVG9Ob3RlKGQpIHtcclxuICAgICAgY29uc3QgeyBsYW4sIGdyb3VwIH0gPSBkLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgICAgVXRpbHMubmF2aShgL3BhZ2VzL25vdGU/bGFuZ3VhZ2U9JHtsYW59Jmdyb3VwPSR7Z3JvdXB9YCk7XHJcbiAgICB9LFxyXG4gICAgYWRkTGFuZ3VhZ2UoZCkge1xyXG4gICAgICBVdGlscy5uYXZpKGAvcGFnZXMvZWRpdD9wYWdlTW9kZT1ncm91cGApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV2ZW50cyA9IHt9O1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnF1ZXJ5RGljdCgpO1xyXG4gICAgLy8gZGljdC5zYXZlKCdFbmdsaXNoJywn6buY6K6k57uEJywnZWFzeScsWyfnroDljZUnLCflvojnroDljZUnXSk7XHJcbiAgICAvLyBkaWN0LnNhdmUoJ0VuZ2xpc2gnLCfpu5jorqTnu4QnLCdoYXJkJyxbJ+mavicsJ+W+iOmaviddKTtcclxuICAgIC8vIGRpY3Quc2F2ZSgnRW5nbGlzaCcsJ+e7hDInLCdKQVZBJyxbJ+e8lueoi+ivreiogCcsJ+S4gOS4que8lueoi+ivreiogCddKTtcclxuICAgIC8vIGRpY3Quc2F2ZSgnRW5nbGlzaCcsJ+e7hDInLCdqcycsWyfnvJbnqIvor63oqIAnLCflgZrnvZHnq5knXSk7XHJcbiAgICAvLyBkaWN0LnNhdmUoJ+aXpeacrOiqnicsJ+m7mOiupOe7hCcsJ+WTh+i+vuilv+WThycsWyfnroDljZUnLCflvojnroDljZUnXSk7XHJcbiAgICAvLyBkaWN0LnNhdmUoJ+aXpeacrOiqnicsJ+e7hDInLCfmkJzlmbYnLFsn6Zq+Jywn5b6I6Zq+J10pO1xyXG4gIH1cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLnF1ZXJ5RGljdCgpO1xyXG4gIH1cclxuICBhc3luYyBxdWVyeURpY3QoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGljdC5hbGwoKTtcclxuICAgIGNvbnN0IGxpc3QgPSB7fTtcclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgeyBsYW5ndWFnZSwgd29yZCwgbWVhbmluZ3MsIGdyb3VwIH0gPSBpdGVtO1xyXG4gICAgICBpZiAobGlzdFtsYW5ndWFnZV0gPT0gbnVsbCkgbGlzdFtsYW5ndWFnZV0gPSBuZXcgU2V0KCk7XHJcbiAgICAgIGxpc3RbbGFuZ3VhZ2VdLmFkZChncm91cCk7XHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgaW4gbGlzdCkge1xyXG4gICAgICBsaXN0W2ldID0gWy4uLmxpc3RbaV1dO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWNoZShsaXN0KTtcclxuICAgIHRoaXMuZ2V0Q2FjaGUoKTtcclxuICB9XHJcbiAgY2FjaGUoZCkge1xyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoY2FjaGVLZXksIGQpO1xyXG4gIH1cclxuICBnZXRDYWNoZSgpIHtcclxuICAgIHRoaXMubGlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKGNhY2hlS2V5KTtcclxuICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== 
 			}); 	require("pages/index.js");
 		__wxRoute = 'pages/edit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/edit.js';	define("pages/edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dictionary = require('./../cloud/dictionary.js');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _flag = require('./../cloud/flag.js');

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var success = _flag2.default.success,
    fail = _flag2.default.fail;

var modify_mode = {
  addGroup: 'add group',
  addWord: 'add word',
  update: 'update'
};
var _page_mode = {
  group: '新增语言或分组',
  meaning: '新增释义',
  word: '新增词'
};

var Edit = function (_wepy$page) {
  _inherits(Edit, _wepy$page);

  function Edit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑',
      usingComponents: {
        'demo-block': '../components/vant/demo-block',
        'van-button': '../components/vant/button',
        'van-field': '../components/vant/field',
        'van-cell': '../components/vant/cell',
        'van-cell-group': '../components/vant/cell-group'
      }
    }, _this.components = {}, _this.data = {
      language: '',
      group: '',
      word: '',
      meanings: [''],
      _modifyMode: modify_mode.addGroup,
      _pageMode: _page_mode.group,
      focusIdx: 0
    }, _this.computed = {
      page_mode: function page_mode() {
        return _page_mode;
      }
    }, _this.methods = {
      typeNext: function typeNext(d) {
        this.focusIdx++;
      },
      onFocus: function onFocus(idx) {
        idx = Number(idx);
        if (Number(this.focusIdx) === idx) return;
        this.focusIdx = idx;
      },
      meaningInputed: function meaningInputed(d) {
        var value = d.detail;
        var idx = d.currentTarget.dataset.idx;
        this.meanings[idx] = value;
      },
      addMeaning: function addMeaning() {
        this.meanings.push('');
      },
      reduceMeaning: function reduceMeaning(e) {
        if (this.meanings.length <= 1) {
          _utils2.default.toastError('再删就没啦');
          return;
        }
        var idx = e.currentTarget.dataset.idx;
        _utils2.default.arr_splice(this.meanings, idx);
      },
      submit: function submit(d) {
        var _modifyMode = this._modifyMode;
        var originData = d.detail.value;
        var meanings = [];
        for (var key in originData) {
          if (key.indexOf('meaning') > -1) {
            meanings.push(originData[key]);
          }
        }
        var group = originData.group,
            language = originData.language,
            word = originData.word;

        var data = {
          meanings: meanings,
          group: group,
          language: language,
          word: word
        };
        if (_modifyMode === modify_mode.addGroup) {
          if (this.groupValueIsNotFulliled(data)) return;
          this.addGroup(data);
        } else if (_modifyMode === modify_mode.addWord) {
          if (this.wordValueIsNotFulliled(data)) return;
          this.addWord(data);
        } else if (_modifyMode === modify_mode.update) {
          if (this.wordValueIsNotFulliled(data)) return;
          this.update(data);
        }
      },
      deleteWord: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _dictionary2.default.deleteWord(this.rule._id);

                case 2:
                  res = _context.sent;

                  _utils2.default.gobackWhenSuccess(res);

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function deleteWord() {
          return _ref2.apply(this, arguments);
        }

        return deleteWord;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Edit, [{
    key: 'groupValueIsNotFulliled',
    value: function groupValueIsNotFulliled(_ref3) {
      var language = _ref3.language,
          group = _ref3.group;

      if (language === '') {
        _utils2.default.toastError('请输入语言');
        return true;
      }
      if (group === '') {
        _utils2.default.toastError('请输入分组');
        return true;
      }
      return false;
    }
  }, {
    key: 'wordValueIsNotFulliled',
    value: function wordValueIsNotFulliled(_ref4) {
      var word = _ref4.word,
          meanings = _ref4.meanings;

      if (word === '') {
        _utils2.default.toastError('请输入词句');
        return true;
      }
      if (meanings.indexOf('') > -1) {
        _utils2.default.toastError('有空格还没填');
        return true;
      }
      return false;
    }
  }, {
    key: 'addGroup',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref5) {
        var language = _ref5.language,
            group = _ref5.group,
            word = _ref5.word,
            meanings = _ref5.meanings;
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _dictionary2.default.save(language, group, word, meanings);

              case 2:
                res = _context2.sent;

                _utils2.default.gobackWhenSuccess(res);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addGroup(_x) {
        return _ref6.apply(this, arguments);
      }

      return addGroup;
    }()
  }, {
    key: 'addWord',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref7) {
        var word = _ref7.word,
            meanings = _ref7.meanings;

        var _rule, language, group, res;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _rule = this.rule, language = _rule.language, group = _rule.group;
                _context3.next = 3;
                return _dictionary2.default.save(language, group, word, meanings);

              case 3:
                res = _context3.sent;

                _utils2.default.gobackWhenSuccess(res);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWord(_x2) {
        return _ref8.apply(this, arguments);
      }

      return addWord;
    }()
  }, {
    key: 'update',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(d) {
        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _dictionary2.default.update(this.id, d);

              case 2:
                res = _context4.sent;

                _utils2.default.gobackWhenSuccess(res);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x3) {
        return _ref9.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(_ref10) {
      var rule = _ref10.rule,
          pageMode = _ref10.pageMode;

      this._pageMode = _page_mode[pageMode];
      if (rule != null) this.rule = JSON.parse(rule);
      this.decidePageMode();
      this.queryDictOnUpdateMode();
      this.HowBigIsfocusIdx();
    }
  }, {
    key: 'decidePageMode',
    value: function decidePageMode() {
      switch (this._pageMode) {
        case _page_mode.group:
          this._modifyMode = modify_mode.addGroup;
          break;
        case _page_mode.meaning:
          this._modifyMode = modify_mode.update;
          break;
        case _page_mode.word:
          this._modifyMode = modify_mode.addWord;
          break;
      }
    }
  }, {
    key: 'queryDictOnUpdateMode',
    value: function queryDictOnUpdateMode() {
      if (this._modifyMode === modify_mode.update) {
        this.queryDict();
      }
    }
  }, {
    key: 'queryDict',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data, _data$, _id, group, language, word, meanings;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _dictionary2.default.where(this.rule);

              case 2:
                data = _context5.sent;
                _data$ = data[0], _id = _data$._id, group = _data$.group, language = _data$.language, word = _data$.word, meanings = _data$.meanings;

                this.id = _id;
                this.language = language;
                this.group = group;
                this.word = word;
                this.meanings = meanings;
                this.$apply();

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function queryDict() {
        return _ref11.apply(this, arguments);
      }

      return queryDict;
    }()
  }, {
    key: 'HowBigIsfocusIdx',
    value: function HowBigIsfocusIdx() {
      switch (this._pageMode) {
        case _page_mode.group:
          this.focusIdx = 0;
          break;
        case _page_mode.meaning:
          this.focusIdx = 2;
          break;
        case _page_mode.word:
          this.focusIdx = 2;
          break;
      }
    }
  }]);

  return Edit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Edit , 'pages/edit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsic3VjY2VzcyIsImZsYWciLCJmYWlsIiwibW9kaWZ5X21vZGUiLCJhZGRHcm91cCIsImFkZFdvcmQiLCJ1cGRhdGUiLCJwYWdlX21vZGUiLCJncm91cCIsIm1lYW5pbmciLCJ3b3JkIiwiRWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImxhbmd1YWdlIiwibWVhbmluZ3MiLCJfbW9kaWZ5TW9kZSIsIl9wYWdlTW9kZSIsImZvY3VzSWR4IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidHlwZU5leHQiLCJkIiwib25Gb2N1cyIsImlkeCIsIk51bWJlciIsIm1lYW5pbmdJbnB1dGVkIiwidmFsdWUiLCJkZXRhaWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFkZE1lYW5pbmciLCJwdXNoIiwicmVkdWNlTWVhbmluZyIsImUiLCJsZW5ndGgiLCJVdGlscyIsInRvYXN0RXJyb3IiLCJhcnJfc3BsaWNlIiwic3VibWl0Iiwib3JpZ2luRGF0YSIsImtleSIsImluZGV4T2YiLCJncm91cFZhbHVlSXNOb3RGdWxsaWxlZCIsIndvcmRWYWx1ZUlzTm90RnVsbGlsZWQiLCJkZWxldGVXb3JkIiwiZGljdCIsInJ1bGUiLCJfaWQiLCJyZXMiLCJnb2JhY2tXaGVuU3VjY2VzcyIsInNhdmUiLCJpZCIsInBhZ2VNb2RlIiwiSlNPTiIsInBhcnNlIiwiZGVjaWRlUGFnZU1vZGUiLCJxdWVyeURpY3RPblVwZGF0ZU1vZGUiLCJIb3dCaWdJc2ZvY3VzSWR4IiwicXVlcnlEaWN0Iiwid2hlcmUiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ1FBLE8sR0FBa0JDLGMsQ0FBbEJELE87SUFBU0UsSSxHQUFTRCxjLENBQVRDLEk7O0FBQ2pCLElBQU1DLGNBQWM7QUFDbEJDLFlBQVUsV0FEUTtBQUVsQkMsV0FBUyxVQUZTO0FBR2xCQyxVQUFRO0FBSFUsQ0FBcEI7QUFLQSxJQUFNQyxhQUFZO0FBQ2hCQyxTQUFPLFNBRFM7QUFFaEJDLFdBQVMsTUFGTztBQUdoQkMsUUFBTTtBQUhVLENBQWxCOztJQUtxQkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjLCtCQURDO0FBRWYsc0JBQWMsMkJBRkM7QUFHZixxQkFBYSwwQkFIRTtBQUlmLG9CQUFZLHlCQUpHO0FBS2YsMEJBQWtCO0FBTEg7QUFGVixLLFFBVVRDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxULGFBQU8sRUFGRjtBQUdMRSxZQUFNLEVBSEQ7QUFJTFEsZ0JBQVUsQ0FBQyxFQUFELENBSkw7QUFLTEMsbUJBQWFoQixZQUFZQyxRQUxwQjtBQU1MZ0IsaUJBQVdiLFdBQVVDLEtBTmhCO0FBT0xhLGdCQUFVO0FBUEwsSyxRQVVQQyxRLEdBQVc7QUFDVGYsZUFEUyx1QkFDRztBQUNWLGVBQU9BLFVBQVA7QUFDRDtBQUhRLEssUUFNWGdCLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxDQURELEVBQ0k7QUFDVixhQUFLSixRQUFMO0FBQ0QsT0FITztBQUlSSyxhQUpRLG1CQUlBQyxHQUpBLEVBSUs7QUFDWEEsY0FBTUMsT0FBT0QsR0FBUCxDQUFOO0FBQ0EsWUFBSUMsT0FBTyxLQUFLUCxRQUFaLE1BQTBCTSxHQUE5QixFQUFtQztBQUNuQyxhQUFLTixRQUFMLEdBQWdCTSxHQUFoQjtBQUNELE9BUk87QUFTUkUsb0JBVFEsMEJBU09KLENBVFAsRUFTVTtBQUNoQixZQUFNSyxRQUFRTCxFQUFFTSxNQUFoQjtBQUNBLFlBQU1KLE1BQU1GLEVBQUVPLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixHQUFwQztBQUNBLGFBQUtULFFBQUwsQ0FBY1MsR0FBZCxJQUFxQkcsS0FBckI7QUFDRCxPQWJPO0FBY1JJLGdCQWRRLHdCQWNLO0FBQ1gsYUFBS2hCLFFBQUwsQ0FBY2lCLElBQWQsQ0FBbUIsRUFBbkI7QUFDRCxPQWhCTztBQWlCUkMsbUJBakJRLHlCQWlCTUMsQ0FqQk4sRUFpQlM7QUFDZixZQUFJLEtBQUtuQixRQUFMLENBQWNvQixNQUFkLElBQXdCLENBQTVCLEVBQStCO0FBQzdCQywwQkFBTUMsVUFBTixDQUFpQixPQUFqQjtBQUNBO0FBQ0Q7QUFDRCxZQUFNYixNQUFNVSxFQUFFTCxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk4sR0FBcEM7QUFDQVksd0JBQU1FLFVBQU4sQ0FBaUIsS0FBS3ZCLFFBQXRCLEVBQWdDUyxHQUFoQztBQUNELE9BeEJPO0FBeUJSZSxZQXpCUSxrQkF5QkRqQixDQXpCQyxFQXlCRTtBQUNSLFlBQU1OLGNBQWMsS0FBS0EsV0FBekI7QUFDQSxZQUFNd0IsYUFBYWxCLEVBQUVNLE1BQUYsQ0FBU0QsS0FBNUI7QUFDQSxZQUFNWixXQUFXLEVBQWpCO0FBQ0EsYUFBSyxJQUFJMEIsR0FBVCxJQUFnQkQsVUFBaEIsRUFBNEI7QUFDMUIsY0FBSUMsSUFBSUMsT0FBSixDQUFZLFNBQVosSUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUMvQjNCLHFCQUFTaUIsSUFBVCxDQUFjUSxXQUFXQyxHQUFYLENBQWQ7QUFDRDtBQUNGO0FBUk8sWUFTQXBDLEtBVEEsR0FTMEJtQyxVQVQxQixDQVNBbkMsS0FUQTtBQUFBLFlBU09TLFFBVFAsR0FTMEIwQixVQVQxQixDQVNPMUIsUUFUUDtBQUFBLFlBU2lCUCxJQVRqQixHQVMwQmlDLFVBVDFCLENBU2lCakMsSUFUakI7O0FBVVIsWUFBTU0sT0FBTztBQUNYRSw0QkFEVztBQUVYVixzQkFGVztBQUdYUyw0QkFIVztBQUlYUDtBQUpXLFNBQWI7QUFNQSxZQUFJUyxnQkFBZ0JoQixZQUFZQyxRQUFoQyxFQUEwQztBQUN4QyxjQUFJLEtBQUswQyx1QkFBTCxDQUE2QjlCLElBQTdCLENBQUosRUFBd0M7QUFDeEMsZUFBS1osUUFBTCxDQUFjWSxJQUFkO0FBQ0QsU0FIRCxNQUdPLElBQUlHLGdCQUFnQmhCLFlBQVlFLE9BQWhDLEVBQXlDO0FBQzlDLGNBQUksS0FBSzBDLHNCQUFMLENBQTRCL0IsSUFBNUIsQ0FBSixFQUF1QztBQUN2QyxlQUFLWCxPQUFMLENBQWFXLElBQWI7QUFDRCxTQUhNLE1BR0EsSUFBSUcsZ0JBQWdCaEIsWUFBWUcsTUFBaEMsRUFBd0M7QUFDN0MsY0FBSSxLQUFLeUMsc0JBQUwsQ0FBNEIvQixJQUE1QixDQUFKLEVBQXVDO0FBQ3ZDLGVBQUtWLE1BQUwsQ0FBWVUsSUFBWjtBQUNEO0FBQ0YsT0FuRE87QUFvREZnQyxnQkFwREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXFEWUMscUJBQUtELFVBQUwsQ0FBZ0IsS0FBS0UsSUFBTCxDQUFVQyxHQUExQixDQXJEWjs7QUFBQTtBQXFEQUMscUJBckRBOztBQXNETmIsa0NBQU1jLGlCQUFOLENBQXdCRCxHQUF4Qjs7QUF0RE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OzttREF5RG1DO0FBQUEsVUFBbkJuQyxRQUFtQixTQUFuQkEsUUFBbUI7QUFBQSxVQUFUVCxLQUFTLFNBQVRBLEtBQVM7O0FBQzNDLFVBQUlTLGFBQWEsRUFBakIsRUFBcUI7QUFDbkJzQix3QkFBTUMsVUFBTixDQUFpQixPQUFqQjtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0QsVUFBSWhDLFVBQVUsRUFBZCxFQUFrQjtBQUNoQitCLHdCQUFNQyxVQUFOLENBQWlCLE9BQWpCO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRCxhQUFPLEtBQVA7QUFDRDs7O2tEQUMwQztBQUFBLFVBQWxCOUIsSUFBa0IsU0FBbEJBLElBQWtCO0FBQUEsVUFBWlEsUUFBWSxTQUFaQSxRQUFZOztBQUN6QyxVQUFJUixTQUFTLEVBQWIsRUFBaUI7QUFDZjZCLHdCQUFNQyxVQUFOLENBQWlCLE9BQWpCO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRCxVQUFJdEIsU0FBUzJCLE9BQVQsQ0FBaUIsRUFBakIsSUFBdUIsQ0FBQyxDQUE1QixFQUErQjtBQUM3Qk4sd0JBQU1DLFVBQU4sQ0FBaUIsUUFBakI7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNELGFBQU8sS0FBUDtBQUNEOzs7OztZQUNnQnZCLFEsU0FBQUEsUTtZQUFVVCxLLFNBQUFBLEs7WUFBT0UsSSxTQUFBQSxJO1lBQU1RLFEsU0FBQUEsUTs7Ozs7Ozt1QkFDcEIrQixxQkFBS0ssSUFBTCxDQUFVckMsUUFBVixFQUFvQlQsS0FBcEIsRUFBMkJFLElBQTNCLEVBQWlDUSxRQUFqQyxDOzs7QUFBWmtDLG1COztBQUNOYixnQ0FBTWMsaUJBQU4sQ0FBd0JELEdBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVjMUMsSSxTQUFBQSxJO1lBQU1RLFEsU0FBQUEsUTs7Ozs7Ozs7d0JBQ1EsS0FBS2dDLEksRUFBekJqQyxRLFNBQUFBLFEsRUFBVVQsSyxTQUFBQSxLOzt1QkFDQXlDLHFCQUFLSyxJQUFMLENBQVVyQyxRQUFWLEVBQW9CVCxLQUFwQixFQUEyQkUsSUFBM0IsRUFBaUNRLFFBQWpDLEM7OztBQUFaa0MsbUI7O0FBQ05iLGdDQUFNYyxpQkFBTixDQUF3QkQsR0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBRVczQixDOzs7Ozs7O3VCQUNPd0IscUJBQUszQyxNQUFMLENBQVksS0FBS2lELEVBQWpCLEVBQXFCOUIsQ0FBckIsQzs7O0FBQVoyQixtQjs7QUFDTmIsZ0NBQU1jLGlCQUFOLENBQXdCRCxHQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUV5QjtBQUFBLFVBQWxCRixJQUFrQixVQUFsQkEsSUFBa0I7QUFBQSxVQUFaTSxRQUFZLFVBQVpBLFFBQVk7O0FBQ3pCLFdBQUtwQyxTQUFMLEdBQWlCYixXQUFVaUQsUUFBVixDQUFqQjtBQUNBLFVBQUlOLFFBQVEsSUFBWixFQUFrQixLQUFLQSxJQUFMLEdBQVlPLEtBQUtDLEtBQUwsQ0FBV1IsSUFBWCxDQUFaO0FBQ2xCLFdBQUtTLGNBQUw7QUFDQSxXQUFLQyxxQkFBTDtBQUNBLFdBQUtDLGdCQUFMO0FBQ0Q7OztxQ0FDZ0I7QUFDZixjQUFRLEtBQUt6QyxTQUFiO0FBQ0UsYUFBS2IsV0FBVUMsS0FBZjtBQUNFLGVBQUtXLFdBQUwsR0FBbUJoQixZQUFZQyxRQUEvQjtBQUNBO0FBQ0YsYUFBS0csV0FBVUUsT0FBZjtBQUNFLGVBQUtVLFdBQUwsR0FBbUJoQixZQUFZRyxNQUEvQjtBQUNBO0FBQ0YsYUFBS0MsV0FBVUcsSUFBZjtBQUNFLGVBQUtTLFdBQUwsR0FBbUJoQixZQUFZRSxPQUEvQjtBQUNBO0FBVEo7QUFXRDs7OzRDQUN1QjtBQUN0QixVQUFJLEtBQUtjLFdBQUwsS0FBcUJoQixZQUFZRyxNQUFyQyxFQUE2QztBQUMzQyxhQUFLd0QsU0FBTDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozt1QkFFb0JiLHFCQUFLYyxLQUFMLENBQVcsS0FBS2IsSUFBaEIsQzs7O0FBQWJsQyxvQjt5QkFDMkNBLEtBQUssQ0FBTCxDLEVBQXpDbUMsRyxVQUFBQSxHLEVBQUszQyxLLFVBQUFBLEssRUFBT1MsUSxVQUFBQSxRLEVBQVVQLEksVUFBQUEsSSxFQUFNUSxRLFVBQUFBLFE7O0FBQ3BDLHFCQUFLcUMsRUFBTCxHQUFVSixHQUFWO0FBQ0EscUJBQUtsQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLHFCQUFLVCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxxQkFBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EscUJBQUtRLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUs4QyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBRWlCO0FBQ2pCLGNBQVEsS0FBSzVDLFNBQWI7QUFDRSxhQUFLYixXQUFVQyxLQUFmO0FBQ0UsZUFBS2EsUUFBTCxHQUFnQixDQUFoQjtBQUNBO0FBQ0YsYUFBS2QsV0FBVUUsT0FBZjtBQUNFLGVBQUtZLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQTtBQUNGLGFBQUtkLFdBQVVHLElBQWY7QUFDRSxlQUFLVyxRQUFMLEdBQWdCLENBQWhCO0FBQ0E7QUFUSjtBQVdEOzs7O0VBdksrQjRDLGVBQUtDLEk7O2tCQUFsQnZELEkiLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGRpY3QgZnJvbSAnLi4vY2xvdWQvZGljdGlvbmFyeSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBmbGFnIGZyb20gJy4uL2Nsb3VkL2ZsYWcnO1xyXG5jb25zdCB7IHN1Y2Nlc3MsIGZhaWwgfSA9IGZsYWc7XHJcbmNvbnN0IG1vZGlmeV9tb2RlID0ge1xyXG4gIGFkZEdyb3VwOiAnYWRkIGdyb3VwJyxcclxuICBhZGRXb3JkOiAnYWRkIHdvcmQnLFxyXG4gIHVwZGF0ZTogJ3VwZGF0ZSdcclxufTtcclxuY29uc3QgcGFnZV9tb2RlID0ge1xyXG4gIGdyb3VwOiAn5paw5aKe6K+t6KiA5oiW5YiG57uEJyxcclxuICBtZWFuaW5nOiAn5paw5aKe6YeK5LmJJyxcclxuICB3b3JkOiAn5paw5aKe6K+NJ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6RJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnZGVtby1ibG9jayc6ICcuLi9jb21wb25lbnRzL3ZhbnQvZGVtby1ibG9jaycsXHJcbiAgICAgICd2YW4tYnV0dG9uJzogJy4uL2NvbXBvbmVudHMvdmFudC9idXR0b24nLFxyXG4gICAgICAndmFuLWZpZWxkJzogJy4uL2NvbXBvbmVudHMvdmFudC9maWVsZCcsXHJcbiAgICAgICd2YW4tY2VsbCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbCcsXHJcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC1ncm91cCdcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuICBkYXRhID0ge1xyXG4gICAgbGFuZ3VhZ2U6ICcnLFxyXG4gICAgZ3JvdXA6ICcnLFxyXG4gICAgd29yZDogJycsXHJcbiAgICBtZWFuaW5nczogWycnXSxcclxuICAgIF9tb2RpZnlNb2RlOiBtb2RpZnlfbW9kZS5hZGRHcm91cCxcclxuICAgIF9wYWdlTW9kZTogcGFnZV9tb2RlLmdyb3VwLFxyXG4gICAgZm9jdXNJZHg6IDBcclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIHBhZ2VfbW9kZSgpIHtcclxuICAgICAgcmV0dXJuIHBhZ2VfbW9kZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgdHlwZU5leHQoZCkge1xyXG4gICAgICB0aGlzLmZvY3VzSWR4Kys7XHJcbiAgICB9LFxyXG4gICAgb25Gb2N1cyhpZHgpIHtcclxuICAgICAgaWR4ID0gTnVtYmVyKGlkeCk7XHJcbiAgICAgIGlmIChOdW1iZXIodGhpcy5mb2N1c0lkeCkgPT09IGlkeCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmZvY3VzSWR4ID0gaWR4O1xyXG4gICAgfSxcclxuICAgIG1lYW5pbmdJbnB1dGVkKGQpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBkLmRldGFpbDtcclxuICAgICAgY29uc3QgaWR4ID0gZC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR4O1xyXG4gICAgICB0aGlzLm1lYW5pbmdzW2lkeF0gPSB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRNZWFuaW5nKCkge1xyXG4gICAgICB0aGlzLm1lYW5pbmdzLnB1c2goJycpO1xyXG4gICAgfSxcclxuICAgIHJlZHVjZU1lYW5pbmcoZSkge1xyXG4gICAgICBpZiAodGhpcy5tZWFuaW5ncy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIFV0aWxzLnRvYXN0RXJyb3IoJ+WGjeWIoOWwseayoeWVpicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpZHggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZHg7XHJcbiAgICAgIFV0aWxzLmFycl9zcGxpY2UodGhpcy5tZWFuaW5ncywgaWR4KTtcclxuICAgIH0sXHJcbiAgICBzdWJtaXQoZCkge1xyXG4gICAgICBjb25zdCBfbW9kaWZ5TW9kZSA9IHRoaXMuX21vZGlmeU1vZGU7XHJcbiAgICAgIGNvbnN0IG9yaWdpbkRhdGEgPSBkLmRldGFpbC52YWx1ZTtcclxuICAgICAgY29uc3QgbWVhbmluZ3MgPSBbXTtcclxuICAgICAgZm9yIChsZXQga2V5IGluIG9yaWdpbkRhdGEpIHtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ21lYW5pbmcnKSA+IC0xKSB7XHJcbiAgICAgICAgICBtZWFuaW5ncy5wdXNoKG9yaWdpbkRhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZ3JvdXAsIGxhbmd1YWdlLCB3b3JkIH0gPSBvcmlnaW5EYXRhO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIG1lYW5pbmdzLFxyXG4gICAgICAgIGdyb3VwLFxyXG4gICAgICAgIGxhbmd1YWdlLFxyXG4gICAgICAgIHdvcmRcclxuICAgICAgfTtcclxuICAgICAgaWYgKF9tb2RpZnlNb2RlID09PSBtb2RpZnlfbW9kZS5hZGRHcm91cCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdyb3VwVmFsdWVJc05vdEZ1bGxpbGVkKGRhdGEpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hZGRHcm91cChkYXRhKTtcclxuICAgICAgfSBlbHNlIGlmIChfbW9kaWZ5TW9kZSA9PT0gbW9kaWZ5X21vZGUuYWRkV29yZCkge1xyXG4gICAgICAgIGlmICh0aGlzLndvcmRWYWx1ZUlzTm90RnVsbGlsZWQoZGF0YSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFkZFdvcmQoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoX21vZGlmeU1vZGUgPT09IG1vZGlmeV9tb2RlLnVwZGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLndvcmRWYWx1ZUlzTm90RnVsbGlsZWQoZGF0YSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnVwZGF0ZShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZVdvcmQoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpY3QuZGVsZXRlV29yZCh0aGlzLnJ1bGUuX2lkKTtcclxuICAgICAgVXRpbHMuZ29iYWNrV2hlblN1Y2Nlc3MocmVzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGdyb3VwVmFsdWVJc05vdEZ1bGxpbGVkKHsgbGFuZ3VhZ2UsIGdyb3VwIH0pIHtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gJycpIHtcclxuICAgICAgVXRpbHMudG9hc3RFcnJvcign6K+36L6T5YWl6K+t6KiAJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwID09PSAnJykge1xyXG4gICAgICBVdGlscy50b2FzdEVycm9yKCfor7fovpPlhaXliIbnu4QnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHdvcmRWYWx1ZUlzTm90RnVsbGlsZWQoeyB3b3JkLCBtZWFuaW5ncyB9KSB7XHJcbiAgICBpZiAod29yZCA9PT0gJycpIHtcclxuICAgICAgVXRpbHMudG9hc3RFcnJvcign6K+36L6T5YWl6K+N5Y+lJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lYW5pbmdzLmluZGV4T2YoJycpID4gLTEpIHtcclxuICAgICAgVXRpbHMudG9hc3RFcnJvcign5pyJ56m65qC86L+Y5rKh5aGrJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBhc3luYyBhZGRHcm91cCh7IGxhbmd1YWdlLCBncm91cCwgd29yZCwgbWVhbmluZ3MgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZGljdC5zYXZlKGxhbmd1YWdlLCBncm91cCwgd29yZCwgbWVhbmluZ3MpO1xyXG4gICAgVXRpbHMuZ29iYWNrV2hlblN1Y2Nlc3MocmVzKTtcclxuICB9XHJcbiAgYXN5bmMgYWRkV29yZCh7IHdvcmQsIG1lYW5pbmdzIH0pIHtcclxuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIGdyb3VwIH0gPSB0aGlzLnJ1bGU7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBkaWN0LnNhdmUobGFuZ3VhZ2UsIGdyb3VwLCB3b3JkLCBtZWFuaW5ncyk7XHJcbiAgICBVdGlscy5nb2JhY2tXaGVuU3VjY2VzcyhyZXMpO1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGUoZCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZGljdC51cGRhdGUodGhpcy5pZCwgZCk7XHJcbiAgICBVdGlscy5nb2JhY2tXaGVuU3VjY2VzcyhyZXMpO1xyXG4gIH1cclxuICBvbkxvYWQoeyBydWxlLCBwYWdlTW9kZSB9KSB7XHJcbiAgICB0aGlzLl9wYWdlTW9kZSA9IHBhZ2VfbW9kZVtwYWdlTW9kZV07XHJcbiAgICBpZiAocnVsZSAhPSBudWxsKSB0aGlzLnJ1bGUgPSBKU09OLnBhcnNlKHJ1bGUpO1xyXG4gICAgdGhpcy5kZWNpZGVQYWdlTW9kZSgpO1xyXG4gICAgdGhpcy5xdWVyeURpY3RPblVwZGF0ZU1vZGUoKTtcclxuICAgIHRoaXMuSG93QmlnSXNmb2N1c0lkeCgpO1xyXG4gIH1cclxuICBkZWNpZGVQYWdlTW9kZSgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5fcGFnZU1vZGUpIHtcclxuICAgICAgY2FzZSBwYWdlX21vZGUuZ3JvdXA6XHJcbiAgICAgICAgdGhpcy5fbW9kaWZ5TW9kZSA9IG1vZGlmeV9tb2RlLmFkZEdyb3VwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHBhZ2VfbW9kZS5tZWFuaW5nOlxyXG4gICAgICAgIHRoaXMuX21vZGlmeU1vZGUgPSBtb2RpZnlfbW9kZS51cGRhdGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgcGFnZV9tb2RlLndvcmQ6XHJcbiAgICAgICAgdGhpcy5fbW9kaWZ5TW9kZSA9IG1vZGlmeV9tb2RlLmFkZFdvcmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHF1ZXJ5RGljdE9uVXBkYXRlTW9kZSgpIHtcclxuICAgIGlmICh0aGlzLl9tb2RpZnlNb2RlID09PSBtb2RpZnlfbW9kZS51cGRhdGUpIHtcclxuICAgICAgdGhpcy5xdWVyeURpY3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgcXVlcnlEaWN0KCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpY3Qud2hlcmUodGhpcy5ydWxlKTtcclxuICAgIGNvbnN0IHsgX2lkLCBncm91cCwgbGFuZ3VhZ2UsIHdvcmQsIG1lYW5pbmdzIH0gPSBkYXRhWzBdO1xyXG4gICAgdGhpcy5pZCA9IF9pZDtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgIHRoaXMud29yZCA9IHdvcmQ7XHJcbiAgICB0aGlzLm1lYW5pbmdzID0gbWVhbmluZ3M7XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxuICBIb3dCaWdJc2ZvY3VzSWR4KCkge1xyXG4gICAgc3dpdGNoICh0aGlzLl9wYWdlTW9kZSkge1xyXG4gICAgICBjYXNlIHBhZ2VfbW9kZS5ncm91cDpcclxuICAgICAgICB0aGlzLmZvY3VzSWR4ID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBwYWdlX21vZGUubWVhbmluZzpcclxuICAgICAgICB0aGlzLmZvY3VzSWR4ID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBwYWdlX21vZGUud29yZDpcclxuICAgICAgICB0aGlzLmZvY3VzSWR4ID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 
 			}); 	require("pages/edit.js");
 		__wxRoute = 'pages/note';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/note.js';	define("pages/note.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dictionary = require('./../cloud/dictionary.js');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Note = function (_wepy$page) {
  _inherits(Note, _wepy$page);

  function Note() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Note);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Note.__proto__ || Object.getPrototypeOf(Note)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Note',
      usingComponents: {
        'demo-block': '../components/vant/demo-block',
        'van-cell': '../components/vant/cell',
        'van-cell-group': '../components/vant/cell-group'
      }
    }, _this.components = {}, _this.data = {
      list: []
    }, _this.computed = {
      ThisPageIsEmpty: function ThisPageIsEmpty() {
        var list = this.list;
        return list.length === 1 && list[0].word == null;
      }
    }, _this.methods = {
      edit: function edit(e) {
        var _id = e.currentTarget.dataset._id;
        /* 跳转到编辑页 */

        _utils2.default.navi('/pages/edit?rule=' + JSON.stringify({ _id: _id }) + '&pageMode=meaning');
      },
      goToAddWord: function goToAddWord() {
        _utils2.default.navi('/pages/edit?rule=' + JSON.stringify(this.rule) + '&pageMode=word');
      },
      deleteGroup: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var uncomfirmed, uncomfirmedAgain, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _utils2.default.showActionSheet();

                case 2:
                  uncomfirmed = _context.sent;

                  if (!uncomfirmed) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt('return');

                case 5:
                  _context.next = 7;
                  return _utils2.default.showActionSheet(['删除后无法恢复，真的要删除吗？']);

                case 7:
                  uncomfirmedAgain = _context.sent;

                  if (!uncomfirmedAgain) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt('return');

                case 10:
                  _context.next = 12;
                  return _dictionary2.default.deleteGroup(this.rule);

                case 12:
                  res = _context.sent;

                  _utils2.default.gobackWhenSuccess(res);

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function deleteGroup() {
          return _ref2.apply(this, arguments);
        }

        return deleteGroup;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Note, [{
    key: 'onLoad',
    value: function onLoad(rule) {
      this.rule = rule;
      this.queryDict();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.queryDict();
    }
  }, {
    key: 'queryDict',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _dictionary2.default.where(this.rule);

              case 2:
                data = _context2.sent;

                this.list = data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function queryDict() {
        return _ref3.apply(this, arguments);
      }

      return queryDict;
    }()
  }]);

  return Note;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Note , 'pages/note'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUuanMiXSwibmFtZXMiOlsiTm90ZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJjb21wdXRlZCIsIlRoaXNQYWdlSXNFbXB0eSIsImxlbmd0aCIsIndvcmQiLCJtZXRob2RzIiwiZWRpdCIsImUiLCJfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIlV0aWxzIiwibmF2aSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnb1RvQWRkV29yZCIsInJ1bGUiLCJkZWxldGVHcm91cCIsInNob3dBY3Rpb25TaGVldCIsInVuY29tZmlybWVkIiwidW5jb21maXJtZWRBZ2FpbiIsImRpY3QiLCJyZXMiLCJnb2JhY2tXaGVuU3VjY2VzcyIsImV2ZW50cyIsInF1ZXJ5RGljdCIsIndoZXJlIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYywrQkFEQztBQUVmLG9CQUFZLHlCQUZHO0FBR2YsMEJBQWtCO0FBSEg7QUFGVixLLFFBUVRDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUlQQyxRLEdBQVc7QUFDVEMscUJBRFMsNkJBQ1M7QUFDaEIsWUFBTUYsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGVBQU9BLEtBQUtHLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJILEtBQUssQ0FBTCxFQUFRSSxJQUFSLElBQWdCLElBQTVDO0FBQ0Q7QUFKUSxLLFFBT1hDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFBQSxZQUNFQyxHQURGLEdBQ1VELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BRDFCLENBQ0VGLEdBREY7QUFFTjs7QUFDQUcsd0JBQU1DLElBQU4sdUJBQ3NCQyxLQUFLQyxTQUFMLENBQWUsRUFBRU4sUUFBRixFQUFmLENBRHRCO0FBR0QsT0FQTztBQVFSTyxpQkFSUSx5QkFRTTtBQUNaSix3QkFBTUMsSUFBTix1QkFBK0JDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLRSxJQUFwQixDQUEvQjtBQUNELE9BVk87QUFXRkMsaUJBWEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVlvQk4sZ0JBQU1PLGVBQU4sRUFacEI7O0FBQUE7QUFZQUMsNkJBWkE7O0FBQUEsdUJBYUZBLFdBYkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQWN5QlIsZ0JBQU1PLGVBQU4sQ0FBc0IsQ0FBQyxpQkFBRCxDQUF0QixDQWR6Qjs7QUFBQTtBQWNBRSxrQ0FkQTs7QUFBQSx1QkFlRkEsZ0JBZkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQWdCWUMscUJBQUtKLFdBQUwsQ0FBaUIsS0FBS0QsSUFBdEIsQ0FoQlo7O0FBQUE7QUFnQkFNLHFCQWhCQTs7QUFpQk5YLGtDQUFNWSxpQkFBTixDQUF3QkQsR0FBeEI7O0FBakJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQXFCVkUsTSxHQUFTLEU7Ozs7OzJCQUNGUixJLEVBQU07QUFDWCxXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLUyxTQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtBLFNBQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBRW9CSixxQkFBS0ssS0FBTCxDQUFXLEtBQUtWLElBQWhCLEM7OztBQUFiakIsb0I7O0FBQ04scUJBQUtDLElBQUwsR0FBWUQsSUFBWjtBQUNBLHFCQUFLNEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJEOEJDLGVBQUtDLEk7O2tCQUFsQm5DLEkiLCJmaWxlIjoibm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGRpY3QgZnJvbSAnLi4vY2xvdWQvZGljdGlvbmFyeSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdOb3RlJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnZGVtby1ibG9jayc6ICcuLi9jb21wb25lbnRzL3ZhbnQvZGVtby1ibG9jaycsXHJcbiAgICAgICd2YW4tY2VsbCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbCcsXHJcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC1ncm91cCdcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW11cclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIFRoaXNQYWdlSXNFbXB0eSgpIHtcclxuICAgICAgY29uc3QgbGlzdCA9IHRoaXMubGlzdDtcclxuICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID09PSAxICYmIGxpc3RbMF0ud29yZCA9PSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBlZGl0KGUpIHtcclxuICAgICAgY29uc3QgeyBfaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgICAvKiDot7PovazliLDnvJbovpHpobUgKi9cclxuICAgICAgVXRpbHMubmF2aShcclxuICAgICAgICBgL3BhZ2VzL2VkaXQ/cnVsZT0ke0pTT04uc3RyaW5naWZ5KHsgX2lkIH0pfSZwYWdlTW9kZT1tZWFuaW5nYFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGdvVG9BZGRXb3JkKCkge1xyXG4gICAgICBVdGlscy5uYXZpKGAvcGFnZXMvZWRpdD9ydWxlPSR7SlNPTi5zdHJpbmdpZnkodGhpcy5ydWxlKX0mcGFnZU1vZGU9d29yZGApO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZUdyb3VwKCkge1xyXG4gICAgICBjb25zdCB1bmNvbWZpcm1lZCA9IGF3YWl0IFV0aWxzLnNob3dBY3Rpb25TaGVldCgpO1xyXG4gICAgICBpZiAodW5jb21maXJtZWQpIHJldHVybjtcclxuICAgICAgY29uc3QgdW5jb21maXJtZWRBZ2FpbiA9IGF3YWl0IFV0aWxzLnNob3dBY3Rpb25TaGVldChbJ+WIoOmZpOWQjuaXoOazleaBouWkje+8jOecn+eahOimgeWIoOmZpOWQl++8nyddKTtcclxuICAgICAgaWYgKHVuY29tZmlybWVkQWdhaW4pIHJldHVybjtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGljdC5kZWxldGVHcm91cCh0aGlzLnJ1bGUpO1xyXG4gICAgICBVdGlscy5nb2JhY2tXaGVuU3VjY2VzcyhyZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV2ZW50cyA9IHt9O1xyXG4gIG9uTG9hZChydWxlKSB7XHJcbiAgICB0aGlzLnJ1bGUgPSBydWxlO1xyXG4gICAgdGhpcy5xdWVyeURpY3QoKTtcclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5xdWVyeURpY3QoKTtcclxuICB9XHJcbiAgYXN5bmMgcXVlcnlEaWN0KCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpY3Qud2hlcmUodGhpcy5ydWxlKTtcclxuICAgIHRoaXMubGlzdCA9IGRhdGE7XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxufVxyXG4iXX0= 
 			}); 	require("pages/note.js");
 	