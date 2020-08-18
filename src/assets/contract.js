const contractHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contrato Compra-Venta</title>
        <link rel="stylesheet" href="https://unpkg.com/gutenberg-css@0.6">
        <link rel="stylesheet" href="https://unpkg.com/gutenberg-css@0.6/dist/themes/modern.min.css">
    </head>
    <body>
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