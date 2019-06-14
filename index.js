class JsProxy {

    /**
     * If object has path else return default
     * @param $data
     * @param $default
     * @return {{}|*}
     */
    static exists($data, $default = undefined) {
        if ($data === undefined) $data = {};

        return new Proxy($data, {
            get(target, name, receiver) {
                let rv = Reflect.get(target, name, receiver);
                if (typeof rv === 'undefined') {
                    rv = $default;
                }
                return rv;
            }
        })
    }

    /**
     * If object has path else return default
     * @param $data
     * @param $default
     * @return {{}|*}
     */
    static optional($data, $default = undefined) {
        return JsProxy.exists($data, $default);
    }

    /**
     *  If function exists or return default.
     * @param $data
     * @param $default
     * @return {function(): *}
     */
    static fnExists($data, $default = undefined) {
        let $return = () => $default;
        if (typeof $default === 'function') {
            $return = $default;
        }

        if ($data === undefined) $data = {};

        return new Proxy($data, {
            get(target, name, receiver) {
                let rv = Reflect.get(target, name, receiver);
                if (typeof rv === 'undefined') {
                    rv = $return;
                }
                return rv;
            }
        })
    }

    /**
     *  If function exists or return default.
     * @param $data
     * @param $default
     * @return {function(): *}
     */
    static optionalFn($data, $default = undefined) {
        return JsProxy.fnExists($data, $default);
    }
}

module.exports = JsProxy;
