(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_3___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_3___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");












/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_4___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(event.currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacets, id);
    }
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");












var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_9___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_8___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_7___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_11__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);



var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_2___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};

    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');

      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }

    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");




function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_1___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwidXJsIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsIiQiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwidXJsVXRpbHMiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiUGFnZU1hbmFnZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm1vZGFsT3BlbiIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsImxlbmd0aCIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwidW5iaW5kRXZlbnRzIiwib24iLCJkb2N1bWVudCIsImhvb2tzIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJpbnB1dFRhZ05hbWVzIiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsImFkZENsYXNzIiwiY2xhc3NpZnlGb3JtIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJ0cmlnZ2VyIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIiwiaSIsInRlbXAiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJjb21wYXJlIiwiaHRtbCIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiR0aGlzIiwicHJvZHVjdHNUb0NvbXBhcmUiLCJzaG93QWxlcnRNb2RhbCIsIiRjbGlja2VkQ2hlY2tlZElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNB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QXNDO0FBQ2xDdUksbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7QUFDSixHQVBEO0FBUUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICAgICAgICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgICAgICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9tb2RlbHMvZm9ybXMnO1xuXG5jb25zdCBpbnB1dFRhZ05hbWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbl07XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBhbiBpbnB1dCBlbGVtZW50IG9uIGl0cyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBFbGVtZW50IGl0c2VsZlxuICovXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xuXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LnByb3AoJ3R5cGUnKTtcblxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWNoZWNrYm94LCAuZm9ybS1maWVsZC0tcmFkaW9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWlucHV0IC5mb3JtLWZpZWxkLS1pbnB1dFRleHRcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXG4gICAgcmV0dXJuICRmb3JtRmllbGRcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGVhY2ggaW5wdXQgZWxlbWVudCBpbiBhIGZvcm0gYmFzZWQgb24gaXRzIHR5cGVcbiAqIEBleGFtcGxlXG4gKiAvLyBCZWZvcmVcbiAqIDxmb3JtIGlkPVwiZm9ybVwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XG4gKiAgICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKlxuICogY2xhc3NpZnlGb3JtKCcjZm9ybScsIHsgZm9ybUZpZWxkQ2xhc3M6ICdmb3JtLWZpZWxkJyB9KTtcbiAqXG4gKiAvLyBBZnRlclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCI+Li4uPC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGZvcm1TZWxlY3RvciAtIHNlbGVjdG9yIG9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcbiAgICBjb25zdCAkaW5wdXRzID0gJGZvcm0uZmluZChpbnB1dFRhZ05hbWVzLmpvaW4oJywgJykpO1xuXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcbiAgICBjb25zdCB7IGZvcm1GaWVsZENsYXNzID0gJ2Zvcm0tZmllbGQnIH0gPSBvcHRpb25zO1xuXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cbiAgICAkaW5wdXRzLmVhY2goKF9fLCBpbnB1dCkgPT4ge1xuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJGZvcm07XG59XG5cbi8qKlxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGaWVsZElkKCRmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XG5cbiAgICBpZiAoZmllbGRJZCAmJiBmaWVsZElkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRzdGF0ZUZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkKCRzdGF0ZUZpZWxkKTtcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBuYW1lOiBgRm9ybUZpZWxkSXNUZXh0JHtmaWVsZElkfWAsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgfTtcblxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEVtYWlsVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0gaXNPcHRpb25hbFxuICAgICAqL1xuICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgcGFzc3dvcmRTZWxlY3RvciwgcGFzc3dvcmQyU2VsZWN0b3IsIHJlcXVpcmVtZW50cywgaXNPcHRpb25hbCkgPT4ge1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiByZXF1aXJlbWVudHMuZXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwgPT09ICRwYXNzd29yZC52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQocGFzc3dvcmRWYWxpZGF0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB7Tm9kfSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5lcnJvclNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5maWVsZHNldFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5mb3JtU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1heFByaWNlU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1pblByaWNlU2VsZWN0b3JcbiAgICAgKi9cbiAgICBzZXRNaW5NYXhQcmljZVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHNlbGVjdG9ycykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIHZhbGlkYXRvci5jb25maWd1cmUoe1xuICAgICAgICAgICAgZm9ybTogZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgcHJldmVudFN1Ym1pdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ18nLCAvLyBLTFVER0U6IERvbid0IGFwcGx5IHN1Y2Nlc3MgY2xhc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4gcHJpY2UgbXVzdCBiZSBsZXNzIHRoYW4gbWF4LiBwcmljZS4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4gcHJpY2UgbXVzdCBiZSBsZXNzIHRoYW4gbWF4LiBwcmljZS4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNYXguIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbi4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnSW5wdXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGNsYXNzZXMgZnJvbSBkaXJ0eSBmb3JtIGlmIHByZXZpb3VzbHkgY2hlY2tlZFxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIGNsZWFuVXBTdGF0ZVZhbGlkYXRpb246IChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCAkZmllbGRDbGFzc0VsZW1lbnQgPSAkKChgW2RhdGEtdHlwZT1cIiR7ZmllbGQuZGF0YSgnZmllbGRUeXBlJyl9XCJdYCkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG5vZC5jbGFzc2VzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCRmaWVsZENsYXNzRWxlbWVudC5oYXNDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pKSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkQ2xhc3NFbGVtZW50LnJlbW92ZUNsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH07XG4iLCJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eLitALitcXC4uKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHVybFV0aWxzID0ge1xuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxuXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgcmVwbGFjZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeURhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCBpbiBxdWVyeURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XVtuZHhdfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG5cbiAgICBwYXJzZVF1ZXJ5UGFyYW1zOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gcXVlcnlEYXRhW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wWzBdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1t0ZW1wWzBdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dLnB1c2godGVtcFsxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gW3BhcmFtc1t0ZW1wWzBdXSwgdGVtcFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSB0ZW1wWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=