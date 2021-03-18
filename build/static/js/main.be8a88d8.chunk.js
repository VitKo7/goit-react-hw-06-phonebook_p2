(this["webpackJsonpgoit-react-hw-06-phonebook_p2"]=this["webpackJsonpgoit-react-hw-06-phonebook_p2"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"App_container__3rn_7",contacts:"App_contacts__1IN3r",contactsTitle:"App_contactsTitle__2qcxx"}},16:function(t,e,n){t.exports={btnDelete:"ContactListItem_btnDelete__HavdW"}},17:function(t,e,n){t.exports={list:"ContactList_list__2fA6d",contactListItem:"ContactList_contactListItem__iC-Sp"}},22:function(t,e,n){t.exports={input:"Filter_input__1Axcw"}},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),s=n(7),o=n.n(s),i=n(3),l=n(8),u=n(9),b=n(11),j=n(10),d=n(5),m=n(4),h="contacts/handleInput",p="contacts/createContact",O="contacts/handleRemove",f=Object(m.b)(h),x=Object(m.b)(p),_=Object(m.b)(O),v=n(6),C=n.n(v),N=n(1),y=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInput=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number,r=t.props.contacts.find((function(t){return t.name===c||t.number===a}));if(r)alert("Either '".concat(r.name,"' or '").concat(r.number,"' already exists"));else if(0===c.length||0===a.length)alert("Please, fill in all the fields");else{var s={id:Object(m.d)(),name:c,number:a};t.props.createContact(s)}t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.addContactForm,children:[Object(N.jsx)("label",{className:C.a.label,children:"Name:"}),Object(N.jsx)("input",{name:"name",type:"text",placeholder:"Name Surname",className:C.a.input,onChange:this.handleInput,value:e}),Object(N.jsx)("label",{className:C.a.label,children:"Number:"}),Object(N.jsx)("input",{name:"number",type:"tel",placeholder:"123-456",pattern:"[0-9]{3}-[0-9]{3}",className:C.a.input,onChange:this.handleInput,value:n}),Object(N.jsxs)("span",{className:C.a.text,children:[Object(N.jsx)("i",{children:"Use this format only:"})," xxx-xxx"]}),Object(N.jsx)("button",{type:"submit",className:C.a.btnAdd,children:"Add contact"})]})})}}]),n}(a.Component),g={createContact:x},F=Object(i.b)((function(t){return{contacts:t.contacts.items}}),g)(y),I=n(21),A=n(16),w=n.n(A),L={handleRemove:_},S=Object(i.b)((function(t){return{}}),L)((function(t){var e=t.id,n=t.name,c=t.number,a=t.handleRemove;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("p",{className:w.a.contact,children:[n,": ",c]}),Object(N.jsx)("button",{"data-id":e,onClick:function(t){return a(e)},type:"button",className:w.a.btnDelete,children:"Delete"})]})})),k=n(17),D=n.n(k),T=function(t){var e=t.contacts,n=e.filter;return e.items.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},J=Object(i.b)((function(t){return{contacts:T(t)}}),{})((function(t){var e=t.contacts;return Object(N.jsx)("div",{className:"contactsList",children:0===e.length?Object(N.jsx)("p",{children:"There are no contacts here yet ..."}):Object(N.jsx)("ul",{className:D.a.list,children:e.map((function(t){return Object(N.jsx)("li",{className:D.a.contactListItem,children:Object(N.jsx)(S,Object(I.a)({},t))},t.id)}))})})})),R=n(22),E=n.n(R),K={handleInput:f},M=Object(i.b)((function(t){return{filter:t.contacts.filter,contacts:t.contacts.items}}),K)((function(t){var e=t.contacts,n=t.filter,c=t.handleInput;return Object(N.jsx)(N.Fragment,{children:e.length<2?Object(N.jsx)("span",{children:" "}):Object(N.jsxs)("div",{className:"contactsFilter",children:[Object(N.jsx)("p",{children:"Find contacts by name:"}),Object(N.jsx)("input",{name:"filter",type:"text",autoComplete:"off",className:E.a.input,onChange:function(t){return c(t.target.value)},value:n})]})})})),P=n(12),q=n.n(P),B=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:q.a.container,children:[Object(N.jsx)("h2",{children:"Phonebook"}),Object(N.jsx)(F,{}),Object(N.jsxs)("div",{className:q.a.contacts,children:[Object(N.jsx)("h3",{className:q.a.contactsTitle,children:"Contacts"}),Object(N.jsx)(M,{}),Object(N.jsx)(J,{})]})]})}}]),n}(a.Component),H=Object(i.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),{})(B),U=n(18),W=n(2),z=Object(m.c)([],(c={},Object(d.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(d.a)(c,_,(function(t,e){var n=e.payload;return Object(U.a)(t.filter((function(t){return t.id!==n})))})),c)),G=Object(m.c)("",Object(d.a)({},f,(function(t,e){return e.payload}))),Q=Object(W.c)({items:z,filter:G}),V=Object(m.a)({reducer:{contacts:Q},devTools:!1});n(36),n(37);o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(i.a,{store:V,children:Object(N.jsx)(H,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={addContactForm:"ContactForm_addContactForm__2SNN3",label:"ContactForm_label__u9D1a",input:"ContactForm_input__3J0J3",text:"ContactForm_text__1M-wa",btnAdd:"ContactForm_btnAdd__2K0tK"}}},[[38,1,2]]]);
//# sourceMappingURL=main.be8a88d8.chunk.js.map