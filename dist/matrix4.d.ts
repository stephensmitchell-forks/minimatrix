import { Vector3 } from './vector3';
import { Vector4 } from './vector4';
import { MathMatrix } from './interfaces';
export declare class Matrix4 implements MathMatrix {
    private _elements;
    private _tempElements;
    readonly rows: number;
    readonly columns: number;
    readonly E0: Vector4;
    readonly E1: Vector4;
    readonly E2: Vector4;
    readonly E3: Vector4;
    constructor();
    set(i: number, j: number, value: number): this;
    get(i: number, j: number): number;
    /**
   * Gets the row at the specified index of the matrix.
   * @param {number} i The index of the row (0-3).
   * @returns {Vector4} The vector with the row values.
   */
    getRow(i: number): Vector4;
    /**
     * Gets the column at the specified index of the matrix.
     * @param {number} i The index of the column (0-3).
     * @returns {Vector4} The vector with the column values.
     */
    getColumn(i: number): Vector4;
    /** Sets the matrix values in a row-major ordered fashion. */
    setElements(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): this;
    identity(): this;
    clone(): this;
    copy(m: this): this;
    copyPosition(m: this): this;
    /**
   * Adds a given matrix to this matrix.
   * @param {Matrix4} m The given matrix.
   */
    add(m: this): this;
    /**
   * Adds 2 matrices together and optionally scales the result: a + alpha * b.
   * @param {Matrix4} a The first matrix.
   * @param {Matrix4} b The second matrix.
   * @param {number} scalar The number to scale the result by.
   */
    addMatrices(a: this, b: this, scalar?: number): this;
    /**
   * Computes the outer product of two vectors (a*b^T).
   * @param {Vector4} a The first vector.
   * @param {Vector4} b The second vector.
   * @param {number} scalar The number to scale the matrix by (defaults to 1).
   */
    setOuterProduct(a: Vector4, b: Vector4, scalar?: number): this;
    /**
     * Adds the outer product of two vectors alpha*(a*b^T) to this matrix.
     * @param a The first vector.
     * @param b The second vector.
     * @param scalar The number to scale the matrix by (defaults to 1).
     */
    addOuterProduct(a: Vector4, b: Vector4, scalar?: number): this;
    /**
   * Swaps rows in-place in the matrix. Zero is the first row.
   */
    swapRows(i: number, j: number): this;
    /**
     * Swaps columns in-place in the matrix. Zero is the first column.
     */
    swapColumns(i: number, j: number): this;
    multiply(m: this): this;
    premultiply(m: this): this;
    /**
   * Left-multiplies a vector by a 4x4 matrix (result is x^T*A).
   * @param {Vector4} a The vector to transform.
   * @returns {Vector4} The original vector, transformed.
   */
    transformRowVector(v: Vector4): Vector4;
    /**
   * Right-multiplies a vector by a 4x4 matrix (result is Ax).
   * @param {Vector4} a The vector to transform.
   * @returns {Vector4} The original vector, transformed.
   */
    transformVector(v: Vector4): Vector4;
    multiplyMatrices(a: this, b: this): this;
    multiplyScalar(s: number): this;
    determinant(): number;
    trace(): number;
    transpose(): this;
    setPosition(x: number, y: number, z: number): this;
    adjugate(): this;
    getAdjugate(matrix: this): this;
    /**
   * Inverts this matrix.
     * @param singularTol The tolerance under which the determinant is considered zero.
   * @param throwOnDegenerate Throws an Error() if true, prints console warning if not.
   */
    invert(singularTol?: number, throwOnDegenerate?: boolean): this;
    getInverse(m: this, throwOnDegenerate: boolean, singularTol?: number): this;
    /** Scales a 3D projective transformation matrix. */
    scale(v: Vector3): this;
    makeTranslation(x: number, y: number, z: number): this;
    makeRotationX(theta: number): this;
    makeRotationY(theta: number): this;
    makeRotationZ(theta: number): this;
    makeRotationAxis(axis: Vector3, angle: number): this;
    makeScale(x: number, y: number, z: number): this;
    makeShear(x: number, y: number, z: number): this;
    fromArray(array: number[], offset?: number): this;
    toArray(array?: number[], offset?: number): number[];
    /**
   * Pretty prints this matrix.
   */
    prettyPrint(): string;
    applyFunction(fn: (elements: number[], rowDim: number, colDim: number) => void): void;
}
