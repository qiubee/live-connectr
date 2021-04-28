(self["webpackChunkzugo_client"] = self["webpackChunkzugo_client"] || []).push([[464],{

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

/***/ 7804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Search; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/views/Search.vue?vue&type=template&id=1a1f5329

var _hoisted_1 = {
  class: "search"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SearchJourney = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SearchJourney");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_SearchJourney, {
    socket: $props.socket
  }, null, 8
  /* PROPS */
  , ["socket"])]);
}
;// CONCATENATED MODULE: ./src/views/Search.vue?vue&type=template&id=1a1f5329

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/SearchJourney.vue?vue&type=template&id=3a7d38ed&scoped=true



var _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-3a7d38ed");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-3a7d38ed");

var SearchJourneyvue_type_template_id_3a7d38ed_scoped_true_hoisted_1 = {
  class: "search_journey"
};

var _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h2", null, "Waar ga jij heen vandaag?", -1
/* HOISTED */
);

var _hoisted_3 = {
  class: "inputs"
};

var _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, "Van", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  class: "suggestions"
};

var _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, "Naar", -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 1,
  class: "suggestions"
};
var _hoisted_8 = {
  key: 0,
  class: "results"
};
var _hoisted_9 = {
  key: 1,
  class: "no_results"
};

var _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("p", null, "Reis niet gevonden.", -1
/* HOISTED */
);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var SearchJourneyvue_type_template_id_3a7d38ed_scoped_true_render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Journey = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Journey");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", SearchJourneyvue_type_template_id_3a7d38ed_scoped_true_hoisted_1, [_hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)("form", {
    onSubmit: _cache[10] || (_cache[10] = function () {
      return $options.searchJourneys && $options.searchJourneys.apply($options, arguments);
    }),
    action: ""
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("label", null, [_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)("input", {
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.giveSearchOptions && $options.giveSearchOptions.apply($options, arguments);
    }),
    onFocus: _cache[2] || (_cache[2] = function () {
      return $options.showSuggestions && $options.showSuggestions.apply($options, arguments);
    }),
    type: "text",
    name: "from"
  }, null, 32
  /* HYDRATE_EVENTS */
  )]), $data.suggestOrigin && $data.suggestions.length >= 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.suggestions, function (station) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      onClick: _cache[3] || (_cache[3] = function () {
        return $options.setStation && $options.setStation.apply($options, arguments);
      }),
      onKeyup: _cache[4] || (_cache[4] = (0,runtime_dom_esm_bundler/* withKeys */.D2)(function () {
        return $options.setStation && $options.setStation.apply($options, arguments);
      }, ["enter"])),
      key: station.id,
      tabindex: "0"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(station.name), 33
    /* TEXT, HYDRATE_EVENTS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)("label", null, [_hoisted_6, (0,runtime_core_esm_bundler/* createVNode */.Wm)("input", {
    onInput: _cache[5] || (_cache[5] = function () {
      return $options.giveSearchOptions && $options.giveSearchOptions.apply($options, arguments);
    }),
    onFocus: _cache[6] || (_cache[6] = function () {
      return $options.showSuggestions && $options.showSuggestions.apply($options, arguments);
    }),
    type: "text",
    name: "to"
  }, null, 32
  /* HYDRATE_EVENTS */
  )]), $data.suggestDestination && $data.suggestions.length >= 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.suggestions, function (station) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      onClick: _cache[7] || (_cache[7] = function () {
        return $options.setStation && $options.setStation.apply($options, arguments);
      }),
      onKeyup: _cache[8] || (_cache[8] = (0,runtime_dom_esm_bundler/* withKeys */.D2)(function () {
        return $options.setStation && $options.setStation.apply($options, arguments);
      }, ["enter"])),
      key: station.id,
      tabindex: "0"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(station.name), 33
    /* TEXT, HYDRATE_EVENTS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("button", {
    onFocus: _cache[9] || (_cache[9] = function () {
      return $options.hideSuggestions && $options.hideSuggestions.apply($options, arguments);
    }),
    class: "button"
  }, "Zoek reis", 32
  /* HYDRATE_EVENTS */
  )], 32
  /* HYDRATE_EVENTS */
  ), $data.journeys.length >= 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.journeys, function (journey) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      class: "result",
      key: journey.id
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Journey, {
      onClick: function onClick($event) {
        return $options.toRoom(journey.id);
      },
      operator: journey.operator,
      destination: journey.destination,
      departure: journey.departureTime,
      stops: journey.stops,
      type: journey.type.name
    }, null, 8
    /* PROPS */
    , ["onClick", "operator", "destination", "departure", "stops", "type"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true), $data.noJourneysFound ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_9, [_hoisted_10])) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true)]);
});
;// CONCATENATED MODULE: ./src/components/SearchJourney.vue?vue&type=template&id=3a7d38ed&scoped=true

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(5827);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Journey.vue?vue&type=template&id=9e9f50b6&scoped=true



var Journeyvue_type_template_id_9e9f50b6_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-9e9f50b6");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-9e9f50b6");

var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_1 = {
  class: "journey"
};
var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_2 = {
  class: "destination"
};
var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_3 = {
  class: "category"
};
var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_4 = {
  key: 0,
  class: "type"
};
var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_5 = {
  key: 1,
  class: "type"
};
var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_6 = {
  class: "departuretime"
};
var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_7 = {
  key: 0,
  class: "stops"
};

var Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, "Via: ", -1
/* HOISTED */
);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

var Journeyvue_type_template_id_9e9f50b6_scoped_true_render = /*#__PURE__*/Journeyvue_type_template_id_9e9f50b6_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($props.destination), 1
  /* TEXT */
  ), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_3, [$data.altTypeName ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_4, (0,shared_esm_bundler/* toDisplayString */.zw)($data.altTypeName), 1
  /* TEXT */
  )) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)($props.type), 1
  /* TEXT */
  )), (0,runtime_core_esm_bundler/* createVNode */.Wm)("span", {
    class: ["operator", $props.operator.toLowerCase()]
  }, null, 2
  /* CLASS */
  )]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("span", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)($data.departureTime), 1
  /* TEXT */
  )])]), $data.mainStops.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_7, [Journeyvue_type_template_id_9e9f50b6_scoped_true_hoisted_8, (0,runtime_core_esm_bundler/* createVNode */.Wm)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.mainStops, function (stop) {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      key: stop.uicCode
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(stop.name), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.ry)("v-if", true)]);
});
;// CONCATENATED MODULE: ./src/components/Journey.vue?vue&type=template&id=9e9f50b6&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(9600);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(3123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
;// CONCATENATED MODULE: ./src/helpers/time.js

function getTime(dateTimeString) {
  var date = new Date(dateTimeString);
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Journey.vue?vue&type=script&lang=js






/* harmony default export */ var Journeyvue_type_script_lang_js = ({
  name: "Journey",
  props: {
    operator: String,
    destination: String,
    departure: String,
    stops: Array,
    type: String
  },
  data: function data() {
    return {
      mainStops: Array,
      departureTime: String,
      altTypeName: ""
    };
  },
  created: function created() {
    var allStops = this.stops;
    var departure = this.departure;
    var type = this.type;

    if (type === "ICD") {
      this.altTypeName = "IC Direct";
    }

    if (allStops.length > 2) {
      var mainStops = allStops.filter(function (stop, index) {
        return (index + 1) % 2 === 1;
      });

      if (mainStops.length > 5) {
        this.mainStops = allStops.filter(function (stop, index) {
          return index < 5;
        });
      } else {
        this.mainStops = mainStops;
      }
    } else {
      this.mainStops = allStops;
    }

    this.departureTime = getTime(departure).split(":").slice(0, -1).join(":");
  }
});
;// CONCATENATED MODULE: ./src/components/Journey.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Journey.vue




;
Journeyvue_type_script_lang_js.render = Journeyvue_type_template_id_9e9f50b6_scoped_true_render
Journeyvue_type_script_lang_js.__scopeId = "data-v-9e9f50b6"

/* harmony default export */ var Journey = (Journeyvue_type_script_lang_js);
// EXTERNAL MODULE: ./src/helpers/fetch.js
var fetch = __webpack_require__(2454);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/SearchJourney.vue?vue&type=script&lang=js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }














var host =  true ? location.origin : 0;
/* harmony default export */ var SearchJourneyvue_type_script_lang_js = ({
  name: "SearchJourney",
  components: {
    Journey: Journey
  },
  data: function data() {
    return {
      journeys: [],
      noJourneysFound: false,
      suggestions: Array,
      suggestOrigin: false,
      suggestDestination: false
    };
  },
  methods: {
    searchJourneys: function searchJourneys(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var formNode, inputs, journeys;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formNode = event.target;
                inputs = Array.from(formNode.elements).filter(function (node) {
                  return node.localName === "input";
                }).map(function (node) {
                  return _defineProperty({}, node.name, node.value);
                }).reduce(function (arr, input) {
                  return Object.assign(arr, input);
                }, {});
                event.preventDefault();

                if (!(!inputs.from || !inputs.to)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return (0,fetch/* get */.U)("".concat(host, "/api/v1/journeys"), {
                  fromStation: inputs.from,
                  toStation: inputs.to
                });

              case 7:
                journeys = _context.sent;

                if (journeys.status === 200) {
                  if (journeys.data.length === 0) {
                    _this.noJourneysFound = true;
                  }

                  _this.journeys = journeys.data;
                } else {
                  _this.noJourneysFound = true;
                }

                return _context.abrupt("return", false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    giveSearchOptions: function giveSearchOptions(event) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var node, input, stations;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                node = event.target;
                input = node.value.replace(/[0-9<>`'"$!@#$%^&*()\]\\/[]/g, "");

                if (!(input.length < 2)) {
                  _context2.next = 5;
                  break;
                }

                _this2.suggestions = [];
                return _context2.abrupt("return");

              case 5:
                if (!(input.length % 2 === 1 || input[input.length - 1] === " ")) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return");

              case 9:
                _context2.next = 11;
                return (0,fetch/* get */.U)("".concat(host, "/api/v1/stations"), {
                  stationName: input,
                  countryCode: "NL"
                });

              case 11:
                stations = _context2.sent;

                if (stations.status === 200) {
                  _this2.suggestions = stations.data.map(function (station, index) {
                    return {
                      id: index,
                      name: station
                    };
                  });
                }

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showSuggestions: function showSuggestions(event) {
      var inputName = event.target.attributes.name.nodeValue;
      this.suggestions = [];

      if (inputName === "from") {
        this.suggestOrigin = true;
        this.suggestDestination = false;
      } else if (inputName === "to") {
        this.suggestDestination = true;
        this.suggestOrigin = false;
      }
    },
    hideSuggestions: function hideSuggestions() {
      this.suggestOrigin = false;
      this.suggestDestination = false;
    },
    setStation: function setStation(event) {
      var node = event.target;
      var station = node.textContent;
      var inputNode = event.target.parentElement.parentElement.previousElementSibling.control;
      inputNode.value = station;

      if (inputNode.name === "from") {
        this.suggestOrigin = false;
      } else if (inputNode.name === "to") {
        this.suggestDestination = false;
      }
    },
    toRoom: function toRoom(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var room, addedRoom;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,fetch/* get */.U)("".concat(host, "/api/v1/room"), {
                  journeyId: id
                });

              case 2:
                room = _context3.sent;

                if (!(room.status === 404)) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 6;
                return (0,fetch/* post */.v)("".concat(host, "/api/v1/room"), {
                  journeyId: id
                });

              case 6:
                addedRoom = _context3.sent;

                if (addedRoom.status === 201) {
                  _this3.$router.push({
                    name: "Journey",
                    params: {
                      id: id
                    }
                  });
                }

                _context3.next = 11;
                break;

              case 10:
                _this3.$router.push({
                  name: "Journey",
                  params: {
                    id: id
                  }
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/SearchJourney.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/SearchJourney.vue




;
SearchJourneyvue_type_script_lang_js.render = SearchJourneyvue_type_template_id_3a7d38ed_scoped_true_render
SearchJourneyvue_type_script_lang_js.__scopeId = "data-v-3a7d38ed"

/* harmony default export */ var SearchJourney = (SearchJourneyvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/views/Search.vue?vue&type=script&lang=js

/* harmony default export */ var Searchvue_type_script_lang_js = ({
  name: "Search",
  components: {
    SearchJourney: SearchJourney
  },
  props: {
    socket: Object
  }
});
;// CONCATENATED MODULE: ./src/views/Search.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/Search.vue



Searchvue_type_script_lang_js.render = render

/* harmony default export */ var Search = (Searchvue_type_script_lang_js);

/***/ })

}]);