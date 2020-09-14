const contractHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contrato Compra-Venta</title>
        <style>
            html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after,p:first-letter,div:first-letter,blockquote:first-letter,li:first-letter,p:first-line,div:first-line,blockquote:first-line,li:first-line{background:transparent !important;box-shadow:none !important;text-shadow:none !important}html{font-size:16px;margin:0;padding:0}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:#fff !important;color:#000 !important;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.5;margin:0 auto;text-rendering:optimizeLegibility}p,blockquote,table,ul,ol,dl{margin-bottom:1.5rem;margin-top:0}p:last-child,ul:last-child,ol:last-child{margin-bottom:0}h1,h2,h3,h4,h5,h6{color:#000;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.2;margin-bottom:.75rem;margin-top:0}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}h4{font-size:1.5rem}h5{font-size:1.25rem}h6{font-size:1rem}a,a:visited{color:#000;text-decoration:underline;word-wrap:break-word}table{border-collapse:collapse}thead{display:table-header-group}table,th,td{border-bottom:1px solid #000}td,th{padding:8px 16px;page-break-inside:avoid}code,pre,kbd{border:1px solid #bbb;font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:85%}code,kbd{padding:3px}pre{margin-bottom:1.5rem;padding:10px 12px}pre code,pre kbd{border:0}::-webkit-input-placeholder{color:transparent}:-moz-placeholder{color:transparent}::-moz-placeholder{color:transparent}:-ms-input-placeholder{color:transparent}blockquote{border:0;border-left:5px solid #bbb;margin-left:1px;padding:12px 1.5rem}[dir='rtl'] blockquote{border-left:0;border-right:5px solid #bbb;margin-left:0;margin-right:1px}blockquote:first-child{margin-top:0}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer{display:block;font-size:80%}img{border:0;display:block;max-width:100% !important;vertical-align:middle}hr{border:0;border-bottom:2px solid #bbb;height:0;margin:2.25rem 0;padding:0}dt{font-weight:bold}dd{margin:0;margin-bottom:.75rem}abbr[title],acronym[title]{border:0;text-decoration:none}table,blockquote,pre,code,figure,li,hr,ul,ol,a,tr{page-break-inside:avoid}h2,h3,h4,p,a{orphans:3;widows:3}h1,h2,h3,h4,h5,h6{page-break-after:avoid;page-break-inside:avoid}h1+p,h2+p,h3+p{page-break-before:avoid}img{page-break-after:auto;page-break-before:auto;page-break-inside:avoid}pre{white-space:pre-wrap !important;word-wrap:break-word}body{padding-bottom:2.54cm;padding-left:1.8cm;padding-right:1.8cm;padding-top:2.54cm}a[href^='http']:after,a[href^='ftp']:after{content:" (" attr(href) ")";font-size:80%}a[href$='.jpg']:after,a[href$='.jpeg']:after,a[href$='.gif']:after,a[href$='.png']:after{display:none}abbr[title]:after,acronym[title]:after{content:" (" attr(title) ")"}.page-break,.break-before,.page-break-before{page-break-before:always}.break-after,.page-break-after{page-break-after:always}.avoid-break-inside{page-break-inside:avoid}.no-print{display:none}a.no-reformat:after{content:''}abbr[title].no-reformat:after,acronym[title].no-reformat:after{content:''}.no-reformat abbr:after,.no-reformat acronym:after,.no-reformat a:after{content:''}
        </style>
        <style>
            h1,h2,h3,h4,h5,h6{font-family:'Montserrat', 'Arial Black', 'Arial Bold', 'Helvetica Neue', Helvetica, sans-serif}body{font-family:'Open Sans', 'Helvetica Neue', Helvetica, arial, sans-serif;text-align:justify}h1{font-weight:700;letter-spacing:-1px;text-align:center}h2{letter-spacing:-1px}h2,h3,h4,h5{color:#262626}pre,code{border:0}pre,code,blockquote{background:#f8f8f9}blockquote{margin-left:1.5rem;margin-right:1.5rem}
        </style>
        <style>
            .logo {
                display: block;
                position: absolute;
                top: 32px;
                left: 32px;
                width: 160px;
            }
            h1 {
                margin-top: 40px;
            }
        </style>
    </head>
    <body>
        <img src="https://procesos-app.s3.amazonaws.com/imagenes/tienda_friki_logo.png" class="logo"/>
        <h1>Contrato Compra-Venta</h1>
        <p style="text-align: right;">En Quito, a <%= currentDate %></p>
        <h4 style="text-align: center; text-decoration: underline;">REUNIDOS</h4>
        <p>De una parte, como LA PARTE VENDEDORA:<br>
            Sr(a). <%= user.name %>, mayor de edad, con cédula de identidad no. <%= user.idNumber %>.</p>
        <p>De otra parte, como LA PARTE COMPRADORA:<br>
            Tienda Friki S.A., empresa legalmente constituida en Ecuador, con RUC no. 1723732762001.</p>
        <p>Ambas partes contratantes se reconocen capacidad legal para este acto, e intervienen en su propio nombre y
            derecho.</p>
        <h4 style="text-align: center; text-decoration: underline;">EXPONEN</h4>
        <p>Que ambas partes han convenido formalizar contrato de compraventa de la siguiente consola:</p>
        <table style="margin: 0 auto 32px;">
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Número de serie</th>
                    <th>Años de uso</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><%= offer.type %></td>
                    <td><%= contract.serialNo %></td>
                    <td><%= offer.age %></td>
                </tr>
            </tbody>
        </table>
        <p>El vendedor vende al comprador la consola de su propiedad anteriormente especificada por la cantidad
            de <%= offer.price %> dólares americanos.</p>
        <br>
        <br>
        <div style="display: flex; justify-content: space-evenly;">
            <div style="text-align: center">
                <p style="border-top: 1px solid #000; padding: 8px;"><%= user.name %><br>C.I. <%= user.idNumber %></p>
            </div>
            <div style="text-align: center">
                <p style="border-top: 1px solid #000; padding: 8px;">Tienda Friki S.A.<br>R.U.C. 1723732762001</p>
            </div>
        </div>
    </body>
</html>
`;

export default contractHTML;