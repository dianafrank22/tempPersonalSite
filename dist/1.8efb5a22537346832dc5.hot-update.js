webpackHotUpdate(1,{

/***/ 179:
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Projectcard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Projectcard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Projectcard2 = _interopRequireDefault(_Projectcard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Project = function (_React$Component) {
		_inherits(Project, _React$Component);
	
		function Project() {
			_classCallCheck(this, Project);
	
			var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this));
	
			_this.state = {
				projects: []
			};
			return _this;
		}
	
		_createClass(Project, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;
	
				fetch('/project').then(function (response) {
					return response.json();
				}).then(function (result) {
					_this2.setState({
						projects: result
					});
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'projects' },
					_react2.default.createElement(_Projectcard2.default, { projects: this.state.projects })
				);
			}
		}]);
	
		return Project;
	}(_react2.default.Component);
	
	exports.default = Project;

/***/ }

})
//# sourceMappingURL=1.8efb5a22537346832dc5.hot-update.js.map