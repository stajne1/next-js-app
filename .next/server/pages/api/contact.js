"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},8438:(e,t,a)=>{a.r(t),a.d(t,{config:()=>l,default:()=>d,routeModule:()=>u});var s={};a.r(s),a.d(s,{default:()=>handler});var n=a(1802),i=a(7153),r=a(6249);let o=require("mongodb");async function handler(e,t){if("POST"===e.method){let{name:a,email:s,message:n}=e.body;if(!a||""===a.trim()||!s||!s.includes("@")||!n||""===n.trim()){t.status(422).json({message:"Invalid Input."});return}let i={name:a,email:s,message:n},r=new o.MongoClient("mongodb+srv://stajne2:sandiptajne@cluster0.4i6ggww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");try{await r.connect()}catch{t.status(500).json({message:"Database connection failed."})}let d=r.db("blog"),l=await d.collection("messages").insertOne(i);r.close(),t.status(201).json({message:"Message sent successfully",data:{...i,id_:l._id}})}}let d=(0,r.l)(s,"default"),l=(0,r.l)(s,"config"),u=new n.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:s})}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[222],()=>__webpack_exec__(8438));module.exports=a})();