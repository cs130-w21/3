function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/preview/preview.component.ts");

    var routes = [{
      path: 'edit/:id',
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"]
    }, {
      path: 'preview/:id',
      component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Angular Blog';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 1,
      consts: [["id", "head"], ["id", "left"], ["id", "right"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Home Page");
        }
      },
      directives: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-top: 1em;\n  margin-left: 1em;\n  padding-top: 0;\n  font-family: \"Courier New\", Courier, monospace;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n  color: #607D8B;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #039be5;\n}\n#left[_ngcontent-%COMP%] {\n  margin-top: 7em;\n  height: calc(100%);\n  float: left;\n}\n#right[_ngcontent-%COMP%] {\n  margin-top: 7em;\n  margin-left: 200px;\n  float: left;\n}\n#head[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xuICBjb2xvcjogIzYwN0Q4Qjtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbiNsZWZ0IHtcbiAgbWFyZ2luLXRvcDogN2VtO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuI3JpZ2h0IHtcbiAgbWFyZ2luLXRvcDogN2VtO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuI2hlYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/preview/preview.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog.service.ts":
  /*!*********************************!*\
    !*** ./src/app/blog.service.ts ***!
    \*********************************/

  /*! exports provided: Post, BlogService */

  /***/
  function srcAppBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Post = function Post() {
      _classCallCheck(this, Post);
    };

    Post.ɵfac = function Post_Factory(t) {
      return new (t || Post)();
    };

    Post.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Post,
      factory: Post.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Post, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var BlogService = /*#__PURE__*/function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http;
        this.username = parseJWT(getCookie()).usr;
        console.log(this.username);
        console.log("NEW COMMENT");
      }

      _createClass(BlogService, [{
        key: "fetchPosts",
        value: function fetchPosts() {
          var _this = this;

          return new Promise(function (resolve) {
            var url = '/api/' + _this.username;

            _this.http.get(url).subscribe(function (data) {
              _this.posts = data;
              resolve(_this.posts);
              console.log("inside fetchposts" + _this.posts);
            });
          });
        }
      }, {
        key: "getPost",
        value: function getPost(postid) {
          var _this2 = this;

          return new Promise(function (resolve) {
            var url = '/api/' + _this2.username + '/' + postid;
            var thisPost = null;
            console.log("inside get post in blog service");

            _this2.http.get(url).subscribe(function (data) {
              thisPost = data;
              resolve(thisPost);
              console.log("inside getpost" + thisPost);
            }, function (error) {
              if (error.status == 404) {
                resolve(null);
              }
            });
          });
        }
      }, {
        key: "newPost",
        value: function newPost(post) {
          var _this3 = this;

          return new Promise(function (resolve) {
            var url = '/api/' + _this3.username + '/' + post.postid;

            _this3.http.post(url, {
              title: post.title,
              body: post.body
            }).subscribe(function (next) {
              return console.log("successful new post");
            }, function (error) {
              if (error.status == 201) {
                console.log("successful create post");
              } else {
                console.log("error creating post");
              }
            });

            _this3.fetchPosts();
          });
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          var _this4 = this;

          return new Promise(function (resolve) {
            var url = '/api/' + _this4.username + '/' + post.postid;
            console.log('heres the username ' + _this4.username + ' and the post id' + post.postid + post.title);

            _this4.http.put(url, {
              title: post.title,
              body: post.body
            }).subscribe(function (next) {
              return console.log("successful update post");
            }, function (error) {
              if (error.status == 200) {
                console.log("successful update post");
              } else {
                console.log("error updating post");
              }
            });

            _this4.fetchPosts();
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postid) {
          var _this5 = this;

          return new Promise(function (resolve) {
            var url = '/api/' + _this5.username + '/' + postid;

            _this5.http["delete"](url).subscribe(function (next) {
              return console.log("successful delete");
            }, function (error) {
              if (error.status == 204) {
                console.log("successful delete post");
              } else {
                console.log("error deleting post");
              }
            });

            _this5.fetchPosts();
          });
        }
      }, {
        key: "setCurrentDraft",
        value: function setCurrentDraft(post) {
          this.currentDraft = post;
        }
      }, {
        key: "getCurrentDraft",
        value: function getCurrentDraft() {
          return this.currentDraft;
        }
      }]);

      return BlogService;
    }();

    BlogService.ɵfac = function BlogService_Factory(t) {
      return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogService,
      factory: BlogService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    function getCookie() {
      var name = 'jwt=';
      var i = document.cookie.indexOf(name);
      var cookie = '';

      if (i != -1) {
        i = i + 4;

        while (document.cookie.charAt(i) != ';' && i < document.cookie.length) {
          cookie = cookie + document.cookie.charAt(i);
          i++;
        }
      }

      return cookie;
    }

    function parseJWT(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    }
    /***/

  },

  /***/
  "./src/app/edit/edit.component.ts":
  /*!****************************************!*\
    !*** ./src/app/edit/edit.component.ts ***!
    \****************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function EditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TITLE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_div_0_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.post.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BODY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_div_0_Template_textarea_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.post.body = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_0_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onClickSave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_0_Template_a_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onClickPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "preview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_0_Template_a_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onClickDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.post.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.post.body)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 5, ctx_r0.post.modified, "medium"), "");
      }
    }

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(blogService, router, activatedRoute) {
        _classCallCheck(this, EditComponent);

        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.activatedRoute.paramMap.subscribe(function () {
            return _this6.getPost();
          });
          console.log("this is the post in init");
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this7 = this;

          var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
          this.post = this.blogService.getCurrentDraft();

          if (!this.post) {
            console.log("get current draft returned null, searching post id");
            this.blogService.getPost(id).then(function (val) {
              console.log("inside get post");

              _this7.blogService.setCurrentDraft(val);

              _this7.post = val;
              console.log("heres the post" + _this7.post);
            });
          } else if (this.post.postid != id) {
            console.log("get current draft returned different id, searching post id");
            this.blogService.getPost(id).then(function (val) {
              _this7.blogService.setCurrentDraft(val);

              _this7.post = val;
            });
          }

          console.log("this is the post in get post in edit");
        }
      }, {
        key: "onClickSave",
        value: function onClickSave() {
          var _this8 = this;

          this.blogService.getPost(this.post.postid).then(function (val) {
            if (val == null) {
              _this8.blogService.newPost(_this8.post).then(function (val) {
                _this8.blogService.setCurrentDraft(_this8.post);
              });

              location.reload();
            } else {
              _this8.blogService.updatePost(_this8.post).then();

              location.reload();
            }
          });
        }
      }, {
        key: "onClickPreview",
        value: function onClickPreview() {
          this.blogService.setCurrentDraft(this.post);
          this.router.navigate(['preview', this.post.postid]);
        }
      }, {
        key: "onClickDelete",
        value: function onClickDelete() {
          var _this9 = this;

          this.blogService.deletePost(this.post.postid).then(function (next) {
            console.log("successful delete");

            _this9.router.navigate(['/']);
          });
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      inputs: {
        post: "post"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["for", "title"], ["type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "body"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "click"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditComponent_div_0_Template, 21, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["a[_ngcontent-%COMP%] {\n    border-style: solid;\n    border-color: black;\n    border-width: 0.1em;\n    border-radius: 0.2em;\n    padding: 0.2em 1.0em;\n    color: black;\n    margin: 0 3.0em 3.0em 0;\n    font-family: \"Courier New\", Courier, monospace;\n    font-size: 15px;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: white;\n    background-color: black;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ndiv[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsOENBQThDO0lBQzlDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgIHBhZGRpbmc6IDAuMmVtIDEuMGVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAgMy4wZW0gMy4wZW0gMDtcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit',
          templateUrl: './edit.component.html',
          styleUrls: ['./edit.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListComponent_ul_2_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ul_2_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var post_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.onPostClick($event, post_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", post_r2.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, post_r2.created, "medium"));
      }
    }

    function ListComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ul_2_a_1_Template, 6, 5, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(blogService, router) {
        _classCallCheck(this, ListComponent);

        this.blogService = blogService;
        this.router = router;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.blogService.fetchPosts().then(function (val) {
            _this10.posts = val;
            console.log(_this10.posts[0]);
          });
        }
      }, {
        key: "clickedNewPost",
        value: function clickedNewPost() {
          if (this.posts) {
            this.posts.sort(compare);
          }

          var newPostId = this.posts[this.posts.length - 1].postid + 1;
          var post = {
            'postid': newPostId,
            'created': new Date(),
            'modified': new Date(),
            'title': '',
            'body': ''
          };
          this.blogService.setCurrentDraft(post);
          this.router.navigate(['edit', post.postid]);
        }
      }, {
        key: "onPostClick",
        value: function onPostClick(event, post) {
          var _this11 = this;

          console.log("here with clicked post " + post.postid);
          this.blogService.setCurrentDraft(post);
          this.router.navigate(['edit', post.postid]);
          this.blogService.fetchPosts().then(function (val) {
            _this11.posts = val;
            console.log("fetched posts after clicked one");
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 3,
      vars: 1,
      consts: [[3, "click"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_0_listener() {
            return ctx.clickedNewPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ul_2_Template, 2, 1, "ul", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["button[_ngcontent-%COMP%] {\n    border-style: solid;\n    border-color: black;\n    border-width: 0.1em;\n    border-radius: 0.2em;\n    padding: 0.35em 1.2em;\n    color: black;\n    margin: 0 0.3em 0.3em 1.5em;\n    font-family: \"Courier New\", Courier, monospace;\n    font-size: 15px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    color: black;\n    background-color: #f2f2f2;\n}\n\nli[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px;\n  margin: 1.0em 0.3em 0.3em 0em;\n  width: 100%;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1em;\n  border-radius: 0.2em;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 20px;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n}\n\nli[_ngcontent-%COMP%]:hover {\n    color: white;\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsOENBQThDO0lBQzlDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgcGFkZGluZzogMC4zNWVtIDEuMmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4zZW0gMS41ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxubGkge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDEuMGVtIDAuM2VtIDAuM2VtIDBlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMC4xZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmxpOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })(); // compare function for sorting results


    function compare(a, b) {
      var aPostId = a.postid;
      var bPostId = b.postid;
      var comparison = 0;

      if (aPostId > bPostId) {
        comparison = 1;
      } else if (aPostId < bPostId) {
        comparison = -1;
      }

      return comparison;
    }
    /***/

  },

  /***/
  "./src/app/preview/preview.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/preview/preview.component.ts ***!
    \**********************************************/

  /*! exports provided: PreviewComponent */

  /***/
  function srcAppPreviewPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewComponent", function () {
      return PreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! commonmark */
    "./node_modules/commonmark/lib/index.js");
    /* harmony import */


    var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreviewComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.markdownTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PreviewComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.markdownBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var PreviewComponent = /*#__PURE__*/function () {
      function PreviewComponent(blogService, router, activatedRoute) {
        _classCallCheck(this, PreviewComponent);

        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(PreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.parser = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
          this.renderer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
          this.activatedRoute.paramMap.subscribe(function () {
            return _this12.getPost();
          });
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this13 = this;

          var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
          this.post = this.blogService.getCurrentDraft();

          if (!this.post) {
            console.log("get current draft returned null, searching post id");
            this.blogService.getPost(id).then(function (val) {
              _this13.blogService.setCurrentDraft(val);

              _this13.post = val;
              _this13.markdownTitle = _this13.renderer.render(_this13.parser.parse(_this13.post.title));
              _this13.markdownBody = _this13.renderer.render(_this13.parser.parse(_this13.post.body));
              console.log("this is the post in get post in edit");
            });
          } else if (this.post.postid != id) {
            console.log("get current draft returned different id, searching post id");
            this.blogService.getPost(id).then(function (val) {
              _this13.blogService.setCurrentDraft(val);

              _this13.post = val;
              _this13.markdownTitle = _this13.renderer.render(_this13.parser.parse(_this13.post.title));
              _this13.markdownBody = _this13.renderer.render(_this13.parser.parse(_this13.post.body));
              console.log("this is the post in get post in edit");
            });
          } else {
            this.markdownTitle = this.renderer.render(this.parser.parse(this.post.title));
            this.markdownBody = this.renderer.render(this.parser.parse(this.post.body));
            console.log("this is the post in get post in edit");
          }
        }
      }, {
        key: "onClickEdit",
        value: function onClickEdit() {
          this.router.navigate(['edit', this.post.postid]);
        }
      }]);

      return PreviewComponent;
    }();

    PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
      return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewComponent,
      selectors: [["app-preview"]],
      decls: 5,
      vars: 2,
      consts: [[1, "previewtile"], [4, "ngIf"], ["type", "button", 3, "click"], [3, "innerHTML"]],
      template: function PreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewComponent_div_1_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_Template_button_click_3_listener() {
            return ctx.onClickEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.markdownTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.markdownBody);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2px 2px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.previewtile[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 30em;\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #f2f2f2;\n    border-style: solid;\n    border-color: black;\n    border-width: 0.1em;\n    border-radius: 0.2em;\n    padding: 0.35em 1.2em;\n    color: black;\n    margin: 0 0.3em 0.3em 0;\n    font-family: \"Courier New\", Courier, monospace;\n    font-size: 15px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    color: white;\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7SUFDOUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4IDJweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5wcmV2aWV3dGlsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAzMGVtO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgcGFkZGluZzogMC4zNWVtIDEuMmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4zZW0gMDtcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview',
          templateUrl: './preview.component.html',
          styleUrls: ['./preview.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/cs144/shared/angular-blog/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map