(self["webpackChunkzugo_client"] = self["webpackChunkzugo_client"] || []).push([[235],{

/***/ 2454:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ get; },
/* harmony export */   "v": function() { return /* binding */ post; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5666);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function get(_x) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var params,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            _context.prev = 1;

            if (!params) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return (0,axios__WEBPACK_IMPORTED_MODULE_3__.get)(url, {
              params: params
            });

          case 5:
            return _context.abrupt("return", _context.sent);

          case 8:
            _context.next = 10;
            return (0,axios__WEBPACK_IMPORTED_MODULE_3__.get)(url);

          case 10:
            return _context.abrupt("return", _context.sent);

          case 11:
            _context.next = 21;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);

            if (!(_context.t0.response.status >= 400 && _context.t0.response.status < 500)) {
              _context.next = 20;
              break;
            }

            console.error(_context.t0.response.status + " " + _context.t0.response.data.message);
            return _context.abrupt("return", _context.t0.response);

          case 20:
            console.error(_context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _get.apply(this, arguments);
}

function post(_x2, _x3) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0,axios__WEBPACK_IMPORTED_MODULE_3__.post)(url, data);

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);

            if (!(_context2.t0.response.status >= 400 && _context2.t0.response.status < 500)) {
              _context2.next = 13;
              break;
            }

            console.error(_context2.t0.response.status + " " + _context2.t0.response.data.message);
            return _context2.abrupt("return", _context2.t0.response);

          case 13:
            console.error(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _post.apply(this, arguments);
}



/***/ }),

/***/ 3894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Journey; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/views/Journey.vue?vue&type=template&id=49ffcc70

var _hoisted_1 = {
  class: "journey_room"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Room = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Room");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Room, {
    socket: $props.socket
  }, null, 8
  /* PROPS */
  , ["socket"])]);
}
;// CONCATENATED MODULE: ./src/views/Journey.vue?vue&type=template&id=49ffcc70

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Room.vue?vue&type=template&id=1398ca0b&scoped=true



var _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-1398ca0b");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-1398ca0b");

var Roomvue_type_template_id_1398ca0b_scoped_true_hoisted_1 = {
  class: "room"
};
var _hoisted_2 = {
  key: 0
};

var _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h1", null, "Wat is je naam?", -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 0,
  class: "empty_text_field"
};

var _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("button", {
  class: "button"
}, "Ga naar chat", -1
/* HOISTED */
);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var Roomvue_type_template_id_1398ca0b_scoped_true_render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Chat = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Chat");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Roomvue_type_template_id_1398ca0b_scoped_true_hoisted_1, [$data.joined ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createCommentVNode */.ry)(" <GeneralJourneyInfo v-if=\"journeyInformationAvailable\"\n\t\t\tdestination: String,\n\t\t\tnextStop: String,\n\t\t\tdelayedInSeconds: Number,\n\t\t\toperator: String,\n\t\t\ttype: Object,\n\t\t\tcurrentPlace: String\n\t\t\t/> "), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Chat, {
    socket: $props.socket,
    room: $data.room,
    user: $data.user
  }, null, 8
  /* PROPS */
  , ["socket", "room", "user"])])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("form", {
    key: 1,
    onSubmit: _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(function ($event) {
      return $options.joinRoom();
    }, ["prevent"])),
    action: ""
  }, [_hoisted_3, $data.empty ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", _hoisted_4, "Voer eerst je naam in")) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.name = $event;
    }),
    type: "text"
  }, null, 512
  /* NEED_PATCH */
  ), [[runtime_dom_esm_bundler/* vModelText */.nr, $data.name]]), _hoisted_5], 32
  /* HYDRATE_EVENTS */
  ))]);
});
;// CONCATENATED MODULE: ./src/components/Room.vue?vue&type=template&id=1398ca0b&scoped=true

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Chat.vue?vue&type=template&id=b4186586&scoped=true


var Chatvue_type_template_id_b4186586_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-b4186586");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-b4186586");

var Chatvue_type_template_id_b4186586_scoped_true_hoisted_1 = {
  class: "chat"
};

var Chatvue_type_template_id_b4186586_scoped_true_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "chat_header"
}, null, -1
/* HOISTED */
);

var Chatvue_type_template_id_b4186586_scoped_true_hoisted_3 = {
  key: 0,
  class: "chat_conversation empty"
};

var Chatvue_type_template_id_b4186586_scoped_true_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("p", null, "Tijd voor een nieuwe reis en een gezellig gesprek!", -1
/* HOISTED */
);

var Chatvue_type_template_id_b4186586_scoped_true_hoisted_5 = {
  key: 1,
  class: "chat_conversation"
};

var _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "chat_footer"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("form", {
  action: ""
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("input", {
  type: "text"
}), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("button", {
  class: "button"
}, "Verstuur")])], -1
/* HOISTED */
);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var Chatvue_type_template_id_b4186586_scoped_true_render = /*#__PURE__*/Chatvue_type_template_id_b4186586_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChatMessage = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ChatMessage");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Chatvue_type_template_id_b4186586_scoped_true_hoisted_1, [Chatvue_type_template_id_b4186586_scoped_true_hoisted_2, $data.messages.length === 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Chatvue_type_template_id_b4186586_scoped_true_hoisted_3, [Chatvue_type_template_id_b4186586_scoped_true_hoisted_4])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Chatvue_type_template_id_b4186586_scoped_true_hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.messages, function (message, index) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      key: index
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ChatMessage, {
      key: index,
      user: message.user,
      message: message.message,
      datetime: message.datetime
    }, null, 8
    /* PROPS */
    , ["user", "message", "datetime"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])), _hoisted_6]);
});
;// CONCATENATED MODULE: ./src/components/Chat.vue?vue&type=template&id=b4186586&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/ChatMessage.vue?vue&type=template&id=93905dda&scoped=true



var ChatMessagevue_type_template_id_93905dda_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-93905dda");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-93905dda");

var ChatMessagevue_type_template_id_93905dda_scoped_true_hoisted_1 = {
  class: "content"
};
var ChatMessagevue_type_template_id_93905dda_scoped_true_hoisted_2 = {
  class: "info"
};
var ChatMessagevue_type_template_id_93905dda_scoped_true_hoisted_3 = {
  key: 0,
  class: "user"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var ChatMessagevue_type_template_id_93905dda_scoped_true_render = /*#__PURE__*/ChatMessagevue_type_template_id_93905dda_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", {
    class: ["message", {
      sender: $props.user.sender
    }]
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", ChatMessagevue_type_template_id_93905dda_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)($props.message), 1
  /* TEXT */
  )]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", ChatMessagevue_type_template_id_93905dda_scoped_true_hoisted_2, [!$props.user.sender ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", ChatMessagevue_type_template_id_93905dda_scoped_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($props.user.name), 1
  /* TEXT */
  )) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("time", {
    datetime: $props.datetime
  }, (0,shared_esm_bundler/* toDisplayString */.zw)($data.timeString), 9
  /* TEXT, PROPS */
  , ["datetime"])])])], 2
  /* CLASS */
  );
});
;// CONCATENATED MODULE: ./src/components/ChatMessage.vue?vue&type=template&id=93905dda&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/ChatMessage.vue?vue&type=script&lang=js

/* harmony default export */ var ChatMessagevue_type_script_lang_js = ({
  name: "ChatMessage",
  props: {
    user: Object,
    message: String,
    datetime: String
  },
  data: function data() {
    return {
      timeString: String
    };
  },
  mounted: function mounted() {
    var datetime = this.datetime;
    var hours = new Date(datetime).getHours();
    var minutes = new Date(datetime).getMinutes();
    var fullHours = hours === 0 ? 24 : hours < 10 ? "0" + hours : hours;
    var fullMinutes = minutes < 10 ? "0" + minutes : minutes;
    this.timeString = "".concat(fullHours, ":").concat(fullMinutes);
  }
});
;// CONCATENATED MODULE: ./src/components/ChatMessage.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/ChatMessage.vue




;
ChatMessagevue_type_script_lang_js.render = ChatMessagevue_type_template_id_93905dda_scoped_true_render
ChatMessagevue_type_script_lang_js.__scopeId = "data-v-93905dda"

/* harmony default export */ var ChatMessage = (ChatMessagevue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Chat.vue?vue&type=script&lang=js


/* harmony default export */ var Chatvue_type_script_lang_js = ({
  name: "Chat",
  components: {
    ChatMessage: ChatMessage
  },
  props: {
    socket: Object,
    room: Object,
    user: Object
  },
  data: function data() {
    return {
      messages: Array
    };
  },
  mounted: function mounted() {
    var socket = this.socket;
    var vm = this;
    var room = this.room;
    var user = this.user;
    var form = document.querySelector(".chat_footer form");
    var input = document.querySelector(".chat_footer form input");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (input.value === "") {
        return;
      }

      var message = {
        roomId: room.id,
        roomName: room.journeyId,
        userId: user.id,
        message: input.value,
        datetime: new Date().toUTCString()
      };
      socket.emit("add message", message);
      input.value = "";
    });
    socket.on("messages", function (messages) {
      var sortedMessages = messages.map(function (message) {
        message.datetime = new Date(message.datetime).toLocaleString();

        if (message.user.id === user.id) {
          message.user.sender = true;
        }

        return message;
      }).sort(function (a, b) {
        return new Date(b.datetime) < new Date(a.datetime);
      });
      vm.messages = sortedMessages;
    });
    socket.on("new message", function (message) {
      if (message.user.id === user.id) {
        message.user.sender = true;
      }

      vm.messages.push(message);
    });
  }
});
;// CONCATENATED MODULE: ./src/components/Chat.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Chat.vue




;
Chatvue_type_script_lang_js.render = Chatvue_type_template_id_b4186586_scoped_true_render
Chatvue_type_script_lang_js.__scopeId = "data-v-b4186586"

/* harmony default export */ var Chat = (Chatvue_type_script_lang_js);
// EXTERNAL MODULE: ./src/helpers/fetch.js
var fetch = __webpack_require__(2454);
;// CONCATENATED MODULE: ./src/helpers/storage.js
function addToSessionStorage(name, content) {
  try {
    content = JSON.stringify(content);
    sessionStorage.setItem(name, content);
    console.log("Added item to SessionStorage");
  } catch (error) {
    console.log(error);
  }
}

function checkInSessionStorage(name) {
  try {
    if (sessionStorage.getItem(name)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

function getFromSessionStorage(name) {
  try {
    if (sessionStorage.getItem(name)) {
      return JSON.parse(sessionStorage.getItem(name));
    }
  } catch (error) {
    console.log(error);
  }
}


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Room.vue?vue&type=script&lang=js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







 // import GeneralJourneyInfo from "@/components/GeneralJourneyInfo.vue";



var host =  true ? location.origin : 0;
/* harmony default export */ var Roomvue_type_script_lang_js = ({
  name: "Room",
  components: {
    Chat: Chat
  },
  props: {
    socket: Object
  },
  data: function data() {
    return {
      room: Object,
      journey: Object,
      user: Object,
      joined: false,
      empty: false,
      journeyInformationAvailable: false,
      name: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var journeyId, journey, room, userInStorage, user;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              journeyId = Number(_this.$route.params.id);
              _context.next = 3;
              return (0,fetch/* get */.U)("".concat(host, "/api/v1/journey"), {
                journeyId: journeyId
              });

            case 3:
              journey = _context.sent;
              _context.next = 6;
              return (0,fetch/* get */.U)("".concat(host, "/api/v1/room"), {
                journeyId: journeyId
              });

            case 6:
              room = _context.sent;

              if (room.status === 200) {
                userInStorage = checkInSessionStorage("user");

                if (userInStorage) {
                  user = getFromSessionStorage("user");
                  _this.user = user;
                  _this.joined = true;
                }

                _this.room = room.data;
              }

              if (journey.status === 200) {
                _this.journey = journey.data;
                _this.journeyInformationAvailable = true;
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    joined: function joined(newValue) {
      if (newValue === true) {
        var socket = this.socket;
        var room = this.room;
        socket.emit("messages", room);
      }
    }
  },
  methods: {
    joinRoom: function joinRoom() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var vm, name, room, socket, formButton, postResponse, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                vm = _this2;
                name = _this2.name;
                room = _this2.room;
                socket = _this2.socket;
                formButton = document.querySelector(".room form button");

                if (!(name === "")) {
                  _context2.next = 10;
                  break;
                }

                _this2.empty = true;
                return _context2.abrupt("return");

              case 10:
                formButton.setAttribute("disabled", "disabled");
                _context2.next = 13;
                return (0,fetch/* post */.v)("".concat(host, "/api/v1/user"), {
                  name: name,
                  roomId: room.id
                });

              case 13:
                postResponse = _context2.sent;

                if (!(postResponse.status === 200 || postResponse.status === 201)) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 17;
                return (0,fetch/* get */.U)("".concat(host, "/api/v1/user"), {
                  name: name
                });

              case 17:
                user = _context2.sent;

                if (user.status === 200) {
                  addToSessionStorage("user", user.data);
                  socket.emit("join room", {
                    user: user.data,
                    room: room
                  });
                  socket.on("join room", function (room) {
                    if (room.joined === true) {
                      vm.user = user.data;
                      vm.joined = true;
                    }
                  });
                } else if (user.status === 404) {
                  formButton.removeAttribute("disabled");
                }

                _context2.next = 22;
                break;

              case 21:
                if (postResponse.status === 400) {
                  formButton.removeAttribute("disabled");
                }

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Room.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Room.vue




;
Roomvue_type_script_lang_js.render = Roomvue_type_template_id_1398ca0b_scoped_true_render
Roomvue_type_script_lang_js.__scopeId = "data-v-1398ca0b"

/* harmony default export */ var Room = (Roomvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/views/Journey.vue?vue&type=script&lang=js

/* harmony default export */ var Journeyvue_type_script_lang_js = ({
  name: "Journey",
  components: {
    Room: Room
  },
  props: {
    socket: Object
  }
});
;// CONCATENATED MODULE: ./src/views/Journey.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/Journey.vue



Journeyvue_type_script_lang_js.render = render

/* harmony default export */ var Journey = (Journeyvue_type_script_lang_js);

/***/ })

}]);