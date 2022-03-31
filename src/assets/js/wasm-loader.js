const WasmLoader = async (wasmModuleUrl, importObject) => {
    let response = undefined;

    if (WebAssembly.instantiateStreaming) {
        response = await WebAssembly.instantiateStreaming(
            fetch(wasmModuleUrl),
            importObject
        );
    } else {
        const fetchAndInstantiateTask = async () => {
            const wasmArrayBuffer = await fetch(wasmModuleUrl).then(response =>
                response.arrayBuffer()
            );
            return WebAssembly.instantiate(wasmArrayBuffer, importObject);
        };
        response = await fetchAndInstantiateTask();
    }

    return response;
};

export default WasmLoader