'use strict';

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var iterate = function iterate(data, applyFunction) {
  return new Promise(function (resolve, reject) {
    (0, _async2.default)(data, function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item, callback) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return applyFunction(item);

              case 3:
                callback();
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);

                callback(_context.t0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[0, 6]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), function (e) {
      if (e) {
        reject(e);
      } else {
        resolve();
      }
    });
  });
};