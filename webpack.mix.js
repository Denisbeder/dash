const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/* mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]); */

mix.js("resources/js/index.js", "public/js/app.js").react().sourceMaps();

const appHost = new URL(process.env.APP_URL).host;
mix.browserSync({
    open: false,
    proxy: appHost, // replace with your web server container
    host: `app.${appHost}`,
});

mix.disableNotifications();