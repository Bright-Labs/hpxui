(function(e){function t(t){for(var r,n,o=t[0],l=t[1],c=t[2],u=0,v=[];u<o.length;u++)n=o[u],s[n]&&v.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={0:0},i=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/hpxui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([1,1]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("Vtdi")},5:function(e,t){},6:function(e,t){},7:function(e,t){},BslV:function(e,t,a){},HU7k:function(e,t,a){"use strict";var r=a("idId"),s=a.n(r);s.a},Vtdi:function(e,t,a){"use strict";a.r(t);a("Vd3H"),a("RQRG"),a("/uf1"),a("uaHG"),a("ZNX/"),a("CX2u"),a("Oyvg"),a("OEbY"),a("SRfc"),a("pIFo"),a("KKXr"),a("OG14"),a("a1Th"),a("ioFf"),a("rE2o"),a("R5XZ"),a("Ew+T"),a("rGqo");var r=a("Kw5r"),s=a("zlta"),i=a.n(s);a("v0CA");r["default"].use(i.a,{});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{persistent:"","mini-variant":e.miniVariant,clipped:e.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[a("v-list-tile",{attrs:{to:"/",exact:""}},[a("v-list-tile-action",[a("v-icon",[e._v("home")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Home")])],1)],1),a("v-list-tile",{attrs:{to:"/status",exact:""}},[a("v-list-tile-action",[a("v-icon",[e._v("info")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Status")])],1)],1),a("v-list-tile",{attrs:{to:"/create",exact:""}},[a("v-list-tile-action",[a("v-icon",[e._v("build")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Create")])],1)],1)],1)],1),a("v-toolbar",{attrs:{app:"","clipped-left":e.clipped}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),a("v-spacer")],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{fixed:e.fixed,app:""}},[a("span",[e._v("© 2018")])])],1)},o=[],l={name:"App",data(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,title:"Hacker Pixel"}}},c=l,d=a("KHd+"),u=Object(d["a"])(c,n,o,!1,null,null,null),v=u.exports,h=a("e7F3"),p=a("jE9Z"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[e._v("You can either "),a("router-link",{attrs:{to:"/create"}},[e._v("create")]),e._v("\nor "),a("router-link",{attrs:{to:"/status"}},[e._v("check")]),e._v(" on a stack.")],1)},m=[],x={name:"home"},S=x,_=Object(d["a"])(S,f,m,!1,null,null,null),y=_.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"status"},[e._v("This app communicates with Amazon through their SDK.  Your credentials are never sent to us."),a("StatusPoller",{attrs:{start_polling:!0,initial_status:"Please fill out the form to check on your stack."}}),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"AWS Access Key","data-vv-name":"access key","error-messages":e.errors.collect("access key"),required:""},model:{value:e.sharedState.accessKey,callback:function(t){e.$set(e.sharedState,"accessKey",t)},expression:"sharedState.accessKey"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"AWS Secret Key","data-vv-name":"secret key","error-messages":e.errors.collect("secret key"),required:""},model:{value:e.sharedState.secretKey,callback:function(t){e.$set(e.sharedState,"secretKey",t)},expression:"sharedState.secretKey"}}),a("v-text-field",{attrs:{label:"AWS Region",hint:"Only us-west-2 is supported for now",readonly:"",required:""},model:{value:e.sharedState.region,callback:function(t){e.$set(e.sharedState,"region",t)},expression:"sharedState.region"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[a-zA-Z0-9]{1,16}$/},expression:"{required: true, regex: /^[a-zA-Z0-9]{1,16}$/}"}],attrs:{label:"Stack Prefix","data-vv-name":"prefix","error-messages":e.errors.collect("prefix"),pattern:"[a-zA-Z0-9]{1,16}",counter:"16",required:""},model:{value:e.sharedState.prefix,callback:function(t){e.$set(e.sharedState,"prefix",t)},expression:"sharedState.prefix"}})],1)],1)},b=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"statuspoller"},[a("v-card",[a("v-card-title",[e._v(e._s(e.sharedState.prefix)+" Status")]),a("v-card-text",[a("div",{domProps:{innerHTML:e._s(e.status)}}),e.next_update?a("div",[e._v("Next update in "+e._s(e.next_update))]):e._e()])],1)],1)},g=[],P=a("k5N+"),$=a("aN4m"),A=a.n($),K=a("Yt1h"),q=a.n(K),z=a("t+9D"),O=a.n(z),C=a("lr15"),E=a.n(C),R={async makeStack(e,t,a,r,s,i,n,o,l){const c=new O.a({region:a,credentials:{accessKeyId:e,secretAccessKey:t}}),d={StackName:`${r}-${a}`,Capabilities:["CAPABILITY_NAMED_IAM"],TemplateURL:`https://hpx-release-us-west-2.s3.amazonaws.com/${s}/cloudformation/hpx.yaml`,Parameters:[{ParameterKey:"Prefix",ParameterValue:r},{ParameterKey:"DistS3Bucket",ParameterValue:"hpx-release-us-west-2"},{ParameterKey:"DistS3Key",ParameterValue:s},{ParameterKey:"RedshiftUser",ParameterValue:i},{ParameterKey:"RedshiftPassword",ParameterValue:n},{ParameterKey:"VpcCidrBlock",ParameterValue:o},{ParameterKey:"WhitelistCidr",ParameterValue:l}]};return c.createStack(d).promise()},async checkStack(e,t,a,r){const s={region:a,credentials:{accessKeyId:e,secretAccessKey:t}},i=new O.a(s),n=new E.a(s),o=new q.a(s),l=new O.a({region:a,credentials:{accessKeyId:e,secretAccessKey:t}}),c={StackName:`${r}-${a}`},d=(await l.describeStacks(c).promise()).Stacks;if("CREATE_COMPLETE"==d[0].StackStatus||"UPDATE_COMPLETE"==d[0].StackStatus){const e=(await i.describeStackResources(c).promise()).StackResources,t=e.find(e=>"HPXRedshiftCluster"===e.LogicalResourceId).PhysicalResourceId,a=e.find(e=>"PixelServerCloudfrontDistribution"===e.LogicalResourceId).PhysicalResourceId,r=await Promise.all([n.describeClusters({ClusterIdentifier:t}).promise(),o.getDistribution({Id:a}).promise()]),s=Object(P["a"])(r,2),l=s[0],u=s[1];return[d[0],l,u]}return[d[0],null,null]}},N={name:"StatusPoller",props:["start_polling","initial_status"],data:e=>({sharedState:e.$store.state,next_update:0,cloud_formation:null,cloud_front:null,redshift:null,aws_error:null,status:e.initial_status,stopPoller:!1,paused:!1}),computed:{ready:function(){return this.start_polling&&this.sharedState.accessKey&&this.sharedState.secretKey&&this.sharedState.region&&this.sharedState.prefix&&!this.paused}},created(){A()(async(e,t)=>{if(this.stopPoller)t();else if(this.ready&&(this.update_status(),this.next_update-=1,this.next_update<1)){this.next_update=30,this.$hpx("hpxui.checkstatus");try{var a=await R.checkStack(this.sharedState.accessKey,this.sharedState.secretKey,this.sharedState.region,this.sharedState.prefix),r=Object(P["a"])(a,3);this.cloud_formation=r[0],this.redshift=r[1],this.cloudfront=r[2],this.cloud_formation?this.$hpx(`hpxui.${this.cloud_formation.StackStatus}`):this.$hpx("hpxui.NO_STACK")}catch(e){this.aws_error=e}this.update_status()}},1e3)},beforeDestroy(){this.stopPoller=!0},methods:{pause(){this.paused=!0,this.next_update=0},update_status(){if(this.aws_error)return this.status=`Got an error from aws: <pre>${this.aws_error}</pre>  Check the credentials?`,void this.pause();if(this.cloud_formation){if(this.redshift&&this.cloudfront){const e=`${this.redshift.Clusters[0].Endpoint.Address}:${this.redshift.Clusters[0].Endpoint.Port}`,t=`http://${this.cloudfront.Distribution.DomainName}//1x1.gif?a=value1&b=value2&c=value3&d=value4`;return this.status=`\n        Your stack is ready!\n          <div>\n        Redshift Endpoint: ${e}\n          </div>\n          <div>\n        Pixel Url: ${t}\n          </div>\n              `,void this.pause()}if(!this.cloud_formation.StackStatus.endsWith("_IN_PROGRESS"))return this.pause(),void(this.status=`This stack is in ${this.cloud_formation.StackStatus} state.`);this.status=`Stack not ready yet: Got ${this.cloud_formation.StackStatus} back from AWS.`}else this.status="Fetching status from AWS."}},watch:{sharedState:{deep:!0,handler:function(){this.paused=!1,this.next_update=0,this.aws_error=!1}}}},T=N,j=(a("YWv+"),Object(d["a"])(T,k,g,!1,null,"050a4f6d",null)),Z=j.exports,I={name:"Status",components:{StatusPoller:Z},data:e=>({sharedState:e.$store.state,valid:!1}),methods:{}},V=I,W=(a("XYAF"),Object(d["a"])(V,w,b,!1,null,"7608f805",null)),D=W.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create"},[e._v("This app communicates with Amazon through their SDK.  Your credentials are never sent to us."),a("v-alert",{attrs:{value:e.error,type:"error"}},[e._v("Got this error from AWS: "),a("pre",[e._v(e._s(e.error))]),e._v("  Are your credentials right?")]),e.show_poller?a("StatusPoller",{attrs:{initial_status:"Bringing up your stack!",start_polling:e.show_poller}}):e._e(),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"AWS Access Key","data-vv-name":"access key","error-messages":e.errors.collect("access key"),required:""},model:{value:e.sharedState.accessKey,callback:function(t){e.$set(e.sharedState,"accessKey",t)},expression:"sharedState.accessKey"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"AWS Secret Key","data-vv-name":"secret key","error-messages":e.errors.collect("secret key"),required:""},model:{value:e.sharedState.secretKey,callback:function(t){e.$set(e.sharedState,"secretKey",t)},expression:"sharedState.secretKey"}}),a("v-text-field",{attrs:{label:"AWS Region",hint:"Only us-west-2 is supported for now",readonly:"",required:""},model:{value:e.sharedState.region,callback:function(t){e.$set(e.sharedState,"region",t)},expression:"sharedState.region"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[a-zA-Z0-9]{1,16}$/},expression:"{required: true, regex: /^[a-zA-Z0-9]{1,16}$/}"}],attrs:{label:"Stack Prefix","data-vv-name":"prefix","error-messages":e.errors.collect("prefix"),pattern:"[a-zA-Z0-9]{1,16}",counter:"16",required:""},model:{value:e.sharedState.prefix,callback:function(t){e.$set(e.sharedState,"prefix",t)},expression:"sharedState.prefix"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"HPX Version","data-vv-name":"version","error-messages":e.errors.collect("version"),required:""},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[a-z]{1}[a-z0-9]{0,127}$/},expression:"{required: true, regex: /^[a-z]{1}[a-z0-9]{0,127}$/}"}],attrs:{label:"Redshift Username","data-vv-name":"redshift username","error-messages":e.errors.collect("redshift username"),pattern:"[a-z]{1}[a-z0-9]{0,127}",counter:"128",required:""},model:{value:e.redshift_username,callback:function(t){e.redshift_username=t},expression:"redshift_username"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[a-zA-Z0-9]{8,}$/},expression:"{required: true, regex: /^(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[a-zA-Z0-9]{8,}$/}"}],attrs:{label:"Redshift Password","data-vv-name":"redshift password","error-messages":e.errors.collect("redshift password"),pattern:"(?=D*d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[a-zA-Z0-9]{8,}",placeholder:"Aa123456",hint:"At last 8 characters, and contain an uppercase letter, an lowercase letter, and a number","persistent-hint":"",required:""},model:{value:e.redshift_password,callback:function(t){e.redshift_password=t},expression:"redshift_password"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/},expression:"{required: true, regex: /^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/}"}],attrs:{label:"VPC Block","data-vv-name":"vpc","error-messages":e.errors.collect("vpc"),pattern:"([0-9]{1,3}.){3}[0-9]{1,3}(/([0-9]|[1-2][0-9]|3[0-2]))?",required:""},model:{value:e.vpc,callback:function(t){e.vpc=t},expression:"vpc"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/},expression:"{required: true, regex: /^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/}"}],attrs:{label:"Whitelist IP Block","data-vv-name":"whitelist","error-messages":e.errors.collect("whitelist"),pattern:"([0-9]{1,3}.){3}[0-9]{1,3}(/([0-9]|[1-2][0-9]|3[0-2]))?",required:""},model:{value:e.whitelist,callback:function(t){e.whitelist=t},expression:"whitelist"}}),a("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("create")])],1)],1)},Y=[],G=a("x8Ga"),L=a.n(G),M=a("5c6j"),B=a.n(M),X={name:"Create",components:{StatusPoller:Z},data:e=>({sharedState:e.$store.state,valid:!1,region:"us-west-2",version:"LATEST",redshift_username:"hpx",redshift_password:"",vpc:"172.31.0.0/16",whitelist:"",show_poller:!1,error:!1}),async created(){const e=await Promise.all([L()(),B()("http://hpx-release-us-west-2.s3.amazonaws.com/LATEST")]),t=Object(P["a"])(e,2),a=t[0],r=t[1];this.whitelist=`${a}/32`,this.version=r.body},methods:{async submit(){if(this.error=!1,await this.$validator.validateAll())try{await R.makeStack(this.sharedState.accessKey,this.sharedState.secretKey,this.sharedState.region,this.sharedState.prefix,this.version,this.redshift_username,this.redshift_password,this.vpc,this.whitelist),this.$hpx("hpxui.create",this.version),this.show_poller=!0}catch(e){this.error=e}}}},U=X,F=(a("HU7k"),Object(d["a"])(U,H,Y,!1,null,"0e41156d",null)),J=F.exports;r["default"].use(p["a"]);var Q=new p["a"]({routes:[{path:"/",name:"home",component:y},{path:"/create",name:"create",component:J},{path:"/status",name:"status",component:D}]}),ee=a("u+81"),te=a.n(ee),ae=a("+Hlu"),re=a.n(ae);r["default"].use(h["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$store={state:{accessKey:"",secretKey:"",prefix:"hpx",region:"us-west-2"}};let se=re()();r["default"].prototype.$hpx=async function(e,t){te()("http://d3heinlctv8z2v.cloudfront.net/1x1.gif",e,t,se,re()(),!0)},new r["default"]({router:Q,render:e=>e(v)}).$mount("#app")},XYAF:function(e,t,a){"use strict";var r=a("lyW+"),s=a.n(r);s.a},"YWv+":function(e,t,a){"use strict";var r=a("BslV"),s=a.n(r);s.a},idId:function(e,t,a){},"lyW+":function(e,t,a){}});
//# sourceMappingURL=app.f5f70f9b.js.map