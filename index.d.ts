declare class JsProxy {
    /**
     * If object has path else return default
     * @param $data
     * @param $default
     */
    static exists: (variable: any, $default: any) => any;

    /**
     * If object has path else return default
     * @param $data
     * @param $default
     * @alias JsProxy.exists
     */
    static optional: (variable: any, $default: any) => any;

    /**
     *  If function exists or return default.
     * @param $data
     * @param $default
     * @return {function(): *}
     */
    static fnExists: (variable: any, $default: any) => () => any;


    /**
     *  If function exists or return default.
     * @param $data
     * @param $default
     * @alias JsProxy.fnExists
     */
    static optionalFn: (variable: any, $default: any) => () => any;
}

export = JsProxy;
