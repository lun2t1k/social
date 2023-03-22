"use strict";(self.webpackChunksocial=self.webpackChunksocial||[]).push([[295],{5295:function(e,s,t){t.r(s),t.d(s,{default:function(){return z}});var a=t(2791),n=t(7689),l=t(3531),r=t(6143),i=t(1087),c=t(1968),d=t(184);function x(){return(0,d.jsxs)("div",{className:"relative flex items-center justify-center p-2 md:justify-between",children:[(0,d.jsxs)(i.OL,{to:"/messages",className:"absolute left-[4px] flex items-center text-xs md:relative md:-left-[4px] md:text-sm",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})}),(0,d.jsx)("span",{children:"Back"})]}),(0,d.jsx)("span",{className:"w-full text-center text-sm font-semibold md:text-md",children:"User Name"}),(0,d.jsx)(c.Z,{img:null,size:"sm"})]})}function o(e){var s=e.message;return(0,d.jsx)("div",{id:s.id,className:"contactMessage flex w-full justify-start py-2",children:(0,d.jsxs)("div",{className:"flex flex-wrap items-end gap-2 max-w-[250px] sm:max-w-[400px] rounded-2xl rounded-bl-none bg-gray-200 py-2 px-3 text-xs dark:bg-zinc-700",children:[(0,d.jsx)("span",{className:"flex-[1_1_auto]",children:s.text}),(0,d.jsx)("span",{className:"italic uppercase text-2xs",children:s.time})]})})}function u(e){var s=e.message;return(0,d.jsx)("div",{id:s.id,className:"userMessage flex w-full justify-end py-2",children:(0,d.jsxs)("div",{className:"flex flex-wrap justify-end items-end gap-2 max-w-[250px] sm:max-w-[400px] rounded-2xl rounded-br-none bg-gradient-to-tr from-violet-400 to-fuchsia-400 py-2 px-3 text-xs text-white",children:[(0,d.jsx)("span",{className:"flex-[1_1_auto]",children:s.text}),(0,d.jsx)("span",{className:"italic uppercase text-2xs",children:s.time})]})})}var m=(0,l.$j)((function(e){return{messages:e.messages.messages}}),null)((function(e){var s=e.messages,t=(0,a.useRef)(null);return(0,a.useLayoutEffect)((function(){t.current.scrollTo(0,1e3)}),[s]),(0,d.jsx)("div",{ref:t,className:"flex flex-auto flex-col overflow-scroll border-y p-2 dark:border-y-zinc-800 md:px-5 md:py-3",children:s.map((function(e){return"contact"===e.type?(0,d.jsx)(o,{message:e},e.id):(0,d.jsx)(u,{message:e},e.id)}))})})),f=t(5705),h=t(2426),p=t.n(h),g=t(2671),j=t(4726),v=t(5839);function w(e){var s=e.extraClasses;return(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:" h-5 w-5 "+s,children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})})}var b=(0,l.$j)(null,{sendMessage:r.bG})((function(e){var s=e.sendMessage;return(0,d.jsx)(f.J9,{initialValues:{newMessageText:""},validationSchema:g.Ic,onSubmit:function(e,t){var a=p()().format("hh:mm a");s(e.newMessageText,a),t.resetForm()},children:function(e){var s=e.isSubmitting,t=e.isValid;return(0,d.jsxs)(f.l0,{className:"flex w-full items-end gap-2 p-2",children:[(0,d.jsx)(f.gN,{name:"newMessageText",as:"textarea",placeholder:"Message",className:j.J7.default+"h-0 max-h-[150px] min-h-[36px] rounded-tl-xl rounded-br-none py-2 px-3 text-xs"}),(0,d.jsx)("button",{type:"submit",disabled:!t||s,className:j.LI.size.md+j.LI.default+j.LI.disabled+"rounded-full !p-2",children:s?(0,d.jsx)(v.Z,{size:"md"}):(0,d.jsx)(w,{extraClasses:"relative -right-[1px]"})})]})}})}));function N(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{}),(0,d.jsx)(m,{}),(0,d.jsx)(b,{})]})}function k(e){var s=e.chat,t=" p-2 lg:pl-5 lg:pr-2 first:pt-2 last:pb-2 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all ease-in ";return(0,d.jsxs)(i.OL,{to:"/messages/".concat(s.id),className:function(e){return e.isActive?t+"bg-violet-400 text-white hover:bg-violet-400 dark:bg-violet-400 dark:hover:bg-violet-400":t},children:[(0,d.jsx)(c.Z,{img:s.avatar,size:"2md"}),(0,d.jsxs)("div",{className:"hidden min-w-0 flex-col lg:flex gap-1",children:[(0,d.jsx)("h5",{className:"font-semibold",children:s.name?s.name:"Undefined"}),(0,d.jsx)("span",{className:"truncate text-xs",children:s.lastMessage})]})]})}var y=(0,l.$j)((function(e){return{chats:e.messages.chats}}),null)((function(e){var s=e.chats;return(0,d.jsx)("div",{className:"h-full overflow-scroll lg:pb-[62px] divide-y dark:divide-zinc-800",children:s.map((function(e){return(0,d.jsx)(k,{chat:e},e.id)}))})}));function L(){return(0,d.jsx)("form",{className:"hidden border-b p-5 pr-2 dark:border-b-zinc-800 lg:flex",children:(0,d.jsx)("input",{type:"search",name:"",id:"",placeholder:"Search chats",className:"w-full outline-none dark:bg-zinc-900"})})}var z=(0,l.$j)((function(e){return{selectedChat:e.messages.selectedChat}}),{selectChat:r.Z1})((function(e){var s=e.selectChat,t=e.selectedChat;(0,a.useEffect)((function(){document.title="Messages"}),[]);var l=(0,n.UO)();return(0,a.useEffect)((function(){return document.body.classList.add("overflow-hidden"),document.body.classList.remove("overflow-hidden")}),[]),(0,a.useEffect)((function(){var e=l.userID;s(e)}),[l.userID,s]),(0,d.jsxs)("div",{className:j.su.default+"flex h-[75vh] lg:h-[80vh]",children:[(0,d.jsxs)("div",{className:"w-fit lg:min-w-[250px] lg:max-w-[250px]",children:[(0,d.jsx)(L,{}),(0,d.jsx)(y,{})]}),(0,d.jsx)("div",{className:"flex h-full w-full flex-col border-l dark:border-l-zinc-800",children:t?(0,d.jsx)(N,{}):(0,d.jsx)("div",{className:"flex items-center justify-center h-full p-5",children:(0,d.jsx)("h2",{className:"text-center",children:"Select a chat to start messaging"})})})]})}))}}]);
//# sourceMappingURL=295.777b565b.chunk.js.map