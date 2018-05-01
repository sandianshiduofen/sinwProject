'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cube = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vertex = require('./Vertex.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cube = exports.Cube = function () {
    function Cube(center, side) {
        _classCallCheck(this, Cube);

        //中心
        this.center = center;

        //边长
        this.side = side;

        //半径
        var d = side / 2;

        //8个点
        this.vertices = [new _Vertex.Vertex(center.x - d, center.y - d, center.z + d), new _Vertex.Vertex(center.x - d, center.y - d, center.z - d), new _Vertex.Vertex(center.x + d, center.y - d, center.z - d), new _Vertex.Vertex(center.x + d, center.y - d, center.z + d), new _Vertex.Vertex(center.x + d, center.y + d, center.z + d), new _Vertex.Vertex(center.x + d, center.y + d, center.z - d), new _Vertex.Vertex(center.x - d, center.y + d, center.z - d), new _Vertex.Vertex(center.x - d, center.y + d, center.z + d)];

        //6个面
        this.faces = [[this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]], [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]], [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]], [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]], [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]], [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]];
    }

    /**
     * 将自己立方体渲染在canvas上(Y轴垂直于屏幕).
     * @param ctx canvas对象
     * @param dx canvas起点相对立方体中心的x距离
     * @param dy canvas起点相对立方体中心的y距离
     */


    _createClass(Cube, [{
        key: 'render',
        value: function render(ctx, dx, dy) {
            ctx.clearRect(0, 0, 2 * dx, 2 * dy);
            var faces = this.faces,
                len = this.faces.length;
            //遍历6个面
            for (var j = 0; j < len; ++j) {
                var face = faces[j];
                var P = this.project(face[0]);
                ctx.beginPath();
                ctx.moveTo(P.x + dx, P.y + dy);
                //连接4个点
                for (var k = 1, n_vertices = face.length; k < n_vertices; ++k) {
                    P = this.project(face[k]);
                    ctx.lineTo(P.x + dx, P.y + dy);
                }
                ctx.closePath();
                ctx.stroke();
                ctx.fill();
            }
        }

        /**
         * 已Y轴为垂线将三维平面的点映射到二维平面.
         * @param vertex vertex
         */

    }, {
        key: 'project',
        value: function project(vertex) {
            return new _Vertex.Vertex(vertex.x, vertex.z);
        }
    }]);

    return Cube;
}();
//# sourceMappingURL=Cube.js.map