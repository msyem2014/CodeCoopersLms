var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var TeacherService = /** @class */ (function (_super) {
        __extends(TeacherService, _super);
        function TeacherService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.teacher) || this;
        }
        TeacherService.$inject = ["UrlService", "BaseRepository", "$q"];
        return TeacherService;
    }(App.BaseService));
    App.TeacherService = TeacherService;
    angular.module('app').service("TeacherService", TeacherService);
})(App || (App = {}));
//# sourceMappingURL=TeacherService.js.map