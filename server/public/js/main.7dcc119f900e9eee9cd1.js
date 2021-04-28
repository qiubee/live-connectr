/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8582:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=template&id=55a39b6e

function render(_ctx, _cache) {
  var _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_view);
}
;// CONCATENATED MODULE: ./src/App.vue

const script = {}

;
script.render = render

/* harmony default export */ var App = (script);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(2119);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/views/Home.vue?vue&type=template&id=3e779a9d

var _hoisted_1 = {
  class: "home"
};
function Homevue_type_template_id_3e779a9d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RoomList = (0,runtime_core_esm_bundler/* resolveComponent */.up)("RoomList");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_RoomList, {
    socket: $props.socket
  }, null, 8
  /* PROPS */
  , ["socket"])]);
}
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=3e779a9d

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/RoomList.vue?vue&type=template&id=63f31778&scoped=true


var _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-63f31778");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-63f31778");

var RoomListvue_type_template_id_63f31778_scoped_true_hoisted_1 = {
  key: 0,
  class: "all_rooms"
};

var _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("p", null, "Zit jouw reis er niet bij?", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Zoek reis");

var _hoisted_4 = {
  key: 1,
  class: "no_rooms"
};

var _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("p", null, "Er zijn op dit moment geen personen die reizen.", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("p", null, "Zoek jouw eigen reis en speel mini-games totdat anderen meereizen.", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Zoek reis");

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var RoomListvue_type_template_id_63f31778_scoped_true_render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RoomItem = (0,runtime_core_esm_bundler/* resolveComponent */.up)("RoomItem");

  var _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return $data.rooms.length >= 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", RoomListvue_type_template_id_63f31778_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.rooms, function (room) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      class: "room",
      key: room.id
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_RoomItem, {
      onClick: function onClick($event) {
        return $options.toRoom(room.journey.journeyId);
      },
      journey: room.journey,
      totalMembers: room.users.length,
      game: room.game
    }, null, 8
    /* PROPS */
    , ["onClick", "journey", "totalMembers", "game"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [_hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    class: "button",
    to: "/zoek-reis"
  }, {
    default: _withId(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  })])])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_4, [_hoisted_5, _hoisted_6, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    class: "button",
    to: "/zoek-reis"
  }, {
    default: _withId(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })]));
});
;// CONCATENATED MODULE: ./src/components/RoomList.vue?vue&type=template&id=63f31778&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/RoomItem.vue?vue&type=template&id=1755aa92&scoped=true



var RoomItemvue_type_template_id_1755aa92_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-1755aa92");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-1755aa92");

var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_1 = {
  class: "active_room"
};
var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_2 = {
  class: "train"
};
var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_3 = {
  class: "journey_number"
};
var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_4 = {
  class: "journey"
};
var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_5 = {
  key: 0,
  class: "type"
};
var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_6 = {
  key: 1,
  class: "type"
};
var RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_7 = {
  class: "destination"
};
var _hoisted_8 = {
  key: 0,
  class: "delay_display delayed"
};
var _hoisted_9 = {
  key: 1,
  class: "delay_display on_time"
};
var _hoisted_10 = {
  class: "room_info"
};
var _hoisted_11 = {
  class: "users"
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  key: 0,
  class: "chat"
};

var _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("svg", {
  viewBox: "2 2 16 16",
  class: "chat_icon",
  focusable: "false"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("g", {
  class: "icons-default-fill"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("path", {
  class: "icons-unfilled",
  d: "M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72679 18 7.49591 17.7018 6.38669 17.1393L6.266 17.075L2.62109 17.9851C2.31127 18.0625 2.02622 17.8369 2.00131 17.5438L2.00114 17.4624L2.01493 17.3787L2.925 13.735L2.86169 13.6153C2.4066 12.7186 2.12433 11.7422 2.03275 10.7283L2.00738 10.3463L2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 11.217 3.31054 12.3878 3.89352 13.4249C3.94046 13.5084 3.9621 13.603 3.95692 13.6973L3.94274 13.7912L3.187 16.812L6.21104 16.0583C6.27294 16.0429 6.33662 16.0396 6.39873 16.0479L6.4903 16.0691L6.57701 16.1075C7.61362 16.6898 8.7837 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10.5 11C10.7761 11 11 11.2239 11 11.5C11 11.7455 10.8231 11.9496 10.5899 11.9919L10.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2545 7.17688 11.0504 7.41012 11.0081L7.5 11H10.5ZM12.5 8C12.7761 8 13 8.22386 13 8.5C13 8.74546 12.8231 8.94961 12.5899 8.99194L12.5 9H7.5C7.22386 9 7 8.77614 7 8.5C7 8.25454 7.17688 8.05039 7.41012 8.00806L7.5 8H12.5Z"
}), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("path", {
  class: "icons-filled",
  d: "M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72679 18 7.49591 17.7018 6.38669 17.1393L6.266 17.075L2.62109 17.9851C2.31127 18.0625 2.02622 17.8369 2.00131 17.5438L2.00114 17.4624L2.01493 17.3787L2.925 13.735L2.86169 13.6153C2.4066 12.7186 2.12433 11.7422 2.03275 10.7283L2.00738 10.3463L2 10C2 5.58172 5.58172 2 10 2ZM10.5 11H7.5L7.41012 11.0081C7.17688 11.0504 7 11.2545 7 11.5C7 11.7455 7.17688 11.9496 7.41012 11.9919L7.5 12H10.5L10.5899 11.9919C10.8231 11.9496 11 11.7455 11 11.5C11 11.2545 10.8231 11.0504 10.5899 11.0081L10.5 11ZM12.5 8H7.5L7.41012 8.00806C7.17688 8.05039 7 8.25454 7 8.5C7 8.74546 7.17688 8.94961 7.41012 8.99194L7.5 9H12.5L12.5899 8.99194C12.8231 8.94961 13 8.74546 13 8.5C13 8.25454 12.8231 8.05039 12.5899 8.00806L12.5 8Z"
})])], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, "Chat", -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 1,
  class: "game"
};
var _hoisted_18 = {
  key: 0,
  class: "stops"
};

var _hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" via: ");

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var RoomItemvue_type_template_id_1755aa92_scoped_true_render = /*#__PURE__*/RoomItemvue_type_template_id_1755aa92_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
    src: _ctx.trainImage,
    alt: _ctx.trainImageAlt
  }, null, 8
  /* PROPS */
  , ["src", "alt"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("span", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($props.journey.journeyId), 1
  /* TEXT */
  )]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", {
    class: ["operator", $props.journey.operator.toLowerCase()]
  }, null, 2
  /* CLASS */
  ), $data.altTypeName ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)($data.altTypeName), 1
  /* TEXT */
  )) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)($props.journey.type.name), 1
  /* TEXT */
  ))]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("span", RoomItemvue_type_template_id_1755aa92_scoped_true_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.zw)($props.journey.destination), 1
  /* TEXT */
  ), $data.delayInMinutes >= 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_8, "+" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.delayInMinutes) + " min.", 1
  /* TEXT */
  )) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_9, "Op tijd"))]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_10, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_11, [$props.totalMembers === 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", _hoisted_12, (0,shared_esm_bundler/* toDisplayString */.zw)($props.totalMembers) + " reiziger", 1
  /* TEXT */
  )) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", _hoisted_13, (0,shared_esm_bundler/* toDisplayString */.zw)($props.totalMembers) + " reizigers", 1
  /* TEXT */
  ))]), !$props.game.active ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_14, [_hoisted_15, _hoisted_16])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_17, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)($props.game.type), 1
  /* TEXT */
  )]))]), $data.stops.length >= 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_18, [_hoisted_19, (0,runtime_core_esm_bundler/* createVNode */.Wm)("ol", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.stops, function (stop) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      key: stop.id
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(stop), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true)]);
});
;// CONCATENATED MODULE: ./src/components/RoomItem.vue?vue&type=template&id=1755aa92&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/RoomItem.vue?vue&type=script&lang=js



/* harmony default export */ var RoomItemvue_type_script_lang_js = ({
  name: "RoomItem",
  props: {
    journey: Object,
    totalMembers: Number,
    game: Object
  },
  data: function data() {
    return {
      trainimage: String,
      stops: [],
      delayInMinutes: Number,
      altTypeName: ""
    };
  },
  created: function created() {
    var journey = this.journey;
    var type = journey.type.name;
    var train = journey.train;
    var delayInSeconds = journey.delayInSeconds;
    var firstTrain = train.parts[0];
    var firstCarImage = firstTrain.carsImages[firstTrain.carsImages.length - 1];

    if (journey.stops.length > 3) {
      var stops = journey.stops.filter(function (stop, index) {
        return index % 2 === 1;
      });
      var lastIndex = stops.length - 1;
      var mainStops = [stops[0], stops[Math.floor(lastIndex / 2)], stops[lastIndex]];
      this.stops = mainStops;
    }

    if (delayInSeconds >= 60) {
      this.delayInMinutes = Math.floor(delayInSeconds % 3600 / 60);
    }

    if (type === "ICD") {
      this.altTypeName = "IC Direct";
    }

    this.trainImageAlt = "Voorkant ".concat(journey.type.fullName, " trein");
    this.trainImage = firstCarImage;
  }
});
;// CONCATENATED MODULE: ./src/components/RoomItem.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/RoomItem.vue




;
RoomItemvue_type_script_lang_js.render = RoomItemvue_type_template_id_1755aa92_scoped_true_render
RoomItemvue_type_script_lang_js.__scopeId = "data-v-1755aa92"

/* harmony default export */ var RoomItem = (RoomItemvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/RoomList.vue?vue&type=script&lang=js

/* harmony default export */ var RoomListvue_type_script_lang_js = ({
  name: "RoomList",
  props: {
    socket: Object
  },
  components: {
    RoomItem: RoomItem
  },
  data: function data() {
    return {
      rooms: []
    };
  },
  created: function created() {
    var vm = this;
    var socket = this.socket;
    socket.emit("all rooms", {
      init: true
    });
    socket.on("all rooms", function (rooms) {
      vm.rooms = rooms;
    });
  },
  methods: {
    toRoom: function toRoom(id) {
      this.$router.push({
        name: "Journey",
        params: {
          id: id
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/RoomList.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/RoomList.vue




;
RoomListvue_type_script_lang_js.render = RoomListvue_type_template_id_63f31778_scoped_true_render
RoomListvue_type_script_lang_js.__scopeId = "data-v-63f31778"

/* harmony default export */ var RoomList = (RoomListvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/views/Home.vue?vue&type=script&lang=js

/* harmony default export */ var Homevue_type_script_lang_js = ({
  name: "Home",
  props: {
    socket: Object
  },
  components: {
    RoomList: RoomList
  }
});
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/Home.vue



Homevue_type_script_lang_js.render = Homevue_type_template_id_3e779a9d_render

/* harmony default export */ var Home = (Homevue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/socket.io-client/wrapper.mjs
var wrapper = __webpack_require__(5615);
;// CONCATENATED MODULE: ./src/router/index.js










var host =  true ? location.origin.replace(/^http/, "ws") : 0;
var socket = (0,wrapper/* default */.Z)(host);
socket.on("connect", function () {
  console.log("connected");
});
socket.on("disconnect", function () {
  console.log("disconnected");
});
var routes = [{
  path: "/",
  name: "Home",
  component: Home,
  props: {
    socket: socket
  }
}, {
  path: "/zoek-reis",
  name: "Search",
  component: function component() {
    return Promise.all(/* import() | search */[__webpack_require__.e(216), __webpack_require__.e(464)]).then(__webpack_require__.bind(__webpack_require__, 7804));
  },
  props: {
    socket: socket
  }
}, {
  path: "/reis/:id",
  name: "Journey",
  component: function component() {
    return Promise.all(/* import() | journey */[__webpack_require__.e(216), __webpack_require__.e(235)]).then(__webpack_require__.bind(__webpack_require__, 3894));
  },
  props: {
    socket: socket
  }
}];
var router = (0,vue_router_esm_bundler/* createRouter */.p7)({
  history: (0,vue_router_esm_bundler/* createWebHistory */.PO)(),
  routes: routes
});
/* harmony default export */ var src_router = (router);
;// CONCATENATED MODULE: ./src/app.js



(0,runtime_dom_esm_bundler/* createApp */.ri)(App).use(src_router).mount("#app");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"235":"journey","464":"search"}[chunkId] + "." + {"235":"35228c261154e42fb6c3","464":"cac44843a909ea630f65"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + ".index.css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "zugo-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"235":1,"464":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkzugo_client"] = self["webpackChunkzugo_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(8582); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;