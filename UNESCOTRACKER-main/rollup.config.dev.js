    import buildConfig from './rollup.config.js';
    import serve from 'rollup-plugin-serve';

    // use first output of first config block for dev
    const config = Array.isArray(buildConfig) ? buildConfig[0] : buildConfig;
    Array.isArray(config.output) && (config.output = config.output[0]);

    // Añadir el plugin de servidor para el desarrollo
    config.plugins = [
    ...(config.plugins || []),
    serve({
        open: true, // Abre el navegador automáticamente
        contentBase: '.', // Directorio base desde el cual servir los archivos
        host: 'localhost',
        port: 3000, // Puedes cambiar este puerto si 3000 ya está en uso
    })
    ];

    export default config;
