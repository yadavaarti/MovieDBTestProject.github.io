function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n \r\n <div class=\"carousel fade-carousel slide\" data-ride=\"carousel\" data-interval=\"4000\" id=\"bs-carousel\">\r\n   <!-- Overlay -->\r\n   <div class=\"overlay\"></div>\r\n \r\n   <!-- Indicators -->\r\n   <ol class=\"carousel-indicators\">\r\n     <li data-target=\"#bs-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n     <li data-target=\"#bs-carousel\" data-slide-to=\"1\"></li>\r\n     <li data-target=\"#bs-carousel\" data-slide-to=\"2\"></li>\r\n   </ol>\r\n   \r\n   <!-- Wrapper for slides -->\r\n   <div class=\"carousel-inner\">\r\n     <div class=\"item slides active\">\r\n       <div class=\"slide-1\"></div>\r\n       <div class=\"hero\">\r\n         \r\n             <h1>LATEST ONLINE MOVIES</h1>        \r\n             <h3>IN SPACE NO ONE CAN HEAR YOU SCREAM.\r\n            </h3>\r\n            \r\n\r\n         \r\n         <button class=\"btn btn-hero btn-lg\" role=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">Watch Trailer</button>\r\n       </div>\r\n     </div>\r\n     <div class=\"item slides\">\r\n       <div class=\"slide-2\"></div>\r\n       <div class=\"hero\">        \r\n         \r\n        <h1>LATEST ONLINE MOVIES</h1>        \r\n        <h3>IN SPACE NO ONE CAN HEAR YOU SCREAM.\r\n       </h3>\r\n             \r\n         <button class=\"btn btn-hero btn-lg\" role=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\">Watch Trailer</button>\r\n       </div>\r\n     </div>\r\n     <div class=\"item slides\">\r\n       <div class=\"slide-3\"></div>\r\n       <div class=\"hero\">        \r\n         \r\n        <h1>LATEST ONLINE MOVIES</h1>        \r\n        <h3>IN SPACE NO ONE CAN HEAR YOU SCREAM.\r\n       </h3>\r\n         \r\n         <button class=\"btn btn-hero btn-lg\" role=\"button\" data-toggle=\"modal\" data-target=\"#myModal3\">Watch Trailer</button>\r\n       </div>\r\n     </div>\r\n   </div> \r\n </div>  \r\n \r\n \r\n\r\n <div class=\"container\">\r\n  <h1 class=\"d-flex ml-auto p-2\">{{ listName }}</h1>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-3\" *ngFor=\"let movie of MovieData.data | paginate: config\">\r\n      \r\n      <div class=\"thumbnail\" style=\"padding: 10px;\">\r\n        <a  (click)=\"GotoPgae(movie.id)\">\r\n          <img src=\"{{ movie.imgpath }}\" alt=\"Lights\" style=\"width:100%\">\r\n          <div class=\"caption\">\r\n            <div class=\"contenthide\">\r\n            <h4  title='{{ movie.title }}' style=\"display: contents;\">{{ movie.title }}</h4>\r\n          </div>\r\n          <div style=\"display: none;\">\r\n         </div>  \r\n            <p>{{movie.ReleasDate}}</p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n    \r\n  </div>\r\n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n\r\n<hr>\r\n<br>\r\n<h2>Upcomping Movies</h2>\r\n  <div class=\"col-sm-12\" style=\"padding-top: 20px;\">\r\n    <div class=\"col-md-3\" *ngFor=\"let item of upcomingmovies\" style=\"display: inline-block\">\r\n      <div class=\"thumbnail\" style=\"padding: 10px;\">\r\n        <a  (click)=\"GotoPgae(item.id)\">\r\n      <img src=\"https://image.tmdb.org/t/p/w185_and_h278_bestv2/{{item.poster_path}}\" alt=\"\">\r\n      \r\n      <div class=\"caption\">\r\n        <div class=\"contenthide\">\r\n      \r\n      <h4 maxlenth='19' title='{{ item.title }}' style=\"display: contents;\">{{ item.title }}</h4>\r\n\r\n        </div>\r\n      </div>\r\n      </a>\r\n      \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--   \r\n\r\n<h1>Hi {{currentUser.firstName}}!</h1>\r\n<p>You're logged in with Angular 8!!</p>\r\n<h3>All registered users:</h3>\r\n<ul>\r\n    <li *ngFor=\"let user of users\">\r\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\r\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\r\n    </li>\r\n</ul>\r\n -->\r\n\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">watch Trailer</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>\r\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/Eh993__rOxA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>          </p>\r\n        </div>\r\n        \r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">watch Trailer</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>\r\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/-_DJEzZk2pc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>          </p>\r\n        </div>\r\n        \r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal fade\" id=\"myModal3\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">watch Trailer</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>\r\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/_2aWqecTTuE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>          </p>\r\n        </div>\r\n        \r\n      </div>\r\n      \r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Movie/Movie.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Movie/Movie.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMovieMovieComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"thumbnail\">\r\n  <a href=\"/w3images/lights.jpg\" target=\"_blank\">\r\n    <img src=\"{{ posterUrl }}\" alt=\"Lights\" style=\"width:100%\">\r\n    <div class=\"caption\">\r\n      <h2>{{ movie.title }}</h2>\r\n      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>\r\n    </div>\r\n  </a>\r\n</div> -->\r\n\r\n<!-- <div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-title\">\r\n                                <h2>{{ movie.title }}</h2>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <p><img src=\"{{ posterUrl }}\"  class=\"rounded mx-auto d-block\"></p>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <p><strong>Average vote: </strong>{{ movie.vote_average }}</p>\r\n                            <p><strong>Relase date: </strong>{{ movie.release_date }}</p>\r\n                            <p><strong>Popularity: </strong>{{ movie.popularity }}</p>\r\n                            <p><strong>Votes: </strong>{{ movie.vote_count }}</p>\r\n                            <button class=\"btn btn-primary\" (click)=\"changeButton()\">{{ displayButton }}</button>\r\n                        </div>\r\n                        <div class=\"col-md-6\" *ngIf=\"display\">\r\n                            <app-movie-details [movie]=\"movie\"></app-movie-details>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/MovieList/MovieList.Component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MovieList/MovieList.Component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMovieListMovieListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"d-flex ml-auto p-2\">{{ listName }}\r\n    <button class=\"btn btn-info d-flex ml-auto p-2\"(click)=\"sortList()\">Sort Alphabetically</button></h1>\r\n  <div *ngFor=\"let movie of moviesList\">\r\n    <app-movie [movie]=\"movie\"></app-movie>\r\n  </div>\r\n\r\n  MOvie list page";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"    background-color: transparent;border-color: transparent;\">\n  <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header page-scroll\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"\" style=\"color: white;\">Movies Pro</a>\n      </div>\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"hidden\">\n                  <a href=\"#page-top\"></a>\n              </li>\n              \n              <li class=\"page-scroll\">\n                  <a href=\"#\" style=\"color: white;\">About</a>\n              </li>\n              <li class=\"page-scroll\" *ngIf=\"currentUser\">\n                  <a (click)=\"logout()\" style=\"color: white;\">Logout</a>\n              </li>\n          </ul>\n      </div>\n      <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n\n\n              <router-outlet></router-outlet>\n\n       \n              <footer class=\"col-sm-12\" style=\"min-height: 50px;background-color:#18bc9c;color:#fff;text-align:center;padding-top: 20px;\">\n                MoviePro by aarti yadav www.mineoff.com © 2020 \n            </footer>\n\n<!-- \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n  <div class=\"navbar-nav\">\n    <a class=\"nav-item nav-link\" routerLink=\"MovieList\">MovieList</a>\n\n      <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n  </div>\n</nav>\n<!-- \n<div class=\"jumbotron\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-6 offset-sm-3\">\n              \n          </div>\n      </div>\n  </div>\n</div>\n\n\n<div class=\"text-center\">\n\n</div>\n\n -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container \" style=\"padding-top: 50px; padding-bottom: 90px;\">\n    <div class=\"col-md-6\">\n\n\n<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Login\n        </button>\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-details/movie-details.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-details/movie-details.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMovieDetailsMovieDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header id=\"page-top\">\n    \n        <div [ngStyle]=\"{ 'background-image': 'url(' + img + ')'}\" class=\"row hdrdiv\">  \n                  <div class=\"row hdrovrly\">\n            \n            <h1 style=\"text-align: center;margin-top: 10%;color: white;\">Movie Details</h1>   \n        </div>\n        </div>\n    \n</header>\n\n<div class=\"container\" style=\" padding: 10px; padding-top: 40px; padding-bottom: 30px;font-size: 16px;\">\n<div class=\"col-md-8\" >\n  \n  \n    <img class=\"img img-responsive\" src='{{posterUrl}}' style=\"float: left; padding-right: 20px;width: 40%;\">\n    \n<div>\n   \n  \n\n  <h1>{{movies.title}}</h1>\n  <span style=\"font-style: italic;\">{{movies.tagline}}</span>\n  <div *ngIf=\"movivideos != null \" style=\"margin-top: 15px;\"> \n    <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <i class=\"glyphicon glyphicon-play\t\n      \"></i>\n      Play Trailer</a>\n  </div>\n  \n  <hr>\n  <p>\n    \n    <strong>Genre: </strong>\n    <span *ngFor=\"let genre of movies.genres; let i=index\">\n      <span *ngIf=\"movies.genres.length -1 > i; else noComma\">\n          {{ genre.name }}, \n      </span>\n      <ng-template #noComma>{{ genre.name }}</ng-template>\n    </span>\n  </p>\n    <p>\n    <strong>Description: </strong>\n    {{ movies.overview }}\n  \n  </p>\n  <p>\n    <strong>Production countries: </strong>\n    <span *ngFor=\"let country of movies.production_countries; let i=index\">\n        <span *ngIf=\"movies.production_countries.length -1 > i; else noComma\">\n            {{ country.name }}, \n        </span>\n        <ng-template #noComma>{{ country.name }}</ng-template>\n    </span>\n  </p>\n  <p>\n    <strong>Production companies: </strong>\n    <span *ngFor=\"let company of movies.production_companies; let i=index\">\n        <span *ngIf=\"movies.production_companies.length -1 > i; else noComma\">\n            {{ company.name }}, \n        </span>\n        <ng-template #noComma>{{ company.name }}</ng-template>\n    </span>\n    \n  </p>\n  \n  <strong> Release Date :</strong>\n  <span> {{movies.release_date}}</span>\n  \n\n  <p>\n      <strong> \n      <a href=\"{{ imdbLink }}/{{ movies.imdb_id}}\">Go to IMDB</a>\n      </strong>\n    </p>\n  </div>\n   \n</div>\n\n<div >\n\n\n<div class=\"col-md-4\" style=\"padding-left: 40px; padding-top: 30px;\">\n  <div class=\"mrginbottom20\">\n    <strong> Status :</strong>\n    <span> {{movies.status}}</span>\n  </div>\n  <div class=\"mrginbottom20\">\n    <strong> Budget :</strong>\n    <span> {{movies.budget}}</span>\n  </div>\n  <div class=\"mrginbottom20\">\n    <strong>Revenue : </strong>\n    \n    {{movies.revenue}}</div>\n\n    <div class=\"mrginbottom20\">\n      <strong>Original Language : </strong>\n      {{movies.original_language}}</div>\n\n      <div class=\"mrginbottom20\">\n        <strong>Popularity : </strong>\n        {{movies.popularity}}</div>\n\n        <div class=\"mrginbottom20\">\n          <strong>Vote Count : </strong>\n          {{movies.vote_count}}</div>\n        \n\n  \n</div>\n\n    <!-- <div class=\"col-sm-12\" *ngFor=\"let values1 of recomandation;\">\n      <b>{{values1.title}}</b>\n    </div> -->\n</div>\n <!-- review starts -->\n <div class=\"col-sm-12 \" *ngIf=\"reviews?.length  > 0\">\n  <h1>Review</h1>\n  <button  (click)=\"myFunction('Demo1')\" class=\"w3-btn w3-block w3-black w3-left-align btn btn-info\" style=\"background: black;border: 1px solid black;\">Read All Reviews</button>\n  <div id=\"Demo1\" class=\" w3-hide\">\n<div  class=\"col-sm-12 pdingtop20\" *ngFor=\"let values of reviews;\" style=\" border:1px solid #ededed\">\n\n\n<p>\n    <a  target=\"_blank\" href=\"{{values.url}}\" class=\"float-left\" ><strong>{{values.author}}</strong></a>\n    \n\n</p>\n<div class=\"clearfix\"></div>\n<p class=\"contenthide\">{{values.content}}</p>\n<p>\n    <a target=\"_blank\" href=\"{{values.url}}\" class=\"float-right btn btn-outline-primary ml-2\"> <i class=\"fa fa-heart\"></i> Read more</a>\n</p>\n\n</div>\n</div>\n</div>\n\n<!-- review end -->\n</div>\n\n<div class=\"container\" style=\"margin-bottom: 30px;\">\n  <h1>Trending</h1>\n  <div style=\"display: flex;overflow-x: auto;\">\n  <div *ngFor=\"let dt1 of trandng\" (click)=\"GotoPgae(dt1.id)\" style=\"cursor: pointer;\">\n\n  \n  <img _ngcontent-jco-c3=\"\" alt=\"Image\" style=\"min-width:100%;\" src=\"https://image.tmdb.org/t/p/w185_and_h278_bestv2{{dt1.poster_path}}\">\n</div></div>\n</div>\n\n<!-- recomandation start -->\n\n<div class=\"container\">\n  <div class=\"row\">\n    <h1 *ngIf=\"recomandation?.length > 0\">Recommandations </h1>\n    <div class=\"col-md-3\" *ngFor=\"let dt of recomandation\">\n        <a (click)=\"GotoPgae(dt.id)\">\n            <img src=\"https://image.tmdb.org/t/p/w185_and_h278_bestv2{{dt.poster_path}}\" alt=\"Image\" style=\"max-width:100%;\">\n            <div class=\"contenthide\">\n            <p  title='{{ dt.title }}' style=\"display: contents;\">{{dt.title}}</p>\n            </div>  \n        </a>\n    </div>\n    \n</div>\n</div>\n<!-- recomandation end -->\n\n<!-- popup start -->\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n  \n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">watch Trailer</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n          <iframe id=\"myIframe\"  width=\"560\" height=\"315\" frameborder=\"0\"  allowfullscreen></iframe>          </p>\n      </div>\n      \n    </div>\n    \n  </div>\n</div>\n\n<!-- popup end -->\n<script>\n  \n  </script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"padding-top: 50px; padding-bottom: 90px;\">\n<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Register\n        </button>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>user-profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/Home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\r\nFade content bs-carousel with hero headers\r\nCode snippet by maridlcrmn (Follow me on Twitter @maridlcrmn) for Bootsnipp.com\r\nImage credits: unsplash.com\r\n*/\r\n\r\n/********************************/\r\n\r\n/*       Fade Bs-carousel       */\r\n\r\n/********************************/\r\n\r\n.fade-carousel {\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n.fade-carousel .carousel-inner .item {\r\n    height: 100vh;\r\n}\r\n\r\n.fade-carousel .carousel-indicators > li {\r\n    margin: 0 2px;\r\n    background-color: #f39c12;\r\n    border-color: #f39c12;\r\n    opacity: .7;\r\n}\r\n\r\n.fade-carousel .carousel-indicators > li.active {\r\n  width: 10px;\r\n  height: 10px;\r\n  opacity: 1;\r\n}\r\n\r\n/********************************/\r\n\r\n/*          Hero Headers        */\r\n\r\n/********************************/\r\n\r\n.hero {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 3;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    text-shadow: 1px 1px 0 rgba(0,0,0,.75);\r\n      transform: translate3d(-50%,-50%,0);\r\n}\r\n\r\n.hero h1 {\r\n    font-size: 6em;    \r\n    font-weight: bold;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.fade-carousel .carousel-inner .item .hero {\r\n    opacity: 0; \r\n    transition: 2s all ease-in-out .1s; \r\n}\r\n\r\n.fade-carousel .carousel-inner .item.active .hero {\r\n    opacity: 1; \r\n    transition: 2s all ease-in-out .1s;    \r\n}\r\n\r\n/********************************/\r\n\r\n/*            Overlay           */\r\n\r\n/********************************/\r\n\r\n.overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-color: #080d15;\r\n    opacity: .7;\r\n}\r\n\r\n/********************************/\r\n\r\n/*          Custom Buttons      */\r\n\r\n/********************************/\r\n\r\n.btn.btn-lg {padding: 10px 40px;}\r\n\r\n.btn.btn-hero,\r\n.btn.btn-hero:hover,\r\n.btn.btn-hero:focus {\r\n    color: #f5f5f5;\r\n    background-color: #1abc9c;\r\n    border-color: #1abc9c;\r\n    outline: none;\r\n    margin: 20px auto;\r\n}\r\n\r\n/********************************/\r\n\r\n/*       Slides backgrounds     */\r\n\r\n/********************************/\r\n\r\n.fade-carousel .slides .slide-1, \r\n.fade-carousel .slides .slide-2,\r\n.fade-carousel .slides .slide-3 {\r\n  height: 100vh;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.fade-carousel .slides .slide-1 {\r\n  background-image: url(https://images8.alphacoders.com/723/thumb-1920-723808.jpg); \r\n}\r\n\r\n.fade-carousel .slides .slide-2 {\r\n  background-image: url(https://c4.wallpaperflare.com/wallpaper/315/1011/750/joker-joker-2019-movie-joaquin-phoenix-movies-hd-wallpaper-preview.jpg);\r\n}\r\n\r\n.fade-carousel .slides .slide-3 {\r\n  background-image: url(https://i.pinimg.com/originals/75/5d/d5/755dd5fe656eeb2ad8dcde7796226396.jpg);\r\n}\r\n\r\n/********************************/\r\n\r\n/*          Media Queries       */\r\n\r\n/********************************/\r\n\r\n@media screen and (min-width: 980px){\r\n    .hero { width: 980px; }    \r\n}\r\n\r\n@media screen and (max-width: 640px){\r\n    .hero h1 { font-size: 4em; }    \r\n}\r\n\r\n.contenthide\r\n{\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1.8em;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQzs7QUFFRCxpQ0FBaUM7O0FBQ2pDLGlDQUFpQzs7QUFDakMsaUNBQWlDOztBQUNqQztJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLGlDQUFpQzs7QUFDakMsaUNBQWlDOztBQUNqQyxpQ0FBaUM7O0FBQ2pDO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNDQUFzQztNQUs1QixtQ0FBbUM7QUFDakQ7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBS0Ysa0NBQWtDO0FBQzlDOztBQUNBO0lBQ0ksVUFBVTtJQUtGLGtDQUFrQztBQUM5Qzs7QUFFQSxpQ0FBaUM7O0FBQ2pDLGlDQUFpQzs7QUFDakMsaUNBQWlDOztBQUNqQztJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBLGlDQUFpQzs7QUFDakMsaUNBQWlDOztBQUNqQyxpQ0FBaUM7O0FBQ2pDLGFBQWEsa0JBQWtCLENBQUM7O0FBQ2hDOzs7SUFHSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBLGlDQUFpQzs7QUFDakMsaUNBQWlDOztBQUNqQyxpQ0FBaUM7O0FBQ2pDOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxnRkFBZ0Y7QUFDbEY7O0FBQ0E7RUFDRSxrSkFBa0o7QUFDcEo7O0FBQ0E7RUFDRSxtR0FBbUc7QUFDckc7O0FBRUEsaUNBQWlDOztBQUNqQyxpQ0FBaUM7O0FBQ2pDLGlDQUFpQzs7QUFDakM7SUFDSSxRQUFRLFlBQVksRUFBRTtBQUMxQjs7QUFDQTtJQUNJLFdBQVcsY0FBYyxFQUFFO0FBQy9COztBQUVBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkZhZGUgY29udGVudCBicy1jYXJvdXNlbCB3aXRoIGhlcm8gaGVhZGVyc1xyXG5Db2RlIHNuaXBwZXQgYnkgbWFyaWRsY3JtbiAoRm9sbG93IG1lIG9uIFR3aXR0ZXIgQG1hcmlkbGNybW4pIGZvciBCb290c25pcHAuY29tXHJcbkltYWdlIGNyZWRpdHM6IHVuc3BsYXNoLmNvbVxyXG4qL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICBGYWRlIEJzLWNhcm91c2VsICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmZhZGUtY2Fyb3VzZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uZmFkZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uZmFkZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyA+IGxpIHtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjM5YzEyO1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbn1cclxuLmZhZGUtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgPiBsaS5hY3RpdmUge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgIEhlcm8gSGVhZGVycyAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uaGVybyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIHJnYmEoMCwwLDAsLjc1KTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcclxuICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcclxuICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcclxufVxyXG4uaGVybyBoMSB7XHJcbiAgICBmb250LXNpemU6IDZlbTsgICAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mYWRlLWNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuaXRlbSAuaGVybyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAycyBhbGwgZWFzZS1pbi1vdXQgLjFzO1xyXG4gICAgICAgLW1vei10cmFuc2l0aW9uOiAycyBhbGwgZWFzZS1pbi1vdXQgLjFzOyBcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogMnMgYWxsIGVhc2UtaW4tb3V0IC4xczsgXHJcbiAgICAgICAgIC1vLXRyYW5zaXRpb246IDJzIGFsbCBlYXNlLWluLW91dCAuMXM7IFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAycyBhbGwgZWFzZS1pbi1vdXQgLjFzOyBcclxufVxyXG4uZmFkZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0uYWN0aXZlIC5oZXJvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDJzIGFsbCBlYXNlLWluLW91dCAuMXM7XHJcbiAgICAgICAtbW96LXRyYW5zaXRpb246IDJzIGFsbCBlYXNlLWluLW91dCAuMXM7IFxyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiAycyBhbGwgZWFzZS1pbi1vdXQgLjFzOyBcclxuICAgICAgICAgLW8tdHJhbnNpdGlvbjogMnMgYWxsIGVhc2UtaW4tb3V0IC4xczsgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDJzIGFsbCBlYXNlLWluLW91dCAuMXM7ICAgIFxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgT3ZlcmxheSAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwZDE1O1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgQ3VzdG9tIEJ1dHRvbnMgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5idG4uYnRuLWxnIHtwYWRkaW5nOiAxMHB4IDQwcHg7fVxyXG4uYnRuLmJ0bi1oZXJvLFxyXG4uYnRuLmJ0bi1oZXJvOmhvdmVyLFxyXG4uYnRuLmJ0bi1oZXJvOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YztcclxuICAgIGJvcmRlci1jb2xvcjogIzFhYmM5YztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICBTbGlkZXMgYmFja2dyb3VuZHMgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmZhZGUtY2Fyb3VzZWwgLnNsaWRlcyAuc2xpZGUtMSwgXHJcbi5mYWRlLWNhcm91c2VsIC5zbGlkZXMgLnNsaWRlLTIsXHJcbi5mYWRlLWNhcm91c2VsIC5zbGlkZXMgLnNsaWRlLTMge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmZhZGUtY2Fyb3VzZWwgLnNsaWRlcyAuc2xpZGUtMSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzOC5hbHBoYWNvZGVycy5jb20vNzIzL3RodW1iLTE5MjAtNzIzODA4LmpwZyk7IFxyXG59XHJcbi5mYWRlLWNhcm91c2VsIC5zbGlkZXMgLnNsaWRlLTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2M0LndhbGxwYXBlcmZsYXJlLmNvbS93YWxscGFwZXIvMzE1LzEwMTEvNzUwL2pva2VyLWpva2VyLTIwMTktbW92aWUtam9hcXVpbi1waG9lbml4LW1vdmllcy1oZC13YWxscGFwZXItcHJldmlldy5qcGcpO1xyXG59XHJcbi5mYWRlLWNhcm91c2VsIC5zbGlkZXMgLnNsaWRlLTMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvNzUvNWQvZDUvNzU1ZGQ1ZmU2NTZlZWIyYWQ4ZGNkZTc3OTYyMjYzOTYuanBnKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICBNZWRpYSBRdWVyaWVzICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpe1xyXG4gICAgLmhlcm8geyB3aWR0aDogOTgwcHg7IH0gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xyXG4gICAgLmhlcm8gaDEgeyBmb250LXNpemU6IDRlbTsgfSAgICBcclxufVxyXG5cclxuLmNvbnRlbnRoaWRlXHJcbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/Home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, authenticationService, userService, storage, movies, route) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.storage = storage;
        this.movies = movies;
        this.route = route;
        this.users = [];
        this.moviesList = [];
        this.listName = 'popular';
        this.MovieData = {
          count: 60,
          data: []
        };
        this.collection = {
          count: 60,
          data: []
        };
        movies.searchFilterEmited$.subscribe(function (filter) {
          _this.search(filter);

          _this.listName = 'Search results of: ' + filter;
        });
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
          _this.currentUser = user;
        });
        this.storage.getUpComingMovies().subscribe(function (response) {
          _this.upcomingmovies = response['results'];
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            if (params.category === undefined) {
              _this2.getList('popular');
            } else {
              _this2.getList(params.category);
            }
          });
          this.loadAllUsers();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentUserSubscription.unsubscribe();
        }
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this3 = this;

          this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this3.users = users;
          });
        }
      }, {
        key: "getList",
        value: function getList(category) {
          var _this4 = this;

          this.storage.getList(category).subscribe(function (response) {
            _this4.moviesList = response['results'];

            _this4.sortByPopularity(_this4.moviesList);

            debugger;
            _this4.listName = category[0].toUpperCase() + category.slice(1).replace(/_/g, ' ');

            if (_this4.moviesList.length > 0) {
              for (var i = 0; i < _this4.moviesList.length; i++) {
                _this4.imgBaseUrl = _this4.storage.getImageBaseUrl();
                _this4.posterUrl = _this4.imgBaseUrl + 'w154' + _this4.moviesList[i].poster_path;

                _this4.MovieData.data.push({
                  'imgpath': _this4.imgBaseUrl + 'w154' + _this4.moviesList[i].poster_path,
                  'title': _this4.moviesList[i].title,
                  'ReleasDate': _this4.moviesList[i].release_date,
                  'id': _this4.moviesList[i].id
                });
              }

              _this4.config = {
                itemsPerPage: 7,
                currentPage: 1
              };
            }
          });
        }
      }, {
        key: "search",
        value: function search(query) {
          var _this5 = this;

          this.storage.search(query).subscribe(function (response) {
            _this5.moviesList = response['results'];

            _this5.sortByPopularity(_this5.moviesList);
          });
        }
      }, {
        key: "sortByPopularity",
        value: function sortByPopularity(list) {
          this.movies.sortByPopularity(list);
        }
      }, {
        key: "sortList",
        value: function sortList() {
          this.movies.sortList(this.moviesList);
        }
      }, {
        key: "GotoPgae",
        value: function GotoPgae(values) {
          debugger;
          this.storage.setOption(values);
          this.router.navigateByUrl('/MovieDetails');
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["MovieStoredService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HomeComponent.prototype, "movie", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/Home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/Home/index.ts":
  /*!*******************************!*\
    !*** ./src/app/Home/index.ts ***!
    \*******************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/Home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"];
    });
    /***/

  },

  /***/
  "./src/app/Movie/Movie.Component.ts":
  /*!******************************************!*\
    !*** ./src/app/Movie/Movie.Component.ts ***!
    \******************************************/

  /*! exports provided: MovieComponent */

  /***/
  function srcAppMovieMovieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieComponent", function () {
      return MovieComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MovieComponent = /*#__PURE__*/function () {
      function MovieComponent(storage) {
        _classCallCheck(this, MovieComponent);

        this.storage = storage;
        this.movieDetails = {};
        this.display = false;
        this.displayButton = 'Display details';
      }

      _createClass(MovieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.movie.poster_path === null) {
            this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
          } else {
            this.imgBaseUrl = this.storage.getImageBaseUrl();
            this.posterUrl = this.imgBaseUrl + 'w154' + this.movie.poster_path;
          }
        }
      }, {
        key: "changeButton",
        value: function changeButton() {
          this.display = !this.display;

          if (this.display === true) {
            this.displayButton = 'Hide details';
          } else {
            this.displayButton = 'Display details';
          }
        }
      }]);

      return MovieComponent;
    }();

    MovieComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_1__["MovieStoredService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], MovieComponent.prototype, "movie", void 0);
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-movie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Movie.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Movie/Movie.component.html"))["default"]
    })], MovieComponent);
    /***/
  },

  /***/
  "./src/app/Movie/index.ts":
  /*!********************************!*\
    !*** ./src/app/Movie/index.ts ***!
    \********************************/

  /*! exports provided: MovieComponent */

  /***/
  function srcAppMovieIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Movie_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Movie.Component */
    "./src/app/Movie/Movie.Component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MovieComponent", function () {
      return _Movie_Component__WEBPACK_IMPORTED_MODULE_1__["MovieComponent"];
    });
    /***/

  },

  /***/
  "./src/app/MovieList/MovieList.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/MovieList/MovieList.component.ts ***!
    \**************************************************/

  /*! exports provided: MoviesListComponent */

  /***/
  function srcAppMovieListMovieListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function () {
      return MoviesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MoviesListComponent = /*#__PURE__*/function () {
      function MoviesListComponent(storage, movies, route) {
        var _this6 = this;

        _classCallCheck(this, MoviesListComponent);

        this.storage = storage;
        this.movies = movies;
        this.route = route;
        this.moviesList = [];
        this.listName = 'popular';
        movies.searchFilterEmited$.subscribe(function (filter) {
          _this6.search(filter);

          _this6.listName = 'Search results of: ' + filter;
        });
      }

      _createClass(MoviesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.params.subscribe(function (params) {
            if (params.category === undefined) {
              _this7.getList('popular');
            } else {
              _this7.getList(params.category);
            }
          });
        }
      }, {
        key: "getList",
        value: function getList(category) {
          var _this8 = this;

          this.storage.getList(category).subscribe(function (response) {
            _this8.moviesList = response['results'];

            _this8.sortByPopularity(_this8.moviesList);

            _this8.listName = category[0].toUpperCase() + category.slice(1).replace(/_/g, ' ');
          });
        }
      }, {
        key: "search",
        value: function search(query) {
          var _this9 = this;

          this.storage.search(query).subscribe(function (response) {
            _this9.moviesList = response['results'];

            _this9.sortByPopularity(_this9.moviesList);
          });
        }
      }, {
        key: "sortByPopularity",
        value: function sortByPopularity(list) {
          this.movies.sortByPopularity(list);
        }
      }, {
        key: "sortList",
        value: function sortList() {
          this.movies.sortList(this.moviesList);
        }
      }]);

      return MoviesListComponent;
    }();

    MoviesListComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_1__["MovieStoredService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-movies-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./MovieList.Component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/MovieList/MovieList.Component.html"))["default"]
    })], MoviesListComponent);
    /***/
  },

  /***/
  "./src/app/MovieList/index.ts":
  /*!************************************!*\
    !*** ./src/app/MovieList/index.ts ***!
    \************************************/

  /*! exports provided: MoviesListComponent */

  /***/
  function srcAppMovieListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _MovieList_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./MovieList.component */
    "./src/app/MovieList/MovieList.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function () {
      return _MovieList_component__WEBPACK_IMPORTED_MODULE_1__["MoviesListComponent"];
    });
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/ */
    "./src/app/login/index.ts");
    /* harmony import */


    var _Home___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Home/ */
    "./src/app/Home/index.ts");
    /* harmony import */


    var _register___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/ */
    "./src/app/register/index.ts");
    /* harmony import */


    var _MovieList___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./MovieList/ */
    "./src/app/MovieList/index.ts");
    /* harmony import */


    var _movie_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./movie-details */
    "./src/app/movie-details/index.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: '',
      component: _Home___WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login___WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _register___WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'MovieList',
      component: _MovieList___WEBPACK_IMPORTED_MODULE_6__["MoviesListComponent"]
    }, {
      path: 'MovieDetails',
      component: _movie_details__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, authenticationService) {
        var _this10 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'testproject';
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this10.currentUser = x;
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register */
    "./src/app/register/index.ts");
    /* harmony import */


    var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Home */
    "./src/app/Home/index.ts");
    /* harmony import */


    var _MovieList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./MovieList */
    "./src/app/MovieList/index.ts");
    /* harmony import */


    var _Movie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Movie */
    "./src/app/Movie/index.ts");
    /* harmony import */


    var _commonFiles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./commonFiles */
    "./src/app/commonFiles/index.ts");
    /* harmony import */


    var _movie_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./movie-details */
    "./src/app/movie-details/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _register__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _Home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _MovieList__WEBPACK_IMPORTED_MODULE_10__["MoviesListComponent"], _Movie__WEBPACK_IMPORTED_MODULE_11__["MovieComponent"], _movie_details__WEBPACK_IMPORTED_MODULE_13__["MovieDetailsComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _commonFiles__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _commonFiles__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
        multi: true
      }, _services__WEBPACK_IMPORTED_MODULE_14__["MovieStoredService"], _services__WEBPACK_IMPORTED_MODULE_14__["MoviesService"], _commonFiles__WEBPACK_IMPORTED_MODULE_12__["fakeBackendProvider"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            return true;
          }

          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/commonFiles/error.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/commonFiles/error.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppCommonFilesErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this11 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this11.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/commonFiles/fake-backend.ts":
  /*!*********************************************!*\
    !*** ./src/app/commonFiles/fake-backend.ts ***!
    \*********************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppCommonFilesFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // array in local storage for registered users


    var users = JSON.parse(localStorage.getItem('users')) || [];

    var FakeBackendInterceptor = /*#__PURE__*/function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith('/users/authenticate') && method === 'POST':
                return authenticate();

              case url.endsWith('/users/register') && method === 'POST':
                return register();

              case url.endsWith('/users') && method === 'GET':
                return getUsers();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var username = body.username,
                password = body.password;
            var user = users.find(function (x) {
              return x.username === username && x.password === password;
            });
            if (!user) return error('Username or password is incorrect');
            return ok({
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: 'fake-jwt-token'
            });
          }

          function register() {
            var user = body;

            if (users.find(function (x) {
              return x.username === user.username;
            })) {
              return error('Username "' + user.username + '" is already taken');
            }

            user.id = users.length ? Math.max.apply(Math, _toConsumableArray(users.map(function (x) {
              return x.id;
            }))) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
          }

          function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
              error: {
                message: message
              }
            });
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
              status: 401,
              error: {
                message: 'Unauthorised'
              }
            });
          }

          function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
          }

          function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FakeBackendInterceptor);
    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/commonFiles/index.ts":
  /*!**************************************!*\
    !*** ./src/app/commonFiles/index.ts ***!
    \**************************************/

  /*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppCommonFilesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/commonFiles/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/commonFiles/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"];
    });
    /* harmony import */


    var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fake-backend */
    "./src/app/commonFiles/fake-backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"];
    });
    /***/

  },

  /***/
  "./src/app/commonFiles/jwt.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/commonFiles/jwt.interceptor.ts ***!
    \************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppCommonFilesJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/login/index.ts":
  /*!********************************!*\
    !*** ./src/app/login/index.ts ***!
    \********************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"];
    });
    /***/

  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false; // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            _this12.router.navigate([_this12.returnUrl]);
          }, function (error) {
            _this12.alertService.error(error);

            _this12.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/movie-details/index.ts":
  /*!****************************************!*\
    !*** ./src/app/movie-details/index.ts ***!
    \****************************************/

  /*! exports provided: MovieDetailsComponent */

  /***/
  function srcAppMovieDetailsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _movie_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./movie-details.component */
    "./src/app/movie-details/movie-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function () {
      return _movie_details_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailsComponent"];
    });
    /***/

  },

  /***/
  "./src/app/movie-details/movie-details.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/movie-details/movie-details.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMovieDetailsMovieDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contenthide\r\n{\r\n    overflow: hidden;\r\n    white-space: normal;\r\n    height: 4.4em;\r\n  }\r\n\r\n  .pdingtop20{ padding-top: 20px;}\r\n\r\n  .mrginbottom20\r\n{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  .contenthide\r\n{\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1.8em;\r\n  }\r\n\r\n  .hdrdiv\r\n  {background-size: cover; background-position: center;    background-repeat: no-repeat;}\r\n\r\n  .hdrovrly\r\n  {   height: 400px;          background-image: linear-gradient(to right, rgba(52, 41, 49, 0.83) 150px, rgba(66, 63, 65, 0.68) 100%);\r\n  }\r\n\r\n  .w3-hide{display:none!important}\r\n\r\n  .w3-block{display:block;width:100%}\r\n\r\n  .w3-show{display:block!important}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUEsYUFBYSxpQkFBaUIsQ0FBQzs7RUFFL0I7O0VBRUEsbUJBQW1CO0FBQ3JCOztFQUdBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEI7O0VBRUE7R0FDQyxzQkFBc0IsRUFBRSwyQkFBMkIsS0FBSyw0QkFBNEIsQ0FBQzs7RUFFdEY7TUFDSSxhQUFhLFdBQVcsc0dBQXNHO0VBQ2xJOztFQUNBLFNBQVMsc0JBQXNCOztFQUMvQixVQUFVLGFBQWEsQ0FBQyxVQUFVOztFQUNsQyxTQUFTLHVCQUF1QiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRoaWRlXHJcbntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgaGVpZ2h0OiA0LjRlbTtcclxuICB9XHJcblxyXG4gIC5wZGluZ3RvcDIweyBwYWRkaW5nLXRvcDogMjBweDt9XHJcblxyXG4gIC5tcmdpbmJvdHRvbTIwXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnRoaWRlXHJcbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gIH1cclxuXHJcbiAgLmhkcmRpdlxyXG4gIHtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7fVxyXG5cclxuICAuaGRyb3ZybHlcclxuICB7ICAgaGVpZ2h0OiA0MDBweDsgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDUyLCA0MSwgNDksIDAuODMpIDE1MHB4LCByZ2JhKDY2LCA2MywgNjUsIDAuNjgpIDEwMCUpO1xyXG4gIH1cclxuICAudzMtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVxyXG4gIC53My1ibG9ja3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9XHJcbiAgLnczLXNob3d7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9Il19 */";
    /***/
  },

  /***/
  "./src/app/movie-details/movie-details.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/movie-details/movie-details.component.ts ***!
    \**********************************************************/

  /*! exports provided: MovieDetailsComponent */

  /***/
  function srcAppMovieDetailsMovieDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function () {
      return MovieDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MovieDetailsComponent = /*#__PURE__*/function () {
      function MovieDetailsComponent(http, storage, router) {
        _classCallCheck(this, MovieDetailsComponent);

        this.http = http;
        this.storage = storage;
        this.router = router;
        this.trending();
      }

      _createClass(MovieDetailsComponent, [{
        key: "trending",
        value: function trending() {
          var _this13 = this;

          this.storage.Gettranding().subscribe(function (response) {
            _this13.trandng = response['results'];
            debugger;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.storage.getOption();

          if (this.id.toString.length == 0) {
            this.router.navigateByUrl('/home');
          }

          this.GetAllData();
        }
      }, {
        key: "GetAllData",
        value: function GetAllData() {
          var _this14 = this;

          this.storage.getreview(this.id).subscribe(function (response) {
            _this14.reviews = response['results'];

            _this14.getVideosOfMovies();
          });
          this.storage.getList(this.id).subscribe(function (response) {
            _this14.movies = response;
            _this14.img = "";
            _this14.img = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + _this14.movies.poster_path;

            _this14.GetRecommandation();

            if (_this14.movies == undefined) {
              _this14.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
            } else {
              _this14.imgBaseUrl = _this14.storage.getImageBaseUrl();
              _this14.posterUrl = _this14.imgBaseUrl + 'w154' + _this14.movies.poster_path;
            }
          });
        }
      }, {
        key: "GetRecommandation",
        value: function GetRecommandation() {
          var _this15 = this;

          this.storage.Getrecommendations(this.id).subscribe(function (response) {
            _this15.recomandation = response['results'];
          });
        }
      }, {
        key: "getVideosOfMovies",
        value: function getVideosOfMovies() {
          var _this16 = this;

          this.storage.GetMoviesVideos(this.id).subscribe(function (response) {
            var data1 = response['results'];

            if (data1.length > 0) {
              _this16.movivideos = [];
              _this16.movivideos = data1.find(function (tree) {
                return tree.type === "Trailer";
              });
              document.getElementById("myIframe").setAttribute("src", "https://www.youtube-nocookie.com/embed/" + _this16.movivideos.key);
            }
          });
        }
      }, {
        key: "GotoPgae",
        value: function GotoPgae(values) {
          debugger;
          this.reviews = [];
          this.movivideos = [];
          this.movies = [];
          this.recomandation = [];
          this.id = values;
          this.GetAllData();
        }
      }, {
        key: "myFunction",
        value: function myFunction(id) {
          var x = document.getElementById(id);

          if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
          } else {
            x.className = x.className.replace(" w3-show", "");
          }
        }
      }]);

      return MovieDetailsComponent;
    }();

    MovieDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["MovieStoredService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movie-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-details/movie-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-details.component.css */
      "./src/app/movie-details/movie-details.component.css"))["default"]]
    })], MovieDetailsComponent);
    /***/
  },

  /***/
  "./src/app/register/index.ts":
  /*!***********************************!*\
    !*** ./src/app/register/index.ts ***!
    \***********************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"];
    });
    /***/

  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false; // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            alert("Registration successful");

            _this17.router.navigate(['/login']);
          }, function (error) {
            alert(error);
            _this17.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/MovieStored.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/MovieStored.service.ts ***!
    \*************************************************/

  /*! exports provided: MovieStoredService */

  /***/
  function srcAppServicesMovieStoredServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieStoredService", function () {
      return MovieStoredService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MovieStoredService = /*#__PURE__*/function () {
      function MovieStoredService(http) {
        _classCallCheck(this, MovieStoredService);

        this.http = http;
        this.apiKey = '?api_key=aa171d0238fb60cb0ad2c9444c0cacc5';
        this.apiUrl = 'https://api.themoviedb.org/';
        this.imageBaseurl = 'https://image.tmdb.org/t/p/';
        this.data = {};
      }

      _createClass(MovieStoredService, [{
        key: "setOption",
        value: function setOption(value) {
          this.data = value;
        }
      }, {
        key: "getOption",
        value: function getOption() {
          return this.data;
        }
      }, {
        key: "getList",
        value: function getList(category) {
          return this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey);
        }
      }, {
        key: "getreview",
        value: function getreview(category) {
          return this.http.get(this.apiUrl + '3/movie/' + category + '/reviews' + this.apiKey);
        }
      }, {
        key: "Getrecommendations",
        value: function Getrecommendations(category) {
          return this.http.get(this.apiUrl + '3/movie/' + category + '/recommendations' + this.apiKey);
        }
      }, {
        key: "Gettranding",
        value: function Gettranding() {
          return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=aa171d0238fb60cb0ad2c9444c0cacc5');
        }
      }, {
        key: "GetMoviesVideos",
        value: function GetMoviesVideos(category) {
          return this.http.get(this.apiUrl + '3/movie/' + category + '/videos' + this.apiKey);
        } // getSimilar(category) {
        //   https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=aa171d0238fb60cb0ad2c9444c0cacc5&language=en-US&page=1
        //   return this.http.get(this.apiUrl + '3/movie/similar/' + category + this.apiKey);
        // }

      }, {
        key: "getUpComingMovies",
        value: function getUpComingMovies() {
          return this.http.get(this.apiUrl + '3/movie/upcoming/' + this.apiKey + '&page=1&language=en&');
        }
      }, {
        key: "getImageBaseUrl",
        value: function getImageBaseUrl() {
          return this.imageBaseurl;
        }
      }, {
        key: "search",
        value: function search(query) {
          query = this.convertToSlug(query);
          return this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&query=' + query);
        }
      }, {
        key: "convertToSlug",
        value: function convertToSlug(string) {
          string = string.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '+').replace(/-+/g, '+');
          return string;
        }
      }]);

      return MovieStoredService;
    }();

    MovieStoredService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    MovieStoredService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], MovieStoredService);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(router) {
        var _this18 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false; // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (_this18.keepAfterRouteChange) {
              // only keep for a single route change
              _this18.keepAfterRouteChange = false;
            } else {
              // clear alert message
              _this18.clear();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "getAlert",
        value: function getAlert() {
          return this.subject.asObservable();
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          // clear by calling subject.next() without parameters
          this.subject.next();
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this19 = this;

          return this.http.post("/users/authenticate", {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this19.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: AlertService, AuthenticationService, UserService, MoviesService, MovieStoredService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
    });
    /* harmony import */


    var _movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./movies.service */
    "./src/app/services/movies.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MoviesService", function () {
      return _movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"];
    });
    /* harmony import */


    var _MovieStored_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./MovieStored.service */
    "./src/app/services/MovieStored.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MovieStoredService", function () {
      return _MovieStored_service__WEBPACK_IMPORTED_MODULE_5__["MovieStoredService"];
    });
    /***/

  },

  /***/
  "./src/app/services/movies.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/movies.service.ts ***!
    \********************************************/

  /*! exports provided: MoviesService */

  /***/
  function srcAppServicesMoviesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesService", function () {
      return MoviesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MoviesService = /*#__PURE__*/function () {
      function MoviesService() {
        _classCallCheck(this, MoviesService);

        this.listSorted = false;
        this.searchFilter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchFilterEmited$ = this.searchFilter.asObservable();
      }

      _createClass(MoviesService, [{
        key: "emitChange",
        value: function emitChange(change) {
          this.searchFilter.next(change);
        }
      }, {
        key: "sortByPopularity",
        value: function sortByPopularity(list) {
          list.sort(function (a, b) {
            if (a.popularity > b.popularity) {
              return -1;
            }

            if (a.popularity < b.popularity) {
              return 1;
            }

            return 0;
          });
        }
      }, {
        key: "sortList",
        value: function sortList(list) {
          if (!this.listSorted) {
            this.listSorted = true;
            list = list.sort(function (a, b) {
              a.title = a.title.toLowerCase();
              b.title = b.title.toLowerCase();

              if (a.title < b.title) {
                return -1;
              }

              if (a.title > b.title) {
                return 1;
              }

              return 0;
            });
          } else {
            this.listSorted = false;
            list = list.sort(function (a, b) {
              a.title = a.title.toLowerCase();
              b.title = b.title.toLowerCase();

              if (a.title > b.title) {
                return -1;
              }

              if (a.title < b.title) {
                return 1;
              }

              return 0;
            });
          }

          return list;
        }
      }]);

      return MoviesService;
    }();

    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MoviesService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("/users");
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post("/users/register", user);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("/users/".concat(id));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent() {
        _classCallCheck(this, UserProfileComponent);
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/user-profile/user-profile.component.css"))["default"]]
    })], UserProfileComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! E:\testproject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map