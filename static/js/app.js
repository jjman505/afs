"use strict";function IncorrectValueTypeException(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];this.message=t.join(" "),this.name="IncorrectValueTypeException",this.toString=function(){return this.name+": "+this.message}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var app_id="pJnEJkICIETGpnDO0HkGamSYTTjd5b2ZYa6iePuQ",js_key="Ac5ozu7vWZG5prjLiegH5zZ9IPn20aM7kSVb8cWH";Parse.initialize(app_id,js_key);var afs=angular.module("afs",["ui.router"]).run(["$rootScope",function(e){e.sessionUser=Parse.User.current()}]),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Campaign=function(){function e(t){_classCallCheck(this,e),this._Campaign=new(Parse.Object.extend("Campaign"));for(var n in t)if(t.hasOwnProperty(n)){var i=n,a=t[n];this._Campaign.set(i,a)}}return _createClass(e,[{key:"save",value:function(){return this._Campaign.save()}},{key:"CommunityId",set:function(e){this._Campaign.set("CommunityId",e)},get:function(){this._Campaign.get("CommunityId")}},{key:"ShelterId",set:function(e){this._Campaign.set("ShelterId",e)},get:function(){this._Campaign.get("ShelterId")}},{key:"Description",set:function(e){if("string"!=typeof e)throw new IncorrectValueTypeException("Expected String, got",typeof e);this._Campaign.set("Description",e)},get:function(){return this._Campaign.get("Description")}},{key:"Verified",set:function(e){if("boolean"!=typeof e)throw new IncorrectValueTypeException("Expected Boolean, got",typeof e);this._Campaign.set("Verified",Boolean(e))},get:function(){return this._Campaign.get("Verified")}}]),e}(),test=new Campaign;test.Description="hello this is a test",test.save().then(function(e){test.Verified=!0,test.save().then(function(e){console.log(e)})});