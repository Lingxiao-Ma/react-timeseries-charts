"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
var style_1 = require("./style");
var Baseline = (function (_super) {
    __extends(Baseline, _super);
    function Baseline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Baseline.prototype.render = function () {
        if (!this.props.yScale || _.isUndefined(this.props.value)) {
            return null;
        }
        var y = this.props.yScale(this.props.value);
        var transform = "translate(0 " + y + ")";
        var textAnchor;
        var textPositionX;
        var pts = [];
        var textPositionY = -3;
        if (this.props.position === "left") {
            textAnchor = "start";
            textPositionX = 5;
        }
        if (this.props.position === "right") {
            textAnchor = "end";
            textPositionX = this.props.width - 5;
        }
        pts.push("0 0");
        pts.push(this.props.width + " 0");
        var points = pts.join(" ");
        var labelStyle = _.merge(style_1.baselineDefaultStyle.label, this.props.style.label ? this.props.style.label : {});
        var lineStyle = _.merge(style_1.baselineDefaultStyle.line, this.props.style.line ? this.props.style.line : {});
        return (React.createElement("g", { className: "baseline", transform: transform },
            React.createElement("polyline", { points: points, style: lineStyle }),
            React.createElement("text", { style: labelStyle, x: textPositionX, y: textPositionY, textAnchor: textAnchor }, this.props.label)));
    };
    Baseline.defaultProps = {
        value: 0,
        label: "",
        position: "left",
        style: style_1.baselineDefaultStyle
    };
    return Baseline;
}(React.Component));
exports.Baseline = Baseline;
//# sourceMappingURL=Baseline.js.map