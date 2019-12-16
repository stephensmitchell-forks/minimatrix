"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector2_1 = require("./vector2");
var vector3_1 = require("./vector3");
var vector4_1 = require("./vector4");
/** Helpers for common linear algebra functions. */
var LinAlgHelpers = /** @class */ (function () {
    function LinAlgHelpers() {
    }
    /**
     * Builds the outer product from a vector.
     * @param v The vector.
     */
    LinAlgHelpers.getOuterProduct = function (v) {
        var d = v.dimension;
        switch (d) {
            case 2:
                return v.getOuterProduct();
            case 3:
                return v.getOuterProduct();
            case 4:
                return v.getOuterProduct();
            default:
                throw new Error("LinAlgHelpers.getOuterProduct(): vector is not Vector2, Vector3, or Vector4.");
        }
    };
    /**
     * Gets a row from the matrix as a vector.
     * @param m The matrix.
     * @param i The row number (zero-based index).
     */
    LinAlgHelpers.getRow = function (m, i) {
        var d = m.rowDimension;
        switch (d) {
            case 2:
                return m.getRow(i);
            case 3:
                return m.getRow(i);
            case 4:
                return m.getRow(i);
            default:
                throw new Error("LinAlgHelpers.getRow(): row is not Vector2, Vector3, or Vector4.");
        }
    };
    /**
     * Gets a column from the matrix as a vector.
     * @param m The matrix.
     * @param i The column number (zero-based index).
     */
    LinAlgHelpers.getColumn = function (m, i) {
        var d = m.colDimension;
        switch (d) {
            case 2:
                return m.getColumn(i);
            case 3:
                return m.getColumn(i);
            case 4:
                return m.getColumn(i);
            default:
                throw new Error("LinAlgHelpers.getColumn(): column is not Vector2, Vector3, or Vector4.");
        }
    };
    /**
     * Builds a vector of the values.
     * @param a The array with values.
     * @param n The size of the vector.
     * @param offset The offset index of the array.
     */
    LinAlgHelpers.vectorFromValues = function (a, n, offset) {
        if (offset === void 0) { offset = 0; }
        if (n === 2) {
            var v0 = a[offset];
            var v1 = a[offset + 1];
            return new vector2_1.Vector2(v0, v1);
        }
        else if (n === 3) {
            var v0 = a[offset];
            var v1 = a[offset + 1];
            var v2 = a[offset + 2];
            return new vector3_1.Vector3(v0, v1, v2);
        }
        else if (n === 4) {
            var v0 = a[offset];
            var v1 = a[offset + 1];
            var v2 = a[offset + 2];
            var v3 = a[offset + 3];
            return new vector4_1.Vector4(v0, v1, v2, v3);
        }
        else {
            throw new Error("LinAlgHelpers.vectorFromValues(): vector size is not Vector2, Vector3, or Vector4.");
        }
    };
    /**
     * Transforms (multiplies) a vector by a matrix.
     * @param m The matrix to transform the vector by.
     * @param v The vector to transform.
     */
    LinAlgHelpers.transformVector = function (m, v) {
        if (m.rowDimension !== v.dimension) {
            throw new Error("LinAlgHelpers.transformVector(): matrix row and vector dimensions are not equal.");
        }
        switch (m.rowDimension) {
            case 2:
                return m.transformVector2(v.clone());
            case 3:
                return m.transformVector3(v.clone());
            case 4:
                return m.transformVector4(v.clone());
            default:
                throw new Error("LinAlgHelpers.transformVector(): vector not a Vector2, Vector3, or Vector4.");
        }
    };
    return LinAlgHelpers;
}());
exports.LinAlgHelpers = LinAlgHelpers;
//# sourceMappingURL=helpers.js.map